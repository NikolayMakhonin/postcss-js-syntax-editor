import{a as _typeof}from"./chunk.da4dee67.js"
;var defineProperty=function(obj,key,value){
return key in obj?Object.defineProperty(obj,key,{
value:value,enumerable:!0,configurable:!0,
writable:!0}):obj[key]=value,obj}
;function noop(){}function assign(tar,src){
for(var k in src)tar[k]=src[k];return tar}
function assignTrue(tar,src){
for(var k in src)tar[k]=1;return tar}
function addLoc(element,file,line,column,char){
element.__svelte_meta={loc:{file:file,line:line,
column:column,char:char}}}
function append(target,node){
target.appendChild(node)}
function insert(target,node,anchor){
target.insertBefore(node,anchor)}
function detachNode(node){
node.parentNode.removeChild(node)}
function destroyEach(iterations,detach){
for(var i=0;i<iterations.length;i+=1)iterations[i]&&iterations[i].d(detach)
}function createElement(name){
return document.createElement(name)}
function createText(data){
return document.createTextNode(data)}
function createComment(){
return document.createComment("")}
function addListener(node,event,handler,options){
node.addEventListener(event,handler,options)}
function removeListener(node,event,handler,options){
node.removeEventListener(event,handler,options)}
function setAttribute(node,attribute,value){
null==value?node.removeAttribute(attribute):node.setAttribute(attribute,value)
}function children(element){
return Array.from(element.childNodes)}
function claimElement(nodes,name,attributes,svg){
for(var i=0;i<nodes.length;i+=1){var node=nodes[i]
;if(node.nodeName===name){
for(var j=0;j<node.attributes.length;j+=1){
var attribute=node.attributes[j]
;attributes[attribute.name]||node.removeAttribute(attribute.name)
}return nodes.splice(i,1)[0]}}
return svg?function(name){
return document.createElementNS("http://www.w3.org/2000/svg",name)
}(name):createElement(name)}
function claimText(nodes,data){
for(var i=0;i<nodes.length;i+=1){var node=nodes[i]
;if(3===node.nodeType)return node.data=data,
nodes.splice(i,1)[0]}return createText(data)}
function setData(text,data){text.data=""+data}
function handlePromise(promise,info){
var value,token=info.token={}
;function update(type,index,key,value){
if(info.token===token){
info.resolved=key&&defineProperty({},key,value)
;var child_ctx=assign(assign({},info.ctx),info.resolved),block=type&&(info.current=type)(info.component,child_ctx)
;info.block&&(info.blocks?info.blocks.forEach(function(block,i){
i!==index&&block&&block.o(function(){
block.d(1),info.blocks[i]=null})
}):info.block.d(1),block.c(),block[block.i?"i":"m"](info.mount(),info.anchor),
info.component.root.set({})),
info.block=block,info.blocks&&(info.blocks[index]=block)
}}
if((value=promise)&&"function"==typeof value.then){
if(promise.then(function(value){
update(info.then,1,info.value,value)
},function(error){
update(info.catch,2,info.error,error)
}),info.current!==info.pending)return update(info.pending,0),
!0}else{
if(info.current!==info.then)return update(info.then,1,info.value,promise),
!0
;info.resolved=defineProperty({},info.value,promise)
}}function getSpreadUpdate(levels,updates){
for(var update={},to_null_out={},accounted_for={},i=levels.length;i--;){
var o=levels[i],n=updates[i];if(n){
for(var key in o)key in n||(to_null_out[key]=1)
;for(var key in n)accounted_for[key]||(update[key]=n[key],
accounted_for[key]=1);levels[i]=n
}else for(var key in o)accounted_for[key]=1}
for(var key in to_null_out)key in update||(update[key]=void 0)
;return update}function blankObject(){
return Object.create(null)}
function flush(component){
component._lock=!0,callAll(component._beforecreate),callAll(component._oncreate),
callAll(component._aftercreate),component._lock=!1
}function init(component,options){
component._handlers=blankObject(),component._slots=blankObject(),
component._bind=options._bind,
component._staged={},component.options=options,component.root=options.root||component,
component.store=options.store||component.root.store,
options.root||(component._beforecreate=[],
component._oncreate=[],component._aftercreate=[])}
function callAll(fns){
for(;fns&&fns.length;)fns.shift()()}var protoDev={
destroy:function(detach){(function(detach){
this.destroy=noop,this.fire("destroy"),
this.set=noop,this._fragment.d(!1!==detach),
this._fragment=null,this._state={}
}).call(this,detach),this.destroy=function(){
console.warn("Component was already destroyed")}},
get:function(){return this._state},
fire:function(eventName,data){
var handlers=eventName in this._handlers&&this._handlers[eventName].slice()
;if(handlers)for(var i=0;i<handlers.length;i+=1){
var handler=handlers[i];if(!handler.__calling)try{
handler.__calling=!0,handler.call(this,data)
}finally{handler.__calling=!1}}},
on:function(eventName,handler){
var handlers=this._handlers[eventName]||(this._handlers[eventName]=[])
;return handlers.push(handler),{cancel:function(){
var index=handlers.indexOf(handler)
;~index&&handlers.splice(index,1)}}},
set:function(newState){
if("object"!==_typeof(newState))throw new Error(this._debugName+".set was called without an object of data key-values to update.")
;this._checkReadOnly(newState),function(newState){
this._set(assign({},newState)),
this.root._lock||flush(this.root)
}.call(this,newState)},_recompute:noop,
_set:function(newState){
var oldState=this._state,changed={},dirty=!1
;for(var key in newState=assign(this._staged,newState),
this._staged={},newState)this._differs(newState[key],oldState[key])&&(changed[key]=dirty=!0)
;dirty&&(this._state=assign(assign({},oldState),newState),
this._recompute(changed,this._state),
this._bind&&this._bind(changed,this._state),
this._fragment&&(this.fire("state",{
changed:changed,current:this._state,
previous:oldState
}),this._fragment.p(changed,this._state),this.fire("update",{
changed:changed,current:this._state,
previous:oldState})))},_stage:function(newState){
assign(this._staged,newState)},
_mount:function(target,anchor){
this._fragment[this._fragment.i?"i":"m"](target,anchor||null)
},_differs:function(a,b){
return a!=a?b==b:a!==b||a&&"object"===_typeof(a)||"function"==typeof a
}}
;export{assign as a,protoDev as b,init as c,createElement as d,createText as e,claimElement as f,children as g,claimText as h,detachNode as i,addLoc as j,insert as k,append as l,getSpreadUpdate as m,flush as n,createComment as o,setData as p,defineProperty as q,handlePromise as r,assignTrue as s,noop as t,addListener as u,removeListener as v,setAttribute as w,destroyEach as x};
//# sourceMappingURL=chunk.107ec70d.js.map
