import"./chunk.da4dee67.js"
;import{c as init,a as assign,e as createText,d as createElement,h as claimText,f as claimElement,g as children,i as detachNode,j as addLoc,k as insert,l as append,p as setData,x as destroyEach,b as protoDev}from"./chunk.107ec70d.js"
;var file="src\\routes\\blog\\index.html"
;function get_each_context(ctx,list,i){
var child_ctx=Object.create(ctx)
;return child_ctx.post=list[i],child_ctx}
function create_each_block(component,ctx){
var li,a,text,a_href_value,text_value=ctx.post.title
;return{c:function(){
li=createElement("li"),a=createElement("a"),text=createText(text_value),
this.h()},l:function(nodes){
li=claimElement(nodes,"LI",{},!1)
;var li_nodes=children(li)
;a=claimElement(li_nodes,"A",{rel:!0,href:!0},!1)
;var a_nodes=children(a)
;text=claimText(a_nodes,text_value),a_nodes.forEach(detachNode),
li_nodes.forEach(detachNode),this.h()},
h:function(){
a.rel="prefetch",a.href=a_href_value="blog/"+ctx.post.slug,addLoc(a,file,12,6,324),
addLoc(li,file,12,2,320)},
m:function(target,anchor){
insert(target,li,anchor),append(li,a),append(a,text)
},p:function(changed,ctx){
changed.posts&&text_value!==(text_value=ctx.post.title)&&setData(text,text_value),
changed.posts&&a_href_value!==(a_href_value="blog/"+ctx.post.slug)&&(a.href=a_href_value)
},d:function(detach){detach&&detachNode(li)}}}
function Index(options){
if(this._debugName="<Index>",!options||!options.target&&!options.root)throw new Error("'target' is a required option")
;if(init(this,options),
this._state=assign({},options.data),"posts"in this._state||console.warn("<Index> was created without expected data property 'posts'"),
this._intro=!0,
this._fragment=function(component,ctx){
for(var text0,h1,text1,text2,ul,each_value=ctx.posts,each_blocks=[],i=0;i<each_value.length;i+=1)each_blocks[i]=create_each_block(0,get_each_context(ctx,each_value,i))
;return{c:function(){
text0=createText("\n\n"),h1=createElement("h1"),text1=createText("Recent posts"),
text2=createText("\n\n"),ul=createElement("ul")
;for(var i=0;i<each_blocks.length;i+=1)each_blocks[i].c()
;this.h()},l:function(nodes){
text0=claimText(nodes,"\n\n"),h1=claimElement(nodes,"H1",{},!1)
;var h1_nodes=children(h1)
;text1=claimText(h1_nodes,"Recent posts"),h1_nodes.forEach(detachNode),
text2=claimText(nodes,"\n\n"),
ul=claimElement(nodes,"UL",{class:!0},!1)
;for(var ul_nodes=children(ul),i=0;i<each_blocks.length;i+=1)each_blocks[i].l(ul_nodes)
;ul_nodes.forEach(detachNode),this.h()},
h:function(){
document.title="Blog",addLoc(h1,file,4,0,51),ul.className="svelte-1d9dm1e",
addLoc(ul,file,6,0,74)},m:function(target,anchor){
insert(target,text0,anchor),insert(target,h1,anchor),
append(h1,text1),insert(target,text2,anchor),
insert(target,ul,anchor)
;for(var i=0;i<each_blocks.length;i+=1)each_blocks[i].m(ul,null)
},p:function(changed,ctx){if(changed.posts){
each_value=ctx.posts
;for(var i=0;i<each_value.length;i+=1){
var child_ctx=get_each_context(ctx,each_value,i)
;each_blocks[i]?each_blocks[i].p(changed,child_ctx):(each_blocks[i]=create_each_block(0,child_ctx),
each_blocks[i].c(),each_blocks[i].m(ul,null))}
for(;i<each_blocks.length;i+=1)each_blocks[i].d(1)
;each_blocks.length=each_value.length}},
d:function(detach){
detach&&(detachNode(text0),detachNode(h1),detachNode(text2),detachNode(ul)),
destroyEach(each_blocks,detach)}}
}(0,this._state),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor)}}
assign(Index.prototype,protoDev),Index.prototype._checkReadOnly=function(newState){},
Index.preload=function(_ref){
return _ref.params,_ref.query,this.fetch("blog.json").then(function(r){
return r.json()}).then(function(posts){return{
posts:posts}})};export default Index;
//# sourceMappingURL=chunk.98ca78f2.js.map
