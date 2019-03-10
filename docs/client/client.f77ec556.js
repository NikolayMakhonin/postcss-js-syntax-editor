import{a as _typeof}from"./chunk.da4dee67.js"
;import{a as assign,b as protoDev,c as init,d as createElement,e as createText,f as claimElement,g as children,h as claimText,i as detachNode,j as addLoc,k as insert,l as append,m as getSpreadUpdate,n as flush,o as createComment,p as setData}from"./chunk.107ec70d.js"
;var arrayWithHoles=function(arr){
if(Array.isArray(arr))return arr}
;var iterableToArrayLimit=function(arr,i){
var _arr=[],_n=!0,_d=!1,_e=void 0;try{
for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),
!i||_arr.length!==i);_n=!0);}catch(err){
_d=!0,_e=err}finally{try{
_n||null==_i.return||_i.return()}finally{
if(_d)throw _e}}return _arr}
;var nonIterableRest=function(){
throw new TypeError("Invalid attempt to destructure non-iterable instance")
};var slicedToArray=function(arr,i){
return arrayWithHoles(arr)||iterableToArrayLimit(arr,i)||nonIterableRest()
},file="src\\components\\Nav.html"
;function Nav(options){
if(this._debugName="<Nav>",!options||!options.target&&!options.root)throw new Error("'target' is a required option")
;var ctx,nav,ul,li0,a0,text0,a0_class_value,li1,h1,a1,text1
;if(init(this,options),this._state=assign({
undefined:void 0
},options.data),"segment"in this._state||console.warn("<Nav> was created without expected data property 'segment'"),
this._intro=!0,this._fragment=(ctx=this._state,{
c:function(){
nav=createElement("nav"),ul=createElement("ul"),li0=createElement("li"),
a0=createElement("a"),
text0=createText("home"),li1=createElement("li"),h1=createElement("h1"),
a1=createElement("a"),
text1=createText("Postcss-Js-Syntax to CSS converter"),this.h()
},l:function(nodes){nav=claimElement(nodes,"NAV",{
class:!0},!1);var nav_nodes=children(nav)
;ul=claimElement(nav_nodes,"UL",{class:!0},!1)
;var ul_nodes=children(ul)
;li0=claimElement(ul_nodes,"LI",{class:!0},!1)
;var li0_nodes=children(li0)
;a0=claimElement(li0_nodes,"A",{class:!0,href:!0
},!1);var a0_nodes=children(a0)
;text0=claimText(a0_nodes,"home"),a0_nodes.forEach(detachNode),
li0_nodes.forEach(detachNode),
li1=claimElement(ul_nodes,"LI",{class:!0},!1)
;var li1_nodes=children(li1)
;h1=claimElement(li1_nodes,"H1",{class:!0},!1)
;var h1_nodes=children(h1)
;a1=claimElement(h1_nodes,"A",{href:!0,class:!0
},!1);var a1_nodes=children(a1)
;text1=claimText(a1_nodes,"Postcss-Js-Syntax to CSS converter"),
a1_nodes.forEach(detachNode),
h1_nodes.forEach(detachNode),li1_nodes.forEach(detachNode),
ul_nodes.forEach(detachNode),
nav_nodes.forEach(detachNode),this.h()},
h:function(){
a0.className=a0_class_value=(ctx.segment===ctx.undefined?"selected":"")+" svelte-18n1fgv",
a0.href=".",
addLoc(a0,file,0,13,13),li0.className="svelte-18n1fgv",addLoc(li0,file,0,9,9),
a1.href="https://github.com/NikolayMakhonin/postcss-js-syntax",
a1.className="svelte-18n1fgv",
addLoc(a1,file,0,96,96),h1.className="svelte-18n1fgv",
addLoc(h1,file,0,92,92),li1.className="svelte-18n1fgv",
addLoc(li1,file,0,88,88),
ul.className="svelte-18n1fgv",addLoc(ul,file,0,5,5),nav.className="svelte-18n1fgv",
addLoc(nav,file,0,0,0)},m:function(target,anchor){
insert(target,nav,anchor),append(nav,ul),
append(ul,li0),append(li0,a0),append(a0,text0),
append(ul,li1),append(li1,h1),append(h1,a1),
append(a1,text1)},p:function(changed,ctx){
(changed.segment||changed.undefined)&&a0_class_value!==(a0_class_value=(ctx.segment===ctx.undefined?"selected":"")+" svelte-18n1fgv")&&(a0.className=a0_class_value)
},d:function(detach){detach&&detachNode(nav)}
}),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor)}}
assign(Nav.prototype,protoDev),Nav.prototype._checkReadOnly=function(newState){}
;var file$1="src\\routes\\_layout.html"
;function Layout(options){
if(this._debugName="<Layout>",!options||!options.target&&!options.root)throw new Error("'target' is a required option")
;if(init(this,options),
this._state=assign({},options.data),"child"in this._state||console.warn("<Layout> was created without expected data property 'child'"),
this._intro=!0,
this._fragment=function(component,ctx){
var text,main,nav_initial_data={
segment:ctx.child.segment},nav=new Nav({
root:component.root,store:component.store,
data:nav_initial_data
}),switch_instance_spread_levels=[ctx.child.props],switch_value=ctx.child.component
;function switch_props(ctx){
for(var switch_instance_initial_data={},i=0;i<switch_instance_spread_levels.length;i+=1)switch_instance_initial_data=assign(switch_instance_initial_data,switch_instance_spread_levels[i])
;return{root:component.root,store:component.store,
data:switch_instance_initial_data}}
if(switch_value)var switch_instance=new switch_value(switch_props())
;return{c:function(){
nav._fragment.c(),text=createText("\n\n"),main=createElement("main"),
switch_instance&&switch_instance._fragment.c(),
this.h()},l:function(nodes){
nav._fragment.l(nodes),text=claimText(nodes,"\n\n"),
main=claimElement(nodes,"MAIN",{class:!0},!1)
;var main_nodes=children(main)
;switch_instance&&switch_instance._fragment.l(main_nodes),
main_nodes.forEach(detachNode),this.h()},
h:function(){
main.className="svelte-vxf4f5",addLoc(main,file$1,2,0,32)
},m:function(target,anchor){
nav._mount(target,anchor),insert(target,text,anchor),
insert(target,main,anchor),
switch_instance&&switch_instance._mount(main,null)
},p:function(changed,ctx){var nav_changes={}
;changed.child&&(nav_changes.segment=ctx.child.segment),
nav._set(nav_changes)
;var switch_instance_changes=changed.child?getSpreadUpdate(switch_instance_spread_levels,[ctx.child.props]):{}
;switch_value!==(switch_value=ctx.child.component)?(switch_instance&&switch_instance.destroy(),
switch_value?((switch_instance=new switch_value(switch_props()))._fragment.c(),
switch_instance._mount(main,null)):switch_instance=null):switch_value&&switch_instance._set(switch_instance_changes)
},d:function(detach){
nav.destroy(detach),detach&&(detachNode(text),detachNode(main)),
switch_instance&&switch_instance.destroy()}}
}(this,this._state),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor),flush(this)
}}
assign(Layout.prototype,protoDev),Layout.prototype._checkReadOnly=function(newState){}
;var dev=!1,file$2="src\\routes\\_error.html"
;function create_main_fragment$2(component,ctx){
var title_value,text0,h1,text1,text2,p,text3,text4,if_block_anchor,text3_value=ctx.error.message
;document.title=title_value=ctx.status
;var if_block=dev&&ctx.error.stack&&function(component,ctx){
var pre,text,text_value=ctx.error.stack;return{
c:function(){
pre=createElement("pre"),text=createText(text_value),this.h()
},l:function(nodes){
pre=claimElement(nodes,"PRE",{},!1)
;var pre_nodes=children(pre)
;text=claimText(pre_nodes,text_value),pre_nodes.forEach(detachNode),
this.h()},h:function(){addLoc(pre,file$2,9,1,124)
},m:function(target,anchor){
insert(target,pre,anchor),append(pre,text)},
p:function(changed,ctx){
changed.error&&text_value!==(text_value=ctx.error.stack)&&setData(text,text_value)
},d:function(detach){detach&&detachNode(pre)}}
}(0,ctx);return{c:function(){
text0=createText("\n\n"),h1=createElement("h1"),text1=createText(ctx.status),
text2=createText("\n\n"),
p=createElement("p"),text3=createText(text3_value),text4=createText("\n\n"),
if_block&&if_block.c(),
if_block_anchor=createComment(),this.h()},
l:function(nodes){
text0=claimText(nodes,"\n\n"),h1=claimElement(nodes,"H1",{
class:!0},!1);var h1_nodes=children(h1)
;text1=claimText(h1_nodes,ctx.status),h1_nodes.forEach(detachNode),
text2=claimText(nodes,"\n\n"),
p=claimElement(nodes,"P",{class:!0},!1)
;var p_nodes=children(p)
;text3=claimText(p_nodes,text3_value),p_nodes.forEach(detachNode),
text4=claimText(nodes,"\n\n"),
if_block&&if_block.l(nodes),if_block_anchor=createComment(),
this.h()},h:function(){
h1.className="svelte-zwt8wo",addLoc(h1,file$2,4,0,55),p.className="svelte-zwt8wo",
addLoc(p,file$2,6,0,74)},
m:function(target,anchor){
insert(target,text0,anchor),insert(target,h1,anchor),append(h1,text1),
insert(target,text2,anchor),
insert(target,p,anchor),append(p,text3),insert(target,text4,anchor),
if_block&&if_block.m(target,anchor),
insert(target,if_block_anchor,anchor)},
p:function(changed,ctx){
changed.status&&title_value!==(title_value=ctx.status)&&(document.title=title_value),
changed.status&&setData(text1,ctx.status),
changed.error&&text3_value!==(text3_value=ctx.error.message)&&setData(text3,text3_value),
if_block&&(if_block.d(1),if_block=null)},
d:function(detach){
detach&&(detachNode(text0),detachNode(h1),detachNode(text2),detachNode(p),
detachNode(text4)),
if_block&&if_block.d(detach),detach&&detachNode(if_block_anchor)
}}}function Error$1(options){
if(this._debugName="<Error>",!options||!options.target&&!options.root)throw new Error$1("'target' is a required option")
;if(init(this,options),
this._state=assign({},options.data),"status"in this._state||console.warn("<Error> was created without expected data property 'status'"),
"error"in this._state||console.warn("<Error> was created without expected data property 'error'"),
this._intro=!0,
this._fragment=create_main_fragment$2(0,this._state),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor)}}
assign(Error$1.prototype,protoDev),Error$1.prototype._checkReadOnly=function(newState){}

