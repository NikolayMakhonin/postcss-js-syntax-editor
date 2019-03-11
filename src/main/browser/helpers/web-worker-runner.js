import esprima from 'esprima'

export class WebWorkerRunner {
	constructor() {
		// eslint-disable-next-line
		function workerCode() {
			onmessage = async function ({data}) {
				const {code} = data
				delete data.code
				try {
					data.result = await self.eval(code)
					postMessage(JSON.stringify(data))
				} catch (ex) {
					// console.error('WebWorkerRunner error:', ex, '\r\ncode: ', code)
					data.error = ex.stack || ex.toString()
					data.errorType = ex.constructor ? ex.constructor.name : 'unknown'
					postMessage(JSON.stringify(data))
				}
			}
		}

		/* eslint-disable */
		// use: https://babeljs.io/en/repl.html#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=JAj2DsFsFMGdYIYHNoAIC8qGwJ7gMaoBmArgQC4CWEqAFAN4AmC5CAvgJSr0BQII-CLHLdBjaGwypmrPv3EAbaOTQyEAOjHQ5IcgCcc3HSDXq9cEgpGYEAdwSURsaAqLroANwQLaWjseAAB1BhAFk4RBRaACkAZQB5ADl1YT1KcCRKIhxaNQ5_fmBJfBZ8AAs6aAAPLl5C4EFwWFAldz09UD1aAHIAdWgAI17OgGtoPQAlMnBx1HGOvQAuboAaOaq17oAdPS2CUHFF1FXUPwDTec6papTWfBHUAB9H9fVyUFj9dKRaAsKL9qdN44QJoTA3RqpEj4d56AD86nACBgAWCYQiyGgMQSyVS3yyOTyfxAbB0pKAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2&prettier=false&targets=&version=7.3.4
		// and: https://xem.github.io/terser-online/
		function workerCodeBabelify() {
			onmessage = function onmessage(_ref) {
				var data, code;
				return Promise.resolve().then(function () {
					data = _ref.data;
					code = data.code;
					delete data.code;
					return Promise.resolve().then(function () {
						return self.eval(code);
					}).then(function (_resp) {
						data.result = _resp;
						postMessage(JSON.stringify(data));
					}).catch(function (ex) {
						// console.error('WebWorkerRunner error:', ex, '\r\ncode: ', code);
						data.error = ex.stack || ex.toString();
						data.errorType = ex.constructor ? ex.constructor.name : 'unknown'
						postMessage(JSON.stringify(data));
					});
				}).then(function () {});
			};
		}
		/* eslint-enable */

		const blob = new Blob([`"use strict"; (${workerCodeBabelify.toString()})();`], {type: 'application/javascript'})
		const worker = new Worker(URL.createObjectURL(blob))

		function createOutsidePromise() {
			let promiseResolve
			let promiseReject
			const promise = new Promise((resolve, reject) => {
				promiseResolve = resolve
				promiseReject = reject
			})
			promise.resolve = promiseResolve
			promise.reject = promiseReject
			return promise
		}

		let nextMessageId = 0
		const requests = {}

		this.run = run
		function run(codeOrFunc) {
			if (!codeOrFunc) {
				throw new Error('Argument func is empty')
			}

			const messageId = nextMessageId++
			const request = createOutsidePromise()
			requests[messageId] = request

			const code = typeof codeOrFunc === 'function'
				? `(${codeOrFunc.toString()})();`
				: `${codeOrFunc}`

			// const exVarName = `ex${(Number.MAX_SAFE_INTEGER * Math.random()).toString(36)}`
			// code = `try { ;${code}; } catch (${exVarName}) { throw new Error(${exVarName}.stack || ${exVarName}.toString()) }`

			request.code = code

			worker.postMessage({
				messageId,
				code
			})

			return request
		}

		function emitResult({
			messageId, error, errorType, result
		}) {
			const request = requests[messageId]
			if (!request) {
				return
			}
			delete requests[messageId]
			if (error) {
				if (errorType === 'SyntaxError') {
					try {
						request.reject(new Error(`${error.stack || error}\r\n\r\n`
							+ `Parse code report:\r\n${esprima.parseScript(request.code)}`))
					} catch (ex) {
						request.reject(ex)
					}
				} else {
					request.reject(error)
				}
			} else {
				request.resolve(result)
			}
		}

		worker.onmessage = function (e) {
			emitResult(JSON.parse(e.data))
		}

		worker.onerror = function (e) {
			for (const messageId in requests) {
				if (Object.prototype.hasOwnProperty.call(requests, messageId)) {
					emitResult({
						messageId,
						error: e
					})
				}
			}
		}
	}
}

export default {
	WebWorkerRunner
}
