import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _classCallCheck from "@babel/runtime/helpers/classCallCheck";
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
                postMessage(data);
                _context.next = 15;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](3);
                console.error('WebWorkerRunner error:', _context.t0, '\r\ncode: ', code);
                data.error = _context.t0.stack || _context.t0.toString();
                postMessage(data);

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


  var blob = new Blob(["(".concat(workerCodeBabelify.toString(), ")();")], {
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
    worker.postMessage({
      messageId: messageId,
      code: typeof codeOrFunc === 'function' ? "(".concat(codeOrFunc.toString(), ")();") : "(".concat(codeOrFunc, ")")
    });
    return request;
  }

  function emitResult(_ref4) {
    var messageId = _ref4.messageId,
        error = _ref4.error,
        result = _ref4.result;
    var request = requests[messageId];

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