;var d,root_component,current_token,root_preload,root_data,store,target,ignore=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],components=[{
js:function(){return import("./chunk.42be813d.js")
},css:["chunk.42be813d.css"]},{
js:function(){return import("./chunk.39972887.js")
},css:[]},{
js:function(){return import("./chunk.98ca78f2.js")
},css:["chunk.98ca78f2.css"]
},{js:function(){
return import("./chunk.c5253fd4.js")},
css:["chunk.c5253fd4.css"]
}],pages=(d=decodeURIComponent,[{pattern:/^\/?$/,
parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1
}]},{pattern:/^\/blog\/?$/,parts:[null,{i:2}]},{
pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,
params:function(match){return{slug:d(match[1])}}}]
}]),ready=!1,segments=[],root_props={path:null,
params:null,query:null,child:{segment:null,
component:null,props:{}}},prefetching=null
;var cid,uid=1
;var mousemove_timeout,opts,element,fn,initial_data="undefined"!=typeof __SAPPER__&&__SAPPER__,_history="undefined"!=typeof history?history:{
pushState:function(state,title,href){},
replaceState:function(state,title,href){},
scrollRestoration:""},scroll_history={}
;function select_route(url){
if(url.origin!==location.origin)return null
;if(!url.pathname.startsWith(initial_data.baseUrl))return null
;var path=url.pathname.slice(initial_data.baseUrl.length)
;if(!ignore.some(function(pattern){
return pattern.test(path)
}))for(var i=0;i<pages.length;i+=1){
var page=pages[i],match=page.pattern.exec(path)
;if(match){var _ret=function(){
var query=Object.create(null)
;return url.search.length>0&&url.search.slice(1).split("&").forEach(function(searchParam){
var _$exec=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(searchParam)),_$exec2=slicedToArray(_$exec,3),key=_$exec2[1],value=_$exec2[2]
;value=(value||"").replace(/\+/g," "),
"string"==typeof query[key]&&(query[key]=[query[key]]),
"object"===_typeof(query[key])?query[key].push(value):query[key]=value
}),{v:{url:url,path:path,page:page,match:match,
query:query}}}()
;if("object"===_typeof(_ret))return _ret.v}}}
function scroll_state(){return{x:pageXOffset,
y:pageYOffset}}
function navigate(target,id,noscroll,hash){
if(id)cid=id;else{
var current_scroll=scroll_state()
;scroll_history[cid]=current_scroll,id=cid=++uid,
scroll_history[cid]=noscroll?current_scroll:{x:0,
y:0}}cid=id,root_component&&root_component.set({
preloading:!0})
;var loaded=prefetching&&prefetching.href===target.url.href?prefetching.promise:prepare_page(target)
;prefetching=null;var token=current_token={}
;return loaded.then(function(_ref){
var redirect=_ref.redirect,data=_ref.data,nullable_depth=_ref.nullable_depth,new_segments=_ref.new_segments
;if(redirect)return function(href){
var opts=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{
replaceState:!1
},target$$1=select_route(new URL(href,document.baseURI))
;return target$$1?(_history[opts.replaceState?"replaceState":"pushState"]({
id:cid
},"",href),navigate(target$$1,null).then(function(){})):(location.href=href,
new Promise(function(f){}))}(redirect.location,{
replaceState:!0})
;new_segments&&(segments=new_segments),render(data,nullable_depth,scroll_history[id],noscroll,hash,token),
document.activeElement&&document.activeElement.blur()
})}
function render(data,nullable_depth,scroll,noscroll,hash,token){
if(current_token===token){if(root_component){
for(var level=data.child,i=0;i<nullable_depth&&i!==nullable_depth;i+=1)level=level.props.child
;var component=level.component
;level.component=null,root_component.set({
child:data.child
}),level.component=component,root_component.set(data)
}else{
var _start=document.querySelector("#sapper-head-start"),end=document.querySelector("#sapper-head-end")
;if(_start&&end){
for(;_start.nextSibling!==end;)detach(_start.nextSibling)
;detach(_start),detach(end)}
Object.assign(data,root_data),root_component=new Layout({
target:target,data:data,store:store,hydrate:!0})}
if(!noscroll){if(hash){
var deep_linked=document.querySelector(hash)
;deep_linked&&(scroll={x:0,
y:deep_linked.getBoundingClientRect().top})}
scroll_history[cid]=scroll,scroll&&scrollTo(scroll.x,scroll.y)
}Object.assign(root_props,data),ready=!0}}
function prepare_page(target){
for(var page=target.page,path=target.path,query=target.query,new_segments=path.split("/").filter(Boolean),changed_from=0;segments[changed_from]&&new_segments[changed_from]&&segments[changed_from]===new_segments[changed_from];)changed_from+=1
;changed_from===new_segments.length&&(changed_from-=1)
;var _redirect=null,_error=null,preload_context={
store:store,fetch:function(_fetch){
function fetch(_x,_x2){
return _fetch.apply(this,arguments)}
return fetch.toString=function(){
return _fetch.toString()},fetch
}(function(url,opts){return fetch(url,opts)}),
redirect:function(statusCode,location){
if(_redirect&&(_redirect.statusCode!==statusCode||_redirect.location!==location))throw new Error("Conflicting redirects")
;_redirect={statusCode:statusCode,
location:location}},
error:function(statusCode,message){_error={
statusCode:statusCode,message:message}}}
;return root_preload||(root_preload=Layout.preload?initial_data.preloaded[0]||Layout.preload.call(preload_context,{
path:path,query:query,params:{}
}):{}),Promise.all(page.parts.map(function(part,i){
return i<changed_from?null:part?(component=components[part.i],
promises="string"==typeof component.css?[]:component.css.map(load_css),
promises.unshift(component.js()),
Promise.all(promises).then(function(values){
return values[0].default
})).then(function(Component){var preloaded,req={
path:path,query:query,
params:part.params?part.params(target.match):{}}
;return preloaded=ready||!initial_data.preloaded[i+1]?Component.preload?Component.preload.call(preload_context,req):{}:initial_data.preloaded[i+1],
Promise.resolve(preloaded).then(function(preloaded){
return{Component:Component,preloaded:preloaded}})
}):null;var component,promises
})).catch(function(err){return _error={
statusCode:500,message:err},[]
}).then(function(results){
return root_data?results:Promise.resolve(root_preload).then(function(value){
return root_data=value,results})
}).then(function(results){if(_redirect)return{
redirect:_redirect,new_segments:new_segments}
;var params=(page.parts[page.parts.length-1].params||function(){
return{}})(target.match);if(_error){var _props={
path:path,query:query,params:params,
error:"string"==typeof _error.message?new Error(_error.message):_error.message,
status:_error.statusCode};return{
new_segments:new_segments,
data:Object.assign({},_props,{preloading:!1,
child:{component:Error$1,props:_props}})}}
var props={path:path,query:query,error:null,
status:null},data={path:path,preloading:!1,
child:Object.assign({},root_props.child,{
segment:new_segments[0]})}
;changed(query,root_props.query)&&(data.query=query),changed(params,root_props.params)&&(data.params=params)
;for(var level=data.child,nullable_depth=0,i=0;i<page.parts.length;i+=1){
var part=page.parts[i];if(part){
var _get_params=part.params||function(){return{}}
;i<changed_from?(level.props.path=path,
level.props.query=query,level.props.child=Object.assign({},level.props.child),
nullable_depth+=1):(level.component=results[i].Component,
level.props=Object.assign({},level.props,props,{
params:_get_params(target.match)
},results[i].preloaded),level.props.child={}),(level=level.props.child).segment=new_segments[i+1]
}}return{data:data,nullable_depth:nullable_depth,
new_segments:new_segments}})}
function load_css(chunk){
var href="client/".concat(chunk)
;if(!document.querySelector('link[href="'.concat(href,'"]')))return new Promise(function(fulfil,reject){
var link=document.createElement("link")
;link.rel="stylesheet",link.href=href,link.onload=function(){
return fulfil()
},link.onerror=reject,document.head.appendChild(link)
})}function detach(node){
node.parentNode.removeChild(node)}
function changed(a,b){
return JSON.stringify(a)!==JSON.stringify(b)}
function prefetch(href){
var target$$1=select_route(new URL(href,document.baseURI))
;if(target$$1)return prefetching&&href===prefetching.href||function(href,promise){
prefetching={href:href,promise:promise}
}(href,prepare_page(target$$1)),prefetching.promise
}function handle_mousemove(event){
clearTimeout(mousemove_timeout),mousemove_timeout=setTimeout(function(){
trigger_prefetch(event)},20)}
function trigger_prefetch(event){
var a=find_anchor(event.target)
;a&&"prefetch"===a.rel&&prefetch(a.href)}
function handle_click(event){
if(1===function(event){
return null===event.which?event.button:event.which
}(event)&&!(event.metaKey||event.ctrlKey||event.shiftKey||event.defaultPrevented)){
var a=find_anchor(event.target);if(a&&a.href){
var svg="object"===_typeof(a.href)&&"SVGAnimatedString"===a.href.constructor.name,href=String(svg?a.href.baseVal:a.href)
;if(href!==location.href){
if(!a.hasAttribute("download")&&"external"!==a.getAttribute("rel")&&(svg?!a.target.baseVal:!a.target)){
var url=new URL(href)
;if(url.pathname!==location.pathname||url.search!==location.search){
var target$$1=select_route(url)
;if(target$$1)navigate(target$$1,null,a.hasAttribute("sapper-noscroll"),url.hash),
event.preventDefault(),_history.pushState({id:cid
},"",url.href)}}
}else location.hash||event.preventDefault()}}}
function find_anchor(node){
for(;node&&"A"!==node.nodeName.toUpperCase();)node=node.parentNode
;return node}function handle_popstate(event){
if(scroll_history[cid]=scroll_state(),
event.state){
var target$$1=select_route(new URL(location.href))
;target$$1?navigate(target$$1,event.state.id):location.href=location.href
}else(function(n){cid=n
})(uid=uid+1),_history.replaceState({id:cid
},"",location.href)}opts={
target:document.querySelector("#sapper")
},"scrollRestoration"in _history&&(_history.scrollRestoration="manual"),
element=opts.target,
target=element,opts.store&&(fn=opts.store,store=fn(initial_data.store)),
addEventListener("click",handle_click),
addEventListener("popstate",handle_popstate),
addEventListener("touchstart",trigger_prefetch),
addEventListener("mousemove",handle_mousemove),
Promise.resolve().then(function(){
var _location=location,hash=_location.hash,href=_location.href
;if(_history.replaceState({id:uid
},"",href),!initial_data.error){
var target$$1=select_route(new URL(location.href))
;if(target$$1)return navigate(target$$1,uid,!1,hash)
}});
//# sourceMappingURL=client.f77ec556.js.map
