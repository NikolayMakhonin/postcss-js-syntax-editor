import"./chunk.b0ae64c3.js"
;import{c as init,a as assign,e as createText,d as createElement,h as claimText,f as claimElement,g as children,i as detachNode,j as addLoc,k as insert,l as append,p as setData,b as protoDev}from"./chunk.42d23e7c.js"

;import{a as _asyncToGenerator,b as _regeneratorRuntime}from"./chunk.4f4de8d6.js"
;function _preload(){
return(_preload=_asyncToGenerator(_regeneratorRuntime.mark(function _callee(_ref){
var params,res,data
;return _regeneratorRuntime.wrap(function(_context){
for(;;)switch(_context.prev=_context.next){case 0:
return params=_ref.params,_ref.query,
_context.next=3,this.fetch("blog/".concat(params.slug,".json"))
;case 3:
return res=_context.sent,_context.next=6,res.json()
;case 6:if(data=_context.sent,200!==res.status){
_context.next=11;break}
return _context.abrupt("return",{post:data})
;case 11:this.error(res.status,data.message)
;case 12:case"end":return _context.stop()}
},_callee,this)}))).apply(this,arguments)}
var file="src\\routes\\blog\\[slug].html"
;function Slug(options){
if(this._debugName="<Slug>",!options||!options.target&&!options.root)throw new Error("'target' is a required option")
;var ctx,title_value,text0,h1,text1,text2,div,text1_value,raw_value
;if(init(this,options),
this._state=assign({},options.data),"post"in this._state||console.warn("<Slug> was created without expected data property 'post'"),
this._intro=!0,
this._fragment=(ctx=this._state,text1_value=ctx.post.title,raw_value=ctx.post.html,
document.title=title_value=ctx.post.title,{
c:function(){
text0=createText("\n\n"),h1=createElement("h1"),text1=createText(text1_value),
text2=createText("\n\n"),
div=createElement("div"),this.h()},
l:function(nodes){
text0=claimText(nodes,"\n\n"),h1=claimElement(nodes,"H1",{},!1)
;var h1_nodes=children(h1)
;text1=claimText(h1_nodes,text1_value),h1_nodes.forEach(detachNode),
text2=claimText(nodes,"\n\n"),
div=claimElement(nodes,"DIV",{class:!0
},!1),children(div).forEach(detachNode),this.h()},
h:function(){
addLoc(h1,file,4,0,59),div.className="content svelte-1mj6nmv",addLoc(div,file,6,0,82)
},m:function(target,anchor){
insert(target,text0,anchor),insert(target,h1,anchor),
append(h1,text1),insert(target,text2,anchor),
insert(target,div,anchor),div.innerHTML=raw_value
},p:function(changed,ctx){
changed.post&&title_value!==(title_value=ctx.post.title)&&(document.title=title_value),
changed.post&&text1_value!==(text1_value=ctx.post.title)&&setData(text1,text1_value),
changed.post&&raw_value!==(raw_value=ctx.post.html)&&(div.innerHTML=raw_value)
},d:function(detach){
detach&&(detachNode(text0),detachNode(h1),detachNode(text2),
detachNode(div))}}),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor)}}
assign(Slug.prototype,protoDev),Slug.prototype._checkReadOnly=function(newState){},
Slug.preload=function(_x){
return _preload.apply(this,arguments)}
;export default Slug;
//# sourceMappingURL=chunk.0037cdcb.js.map
