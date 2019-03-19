import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
import esprima from 'esprima';
export var WebWorkerRunner = function WebWorkerRunner() {
  _classCallCheck(this, WebWorkerRunner);

  // eslint-disable-next-line
  function workerCode() {
    onmessage =
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _regeneratorRuntime.mark(function _callee(_ref2) {
        var data, code;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = _ref2.data;
                code = data.code;
                delete data.code;
                _context.prev = 3;
                _context.next = 6;
                return self.eval(code);

              case 6:
                data.result = _context.sent;
                postMessage(JSON.stringify(data));
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                // console.error('WebWorkerRunner error:', ex, '\r\ncode: ', code)
                data.error = _context.t0.stack || _context.t0.toString();
                data.errorType = _context.t0.constructor ? _context.t0.constructor.name : 'unknown';
                postMessage(JSON.stringify(data));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[3, 10]]);
      }));

      return function onmessage(_x) {
        return _ref3.apply(this, arguments);
      };
    }();
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
          data.errorType = ex.constructor ? ex.constructor.name : 'unknown';
          postMessage(JSON.stringify(data));
        });
      }).then(function () {});
    };
  }
  /* eslint-enable */


  var blob = new Blob(["\"use strict\"; (".concat(workerCodeBabelify.toString(), ")();")], {
    type: 'application/javascript'
  });
  var worker = new Worker(URL.createObjectURL(blob));

  function createOutsidePromise() {
    var promiseResolve;
    var promiseReject;
    var promise = new Promise(function (resolve, reject) {
      promiseResolve = resolve;
      promiseReject = reject;
    });
    promise.resolve = promiseResolve;
    promise.reject = promiseReject;
    return promise;
  }

  var nextMessageId = 0;
  var requests = {};
  this.run = run;

  function run(codeOrFunc) {
    if (!codeOrFunc) {
      throw new Error('Argument func is empty');
    }

    var messageId = nextMessageId++;
    var request = createOutsidePromise();
    requests[messageId] = request;
    var code = typeof codeOrFunc === 'function' ? "(".concat(codeOrFunc.toString(), ")();") : "".concat(codeOrFunc); // const exVarName = `ex${(Number.MAX_SAFE_INTEGER * Math.random()).toString(36)}`
    // code = `try { ;${code}; } catch (${exVarName}) { throw new Error(${exVarName}.stack || ${exVarName}.toString()) }`

    request.code = code;
    worker.postMessage({
      messageId: messageId,
      code: code
    });
    return request;
  }

  function emitResult(_ref4) {
    var messageId = _ref4.messageId,
        error = _ref4.error,
        errorType = _ref4.errorType,
        result = _ref4.result;
    var request = requests[messageId];

    if (!request) {
      return;
    }

    delete requests[messageId];

    if (error) {
      if (errorType === 'SyntaxError') {
        try {
          request.reject(new Error("".concat(error.stack || error, "\r\n\r\n") + "Parse code report:\r\n".concat(esprima.parseScript(request.code))));
        } catch (ex) {
          request.reject(ex);
        }
      } else {
        request.reject(error);
      }
    } else {
      request.resolve(result);
    }
  }

  worker.onmessage = function (e) {
    emitResult(JSON.parse(e.data));
  };

  worker.onerror = function (e) {
    for (var messageId in requests) {
      if (Object.prototype.hasOwnProperty.call(requests, messageId)) {
        emitResult({
          messageId: messageId,
          error: e
        });
      }
    }
  };
};
export default {
  WebWorkerRunner: WebWorkerRunner
};