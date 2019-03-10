"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WebWorkerRunner = void 0;

class WebWorkerRunner {
  constructor() {
    // eslint-disable-next-line
    function workerCode() {
      onmessage = async function ({
        data
      }) {
        const code = data.code;
        delete data.code;

        try {
          data.result = await self.eval(code);
          postMessage(data);
        } catch (ex) {
          console.error('WebWorkerRunner error:', ex, '\r\ncode: ', code);
          data.error = ex.stack || ex.toString();
          postMessage(data);
        }
      };
    }
    /* eslint-disable */
    // use: https://babeljs.io/en/repl.html#?babili=false&browsers=&build=&builtIns=false&spec=false&loose=false&code_lz=PYOwtgpgzlCGDmEAEBeJsoE8QGMkDMBXXAFwEtQkAKCASiQG8AoJVpHUKEpSGBCAJIATVEggA6IbBKwA2gAYAuizYcQXdsCHI0EqTNkBGZWyQkATpkYrTrAPR2xUADZkQJALRCycAEbOIDxAIAA9PV2CkEGAPCAA3WGcbWzUNc2hCZ240WAB3WDJuWQByeMTixSoObVpk0wAHYC4AWWg4RCpedsEhABoozOd-9KhM7gB-JBGx8RJgAGULN3gqegAuKYys2tMAX3ZpHAALalD6Zls2Rpa2_k7bxGF-0PEuWBwAayQAH2-xENmCyWIBWtH6IEGOzYuyYMKAA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=es2015%2Creact%2Cstage-2%2Cenv&prettier=false&targets=&version=7.3.4
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
            postMessage(data);
          }).catch(function (ex) {
            console.error('WebWorkerRunner error:', ex, '\r\ncode: ', code);
            data.error = ex.stack || ex.toString();
            postMessage(data);
          });
        }).then(function () {});
      };
    }
    /* eslint-enable */


    const blob = new Blob([`(${workerCodeBabelify.toString()})();`], {
      type: 'application/javascript'
    });
    const worker = new Worker(URL.createObjectURL(blob));

    function createOutsidePromise() {
      let promiseResolve;
      let promiseReject;
      const promise = new Promise((resolve, reject) => {
        promiseResolve = resolve;
        promiseReject = reject;
      });
      promise.resolve = promiseResolve;
      promise.reject = promiseReject;
      return promise;
    }

    let nextMessageId = 0;
    const requests = {};
    this.run = run;

    function run(codeOrFunc) {
      if (!codeOrFunc) {
        throw new Error('Argument func is empty');
      }

      const messageId = nextMessageId++;
      const request = createOutsidePromise();
      requests[messageId] = request;
      worker.postMessage({
        messageId,
        code: typeof codeOrFunc === 'function' ? `(${codeOrFunc.toString()})();` : `(${codeOrFunc})`
      });
      return request;
    }

    function emitResult({
      messageId,
      error,
      result
    }) {
      const request = requests[messageId];

      if (!request) {
        return;
      }

      delete requests[messageId];

      if (error) {
        request.reject(error);
      } else {
        request.resolve(result);
      }
    }

    worker.onmessage = function (e) {
      emitResult(e.data);
    };

    worker.onerror = function (e) {
      for (const messageId in requests) {
        if (Object.prototype.hasOwnProperty.call(requests, messageId)) {
          emitResult({
            messageId,
            error: e
          });
        }
      }
    };
  }

}

exports.WebWorkerRunner = WebWorkerRunner;
var _default = {
  WebWorkerRunner
};
exports.default = _default;