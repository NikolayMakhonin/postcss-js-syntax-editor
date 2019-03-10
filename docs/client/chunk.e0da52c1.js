import{b as createCommonjsModule,a as _typeof}from"./chunk.da4dee67.js"

;var runtime=createCommonjsModule(function(module){
!function(global){
var undefined$1,Op=Object.prototype,hasOwn=Op.hasOwnProperty,$Symbol="function"==typeof Symbol?Symbol:{},iteratorSymbol=$Symbol.iterator||"@@iterator",asyncIteratorSymbol=$Symbol.asyncIterator||"@@asyncIterator",toStringTagSymbol=$Symbol.toStringTag||"@@toStringTag",runtime=global.regeneratorRuntime
;if(runtime)module.exports=runtime;else{
(runtime=global.regeneratorRuntime=module.exports).wrap=wrap
;var GenStateSuspendedStart="suspendedStart",GenStateSuspendedYield="suspendedYield",GenStateExecuting="executing",GenStateCompleted="completed",ContinueSentinel={},IteratorPrototype={}
;IteratorPrototype[iteratorSymbol]=function(){
return this}
;var getProto=Object.getPrototypeOf,NativeIteratorPrototype=getProto&&getProto(getProto(values([])))
;NativeIteratorPrototype&&NativeIteratorPrototype!==Op&&hasOwn.call(NativeIteratorPrototype,iteratorSymbol)&&(IteratorPrototype=NativeIteratorPrototype)
;var Gp=GeneratorFunctionPrototype.prototype=Generator.prototype=Object.create(IteratorPrototype)
;GeneratorFunction.prototype=Gp.constructor=GeneratorFunctionPrototype,
GeneratorFunctionPrototype.constructor=GeneratorFunction,
GeneratorFunctionPrototype[toStringTagSymbol]=GeneratorFunction.displayName="GeneratorFunction",
runtime.isGeneratorFunction=function(genFun){
var ctor="function"==typeof genFun&&genFun.constructor
;return!!ctor&&(ctor===GeneratorFunction||"GeneratorFunction"===(ctor.displayName||ctor.name))
},runtime.mark=function(genFun){
return Object.setPrototypeOf?Object.setPrototypeOf(genFun,GeneratorFunctionPrototype):(genFun.__proto__=GeneratorFunctionPrototype,
toStringTagSymbol in genFun||(genFun[toStringTagSymbol]="GeneratorFunction")),
genFun.prototype=Object.create(Gp),genFun
},runtime.awrap=function(arg){return{__await:arg}
},defineIteratorMethods(AsyncIterator.prototype),
AsyncIterator.prototype[asyncIteratorSymbol]=function(){
return this
},runtime.AsyncIterator=AsyncIterator,runtime.async=function(innerFn,outerFn,self,tryLocsList){
var iter=new AsyncIterator(wrap(innerFn,outerFn,self,tryLocsList))
;return runtime.isGeneratorFunction(outerFn)?iter:iter.next().then(function(result){
return result.done?result.value:iter.next()})
},defineIteratorMethods(Gp),Gp[toStringTagSymbol]="Generator",
Gp[iteratorSymbol]=function(){return this
},Gp.toString=function(){
return"[object Generator]"
},runtime.keys=function(object){var keys=[]
;for(var key in object)keys.push(key)
;return keys.reverse(),function next(){
for(;keys.length;){var key=keys.pop()
;if(key in object)return next.value=key,next.done=!1,
next}return next.done=!0,next}
},runtime.values=values,Context.prototype={
constructor:Context,reset:function(skipTempReset){
if(this.prev=0,this.next=0,this.sent=this._sent=undefined$1,
this.done=!1,this.delegate=null,
this.method="next",this.arg=undefined$1,this.tryEntries.forEach(resetTryEntry),
!skipTempReset)for(var name in this)"t"===name.charAt(0)&&hasOwn.call(this,name)&&!isNaN(+name.slice(1))&&(this[name]=undefined$1)
},stop:function(){this.done=!0
;var rootRecord=this.tryEntries[0].completion
;if("throw"===rootRecord.type)throw rootRecord.arg
;return this.rval},
dispatchException:function(exception){
if(this.done)throw exception;var context=this
;function handle(loc,caught){
return record.type="throw",record.arg=exception,context.next=loc,
caught&&(context.method="next",
context.arg=undefined$1),!!caught}
for(var i=this.tryEntries.length-1;i>=0;--i){
var entry=this.tryEntries[i],record=entry.completion
;if("root"===entry.tryLoc)return handle("end")
;if(entry.tryLoc<=this.prev){
var hasCatch=hasOwn.call(entry,"catchLoc"),hasFinally=hasOwn.call(entry,"finallyLoc")
;if(hasCatch&&hasFinally){
if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)
;if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)
}else if(hasCatch){
if(this.prev<entry.catchLoc)return handle(entry.catchLoc,!0)
}else{
if(!hasFinally)throw new Error("try statement without catch or finally")
;if(this.prev<entry.finallyLoc)return handle(entry.finallyLoc)
}}}},abrupt:function(type,arg){
for(var i=this.tryEntries.length-1;i>=0;--i){
var entry=this.tryEntries[i]
;if(entry.tryLoc<=this.prev&&hasOwn.call(entry,"finallyLoc")&&this.prev<entry.finallyLoc){
var finallyEntry=entry;break}}
finallyEntry&&("break"===type||"continue"===type)&&finallyEntry.tryLoc<=arg&&arg<=finallyEntry.finallyLoc&&(finallyEntry=null)
;var record=finallyEntry?finallyEntry.completion:{}
;return record.type=type,record.arg=arg,
finallyEntry?(this.method="next",this.next=finallyEntry.finallyLoc,
ContinueSentinel):this.complete(record)},
complete:function(record,afterLoc){
if("throw"===record.type)throw record.arg
;return"break"===record.type||"continue"===record.type?this.next=record.arg:"return"===record.type?(this.rval=this.arg=record.arg,
this.method="return",
this.next="end"):"normal"===record.type&&afterLoc&&(this.next=afterLoc),
ContinueSentinel},finish:function(finallyLoc){
for(var i=this.tryEntries.length-1;i>=0;--i){
var entry=this.tryEntries[i]
;if(entry.finallyLoc===finallyLoc)return this.complete(entry.completion,entry.afterLoc),
resetTryEntry(entry),ContinueSentinel}},
catch:function(tryLoc){
for(var i=this.tryEntries.length-1;i>=0;--i){
var entry=this.tryEntries[i]
;if(entry.tryLoc===tryLoc){
var record=entry.completion
;if("throw"===record.type){var thrown=record.arg
;resetTryEntry(entry)}return thrown}}
throw new Error("illegal catch attempt")},
delegateYield:function(iterable,resultName,nextLoc){
return this.delegate={iterator:values(iterable),
resultName:resultName,nextLoc:nextLoc
},"next"===this.method&&(this.arg=undefined$1),
ContinueSentinel}}}
function wrap(innerFn,outerFn,self,tryLocsList){
var protoGenerator=outerFn&&outerFn.prototype instanceof Generator?outerFn:Generator,generator=Object.create(protoGenerator.prototype),context=new Context(tryLocsList||[])
;return generator._invoke=function(innerFn,self,context){
var state=GenStateSuspendedStart
;return function(method,arg){
if(state===GenStateExecuting)throw new Error("Generator is already running")
;if(state===GenStateCompleted){
if("throw"===method)throw arg;return doneResult()}
for(context.method=method,context.arg=arg;;){
var delegate=context.delegate;if(delegate){
var delegateResult=maybeInvokeDelegate(delegate,context)
;if(delegateResult){
if(delegateResult===ContinueSentinel)continue
;return delegateResult}}
if("next"===context.method)context.sent=context._sent=context.arg;else if("throw"===context.method){
if(state===GenStateSuspendedStart)throw state=GenStateCompleted,
context.arg;context.dispatchException(context.arg)
}else"return"===context.method&&context.abrupt("return",context.arg)
;state=GenStateExecuting
;var record=tryCatch(innerFn,self,context)
;if("normal"===record.type){
if(state=context.done?GenStateCompleted:GenStateSuspendedYield,
record.arg===ContinueSentinel)continue;return{
value:record.arg,done:context.done}}
"throw"===record.type&&(state=GenStateCompleted,
context.method="throw",context.arg=record.arg)}}
}(innerFn,self,context),generator}
function tryCatch(fn,obj,arg){try{return{
type:"normal",arg:fn.call(obj,arg)}}catch(err){
return{type:"throw",arg:err}}}
function Generator(){}
function GeneratorFunction(){}
function GeneratorFunctionPrototype(){}
function defineIteratorMethods(prototype){
["next","throw","return"].forEach(function(method){
prototype[method]=function(arg){
return this._invoke(method,arg)}})}
function AsyncIterator(generator){
var previousPromise
;this._invoke=function(method,arg){
function callInvokeWithMethodAndArg(){
return new Promise(function(resolve,reject){
!function invoke(method,arg,resolve,reject){
var record=tryCatch(generator[method],generator,arg)
;if("throw"!==record.type){
var result=record.arg,value=result.value
;return value&&"object"===_typeof(value)&&hasOwn.call(value,"__await")?Promise.resolve(value.__await).then(function(value){
invoke("next",value,resolve,reject)
},function(err){invoke("throw",err,resolve,reject)
}):Promise.resolve(value).then(function(unwrapped){
result.value=unwrapped,resolve(result)
},function(error){
return invoke("throw",error,resolve,reject)})}
reject(record.arg)}(method,arg,resolve,reject)})}
return previousPromise=previousPromise?previousPromise.then(callInvokeWithMethodAndArg,callInvokeWithMethodAndArg):callInvokeWithMethodAndArg()
}}function maybeInvokeDelegate(delegate,context){
var method=delegate.iterator[context.method]
;if(method===undefined$1){
if(context.delegate=null,"throw"===context.method){
if(delegate.iterator.return&&(context.method="return",
context.arg=undefined$1,maybeInvokeDelegate(delegate,context),
"throw"===context.method))return ContinueSentinel
;context.method="throw",context.arg=new TypeError("The iterator does not provide a 'throw' method")
}return ContinueSentinel}
var record=tryCatch(method,delegate.iterator,context.arg)
;if("throw"===record.type)return context.method="throw",
context.arg=record.arg,context.delegate=null,
ContinueSentinel;var info=record.arg
;return info?info.done?(context[delegate.resultName]=info.value,
context.next=delegate.nextLoc,
"return"!==context.method&&(context.method="next",
context.arg=undefined$1),context.delegate=null,
ContinueSentinel):info:(context.method="throw",
context.arg=new TypeError("iterator result is not an object"),
context.delegate=null,ContinueSentinel)}
function pushTryEntry(locs){var entry={
tryLoc:locs[0]}
;1 in locs&&(entry.catchLoc=locs[1]),2 in locs&&(entry.finallyLoc=locs[2],
entry.afterLoc=locs[3]),
this.tryEntries.push(entry)}
function resetTryEntry(entry){
var record=entry.completion||{}
;record.type="normal",delete record.arg,entry.completion=record
}function Context(tryLocsList){this.tryEntries=[{
tryLoc:"root"
}],tryLocsList.forEach(pushTryEntry,this),this.reset(!0)
}function values(iterable){if(iterable){
var iteratorMethod=iterable[iteratorSymbol]
;if(iteratorMethod)return iteratorMethod.call(iterable)
;if("function"==typeof iterable.next)return iterable
;if(!isNaN(iterable.length)){
var i=-1,next=function next(){
for(;++i<iterable.length;)if(hasOwn.call(iterable,i))return next.value=iterable[i],
next.done=!1,next
;return next.value=undefined$1,next.done=!0,next}
;return next.next=next}}return{next:doneResult}}
function doneResult(){return{value:undefined$1,
done:!0}}}(function(){
return this||"object"===("undefined"==typeof self?"undefined":_typeof(self))&&self
}()||Function("return this")())}),g=function(){
return this||"object"===("undefined"==typeof self?"undefined":_typeof(self))&&self
}()||Function("return this")(),hadRuntime=g.regeneratorRuntime&&Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime")>=0,oldRuntime=hadRuntime&&g.regeneratorRuntime
;g.regeneratorRuntime=void 0
;var runtimeModule=runtime
;if(hadRuntime)g.regeneratorRuntime=oldRuntime;else try{
delete g.regeneratorRuntime}catch(e){
g.regeneratorRuntime=void 0}
var regenerator=runtimeModule
;function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){
try{var info=gen[key](arg),value=info.value
}catch(error){return void reject(error)}
info.done?resolve(value):Promise.resolve(value).then(_next,_throw)
}var asyncToGenerator=function(fn){
return function(){var self=this,args=arguments
;return new Promise(function(resolve,reject){
var gen=fn.apply(self,args);function _next(value){
asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)
}function _throw(err){
asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)
}_next(void 0)})}}
;export{regenerator as a,asyncToGenerator as b};
//# sourceMappingURL=chunk.e0da52c1.js.map
