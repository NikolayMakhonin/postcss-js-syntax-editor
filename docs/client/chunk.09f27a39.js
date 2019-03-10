import{b as createCommonjsModule,c as commonjsGlobal,a as _typeof}from"./chunk.da4dee67.js"

;var codemirror=createCommonjsModule(function(module,exports){
module.exports=function(){
var userAgent=navigator.userAgent,platform=navigator.platform,gecko=/gecko\/\d/i.test(userAgent),ie_upto10=/MSIE \d/.test(userAgent),ie_11up=/Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(userAgent),edge=/Edge\/(\d+)/.exec(userAgent),ie=ie_upto10||ie_11up||edge,ie_version=ie&&(ie_upto10?document.documentMode||6:+(edge||ie_11up)[1]),webkit=!edge&&/WebKit\//.test(userAgent),qtwebkit=webkit&&/Qt\/\d+\.\d+/.test(userAgent),chrome=!edge&&/Chrome\//.test(userAgent),presto=/Opera\//.test(userAgent),safari=/Apple Computer/.test(navigator.vendor),mac_geMountainLion=/Mac OS X 1\d\D([8-9]|\d\d)\D/.test(userAgent),phantom=/PhantomJS/.test(userAgent),ios=!edge&&/AppleWebKit/.test(userAgent)&&/Mobile\/\w+/.test(userAgent),android=/Android/.test(userAgent),mobile=ios||android||/webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(userAgent),mac=ios||/Mac/.test(platform),chromeOS=/\bCrOS\b/.test(userAgent),windows=/win/i.test(platform),presto_version=presto&&userAgent.match(/Version\/(\d*\.\d*)/)
;presto_version&&(presto_version=Number(presto_version[1])),
presto_version&&presto_version>=15&&(presto=!1,
webkit=!0)
;var flipCtrlCmd=mac&&(qtwebkit||presto&&(null==presto_version||presto_version<12.11)),captureRightClick=gecko||ie&&ie_version>=9
;function classTest(cls){
return new RegExp("(^|\\s)"+cls+"(?:$|\\s)\\s*")}
var range,rmClass=function(node,cls){
var current=node.className,match=classTest(cls).exec(current)
;if(match){
var after=current.slice(match.index+match[0].length)
;node.className=current.slice(0,match.index)+(after?match[1]+after:"")
}};function removeChildren(e){
for(var count=e.childNodes.length;count>0;--count)e.removeChild(e.firstChild)
;return e}function removeChildrenAndAdd(parent,e){
return removeChildren(parent).appendChild(e)}
function elt(tag,content,className,style){
var e=document.createElement(tag)
;if(className&&(e.className=className),style&&(e.style.cssText=style),
"string"==typeof content)e.appendChild(document.createTextNode(content));else if(content)for(var i=0;i<content.length;++i)e.appendChild(content[i])
;return e}
function eltP(tag,content,className,style){
var e=elt(tag,content,className,style)
;return e.setAttribute("role","presentation"),e}
function contains(parent,child){
if(3==child.nodeType&&(child=child.parentNode),parent.contains)return parent.contains(child)
;do{
if(11==child.nodeType&&(child=child.host),child==parent)return!0
}while(child=child.parentNode)}
function activeElt(){var activeElement;try{
activeElement=document.activeElement}catch(e){
activeElement=document.body||null}
for(;activeElement&&activeElement.shadowRoot&&activeElement.shadowRoot.activeElement;)activeElement=activeElement.shadowRoot.activeElement
;return activeElement}function addClass(node,cls){
var current=node.className
;classTest(cls).test(current)||(node.className+=(current?" ":"")+cls)
}function joinClasses(a,b){
for(var as=a.split(" "),i=0;i<as.length;i++)as[i]&&!classTest(as[i]).test(b)&&(b+=" "+as[i])
;return b}
range=document.createRange?function(node,start,end,endNode){
var r=document.createRange()
;return r.setEnd(endNode||node,end),r.setStart(node,start),
r}:function(node,start,end){
var r=document.body.createTextRange();try{
r.moveToElementText(node.parentNode)}catch(e){
return r}
return r.collapse(!0),r.moveEnd("character",end),r.moveStart("character",start),
r};var selectInput=function(node){node.select()}
;function bind(f){
var args=Array.prototype.slice.call(arguments,1)
;return function(){return f.apply(null,args)}}
function copyObj(obj,target,overwrite){
for(var prop in target||(target={}),obj)!obj.hasOwnProperty(prop)||!1===overwrite&&target.hasOwnProperty(prop)||(target[prop]=obj[prop])
;return target}
function countColumn(string,end,tabSize,startIndex,startValue){
null==end&&-1==(end=string.search(/[^\s\u00a0]/))&&(end=string.length)
;for(var i=startIndex||0,n=startValue||0;;){
var nextTab=string.indexOf("\t",i)
;if(nextTab<0||nextTab>=end)return n+(end-i)
;n+=nextTab-i,n+=tabSize-n%tabSize,i=nextTab+1}}
ios?selectInput=function(node){
node.selectionStart=0,node.selectionEnd=node.value.length
}:ie&&(selectInput=function(node){try{
node.select()}catch(_e){}})
;var Delayed=function(){this.id=null}
;function indexOf(array,elt){
for(var i=0;i<array.length;++i)if(array[i]==elt)return i
;return-1}Delayed.prototype.set=function(ms,f){
clearTimeout(this.id),this.id=setTimeout(f,ms)}
;var scrollerGap=30,Pass={toString:function(){
return"CodeMirror.Pass"}},sel_dontScroll={
scroll:!1},sel_mouse={origin:"*mouse"},sel_move={
origin:"+move"}
;function findColumn(string,goal,tabSize){
for(var pos=0,col=0;;){
var nextTab=string.indexOf("\t",pos)
;-1==nextTab&&(nextTab=string.length)
;var skipped=nextTab-pos
;if(nextTab==string.length||col+skipped>=goal)return pos+Math.min(skipped,goal-col)
;if(col+=nextTab-pos,
pos=nextTab+1,(col+=tabSize-col%tabSize)>=goal)return pos
}}var spaceStrs=[""];function spaceStr(n){
for(;spaceStrs.length<=n;)spaceStrs.push(lst(spaceStrs)+" ")
;return spaceStrs[n]}function lst(arr){
return arr[arr.length-1]}function map(array,f){
for(var out=[],i=0;i<array.length;i++)out[i]=f(array[i],i)
;return out}function nothing(){}
function createObj(base,props){var inst
;return Object.create?inst=Object.create(base):(nothing.prototype=base,
inst=new nothing),props&&copyObj(props,inst),inst}
var nonASCIISingleCaseWordChar=/[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/
;function isWordCharBasic(ch){
return/\w/.test(ch)||ch>""&&(ch.toUpperCase()!=ch.toLowerCase()||nonASCIISingleCaseWordChar.test(ch))
}function isWordChar(ch,helper){
return helper?!!(helper.source.indexOf("\\w")>-1&&isWordCharBasic(ch))||helper.test(ch):isWordCharBasic(ch)
}function isEmpty(obj){
for(var n in obj)if(obj.hasOwnProperty(n)&&obj[n])return!1
;return!0}
var extendingChars=/[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/
;function isExtendingChar(ch){
return ch.charCodeAt(0)>=768&&extendingChars.test(ch)
}function skipExtendingChars(str,pos,dir){
for(;(dir<0?pos>0:pos<str.length)&&isExtendingChar(str.charAt(pos));)pos+=dir
;return pos}function findFirst(pred,from,to){
for(var dir=from>to?-1:1;;){
if(from==to)return from
;var midF=(from+to)/2,mid=dir<0?Math.ceil(midF):Math.floor(midF)
;if(mid==from)return pred(mid)?from:to
;pred(mid)?to=mid:from=mid+dir}}
function Display(place,doc,input){var d=this
;this.input=input,d.scrollbarFiller=elt("div",null,"CodeMirror-scrollbar-filler"),
d.scrollbarFiller.setAttribute("cm-not-content","true"),
d.gutterFiller=elt("div",null,"CodeMirror-gutter-filler"),
d.gutterFiller.setAttribute("cm-not-content","true"),
d.lineDiv=eltP("div",null,"CodeMirror-code"),
d.selectionDiv=elt("div",null,null,"position: relative; z-index: 1"),
d.cursorDiv=elt("div",null,"CodeMirror-cursors"),
d.measure=elt("div",null,"CodeMirror-measure"),
d.lineMeasure=elt("div",null,"CodeMirror-measure"),
d.lineSpace=eltP("div",[d.measure,d.lineMeasure,d.selectionDiv,d.cursorDiv,d.lineDiv],null,"position: relative; outline: none")
;var lines=eltP("div",[d.lineSpace],"CodeMirror-lines")
;d.mover=elt("div",[lines],null,"position: relative"),
d.sizer=elt("div",[d.mover],"CodeMirror-sizer"),
d.sizerWidth=null,d.heightForcer=elt("div",null,null,"position: absolute; height: "+scrollerGap+"px; width: 1px;"),
d.gutters=elt("div",null,"CodeMirror-gutters"),
d.lineGutter=null,d.scroller=elt("div",[d.sizer,d.heightForcer,d.gutters],"CodeMirror-scroll"),
d.scroller.setAttribute("tabIndex","-1"),
d.wrapper=elt("div",[d.scrollbarFiller,d.gutterFiller,d.scroller],"CodeMirror"),
ie&&ie_version<8&&(d.gutters.style.zIndex=-1,
d.scroller.style.paddingRight=0),webkit||gecko&&mobile||(d.scroller.draggable=!0),
place&&(place.appendChild?place.appendChild(d.wrapper):place(d.wrapper)),
d.viewFrom=d.viewTo=doc.first,
d.reportedViewFrom=d.reportedViewTo=doc.first,d.view=[],
d.renderedView=null,d.externalMeasured=null,
d.viewOffset=0,d.lastWrapHeight=d.lastWrapWidth=0,
d.updateLineNumbers=null,d.nativeBarWidth=d.barHeight=d.barWidth=0,
d.scrollbarsClipped=!1,
d.lineNumWidth=d.lineNumInnerWidth=d.lineNumChars=null,d.alignWidgets=!1,
d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null,
d.maxLine=null,d.maxLineLength=0,
d.maxLineChanged=!1,d.wheelDX=d.wheelDY=d.wheelStartX=d.wheelStartY=null,
d.shift=!1,
d.selForContextMenu=null,d.activeTouch=null,input.init(d)
}function getLine(doc,n){
if((n-=doc.first)<0||n>=doc.size)throw new Error("There is no line "+(n+doc.first)+" in the document.")
;for(var chunk=doc;!chunk.lines;)for(var i=0;;++i){
var child=chunk.children[i],sz=child.chunkSize()
;if(n<sz){chunk=child;break}n-=sz}
return chunk.lines[n]}
function getBetween(doc,start,end){
var out=[],n=start.line
;return doc.iter(start.line,end.line+1,function(line){
var text=line.text
;n==end.line&&(text=text.slice(0,end.ch)),n==start.line&&(text=text.slice(start.ch)),
out.push(text),++n}),out}
function getLines(doc,from,to){var out=[]
;return doc.iter(from,to,function(line){
out.push(line.text)}),out}
function updateLineHeight(line,height){
var diff=height-line.height
;if(diff)for(var n=line;n;n=n.parent)n.height+=diff
}function lineNo(line){
if(null==line.parent)return null
;for(var cur=line.parent,no=indexOf(cur.lines,line),chunk=cur.parent;chunk;cur=chunk,
chunk=chunk.parent)for(var i=0;chunk.children[i]!=cur;++i)no+=chunk.children[i].chunkSize()
;return no+cur.first}
function _lineAtHeight(chunk,h){var n=chunk.first
;outer:do{
for(var i$1=0;i$1<chunk.children.length;++i$1){
var child=chunk.children[i$1],ch=child.height
;if(h<ch){chunk=child;continue outer}
h-=ch,n+=child.chunkSize()}return n
}while(!chunk.lines)
;for(var i=0;i<chunk.lines.length;++i){
var line=chunk.lines[i],lh=line.height
;if(h<lh)break;h-=lh}return n+i}
function isLine(doc,l){
return l>=doc.first&&l<doc.first+doc.size}
function lineNumberFor(options,i){
return String(options.lineNumberFormatter(i+options.firstLineNumber))
}function Pos(line,ch,sticky){
if(void 0===sticky&&(sticky=null),!(this instanceof Pos))return new Pos(line,ch,sticky)
;this.line=line,this.ch=ch,this.sticky=sticky}
function cmp(a,b){return a.line-b.line||a.ch-b.ch}
function equalCursorPos(a,b){
return a.sticky==b.sticky&&0==cmp(a,b)}
function copyPos(x){return Pos(x.line,x.ch)}
function maxPos(a,b){return cmp(a,b)<0?b:a}
function minPos(a,b){return cmp(a,b)<0?a:b}
function clipLine(doc,n){
return Math.max(doc.first,Math.min(n,doc.first+doc.size-1))
}function _clipPos(doc,pos){
if(pos.line<doc.first)return Pos(doc.first,0)
;var last=doc.first+doc.size-1
;return pos.line>last?Pos(last,getLine(doc,last).text.length):function(pos,linelen){
var ch=pos.ch
;return null==ch||ch>linelen?Pos(pos.line,linelen):ch<0?Pos(pos.line,0):pos
}(pos,getLine(doc,pos.line).text.length)}
function clipPosArray(doc,array){
for(var out=[],i=0;i<array.length;i++)out[i]=_clipPos(doc,array[i])
;return out}
var sawReadOnlySpans=!1,sawCollapsedSpans=!1
;function MarkedSpan(marker,from,to){
this.marker=marker,this.from=from,this.to=to}
function getMarkedSpanFor(spans,marker){
if(spans)for(var i=0;i<spans.length;++i){
var span=spans[i]
;if(span.marker==marker)return span}}
function removeMarkedSpan(spans,span){
for(var r,i=0;i<spans.length;++i)spans[i]!=span&&(r||(r=[])).push(spans[i])
;return r}
function stretchSpansOverChange(doc,change){
if(change.full)return null
;var oldFirst=isLine(doc,change.from.line)&&getLine(doc,change.from.line).markedSpans,oldLast=isLine(doc,change.to.line)&&getLine(doc,change.to.line).markedSpans
;if(!oldFirst&&!oldLast)return null
;var startCh=change.from.ch,endCh=change.to.ch,isInsert=0==cmp(change.from,change.to),first=function(old,startCh,isInsert){
var nw;if(old)for(var i=0;i<old.length;++i){
var span=old[i],marker=span.marker,startsBefore=null==span.from||(marker.inclusiveLeft?span.from<=startCh:span.from<startCh)
;if(startsBefore||span.from==startCh&&"bookmark"==marker.type&&(!isInsert||!span.marker.insertLeft)){
var endsAfter=null==span.to||(marker.inclusiveRight?span.to>=startCh:span.to>startCh)
;(nw||(nw=[])).push(new MarkedSpan(marker,span.from,endsAfter?null:span.to))
}}return nw
}(oldFirst,startCh,isInsert),last=function(old,endCh,isInsert){
var nw;if(old)for(var i=0;i<old.length;++i){
var span=old[i],marker=span.marker,endsAfter=null==span.to||(marker.inclusiveRight?span.to>=endCh:span.to>endCh)
;if(endsAfter||span.from==endCh&&"bookmark"==marker.type&&(!isInsert||span.marker.insertLeft)){
var startsBefore=null==span.from||(marker.inclusiveLeft?span.from<=endCh:span.from<endCh)
;(nw||(nw=[])).push(new MarkedSpan(marker,startsBefore?null:span.from-endCh,null==span.to?null:span.to-endCh))
}}return nw
}(oldLast,endCh,isInsert),sameLine=1==change.text.length,offset=lst(change.text).length+(sameLine?startCh:0)
;if(first)for(var i=0;i<first.length;++i){
var span=first[i];if(null==span.to){
var found=getMarkedSpanFor(last,span.marker)
;found?sameLine&&(span.to=null==found.to?null:found.to+offset):span.to=startCh
}}if(last)for(var i$1=0;i$1<last.length;++i$1){
var span$1=last[i$1]
;if(null!=span$1.to&&(span$1.to+=offset),null==span$1.from){
var found$1=getMarkedSpanFor(first,span$1.marker)
;found$1||(span$1.from=offset,sameLine&&(first||(first=[])).push(span$1))
}else span$1.from+=offset,
sameLine&&(first||(first=[])).push(span$1)}
first&&(first=clearEmptySpans(first)),
last&&last!=first&&(last=clearEmptySpans(last))
;var newMarkers=[first];if(!sameLine){
var gapMarkers,gap=change.text.length-2
;if(gap>0&&first)for(var i$2=0;i$2<first.length;++i$2)null==first[i$2].to&&(gapMarkers||(gapMarkers=[])).push(new MarkedSpan(first[i$2].marker,null,null))
;for(var i$3=0;i$3<gap;++i$3)newMarkers.push(gapMarkers)
;newMarkers.push(last)}return newMarkers}
function clearEmptySpans(spans){
for(var i=0;i<spans.length;++i){var span=spans[i]
;null!=span.from&&span.from==span.to&&!1!==span.marker.clearWhenEmpty&&spans.splice(i--,1)
}return spans.length?spans:null}
function detachMarkedSpans(line){
var spans=line.markedSpans;if(spans){
for(var i=0;i<spans.length;++i)spans[i].marker.detachLine(line)
;line.markedSpans=null}}
function attachMarkedSpans(line,spans){if(spans){
for(var i=0;i<spans.length;++i)spans[i].marker.attachLine(line)
;line.markedSpans=spans}}
function extraLeft(marker){
return marker.inclusiveLeft?-1:0}
function extraRight(marker){
return marker.inclusiveRight?1:0}
function compareCollapsedMarkers(a,b){
var lenDiff=a.lines.length-b.lines.length
;if(0!=lenDiff)return lenDiff
;var aPos=a.find(),bPos=b.find(),fromCmp=cmp(aPos.from,bPos.from)||extraLeft(a)-extraLeft(b)
;if(fromCmp)return-fromCmp
;var toCmp=cmp(aPos.to,bPos.to)||extraRight(a)-extraRight(b)
;return toCmp||b.id-a.id}
function collapsedSpanAtSide(line,start){
var found,sps=sawCollapsedSpans&&line.markedSpans
;if(sps)for(var sp=void 0,i=0;i<sps.length;++i)(sp=sps[i]).marker.collapsed&&null==(start?sp.from:sp.to)&&(!found||compareCollapsedMarkers(found,sp.marker)<0)&&(found=sp.marker)
;return found}function collapsedSpanAtStart(line){
return collapsedSpanAtSide(line,!0)}
function collapsedSpanAtEnd(line){
return collapsedSpanAtSide(line,!1)}
function collapsedSpanAround(line,ch){
var found,sps=sawCollapsedSpans&&line.markedSpans
;if(sps)for(var i=0;i<sps.length;++i){
var sp=sps[i]
;sp.marker.collapsed&&(null==sp.from||sp.from<ch)&&(null==sp.to||sp.to>ch)&&(!found||compareCollapsedMarkers(found,sp.marker)<0)&&(found=sp.marker)
}return found}
function conflictingCollapsedRange(doc,lineNo$$1,from,to,marker){
var line=getLine(doc,lineNo$$1),sps=sawCollapsedSpans&&line.markedSpans
;if(sps)for(var i=0;i<sps.length;++i){
var sp=sps[i];if(sp.marker.collapsed){
var found=sp.marker.find(0),fromCmp=cmp(found.from,from)||extraLeft(sp.marker)-extraLeft(marker),toCmp=cmp(found.to,to)||extraRight(sp.marker)-extraRight(marker)
;if(!(fromCmp>=0&&toCmp<=0||fromCmp<=0&&toCmp>=0)&&(fromCmp<=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.to,from)>=0:cmp(found.to,from)>0)||fromCmp>=0&&(sp.marker.inclusiveRight&&marker.inclusiveLeft?cmp(found.from,to)<=0:cmp(found.from,to)<0)))return!0
}}}function visualLine(line){
for(var merged;merged=collapsedSpanAtStart(line);)line=merged.find(-1,!0).line
;return line}function visualLineNo(doc,lineN){
var line=getLine(doc,lineN),vis=visualLine(line)
;return line==vis?lineN:lineNo(vis)}
function visualLineEndNo(doc,lineN){
if(lineN>doc.lastLine())return lineN
;var merged,line=getLine(doc,lineN)
;if(!lineIsHidden(doc,line))return lineN
;for(;merged=collapsedSpanAtEnd(line);)line=merged.find(1,!0).line
;return lineNo(line)+1}
function lineIsHidden(doc,line){
var sps=sawCollapsedSpans&&line.markedSpans
;if(sps)for(var sp=void 0,i=0;i<sps.length;++i)if((sp=sps[i]).marker.collapsed){
if(null==sp.from)return!0
;if(!sp.marker.widgetNode&&0==sp.from&&sp.marker.inclusiveLeft&&lineIsHiddenInner(doc,line,sp))return!0
}}function lineIsHiddenInner(doc,line,span){
if(null==span.to){var end=span.marker.find(1,!0)
;return lineIsHiddenInner(doc,end.line,getMarkedSpanFor(end.line.markedSpans,span.marker))
}
if(span.marker.inclusiveRight&&span.to==line.text.length)return!0
;for(var sp=void 0,i=0;i<line.markedSpans.length;++i)if((sp=line.markedSpans[i]).marker.collapsed&&!sp.marker.widgetNode&&sp.from==span.to&&(null==sp.to||sp.to!=span.from)&&(sp.marker.inclusiveLeft||span.marker.inclusiveRight)&&lineIsHiddenInner(doc,line,sp))return!0
}function _heightAtLine(lineObj){
lineObj=visualLine(lineObj)
;for(var h=0,chunk=lineObj.parent,i=0;i<chunk.lines.length;++i){
var line=chunk.lines[i];if(line==lineObj)break
;h+=line.height}
for(var p=chunk.parent;p;p=(chunk=p).parent)for(var i$1=0;i$1<p.children.length;++i$1){
var cur=p.children[i$1];if(cur==chunk)break
;h+=cur.height}return h}function lineLength(line){
if(0==line.height)return 0
;for(var merged,len=line.text.length,cur=line;merged=collapsedSpanAtStart(cur);){
var found=merged.find(0,!0)
;cur=found.from.line,len+=found.from.ch-found.to.ch
}for(cur=line;merged=collapsedSpanAtEnd(cur);){
var found$1=merged.find(0,!0)
;len-=cur.text.length-found$1.from.ch,cur=found$1.to.line,
len+=cur.text.length-found$1.to.ch}return len}
function findMaxLine(cm){
var d=cm.display,doc=cm.doc
;d.maxLine=getLine(doc,doc.first),d.maxLineLength=lineLength(d.maxLine),
d.maxLineChanged=!0,doc.iter(function(line){
var len=lineLength(line)
;len>d.maxLineLength&&(d.maxLineLength=len,d.maxLine=line)
})}var bidiOther=null
;function getBidiPartAt(order,ch,sticky){var found
;bidiOther=null;for(var i=0;i<order.length;++i){
var cur=order[i]
;if(cur.from<ch&&cur.to>ch)return i
;cur.to==ch&&(cur.from!=cur.to&&"before"==sticky?found=i:bidiOther=i),
cur.from==ch&&(cur.from!=cur.to&&"before"!=sticky?found=i:bidiOther=i)
}return null!=found?found:bidiOther}
var bidiOrdering=function(){
var lowTypes="bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN",arabicTypes="nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
;var bidiRE=/[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/,isNeutral=/[stwN]/,isStrong=/[LRr]/,countsAsLeft=/[Lb1n]/,countsAsNum=/[1n]/
;function BidiSpan(level,from,to){
this.level=level,this.from=from,this.to=to}
return function(str,direction){
var code,outerType="ltr"==direction?"L":"R"
;if(0==str.length||"ltr"==direction&&!bidiRE.test(str))return!1
;for(var len=str.length,types=[],i=0;i<len;++i)types.push((code=str.charCodeAt(i))<=247?lowTypes.charAt(code):1424<=code&&code<=1524?"R":1536<=code&&code<=1785?arabicTypes.charAt(code-1536):1774<=code&&code<=2220?"r":8192<=code&&code<=8203?"w":8204==code?"b":"L")
;for(var i$1=0,prev=outerType;i$1<len;++i$1){
var type=types[i$1]
;"m"==type?types[i$1]=prev:prev=type}
for(var i$2=0,cur=outerType;i$2<len;++i$2){
var type$1=types[i$2]
;"1"==type$1&&"r"==cur?types[i$2]="n":isStrong.test(type$1)&&(cur=type$1,
"r"==type$1&&(types[i$2]="R"))}
for(var i$3=1,prev$1=types[0];i$3<len-1;++i$3){
var type$2=types[i$3]
;"+"==type$2&&"1"==prev$1&&"1"==types[i$3+1]?types[i$3]="1":","!=type$2||prev$1!=types[i$3+1]||"1"!=prev$1&&"n"!=prev$1||(types[i$3]=prev$1),
prev$1=type$2}for(var i$4=0;i$4<len;++i$4){
var type$3=types[i$4]
;if(","==type$3)types[i$4]="N";else if("%"==type$3){
var end=void 0
;for(end=i$4+1;end<len&&"%"==types[end];++end);
for(var replace=i$4&&"!"==types[i$4-1]||end<len&&"1"==types[end]?"1":"N",j=i$4;j<end;++j)types[j]=replace
;i$4=end-1}}
for(var i$5=0,cur$1=outerType;i$5<len;++i$5){
var type$4=types[i$5]
;"L"==cur$1&&"1"==type$4?types[i$5]="L":isStrong.test(type$4)&&(cur$1=type$4)
}
for(var i$6=0;i$6<len;++i$6)if(isNeutral.test(types[i$6])){
var end$1=void 0
;for(end$1=i$6+1;end$1<len&&isNeutral.test(types[end$1]);++end$1);
for(var before="L"==(i$6?types[i$6-1]:outerType),after="L"==(end$1<len?types[end$1]:outerType),replace$1=before==after?before?"L":"R":outerType,j$1=i$6;j$1<end$1;++j$1)types[j$1]=replace$1
;i$6=end$1-1}
for(var m,order=[],i$7=0;i$7<len;)if(countsAsLeft.test(types[i$7])){
var start=i$7
;for(++i$7;i$7<len&&countsAsLeft.test(types[i$7]);++i$7);
order.push(new BidiSpan(0,start,i$7))}else{
var pos=i$7,at=order.length
;for(++i$7;i$7<len&&"L"!=types[i$7];++i$7);
for(var j$2=pos;j$2<i$7;)if(countsAsNum.test(types[j$2])){
pos<j$2&&order.splice(at,0,new BidiSpan(1,pos,j$2))
;var nstart=j$2
;for(++j$2;j$2<i$7&&countsAsNum.test(types[j$2]);++j$2);
order.splice(at,0,new BidiSpan(2,nstart,j$2)),
pos=j$2}else++j$2
;pos<i$7&&order.splice(at,0,new BidiSpan(1,pos,i$7))
}
return"ltr"==direction&&(1==order[0].level&&(m=str.match(/^\s+/))&&(order[0].from=m[0].length,
order.unshift(new BidiSpan(0,0,m[0].length))),
1==lst(order).level&&(m=str.match(/\s+$/))&&(lst(order).to-=m[0].length,
order.push(new BidiSpan(0,len-m[0].length,len)))),
"rtl"==direction?order.reverse():order}}()
;function getOrder(line,direction){
var order=line.order
;return null==order&&(order=line.order=bidiOrdering(line.text,direction)),
order}
var noHandlers=[],on=function(emitter,type,f){
if(emitter.addEventListener)emitter.addEventListener(type,f,!1);else if(emitter.attachEvent)emitter.attachEvent("on"+type,f);else{
var map$$1=emitter._handlers||(emitter._handlers={})
;map$$1[type]=(map$$1[type]||noHandlers).concat(f)
}};function getHandlers(emitter,type){
return emitter._handlers&&emitter._handlers[type]||noHandlers
}function off(emitter,type,f){
if(emitter.removeEventListener)emitter.removeEventListener(type,f,!1);else if(emitter.detachEvent)emitter.detachEvent("on"+type,f);else{
var map$$1=emitter._handlers,arr=map$$1&&map$$1[type]
;if(arr){var index=indexOf(arr,f)
;index>-1&&(map$$1[type]=arr.slice(0,index).concat(arr.slice(index+1)))
}}}function signal(emitter,type){
var handlers=getHandlers(emitter,type)
;if(handlers.length)for(var args=Array.prototype.slice.call(arguments,2),i=0;i<handlers.length;++i)handlers[i].apply(null,args)
}function signalDOMEvent(cm,e,override){
return"string"==typeof e&&(e={type:e,
preventDefault:function(){this.defaultPrevented=!0
}
}),signal(cm,override||e.type,cm,e),e_defaultPrevented(e)||e.codemirrorIgnore
}function signalCursorActivity(cm){
var arr=cm._handlers&&cm._handlers.cursorActivity
;if(arr)for(var set=cm.curOp.cursorActivityHandlers||(cm.curOp.cursorActivityHandlers=[]),i=0;i<arr.length;++i)-1==indexOf(set,arr[i])&&set.push(arr[i])
}function hasHandler(emitter,type){
return getHandlers(emitter,type).length>0}
function eventMixin(ctor){
ctor.prototype.on=function(type,f){on(this,type,f)
},ctor.prototype.off=function(type,f){
off(this,type,f)}}function e_preventDefault(e){
e.preventDefault?e.preventDefault():e.returnValue=!1
}function e_stopPropagation(e){
e.stopPropagation?e.stopPropagation():e.cancelBubble=!0
}function e_defaultPrevented(e){
return null!=e.defaultPrevented?e.defaultPrevented:0==e.returnValue
}function e_stop(e){
e_preventDefault(e),e_stopPropagation(e)}
function e_target(e){return e.target||e.srcElement
}function e_button(e){var b=e.which
;return null==b&&(1&e.button?b=1:2&e.button?b=3:4&e.button&&(b=2)),
mac&&e.ctrlKey&&1==b&&(b=3),b}
var zwspSupported,badBidiRects,dragAndDrop=function(){
if(ie&&ie_version<9)return!1;var div=elt("div")
;return"draggable"in div||"dragDrop"in div}()
;function zeroWidthElement(measure){
if(null==zwspSupported){var test=elt("span","​")
;removeChildrenAndAdd(measure,elt("span",[test,document.createTextNode("x")])),
0!=measure.firstChild.offsetHeight&&(zwspSupported=test.offsetWidth<=1&&test.offsetHeight>2&&!(ie&&ie_version<8))
}
var node=zwspSupported?elt("span","​"):elt("span"," ",null,"display: inline-block; width: 1px; margin-right: -1px")
;return node.setAttribute("cm-text",""),node}
function hasBadBidiRects(measure){
if(null!=badBidiRects)return badBidiRects
;var txt=removeChildrenAndAdd(measure,document.createTextNode("AخA")),r0=range(txt,0,1).getBoundingClientRect(),r1=range(txt,1,2).getBoundingClientRect()
;return removeChildren(measure),
!(!r0||r0.left==r0.right)&&(badBidiRects=r1.right-r0.right<3)
}
var e,splitLinesAuto=3!="\n\nb".split(/\n/).length?function(string){
for(var pos=0,result=[],l=string.length;pos<=l;){
var nl=string.indexOf("\n",pos)
;-1==nl&&(nl=string.length)
;var line=string.slice(pos,"\r"==string.charAt(nl-1)?nl-1:nl),rt=line.indexOf("\r")
;-1!=rt?(result.push(line.slice(0,rt)),
pos+=rt+1):(result.push(line),pos=nl+1)}
return result}:function(string){
return string.split(/\r\n?|\n/)
},hasSelection=window.getSelection?function(te){
try{return te.selectionStart!=te.selectionEnd
}catch(e){return!1}}:function(te){var range$$1
;try{
range$$1=te.ownerDocument.selection.createRange()
}catch(e){}
return!(!range$$1||range$$1.parentElement()!=te)&&0!=range$$1.compareEndPoints("StartToEnd",range$$1)
},hasCopyEvent="oncopy"in(e=elt("div"))||(e.setAttribute("oncopy","return;"),
"function"==typeof e.oncopy),badZoomedRects=null,modes={},mimeModes={}
;function resolveMode(spec){
if("string"==typeof spec&&mimeModes.hasOwnProperty(spec))spec=mimeModes[spec];else if(spec&&"string"==typeof spec.name&&mimeModes.hasOwnProperty(spec.name)){
var found=mimeModes[spec.name]
;"string"==typeof found&&(found={name:found
}),(spec=createObj(found,spec)).name=found.name
}else{
if("string"==typeof spec&&/^[\w\-]+\/[\w\-]+\+xml$/.test(spec))return resolveMode("application/xml")
;if("string"==typeof spec&&/^[\w\-]+\/[\w\-]+\+json$/.test(spec))return resolveMode("application/json")
}return"string"==typeof spec?{name:spec}:spec||{
name:"null"}}function getMode(options,spec){
spec=resolveMode(spec)
;var mfactory=modes[spec.name]
;if(!mfactory)return getMode(options,"text/plain")
;var modeObj=mfactory(options,spec)
;if(modeExtensions.hasOwnProperty(spec.name)){
var exts=modeExtensions[spec.name]
;for(var prop in exts)exts.hasOwnProperty(prop)&&(modeObj.hasOwnProperty(prop)&&(modeObj["_"+prop]=modeObj[prop]),
modeObj[prop]=exts[prop])}
if(modeObj.name=spec.name,spec.helperType&&(modeObj.helperType=spec.helperType),
spec.modeProps)for(var prop$1 in spec.modeProps)modeObj[prop$1]=spec.modeProps[prop$1]
;return modeObj}var modeExtensions={}
;function extendMode(mode,properties){
var exts=modeExtensions.hasOwnProperty(mode)?modeExtensions[mode]:modeExtensions[mode]={}
;copyObj(properties,exts)}
function copyState(mode,state){
if(!0===state)return state
;if(mode.copyState)return mode.copyState(state)
;var nstate={};for(var n in state){
var val=state[n]
;val instanceof Array&&(val=val.concat([])),nstate[n]=val
}return nstate}function innerMode(mode,state){
for(var info;mode.innerMode&&(info=mode.innerMode(state))&&info.mode!=mode;)state=info.state,
mode=info.mode;return info||{mode:mode,state:state
}}function startState(mode,a1,a2){
return!mode.startState||mode.startState(a1,a2)}
var StringStream=function(string,tabSize,lineOracle){
this.pos=this.start=0,this.string=string,
this.tabSize=tabSize||8,this.lastColumnPos=this.lastColumnValue=0,
this.lineStart=0,this.lineOracle=lineOracle}
;StringStream.prototype.eol=function(){
return this.pos>=this.string.length
},StringStream.prototype.sol=function(){
return this.pos==this.lineStart
},StringStream.prototype.peek=function(){
return this.string.charAt(this.pos)||void 0
},StringStream.prototype.next=function(){
if(this.pos<this.string.length)return this.string.charAt(this.pos++)
},StringStream.prototype.eat=function(match){
var ch=this.string.charAt(this.pos)
;if("string"==typeof match?ch==match:ch&&(match.test?match.test(ch):match(ch)))return++this.pos,
ch
},StringStream.prototype.eatWhile=function(match){
for(var start=this.pos;this.eat(match););
return this.pos>start
},StringStream.prototype.eatSpace=function(){
for(var start=this.pos;/[\s\u00a0]/.test(this.string.charAt(this.pos));)++this.pos
;return this.pos>start
},StringStream.prototype.skipToEnd=function(){
this.pos=this.string.length
},StringStream.prototype.skipTo=function(ch){
var found=this.string.indexOf(ch,this.pos)
;if(found>-1)return this.pos=found,!0
},StringStream.prototype.backUp=function(n){
this.pos-=n
},StringStream.prototype.column=function(){
return this.lastColumnPos<this.start&&(this.lastColumnValue=countColumn(this.string,this.start,this.tabSize,this.lastColumnPos,this.lastColumnValue),
this.lastColumnPos=this.start),
this.lastColumnValue-(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0)
},StringStream.prototype.indentation=function(){
return countColumn(this.string,null,this.tabSize)-(this.lineStart?countColumn(this.string,this.lineStart,this.tabSize):0)
},
StringStream.prototype.match=function(pattern,consume,caseInsensitive){
if("string"!=typeof pattern){
var match=this.string.slice(this.pos).match(pattern)
;return match&&match.index>0?null:(match&&!1!==consume&&(this.pos+=match[0].length),
match)}var cased=function(str){
return caseInsensitive?str.toLowerCase():str
},substr=this.string.substr(this.pos,pattern.length)
;if(cased(substr)==cased(pattern))return!1!==consume&&(this.pos+=pattern.length),
!0},StringStream.prototype.current=function(){
return this.string.slice(this.start,this.pos)
},StringStream.prototype.hideFirstChars=function(n,inner){
this.lineStart+=n;try{return inner()}finally{
this.lineStart-=n}
},StringStream.prototype.lookAhead=function(n){
var oracle=this.lineOracle
;return oracle&&oracle.lookAhead(n)
},StringStream.prototype.baseToken=function(){
var oracle=this.lineOracle
;return oracle&&oracle.baseToken(this.pos)}
;var SavedContext=function(state,lookAhead){
this.state=state,this.lookAhead=lookAhead
},Context=function(doc,state,line,lookAhead){
this.state=state,this.doc=doc,this.line=line,
this.maxLookAhead=lookAhead||0,this.baseTokens=null,
this.baseTokenPos=1}
;function highlightLine(cm,line,context,forceToEnd){
var st=[cm.state.modeGen],lineClasses={}
;runMode(cm,line.text,cm.doc.mode,context,function(end,style){
return st.push(end,style)},lineClasses,forceToEnd)
;for(var state=context.state,loop=function(o){
context.baseTokens=st
;var overlay=cm.state.overlays[o],i=1,at=0
;context.state=!0,runMode(cm,line.text,overlay.mode,context,function(end,style){
for(var start=i;at<end;){var i_end=st[i]
;i_end>end&&st.splice(i,1,end,st[i+1],i_end),
i+=2,at=Math.min(end,i_end)}
if(style)if(overlay.opaque)st.splice(start,i-start,end,"overlay "+style),
i=start+2;else for(;start<i;start+=2){
var cur=st[start+1]
;st[start+1]=(cur?cur+" ":"")+"overlay "+style}
},lineClasses),context.state=state,
context.baseTokens=null,context.baseTokenPos=1
},o=0;o<cm.state.overlays.length;++o)loop(o)
;return{styles:st,
classes:lineClasses.bgClass||lineClasses.textClass?lineClasses:null
}}function getLineStyles(cm,line,updateFrontier){
if(!line.styles||line.styles[0]!=cm.state.modeGen){
var context=getContextBefore(cm,lineNo(line)),resetState=line.text.length>cm.options.maxHighlightLength&&copyState(cm.doc.mode,context.state),result=highlightLine(cm,line,context)
;resetState&&(context.state=resetState),
line.stateAfter=context.save(!resetState),
line.styles=result.styles,result.classes?line.styleClasses=result.classes:line.styleClasses&&(line.styleClasses=null),
updateFrontier===cm.doc.highlightFrontier&&(cm.doc.modeFrontier=Math.max(cm.doc.modeFrontier,++cm.doc.highlightFrontier))
}return line.styles}
function getContextBefore(cm,n,precise){
var doc=cm.doc,display=cm.display
;if(!doc.mode.startState)return new Context(doc,!0,n)
;var start=function(cm,n,precise){
for(var minindent,minline,doc=cm.doc,lim=precise?-1:n-(cm.doc.mode.innerMode?1e3:100),search=n;search>lim;--search){
if(search<=doc.first)return doc.first
;var line=getLine(doc,search-1),after=line.stateAfter
;if(after&&(!precise||search+(after instanceof SavedContext?after.lookAhead:0)<=doc.modeFrontier))return search
;var indented=countColumn(line.text,null,cm.options.tabSize)
;(null==minline||minindent>indented)&&(minline=search-1,
minindent=indented)}return minline
}(cm,n,precise),saved=start>doc.first&&getLine(doc,start-1).stateAfter,context=saved?Context.fromSaved(doc,saved,start):new Context(doc,startState(doc.mode),start)
;return doc.iter(start,n,function(line){
processLine(cm,line.text,context)
;var pos=context.line
;line.stateAfter=pos==n-1||pos%5==0||pos>=display.viewFrom&&pos<display.viewTo?context.save():null,
context.nextLine()
}),precise&&(doc.modeFrontier=context.line),context
}function processLine(cm,text,context,startAt){
var mode=cm.doc.mode,stream=new StringStream(text,cm.options.tabSize,context)
;for(stream.start=stream.pos=startAt||0,
""==text&&callBlankLine(mode,context.state);!stream.eol();)readToken(mode,stream,context.state),
stream.start=stream.pos}
function callBlankLine(mode,state){
if(mode.blankLine)return mode.blankLine(state)
;if(mode.innerMode){
var inner=innerMode(mode,state)
;return inner.mode.blankLine?inner.mode.blankLine(inner.state):void 0
}}function readToken(mode,stream,state,inner){
for(var i=0;i<10;i++){
inner&&(inner[0]=innerMode(mode,state).mode)
;var style=mode.token(stream,state)
;if(stream.pos>stream.start)return style}
throw new Error("Mode "+mode.name+" failed to advance stream.")
}Context.prototype.lookAhead=function(n){
var line=this.doc.getLine(this.line+n)
;return null!=line&&n>this.maxLookAhead&&(this.maxLookAhead=n),
line},Context.prototype.baseToken=function(n){
if(!this.baseTokens)return null
;for(;this.baseTokens[this.baseTokenPos]<=n;)this.baseTokenPos+=2
;var type=this.baseTokens[this.baseTokenPos+1]
;return{
type:type&&type.replace(/( |^)overlay .*/,""),
size:this.baseTokens[this.baseTokenPos]-n}
},Context.prototype.nextLine=function(){
this.line++,this.maxLookAhead>0&&this.maxLookAhead--
},Context.fromSaved=function(doc,saved,line){
return saved instanceof SavedContext?new Context(doc,copyState(doc.mode,saved.state),line,saved.lookAhead):new Context(doc,copyState(doc.mode,saved),line)
},Context.prototype.save=function(copy){
var state=!1!==copy?copyState(this.doc.mode,this.state):this.state
;return this.maxLookAhead>0?new SavedContext(state,this.maxLookAhead):state
};var Token=function(stream,type,state){
this.start=stream.start,this.end=stream.pos,
this.string=stream.current(),this.type=type||null,
this.state=state}
;function takeToken(cm,pos,precise,asArray){
var style,doc=cm.doc,mode=doc.mode
;pos=_clipPos(doc,pos)
;var tokens,line=getLine(doc,pos.line),context=getContextBefore(cm,pos.line,precise),stream=new StringStream(line.text,cm.options.tabSize,context)
;for(asArray&&(tokens=[]);(asArray||stream.pos<pos.ch)&&!stream.eol();)stream.start=stream.pos,
style=readToken(mode,stream,context.state),
asArray&&tokens.push(new Token(stream,style,copyState(doc.mode,context.state)))
;return asArray?tokens:new Token(stream,style,context.state)
}function extractLineClasses(type,output){
if(type)for(;;){
var lineClass=type.match(/(?:^|\s+)line-(background-)?(\S+)/)
;if(!lineClass)break
;type=type.slice(0,lineClass.index)+type.slice(lineClass.index+lineClass[0].length)
;var prop=lineClass[1]?"bgClass":"textClass"
;null==output[prop]?output[prop]=lineClass[2]:new RegExp("(?:^|s)"+lineClass[2]+"(?:$|s)").test(output[prop])||(output[prop]+=" "+lineClass[2])
}return type}
function runMode(cm,text,mode,context,f,lineClasses,forceToEnd){
var flattenSpans=mode.flattenSpans
;null==flattenSpans&&(flattenSpans=cm.options.flattenSpans)
;var style,curStart=0,curStyle=null,stream=new StringStream(text,cm.options.tabSize,context),inner=cm.options.addModeClass&&[null]
;for(""==text&&extractLineClasses(callBlankLine(mode,context.state),lineClasses);!stream.eol();){
if(stream.pos>cm.options.maxHighlightLength?(flattenSpans=!1,
forceToEnd&&processLine(cm,text,context,stream.pos),
stream.pos=text.length,style=null):style=extractLineClasses(readToken(mode,stream,context.state,inner),lineClasses),
inner){var mName=inner[0].name
;mName&&(style="m-"+(style?mName+" "+style:mName))
}if(!flattenSpans||curStyle!=style){
for(;curStart<stream.start;)curStart=Math.min(stream.start,curStart+5e3),
f(curStart,curStyle);curStyle=style}
stream.start=stream.pos}
for(;curStart<stream.pos;){
var pos=Math.min(stream.pos,curStart+5e3)
;f(pos,curStyle),curStart=pos}}
var Line=function(text,markedSpans,estimateHeight){
this.text=text,attachMarkedSpans(this,markedSpans),
this.height=estimateHeight?estimateHeight(this):1}
;function cleanUpLine(line){
line.parent=null,detachMarkedSpans(line)}
Line.prototype.lineNo=function(){
return lineNo(this)},eventMixin(Line)
;var styleToClassCache={},styleToClassCacheWithMode={}
;function interpretTokenStyle(style,options){
if(!style||/^\s*$/.test(style))return null
;var cache=options.addModeClass?styleToClassCacheWithMode:styleToClassCache
;return cache[style]||(cache[style]=style.replace(/\S+/g,"cm-$&"))
}function buildLineContent(cm,lineView){
var content=eltP("span",null,null,webkit?"padding-right: .1px":null),builder={
pre:eltP("pre",[content],"CodeMirror-line"),
content:content,col:0,pos:0,cm:cm,
trailingSpace:!1,
splitSpaces:cm.getOption("lineWrapping")}
;lineView.measure={}
;for(var i=0;i<=(lineView.rest?lineView.rest.length:0);i++){
var line=i?lineView.rest[i-1]:lineView.line,order=void 0
;builder.pos=0,builder.addToken=buildToken,
hasBadBidiRects(cm.display.measure)&&(order=getOrder(line,cm.doc.direction))&&(builder.addToken=buildTokenBadBidi(builder.addToken,order)),
builder.map=[]
;var allowFrontierUpdate=lineView!=cm.display.externalMeasured&&lineNo(line)
;insertLineContent(line,builder,getLineStyles(cm,line,allowFrontierUpdate)),
line.styleClasses&&(line.styleClasses.bgClass&&(builder.bgClass=joinClasses(line.styleClasses.bgClass,builder.bgClass||"")),
line.styleClasses.textClass&&(builder.textClass=joinClasses(line.styleClasses.textClass,builder.textClass||""))),
0==builder.map.length&&builder.map.push(0,0,builder.content.appendChild(zeroWidthElement(cm.display.measure))),
0==i?(lineView.measure.map=builder.map,
lineView.measure.cache={}):((lineView.measure.maps||(lineView.measure.maps=[])).push(builder.map),
(lineView.measure.caches||(lineView.measure.caches=[])).push({}))
}if(webkit){var last=builder.content.lastChild
;(/\bcm-tab\b/.test(last.className)||last.querySelector&&last.querySelector(".cm-tab"))&&(builder.content.className="cm-tab-wrap-hack")
}
return signal(cm,"renderLine",cm,lineView.line,builder.pre),builder.pre.className&&(builder.textClass=joinClasses(builder.pre.className,builder.textClass||"")),
builder}
function defaultSpecialCharPlaceholder(ch){
var token=elt("span","•","cm-invalidchar")
;return token.title="\\u"+ch.charCodeAt(0).toString(16),
token.setAttribute("aria-label",token.title),token
}
function buildToken(builder,text,style,startStyle,endStyle,css,attributes){
if(text){
var content,displayText=builder.splitSpaces?function(text,trailingBefore){
if(text.length>1&&!/  /.test(text))return text
;for(var spaceBefore=trailingBefore,result="",i=0;i<text.length;i++){
var ch=text.charAt(i)
;" "!=ch||!spaceBefore||i!=text.length-1&&32!=text.charCodeAt(i+1)||(ch=" "),
result+=ch,spaceBefore=" "==ch}return result
}(text,builder.trailingSpace):text,special=builder.cm.state.specialChars,mustWrap=!1
;if(special.test(text)){
content=document.createDocumentFragment()
;for(var pos=0;;){special.lastIndex=pos
;var m=special.exec(text),skipped=m?m.index-pos:text.length-pos
;if(skipped){
var txt=document.createTextNode(displayText.slice(pos,pos+skipped))
;ie&&ie_version<9?content.appendChild(elt("span",[txt])):content.appendChild(txt),
builder.map.push(builder.pos,builder.pos+skipped,txt),
builder.col+=skipped,builder.pos+=skipped}
if(!m)break;pos+=skipped+1;var txt$1=void 0
;if("\t"==m[0]){
var tabSize=builder.cm.options.tabSize,tabWidth=tabSize-builder.col%tabSize
;(txt$1=content.appendChild(elt("span",spaceStr(tabWidth),"cm-tab"))).setAttribute("role","presentation"),
txt$1.setAttribute("cm-text","\t"),
builder.col+=tabWidth
}else"\r"==m[0]||"\n"==m[0]?((txt$1=content.appendChild(elt("span","\r"==m[0]?"␍":"␤","cm-invalidchar"))).setAttribute("cm-text",m[0]),
builder.col+=1):((txt$1=builder.cm.options.specialCharPlaceholder(m[0])).setAttribute("cm-text",m[0]),
ie&&ie_version<9?content.appendChild(elt("span",[txt$1])):content.appendChild(txt$1),
builder.col+=1)
;builder.map.push(builder.pos,builder.pos+1,txt$1),builder.pos++
}
}else builder.col+=text.length,content=document.createTextNode(displayText),builder.map.push(builder.pos,builder.pos+text.length,content),
ie&&ie_version<9&&(mustWrap=!0),
builder.pos+=text.length
;if(builder.trailingSpace=32==displayText.charCodeAt(text.length-1),
style||startStyle||endStyle||mustWrap||css){
var fullStyle=style||""
;startStyle&&(fullStyle+=startStyle),endStyle&&(fullStyle+=endStyle)
;var token=elt("span",[content],fullStyle,css)
;if(attributes)for(var attr in attributes)attributes.hasOwnProperty(attr)&&"style"!=attr&&"class"!=attr&&token.setAttribute(attr,attributes[attr])
;return builder.content.appendChild(token)}
builder.content.appendChild(content)}}
function buildTokenBadBidi(inner,order){
return function(builder,text,style,startStyle,endStyle,css,attributes){
style=style?style+" cm-force-border":"cm-force-border"
;for(var start=builder.pos,end=start+text.length;;){
for(var part=void 0,i=0;i<order.length&&!((part=order[i]).to>start&&part.from<=start);i++);
if(part.to>=end)return inner(builder,text,style,startStyle,endStyle,css,attributes)
;inner(builder,text.slice(0,part.to-start),style,startStyle,null,css,attributes),
startStyle=null,
text=text.slice(part.to-start),start=part.to}}}
function buildCollapsedSpan(builder,size,marker,ignoreWidget){
var widget=!ignoreWidget&&marker.widgetNode
;widget&&builder.map.push(builder.pos,builder.pos+size,widget),
!ignoreWidget&&builder.cm.display.input.needsContentAttribute&&(widget||(widget=builder.content.appendChild(document.createElement("span"))),
widget.setAttribute("cm-marker",marker.id)),
widget&&(builder.cm.display.input.setUneditable(widget),
builder.content.appendChild(widget)),
builder.pos+=size,builder.trailingSpace=!1}
function insertLineContent(line,builder,styles){
var spans=line.markedSpans,allText=line.text,at=0
;if(spans)for(var style,css,spanStyle,spanEndStyle,spanStartStyle,collapsed,attributes,len=allText.length,pos=0,i=1,text="",nextChange=0;;){
if(nextChange==pos){
spanStyle=spanEndStyle=spanStartStyle=css="",attributes=null,
collapsed=null,nextChange=1/0
;for(var foundBookmarks=[],endStyles=void 0,j=0;j<spans.length;++j){
var sp=spans[j],m=sp.marker
;if("bookmark"==m.type&&sp.from==pos&&m.widgetNode)foundBookmarks.push(m);else if(sp.from<=pos&&(null==sp.to||sp.to>pos||m.collapsed&&sp.to==pos&&sp.from==pos)){
if(null!=sp.to&&sp.to!=pos&&nextChange>sp.to&&(nextChange=sp.to,
spanEndStyle=""),
m.className&&(spanStyle+=" "+m.className),m.css&&(css=(css?css+";":"")+m.css),
m.startStyle&&sp.from==pos&&(spanStartStyle+=" "+m.startStyle),
m.endStyle&&sp.to==nextChange&&(endStyles||(endStyles=[])).push(m.endStyle,sp.to),
m.title&&((attributes||(attributes={})).title=m.title),
m.attributes)for(var attr in m.attributes)(attributes||(attributes={}))[attr]=m.attributes[attr]
;m.collapsed&&(!collapsed||compareCollapsedMarkers(collapsed.marker,m)<0)&&(collapsed=sp)
}else sp.from>pos&&nextChange>sp.from&&(nextChange=sp.from)
}
if(endStyles)for(var j$1=0;j$1<endStyles.length;j$1+=2)endStyles[j$1+1]==nextChange&&(spanEndStyle+=" "+endStyles[j$1])
;if(!collapsed||collapsed.from==pos)for(var j$2=0;j$2<foundBookmarks.length;++j$2)buildCollapsedSpan(builder,0,foundBookmarks[j$2])
;if(collapsed&&(collapsed.from||0)==pos){
if(buildCollapsedSpan(builder,(null==collapsed.to?len+1:collapsed.to)-pos,collapsed.marker,null==collapsed.from),
null==collapsed.to)return
;collapsed.to==pos&&(collapsed=!1)}}
if(pos>=len)break
;for(var upto=Math.min(len,nextChange);;){
if(text){var end=pos+text.length;if(!collapsed){
var tokenText=end>upto?text.slice(0,upto-pos):text
;builder.addToken(builder,tokenText,style?style+spanStyle:spanStyle,spanStartStyle,pos+tokenText.length==nextChange?spanEndStyle:"",css,attributes)
}if(end>=upto){text=text.slice(upto-pos),pos=upto
;break}pos=end,spanStartStyle=""}
text=allText.slice(at,at=styles[i++]),style=interpretTokenStyle(styles[i++],builder.cm.options)
}
}else for(var i$1=1;i$1<styles.length;i$1+=2)builder.addToken(builder,allText.slice(at,at=styles[i$1]),interpretTokenStyle(styles[i$1+1],builder.cm.options))
}function LineView(doc,line,lineN){
this.line=line,this.rest=function(line){
for(var merged,lines;merged=collapsedSpanAtEnd(line);)line=merged.find(1,!0).line,
(lines||(lines=[])).push(line);return lines
}(line),this.size=this.rest?lineNo(lst(this.rest))-lineN+1:1,
this.node=this.text=null,
this.hidden=lineIsHidden(doc,line)}
function buildViewArray(cm,from,to){
for(var nextPos,array=[],pos=from;pos<to;pos=nextPos){
var view=new LineView(cm.doc,getLine(cm.doc,pos),pos)
;nextPos=pos+view.size,array.push(view)}
return array}
var operationGroup=null,orphanDelayedCallbacks=null
;function signalLater(emitter,type){
var arr=getHandlers(emitter,type);if(arr.length){
var list,args=Array.prototype.slice.call(arguments,2)
;operationGroup?list=operationGroup.delayedCallbacks:orphanDelayedCallbacks?list=orphanDelayedCallbacks:(list=orphanDelayedCallbacks=[],
setTimeout(fireOrphanDelayed,0))
;for(var loop=function(i){list.push(function(){
return arr[i].apply(null,args)})
},i=0;i<arr.length;++i)loop(i)}}
function fireOrphanDelayed(){
var delayed=orphanDelayedCallbacks
;orphanDelayedCallbacks=null
;for(var i=0;i<delayed.length;++i)delayed[i]()}
function updateLineForChanges(cm,lineView,lineN,dims){
for(var j=0;j<lineView.changes.length;j++){
var type=lineView.changes[j]
;"text"==type?updateLineText(cm,lineView):"gutter"==type?updateLineGutter(cm,lineView,lineN,dims):"class"==type?updateLineClasses(cm,lineView):"widget"==type&&updateLineWidgets(cm,lineView,dims)
}lineView.changes=null}
function ensureLineWrapped(lineView){
return lineView.node==lineView.text&&(lineView.node=elt("div",null,null,"position: relative"),
lineView.text.parentNode&&lineView.text.parentNode.replaceChild(lineView.node,lineView.text),
lineView.node.appendChild(lineView.text),
ie&&ie_version<8&&(lineView.node.style.zIndex=2)),
lineView.node}
function getLineContent(cm,lineView){
var ext=cm.display.externalMeasured
;return ext&&ext.line==lineView.line?(cm.display.externalMeasured=null,
lineView.measure=ext.measure,
ext.built):buildLineContent(cm,lineView)}
function updateLineText(cm,lineView){
var cls=lineView.text.className,built=getLineContent(cm,lineView)
;lineView.text==lineView.node&&(lineView.node=built.pre),
lineView.text.parentNode.replaceChild(built.pre,lineView.text),
lineView.text=built.pre,
built.bgClass!=lineView.bgClass||built.textClass!=lineView.textClass?(lineView.bgClass=built.bgClass,
lineView.textClass=built.textClass,
updateLineClasses(cm,lineView)):cls&&(lineView.text.className=cls)
}function updateLineClasses(cm,lineView){
!function(cm,lineView){
var cls=lineView.bgClass?lineView.bgClass+" "+(lineView.line.bgClass||""):lineView.line.bgClass
;if(cls&&(cls+=" CodeMirror-linebackground"),
lineView.background)cls?lineView.background.className=cls:(lineView.background.parentNode.removeChild(lineView.background),
lineView.background=null);else if(cls){
var wrap=ensureLineWrapped(lineView)
;lineView.background=wrap.insertBefore(elt("div",null,cls),wrap.firstChild),
cm.display.input.setUneditable(lineView.background)
}
}(cm,lineView),lineView.line.wrapClass?ensureLineWrapped(lineView).className=lineView.line.wrapClass:lineView.node!=lineView.text&&(lineView.node.className="")
;var textClass=lineView.textClass?lineView.textClass+" "+(lineView.line.textClass||""):lineView.line.textClass
;lineView.text.className=textClass||""}
function updateLineGutter(cm,lineView,lineN,dims){
if(lineView.gutter&&(lineView.node.removeChild(lineView.gutter),
lineView.gutter=null),
lineView.gutterBackground&&(lineView.node.removeChild(lineView.gutterBackground),
lineView.gutterBackground=null),
lineView.line.gutterClass){
var wrap=ensureLineWrapped(lineView)
;lineView.gutterBackground=elt("div",null,"CodeMirror-gutter-background "+lineView.line.gutterClass,"left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px; width: "+dims.gutterTotalWidth+"px"),
cm.display.input.setUneditable(lineView.gutterBackground),
wrap.insertBefore(lineView.gutterBackground,lineView.text)
}var markers=lineView.line.gutterMarkers
;if(cm.options.lineNumbers||markers){
var wrap$1=ensureLineWrapped(lineView),gutterWrap=lineView.gutter=elt("div",null,"CodeMirror-gutter-wrapper","left: "+(cm.options.fixedGutter?dims.fixedPos:-dims.gutterTotalWidth)+"px")
;if(cm.display.input.setUneditable(gutterWrap),
wrap$1.insertBefore(gutterWrap,lineView.text),
lineView.line.gutterClass&&(gutterWrap.className+=" "+lineView.line.gutterClass),
!cm.options.lineNumbers||markers&&markers["CodeMirror-linenumbers"]||(lineView.lineNumber=gutterWrap.appendChild(elt("div",lineNumberFor(cm.options,lineN),"CodeMirror-linenumber CodeMirror-gutter-elt","left: "+dims.gutterLeft["CodeMirror-linenumbers"]+"px; width: "+cm.display.lineNumInnerWidth+"px"))),
markers)for(var k=0;k<cm.options.gutters.length;++k){
var id=cm.options.gutters[k],found=markers.hasOwnProperty(id)&&markers[id]
;found&&gutterWrap.appendChild(elt("div",[found],"CodeMirror-gutter-elt","left: "+dims.gutterLeft[id]+"px; width: "+dims.gutterWidth[id]+"px"))
}}}function updateLineWidgets(cm,lineView,dims){
lineView.alignable&&(lineView.alignable=null)
;for(var node=lineView.node.firstChild,next=void 0;node;node=next)next=node.nextSibling,
"CodeMirror-linewidget"==node.className&&lineView.node.removeChild(node)
;insertLineWidgets(cm,lineView,dims)}
function buildLineElement(cm,lineView,lineN,dims){
var built=getLineContent(cm,lineView)
;return lineView.text=lineView.node=built.pre,
built.bgClass&&(lineView.bgClass=built.bgClass),
built.textClass&&(lineView.textClass=built.textClass),
updateLineClasses(cm,lineView),
updateLineGutter(cm,lineView,lineN,dims),insertLineWidgets(cm,lineView,dims),
lineView.node}
function insertLineWidgets(cm,lineView,dims){
if(insertLineWidgetsFor(cm,lineView.line,lineView,dims,!0),
lineView.rest)for(var i=0;i<lineView.rest.length;i++)insertLineWidgetsFor(cm,lineView.rest[i],lineView,dims,!1)
}
function insertLineWidgetsFor(cm,line,lineView,dims,allowAbove){
if(line.widgets)for(var wrap=ensureLineWrapped(lineView),i=0,ws=line.widgets;i<ws.length;++i){
var widget=ws[i],node=elt("div",[widget.node],"CodeMirror-linewidget")
;widget.handleMouseEvents||node.setAttribute("cm-ignore-events","true"),
positionLineWidget(widget,node,lineView,dims),
cm.display.input.setUneditable(node),
allowAbove&&widget.above?wrap.insertBefore(node,lineView.gutter||lineView.text):wrap.appendChild(node),
signalLater(widget,"redraw")}}
function positionLineWidget(widget,node,lineView,dims){
if(widget.noHScroll){
(lineView.alignable||(lineView.alignable=[])).push(node)
;var width=dims.wrapperWidth
;node.style.left=dims.fixedPos+"px",widget.coverGutter||(width-=dims.gutterTotalWidth,
node.style.paddingLeft=dims.gutterTotalWidth+"px"),
node.style.width=width+"px"}
widget.coverGutter&&(node.style.zIndex=5,node.style.position="relative",
widget.noHScroll||(node.style.marginLeft=-dims.gutterTotalWidth+"px"))
}function widgetHeight(widget){
if(null!=widget.height)return widget.height
;var cm=widget.doc.cm;if(!cm)return 0
;if(!contains(document.body,widget.node)){
var parentStyle="position: relative;"
;widget.coverGutter&&(parentStyle+="margin-left: -"+cm.display.gutters.offsetWidth+"px;"),
widget.noHScroll&&(parentStyle+="width: "+cm.display.wrapper.clientWidth+"px;"),
removeChildrenAndAdd(cm.display.measure,elt("div",[widget.node],null,parentStyle))
}
return widget.height=widget.node.parentNode.offsetHeight
}function eventInWidget(display,e){
for(var n=e_target(e);n!=display.wrapper;n=n.parentNode)if(!n||1==n.nodeType&&"true"==n.getAttribute("cm-ignore-events")||n.parentNode==display.sizer&&n!=display.mover)return!0
}function paddingTop(display){
return display.lineSpace.offsetTop}
function paddingVert(display){
return display.mover.offsetHeight-display.lineSpace.offsetHeight
}function paddingH(display){
if(display.cachedPaddingH)return display.cachedPaddingH
;var e=removeChildrenAndAdd(display.measure,elt("pre","x")),style=window.getComputedStyle?window.getComputedStyle(e):e.currentStyle,data={
left:parseInt(style.paddingLeft),
right:parseInt(style.paddingRight)}
;return isNaN(data.left)||isNaN(data.right)||(display.cachedPaddingH=data),
data}function scrollGap(cm){
return scrollerGap-cm.display.nativeBarWidth}
function displayWidth(cm){
return cm.display.scroller.clientWidth-scrollGap(cm)-cm.display.barWidth
}function displayHeight(cm){
return cm.display.scroller.clientHeight-scrollGap(cm)-cm.display.barHeight
}function mapFromLineView(lineView,line,lineN){
if(lineView.line==line)return{
map:lineView.measure.map,
cache:lineView.measure.cache}
;for(var i=0;i<lineView.rest.length;i++)if(lineView.rest[i]==line)return{
map:lineView.measure.maps[i],
cache:lineView.measure.caches[i]}
;for(var i$1=0;i$1<lineView.rest.length;i$1++)if(lineNo(lineView.rest[i$1])>lineN)return{
map:lineView.measure.maps[i$1],
cache:lineView.measure.caches[i$1],before:!0}}
function measureChar(cm,line,ch,bias){
return measureCharPrepared(cm,prepareMeasureForLine(cm,line),ch,bias)
}function findViewForLine(cm,lineN){
if(lineN>=cm.display.viewFrom&&lineN<cm.display.viewTo)return cm.display.view[findViewIndex(cm,lineN)]
;var ext=cm.display.externalMeasured
;return ext&&lineN>=ext.lineN&&lineN<ext.lineN+ext.size?ext:void 0
}function prepareMeasureForLine(cm,line){
var lineN=lineNo(line),view=findViewForLine(cm,lineN)
;view&&!view.text?view=null:view&&view.changes&&(updateLineForChanges(cm,view,lineN,getDimensions(cm)),
cm.curOp.forceUpdate=!0),
view||(view=function(cm,line){
var lineN=lineNo(line=visualLine(line)),view=cm.display.externalMeasured=new LineView(cm.doc,line,lineN)
;view.lineN=lineN
;var built=view.built=buildLineContent(cm,view)
;return view.text=built.pre,removeChildrenAndAdd(cm.display.lineMeasure,built.pre),
view}(cm,line))
;var info=mapFromLineView(view,line,lineN);return{
line:line,view:view,rect:null,map:info.map,
cache:info.cache,before:info.before,hasHeights:!1}
}
function measureCharPrepared(cm,prepared,ch,bias,varHeight){
prepared.before&&(ch=-1)
;var found,key=ch+(bias||"")
;return prepared.cache.hasOwnProperty(key)?found=prepared.cache[key]:(prepared.rect||(prepared.rect=prepared.view.text.getBoundingClientRect()),
prepared.hasHeights||(function(cm,lineView,rect){
var wrapping=cm.options.lineWrapping,curWidth=wrapping&&displayWidth(cm)
;if(!lineView.measure.heights||wrapping&&lineView.measure.width!=curWidth){
var heights=lineView.measure.heights=[]
;if(wrapping){lineView.measure.width=curWidth
;for(var rects=lineView.text.firstChild.getClientRects(),i=0;i<rects.length-1;i++){
var cur=rects[i],next=rects[i+1]
;Math.abs(cur.bottom-next.bottom)>2&&heights.push((cur.bottom+next.top)/2-rect.top)
}}heights.push(rect.bottom-rect.top)}
}(cm,prepared.view,prepared.rect),prepared.hasHeights=!0),
(found=function(cm,prepared,ch,bias){
var rect,place=nodeAndOffsetInLineMap(prepared.map,ch,bias),node=place.node,start=place.start,end=place.end,collapse=place.collapse
;if(3==node.nodeType){for(var i$1=0;i$1<4;i$1++){
for(;start&&isExtendingChar(prepared.line.text.charAt(place.coverStart+start));)--start
;for(;place.coverStart+end<place.coverEnd&&isExtendingChar(prepared.line.text.charAt(place.coverStart+end));)++end
;if((rect=ie&&ie_version<9&&0==start&&end==place.coverEnd-place.coverStart?node.parentNode.getBoundingClientRect():getUsefulRect(range(node,start,end).getClientRects(),bias)).left||rect.right||0==start)break
;end=start,start-=1,collapse="right"}
ie&&ie_version<11&&(rect=function(measure,rect){
if(!window.screen||null==screen.logicalXDPI||screen.logicalXDPI==screen.deviceXDPI||!function(measure){
if(null!=badZoomedRects)return badZoomedRects
;var node=removeChildrenAndAdd(measure,elt("span","x")),normal=node.getBoundingClientRect(),fromRange=range(node,0,1).getBoundingClientRect()
;return badZoomedRects=Math.abs(normal.left-fromRange.left)>1
}(measure))return rect
;var scaleX=screen.logicalXDPI/screen.deviceXDPI,scaleY=screen.logicalYDPI/screen.deviceYDPI
;return{left:rect.left*scaleX,
right:rect.right*scaleX,top:rect.top*scaleY,
bottom:rect.bottom*scaleY}
}(cm.display.measure,rect))}else{var rects
;start>0&&(collapse=bias="right"),rect=cm.options.lineWrapping&&(rects=node.getClientRects()).length>1?rects["right"==bias?rects.length-1:0]:node.getBoundingClientRect()
}
if(ie&&ie_version<9&&!start&&(!rect||!rect.left&&!rect.right)){
var rSpan=node.parentNode.getClientRects()[0]
;rect=rSpan?{left:rSpan.left,
right:rSpan.left+charWidth(cm.display),
top:rSpan.top,bottom:rSpan.bottom}:nullRect}
for(var rtop=rect.top-prepared.rect.top,rbot=rect.bottom-prepared.rect.top,mid=(rtop+rbot)/2,heights=prepared.view.measure.heights,i=0;i<heights.length-1&&!(mid<heights[i]);i++);
var top=i?heights[i-1]:0,bot=heights[i],result={
left:("right"==collapse?rect.right:rect.left)-prepared.rect.left,
right:("left"==collapse?rect.left:rect.right)-prepared.rect.left,
top:top,bottom:bot}
;return rect.left||rect.right||(result.bogus=!0),cm.options.singleCursorHeightPerLine||(result.rtop=rtop,
result.rbottom=rbot),result
}(cm,prepared,ch,bias)).bogus||(prepared.cache[key]=found)),
{left:found.left,right:found.right,
top:varHeight?found.rtop:found.top,
bottom:varHeight?found.rbottom:found.bottom}}
var measureText,nullRect={left:0,right:0,top:0,
bottom:0}
;function nodeAndOffsetInLineMap(map$$1,ch,bias){
for(var node,start,end,collapse,mStart,mEnd,i=0;i<map$$1.length;i+=3)if(mStart=map$$1[i],
mEnd=map$$1[i+1],
ch<mStart?(start=0,end=1,collapse="left"):ch<mEnd?end=1+(start=ch-mStart):(i==map$$1.length-3||ch==mEnd&&map$$1[i+3]>ch)&&(start=(end=mEnd-mStart)-1,
ch>=mEnd&&(collapse="right")),null!=start){
if(node=map$$1[i+2],mStart==mEnd&&bias==(node.insertLeft?"left":"right")&&(collapse=bias),
"left"==bias&&0==start)for(;i&&map$$1[i-2]==map$$1[i-3]&&map$$1[i-1].insertLeft;)node=map$$1[2+(i-=3)],
collapse="left"
;if("right"==bias&&start==mEnd-mStart)for(;i<map$$1.length-3&&map$$1[i+3]==map$$1[i+4]&&!map$$1[i+5].insertLeft;)node=map$$1[(i+=3)+2],
collapse="right";break}return{node:node,
start:start,end:end,collapse:collapse,
coverStart:mStart,coverEnd:mEnd}}
function getUsefulRect(rects,bias){
var rect=nullRect
;if("left"==bias)for(var i=0;i<rects.length&&(rect=rects[i]).left==rect.right;i++);else for(var i$1=rects.length-1;i$1>=0&&(rect=rects[i$1]).left==rect.right;i$1--);
return rect}
function clearLineMeasurementCacheFor(lineView){
if(lineView.measure&&(lineView.measure.cache={},
lineView.measure.heights=null,lineView.rest))for(var i=0;i<lineView.rest.length;i++)lineView.measure.caches[i]={}
}function clearLineMeasurementCache(cm){
cm.display.externalMeasure=null,removeChildren(cm.display.lineMeasure)
;for(var i=0;i<cm.display.view.length;i++)clearLineMeasurementCacheFor(cm.display.view[i])
}function clearCaches(cm){
clearLineMeasurementCache(cm),cm.display.cachedCharWidth=cm.display.cachedTextHeight=cm.display.cachedPaddingH=null,
cm.options.lineWrapping||(cm.display.maxLineChanged=!0),
cm.display.lineNumChars=null}
function pageScrollX(){
return chrome&&android?-(document.body.getBoundingClientRect().left-parseInt(getComputedStyle(document.body).marginLeft)):window.pageXOffset||(document.documentElement||document.body).scrollLeft
}function pageScrollY(){
return chrome&&android?-(document.body.getBoundingClientRect().top-parseInt(getComputedStyle(document.body).marginTop)):window.pageYOffset||(document.documentElement||document.body).scrollTop
}function widgetTopHeight(lineObj){var height=0
;if(lineObj.widgets)for(var i=0;i<lineObj.widgets.length;++i)lineObj.widgets[i].above&&(height+=widgetHeight(lineObj.widgets[i]))
;return height}
function intoCoordSystem(cm,lineObj,rect,context,includeWidgets){
if(!includeWidgets){
var height=widgetTopHeight(lineObj)
;rect.top+=height,rect.bottom+=height}
if("line"==context)return rect
;context||(context="local")
;var yOff=_heightAtLine(lineObj)
;if("local"==context?yOff+=paddingTop(cm.display):yOff-=cm.display.viewOffset,
"page"==context||"window"==context){
var lOff=cm.display.lineSpace.getBoundingClientRect()
;yOff+=lOff.top+("window"==context?0:pageScrollY())
;var xOff=lOff.left+("window"==context?0:pageScrollX())
;rect.left+=xOff,rect.right+=xOff}
return rect.top+=yOff,rect.bottom+=yOff,rect}
function fromCoordSystem(cm,coords,context){
if("div"==context)return coords
;var left=coords.left,top=coords.top
;if("page"==context)left-=pageScrollX(),top-=pageScrollY();else if("local"==context||!context){
var localBox=cm.display.sizer.getBoundingClientRect()
;left+=localBox.left,top+=localBox.top}
var lineSpaceBox=cm.display.lineSpace.getBoundingClientRect()
;return{left:left-lineSpaceBox.left,
top:top-lineSpaceBox.top}}
function _charCoords(cm,pos,context,lineObj,bias){
return lineObj||(lineObj=getLine(cm.doc,pos.line)),
intoCoordSystem(cm,lineObj,measureChar(cm,lineObj,pos.ch,bias),context)
}
function _cursorCoords(cm,pos,context,lineObj,preparedMeasure,varHeight){
function get(ch,right){
var m=measureCharPrepared(cm,preparedMeasure,ch,right?"right":"left",varHeight)
;return right?m.left=m.right:m.right=m.left,
intoCoordSystem(cm,lineObj,m,context)}
lineObj=lineObj||getLine(cm.doc,pos.line),
preparedMeasure||(preparedMeasure=prepareMeasureForLine(cm,lineObj))
;var order=getOrder(lineObj,cm.doc.direction),ch=pos.ch,sticky=pos.sticky
;if(ch>=lineObj.text.length?(ch=lineObj.text.length,
sticky="before"):ch<=0&&(ch=0,
sticky="after"),!order)return get("before"==sticky?ch-1:ch,"before"==sticky)
;function getBidi(ch,partPos,invert){
var part=order[partPos],right=1==part.level
;return get(invert?ch-1:ch,right!=invert)}
var partPos=getBidiPartAt(order,ch,sticky),other=bidiOther,val=getBidi(ch,partPos,"before"==sticky)
;return null!=other&&(val.other=getBidi(ch,other,"before"!=sticky)),
val}function estimateCoords(cm,pos){var left=0
;pos=_clipPos(cm.doc,pos),cm.options.lineWrapping||(left=charWidth(cm.display)*pos.ch)
;var lineObj=getLine(cm.doc,pos.line),top=_heightAtLine(lineObj)+paddingTop(cm.display)
;return{left:left,right:left,top:top,
bottom:top+lineObj.height}}
function PosWithInfo(line,ch,sticky,outside,xRel){
var pos=Pos(line,ch,sticky)
;return pos.xRel=xRel,outside&&(pos.outside=!0),pos
}function _coordsChar(cm,x,y){var doc=cm.doc
;if((y+=cm.display.viewOffset)<0)return PosWithInfo(doc.first,0,null,!0,-1)
;var lineN=_lineAtHeight(doc,y),last=doc.first+doc.size-1
;if(lineN>last)return PosWithInfo(doc.first+doc.size-1,getLine(doc,last).text.length,null,!0,1)
;x<0&&(x=0);for(var lineObj=getLine(doc,lineN);;){
var found=coordsCharInner(cm,lineObj,lineN,x,y),collapsed=collapsedSpanAround(lineObj,found.ch+(found.xRel>0?1:0))
;if(!collapsed)return found
;var rangeEnd=collapsed.find(1)
;if(rangeEnd.line==lineN)return rangeEnd
;lineObj=getLine(doc,lineN=rangeEnd.line)}}
function wrappedLineExtent(cm,lineObj,preparedMeasure,y){
y-=widgetTopHeight(lineObj)
;var end=lineObj.text.length,begin=findFirst(function(ch){
return measureCharPrepared(cm,preparedMeasure,ch-1).bottom<=y
},end,0);return end=findFirst(function(ch){
return measureCharPrepared(cm,preparedMeasure,ch).top>y
},begin,end),{begin:begin,end:end}}
function wrappedLineExtentChar(cm,lineObj,preparedMeasure,target){
preparedMeasure||(preparedMeasure=prepareMeasureForLine(cm,lineObj))
;var targetTop=intoCoordSystem(cm,lineObj,measureCharPrepared(cm,preparedMeasure,target),"line").top
;return wrappedLineExtent(cm,lineObj,preparedMeasure,targetTop)
}function boxIsAfter(box,x,y,left){
return!(box.bottom<=y)&&(box.top>y||(left?box.left:box.right)>x)
}
function coordsCharInner(cm,lineObj,lineNo$$1,x,y){
y-=_heightAtLine(lineObj)
;var preparedMeasure=prepareMeasureForLine(cm,lineObj),widgetHeight$$1=widgetTopHeight(lineObj),begin=0,end=lineObj.text.length,ltr=!0,order=getOrder(lineObj,cm.doc.direction)
;if(order){
var part=(cm.options.lineWrapping?function(cm,lineObj,_lineNo,preparedMeasure,order,x,y){
var ref=wrappedLineExtent(cm,lineObj,preparedMeasure,y),begin=ref.begin,end=ref.end
;/\s/.test(lineObj.text.charAt(end-1))&&end--
;for(var part=null,closestDist=null,i=0;i<order.length;i++){
var p=order[i];if(!(p.from>=end||p.to<=begin)){
var ltr=1!=p.level,endX=measureCharPrepared(cm,preparedMeasure,ltr?Math.min(end,p.to)-1:Math.max(begin,p.from)).right,dist=endX<x?x-endX+1e9:endX-x
;(!part||closestDist>dist)&&(part=p,
closestDist=dist)}}
return part||(part=order[order.length-1]),part.from<begin&&(part={
from:begin,to:part.to,level:part.level
}),part.to>end&&(part={from:part.from,to:end,
level:part.level}),part
}:function(cm,lineObj,lineNo$$1,preparedMeasure,order,x,y){
var index=findFirst(function(i){
var part=order[i],ltr=1!=part.level
;return boxIsAfter(_cursorCoords(cm,Pos(lineNo$$1,ltr?part.to:part.from,ltr?"before":"after"),"line",lineObj,preparedMeasure),x,y,!0)
},0,order.length-1),part=order[index];if(index>0){
var ltr=1!=part.level,start=_cursorCoords(cm,Pos(lineNo$$1,ltr?part.from:part.to,ltr?"after":"before"),"line",lineObj,preparedMeasure)
;boxIsAfter(start,x,y,!0)&&start.top>y&&(part=order[index-1])
}return part
})(cm,lineObj,lineNo$$1,preparedMeasure,order,x,y)
;ltr=1!=part.level,begin=ltr?part.from:part.to-1,
end=ltr?part.to:part.from-1}
var baseX,sticky,chAround=null,boxAround=null,ch=findFirst(function(ch){
var box=measureCharPrepared(cm,preparedMeasure,ch)
;return box.top+=widgetHeight$$1,
box.bottom+=widgetHeight$$1,!!boxIsAfter(box,x,y,!1)&&(box.top<=y&&box.left<=x&&(chAround=ch,
boxAround=box),!0)},begin,end),outside=!1
;if(boxAround){
var atLeft=x-boxAround.left<boxAround.right-x,atStart=atLeft==ltr
;ch=chAround+(atStart?0:1),
sticky=atStart?"after":"before",baseX=atLeft?boxAround.left:boxAround.right
}else{
ltr||ch!=end&&ch!=begin||ch++,sticky=0==ch?"after":ch==lineObj.text.length?"before":measureCharPrepared(cm,preparedMeasure,ch-(ltr?1:0)).bottom+widgetHeight$$1<=y==ltr?"after":"before"
;var coords=_cursorCoords(cm,Pos(lineNo$$1,ch,sticky),"line",lineObj,preparedMeasure)
;baseX=coords.left,
outside=y<coords.top||y>=coords.bottom}
return ch=skipExtendingChars(lineObj.text,ch,1),
PosWithInfo(lineNo$$1,ch,sticky,outside,x-baseX)}
function textHeight(display){
if(null!=display.cachedTextHeight)return display.cachedTextHeight
;if(null==measureText){measureText=elt("pre")
;for(var i=0;i<49;++i)measureText.appendChild(document.createTextNode("x")),
measureText.appendChild(elt("br"))
;measureText.appendChild(document.createTextNode("x"))
}removeChildrenAndAdd(display.measure,measureText)
;var height=measureText.offsetHeight/50
;return height>3&&(display.cachedTextHeight=height),
removeChildren(display.measure),height||1}
function charWidth(display){
if(null!=display.cachedCharWidth)return display.cachedCharWidth
;var anchor=elt("span","xxxxxxxxxx"),pre=elt("pre",[anchor])
;removeChildrenAndAdd(display.measure,pre)
;var rect=anchor.getBoundingClientRect(),width=(rect.right-rect.left)/10
;return width>2&&(display.cachedCharWidth=width),
width||10}function getDimensions(cm){
for(var d=cm.display,left={},width={},gutterLeft=d.gutters.clientLeft,n=d.gutters.firstChild,i=0;n;n=n.nextSibling,
++i)left[cm.options.gutters[i]]=n.offsetLeft+n.clientLeft+gutterLeft,
width[cm.options.gutters[i]]=n.clientWidth;return{
fixedPos:compensateForHScroll(d),
gutterTotalWidth:d.gutters.offsetWidth,
gutterLeft:left,gutterWidth:width,
wrapperWidth:d.wrapper.clientWidth}}
function compensateForHScroll(display){
return display.scroller.getBoundingClientRect().left-display.sizer.getBoundingClientRect().left
}function estimateHeight(cm){
var th=textHeight(cm.display),wrapping=cm.options.lineWrapping,perLine=wrapping&&Math.max(5,cm.display.scroller.clientWidth/charWidth(cm.display)-3)
;return function(line){
if(lineIsHidden(cm.doc,line))return 0
;var widgetsHeight=0
;if(line.widgets)for(var i=0;i<line.widgets.length;i++)line.widgets[i].height&&(widgetsHeight+=line.widgets[i].height)
;return wrapping?widgetsHeight+(Math.ceil(line.text.length/perLine)||1)*th:widgetsHeight+th
}}function estimateLineHeights(cm){
var doc=cm.doc,est=estimateHeight(cm)
;doc.iter(function(line){var estHeight=est(line)
;estHeight!=line.height&&updateLineHeight(line,estHeight)
})}function posFromMouse(cm,e,liberal,forRect){
var display=cm.display
;if(!liberal&&"true"==e_target(e).getAttribute("cm-not-content"))return null
;var x,y,space=display.lineSpace.getBoundingClientRect()
;try{x=e.clientX-space.left,y=e.clientY-space.top
}catch(e){return null}
var line,coords=_coordsChar(cm,x,y)
;if(forRect&&1==coords.xRel&&(line=getLine(cm.doc,coords.line).text).length==coords.ch){
var colDiff=countColumn(line,line.length,cm.options.tabSize)-line.length
;coords=Pos(coords.line,Math.max(0,Math.round((x-paddingH(cm.display).left)/charWidth(cm.display))-colDiff))
}return coords}function findViewIndex(cm,n){
if(n>=cm.display.viewTo)return null
;if((n-=cm.display.viewFrom)<0)return null
;for(var view=cm.display.view,i=0;i<view.length;i++)if((n-=view[i].size)<0)return i
}function updateSelection(cm){
cm.display.input.showSelection(cm.display.input.prepareSelection())
}function prepareSelection(cm,primary){
void 0===primary&&(primary=!0)
;for(var doc=cm.doc,result={},curFragment=result.cursors=document.createDocumentFragment(),selFragment=result.selection=document.createDocumentFragment(),i=0;i<doc.sel.ranges.length;i++)if(primary||i!=doc.sel.primIndex){
var range$$1=doc.sel.ranges[i]
;if(!(range$$1.from().line>=cm.display.viewTo||range$$1.to().line<cm.display.viewFrom)){
var collapsed=range$$1.empty()
;(collapsed||cm.options.showCursorWhenSelecting)&&drawSelectionCursor(cm,range$$1.head,curFragment),
collapsed||drawSelectionRange(cm,range$$1,selFragment)
}}return result}
function drawSelectionCursor(cm,head,output){
var pos=_cursorCoords(cm,head,"div",null,null,!cm.options.singleCursorHeightPerLine),cursor=output.appendChild(elt("div"," ","CodeMirror-cursor"))
;if(cursor.style.left=pos.left+"px",
cursor.style.top=pos.top+"px",cursor.style.height=Math.max(0,pos.bottom-pos.top)*cm.options.cursorHeight+"px",
pos.other){
var otherCursor=output.appendChild(elt("div"," ","CodeMirror-cursor CodeMirror-secondarycursor"))
;otherCursor.style.display="",
otherCursor.style.left=pos.other.left+"px",otherCursor.style.top=pos.other.top+"px",
otherCursor.style.height=.85*(pos.other.bottom-pos.other.top)+"px"
}}function cmpCoords(a,b){
return a.top-b.top||a.left-b.left}
function drawSelectionRange(cm,range$$1,output){
var display=cm.display,doc=cm.doc,fragment=document.createDocumentFragment(),padding=paddingH(cm.display),leftSide=padding.left,rightSide=Math.max(display.sizerWidth,displayWidth(cm)-display.sizer.offsetLeft)-padding.right,docLTR="ltr"==doc.direction
;function add(left,top,width,bottom){
top<0&&(top=0),top=Math.round(top),bottom=Math.round(bottom),
fragment.appendChild(elt("div",null,"CodeMirror-selected","position: absolute; left: "+left+"px;\n                             top: "+top+"px; width: "+(null==width?rightSide-left:width)+"px;\n                             height: "+(bottom-top)+"px"))
}function drawForLine(line,fromArg,toArg){
var start,end,lineObj=getLine(doc,line),lineLen=lineObj.text.length
;function coords(ch,bias){
return _charCoords(cm,Pos(line,ch),"div",lineObj,bias)
}function wrapX(pos,dir,side){
var extent=wrappedLineExtentChar(cm,lineObj,null,pos),prop="ltr"==dir==("after"==side)?"left":"right",ch="after"==side?extent.begin:extent.end-(/\s/.test(lineObj.text.charAt(extent.end-1))?2:1)
;return coords(ch,prop)[prop]}
var order=getOrder(lineObj,doc.direction)
;return function(order,from,to,f){
if(!order)return f(from,to,"ltr",0)
;for(var found=!1,i=0;i<order.length;++i){
var part=order[i]
;(part.from<to&&part.to>from||from==to&&part.to==from)&&(f(Math.max(part.from,from),Math.min(part.to,to),1==part.level?"rtl":"ltr",i),
found=!0)}found||f(from,to,"ltr")
}(order,fromArg||0,null==toArg?lineLen:toArg,function(from,to,dir,i){
var ltr="ltr"==dir,fromPos=coords(from,ltr?"left":"right"),toPos=coords(to-1,ltr?"right":"left"),openStart=null==fromArg&&0==from,openEnd=null==toArg&&to==lineLen,first=0==i,last=!order||i==order.length-1
;if(toPos.top-fromPos.top<=3){
var openLeft=(docLTR?openStart:openEnd)&&first,openRight=(docLTR?openEnd:openStart)&&last,left=openLeft?leftSide:(ltr?fromPos:toPos).left,right=openRight?rightSide:(ltr?toPos:fromPos).right
;add(left,fromPos.top,right-left,fromPos.bottom)
}else{var topLeft,topRight,botLeft,botRight
;ltr?(topLeft=docLTR&&openStart&&first?leftSide:fromPos.left,
topRight=docLTR?rightSide:wrapX(from,dir,"before"),
botLeft=docLTR?leftSide:wrapX(to,dir,"after"),
botRight=docLTR&&openEnd&&last?rightSide:toPos.right):(topLeft=docLTR?wrapX(from,dir,"before"):leftSide,
topRight=!docLTR&&openStart&&first?rightSide:fromPos.right,
botLeft=!docLTR&&openEnd&&last?leftSide:toPos.left,
botRight=docLTR?wrapX(to,dir,"after"):rightSide),
add(topLeft,fromPos.top,topRight-topLeft,fromPos.bottom),
fromPos.bottom<toPos.top&&add(leftSide,fromPos.bottom,null,toPos.top),
add(botLeft,toPos.top,botRight-botLeft,toPos.bottom)
}
(!start||cmpCoords(fromPos,start)<0)&&(start=fromPos),cmpCoords(toPos,start)<0&&(start=toPos),
(!end||cmpCoords(fromPos,end)<0)&&(end=fromPos),
cmpCoords(toPos,end)<0&&(end=toPos)}),{
start:start,end:end}}
var sFrom=range$$1.from(),sTo=range$$1.to()
;if(sFrom.line==sTo.line)drawForLine(sFrom.line,sFrom.ch,sTo.ch);else{
var fromLine=getLine(doc,sFrom.line),toLine=getLine(doc,sTo.line),singleVLine=visualLine(fromLine)==visualLine(toLine),leftEnd=drawForLine(sFrom.line,sFrom.ch,singleVLine?fromLine.text.length+1:null).end,rightStart=drawForLine(sTo.line,singleVLine?0:null,sTo.ch).start
;singleVLine&&(leftEnd.top<rightStart.top-2?(add(leftEnd.right,leftEnd.top,null,leftEnd.bottom),
add(leftSide,rightStart.top,rightStart.left,rightStart.bottom)):add(leftEnd.right,leftEnd.top,rightStart.left-leftEnd.right,leftEnd.bottom)),
leftEnd.bottom<rightStart.top&&add(leftSide,leftEnd.bottom,null,rightStart.top)
}output.appendChild(fragment)}
function restartBlink(cm){if(cm.state.focused){
var display=cm.display
;clearInterval(display.blinker);var on=!0
;display.cursorDiv.style.visibility="",
cm.options.cursorBlinkRate>0?display.blinker=setInterval(function(){
return display.cursorDiv.style.visibility=(on=!on)?"":"hidden"
},cm.options.cursorBlinkRate):cm.options.cursorBlinkRate<0&&(display.cursorDiv.style.visibility="hidden")
}}function ensureFocus(cm){
cm.state.focused||(cm.display.input.focus(),onFocus(cm))
}function delayBlurEvent(cm){
cm.state.delayingBlurEvent=!0,setTimeout(function(){
cm.state.delayingBlurEvent&&(cm.state.delayingBlurEvent=!1,
onBlur(cm))},100)}function onFocus(cm,e){
cm.state.delayingBlurEvent&&(cm.state.delayingBlurEvent=!1),
"nocursor"!=cm.options.readOnly&&(cm.state.focused||(signal(cm,"focus",cm,e),
cm.state.focused=!0,
addClass(cm.display.wrapper,"CodeMirror-focused"),cm.curOp||cm.display.selForContextMenu==cm.doc.sel||(cm.display.input.reset(),
webkit&&setTimeout(function(){
return cm.display.input.reset(!0)
},20)),cm.display.input.receivedFocus()),restartBlink(cm))
}function onBlur(cm,e){
cm.state.delayingBlurEvent||(cm.state.focused&&(signal(cm,"blur",cm,e),
cm.state.focused=!1,
rmClass(cm.display.wrapper,"CodeMirror-focused")),clearInterval(cm.display.blinker),
setTimeout(function(){
cm.state.focused||(cm.display.shift=!1)},150))}
function updateHeightsInViewport(cm){
for(var display=cm.display,prevBottom=display.lineDiv.offsetTop,i=0;i<display.view.length;i++){
var cur=display.view[i],wrapping=cm.options.lineWrapping,height=void 0,width=0
;if(!cur.hidden){if(ie&&ie_version<8){
var bot=cur.node.offsetTop+cur.node.offsetHeight
;height=bot-prevBottom,prevBottom=bot}else{
var box=cur.node.getBoundingClientRect()
;height=box.bottom-box.top,!wrapping&&cur.text.firstChild&&(width=cur.text.firstChild.getBoundingClientRect().right-box.left-1)
}var diff=cur.line.height-height
;if((diff>.005||diff<-.005)&&(updateLineHeight(cur.line,height),
updateWidgetHeight(cur.line),
cur.rest))for(var j=0;j<cur.rest.length;j++)updateWidgetHeight(cur.rest[j])
;if(width>cm.display.sizerWidth){
var chWidth=Math.ceil(width/charWidth(cm.display))
;chWidth>cm.display.maxLineLength&&(cm.display.maxLineLength=chWidth,
cm.display.maxLine=cur.line,
cm.display.maxLineChanged=!0)}}}}
function updateWidgetHeight(line){
if(line.widgets)for(var i=0;i<line.widgets.length;++i){
var w=line.widgets[i],parent=w.node.parentNode
;parent&&(w.height=parent.offsetHeight)}}
function visibleLines(display,doc,viewport){
var top=viewport&&null!=viewport.top?Math.max(0,viewport.top):display.scroller.scrollTop
;top=Math.floor(top-paddingTop(display))
;var bottom=viewport&&null!=viewport.bottom?viewport.bottom:top+display.wrapper.clientHeight,from=_lineAtHeight(doc,top),to=_lineAtHeight(doc,bottom)
;if(viewport&&viewport.ensure){
var ensureFrom=viewport.ensure.from.line,ensureTo=viewport.ensure.to.line
;ensureFrom<from?(from=ensureFrom,
to=_lineAtHeight(doc,_heightAtLine(getLine(doc,ensureFrom))+display.wrapper.clientHeight)):Math.min(ensureTo,doc.lastLine())>=to&&(from=_lineAtHeight(doc,_heightAtLine(getLine(doc,ensureTo))-display.wrapper.clientHeight),
to=ensureTo)}return{from:from,
to:Math.max(to,from+1)}}
function alignHorizontally(cm){
var display=cm.display,view=display.view
;if(display.alignWidgets||display.gutters.firstChild&&cm.options.fixedGutter){
for(var comp=compensateForHScroll(display)-display.scroller.scrollLeft+cm.doc.scrollLeft,gutterW=display.gutters.offsetWidth,left=comp+"px",i=0;i<view.length;i++)if(!view[i].hidden){
cm.options.fixedGutter&&(view[i].gutter&&(view[i].gutter.style.left=left),
view[i].gutterBackground&&(view[i].gutterBackground.style.left=left))
;var align=view[i].alignable
;if(align)for(var j=0;j<align.length;j++)align[j].style.left=left
}
cm.options.fixedGutter&&(display.gutters.style.left=comp+gutterW+"px")
}}function maybeUpdateLineNumberWidth(cm){
if(!cm.options.lineNumbers)return!1
;var doc=cm.doc,last=lineNumberFor(cm.options,doc.first+doc.size-1),display=cm.display
;if(last.length!=display.lineNumChars){
var test=display.measure.appendChild(elt("div",[elt("div",last)],"CodeMirror-linenumber CodeMirror-gutter-elt")),innerW=test.firstChild.offsetWidth,padding=test.offsetWidth-innerW
;return display.lineGutter.style.width="",
display.lineNumInnerWidth=Math.max(innerW,display.lineGutter.offsetWidth-padding)+1,
display.lineNumWidth=display.lineNumInnerWidth+padding,
display.lineNumChars=display.lineNumInnerWidth?last.length:-1,
display.lineGutter.style.width=display.lineNumWidth+"px",
updateGutterSpace(cm),!0}return!1}
function calculateScrollPos(cm,rect){
var display=cm.display,snapMargin=textHeight(cm.display)
;rect.top<0&&(rect.top=0)
;var screentop=cm.curOp&&null!=cm.curOp.scrollTop?cm.curOp.scrollTop:display.scroller.scrollTop,screen=displayHeight(cm),result={}
;rect.bottom-rect.top>screen&&(rect.bottom=rect.top+screen)
;var docBottom=cm.doc.height+paddingVert(display),atTop=rect.top<snapMargin,atBottom=rect.bottom>docBottom-snapMargin
;if(rect.top<screentop)result.scrollTop=atTop?0:rect.top;else if(rect.bottom>screentop+screen){
var newTop=Math.min(rect.top,(atBottom?docBottom:rect.bottom)-screen)
;newTop!=screentop&&(result.scrollTop=newTop)}
var screenleft=cm.curOp&&null!=cm.curOp.scrollLeft?cm.curOp.scrollLeft:display.scroller.scrollLeft,screenw=displayWidth(cm)-(cm.options.fixedGutter?display.gutters.offsetWidth:0),tooWide=rect.right-rect.left>screenw
;return tooWide&&(rect.right=rect.left+screenw),
rect.left<10?result.scrollLeft=0:rect.left<screenleft?result.scrollLeft=Math.max(0,rect.left-(tooWide?0:10)):rect.right>screenw+screenleft-3&&(result.scrollLeft=rect.right+(tooWide?0:10)-screenw),
result}function addToScrollTop(cm,top){
null!=top&&(resolveScrollToPos(cm),cm.curOp.scrollTop=(null==cm.curOp.scrollTop?cm.doc.scrollTop:cm.curOp.scrollTop)+top)
}function ensureCursorVisible(cm){
resolveScrollToPos(cm);var cur=cm.getCursor()
;cm.curOp.scrollToPos={from:cur,to:cur,
margin:cm.options.cursorScrollMargin}}
function scrollToCoords(cm,x,y){
null==x&&null==y||resolveScrollToPos(cm),null!=x&&(cm.curOp.scrollLeft=x),
null!=y&&(cm.curOp.scrollTop=y)}
function resolveScrollToPos(cm){
var range$$1=cm.curOp.scrollToPos;if(range$$1){
cm.curOp.scrollToPos=null
;var from=estimateCoords(cm,range$$1.from),to=estimateCoords(cm,range$$1.to)
;scrollToCoordsRange(cm,from,to,range$$1.margin)}}
function scrollToCoordsRange(cm,from,to,margin){
var sPos=calculateScrollPos(cm,{
left:Math.min(from.left,to.left),
top:Math.min(from.top,to.top)-margin,
right:Math.max(from.right,to.right),
bottom:Math.max(from.bottom,to.bottom)+margin})
;scrollToCoords(cm,sPos.scrollLeft,sPos.scrollTop)
}function updateScrollTop(cm,val){
Math.abs(cm.doc.scrollTop-val)<2||(gecko||updateDisplaySimple(cm,{
top:val
}),setScrollTop(cm,val,!0),gecko&&updateDisplaySimple(cm),startWorker(cm,100))
}function setScrollTop(cm,val,forceScroll){
val=Math.min(cm.display.scroller.scrollHeight-cm.display.scroller.clientHeight,val),
(cm.display.scroller.scrollTop!=val||forceScroll)&&(cm.doc.scrollTop=val,
cm.display.scrollbars.setScrollTop(val),
cm.display.scroller.scrollTop!=val&&(cm.display.scroller.scrollTop=val))
}
function setScrollLeft(cm,val,isScroller,forceScroll){
val=Math.min(val,cm.display.scroller.scrollWidth-cm.display.scroller.clientWidth),
(isScroller?val==cm.doc.scrollLeft:Math.abs(cm.doc.scrollLeft-val)<2)&&!forceScroll||(cm.doc.scrollLeft=val,
alignHorizontally(cm),
cm.display.scroller.scrollLeft!=val&&(cm.display.scroller.scrollLeft=val),
cm.display.scrollbars.setScrollLeft(val))}
function measureForScrollbars(cm){
var d=cm.display,gutterW=d.gutters.offsetWidth,docH=Math.round(cm.doc.height+paddingVert(cm.display))
;return{clientHeight:d.scroller.clientHeight,
viewHeight:d.wrapper.clientHeight,
scrollWidth:d.scroller.scrollWidth,
clientWidth:d.scroller.clientWidth,
viewWidth:d.wrapper.clientWidth,
barLeft:cm.options.fixedGutter?gutterW:0,
docHeight:docH,
scrollHeight:docH+scrollGap(cm)+d.barHeight,
nativeBarWidth:d.nativeBarWidth,
gutterWidth:gutterW}}
var NativeScrollbars=function(place,scroll,cm){
this.cm=cm
;var vert=this.vert=elt("div",[elt("div",null,null,"min-width: 1px")],"CodeMirror-vscrollbar"),horiz=this.horiz=elt("div",[elt("div",null,null,"height: 100%; min-height: 1px")],"CodeMirror-hscrollbar")
;vert.tabIndex=horiz.tabIndex=-1,
place(vert),place(horiz),on(vert,"scroll",function(){
vert.clientHeight&&scroll(vert.scrollTop,"vertical")
}),on(horiz,"scroll",function(){
horiz.clientWidth&&scroll(horiz.scrollLeft,"horizontal")
}),this.checkedZeroWidth=!1,
ie&&ie_version<8&&(this.horiz.style.minHeight=this.vert.style.minWidth="18px")
}
;NativeScrollbars.prototype.update=function(measure){
var needsH=measure.scrollWidth>measure.clientWidth+1,needsV=measure.scrollHeight>measure.clientHeight+1,sWidth=measure.nativeBarWidth
;if(needsV){
this.vert.style.display="block",this.vert.style.bottom=needsH?sWidth+"px":"0"
;var totalHeight=measure.viewHeight-(needsH?sWidth:0)
;this.vert.firstChild.style.height=Math.max(0,measure.scrollHeight-measure.clientHeight+totalHeight)+"px"
}else this.vert.style.display="",
this.vert.firstChild.style.height="0";if(needsH){
this.horiz.style.display="block",
this.horiz.style.right=needsV?sWidth+"px":"0",this.horiz.style.left=measure.barLeft+"px"
;var totalWidth=measure.viewWidth-measure.barLeft-(needsV?sWidth:0)
;this.horiz.firstChild.style.width=Math.max(0,measure.scrollWidth-measure.clientWidth+totalWidth)+"px"
}else this.horiz.style.display="",
this.horiz.firstChild.style.width="0"
;return!this.checkedZeroWidth&&measure.clientHeight>0&&(0==sWidth&&this.zeroWidthHack(),
this.checkedZeroWidth=!0),{right:needsV?sWidth:0,
bottom:needsH?sWidth:0}
},NativeScrollbars.prototype.setScrollLeft=function(pos){
this.horiz.scrollLeft!=pos&&(this.horiz.scrollLeft=pos),
this.disableHoriz&&this.enableZeroWidthBar(this.horiz,this.disableHoriz,"horiz")
},
NativeScrollbars.prototype.setScrollTop=function(pos){
this.vert.scrollTop!=pos&&(this.vert.scrollTop=pos),
this.disableVert&&this.enableZeroWidthBar(this.vert,this.disableVert,"vert")
},NativeScrollbars.prototype.zeroWidthHack=function(){
var w=mac&&!mac_geMountainLion?"12px":"18px"
;this.horiz.style.height=this.vert.style.width=w,
this.horiz.style.pointerEvents=this.vert.style.pointerEvents="none",
this.disableHoriz=new Delayed,
this.disableVert=new Delayed
},NativeScrollbars.prototype.enableZeroWidthBar=function(bar,delay,type){
bar.style.pointerEvents="auto",
delay.set(1e3,function maybeDisable(){
var box=bar.getBoundingClientRect(),elt$$1="vert"==type?document.elementFromPoint(box.right-1,(box.top+box.bottom)/2):document.elementFromPoint((box.right+box.left)/2,box.bottom-1)
;elt$$1!=bar?bar.style.pointerEvents="none":delay.set(1e3,maybeDisable)
})},NativeScrollbars.prototype.clear=function(){
var parent=this.horiz.parentNode
;parent.removeChild(this.horiz),parent.removeChild(this.vert)
};var NullScrollbars=function(){}
;function updateScrollbars(cm,measure){
measure||(measure=measureForScrollbars(cm))
;var startWidth=cm.display.barWidth,startHeight=cm.display.barHeight
;updateScrollbarsInner(cm,measure)
;for(var i=0;i<4&&startWidth!=cm.display.barWidth||startHeight!=cm.display.barHeight;i++)startWidth!=cm.display.barWidth&&cm.options.lineWrapping&&updateHeightsInViewport(cm),
updateScrollbarsInner(cm,measureForScrollbars(cm)),
startWidth=cm.display.barWidth,
startHeight=cm.display.barHeight}
function updateScrollbarsInner(cm,measure){
var d=cm.display,sizes=d.scrollbars.update(measure)
;d.sizer.style.paddingRight=(d.barWidth=sizes.right)+"px",
d.sizer.style.paddingBottom=(d.barHeight=sizes.bottom)+"px",
d.heightForcer.style.borderBottom=sizes.bottom+"px solid transparent",
sizes.right&&sizes.bottom?(d.scrollbarFiller.style.display="block",
d.scrollbarFiller.style.height=sizes.bottom+"px",
d.scrollbarFiller.style.width=sizes.right+"px"):d.scrollbarFiller.style.display="",
sizes.bottom&&cm.options.coverGutterNextToScrollbar&&cm.options.fixedGutter?(d.gutterFiller.style.display="block",
d.gutterFiller.style.height=sizes.bottom+"px",
d.gutterFiller.style.width=measure.gutterWidth+"px"):d.gutterFiller.style.display=""
}NullScrollbars.prototype.update=function(){
return{bottom:0,right:0}
},NullScrollbars.prototype.setScrollLeft=function(){},NullScrollbars.prototype.setScrollTop=function(){},
NullScrollbars.prototype.clear=function(){}
;var scrollbarModel={native:NativeScrollbars,
null:NullScrollbars};function initScrollbars(cm){
cm.display.scrollbars&&(cm.display.scrollbars.clear(),
cm.display.scrollbars.addClass&&rmClass(cm.display.wrapper,cm.display.scrollbars.addClass)),
cm.display.scrollbars=new scrollbarModel[cm.options.scrollbarStyle](function(node){
cm.display.wrapper.insertBefore(node,cm.display.scrollbarFiller),
on(node,"mousedown",function(){
cm.state.focused&&setTimeout(function(){
return cm.display.input.focus()},0)
}),node.setAttribute("cm-not-content","true")
},function(pos,axis){
"horizontal"==axis?setScrollLeft(cm,pos):updateScrollTop(cm,pos)
},cm),cm.display.scrollbars.addClass&&addClass(cm.display.wrapper,cm.display.scrollbars.addClass)
}var nextOpId=0;function _startOperation(cm){
var op;cm.curOp={cm:cm,viewChanged:!1,
startHeight:cm.doc.height,forceUpdate:!1,
updateInput:0,typing:!1,changeObjs:null,
cursorActivityHandlers:null,
cursorActivityCalled:0,selectionChanged:!1,
updateMaxLine:!1,scrollLeft:null,scrollTop:null,
scrollToPos:null,focus:!1,id:++nextOpId
},op=cm.curOp,operationGroup?operationGroup.ops.push(op):op.ownsGroup=operationGroup={
ops:[op],delayedCallbacks:[]}}
function _endOperation(cm){var op=cm.curOp
;op&&function(op,endCb){var group=op.ownsGroup
;if(group)try{!function(group){
var callbacks=group.delayedCallbacks,i=0;do{
for(;i<callbacks.length;i++)callbacks[i].call(null)
;for(var j=0;j<group.ops.length;j++){
var op=group.ops[j]
;if(op.cursorActivityHandlers)for(;op.cursorActivityCalled<op.cursorActivityHandlers.length;)op.cursorActivityHandlers[op.cursorActivityCalled++].call(null,op.cm)
}}while(i<callbacks.length)}(group)}finally{
operationGroup=null,endCb(group)}
}(op,function(group){
for(var i=0;i<group.ops.length;i++)group.ops[i].cm.curOp=null
;!function(group){
for(var ops=group.ops,i=0;i<ops.length;i++)endOperation_R1(ops[i])
;for(var i$1=0;i$1<ops.length;i$1++)(op=ops[i$1]).updatedDisplay=op.mustUpdate&&updateDisplayIfNeeded(op.cm,op.update)
;for(var op,i$2=0;i$2<ops.length;i$2++)endOperation_R2(ops[i$2])
;for(var i$3=0;i$3<ops.length;i$3++)endOperation_W2(ops[i$3])
;for(var i$4=0;i$4<ops.length;i$4++)endOperation_finish(ops[i$4])
}(group)})}function endOperation_R1(op){
var cm=op.cm,display=cm.display;!function(cm){
var display=cm.display
;!display.scrollbarsClipped&&display.scroller.offsetWidth&&(display.nativeBarWidth=display.scroller.offsetWidth-display.scroller.clientWidth,
display.heightForcer.style.height=scrollGap(cm)+"px",
display.sizer.style.marginBottom=-display.nativeBarWidth+"px",
display.sizer.style.borderRightWidth=scrollGap(cm)+"px",
display.scrollbarsClipped=!0)
}(cm),op.updateMaxLine&&findMaxLine(cm),op.mustUpdate=op.viewChanged||op.forceUpdate||null!=op.scrollTop||op.scrollToPos&&(op.scrollToPos.from.line<display.viewFrom||op.scrollToPos.to.line>=display.viewTo)||display.maxLineChanged&&cm.options.lineWrapping,
op.update=op.mustUpdate&&new DisplayUpdate(cm,op.mustUpdate&&{
top:op.scrollTop,ensure:op.scrollToPos
},op.forceUpdate)}function endOperation_R2(op){
var cm=op.cm,display=cm.display
;op.updatedDisplay&&updateHeightsInViewport(cm),op.barMeasure=measureForScrollbars(cm),
display.maxLineChanged&&!cm.options.lineWrapping&&(op.adjustWidthTo=measureChar(cm,display.maxLine,display.maxLine.text.length).left+3,
cm.display.sizerWidth=op.adjustWidthTo,
op.barMeasure.scrollWidth=Math.max(display.scroller.clientWidth,display.sizer.offsetLeft+op.adjustWidthTo+scrollGap(cm)+cm.display.barWidth),
op.maxScrollLeft=Math.max(0,display.sizer.offsetLeft+op.adjustWidthTo-displayWidth(cm))),
(op.updatedDisplay||op.selectionChanged)&&(op.preparedSelection=display.input.prepareSelection())
}function endOperation_W2(op){var cm=op.cm
;null!=op.adjustWidthTo&&(cm.display.sizer.style.minWidth=op.adjustWidthTo+"px",
op.maxScrollLeft<cm.doc.scrollLeft&&setScrollLeft(cm,Math.min(cm.display.scroller.scrollLeft,op.maxScrollLeft),!0),
cm.display.maxLineChanged=!1)
;var takeFocus=op.focus&&op.focus==activeElt()
;op.preparedSelection&&cm.display.input.showSelection(op.preparedSelection,takeFocus),
(op.updatedDisplay||op.startHeight!=cm.doc.height)&&updateScrollbars(cm,op.barMeasure),
op.updatedDisplay&&setDocumentHeight(cm,op.barMeasure),
op.selectionChanged&&restartBlink(cm),
cm.state.focused&&op.updateInput&&cm.display.input.reset(op.typing),
takeFocus&&ensureFocus(op.cm)}
function endOperation_finish(op){
var cm=op.cm,display=cm.display,doc=cm.doc
;if(op.updatedDisplay&&postUpdateDisplay(cm,op.update),
null==display.wheelStartX||null==op.scrollTop&&null==op.scrollLeft&&!op.scrollToPos||(display.wheelStartX=display.wheelStartY=null),
null!=op.scrollTop&&setScrollTop(cm,op.scrollTop,op.forceScroll),
null!=op.scrollLeft&&setScrollLeft(cm,op.scrollLeft,!0,!0),
op.scrollToPos){
var rect=function(cm,pos,end,margin){var rect
;null==margin&&(margin=0),cm.options.lineWrapping||pos!=end||(pos=pos.ch?Pos(pos.line,"before"==pos.sticky?pos.ch-1:pos.ch,"after"):pos,
end="before"==pos.sticky?Pos(pos.line,pos.ch+1,"before"):pos)
;for(var limit=0;limit<5;limit++){
var changed=!1,coords=_cursorCoords(cm,pos),endCoords=end&&end!=pos?_cursorCoords(cm,end):coords
;rect={left:Math.min(coords.left,endCoords.left),
top:Math.min(coords.top,endCoords.top)-margin,
right:Math.max(coords.left,endCoords.left),
bottom:Math.max(coords.bottom,endCoords.bottom)+margin
}
;var scrollPos=calculateScrollPos(cm,rect),startTop=cm.doc.scrollTop,startLeft=cm.doc.scrollLeft
;if(null!=scrollPos.scrollTop&&(updateScrollTop(cm,scrollPos.scrollTop),
Math.abs(cm.doc.scrollTop-startTop)>1&&(changed=!0)),
null!=scrollPos.scrollLeft&&(setScrollLeft(cm,scrollPos.scrollLeft),
Math.abs(cm.doc.scrollLeft-startLeft)>1&&(changed=!0)),
!changed)break}return rect
}(cm,_clipPos(doc,op.scrollToPos.from),_clipPos(doc,op.scrollToPos.to),op.scrollToPos.margin)
;!function(cm,rect){
if(!signalDOMEvent(cm,"scrollCursorIntoView")){
var display=cm.display,box=display.sizer.getBoundingClientRect(),doScroll=null
;if(rect.top+box.top<0?doScroll=!0:rect.bottom+box.top>(window.innerHeight||document.documentElement.clientHeight)&&(doScroll=!1),
null!=doScroll&&!phantom){
var scrollNode=elt("div","​",null,"position: absolute;\n                         top: "+(rect.top-display.viewOffset-paddingTop(cm.display))+"px;\n                         height: "+(rect.bottom-rect.top+scrollGap(cm)+display.barHeight)+"px;\n                         left: "+rect.left+"px; width: "+Math.max(2,rect.right-rect.left)+"px;")
;cm.display.lineSpace.appendChild(scrollNode),
scrollNode.scrollIntoView(doScroll),
cm.display.lineSpace.removeChild(scrollNode)}}
}(cm,rect)}
var hidden=op.maybeHiddenMarkers,unhidden=op.maybeUnhiddenMarkers
;if(hidden)for(var i=0;i<hidden.length;++i)hidden[i].lines.length||signal(hidden[i],"hide")
;if(unhidden)for(var i$1=0;i$1<unhidden.length;++i$1)unhidden[i$1].lines.length&&signal(unhidden[i$1],"unhide")
;display.wrapper.offsetHeight&&(doc.scrollTop=cm.display.scroller.scrollTop),
op.changeObjs&&signal(cm,"changes",cm,op.changeObjs),
op.update&&op.update.finish()}
function runInOp(cm,f){if(cm.curOp)return f()
;_startOperation(cm);try{return f()}finally{
_endOperation(cm)}}function operation(cm,f){
return function(){
if(cm.curOp)return f.apply(cm,arguments)
;_startOperation(cm);try{
return f.apply(cm,arguments)}finally{
_endOperation(cm)}}}function methodOp(f){
return function(){
if(this.curOp)return f.apply(this,arguments)
;_startOperation(this);try{
return f.apply(this,arguments)}finally{
_endOperation(this)}}}function docMethodOp(f){
return function(){var cm=this.cm
;if(!cm||cm.curOp)return f.apply(this,arguments)
;_startOperation(cm);try{
return f.apply(this,arguments)}finally{
_endOperation(cm)}}}
function regChange(cm,from,to,lendiff){
null==from&&(from=cm.doc.first),null==to&&(to=cm.doc.first+cm.doc.size),
lendiff||(lendiff=0);var display=cm.display
;if(lendiff&&to<display.viewTo&&(null==display.updateLineNumbers||display.updateLineNumbers>from)&&(display.updateLineNumbers=from),
cm.curOp.viewChanged=!0,
from>=display.viewTo)sawCollapsedSpans&&visualLineNo(cm.doc,from)<display.viewTo&&resetView(cm);else if(to<=display.viewFrom)sawCollapsedSpans&&visualLineEndNo(cm.doc,to+lendiff)>display.viewFrom?resetView(cm):(display.viewFrom+=lendiff,
display.viewTo+=lendiff);else if(from<=display.viewFrom&&to>=display.viewTo)resetView(cm);else if(from<=display.viewFrom){
var cut=viewCuttingPoint(cm,to,to+lendiff,1)
;cut?(display.view=display.view.slice(cut.index),
display.viewFrom=cut.lineN,display.viewTo+=lendiff):resetView(cm)
}else if(to>=display.viewTo){
var cut$1=viewCuttingPoint(cm,from,from,-1)
;cut$1?(display.view=display.view.slice(0,cut$1.index),
display.viewTo=cut$1.lineN):resetView(cm)}else{
var cutTop=viewCuttingPoint(cm,from,from,-1),cutBot=viewCuttingPoint(cm,to,to+lendiff,1)
;cutTop&&cutBot?(display.view=display.view.slice(0,cutTop.index).concat(buildViewArray(cm,cutTop.lineN,cutBot.lineN)).concat(display.view.slice(cutBot.index)),
display.viewTo+=lendiff):resetView(cm)}
var ext=display.externalMeasured
;ext&&(to<ext.lineN?ext.lineN+=lendiff:from<ext.lineN+ext.size&&(display.externalMeasured=null))
}function regLineChange(cm,line,type){
cm.curOp.viewChanged=!0
;var display=cm.display,ext=cm.display.externalMeasured
;if(ext&&line>=ext.lineN&&line<ext.lineN+ext.size&&(display.externalMeasured=null),
!(line<display.viewFrom||line>=display.viewTo)){
var lineView=display.view[findViewIndex(cm,line)]
;if(null!=lineView.node){
var arr=lineView.changes||(lineView.changes=[])
;-1==indexOf(arr,type)&&arr.push(type)}}}
function resetView(cm){
cm.display.viewFrom=cm.display.viewTo=cm.doc.first,cm.display.view=[],
cm.display.viewOffset=0}
function viewCuttingPoint(cm,oldN,newN,dir){
var diff,index=findViewIndex(cm,oldN),view=cm.display.view
;if(!sawCollapsedSpans||newN==cm.doc.first+cm.doc.size)return{
index:index,lineN:newN}
;for(var n=cm.display.viewFrom,i=0;i<index;i++)n+=view[i].size
;if(n!=oldN){if(dir>0){
if(index==view.length-1)return null
;diff=n+view[index].size-oldN,index++
}else diff=n-oldN;oldN+=diff,newN+=diff}
for(;visualLineNo(cm.doc,newN)!=newN;){
if(index==(dir<0?0:view.length-1))return null
;newN+=dir*view[index-(dir<0?1:0)].size,index+=dir
}return{index:index,lineN:newN}}
function countDirtyView(cm){
for(var view=cm.display.view,dirty=0,i=0;i<view.length;i++){
var lineView=view[i]
;lineView.hidden||lineView.node&&!lineView.changes||++dirty
}return dirty}function startWorker(cm,time){
cm.doc.highlightFrontier<cm.display.viewTo&&cm.state.highlight.set(time,bind(highlightWorker,cm))
}function highlightWorker(cm){var doc=cm.doc
;if(!(doc.highlightFrontier>=cm.display.viewTo)){
var end=+new Date+cm.options.workTime,context=getContextBefore(cm,doc.highlightFrontier),changedLines=[]
;doc.iter(context.line,Math.min(doc.first+doc.size,cm.display.viewTo+500),function(line){
if(context.line>=cm.display.viewFrom){
var oldStyles=line.styles,resetState=line.text.length>cm.options.maxHighlightLength?copyState(doc.mode,context.state):null,highlighted=highlightLine(cm,line,context,!0)
;resetState&&(context.state=resetState),
line.styles=highlighted.styles
;var oldCls=line.styleClasses,newCls=highlighted.classes
;newCls?line.styleClasses=newCls:oldCls&&(line.styleClasses=null)
;for(var ischange=!oldStyles||oldStyles.length!=line.styles.length||oldCls!=newCls&&(!oldCls||!newCls||oldCls.bgClass!=newCls.bgClass||oldCls.textClass!=newCls.textClass),i=0;!ischange&&i<oldStyles.length;++i)ischange=oldStyles[i]!=line.styles[i]
;ischange&&changedLines.push(context.line),
line.stateAfter=context.save(),context.nextLine()
}else line.text.length<=cm.options.maxHighlightLength&&processLine(cm,line.text,context),
line.stateAfter=context.line%5==0?context.save():null,
context.nextLine()
;if(+new Date>end)return startWorker(cm,cm.options.workDelay),
!0
}),doc.highlightFrontier=context.line,doc.modeFrontier=Math.max(doc.modeFrontier,context.line),
changedLines.length&&runInOp(cm,function(){
for(var i=0;i<changedLines.length;i++)regLineChange(cm,changedLines[i],"text")
})}}var DisplayUpdate=function(cm,viewport,force){
var display=cm.display
;this.viewport=viewport,this.visible=visibleLines(display,cm.doc,viewport),
this.editorIsHidden=!display.wrapper.offsetWidth,
this.wrapperHeight=display.wrapper.clientHeight,
this.wrapperWidth=display.wrapper.clientWidth,
this.oldDisplayWidth=displayWidth(cm),
this.force=force,this.dims=getDimensions(cm),
this.events=[]}
;function updateDisplayIfNeeded(cm,update){
var display=cm.display,doc=cm.doc
;if(update.editorIsHidden)return resetView(cm),!1
;if(!update.force&&update.visible.from>=display.viewFrom&&update.visible.to<=display.viewTo&&(null==display.updateLineNumbers||display.updateLineNumbers>=display.viewTo)&&display.renderedView==display.view&&0==countDirtyView(cm))return!1
;maybeUpdateLineNumberWidth(cm)&&(resetView(cm),
update.dims=getDimensions(cm))
;var end=doc.first+doc.size,from=Math.max(update.visible.from-cm.options.viewportMargin,doc.first),to=Math.min(end,update.visible.to+cm.options.viewportMargin)
;display.viewFrom<from&&from-display.viewFrom<20&&(from=Math.max(doc.first,display.viewFrom)),
display.viewTo>to&&display.viewTo-to<20&&(to=Math.min(end,display.viewTo)),
sawCollapsedSpans&&(from=visualLineNo(cm.doc,from),
to=visualLineEndNo(cm.doc,to))
;var different=from!=display.viewFrom||to!=display.viewTo||display.lastWrapHeight!=update.wrapperHeight||display.lastWrapWidth!=update.wrapperWidth
;!function(cm,from,to){var display=cm.display
;0==display.view.length||from>=display.viewTo||to<=display.viewFrom?(display.view=buildViewArray(cm,from,to),
display.viewFrom=from):(display.viewFrom>from?display.view=buildViewArray(cm,from,display.viewFrom).concat(display.view):display.viewFrom<from&&(display.view=display.view.slice(findViewIndex(cm,from))),
display.viewFrom=from,
display.viewTo<to?display.view=display.view.concat(buildViewArray(cm,display.viewTo,to)):display.viewTo>to&&(display.view=display.view.slice(0,findViewIndex(cm,to)))),
display.viewTo=to
}(cm,from,to),display.viewOffset=_heightAtLine(getLine(cm.doc,display.viewFrom)),
cm.display.mover.style.top=display.viewOffset+"px"
;var toUpdate=countDirtyView(cm)
;if(!different&&0==toUpdate&&!update.force&&display.renderedView==display.view&&(null==display.updateLineNumbers||display.updateLineNumbers>=display.viewTo))return!1
;var selSnapshot=function(cm){
if(cm.hasFocus())return null
;var active=activeElt()
;if(!active||!contains(cm.display.lineDiv,active))return null
;var result={activeElt:active}
;if(window.getSelection){
var sel=window.getSelection()
;sel.anchorNode&&sel.extend&&contains(cm.display.lineDiv,sel.anchorNode)&&(result.anchorNode=sel.anchorNode,
result.anchorOffset=sel.anchorOffset,
result.focusNode=sel.focusNode,result.focusOffset=sel.focusOffset)
}return result}(cm)
;return toUpdate>4&&(display.lineDiv.style.display="none"),function(cm,updateNumbersFrom,dims){
var display=cm.display,lineNumbers=cm.options.lineNumbers,container=display.lineDiv,cur=container.firstChild
;function rm(node){var next=node.nextSibling
;return webkit&&mac&&cm.display.currentWheelTarget==node?node.style.display="none":node.parentNode.removeChild(node),
next}
for(var view=display.view,lineN=display.viewFrom,i=0;i<view.length;i++){
var lineView=view[i]
;if(lineView.hidden);else if(lineView.node&&lineView.node.parentNode==container){
for(;cur!=lineView.node;)cur=rm(cur)
;var updateNumber=lineNumbers&&null!=updateNumbersFrom&&updateNumbersFrom<=lineN&&lineView.lineNumber
;lineView.changes&&(indexOf(lineView.changes,"gutter")>-1&&(updateNumber=!1),
updateLineForChanges(cm,lineView,lineN,dims)),
updateNumber&&(removeChildren(lineView.lineNumber),
lineView.lineNumber.appendChild(document.createTextNode(lineNumberFor(cm.options,lineN)))),
cur=lineView.node.nextSibling}else{
var node=buildLineElement(cm,lineView,lineN,dims)
;container.insertBefore(node,cur)}
lineN+=lineView.size}for(;cur;)cur=rm(cur)
}(cm,display.updateLineNumbers,update.dims),
toUpdate>4&&(display.lineDiv.style.display=""),
display.renderedView=display.view,
function(snapshot){
if(snapshot&&snapshot.activeElt&&snapshot.activeElt!=activeElt()&&(snapshot.activeElt.focus(),
snapshot.anchorNode&&contains(document.body,snapshot.anchorNode)&&contains(document.body,snapshot.focusNode))){
var sel=window.getSelection(),range$$1=document.createRange()
;range$$1.setEnd(snapshot.anchorNode,snapshot.anchorOffset),
range$$1.collapse(!1),
sel.removeAllRanges(),sel.addRange(range$$1),sel.extend(snapshot.focusNode,snapshot.focusOffset)
}
}(selSnapshot),removeChildren(display.cursorDiv),removeChildren(display.selectionDiv),
display.gutters.style.height=display.sizer.style.minHeight=0,
different&&(display.lastWrapHeight=update.wrapperHeight,
display.lastWrapWidth=update.wrapperWidth,
startWorker(cm,400)),display.updateLineNumbers=null,
!0}function postUpdateDisplay(cm,update){
for(var viewport=update.viewport,first=!0;(first&&cm.options.lineWrapping&&update.oldDisplayWidth!=displayWidth(cm)||(viewport&&null!=viewport.top&&(viewport={
top:Math.min(cm.doc.height+paddingVert(cm.display)-displayHeight(cm),viewport.top)
}),
update.visible=visibleLines(cm.display,cm.doc,viewport),!(update.visible.from>=cm.display.viewFrom&&update.visible.to<=cm.display.viewTo)))&&updateDisplayIfNeeded(cm,update);first=!1){
updateHeightsInViewport(cm)
;var barMeasure=measureForScrollbars(cm)
;updateSelection(cm),updateScrollbars(cm,barMeasure),
setDocumentHeight(cm,barMeasure),update.force=!1}
update.signal(cm,"update",cm),cm.display.viewFrom==cm.display.reportedViewFrom&&cm.display.viewTo==cm.display.reportedViewTo||(update.signal(cm,"viewportChange",cm,cm.display.viewFrom,cm.display.viewTo),
cm.display.reportedViewFrom=cm.display.viewFrom,
cm.display.reportedViewTo=cm.display.viewTo)}
function updateDisplaySimple(cm,viewport){
var update=new DisplayUpdate(cm,viewport)
;if(updateDisplayIfNeeded(cm,update)){
updateHeightsInViewport(cm),postUpdateDisplay(cm,update)
;var barMeasure=measureForScrollbars(cm)
;updateSelection(cm),updateScrollbars(cm,barMeasure),
setDocumentHeight(cm,barMeasure),update.finish()}}
function updateGutterSpace(cm){
var width=cm.display.gutters.offsetWidth
;cm.display.sizer.style.marginLeft=width+"px"}
function setDocumentHeight(cm,measure){
cm.display.sizer.style.minHeight=measure.docHeight+"px",
cm.display.heightForcer.style.top=measure.docHeight+"px",
cm.display.gutters.style.height=measure.docHeight+cm.display.barHeight+scrollGap(cm)+"px"
}function updateGutters(cm){
var gutters=cm.display.gutters,specs=cm.options.gutters
;removeChildren(gutters)
;for(var i=0;i<specs.length;++i){
var gutterClass=specs[i],gElt=gutters.appendChild(elt("div",null,"CodeMirror-gutter "+gutterClass))
;"CodeMirror-linenumbers"==gutterClass&&(cm.display.lineGutter=gElt,
gElt.style.width=(cm.display.lineNumWidth||1)+"px")
}
gutters.style.display=i?"":"none",updateGutterSpace(cm)
}function setGuttersForLineNumbers(options){
var found=indexOf(options.gutters,"CodeMirror-linenumbers")
;-1==found&&options.lineNumbers?options.gutters=options.gutters.concat(["CodeMirror-linenumbers"]):found>-1&&!options.lineNumbers&&(options.gutters=options.gutters.slice(0),
options.gutters.splice(found,1))}
DisplayUpdate.prototype.signal=function(emitter,type){
hasHandler(emitter,type)&&this.events.push(arguments)
},DisplayUpdate.prototype.finish=function(){
for(var i=0;i<this.events.length;i++)signal.apply(null,this.events[i])
};var wheelSamples=0,wheelPixelsPerUnit=null
;function wheelEventDelta(e){
var dx=e.wheelDeltaX,dy=e.wheelDeltaY
;return null==dx&&e.detail&&e.axis==e.HORIZONTAL_AXIS&&(dx=e.detail),
null==dy&&e.detail&&e.axis==e.VERTICAL_AXIS?dy=e.detail:null==dy&&(dy=e.wheelDelta),
{x:dx,y:dy}}function wheelEventPixels(e){
var delta=wheelEventDelta(e)
;return delta.x*=wheelPixelsPerUnit,delta.y*=wheelPixelsPerUnit,
delta}function onScrollWheel(cm,e){
var delta=wheelEventDelta(e),dx=delta.x,dy=delta.y,display=cm.display,scroll=display.scroller,canScrollX=scroll.scrollWidth>scroll.clientWidth,canScrollY=scroll.scrollHeight>scroll.clientHeight
;if(dx&&canScrollX||dy&&canScrollY){
if(dy&&mac&&webkit)outer:for(var cur=e.target,view=display.view;cur!=scroll;cur=cur.parentNode)for(var i=0;i<view.length;i++)if(view[i].node==cur){
cm.display.currentWheelTarget=cur;break outer}
if(dx&&!gecko&&!presto&&null!=wheelPixelsPerUnit)return dy&&canScrollY&&updateScrollTop(cm,Math.max(0,scroll.scrollTop+dy*wheelPixelsPerUnit)),
setScrollLeft(cm,Math.max(0,scroll.scrollLeft+dx*wheelPixelsPerUnit)),
(!dy||dy&&canScrollY)&&e_preventDefault(e),
void(display.wheelStartX=null)
;if(dy&&null!=wheelPixelsPerUnit){
var pixels=dy*wheelPixelsPerUnit,top=cm.doc.scrollTop,bot=top+display.wrapper.clientHeight
;pixels<0?top=Math.max(0,top+pixels-50):bot=Math.min(cm.doc.height,bot+pixels+50),
updateDisplaySimple(cm,{top:top,bottom:bot})}
wheelSamples<20&&(null==display.wheelStartX?(display.wheelStartX=scroll.scrollLeft,
display.wheelStartY=scroll.scrollTop,
display.wheelDX=dx,display.wheelDY=dy,setTimeout(function(){
if(null!=display.wheelStartX){
var movedX=scroll.scrollLeft-display.wheelStartX,movedY=scroll.scrollTop-display.wheelStartY,sample=movedY&&display.wheelDY&&movedY/display.wheelDY||movedX&&display.wheelDX&&movedX/display.wheelDX
;display.wheelStartX=display.wheelStartY=null,
sample&&(wheelPixelsPerUnit=(wheelPixelsPerUnit*wheelSamples+sample)/(wheelSamples+1),
++wheelSamples)}
},200)):(display.wheelDX+=dx,display.wheelDY+=dy))
}}
ie?wheelPixelsPerUnit=-.53:gecko?wheelPixelsPerUnit=15:chrome?wheelPixelsPerUnit=-.7:safari&&(wheelPixelsPerUnit=-1/3)
;var Selection=function(ranges,primIndex){
this.ranges=ranges,this.primIndex=primIndex}
;Selection.prototype.primary=function(){
return this.ranges[this.primIndex]
},Selection.prototype.equals=function(other){
if(other==this)return!0
;if(other.primIndex!=this.primIndex||other.ranges.length!=this.ranges.length)return!1
;for(var i=0;i<this.ranges.length;i++){
var here=this.ranges[i],there=other.ranges[i]
;if(!equalCursorPos(here.anchor,there.anchor)||!equalCursorPos(here.head,there.head))return!1
}return!0
},Selection.prototype.deepCopy=function(){
for(var out=[],i=0;i<this.ranges.length;i++)out[i]=new Range(copyPos(this.ranges[i].anchor),copyPos(this.ranges[i].head))
;return new Selection(out,this.primIndex)
},Selection.prototype.somethingSelected=function(){
for(var i=0;i<this.ranges.length;i++)if(!this.ranges[i].empty())return!0
;return!1
},Selection.prototype.contains=function(pos,end){
end||(end=pos)
;for(var i=0;i<this.ranges.length;i++){
var range=this.ranges[i]
;if(cmp(end,range.from())>=0&&cmp(pos,range.to())<=0)return i
}return-1};var Range=function(anchor,head){
this.anchor=anchor,this.head=head}
;function normalizeSelection(cm,ranges,primIndex){
var mayTouch=cm&&cm.options.selectionsMayTouch,prim=ranges[primIndex]
;ranges.sort(function(a,b){
return cmp(a.from(),b.from())
}),primIndex=indexOf(ranges,prim)
;for(var i=1;i<ranges.length;i++){
var cur=ranges[i],prev=ranges[i-1],diff=cmp(prev.to(),cur.from())
;if(mayTouch&&!cur.empty()?diff>0:diff>=0){
var from=minPos(prev.from(),cur.from()),to=maxPos(prev.to(),cur.to()),inv=prev.empty()?cur.from()==cur.head:prev.from()==prev.head
;i<=primIndex&&--primIndex,
ranges.splice(--i,2,new Range(inv?to:from,inv?from:to))
}}return new Selection(ranges,primIndex)}
function simpleSelection(anchor,head){
return new Selection([new Range(anchor,head||anchor)],0)
}function changeEnd(change){
return change.text?Pos(change.from.line+change.text.length-1,lst(change.text).length+(1==change.text.length?change.from.ch:0)):change.to
}function adjustForChange(pos,change){
if(cmp(pos,change.from)<0)return pos
;if(cmp(pos,change.to)<=0)return changeEnd(change)
;var line=pos.line+change.text.length-(change.to.line-change.from.line)-1,ch=pos.ch
;return pos.line==change.to.line&&(ch+=changeEnd(change).ch-change.to.ch),
Pos(line,ch)}
function computeSelAfterChange(doc,change){
for(var out=[],i=0;i<doc.sel.ranges.length;i++){
var range=doc.sel.ranges[i]
;out.push(new Range(adjustForChange(range.anchor,change),adjustForChange(range.head,change)))
}
return normalizeSelection(doc.cm,out,doc.sel.primIndex)
}function offsetPos(pos,old,nw){
return pos.line==old.line?Pos(nw.line,pos.ch-old.ch+nw.ch):Pos(nw.line+(pos.line-old.line),pos.ch)
}function loadMode(cm){
cm.doc.mode=getMode(cm.options,cm.doc.modeOption),resetModeState(cm)
}function resetModeState(cm){
cm.doc.iter(function(line){
line.stateAfter&&(line.stateAfter=null),line.styles&&(line.styles=null)
}),cm.doc.modeFrontier=cm.doc.highlightFrontier=cm.doc.first,
startWorker(cm,100),
cm.state.modeGen++,cm.curOp&&regChange(cm)}
function isWholeLineUpdate(doc,change){
return 0==change.from.ch&&0==change.to.ch&&""==lst(change.text)&&(!doc.cm||doc.cm.options.wholeLineUpdateBefore)
}
function updateDoc(doc,change,markedSpans,estimateHeight$$1){
function spansFor(n){
return markedSpans?markedSpans[n]:null}
function update(line,text,spans){
!function(line,text,markedSpans,estimateHeight){
line.text=text,line.stateAfter&&(line.stateAfter=null),
line.styles&&(line.styles=null),
null!=line.order&&(line.order=null),detachMarkedSpans(line),
attachMarkedSpans(line,markedSpans)
;var estHeight=estimateHeight?estimateHeight(line):1
;estHeight!=line.height&&updateLineHeight(line,estHeight)
}(line,text,spans,estimateHeight$$1),
signalLater(line,"change",line,change)}
function linesFor(start,end){
for(var result=[],i=start;i<end;++i)result.push(new Line(text[i],spansFor(i),estimateHeight$$1))
;return result}
var from=change.from,to=change.to,text=change.text,firstLine=getLine(doc,from.line),lastLine=getLine(doc,to.line),lastText=lst(text),lastSpans=spansFor(text.length-1),nlines=to.line-from.line
;if(change.full)doc.insert(0,linesFor(0,text.length)),
doc.remove(text.length,doc.size-text.length);else if(isWholeLineUpdate(doc,change)){
var added=linesFor(0,text.length-1)
;update(lastLine,lastLine.text,lastSpans),nlines&&doc.remove(from.line,nlines),
added.length&&doc.insert(from.line,added)
}else if(firstLine==lastLine)if(1==text.length)update(firstLine,firstLine.text.slice(0,from.ch)+lastText+firstLine.text.slice(to.ch),lastSpans);else{
var added$1=linesFor(1,text.length-1)
;added$1.push(new Line(lastText+firstLine.text.slice(to.ch),lastSpans,estimateHeight$$1)),
update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0)),
doc.insert(from.line+1,added$1)
}else if(1==text.length)update(firstLine,firstLine.text.slice(0,from.ch)+text[0]+lastLine.text.slice(to.ch),spansFor(0)),
doc.remove(from.line+1,nlines);else{
update(firstLine,firstLine.text.slice(0,from.ch)+text[0],spansFor(0)),
update(lastLine,lastText+lastLine.text.slice(to.ch),lastSpans)
;var added$2=linesFor(1,text.length-1)
;nlines>1&&doc.remove(from.line+1,nlines-1),
doc.insert(from.line+1,added$2)}
signalLater(doc,"change",doc,change)}
function linkedDocs(doc,f,sharedHistOnly){
!function propagate(doc,skip,sharedHist){
if(doc.linked)for(var i=0;i<doc.linked.length;++i){
var rel=doc.linked[i];if(rel.doc!=skip){
var shared=sharedHist&&rel.sharedHist
;sharedHistOnly&&!shared||(f(rel.doc,shared),
propagate(rel.doc,doc,shared))}}}(doc,null,!0)}
function attachDoc(cm,doc){
if(doc.cm)throw new Error("This document is already in use.")
;cm.doc=doc,doc.cm=cm,
estimateLineHeights(cm),loadMode(cm),setDirectionClass(cm),
cm.options.lineWrapping||findMaxLine(cm),
cm.options.mode=doc.modeOption,regChange(cm)}
function setDirectionClass(cm){
("rtl"==cm.doc.direction?addClass:rmClass)(cm.display.lineDiv,"CodeMirror-rtl")
}function History(startGen){
this.done=[],this.undone=[],this.undoDepth=1/0,this.lastModTime=this.lastSelTime=0,
this.lastOp=this.lastSelOp=null,
this.lastOrigin=this.lastSelOrigin=null,this.generation=this.maxGeneration=startGen||1
}function historyChangeFromChange(doc,change){
var histChange={from:copyPos(change.from),
to:changeEnd(change),
text:getBetween(doc,change.from,change.to)}
;return attachLocalSpans(doc,histChange,change.from.line,change.to.line+1),
linkedDocs(doc,function(doc){
return attachLocalSpans(doc,histChange,change.from.line,change.to.line+1)
},!0),histChange}
function clearSelectionEvents(array){
for(;array.length;){var last=lst(array)
;if(!last.ranges)break;array.pop()}}
function addChangeToHistory(doc,change,selAfter,opId){
var hist=doc.history;hist.undone.length=0
;var cur,last,time=+new Date
;if((hist.lastOp==opId||hist.lastOrigin==change.origin&&change.origin&&("+"==change.origin.charAt(0)&&hist.lastModTime>time-(doc.cm?doc.cm.options.historyEventDelay:500)||"*"==change.origin.charAt(0)))&&(cur=function(hist,force){
return force?(clearSelectionEvents(hist.done),
lst(hist.done)):hist.done.length&&!lst(hist.done).ranges?lst(hist.done):hist.done.length>1&&!hist.done[hist.done.length-2].ranges?(hist.done.pop(),
lst(hist.done)):void 0
}(hist,hist.lastOp==opId)))last=lst(cur.changes),0==cmp(change.from,change.to)&&0==cmp(change.from,last.to)?last.to=changeEnd(change):cur.changes.push(historyChangeFromChange(doc,change));else{
var before=lst(hist.done)
;for(before&&before.ranges||pushSelectionToHistory(doc.sel,hist.done),
cur={
changes:[historyChangeFromChange(doc,change)],
generation:hist.generation
},hist.done.push(cur);hist.done.length>hist.undoDepth;)hist.done.shift(),
hist.done[0].ranges||hist.done.shift()}
hist.done.push(selAfter),hist.generation=++hist.maxGeneration,
hist.lastModTime=hist.lastSelTime=time,
hist.lastOp=hist.lastSelOp=opId,hist.lastOrigin=hist.lastSelOrigin=change.origin,
last||signal(doc,"historyAdded")}
function addSelectionToHistory(doc,sel,opId,options){
var hist=doc.history,origin=options&&options.origin
;opId==hist.lastSelOp||origin&&hist.lastSelOrigin==origin&&(hist.lastModTime==hist.lastSelTime&&hist.lastOrigin==origin||function(doc,origin,prev,sel){
var ch=origin.charAt(0)
;return"*"==ch||"+"==ch&&prev.ranges.length==sel.ranges.length&&prev.somethingSelected()==sel.somethingSelected()&&new Date-doc.history.lastSelTime<=(doc.cm?doc.cm.options.historyEventDelay:500)
}(doc,origin,lst(hist.done),sel))?hist.done[hist.done.length-1]=sel:pushSelectionToHistory(sel,hist.done),
hist.lastSelTime=+new Date,
hist.lastSelOrigin=origin,hist.lastSelOp=opId,options&&!1!==options.clearRedo&&clearSelectionEvents(hist.undone)
}function pushSelectionToHistory(sel,dest){
var top=lst(dest)
;top&&top.ranges&&top.equals(sel)||dest.push(sel)}
function attachLocalSpans(doc,change,from,to){
var existing=change["spans_"+doc.id],n=0
;doc.iter(Math.max(doc.first,from),Math.min(doc.first+doc.size,to),function(line){
line.markedSpans&&((existing||(existing=change["spans_"+doc.id]={}))[n]=line.markedSpans),
++n})}function removeClearedSpans(spans){
if(!spans)return null
;for(var out,i=0;i<spans.length;++i)spans[i].marker.explicitlyCleared?out||(out=spans.slice(0,i)):out&&out.push(spans[i])
;return out?out.length?out:null:spans}
function mergeOldSpans(doc,change){
var old=function(doc,change){
var found=change["spans_"+doc.id]
;if(!found)return null
;for(var nw=[],i=0;i<change.text.length;++i)nw.push(removeClearedSpans(found[i]))
;return nw
}(doc,change),stretched=stretchSpansOverChange(doc,change)
;if(!old)return stretched;if(!stretched)return old
;for(var i=0;i<old.length;++i){
var oldCur=old[i],stretchCur=stretched[i]
;if(oldCur&&stretchCur)spans:for(var j=0;j<stretchCur.length;++j){
for(var span=stretchCur[j],k=0;k<oldCur.length;++k)if(oldCur[k].marker==span.marker)continue spans
;oldCur.push(span)
}else stretchCur&&(old[i]=stretchCur)}return old}
function copyHistoryArray(events,newGroup,instantiateSel){
for(var copy=[],i=0;i<events.length;++i){
var event=events[i]
;if(event.ranges)copy.push(instantiateSel?Selection.prototype.deepCopy.call(event):event);else{
var changes=event.changes,newChanges=[]
;copy.push({changes:newChanges})
;for(var j=0;j<changes.length;++j){
var change=changes[j],m=void 0
;if(newChanges.push({from:change.from,
to:change.to,text:change.text
}),newGroup)for(var prop in change)(m=prop.match(/^spans_(\d+)$/))&&indexOf(newGroup,Number(m[1]))>-1&&(lst(newChanges)[prop]=change[prop],
delete change[prop])}}}return copy}
function extendRange(range,head,other,extend){
if(extend){var anchor=range.anchor;if(other){
var posBefore=cmp(head,anchor)<0
;posBefore!=cmp(other,anchor)<0?(anchor=head,head=other):posBefore!=cmp(head,other)<0&&(head=other)
}return new Range(anchor,head)}
return new Range(other||head,head)}
function extendSelection(doc,head,other,options,extend){
null==extend&&(extend=doc.cm&&(doc.cm.display.shift||doc.extend)),
setSelection(doc,new Selection([extendRange(doc.sel.primary(),head,other,extend)],0),options)
}function extendSelections(doc,heads,options){
for(var out=[],extend=doc.cm&&(doc.cm.display.shift||doc.extend),i=0;i<doc.sel.ranges.length;i++)out[i]=extendRange(doc.sel.ranges[i],heads[i],null,extend)
;var newSel=normalizeSelection(doc.cm,out,doc.sel.primIndex)
;setSelection(doc,newSel,options)}
function replaceOneSelection(doc,i,range,options){
var ranges=doc.sel.ranges.slice(0)
;ranges[i]=range,setSelection(doc,normalizeSelection(doc.cm,ranges,doc.sel.primIndex),options)
}
function setSimpleSelection(doc,anchor,head,options){
setSelection(doc,simpleSelection(anchor,head),options)
}
function setSelectionReplaceHistory(doc,sel,options){
var done=doc.history.done,last=lst(done)
;last&&last.ranges?(done[done.length-1]=sel,
setSelectionNoUndo(doc,sel,options)):setSelection(doc,sel,options)
}function setSelection(doc,sel,options){
setSelectionNoUndo(doc,sel,options),addSelectionToHistory(doc,doc.sel,doc.cm?doc.cm.curOp.id:NaN,options)
}function setSelectionNoUndo(doc,sel,options){
(hasHandler(doc,"beforeSelectionChange")||doc.cm&&hasHandler(doc.cm,"beforeSelectionChange"))&&(sel=function(doc,sel,options){
var obj={ranges:sel.ranges,
update:function(ranges){this.ranges=[]
;for(var i=0;i<ranges.length;i++)this.ranges[i]=new Range(_clipPos(doc,ranges[i].anchor),_clipPos(doc,ranges[i].head))
},origin:options&&options.origin}
;return signal(doc,"beforeSelectionChange",doc,obj),
doc.cm&&signal(doc.cm,"beforeSelectionChange",doc.cm,obj),
obj.ranges!=sel.ranges?normalizeSelection(doc.cm,obj.ranges,obj.ranges.length-1):sel
}(doc,sel,options))
;var bias=options&&options.bias||(cmp(sel.primary().head,doc.sel.primary().head)<0?-1:1)
;setSelectionInner(doc,skipAtomicInSelection(doc,sel,bias,!0)),
options&&!1===options.scroll||!doc.cm||ensureCursorVisible(doc.cm)
}function setSelectionInner(doc,sel){
sel.equals(doc.sel)||(doc.sel=sel,doc.cm&&(doc.cm.curOp.updateInput=1,
doc.cm.curOp.selectionChanged=!0,
signalCursorActivity(doc.cm)),signalLater(doc,"cursorActivity",doc))
}function reCheckSelection(doc){
setSelectionInner(doc,skipAtomicInSelection(doc,doc.sel,null,!1))
}
function skipAtomicInSelection(doc,sel,bias,mayClear){
for(var out,i=0;i<sel.ranges.length;i++){
var range=sel.ranges[i],old=sel.ranges.length==doc.sel.ranges.length&&doc.sel.ranges[i],newAnchor=skipAtomic(doc,range.anchor,old&&old.anchor,bias,mayClear),newHead=skipAtomic(doc,range.head,old&&old.head,bias,mayClear)
;(out||newAnchor!=range.anchor||newHead!=range.head)&&(out||(out=sel.ranges.slice(0,i)),
out[i]=new Range(newAnchor,newHead))}
return out?normalizeSelection(doc.cm,out,sel.primIndex):sel
}
function skipAtomicInner(doc,pos,oldPos,dir,mayClear){
var line=getLine(doc,pos.line)
;if(line.markedSpans)for(var i=0;i<line.markedSpans.length;++i){
var sp=line.markedSpans[i],m=sp.marker
;if((null==sp.from||(m.inclusiveLeft?sp.from<=pos.ch:sp.from<pos.ch))&&(null==sp.to||(m.inclusiveRight?sp.to>=pos.ch:sp.to>pos.ch))){
if(mayClear&&(signal(m,"beforeCursorEnter"),
m.explicitlyCleared)){if(line.markedSpans){--i
;continue}break}if(!m.atomic)continue;if(oldPos){
var near=m.find(dir<0?1:-1),diff=void 0
;if((dir<0?m.inclusiveRight:m.inclusiveLeft)&&(near=movePos(doc,near,-dir,near&&near.line==pos.line?line:null)),
near&&near.line==pos.line&&(diff=cmp(near,oldPos))&&(dir<0?diff<0:diff>0))return skipAtomicInner(doc,near,pos,dir,mayClear)
}var far=m.find(dir<0?-1:1)
;return(dir<0?m.inclusiveLeft:m.inclusiveRight)&&(far=movePos(doc,far,dir,far.line==pos.line?line:null)),
far?skipAtomicInner(doc,far,pos,dir,mayClear):null
}}return pos}
function skipAtomic(doc,pos,oldPos,bias,mayClear){
var dir=bias||1,found=skipAtomicInner(doc,pos,oldPos,dir,mayClear)||!mayClear&&skipAtomicInner(doc,pos,oldPos,dir,!0)||skipAtomicInner(doc,pos,oldPos,-dir,mayClear)||!mayClear&&skipAtomicInner(doc,pos,oldPos,-dir,!0)
;return found||(doc.cantEdit=!0,Pos(doc.first,0))}
function movePos(doc,pos,dir,line){
return dir<0&&0==pos.ch?pos.line>doc.first?_clipPos(doc,Pos(pos.line-1)):null:dir>0&&pos.ch==(line||getLine(doc,pos.line)).text.length?pos.line<doc.first+doc.size-1?Pos(pos.line+1,0):null:new Pos(pos.line,pos.ch+dir)
}function selectAll(cm){
cm.setSelection(Pos(cm.firstLine(),0),Pos(cm.lastLine()),sel_dontScroll)
}function filterChange(doc,change,update){
var obj={canceled:!1,from:change.from,
to:change.to,text:change.text,
origin:change.origin,cancel:function(){
return obj.canceled=!0}}
;return update&&(obj.update=function(from,to,text,origin){
from&&(obj.from=_clipPos(doc,from)),
to&&(obj.to=_clipPos(doc,to)),text&&(obj.text=text),
void 0!==origin&&(obj.origin=origin)
}),signal(doc,"beforeChange",doc,obj),doc.cm&&signal(doc.cm,"beforeChange",doc.cm,obj),
obj.canceled?(doc.cm&&(doc.cm.curOp.updateInput=2),
null):{from:obj.from,to:obj.to,text:obj.text,
origin:obj.origin}}
function makeChange(doc,change,ignoreReadOnly){
if(doc.cm){
if(!doc.cm.curOp)return operation(doc.cm,makeChange)(doc,change,ignoreReadOnly)
;if(doc.cm.state.suppressEdits)return}
if(!(hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange"))||(change=filterChange(doc,change,!0))){
var split=sawReadOnlySpans&&!ignoreReadOnly&&function(doc,from,to){
var markers=null
;if(doc.iter(from.line,to.line+1,function(line){
if(line.markedSpans)for(var i=0;i<line.markedSpans.length;++i){
var mark=line.markedSpans[i].marker
;!mark.readOnly||markers&&-1!=indexOf(markers,mark)||(markers||(markers=[])).push(mark)
}}),!markers)return null;for(var parts=[{
from:from,to:to
}],i=0;i<markers.length;++i)for(var mk=markers[i],m=mk.find(0),j=0;j<parts.length;++j){
var p=parts[j]
;if(!(cmp(p.to,m.from)<0||cmp(p.from,m.to)>0)){
var newParts=[j,1],dfrom=cmp(p.from,m.from),dto=cmp(p.to,m.to)
;(dfrom<0||!mk.inclusiveLeft&&!dfrom)&&newParts.push({
from:p.from,to:m.from
}),(dto>0||!mk.inclusiveRight&&!dto)&&newParts.push({
from:m.to,to:p.to
}),parts.splice.apply(parts,newParts),j+=newParts.length-3
}}return parts}(doc,change.from,change.to)
;if(split)for(var i=split.length-1;i>=0;--i)makeChangeInner(doc,{
from:split[i].from,to:split[i].to,
text:i?[""]:change.text,origin:change.origin
});else makeChangeInner(doc,change)}}
function makeChangeInner(doc,change){
if(1!=change.text.length||""!=change.text[0]||0!=cmp(change.from,change.to)){
var selAfter=computeSelAfterChange(doc,change)
;addChangeToHistory(doc,change,selAfter,doc.cm?doc.cm.curOp.id:NaN),
makeChangeSingleDoc(doc,change,selAfter,stretchSpansOverChange(doc,change))
;var rebased=[]
;linkedDocs(doc,function(doc,sharedHist){
sharedHist||-1!=indexOf(rebased,doc.history)||(rebaseHist(doc.history,change),
rebased.push(doc.history)),
makeChangeSingleDoc(doc,change,null,stretchSpansOverChange(doc,change))
})}}
function makeChangeFromHistory(doc,type,allowSelectionOnly){
var suppress=doc.cm&&doc.cm.state.suppressEdits
;if(!suppress||allowSelectionOnly){
for(var event,hist=doc.history,selAfter=doc.sel,source="undo"==type?hist.done:hist.undone,dest="undo"==type?hist.undone:hist.done,i=0;i<source.length&&(event=source[i],
allowSelectionOnly?!event.ranges||event.equals(doc.sel):event.ranges);i++);
if(i!=source.length){
for(hist.lastOrigin=hist.lastSelOrigin=null;;){
if(!(event=source.pop()).ranges){
if(suppress)return void source.push(event);break}
if(pushSelectionToHistory(event,dest),
allowSelectionOnly&&!event.equals(doc.sel))return void setSelection(doc,event,{
clearRedo:!1});selAfter=event}var antiChanges=[]
;pushSelectionToHistory(selAfter,dest),dest.push({
changes:antiChanges,generation:hist.generation
}),hist.generation=event.generation||++hist.maxGeneration
;for(var filter=hasHandler(doc,"beforeChange")||doc.cm&&hasHandler(doc.cm,"beforeChange"),loop=function(i){
var change=event.changes[i]
;if(change.origin=type,filter&&!filterChange(doc,change,!1))return source.length=0,
{}
;antiChanges.push(historyChangeFromChange(doc,change))
;var after=i?computeSelAfterChange(doc,change):lst(source)
;makeChangeSingleDoc(doc,change,after,mergeOldSpans(doc,change)),
!i&&doc.cm&&doc.cm.scrollIntoView({
from:change.from,to:changeEnd(change)})
;var rebased=[]
;linkedDocs(doc,function(doc,sharedHist){
sharedHist||-1!=indexOf(rebased,doc.history)||(rebaseHist(doc.history,change),
rebased.push(doc.history)),
makeChangeSingleDoc(doc,change,null,mergeOldSpans(doc,change))
})},i$1=event.changes.length-1;i$1>=0;--i$1){
var returned=loop(i$1)
;if(returned)return returned.v}}}}
function shiftDoc(doc,distance){
if(0!=distance&&(doc.first+=distance,doc.sel=new Selection(map(doc.sel.ranges,function(range){
return new Range(Pos(range.anchor.line+distance,range.anchor.ch),Pos(range.head.line+distance,range.head.ch))
}),doc.sel.primIndex),doc.cm)){
regChange(doc.cm,doc.first,doc.first-distance,distance)
;for(var d=doc.cm.display,l=d.viewFrom;l<d.viewTo;l++)regLineChange(doc.cm,l,"gutter")
}}
function makeChangeSingleDoc(doc,change,selAfter,spans){
if(doc.cm&&!doc.cm.curOp)return operation(doc.cm,makeChangeSingleDoc)(doc,change,selAfter,spans)
;if(change.to.line<doc.first)shiftDoc(doc,change.text.length-1-(change.to.line-change.from.line));else if(!(change.from.line>doc.lastLine())){
if(change.from.line<doc.first){
var shift=change.text.length-1-(doc.first-change.from.line)
;shiftDoc(doc,shift),change={
from:Pos(doc.first,0),
to:Pos(change.to.line+shift,change.to.ch),
text:[lst(change.text)],origin:change.origin}}
var last=doc.lastLine()
;change.to.line>last&&(change={from:change.from,
to:Pos(last,getLine(doc,last).text.length),
text:[change.text[0]],origin:change.origin
}),change.removed=getBetween(doc,change.from,change.to),
selAfter||(selAfter=computeSelAfterChange(doc,change)),
doc.cm?function(cm,change,spans){
var doc=cm.doc,display=cm.display,from=change.from,to=change.to,recomputeMaxLength=!1,checkWidthStart=from.line
;cm.options.lineWrapping||(checkWidthStart=lineNo(visualLine(getLine(doc,from.line))),
doc.iter(checkWidthStart,to.line+1,function(line){
if(line==display.maxLine)return recomputeMaxLength=!0,
!0
})),doc.sel.contains(change.from,change.to)>-1&&signalCursorActivity(cm),updateDoc(doc,change,spans,estimateHeight(cm)),
cm.options.lineWrapping||(doc.iter(checkWidthStart,from.line+change.text.length,function(line){
var len=lineLength(line)
;len>display.maxLineLength&&(display.maxLine=line,display.maxLineLength=len,
display.maxLineChanged=!0,recomputeMaxLength=!1)
}),recomputeMaxLength&&(cm.curOp.updateMaxLine=!0)),
function(doc,n){
if(doc.modeFrontier=Math.min(doc.modeFrontier,n),!(doc.highlightFrontier<n-10)){
for(var start=doc.first,line=n-1;line>start;line--){
var saved=getLine(doc,line).stateAfter
;if(saved&&(!(saved instanceof SavedContext)||line+saved.lookAhead<n)){
start=line+1;break}}
doc.highlightFrontier=Math.min(doc.highlightFrontier,start)
}}(doc,from.line),startWorker(cm,400)
;var lendiff=change.text.length-(to.line-from.line)-1
;change.full?regChange(cm):from.line!=to.line||1!=change.text.length||isWholeLineUpdate(cm.doc,change)?regChange(cm,from.line,to.line+1,lendiff):regLineChange(cm,from.line,"text")
;var changesHandler=hasHandler(cm,"changes"),changeHandler=hasHandler(cm,"change")
;if(changeHandler||changesHandler){var obj={
from:from,to:to,text:change.text,
removed:change.removed,origin:change.origin}
;changeHandler&&signalLater(cm,"change",cm,obj),
changesHandler&&(cm.curOp.changeObjs||(cm.curOp.changeObjs=[])).push(obj)
}cm.display.selForContextMenu=null
}(doc.cm,change,spans):updateDoc(doc,change,spans),
setSelectionNoUndo(doc,selAfter,sel_dontScroll)}}
function _replaceRange(doc,code,from,to,origin){
var assign
;to||(to=from),cmp(to,from)<0&&(from=(assign=[to,from])[0],to=assign[1]),
"string"==typeof code&&(code=doc.splitLines(code)),
makeChange(doc,{from:from,to:to,text:code,
origin:origin})}
function rebaseHistSelSingle(pos,from,to,diff){
to<pos.line?pos.line+=diff:from<pos.line&&(pos.line=from,
pos.ch=0)}
function rebaseHistArray(array,from,to,diff){
for(var i=0;i<array.length;++i){
var sub=array[i],ok=!0;if(sub.ranges){
sub.copied||((sub=array[i]=sub.deepCopy()).copied=!0)
;for(var j=0;j<sub.ranges.length;j++)rebaseHistSelSingle(sub.ranges[j].anchor,from,to,diff),
rebaseHistSelSingle(sub.ranges[j].head,from,to,diff)
}else{for(var j$1=0;j$1<sub.changes.length;++j$1){
var cur=sub.changes[j$1]
;if(to<cur.from.line)cur.from=Pos(cur.from.line+diff,cur.from.ch),
cur.to=Pos(cur.to.line+diff,cur.to.ch);else if(from<=cur.to.line){
ok=!1;break}}ok||(array.splice(0,i+1),i=0)}}}
function rebaseHist(hist,change){
var from=change.from.line,to=change.to.line,diff=change.text.length-(to-from)-1
;rebaseHistArray(hist.done,from,to,diff),
rebaseHistArray(hist.undone,from,to,diff)}
function changeLine(doc,handle,changeType,op){
var no=handle,line=handle
;return"number"==typeof handle?line=getLine(doc,clipLine(doc,handle)):no=lineNo(handle),
null==no?null:(op(line,no)&&doc.cm&&regLineChange(doc.cm,no,changeType),
line)}function LeafChunk(lines){
this.lines=lines,this.parent=null
;for(var height=0,i=0;i<lines.length;++i)lines[i].parent=this,
height+=lines[i].height;this.height=height}
function BranchChunk(children){
this.children=children
;for(var size=0,height=0,i=0;i<children.length;++i){
var ch=children[i]
;size+=ch.chunkSize(),height+=ch.height,ch.parent=this
}
this.size=size,this.height=height,this.parent=null
}Range.prototype.from=function(){
return minPos(this.anchor,this.head)
},Range.prototype.to=function(){
return maxPos(this.anchor,this.head)
},Range.prototype.empty=function(){
return this.head.line==this.anchor.line&&this.head.ch==this.anchor.ch
},LeafChunk.prototype={chunkSize:function(){
return this.lines.length},
removeInner:function(at,n){
for(var i=at,e=at+n;i<e;++i){
var line=this.lines[i]
;this.height-=line.height,cleanUpLine(line),signalLater(line,"delete")
}this.lines.splice(at,n)},
collapse:function(lines){
lines.push.apply(lines,this.lines)},
insertInner:function(at,lines,height){
this.height+=height,this.lines=this.lines.slice(0,at).concat(lines).concat(this.lines.slice(at))
;for(var i=0;i<lines.length;++i)lines[i].parent=this
},iterN:function(at,n,op){
for(var e=at+n;at<e;++at)if(op(this.lines[at]))return!0
}},BranchChunk.prototype={chunkSize:function(){
return this.size},removeInner:function(at,n){
this.size-=n
;for(var i=0;i<this.children.length;++i){
var child=this.children[i],sz=child.chunkSize()
;if(at<sz){
var rm=Math.min(n,sz-at),oldHeight=child.height
;if(child.removeInner(at,rm),this.height-=oldHeight-child.height,
sz==rm&&(this.children.splice(i--,1),
child.parent=null),0==(n-=rm))break;at=0
}else at-=sz}
if(this.size-n<25&&(this.children.length>1||!(this.children[0]instanceof LeafChunk))){
var lines=[]
;this.collapse(lines),this.children=[new LeafChunk(lines)],this.children[0].parent=this
}},collapse:function(lines){
for(var i=0;i<this.children.length;++i)this.children[i].collapse(lines)
},insertInner:function(at,lines,height){
this.size+=lines.length,this.height+=height
;for(var i=0;i<this.children.length;++i){
var child=this.children[i],sz=child.chunkSize()
;if(at<=sz){
if(child.insertInner(at,lines,height),child.lines&&child.lines.length>50){
for(var remaining=child.lines.length%25+25,pos=remaining;pos<child.lines.length;){
var leaf=new LeafChunk(child.lines.slice(pos,pos+=25))
;child.height-=leaf.height,
this.children.splice(++i,0,leaf),leaf.parent=this}
child.lines=child.lines.slice(0,remaining),
this.maybeSpill()}break}at-=sz}},
maybeSpill:function(){
if(!(this.children.length<=10)){var me=this;do{
var spilled=me.children.splice(me.children.length-5,5),sibling=new BranchChunk(spilled)
;if(me.parent){
me.size-=sibling.size,me.height-=sibling.height
;var myIndex=indexOf(me.parent.children,me)
;me.parent.children.splice(myIndex+1,0,sibling)
}else{var copy=new BranchChunk(me.children)
;copy.parent=me,me.children=[copy,sibling],me=copy
}sibling.parent=me.parent
}while(me.children.length>10)
;me.parent.maybeSpill()}},iterN:function(at,n,op){
for(var i=0;i<this.children.length;++i){
var child=this.children[i],sz=child.chunkSize()
;if(at<sz){var used=Math.min(n,sz-at)
;if(child.iterN(at,used,op))return!0
;if(0==(n-=used))break;at=0}else at-=sz}}}
;var LineWidget=function(doc,node,options){
if(options)for(var opt in options)options.hasOwnProperty(opt)&&(this[opt]=options[opt])
;this.doc=doc,this.node=node}
;function adjustScrollWhenAboveVisible(cm,line,diff){
_heightAtLine(line)<(cm.curOp&&cm.curOp.scrollTop||cm.doc.scrollTop)&&addToScrollTop(cm,diff)
}LineWidget.prototype.clear=function(){
var cm=this.doc.cm,ws=this.line.widgets,line=this.line,no=lineNo(line)
;if(null!=no&&ws){
for(var i=0;i<ws.length;++i)ws[i]==this&&ws.splice(i--,1)
;ws.length||(line.widgets=null)
;var height=widgetHeight(this)
;updateLineHeight(line,Math.max(0,line.height-height)),
cm&&(runInOp(cm,function(){
adjustScrollWhenAboveVisible(cm,line,-height),regLineChange(cm,no,"widget")
}),signalLater(cm,"lineWidgetCleared",cm,this,no))
}},LineWidget.prototype.changed=function(){
var this$1=this,oldH=this.height,cm=this.doc.cm,line=this.line
;this.height=null;var diff=widgetHeight(this)-oldH
;diff&&(lineIsHidden(this.doc,line)||updateLineHeight(line,line.height+diff),
cm&&runInOp(cm,function(){
cm.curOp.forceUpdate=!0,adjustScrollWhenAboveVisible(cm,line,diff),
signalLater(cm,"lineWidgetChanged",cm,this$1,lineNo(line))
}))},eventMixin(LineWidget)
;var nextMarkerId=0,TextMarker=function(doc,type){
this.lines=[],this.type=type,this.doc=doc,
this.id=++nextMarkerId}
;function _markText(doc,from,to,options,type){
if(options&&options.shared)return function(doc,from,to,options,type){
(options=copyObj(options)).shared=!1
;var markers=[_markText(doc,from,to,options,type)],primary=markers[0],widget=options.widgetNode
;return linkedDocs(doc,function(doc){
widget&&(options.widgetNode=widget.cloneNode(!0)),
markers.push(_markText(doc,_clipPos(doc,from),_clipPos(doc,to),options,type))
;for(var i=0;i<doc.linked.length;++i)if(doc.linked[i].isParent)return
;primary=lst(markers)
}),new SharedTextMarker(markers,primary)
}(doc,from,to,options,type)
;if(doc.cm&&!doc.cm.curOp)return operation(doc.cm,_markText)(doc,from,to,options,type)
;var marker=new TextMarker(doc,type),diff=cmp(from,to)
;if(options&&copyObj(options,marker,!1),
diff>0||0==diff&&!1!==marker.clearWhenEmpty)return marker
;if(marker.replacedWith&&(marker.collapsed=!0,
marker.widgetNode=eltP("span",[marker.replacedWith],"CodeMirror-widget"),
options.handleMouseEvents||marker.widgetNode.setAttribute("cm-ignore-events","true"),
options.insertLeft&&(marker.widgetNode.insertLeft=!0)),
marker.collapsed){
if(conflictingCollapsedRange(doc,from.line,from,to,marker)||from.line!=to.line&&conflictingCollapsedRange(doc,to.line,from,to,marker))throw new Error("Inserting collapsed marker partially overlapping an existing one")
;sawCollapsedSpans=!0}
marker.addToHistory&&addChangeToHistory(doc,{
from:from,to:to,origin:"markText"},doc.sel,NaN)
;var updateMaxLine,curLine=from.line,cm=doc.cm
;if(doc.iter(curLine,to.line+1,function(line){
cm&&marker.collapsed&&!cm.options.lineWrapping&&visualLine(line)==cm.display.maxLine&&(updateMaxLine=!0),
marker.collapsed&&curLine!=from.line&&updateLineHeight(line,0),
function(line,span){
line.markedSpans=line.markedSpans?line.markedSpans.concat([span]):[span],
span.marker.attachLine(line)
}(line,new MarkedSpan(marker,curLine==from.line?from.ch:null,curLine==to.line?to.ch:null)),
++curLine
}),marker.collapsed&&doc.iter(from.line,to.line+1,function(line){
lineIsHidden(doc,line)&&updateLineHeight(line,0)
}),marker.clearOnEnter&&on(marker,"beforeCursorEnter",function(){
return marker.clear()
}),marker.readOnly&&(sawReadOnlySpans=!0,(doc.history.done.length||doc.history.undone.length)&&doc.clearHistory()),
marker.collapsed&&(marker.id=++nextMarkerId,
marker.atomic=!0),cm){
if(updateMaxLine&&(cm.curOp.updateMaxLine=!0),marker.collapsed)regChange(cm,from.line,to.line+1);else if(marker.className||marker.startStyle||marker.endStyle||marker.css||marker.attributes||marker.title)for(var i=from.line;i<=to.line;i++)regLineChange(cm,i,"text")
;marker.atomic&&reCheckSelection(cm.doc),
signalLater(cm,"markerAdded",cm,marker)}
return marker}
TextMarker.prototype.clear=function(){
if(!this.explicitlyCleared){
var cm=this.doc.cm,withOp=cm&&!cm.curOp
;if(withOp&&_startOperation(cm),hasHandler(this,"clear")){
var found=this.find()
;found&&signalLater(this,"clear",found.from,found.to)
}
for(var min=null,max=null,i=0;i<this.lines.length;++i){
var line=this.lines[i],span=getMarkedSpanFor(line.markedSpans,this)
;cm&&!this.collapsed?regLineChange(cm,lineNo(line),"text"):cm&&(null!=span.to&&(max=lineNo(line)),
null!=span.from&&(min=lineNo(line))),
line.markedSpans=removeMarkedSpan(line.markedSpans,span),
null==span.from&&this.collapsed&&!lineIsHidden(this.doc,line)&&cm&&updateLineHeight(line,textHeight(cm.display))
}
if(cm&&this.collapsed&&!cm.options.lineWrapping)for(var i$1=0;i$1<this.lines.length;++i$1){
var visual=visualLine(this.lines[i$1]),len=lineLength(visual)
;len>cm.display.maxLineLength&&(cm.display.maxLine=visual,
cm.display.maxLineLength=len,
cm.display.maxLineChanged=!0)}
null!=min&&cm&&this.collapsed&&regChange(cm,min,max+1),
this.lines.length=0,this.explicitlyCleared=!0,
this.atomic&&this.doc.cantEdit&&(this.doc.cantEdit=!1,
cm&&reCheckSelection(cm.doc)),
cm&&signalLater(cm,"markerCleared",cm,this,min,max),
withOp&&_endOperation(cm),this.parent&&this.parent.clear()
}
},TextMarker.prototype.find=function(side,lineObj){
var from,to
;null==side&&"bookmark"==this.type&&(side=1)
;for(var i=0;i<this.lines.length;++i){
var line=this.lines[i],span=getMarkedSpanFor(line.markedSpans,this)
;if(null!=span.from&&(from=Pos(lineObj?line:lineNo(line),span.from),
-1==side))return from
;if(null!=span.to&&(to=Pos(lineObj?line:lineNo(line),span.to),
1==side))return to}return from&&{from:from,to:to}
},TextMarker.prototype.changed=function(){
var this$1=this,pos=this.find(-1,!0),widget=this,cm=this.doc.cm
;pos&&cm&&runInOp(cm,function(){
var line=pos.line,lineN=lineNo(pos.line),view=findViewForLine(cm,lineN)
;if(view&&(clearLineMeasurementCacheFor(view),
cm.curOp.selectionChanged=cm.curOp.forceUpdate=!0),
cm.curOp.updateMaxLine=!0,!lineIsHidden(widget.doc,line)&&null!=widget.height){
var oldHeight=widget.height;widget.height=null
;var dHeight=widgetHeight(widget)-oldHeight
;dHeight&&updateLineHeight(line,line.height+dHeight)
}signalLater(cm,"markerChanged",cm,this$1)})
},TextMarker.prototype.attachLine=function(line){
if(!this.lines.length&&this.doc.cm){
var op=this.doc.cm.curOp
;op.maybeHiddenMarkers&&-1!=indexOf(op.maybeHiddenMarkers,this)||(op.maybeUnhiddenMarkers||(op.maybeUnhiddenMarkers=[])).push(this)
}this.lines.push(line)
},TextMarker.prototype.detachLine=function(line){
if(this.lines.splice(indexOf(this.lines,line),1),
!this.lines.length&&this.doc.cm){
var op=this.doc.cm.curOp
;(op.maybeHiddenMarkers||(op.maybeHiddenMarkers=[])).push(this)
}},eventMixin(TextMarker)
;var SharedTextMarker=function(markers,primary){
this.markers=markers,this.primary=primary
;for(var i=0;i<markers.length;++i)markers[i].parent=this
};function findSharedMarkers(doc){
return doc.findMarks(Pos(doc.first,0),doc.clipPos(Pos(doc.lastLine())),function(m){
return m.parent})}
function detachSharedMarkers(markers){
for(var loop=function(i){
var marker=markers[i],linked=[marker.primary.doc]
;linkedDocs(marker.primary.doc,function(d){
return linked.push(d)})
;for(var j=0;j<marker.markers.length;j++){
var subMarker=marker.markers[j]
;-1==indexOf(linked,subMarker.doc)&&(subMarker.parent=null,
marker.markers.splice(j--,1))}
},i=0;i<markers.length;i++)loop(i)}
SharedTextMarker.prototype.clear=function(){
if(!this.explicitlyCleared){
this.explicitlyCleared=!0
;for(var i=0;i<this.markers.length;++i)this.markers[i].clear()
;signalLater(this,"clear")}
},SharedTextMarker.prototype.find=function(side,lineObj){
return this.primary.find(side,lineObj)
},eventMixin(SharedTextMarker)
;var nextDocId=0,Doc=function Doc(text,mode,firstLine,lineSep,direction){
if(!(this instanceof Doc))return new Doc(text,mode,firstLine,lineSep,direction)
;null==firstLine&&(firstLine=0),
BranchChunk.call(this,[new LeafChunk([new Line("",null)])]),
this.first=firstLine,
this.scrollTop=this.scrollLeft=0,this.cantEdit=!1,this.cleanGeneration=1,
this.modeFrontier=this.highlightFrontier=firstLine
;var start=Pos(firstLine,0)
;this.sel=simpleSelection(start),this.history=new History(null),
this.id=++nextDocId,
this.modeOption=mode,this.lineSep=lineSep,this.direction="rtl"==direction?"rtl":"ltr",
this.extend=!1,
"string"==typeof text&&(text=this.splitLines(text)),updateDoc(this,{
from:start,to:start,text:text
}),setSelection(this,simpleSelection(start),sel_dontScroll)
};Doc.prototype=createObj(BranchChunk.prototype,{
constructor:Doc,iter:function(from,to,op){
op?this.iterN(from-this.first,to-from,op):this.iterN(this.first,this.first+this.size,from)
},insert:function(at,lines){
for(var height=0,i=0;i<lines.length;++i)height+=lines[i].height
;this.insertInner(at-this.first,lines,height)},
remove:function(at,n){
this.removeInner(at-this.first,n)},
getValue:function(lineSep){
var lines=getLines(this,this.first,this.first+this.size)
;return!1===lineSep?lines:lines.join(lineSep||this.lineSeparator())
},setValue:docMethodOp(function(code){
var top=Pos(this.first,0),last=this.first+this.size-1
;makeChange(this,{from:top,
to:Pos(last,getLine(this,last).text.length),
text:this.splitLines(code),origin:"setValue",
full:!0
},!0),this.cm&&scrollToCoords(this.cm,0,0),setSelection(this,simpleSelection(top),sel_dontScroll)
}),replaceRange:function(code,from,to,origin){
from=_clipPos(this,from),to=to?_clipPos(this,to):from,
_replaceRange(this,code,from,to,origin)},
getRange:function(from,to,lineSep){
var lines=getBetween(this,_clipPos(this,from),_clipPos(this,to))
;return!1===lineSep?lines:lines.join(lineSep||this.lineSeparator())
},getLine:function(line){
var l=this.getLineHandle(line);return l&&l.text},
getLineHandle:function(line){
if(isLine(this,line))return getLine(this,line)},
getLineNumber:function(line){return lineNo(line)},
getLineHandleVisualStart:function(line){
return"number"==typeof line&&(line=getLine(this,line)),
visualLine(line)},lineCount:function(){
return this.size},firstLine:function(){
return this.first},lastLine:function(){
return this.first+this.size-1},
clipPos:function(pos){return _clipPos(this,pos)},
getCursor:function(start){
var range$$1=this.sel.primary()
;return null==start||"head"==start?range$$1.head:"anchor"==start?range$$1.anchor:"end"==start||"to"==start||!1===start?range$$1.to():range$$1.from()
},listSelections:function(){return this.sel.ranges
},somethingSelected:function(){
return this.sel.somethingSelected()},
setCursor:docMethodOp(function(line,ch,options){
setSimpleSelection(this,_clipPos(this,"number"==typeof line?Pos(line,ch||0):line),null,options)
}),
setSelection:docMethodOp(function(anchor,head,options){
setSimpleSelection(this,_clipPos(this,anchor),_clipPos(this,head||anchor),options)
}),
extendSelection:docMethodOp(function(head,other,options){
extendSelection(this,_clipPos(this,head),other&&_clipPos(this,other),options)
}),
extendSelections:docMethodOp(function(heads,options){
extendSelections(this,clipPosArray(this,heads),options)
}),
extendSelectionsBy:docMethodOp(function(f,options){
var heads=map(this.sel.ranges,f)
;extendSelections(this,clipPosArray(this,heads),options)
}),
setSelections:docMethodOp(function(ranges,primary,options){
if(ranges.length){
for(var out=[],i=0;i<ranges.length;i++)out[i]=new Range(_clipPos(this,ranges[i].anchor),_clipPos(this,ranges[i].head))
;null==primary&&(primary=Math.min(ranges.length-1,this.sel.primIndex)),
setSelection(this,normalizeSelection(this.cm,out,primary),options)
}}),
addSelection:docMethodOp(function(anchor,head,options){
var ranges=this.sel.ranges.slice(0)
;ranges.push(new Range(_clipPos(this,anchor),_clipPos(this,head||anchor))),
setSelection(this,normalizeSelection(this.cm,ranges,ranges.length-1),options)
}),getSelection:function(lineSep){
for(var lines,ranges=this.sel.ranges,i=0;i<ranges.length;i++){
var sel=getBetween(this,ranges[i].from(),ranges[i].to())
;lines=lines?lines.concat(sel):sel}
return!1===lineSep?lines:lines.join(lineSep||this.lineSeparator())
},getSelections:function(lineSep){
for(var parts=[],ranges=this.sel.ranges,i=0;i<ranges.length;i++){
var sel=getBetween(this,ranges[i].from(),ranges[i].to())
;!1!==lineSep&&(sel=sel.join(lineSep||this.lineSeparator())),
parts[i]=sel}return parts},
replaceSelection:function(code,collapse,origin){
for(var dup=[],i=0;i<this.sel.ranges.length;i++)dup[i]=code
;this.replaceSelections(dup,collapse,origin||"+input")
},
replaceSelections:docMethodOp(function(code,collapse,origin){
for(var changes=[],sel=this.sel,i=0;i<sel.ranges.length;i++){
var range$$1=sel.ranges[i];changes[i]={
from:range$$1.from(),to:range$$1.to(),
text:this.splitLines(code[i]),origin:origin}}
for(var newSel=collapse&&"end"!=collapse&&function(doc,changes,hint){
for(var out=[],oldPrev=Pos(doc.first,0),newPrev=oldPrev,i=0;i<changes.length;i++){
var change=changes[i],from=offsetPos(change.from,oldPrev,newPrev),to=offsetPos(changeEnd(change),oldPrev,newPrev)
;if(oldPrev=change.to,newPrev=to,"around"==hint){
var range=doc.sel.ranges[i],inv=cmp(range.head,range.anchor)<0
;out[i]=new Range(inv?to:from,inv?from:to)
}else out[i]=new Range(from,from)}
return new Selection(out,doc.sel.primIndex)
}(this,changes,collapse),i$1=changes.length-1;i$1>=0;i$1--)makeChange(this,changes[i$1])
;newSel?setSelectionReplaceHistory(this,newSel):this.cm&&ensureCursorVisible(this.cm)
}),undo:docMethodOp(function(){
makeChangeFromHistory(this,"undo")}),
redo:docMethodOp(function(){
makeChangeFromHistory(this,"redo")}),
undoSelection:docMethodOp(function(){
makeChangeFromHistory(this,"undo",!0)}),
redoSelection:docMethodOp(function(){
makeChangeFromHistory(this,"redo",!0)}),
setExtending:function(val){this.extend=val},
getExtending:function(){return this.extend},
historySize:function(){
for(var hist=this.history,done=0,undone=0,i=0;i<hist.done.length;i++)hist.done[i].ranges||++done
;for(var i$1=0;i$1<hist.undone.length;i$1++)hist.undone[i$1].ranges||++undone
;return{undo:done,redo:undone}},
clearHistory:function(){
this.history=new History(this.history.maxGeneration)
},markClean:function(){
this.cleanGeneration=this.changeGeneration(!0)},
changeGeneration:function(forceSplit){
return forceSplit&&(this.history.lastOp=this.history.lastSelOp=this.history.lastOrigin=null),
this.history.generation},isClean:function(gen){
return this.history.generation==(gen||this.cleanGeneration)
},getHistory:function(){return{
done:copyHistoryArray(this.history.done),
undone:copyHistoryArray(this.history.undone)}},
setHistory:function(histData){
var hist=this.history=new History(this.history.maxGeneration)
;hist.done=copyHistoryArray(histData.done.slice(0),null,!0),
hist.undone=copyHistoryArray(histData.undone.slice(0),null,!0)
},
setGutterMarker:docMethodOp(function(line,gutterID,value){
return changeLine(this,line,"gutter",function(line){
var markers=line.gutterMarkers||(line.gutterMarkers={})
;return markers[gutterID]=value,
!value&&isEmpty(markers)&&(line.gutterMarkers=null),
!0})}),clearGutter:docMethodOp(function(gutterID){
var this$1=this;this.iter(function(line){
line.gutterMarkers&&line.gutterMarkers[gutterID]&&changeLine(this$1,line,"gutter",function(){
return line.gutterMarkers[gutterID]=null,
isEmpty(line.gutterMarkers)&&(line.gutterMarkers=null),
!0})})}),lineInfo:function(line){var n
;if("number"==typeof line){
if(!isLine(this,line))return null
;if(n=line,!(line=getLine(this,line)))return null
}else if(null==(n=lineNo(line)))return null
;return{line:n,handle:line,text:line.text,
gutterMarkers:line.gutterMarkers,
textClass:line.textClass,bgClass:line.bgClass,
wrapClass:line.wrapClass,widgets:line.widgets}},
addLineClass:docMethodOp(function(handle,where,cls){
return changeLine(this,handle,"gutter"==where?"gutter":"class",function(line){
var prop="text"==where?"textClass":"background"==where?"bgClass":"gutter"==where?"gutterClass":"wrapClass"
;if(line[prop]){
if(classTest(cls).test(line[prop]))return!1
;line[prop]+=" "+cls}else line[prop]=cls;return!0
})}),
removeLineClass:docMethodOp(function(handle,where,cls){
return changeLine(this,handle,"gutter"==where?"gutter":"class",function(line){
var prop="text"==where?"textClass":"background"==where?"bgClass":"gutter"==where?"gutterClass":"wrapClass",cur=line[prop]
;if(!cur)return!1
;if(null==cls)line[prop]=null;else{
var found=cur.match(classTest(cls))
;if(!found)return!1
;var end=found.index+found[0].length
;line[prop]=cur.slice(0,found.index)+(found.index&&end!=cur.length?" ":"")+cur.slice(end)||null
}return!0})}),
addLineWidget:docMethodOp(function(handle,node,options){
return function(doc,handle,node,options){
var widget=new LineWidget(doc,node,options),cm=doc.cm
;return cm&&widget.noHScroll&&(cm.display.alignWidgets=!0),
changeLine(doc,handle,"widget",function(line){
var widgets=line.widgets||(line.widgets=[])
;if(null==widget.insertAt?widgets.push(widget):widgets.splice(Math.min(widgets.length-1,Math.max(0,widget.insertAt)),0,widget),
widget.line=line,cm&&!lineIsHidden(doc,line)){
var aboveVisible=_heightAtLine(line)<doc.scrollTop
;updateLineHeight(line,line.height+widgetHeight(widget)),
aboveVisible&&addToScrollTop(cm,widget.height),
cm.curOp.forceUpdate=!0}return!0
}),cm&&signalLater(cm,"lineWidgetAdded",cm,widget,"number"==typeof handle?handle:lineNo(handle)),
widget}(this,handle,node,options)}),
removeLineWidget:function(widget){widget.clear()},
markText:function(from,to,options){
return _markText(this,_clipPos(this,from),_clipPos(this,to),options,options&&options.type||"range")
},setBookmark:function(pos,options){var realOpts={
replacedWith:options&&(null==options.nodeType?options.widget:options),
insertLeft:options&&options.insertLeft,
clearWhenEmpty:!1,shared:options&&options.shared,
handleMouseEvents:options&&options.handleMouseEvents
}
;return _markText(this,pos=_clipPos(this,pos),pos,realOpts,"bookmark")
},findMarksAt:function(pos){pos=_clipPos(this,pos)
;var markers=[],spans=getLine(this,pos.line).markedSpans
;if(spans)for(var i=0;i<spans.length;++i){
var span=spans[i]
;(null==span.from||span.from<=pos.ch)&&(null==span.to||span.to>=pos.ch)&&markers.push(span.marker.parent||span.marker)
}return markers},
findMarks:function(from,to,filter){
from=_clipPos(this,from),to=_clipPos(this,to)
;var found=[],lineNo$$1=from.line
;return this.iter(from.line,to.line+1,function(line){
var spans=line.markedSpans
;if(spans)for(var i=0;i<spans.length;i++){
var span=spans[i]
;null!=span.to&&lineNo$$1==from.line&&from.ch>=span.to||null==span.from&&lineNo$$1!=from.line||null!=span.from&&lineNo$$1==to.line&&span.from>=to.ch||filter&&!filter(span.marker)||found.push(span.marker.parent||span.marker)
}++lineNo$$1}),found},getAllMarks:function(){
var markers=[];return this.iter(function(line){
var sps=line.markedSpans
;if(sps)for(var i=0;i<sps.length;++i)null!=sps[i].from&&markers.push(sps[i].marker)
}),markers},posFromIndex:function(off){
var ch,lineNo$$1=this.first,sepSize=this.lineSeparator().length
;return this.iter(function(line){
var sz=line.text.length+sepSize
;if(sz>off)return ch=off,!0;off-=sz,++lineNo$$1
}),_clipPos(this,Pos(lineNo$$1,ch))},
indexFromPos:function(coords){
var index=(coords=_clipPos(this,coords)).ch
;if(coords.line<this.first||coords.ch<0)return 0
;var sepSize=this.lineSeparator().length
;return this.iter(this.first,coords.line,function(line){
index+=line.text.length+sepSize}),index},
copy:function(copyHistory){
var doc=new Doc(getLines(this,this.first,this.first+this.size),this.modeOption,this.first,this.lineSep,this.direction)
;return doc.scrollTop=this.scrollTop,
doc.scrollLeft=this.scrollLeft,doc.sel=this.sel,
doc.extend=!1,copyHistory&&(doc.history.undoDepth=this.history.undoDepth,
doc.setHistory(this.getHistory())),doc},
linkedDoc:function(options){options||(options={})
;var from=this.first,to=this.first+this.size
;null!=options.from&&options.from>from&&(from=options.from),
null!=options.to&&options.to<to&&(to=options.to)
;var copy=new Doc(getLines(this,from,to),options.mode||this.modeOption,from,this.lineSep,this.direction)
;return options.sharedHist&&(copy.history=this.history),
(this.linked||(this.linked=[])).push({doc:copy,
sharedHist:options.sharedHist}),copy.linked=[{
doc:this,isParent:!0,sharedHist:options.sharedHist
}],function(doc,markers){
for(var i=0;i<markers.length;i++){
var marker=markers[i],pos=marker.find(),mFrom=doc.clipPos(pos.from),mTo=doc.clipPos(pos.to)
;if(cmp(mFrom,mTo)){
var subMark=_markText(doc,mFrom,mTo,marker.primary,marker.primary.type)
;marker.markers.push(subMark),
subMark.parent=marker}}
}(copy,findSharedMarkers(this)),copy},
unlinkDoc:function(other){
if(other instanceof CodeMirror&&(other=other.doc),this.linked)for(var i=0;i<this.linked.length;++i){
var link=this.linked[i];if(link.doc==other){
this.linked.splice(i,1),other.unlinkDoc(this),
detachSharedMarkers(findSharedMarkers(this));break
}}if(other.history==this.history){
var splitIds=[other.id]
;linkedDocs(other,function(doc){
return splitIds.push(doc.id)
},!0),other.history=new History(null),other.history.done=copyHistoryArray(this.history.done,splitIds),
other.history.undone=copyHistoryArray(this.history.undone,splitIds)
}},iterLinkedDocs:function(f){linkedDocs(this,f)},
getMode:function(){return this.mode},
getEditor:function(){return this.cm},
splitLines:function(str){
return this.lineSep?str.split(this.lineSep):splitLinesAuto(str)
},lineSeparator:function(){
return this.lineSep||"\n"},
setDirection:docMethodOp(function(dir){var cm
;"rtl"!=dir&&(dir="ltr"),dir!=this.direction&&(this.direction=dir,
this.iter(function(line){return line.order=null
}),this.cm&&runInOp(cm=this.cm,function(){
setDirectionClass(cm),regChange(cm)}))})
}),Doc.prototype.eachLine=Doc.prototype.iter
;var lastDrop=0;function onDrop(e){var cm=this
;if(clearDragCursor(cm),!signalDOMEvent(cm,e)&&!eventInWidget(cm.display,e)){
e_preventDefault(e),ie&&(lastDrop=+new Date)
;var pos=posFromMouse(cm,e,!0),files=e.dataTransfer.files
;if(pos&&!cm.isReadOnly())if(files&&files.length&&window.FileReader&&window.File)for(var n=files.length,text=Array(n),read=0,loadFile=function(file,i){
if(!cm.options.allowDropFileTypes||-1!=indexOf(cm.options.allowDropFileTypes,file.type)){
var reader=new FileReader
;reader.onload=operation(cm,function(){
var content=reader.result
;if(/[\x00-\x08\x0e-\x1f]{2}/.test(content)&&(content=""),
text[i]=content,++read==n){var change={
from:pos=_clipPos(cm.doc,pos),to:pos,
text:cm.doc.splitLines(text.join(cm.doc.lineSeparator())),
origin:"paste"}
;makeChange(cm.doc,change),setSelectionReplaceHistory(cm.doc,simpleSelection(pos,changeEnd(change)))
}}),reader.readAsText(file)}
},i=0;i<n;++i)loadFile(files[i],i);else{
if(cm.state.draggingText&&cm.doc.sel.contains(pos)>-1)return cm.state.draggingText(e),
void setTimeout(function(){
return cm.display.input.focus()},20);try{
var text$1=e.dataTransfer.getData("Text")
;if(text$1){var selected
;if(cm.state.draggingText&&!cm.state.draggingText.copy&&(selected=cm.listSelections()),
setSelectionNoUndo(cm.doc,simpleSelection(pos,pos)),
selected)for(var i$1=0;i$1<selected.length;++i$1)_replaceRange(cm.doc,"",selected[i$1].anchor,selected[i$1].head,"drag")
;cm.replaceSelection(text$1,"around","paste"),
cm.display.input.focus()}}catch(e){}}}}
function clearDragCursor(cm){
cm.display.dragCursor&&(cm.display.lineSpace.removeChild(cm.display.dragCursor),
cm.display.dragCursor=null)}
function forEachCodeMirror(f){
if(document.getElementsByClassName){
for(var byClass=document.getElementsByClassName("CodeMirror"),editors=[],i=0;i<byClass.length;i++){
var cm=byClass[i].CodeMirror;cm&&editors.push(cm)}
editors.length&&editors[0].operation(function(){
for(var i=0;i<editors.length;i++)f(editors[i])})}}
var globalsRegistered=!1
;function ensureGlobalHandlers(){var resizeTimer
;globalsRegistered||(on(window,"resize",function(){
null==resizeTimer&&(resizeTimer=setTimeout(function(){
resizeTimer=null,forEachCodeMirror(onResize)
},100))}),on(window,"blur",function(){
return forEachCodeMirror(onBlur)
}),globalsRegistered=!0)}function onResize(cm){
var d=cm.display
;d.cachedCharWidth=d.cachedTextHeight=d.cachedPaddingH=null,d.scrollbarsClipped=!1,
cm.setSize()}for(var keyNames={3:"Pause",
8:"Backspace",9:"Tab",13:"Enter",16:"Shift",
17:"Ctrl",18:"Alt",19:"Pause",20:"CapsLock",
27:"Esc",32:"Space",33:"PageUp",34:"PageDown",
35:"End",36:"Home",37:"Left",38:"Up",39:"Right",
40:"Down",44:"PrintScrn",45:"Insert",46:"Delete",
59:";",61:"=",91:"Mod",92:"Mod",93:"Mod",106:"*",
107:"=",109:"-",110:".",111:"/",127:"Delete",
145:"ScrollLock",173:"-",186:";",187:"=",188:",",
189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",
221:"]",222:"'",63232:"Up",63233:"Down",
63234:"Left",63235:"Right",63272:"Delete",
63273:"Home",63275:"End",63276:"PageUp",
63277:"PageDown",63302:"Insert"
},i=0;i<10;i++)keyNames[i+48]=keyNames[i+96]=String(i)
;for(var i$1=65;i$1<=90;i$1++)keyNames[i$1]=String.fromCharCode(i$1)
;for(var i$2=1;i$2<=12;i$2++)keyNames[i$2+111]=keyNames[i$2+63235]="F"+i$2
;var keyMap={};function normalizeKeyName(name){
var alt,ctrl,shift,cmd,parts=name.split(/-(?!$)/)
;name=parts[parts.length-1]
;for(var i=0;i<parts.length-1;i++){
var mod=parts[i]
;if(/^(cmd|meta|m)$/i.test(mod))cmd=!0;else if(/^a(lt)?$/i.test(mod))alt=!0;else if(/^(c|ctrl|control)$/i.test(mod))ctrl=!0;else{
if(!/^s(hift)?$/i.test(mod))throw new Error("Unrecognized modifier name: "+mod)
;shift=!0}}
return alt&&(name="Alt-"+name),ctrl&&(name="Ctrl-"+name),cmd&&(name="Cmd-"+name),
shift&&(name="Shift-"+name),name}
function normalizeKeyMap(keymap){var copy={}
;for(var keyname in keymap)if(keymap.hasOwnProperty(keyname)){
var value=keymap[keyname]
;if(/^(name|fallthrough|(de|at)tach)$/.test(keyname))continue
;if("..."==value){delete keymap[keyname];continue}
for(var keys=map(keyname.split(" "),normalizeKeyName),i=0;i<keys.length;i++){
var val=void 0,name=void 0
;i==keys.length-1?(name=keys.join(" "),val=value):(name=keys.slice(0,i+1).join(" "),
val="...");var prev=copy[name];if(prev){
if(prev!=val)throw new Error("Inconsistent bindings for "+name)
}else copy[name]=val}delete keymap[keyname]}
for(var prop in copy)keymap[prop]=copy[prop]
;return keymap}
function lookupKey(key,map$$1,handle,context){
var found=(map$$1=getKeyMap(map$$1)).call?map$$1.call(key,context):map$$1[key]
;if(!1===found)return"nothing"
;if("..."===found)return"multi"
;if(null!=found&&handle(found))return"handled"
;if(map$$1.fallthrough){
if("[object Array]"!=Object.prototype.toString.call(map$$1.fallthrough))return lookupKey(key,map$$1.fallthrough,handle,context)
;for(var i=0;i<map$$1.fallthrough.length;i++){
var result=lookupKey(key,map$$1.fallthrough[i],handle,context)
;if(result)return result}}}
function isModifierKey(value){
var name="string"==typeof value?value:keyNames[value.keyCode]
;return"Ctrl"==name||"Alt"==name||"Shift"==name||"Mod"==name
}function addModifierNames(name,event,noShift){
var base=name
;return event.altKey&&"Alt"!=base&&(name="Alt-"+name),(flipCtrlCmd?event.metaKey:event.ctrlKey)&&"Ctrl"!=base&&(name="Ctrl-"+name),
(flipCtrlCmd?event.ctrlKey:event.metaKey)&&"Cmd"!=base&&(name="Cmd-"+name),
!noShift&&event.shiftKey&&"Shift"!=base&&(name="Shift-"+name),
name}function keyName(event,noShift){
if(presto&&34==event.keyCode&&event.char)return!1
;var name=keyNames[event.keyCode]
;return null!=name&&!event.altGraphKey&&(3==event.keyCode&&event.code&&(name=event.code),
addModifierNames(name,event,noShift))}
function getKeyMap(val){
return"string"==typeof val?keyMap[val]:val}
function deleteNearSelection(cm,compute){
for(var ranges=cm.doc.sel.ranges,kill=[],i=0;i<ranges.length;i++){
for(var toKill=compute(ranges[i]);kill.length&&cmp(toKill.from,lst(kill).to)<=0;){
var replaced=kill.pop()
;if(cmp(replaced.from,toKill.from)<0){
toKill.from=replaced.from;break}}kill.push(toKill)
}runInOp(cm,function(){
for(var i=kill.length-1;i>=0;i--)_replaceRange(cm.doc,"",kill[i].from,kill[i].to,"+delete")
;ensureCursorVisible(cm)})}
function moveCharLogically(line,ch,dir){
var target=skipExtendingChars(line.text,ch+dir,dir)
;return target<0||target>line.text.length?null:target
}function moveLogically(line,start,dir){
var ch=moveCharLogically(line,start.ch,dir)
;return null==ch?null:new Pos(start.line,ch,dir<0?"after":"before")
}
function endOfLine(visually,cm,lineObj,lineNo,dir){
if(visually){
var order=getOrder(lineObj,cm.doc.direction)
;if(order){
var ch,part=dir<0?lst(order):order[0],moveInStorageOrder=dir<0==(1==part.level),sticky=moveInStorageOrder?"after":"before"
;if(part.level>0||"rtl"==cm.doc.direction){
var prep=prepareMeasureForLine(cm,lineObj)
;ch=dir<0?lineObj.text.length-1:0
;var targetTop=measureCharPrepared(cm,prep,ch).top
;ch=findFirst(function(ch){
return measureCharPrepared(cm,prep,ch).top==targetTop
},dir<0==(1==part.level)?part.from:part.to-1,ch),
"before"==sticky&&(ch=moveCharLogically(lineObj,ch,1))
}else ch=dir<0?part.to:part.from
;return new Pos(lineNo,ch,sticky)}}
return new Pos(lineNo,dir<0?lineObj.text.length:0,dir<0?"before":"after")
}keyMap.basic={Left:"goCharLeft",
Right:"goCharRight",Up:"goLineUp",
Down:"goLineDown",End:"goLineEnd",
Home:"goLineStartSmart",PageUp:"goPageUp",
PageDown:"goPageDown",Delete:"delCharAfter",
Backspace:"delCharBefore",
"Shift-Backspace":"delCharBefore",
Tab:"defaultTab","Shift-Tab":"indentAuto",
Enter:"newlineAndIndent",Insert:"toggleOverwrite",
Esc:"singleSelection"},keyMap.pcDefault={
"Ctrl-A":"selectAll","Ctrl-D":"deleteLine",
"Ctrl-Z":"undo","Shift-Ctrl-Z":"redo",
"Ctrl-Y":"redo","Ctrl-Home":"goDocStart",
"Ctrl-End":"goDocEnd","Ctrl-Up":"goLineUp",
"Ctrl-Down":"goLineDown",
"Ctrl-Left":"goGroupLeft",
"Ctrl-Right":"goGroupRight",
"Alt-Left":"goLineStart","Alt-Right":"goLineEnd",
"Ctrl-Backspace":"delGroupBefore",
"Ctrl-Delete":"delGroupAfter","Ctrl-S":"save",
"Ctrl-F":"find","Ctrl-G":"findNext",
"Shift-Ctrl-G":"findPrev",
"Shift-Ctrl-F":"replace",
"Shift-Ctrl-R":"replaceAll","Ctrl-[":"indentLess",
"Ctrl-]":"indentMore","Ctrl-U":"undoSelection",
"Shift-Ctrl-U":"redoSelection",
"Alt-U":"redoSelection",fallthrough:"basic"
},keyMap.emacsy={"Ctrl-F":"goCharRight",
"Ctrl-B":"goCharLeft","Ctrl-P":"goLineUp",
"Ctrl-N":"goLineDown","Alt-F":"goWordRight",
"Alt-B":"goWordLeft","Ctrl-A":"goLineStart",
"Ctrl-E":"goLineEnd","Ctrl-V":"goPageDown",
"Shift-Ctrl-V":"goPageUp","Ctrl-D":"delCharAfter",
"Ctrl-H":"delCharBefore","Alt-D":"delWordAfter",
"Alt-Backspace":"delWordBefore",
"Ctrl-K":"killLine","Ctrl-T":"transposeChars",
"Ctrl-O":"openLine"},keyMap.macDefault={
"Cmd-A":"selectAll","Cmd-D":"deleteLine",
"Cmd-Z":"undo","Shift-Cmd-Z":"redo",
"Cmd-Y":"redo","Cmd-Home":"goDocStart",
"Cmd-Up":"goDocStart","Cmd-End":"goDocEnd",
"Cmd-Down":"goDocEnd","Alt-Left":"goGroupLeft",
"Alt-Right":"goGroupRight",
"Cmd-Left":"goLineLeft","Cmd-Right":"goLineRight",
"Alt-Backspace":"delGroupBefore",
"Ctrl-Alt-Backspace":"delGroupAfter",
"Alt-Delete":"delGroupAfter","Cmd-S":"save",
"Cmd-F":"find","Cmd-G":"findNext",
"Shift-Cmd-G":"findPrev","Cmd-Alt-F":"replace",
"Shift-Cmd-Alt-F":"replaceAll",
"Cmd-[":"indentLess","Cmd-]":"indentMore",
"Cmd-Backspace":"delWrappedLineLeft",
"Cmd-Delete":"delWrappedLineRight",
"Cmd-U":"undoSelection",
"Shift-Cmd-U":"redoSelection",
"Ctrl-Up":"goDocStart","Ctrl-Down":"goDocEnd",
fallthrough:["basic","emacsy"]
},keyMap.default=mac?keyMap.macDefault:keyMap.pcDefault
;var commands={selectAll:selectAll,
singleSelection:function(cm){
return cm.setSelection(cm.getCursor("anchor"),cm.getCursor("head"),sel_dontScroll)
},killLine:function(cm){
return deleteNearSelection(cm,function(range){
if(range.empty()){
var len=getLine(cm.doc,range.head.line).text.length
;return range.head.ch==len&&range.head.line<cm.lastLine()?{
from:range.head,to:Pos(range.head.line+1,0)}:{
from:range.head,to:Pos(range.head.line,len)}}
return{from:range.from(),to:range.to()}})},
deleteLine:function(cm){
return deleteNearSelection(cm,function(range){
return{from:Pos(range.from().line,0),
to:_clipPos(cm.doc,Pos(range.to().line+1,0))}})},
delLineLeft:function(cm){
return deleteNearSelection(cm,function(range){
return{from:Pos(range.from().line,0),
to:range.from()}})},
delWrappedLineLeft:function(cm){
return deleteNearSelection(cm,function(range){
var top=cm.charCoords(range.head,"div").top+5,leftPos=cm.coordsChar({
left:0,top:top},"div");return{from:leftPos,
to:range.from()}})},
delWrappedLineRight:function(cm){
return deleteNearSelection(cm,function(range){
var top=cm.charCoords(range.head,"div").top+5,rightPos=cm.coordsChar({
left:cm.display.lineDiv.offsetWidth+100,top:top
},"div");return{from:range.from(),to:rightPos}})},
undo:function(cm){return cm.undo()},
redo:function(cm){return cm.redo()},
undoSelection:function(cm){
return cm.undoSelection()},
redoSelection:function(cm){
return cm.redoSelection()},
goDocStart:function(cm){
return cm.extendSelection(Pos(cm.firstLine(),0))},
goDocEnd:function(cm){
return cm.extendSelection(Pos(cm.lastLine()))},
goLineStart:function(cm){
return cm.extendSelectionsBy(function(range){
return lineStart(cm,range.head.line)},{
origin:"+move",bias:1})},
goLineStartSmart:function(cm){
return cm.extendSelectionsBy(function(range){
return lineStartSmart(cm,range.head)},{
origin:"+move",bias:1})},goLineEnd:function(cm){
return cm.extendSelectionsBy(function(range){
return function(cm,lineN){
var line=getLine(cm.doc,lineN),visual=function(line){
for(var merged;merged=collapsedSpanAtEnd(line);)line=merged.find(1,!0).line
;return line}(line)
;return visual!=line&&(lineN=lineNo(visual)),endOfLine(!0,cm,line,lineN,-1)
}(cm,range.head.line)},{origin:"+move",bias:-1})},
goLineRight:function(cm){
return cm.extendSelectionsBy(function(range){
var top=cm.cursorCoords(range.head,"div").top+5
;return cm.coordsChar({
left:cm.display.lineDiv.offsetWidth+100,top:top
},"div")},sel_move)},goLineLeft:function(cm){
return cm.extendSelectionsBy(function(range){
var top=cm.cursorCoords(range.head,"div").top+5
;return cm.coordsChar({left:0,top:top},"div")
},sel_move)},goLineLeftSmart:function(cm){
return cm.extendSelectionsBy(function(range){
var top=cm.cursorCoords(range.head,"div").top+5,pos=cm.coordsChar({
left:0,top:top},"div")
;return pos.ch<cm.getLine(pos.line).search(/\S/)?lineStartSmart(cm,range.head):pos
},sel_move)},goLineUp:function(cm){
return cm.moveV(-1,"line")},
goLineDown:function(cm){return cm.moveV(1,"line")
},goPageUp:function(cm){return cm.moveV(-1,"page")
},goPageDown:function(cm){
return cm.moveV(1,"page")},
goCharLeft:function(cm){return cm.moveH(-1,"char")
},goCharRight:function(cm){
return cm.moveH(1,"char")},
goColumnLeft:function(cm){
return cm.moveH(-1,"column")},
goColumnRight:function(cm){
return cm.moveH(1,"column")},
goWordLeft:function(cm){return cm.moveH(-1,"word")
},goGroupRight:function(cm){
return cm.moveH(1,"group")},
goGroupLeft:function(cm){
return cm.moveH(-1,"group")},
goWordRight:function(cm){return cm.moveH(1,"word")
},delCharBefore:function(cm){
return cm.deleteH(-1,"char")},
delCharAfter:function(cm){
return cm.deleteH(1,"char")},
delWordBefore:function(cm){
return cm.deleteH(-1,"word")},
delWordAfter:function(cm){
return cm.deleteH(1,"word")},
delGroupBefore:function(cm){
return cm.deleteH(-1,"group")},
delGroupAfter:function(cm){
return cm.deleteH(1,"group")},
indentAuto:function(cm){
return cm.indentSelection("smart")},
indentMore:function(cm){
return cm.indentSelection("add")},
indentLess:function(cm){
return cm.indentSelection("subtract")},
insertTab:function(cm){
return cm.replaceSelection("\t")},
insertSoftTab:function(cm){
for(var spaces=[],ranges=cm.listSelections(),tabSize=cm.options.tabSize,i=0;i<ranges.length;i++){
var pos=ranges[i].from(),col=countColumn(cm.getLine(pos.line),pos.ch,tabSize)
;spaces.push(spaceStr(tabSize-col%tabSize))}
cm.replaceSelections(spaces)},
defaultTab:function(cm){
cm.somethingSelected()?cm.indentSelection("add"):cm.execCommand("insertTab")
},transposeChars:function(cm){
return runInOp(cm,function(){
for(var ranges=cm.listSelections(),newSel=[],i=0;i<ranges.length;i++)if(ranges[i].empty()){
var cur=ranges[i].head,line=getLine(cm.doc,cur.line).text
;if(line)if(cur.ch==line.length&&(cur=new Pos(cur.line,cur.ch-1)),
cur.ch>0)cur=new Pos(cur.line,cur.ch+1),
cm.replaceRange(line.charAt(cur.ch-1)+line.charAt(cur.ch-2),Pos(cur.line,cur.ch-2),cur,"+transpose");else if(cur.line>cm.doc.first){
var prev=getLine(cm.doc,cur.line-1).text
;prev&&(cur=new Pos(cur.line,1),cm.replaceRange(line.charAt(0)+cm.doc.lineSeparator()+prev.charAt(prev.length-1),Pos(cur.line-1,prev.length-1),cur,"+transpose"))
}newSel.push(new Range(cur,cur))}
cm.setSelections(newSel)})},
newlineAndIndent:function(cm){
return runInOp(cm,function(){
for(var sels=cm.listSelections(),i=sels.length-1;i>=0;i--)cm.replaceRange(cm.doc.lineSeparator(),sels[i].anchor,sels[i].head,"+input")
;sels=cm.listSelections()
;for(var i$1=0;i$1<sels.length;i$1++)cm.indentLine(sels[i$1].from().line,null,!0)
;ensureCursorVisible(cm)})},openLine:function(cm){
return cm.replaceSelection("\n","start")},
toggleOverwrite:function(cm){
return cm.toggleOverwrite()}}
;function lineStart(cm,lineN){
var line=getLine(cm.doc,lineN),visual=visualLine(line)
;return visual!=line&&(lineN=lineNo(visual)),
endOfLine(!0,cm,visual,lineN,1)}
function lineStartSmart(cm,pos){
var start=lineStart(cm,pos.line),line=getLine(cm.doc,start.line),order=getOrder(line,cm.doc.direction)
;if(!order||0==order[0].level){
var firstNonWS=Math.max(0,line.text.search(/\S/)),inWS=pos.line==start.line&&pos.ch<=firstNonWS&&pos.ch
;return Pos(start.line,inWS?0:firstNonWS,start.sticky)
}return start}
function doHandleBinding(cm,bound,dropShift){
if("string"==typeof bound&&!(bound=commands[bound]))return!1
;cm.display.input.ensurePolled()
;var prevShift=cm.display.shift,done=!1;try{
cm.isReadOnly()&&(cm.state.suppressEdits=!0),
dropShift&&(cm.display.shift=!1),done=bound(cm)!=Pass
}finally{
cm.display.shift=prevShift,cm.state.suppressEdits=!1
}return done}var stopSeq=new Delayed
;function dispatchKey(cm,name,e,handle){
var seq=cm.state.keySeq;if(seq){
if(isModifierKey(name))return"handled"
;if(/\'$/.test(name)?cm.state.keySeq=null:stopSeq.set(50,function(){
cm.state.keySeq==seq&&(cm.state.keySeq=null,
cm.display.input.reset())
}),dispatchKeyInner(cm,seq+" "+name,e,handle))return!0
}return dispatchKeyInner(cm,name,e,handle)}
function dispatchKeyInner(cm,name,e,handle){
var result=function(cm,name,handle){
for(var i=0;i<cm.state.keyMaps.length;i++){
var result=lookupKey(name,cm.state.keyMaps[i],handle,cm)
;if(result)return result}
return cm.options.extraKeys&&lookupKey(name,cm.options.extraKeys,handle,cm)||lookupKey(name,cm.options.keyMap,handle,cm)
}(cm,name,handle)
;return"multi"==result&&(cm.state.keySeq=name),"handled"==result&&signalLater(cm,"keyHandled",cm,name,e),
"handled"!=result&&"multi"!=result||(e_preventDefault(e),
restartBlink(cm)),!!result}
function handleKeyBinding(cm,e){
var name=keyName(e,!0)
;return!!name&&(e.shiftKey&&!cm.state.keySeq?dispatchKey(cm,"Shift-"+name,e,function(b){
return doHandleBinding(cm,b,!0)
})||dispatchKey(cm,name,e,function(b){
if("string"==typeof b?/^go[A-Z]/.test(b):b.motion)return doHandleBinding(cm,b)
}):dispatchKey(cm,name,e,function(b){
return doHandleBinding(cm,b)}))}
var lastStoppedKey=null;function onKeyDown(e){
var cm=this
;if(cm.curOp.focus=activeElt(),!signalDOMEvent(cm,e)){
ie&&ie_version<11&&27==e.keyCode&&(e.returnValue=!1)
;var code=e.keyCode
;cm.display.shift=16==code||e.shiftKey
;var handled=handleKeyBinding(cm,e)
;presto&&(lastStoppedKey=handled?code:null,!handled&&88==code&&!hasCopyEvent&&(mac?e.metaKey:e.ctrlKey)&&cm.replaceSelection("",null,"cut")),
18!=code||/\bCodeMirror-crosshair\b/.test(cm.display.lineDiv.className)||function(cm){
var lineDiv=cm.display.lineDiv;function up(e){
18!=e.keyCode&&e.altKey||(rmClass(lineDiv,"CodeMirror-crosshair"),
off(document,"keyup",up),
off(document,"mouseover",up))}
addClass(lineDiv,"CodeMirror-crosshair"),on(document,"keyup",up),
on(document,"mouseover",up)}(cm)}}
function onKeyUp(e){
16==e.keyCode&&(this.doc.sel.shift=!1),signalDOMEvent(this,e)
}function onKeyPress(e){var cm=this
;if(!(eventInWidget(cm.display,e)||signalDOMEvent(cm,e)||e.ctrlKey&&!e.altKey||mac&&e.metaKey)){
var keyCode=e.keyCode,charCode=e.charCode
;if(presto&&keyCode==lastStoppedKey)return lastStoppedKey=null,
void e_preventDefault(e)
;if(!presto||e.which&&!(e.which<10)||!handleKeyBinding(cm,e)){
var ch=String.fromCharCode(null==charCode?keyCode:charCode)
;"\b"!=ch&&(function(cm,e,ch){
return dispatchKey(cm,"'"+ch+"'",e,function(b){
return doHandleBinding(cm,b,!0)})
}(cm,e,ch)||cm.display.input.onKeyPress(e))}}}
var lastClick,lastDoubleClick,PastClick=function(time,pos,button){
this.time=time,this.pos=pos,this.button=button}
;function onMouseDown(e){
var cm=this,display=cm.display
;if(!(signalDOMEvent(cm,e)||display.activeTouch&&display.input.supportsTouch()))if(display.input.ensurePolled(),
display.shift=e.shiftKey,
eventInWidget(display,e))webkit||(display.scroller.draggable=!1,
setTimeout(function(){
return display.scroller.draggable=!0
},100));else if(!clickInGutter(cm,e)){
var pos=posFromMouse(cm,e),button=e_button(e),repeat=pos?function(pos,button){
var now=+new Date
;return lastDoubleClick&&lastDoubleClick.compare(now,pos,button)?(lastClick=lastDoubleClick=null,
"triple"):lastClick&&lastClick.compare(now,pos,button)?(lastDoubleClick=new PastClick(now,pos,button),
lastClick=null,
"double"):(lastClick=new PastClick(now,pos,button),lastDoubleClick=null,
"single")}(pos,button):"single"
;window.focus(),1==button&&cm.state.selectingText&&cm.state.selectingText(e),
pos&&function(cm,button,pos,repeat,event){
var name="Click"
;return"double"==repeat?name="Double"+name:"triple"==repeat&&(name="Triple"+name),
dispatchKey(cm,addModifierNames(name=(1==button?"Left":2==button?"Middle":"Right")+name,event),event,function(bound){
if("string"==typeof bound&&(bound=commands[bound]),
!bound)return!1;var done=!1;try{
cm.isReadOnly()&&(cm.state.suppressEdits=!0),done=bound(cm,pos)!=Pass
}finally{cm.state.suppressEdits=!1}return done})
}(cm,button,pos,repeat,e)||(1==button?pos?function(cm,pos,repeat,event){
ie?setTimeout(bind(ensureFocus,cm),0):cm.curOp.focus=activeElt()
;var contained,behavior=function(cm,repeat,event){
var option=cm.getOption("configureMouse"),value=option?option(cm,repeat,event):{}
;if(null==value.unit){
var rect=chromeOS?event.shiftKey&&event.metaKey:event.altKey
;value.unit=rect?"rectangle":"single"==repeat?"char":"double"==repeat?"word":"line"
}
return(null==value.extend||cm.doc.extend)&&(value.extend=cm.doc.extend||event.shiftKey),
null==value.addNew&&(value.addNew=mac?event.metaKey:event.ctrlKey),
null==value.moveOnDrag&&(value.moveOnDrag=!(mac?event.altKey:event.ctrlKey)),
value}(cm,repeat,event),sel=cm.doc.sel
;cm.options.dragDrop&&dragAndDrop&&!cm.isReadOnly()&&"single"==repeat&&(contained=sel.contains(pos))>-1&&(cmp((contained=sel.ranges[contained]).from(),pos)<0||pos.xRel>0)&&(cmp(contained.to(),pos)>0||pos.xRel<0)?function(cm,event,pos,behavior){
var display=cm.display,moved=!1,dragEnd=operation(cm,function(e){
webkit&&(display.scroller.draggable=!1),
cm.state.draggingText=!1,off(display.wrapper.ownerDocument,"mouseup",dragEnd),
off(display.wrapper.ownerDocument,"mousemove",mouseMove),
off(display.scroller,"dragstart",dragStart),
off(display.scroller,"drop",dragEnd),
moved||(e_preventDefault(e),behavior.addNew||extendSelection(cm.doc,pos,null,null,behavior.extend),
webkit||ie&&9==ie_version?setTimeout(function(){
display.wrapper.ownerDocument.body.focus(),
display.input.focus()},20):display.input.focus())
}),mouseMove=function(e2){
moved=moved||Math.abs(event.clientX-e2.clientX)+Math.abs(event.clientY-e2.clientY)>=10
},dragStart=function(){return moved=!0}
;webkit&&(display.scroller.draggable=!0),
cm.state.draggingText=dragEnd,dragEnd.copy=!behavior.moveOnDrag,
display.scroller.dragDrop&&display.scroller.dragDrop(),
on(display.wrapper.ownerDocument,"mouseup",dragEnd),
on(display.wrapper.ownerDocument,"mousemove",mouseMove),
on(display.scroller,"dragstart",dragStart),
on(display.scroller,"drop",dragEnd),delayBlurEvent(cm),
setTimeout(function(){return display.input.focus()
},20)
}(cm,event,pos,behavior):function(cm,event,start,behavior){
var display=cm.display,doc=cm.doc
;e_preventDefault(event)
;var ourRange,ourIndex,startSel=doc.sel,ranges=startSel.ranges
;if(behavior.addNew&&!behavior.extend?(ourIndex=doc.sel.contains(start),
ourRange=ourIndex>-1?ranges[ourIndex]:new Range(start,start)):(ourRange=doc.sel.primary(),
ourIndex=doc.sel.primIndex),
"rectangle"==behavior.unit)behavior.addNew||(ourRange=new Range(start,start)),
start=posFromMouse(cm,event,!0,!0),
ourIndex=-1;else{
var range$$1=rangeForUnit(cm,start,behavior.unit)
;ourRange=behavior.extend?extendRange(ourRange,range$$1.anchor,range$$1.head,behavior.extend):range$$1
}
behavior.addNew?-1==ourIndex?(ourIndex=ranges.length,setSelection(doc,normalizeSelection(cm,ranges.concat([ourRange]),ourIndex),{
scroll:!1,origin:"*mouse"
})):ranges.length>1&&ranges[ourIndex].empty()&&"char"==behavior.unit&&!behavior.extend?(setSelection(doc,normalizeSelection(cm,ranges.slice(0,ourIndex).concat(ranges.slice(ourIndex+1)),0),{
scroll:!1,origin:"*mouse"
}),startSel=doc.sel):replaceOneSelection(doc,ourIndex,ourRange,sel_mouse):(ourIndex=0,
setSelection(doc,new Selection([ourRange],0),sel_mouse),
startSel=doc.sel);var lastPos=start
;function extendTo(pos){
if(0!=cmp(lastPos,pos))if(lastPos=pos,"rectangle"==behavior.unit){
for(var ranges=[],tabSize=cm.options.tabSize,startCol=countColumn(getLine(doc,start.line).text,start.ch,tabSize),posCol=countColumn(getLine(doc,pos.line).text,pos.ch,tabSize),left=Math.min(startCol,posCol),right=Math.max(startCol,posCol),line=Math.min(start.line,pos.line),end=Math.min(cm.lastLine(),Math.max(start.line,pos.line));line<=end;line++){
var text=getLine(doc,line).text,leftPos=findColumn(text,left,tabSize)
;left==right?ranges.push(new Range(Pos(line,leftPos),Pos(line,leftPos))):text.length>leftPos&&ranges.push(new Range(Pos(line,leftPos),Pos(line,findColumn(text,right,tabSize))))
}
ranges.length||ranges.push(new Range(start,start)),setSelection(doc,normalizeSelection(cm,startSel.ranges.slice(0,ourIndex).concat(ranges),ourIndex),{
origin:"*mouse",scroll:!1}),cm.scrollIntoView(pos)
}else{
var head,oldRange=ourRange,range$$1=rangeForUnit(cm,pos,behavior.unit),anchor=oldRange.anchor
;cmp(range$$1.anchor,anchor)>0?(head=range$$1.head,
anchor=minPos(oldRange.from(),range$$1.anchor)):(head=range$$1.anchor,
anchor=maxPos(oldRange.to(),range$$1.head))
;var ranges$1=startSel.ranges.slice(0)
;ranges$1[ourIndex]=function(cm,range$$1){
var anchor=range$$1.anchor,head=range$$1.head,anchorLine=getLine(cm.doc,anchor.line)
;if(0==cmp(anchor,head)&&anchor.sticky==head.sticky)return range$$1
;var order=getOrder(anchorLine)
;if(!order)return range$$1
;var index=getBidiPartAt(order,anchor.ch,anchor.sticky),part=order[index]
;if(part.from!=anchor.ch&&part.to!=anchor.ch)return range$$1
;var leftSide,boundary=index+(part.from==anchor.ch==(1!=part.level)?0:1)
;if(0==boundary||boundary==order.length)return range$$1
;if(head.line!=anchor.line)leftSide=(head.line-anchor.line)*("ltr"==cm.doc.direction?1:-1)>0;else{
var headIndex=getBidiPartAt(order,head.ch,head.sticky),dir=headIndex-index||(head.ch-anchor.ch)*(1==part.level?-1:1)
;leftSide=headIndex==boundary-1||headIndex==boundary?dir<0:dir>0
}
var usePart=order[boundary+(leftSide?-1:0)],from=leftSide==(1==usePart.level),ch=from?usePart.from:usePart.to,sticky=from?"after":"before"
;return anchor.ch==ch&&anchor.sticky==sticky?range$$1:new Range(new Pos(anchor.line,ch,sticky),head)
}(cm,new Range(_clipPos(doc,anchor),head)),
setSelection(doc,normalizeSelection(cm,ranges$1,ourIndex),sel_mouse)
}}
var editorSize=display.wrapper.getBoundingClientRect(),counter=0
;function done(e){
cm.state.selectingText=!1,counter=1/0,e_preventDefault(e),display.input.focus(),
off(display.wrapper.ownerDocument,"mousemove",move),
off(display.wrapper.ownerDocument,"mouseup",up),
doc.history.lastSelOrigin=null}
var move=operation(cm,function(e){
0!==e.buttons&&e_button(e)?function extend(e){
var curCount=++counter,cur=posFromMouse(cm,e,!0,"rectangle"==behavior.unit)
;if(cur)if(0!=cmp(cur,lastPos)){
cm.curOp.focus=activeElt(),extendTo(cur)
;var visible=visibleLines(display,doc)
;(cur.line>=visible.to||cur.line<visible.from)&&setTimeout(operation(cm,function(){
counter==curCount&&extend(e)}),150)}else{
var outside=e.clientY<editorSize.top?-20:e.clientY>editorSize.bottom?20:0
;outside&&setTimeout(operation(cm,function(){
counter==curCount&&(display.scroller.scrollTop+=outside,
extend(e))}),50)}}(e):done(e)
}),up=operation(cm,done)
;cm.state.selectingText=up,on(display.wrapper.ownerDocument,"mousemove",move),
on(display.wrapper.ownerDocument,"mouseup",up)
}(cm,event,pos,behavior)
}(cm,pos,repeat,e):e_target(e)==display.scroller&&e_preventDefault(e):2==button?(pos&&extendSelection(cm.doc,pos),
setTimeout(function(){return display.input.focus()
},20)):3==button&&(captureRightClick?cm.display.input.onContextMenu(e):delayBlurEvent(cm)))
}}function rangeForUnit(cm,pos,unit){
if("char"==unit)return new Range(pos,pos)
;if("word"==unit)return cm.findWordAt(pos)
;if("line"==unit)return new Range(Pos(pos.line,0),_clipPos(cm.doc,Pos(pos.line+1,0)))
;var result=unit(cm,pos)
;return new Range(result.from,result.to)}
function gutterEvent(cm,e,type,prevent){var mX,mY
;if(e.touches)mX=e.touches[0].clientX,
mY=e.touches[0].clientY;else try{
mX=e.clientX,mY=e.clientY}catch(e){return!1}
if(mX>=Math.floor(cm.display.gutters.getBoundingClientRect().right))return!1
;prevent&&e_preventDefault(e)
;var display=cm.display,lineBox=display.lineDiv.getBoundingClientRect()
;if(mY>lineBox.bottom||!hasHandler(cm,type))return e_defaultPrevented(e)
;mY-=lineBox.top-display.viewOffset
;for(var i=0;i<cm.options.gutters.length;++i){
var g=display.gutters.childNodes[i]
;if(g&&g.getBoundingClientRect().right>=mX){
var line=_lineAtHeight(cm.doc,mY),gutter=cm.options.gutters[i]
;return signal(cm,type,cm,line,gutter,e),
e_defaultPrevented(e)}}}
function clickInGutter(cm,e){
return gutterEvent(cm,e,"gutterClick",!0)}
function onContextMenu(cm,e){
eventInWidget(cm.display,e)||function(cm,e){
return!!hasHandler(cm,"gutterContextMenu")&&gutterEvent(cm,e,"gutterContextMenu",!1)
}(cm,e)||signalDOMEvent(cm,e,"contextmenu")||captureRightClick||cm.display.input.onContextMenu(e)
}function themeChanged(cm){
cm.display.wrapper.className=cm.display.wrapper.className.replace(/\s*cm-s-\S+/g,"")+cm.options.theme.replace(/(^|\s)\s*/g," cm-s-"),
clearCaches(cm)}
PastClick.prototype.compare=function(time,pos,button){
return this.time+400>time&&0==cmp(pos,this.pos)&&button==this.button
};var Init={toString:function(){
return"CodeMirror.Init"}
},defaults={},optionHandlers={}
;function guttersChanged(cm){
updateGutters(cm),regChange(cm),alignHorizontally(cm)
}function dragDropChanged(cm,value,old){
var wasOn=old&&old!=Init;if(!value!=!wasOn){
var funcs=cm.display.dragFunctions,toggle=value?on:off
;toggle(cm.display.scroller,"dragstart",funcs.start),
toggle(cm.display.scroller,"dragenter",funcs.enter),
toggle(cm.display.scroller,"dragover",funcs.over),
toggle(cm.display.scroller,"dragleave",funcs.leave),
toggle(cm.display.scroller,"drop",funcs.drop)}}
function wrappingChanged(cm){
cm.options.lineWrapping?(addClass(cm.display.wrapper,"CodeMirror-wrap"),
cm.display.sizer.style.minWidth="",
cm.display.sizerWidth=null):(rmClass(cm.display.wrapper,"CodeMirror-wrap"),
findMaxLine(cm)),
estimateLineHeights(cm),regChange(cm),clearCaches(cm),setTimeout(function(){
return updateScrollbars(cm)},100)}
function CodeMirror(place,options){var this$1=this
;if(!(this instanceof CodeMirror))return new CodeMirror(place,options)
;this.options=options=options?copyObj(options):{},
copyObj(defaults,options,!1),setGuttersForLineNumbers(options)
;var doc=options.value
;"string"==typeof doc?doc=new Doc(doc,options.mode,null,options.lineSeparator,options.direction):options.mode&&(doc.modeOption=options.mode),
this.doc=doc
;var input=new CodeMirror.inputStyles[options.inputStyle](this),display=this.display=new Display(place,doc,input)
;for(var opt in display.wrapper.CodeMirror=this,
updateGutters(this),themeChanged(this),
options.lineWrapping&&(this.display.wrapper.className+=" CodeMirror-wrap"),
initScrollbars(this),this.state={keyMaps:[],
overlays:[],modeGen:0,overwrite:!1,
delayingBlurEvent:!1,focused:!1,suppressEdits:!1,
pasteIncoming:-1,cutIncoming:-1,selectingText:!1,
draggingText:!1,highlight:new Delayed,keySeq:null,
specialChars:null
},options.autofocus&&!mobile&&display.input.focus(),ie&&ie_version<11&&setTimeout(function(){
return this$1.display.input.reset(!0)
},20),function(cm){var d=cm.display
;on(d.scroller,"mousedown",operation(cm,onMouseDown)),
on(d.scroller,"dblclick",ie&&ie_version<11?operation(cm,function(e){
if(!signalDOMEvent(cm,e)){
var pos=posFromMouse(cm,e)
;if(pos&&!clickInGutter(cm,e)&&!eventInWidget(cm.display,e)){
e_preventDefault(e);var word=cm.findWordAt(pos)
;extendSelection(cm.doc,word.anchor,word.head)}}
}):function(e){
return signalDOMEvent(cm,e)||e_preventDefault(e)
}),on(d.scroller,"contextmenu",function(e){
return onContextMenu(cm,e)})
;var touchFinished,prevTouch={end:0}
;function finishTouch(){
d.activeTouch&&(touchFinished=setTimeout(function(){
return d.activeTouch=null
},1e3),(prevTouch=d.activeTouch).end=+new Date)}
function farAway(touch,other){
if(null==other.left)return!0
;var dx=other.left-touch.left,dy=other.top-touch.top
;return dx*dx+dy*dy>400}
on(d.scroller,"touchstart",function(e){
if(!signalDOMEvent(cm,e)&&!function(e){
if(1!=e.touches.length)return!1
;var touch=e.touches[0]
;return touch.radiusX<=1&&touch.radiusY<=1
}(e)&&!clickInGutter(cm,e)){
d.input.ensurePolled(),clearTimeout(touchFinished)
;var now=+new Date;d.activeTouch={start:now,
moved:!1,
prev:now-prevTouch.end<=300?prevTouch:null
},1==e.touches.length&&(d.activeTouch.left=e.touches[0].pageX,
d.activeTouch.top=e.touches[0].pageY)}
}),on(d.scroller,"touchmove",function(){
d.activeTouch&&(d.activeTouch.moved=!0)
}),on(d.scroller,"touchend",function(e){
var touch=d.activeTouch
;if(touch&&!eventInWidget(d,e)&&null!=touch.left&&!touch.moved&&new Date-touch.start<300){
var range,pos=cm.coordsChar(d.activeTouch,"page")
;range=!touch.prev||farAway(touch,touch.prev)?new Range(pos,pos):!touch.prev.prev||farAway(touch,touch.prev.prev)?cm.findWordAt(pos):new Range(Pos(pos.line,0),_clipPos(cm.doc,Pos(pos.line+1,0))),
cm.setSelection(range.anchor,range.head),
cm.focus(),e_preventDefault(e)}finishTouch()
}),on(d.scroller,"touchcancel",finishTouch),
on(d.scroller,"scroll",function(){
d.scroller.clientHeight&&(updateScrollTop(cm,d.scroller.scrollTop),
setScrollLeft(cm,d.scroller.scrollLeft,!0),
signal(cm,"scroll",cm))
}),on(d.scroller,"mousewheel",function(e){
return onScrollWheel(cm,e)
}),on(d.scroller,"DOMMouseScroll",function(e){
return onScrollWheel(cm,e)
}),on(d.wrapper,"scroll",function(){
return d.wrapper.scrollTop=d.wrapper.scrollLeft=0
}),d.dragFunctions={enter:function(e){
signalDOMEvent(cm,e)||e_stop(e)},over:function(e){
signalDOMEvent(cm,e)||(function(cm,e){
var pos=posFromMouse(cm,e);if(pos){
var frag=document.createDocumentFragment()
;drawSelectionCursor(cm,pos,frag),cm.display.dragCursor||(cm.display.dragCursor=elt("div",null,"CodeMirror-cursors CodeMirror-dragcursors"),
cm.display.lineSpace.insertBefore(cm.display.dragCursor,cm.display.cursorDiv)),
removeChildrenAndAdd(cm.display.dragCursor,frag)}
}(cm,e),e_stop(e))},start:function(e){
return function(cm,e){
if(ie&&(!cm.state.draggingText||+new Date-lastDrop<100))e_stop(e);else if(!signalDOMEvent(cm,e)&&!eventInWidget(cm.display,e)&&(e.dataTransfer.setData("Text",cm.getSelection()),
e.dataTransfer.effectAllowed="copyMove",
e.dataTransfer.setDragImage&&!safari)){
var img=elt("img",null,null,"position: fixed; left: 0; top: 0;")
;img.src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
presto&&(img.width=img.height=1,
cm.display.wrapper.appendChild(img),img._top=img.offsetTop),
e.dataTransfer.setDragImage(img,0,0),
presto&&img.parentNode.removeChild(img)}}(cm,e)},
drop:operation(cm,onDrop),leave:function(e){
signalDOMEvent(cm,e)||clearDragCursor(cm)}}
;var inp=d.input.getField()
;on(inp,"keyup",function(e){
return onKeyUp.call(cm,e)
}),on(inp,"keydown",operation(cm,onKeyDown)),on(inp,"keypress",operation(cm,onKeyPress)),
on(inp,"focus",function(e){return onFocus(cm,e)
}),on(inp,"blur",function(e){return onBlur(cm,e)})
}(this),ensureGlobalHandlers(),
_startOperation(this),this.curOp.forceUpdate=!0,attachDoc(this,doc),
options.autofocus&&!mobile||this.hasFocus()?setTimeout(bind(onFocus,this),20):onBlur(this),
optionHandlers)optionHandlers.hasOwnProperty(opt)&&optionHandlers[opt](this$1,options[opt],Init)
;maybeUpdateLineNumberWidth(this),
options.finishInit&&options.finishInit(this)
;for(var i=0;i<initHooks.length;++i)initHooks[i](this$1)
;_endOperation(this),webkit&&options.lineWrapping&&"optimizelegibility"==getComputedStyle(display.lineDiv).textRendering&&(display.lineDiv.style.textRendering="auto")
}
CodeMirror.defaults=defaults,CodeMirror.optionHandlers=optionHandlers
;var initHooks=[]
;function indentLine(cm,n,how,aggressive){
var state,doc=cm.doc
;null==how&&(how="add"),"smart"==how&&(doc.mode.indent?state=getContextBefore(cm,n).state:how="prev")
;var tabSize=cm.options.tabSize,line=getLine(doc,n),curSpace=countColumn(line.text,null,tabSize)
;line.stateAfter&&(line.stateAfter=null)
;var indentation,curSpaceString=line.text.match(/^\s*/)[0]
;if(aggressive||/\S/.test(line.text)){
if("smart"==how&&((indentation=doc.mode.indent(state,line.text.slice(curSpaceString.length),line.text))==Pass||indentation>150)){
if(!aggressive)return;how="prev"}
}else indentation=0,how="not"
;"prev"==how?indentation=n>doc.first?countColumn(getLine(doc,n-1).text,null,tabSize):0:"add"==how?indentation=curSpace+cm.options.indentUnit:"subtract"==how?indentation=curSpace-cm.options.indentUnit:"number"==typeof how&&(indentation=curSpace+how),
indentation=Math.max(0,indentation)
;var indentString="",pos=0
;if(cm.options.indentWithTabs)for(var i=Math.floor(indentation/tabSize);i;--i)pos+=tabSize,
indentString+="\t"
;if(pos<indentation&&(indentString+=spaceStr(indentation-pos)),
indentString!=curSpaceString)return _replaceRange(doc,indentString,Pos(n,0),Pos(n,curSpaceString.length),"+input"),
line.stateAfter=null,!0
;for(var i$1=0;i$1<doc.sel.ranges.length;i$1++){
var range=doc.sel.ranges[i$1]
;if(range.head.line==n&&range.head.ch<curSpaceString.length){
var pos$1=Pos(n,curSpaceString.length)
;replaceOneSelection(doc,i$1,new Range(pos$1,pos$1))
;break}}}CodeMirror.defineInitHook=function(f){
return initHooks.push(f)};var lastCopied=null
;function setLastCopied(newLastCopied){
lastCopied=newLastCopied}
function applyTextInput(cm,inserted,deleted,sel,origin){
var doc=cm.doc
;cm.display.shift=!1,sel||(sel=doc.sel)
;var recent=+new Date-200,paste="paste"==origin||cm.state.pasteIncoming>recent,textLines=splitLinesAuto(inserted),multiPaste=null
;if(paste&&sel.ranges.length>1)if(lastCopied&&lastCopied.text.join("\n")==inserted){
if(sel.ranges.length%lastCopied.text.length==0){
multiPaste=[]
;for(var i=0;i<lastCopied.text.length;i++)multiPaste.push(doc.splitLines(lastCopied.text[i]))
}
}else textLines.length==sel.ranges.length&&cm.options.pasteLinesPerSelection&&(multiPaste=map(textLines,function(l){
return[l]}))
;for(var updateInput=cm.curOp.updateInput,i$1=sel.ranges.length-1;i$1>=0;i$1--){
var range$$1=sel.ranges[i$1],from=range$$1.from(),to=range$$1.to()
;range$$1.empty()&&(deleted&&deleted>0?from=Pos(from.line,from.ch-deleted):cm.state.overwrite&&!paste?to=Pos(to.line,Math.min(getLine(doc,to.line).text.length,to.ch+lst(textLines).length)):paste&&lastCopied&&lastCopied.lineWise&&lastCopied.text.join("\n")==inserted&&(from=to=Pos(from.line,0)))
;var changeEvent={from:from,to:to,
text:multiPaste?multiPaste[i$1%multiPaste.length]:textLines,
origin:origin||(paste?"paste":cm.state.cutIncoming>recent?"cut":"+input")
}
;makeChange(cm.doc,changeEvent),signalLater(cm,"inputRead",cm,changeEvent)
}
inserted&&!paste&&triggerElectric(cm,inserted),ensureCursorVisible(cm),cm.curOp.updateInput<2&&(cm.curOp.updateInput=updateInput),
cm.curOp.typing=!0,
cm.state.pasteIncoming=cm.state.cutIncoming=-1}
function handlePaste(e,cm){
var pasted=e.clipboardData&&e.clipboardData.getData("Text")
;if(pasted)return e.preventDefault(),
cm.isReadOnly()||cm.options.disableInput||runInOp(cm,function(){
return applyTextInput(cm,pasted,0,null,"paste")
}),!0}function triggerElectric(cm,inserted){
if(cm.options.electricChars&&cm.options.smartIndent)for(var sel=cm.doc.sel,i=sel.ranges.length-1;i>=0;i--){
var range$$1=sel.ranges[i]
;if(!(range$$1.head.ch>100||i&&sel.ranges[i-1].head.line==range$$1.head.line)){
var mode=cm.getModeAt(range$$1.head),indented=!1
;if(mode.electricChars){
for(var j=0;j<mode.electricChars.length;j++)if(inserted.indexOf(mode.electricChars.charAt(j))>-1){
indented=indentLine(cm,range$$1.head.line,"smart")
;break}
}else mode.electricInput&&mode.electricInput.test(getLine(cm.doc,range$$1.head.line).text.slice(0,range$$1.head.ch))&&(indented=indentLine(cm,range$$1.head.line,"smart"))
;indented&&signalLater(cm,"electricInput",cm,range$$1.head.line)
}}}function copyableRanges(cm){
for(var text=[],ranges=[],i=0;i<cm.doc.sel.ranges.length;i++){
var line=cm.doc.sel.ranges[i].head.line,lineRange={
anchor:Pos(line,0),head:Pos(line+1,0)}
;ranges.push(lineRange),text.push(cm.getRange(lineRange.anchor,lineRange.head))
}return{text:text,ranges:ranges}}
function disableBrowserMagic(field,spellcheck,autocorrect,autocapitalize){
field.setAttribute("autocorrect",!!autocorrect),
field.setAttribute("autocapitalize",!!autocapitalize),
field.setAttribute("spellcheck",!!spellcheck)}
function hiddenTextarea(){
var te=elt("textarea",null,null,"position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none"),div=elt("div",[te],null,"overflow: hidden; position: relative; width: 3px; height: 0px;")
;return webkit?te.style.width="1000px":te.setAttribute("wrap","off"),
ios&&(te.style.border="1px solid black"),
disableBrowserMagic(te),div}
function _findPosH(doc,pos,dir,unit,visually){
var oldPos=pos,origDir=dir,lineObj=getLine(doc,pos.line)
;function moveOnce(boundToLine){var next,l
;if(null==(next=visually?function(cm,line,start,dir){
var bidi=getOrder(line,cm.doc.direction)
;if(!bidi)return moveLogically(line,start,dir)
;start.ch>=line.text.length?(start.ch=line.text.length,
start.sticky="before"):start.ch<=0&&(start.ch=0,
start.sticky="after")
;var partPos=getBidiPartAt(bidi,start.ch,start.sticky),part=bidi[partPos]
;if("ltr"==cm.doc.direction&&part.level%2==0&&(dir>0?part.to>start.ch:part.from<start.ch))return moveLogically(line,start,dir)
;var prep,mv=function(pos,dir){
return moveCharLogically(line,pos instanceof Pos?pos.ch:pos,dir)
},getWrappedLineExtent=function(ch){
return cm.options.lineWrapping?(prep=prep||prepareMeasureForLine(cm,line),
wrappedLineExtentChar(cm,line,prep,ch)):{begin:0,
end:line.text.length}
},wrappedLineExtent=getWrappedLineExtent("before"==start.sticky?mv(start,-1):start.ch)
;if("rtl"==cm.doc.direction||1==part.level){
var moveInStorageOrder=1==part.level==dir<0,ch=mv(start,moveInStorageOrder?1:-1)
;if(null!=ch&&(moveInStorageOrder?ch<=part.to&&ch<=wrappedLineExtent.end:ch>=part.from&&ch>=wrappedLineExtent.begin)){
var sticky=moveInStorageOrder?"before":"after"
;return new Pos(start.line,ch,sticky)}}
var searchInVisualLine=function(partPos,dir,wrappedLineExtent){
for(var getRes=function(ch,moveInStorageOrder){
return moveInStorageOrder?new Pos(start.line,mv(ch,1),"before"):new Pos(start.line,ch,"after")
};partPos>=0&&partPos<bidi.length;partPos+=dir){
var part=bidi[partPos],moveInStorageOrder=dir>0==(1!=part.level),ch=moveInStorageOrder?wrappedLineExtent.begin:mv(wrappedLineExtent.end,-1)
;if(part.from<=ch&&ch<part.to)return getRes(ch,moveInStorageOrder)
;if(ch=moveInStorageOrder?part.from:mv(part.to,-1),
wrappedLineExtent.begin<=ch&&ch<wrappedLineExtent.end)return getRes(ch,moveInStorageOrder)
}
},res=searchInVisualLine(partPos+dir,dir,wrappedLineExtent)
;if(res)return res
;var nextCh=dir>0?wrappedLineExtent.end:mv(wrappedLineExtent.begin,-1)
;return null==nextCh||dir>0&&nextCh==line.text.length||!(res=searchInVisualLine(dir>0?0:bidi.length-1,dir,getWrappedLineExtent(nextCh)))?null:res
}(doc.cm,lineObj,pos,dir):moveLogically(lineObj,pos,dir))){
if(boundToLine||((l=pos.line+dir)<doc.first||l>=doc.first+doc.size||(pos=new Pos(l,pos.ch,pos.sticky),
!(lineObj=getLine(doc,l)))))return!1
;pos=endOfLine(visually,doc.cm,lineObj,pos.line,dir)
}else pos=next;return!0}
if("char"==unit)moveOnce();else if("column"==unit)moveOnce(!0);else if("word"==unit||"group"==unit)for(var sawType=null,group="group"==unit,helper=doc.cm&&doc.cm.getHelper(pos,"wordChars"),first=!0;!(dir<0)||moveOnce(!first);first=!1){
var cur=lineObj.text.charAt(pos.ch)||"\n",type=isWordChar(cur,helper)?"w":group&&"\n"==cur?"n":!group||/\s/.test(cur)?null:"p"
;if(!group||first||type||(type="s"),
sawType&&sawType!=type){
dir<0&&(dir=1,moveOnce(),pos.sticky="after");break
}
if(type&&(sawType=type),dir>0&&!moveOnce(!first))break
}var result=skipAtomic(doc,pos,oldPos,origDir,!0)
;return equalCursorPos(oldPos,result)&&(result.hitSide=!0),
result}function _findPosV(cm,pos,dir,unit){
var y,target,doc=cm.doc,x=pos.left
;if("page"==unit){
var pageSize=Math.min(cm.display.wrapper.clientHeight,window.innerHeight||document.documentElement.clientHeight),moveAmount=Math.max(pageSize-.5*textHeight(cm.display),3)
;y=(dir>0?pos.bottom:pos.top)+dir*moveAmount
}else"line"==unit&&(y=dir>0?pos.bottom+3:pos.top-3)
;for(;(target=_coordsChar(cm,x,y)).outside;){
if(dir<0?y<=0:y>=doc.height){target.hitSide=!0
;break}y+=5*dir}return target}
var ContentEditableInput=function(cm){
this.cm=cm,this.lastAnchorNode=this.lastAnchorOffset=this.lastFocusNode=this.lastFocusOffset=null,
this.polling=new Delayed,
this.composing=null,this.gracePeriod=!1,this.readDOMTimeout=null
};function posToDOM(cm,pos){
var view=findViewForLine(cm,pos.line)
;if(!view||view.hidden)return null
;var line=getLine(cm.doc,pos.line),info=mapFromLineView(view,line,pos.line),order=getOrder(line,cm.doc.direction),side="left"
;if(order){var partPos=getBidiPartAt(order,pos.ch)
;side=partPos%2?"right":"left"}
var result=nodeAndOffsetInLineMap(info.map,pos.ch,side)
;return result.offset="right"==result.collapse?result.end:result.start,
result}function badPos(pos,bad){
return bad&&(pos.bad=!0),pos}
function domToPos(cm,node,offset){var lineNode
;if(node==cm.display.lineDiv){
if(!(lineNode=cm.display.lineDiv.childNodes[offset]))return badPos(cm.clipPos(Pos(cm.display.viewTo-1)),!0)
;node=null,offset=0
}else for(lineNode=node;;lineNode=lineNode.parentNode){
if(!lineNode||lineNode==cm.display.lineDiv)return null
;if(lineNode.parentNode&&lineNode.parentNode==cm.display.lineDiv)break
}for(var i=0;i<cm.display.view.length;i++){
var lineView=cm.display.view[i]
;if(lineView.node==lineNode)return locateNodeInLineView(lineView,node,offset)
}}
function locateNodeInLineView(lineView,node,offset){
var wrapper=lineView.text.firstChild,bad=!1
;if(!node||!contains(wrapper,node))return badPos(Pos(lineNo(lineView.line),0),!0)
;if(node==wrapper&&(bad=!0,
node=wrapper.childNodes[offset],offset=0,!node)){
var line=lineView.rest?lst(lineView.rest):lineView.line
;return badPos(Pos(lineNo(line),line.text.length),bad)
}
var textNode=3==node.nodeType?node:null,topNode=node
;for(textNode||1!=node.childNodes.length||3!=node.firstChild.nodeType||(textNode=node.firstChild,
offset&&(offset=textNode.nodeValue.length));topNode.parentNode!=wrapper;)topNode=topNode.parentNode
;var measure=lineView.measure,maps=measure.maps
;function find(textNode,topNode,offset){
for(var i=-1;i<(maps?maps.length:0);i++)for(var map$$1=i<0?measure.map:maps[i],j=0;j<map$$1.length;j+=3){
var curNode=map$$1[j+2]
;if(curNode==textNode||curNode==topNode){
var line=lineNo(i<0?lineView.line:lineView.rest[i]),ch=map$$1[j]+offset
;return(offset<0||curNode!=textNode)&&(ch=map$$1[j+(offset?1:0)]),
Pos(line,ch)}}}
var found=find(textNode,topNode,offset)
;if(found)return badPos(found,bad)
;for(var after=topNode.nextSibling,dist=textNode?textNode.nodeValue.length-offset:0;after;after=after.nextSibling){
if(found=find(after,after.firstChild,0))return badPos(Pos(found.line,found.ch-dist),bad)
;dist+=after.textContent.length}
for(var before=topNode.previousSibling,dist$1=offset;before;before=before.previousSibling){
if(found=find(before,before.firstChild,-1))return badPos(Pos(found.line,found.ch+dist$1),bad)
;dist$1+=before.textContent.length}}
ContentEditableInput.prototype.init=function(display){
var this$1=this,input=this,cm=input.cm,div=input.div=display.lineDiv
;function onCopyCut(e){if(!signalDOMEvent(cm,e)){
if(cm.somethingSelected())setLastCopied({
lineWise:!1,text:cm.getSelections()
}),"cut"==e.type&&cm.replaceSelection("",null,"cut");else{
if(!cm.options.lineWiseCopyCut)return
;var ranges=copyableRanges(cm);setLastCopied({
lineWise:!0,text:ranges.text
}),"cut"==e.type&&cm.operation(function(){
cm.setSelections(ranges.ranges,0,sel_dontScroll),
cm.replaceSelection("",null,"cut")})}
if(e.clipboardData){e.clipboardData.clearData()
;var content=lastCopied.text.join("\n")
;if(e.clipboardData.setData("Text",content),
e.clipboardData.getData("Text")==content)return void e.preventDefault()
}var kludge=hiddenTextarea(),te=kludge.firstChild
;cm.display.lineSpace.insertBefore(kludge,cm.display.lineSpace.firstChild),
te.value=lastCopied.text.join("\n")
;var hadFocus=document.activeElement
;selectInput(te),setTimeout(function(){
cm.display.lineSpace.removeChild(kludge),
hadFocus.focus(),hadFocus==div&&input.showPrimarySelection()
},50)}}
disableBrowserMagic(div,cm.options.spellcheck,cm.options.autocorrect,cm.options.autocapitalize),
on(div,"paste",function(e){
signalDOMEvent(cm,e)||handlePaste(e,cm)||ie_version<=11&&setTimeout(operation(cm,function(){
return this$1.updateFromDOM()}),20)
}),on(div,"compositionstart",function(e){
this$1.composing={data:e.data,done:!1}
}),on(div,"compositionupdate",function(e){
this$1.composing||(this$1.composing={data:e.data,
done:!1})}),on(div,"compositionend",function(e){
this$1.composing&&(e.data!=this$1.composing.data&&this$1.readFromDOMSoon(),
this$1.composing.done=!0)
}),on(div,"touchstart",function(){
return input.forceCompositionEnd()
}),on(div,"input",function(){
this$1.composing||this$1.readFromDOMSoon()
}),on(div,"copy",onCopyCut),on(div,"cut",onCopyCut)
},ContentEditableInput.prototype.prepareSelection=function(){
var result=prepareSelection(this.cm,!1)
;return result.focus=this.cm.state.focused,result
},ContentEditableInput.prototype.showSelection=function(info,takeFocus){
info&&this.cm.display.view.length&&((info.focus||takeFocus)&&this.showPrimarySelection(),
this.showMultipleSelections(info))
},ContentEditableInput.prototype.getSelection=function(){
return this.cm.display.wrapper.ownerDocument.getSelection()
},ContentEditableInput.prototype.showPrimarySelection=function(){
var sel=this.getSelection(),cm=this.cm,prim=cm.doc.sel.primary(),from=prim.from(),to=prim.to()
;if(cm.display.viewTo==cm.display.viewFrom||from.line>=cm.display.viewTo||to.line<cm.display.viewFrom)sel.removeAllRanges();else{
var curAnchor=domToPos(cm,sel.anchorNode,sel.anchorOffset),curFocus=domToPos(cm,sel.focusNode,sel.focusOffset)
;if(!curAnchor||curAnchor.bad||!curFocus||curFocus.bad||0!=cmp(minPos(curAnchor,curFocus),from)||0!=cmp(maxPos(curAnchor,curFocus),to)){
var view=cm.display.view,start=from.line>=cm.display.viewFrom&&posToDOM(cm,from)||{
node:view[0].measure.map[2],offset:0
},end=to.line<cm.display.viewTo&&posToDOM(cm,to)
;if(!end){
var measure=view[view.length-1].measure,map$$1=measure.maps?measure.maps[measure.maps.length-1]:measure.map
;end={node:map$$1[map$$1.length-1],
offset:map$$1[map$$1.length-2]-map$$1[map$$1.length-3]
}}if(start&&end){
var rng,old=sel.rangeCount&&sel.getRangeAt(0);try{
rng=range(start.node,start.offset,end.offset,end.node)
}catch(e){}
rng&&(!gecko&&cm.state.focused?(sel.collapse(start.node,start.offset),
rng.collapsed||(sel.removeAllRanges(),
sel.addRange(rng))):(sel.removeAllRanges(),
sel.addRange(rng)),old&&null==sel.anchorNode?sel.addRange(old):gecko&&this.startGracePeriod()),
this.rememberSelection()
}else sel.removeAllRanges()}}
},ContentEditableInput.prototype.startGracePeriod=function(){
var this$1=this
;clearTimeout(this.gracePeriod),this.gracePeriod=setTimeout(function(){
this$1.gracePeriod=!1,
this$1.selectionChanged()&&this$1.cm.operation(function(){
return this$1.cm.curOp.selectionChanged=!0})},20)
},ContentEditableInput.prototype.showMultipleSelections=function(info){
removeChildrenAndAdd(this.cm.display.cursorDiv,info.cursors),
removeChildrenAndAdd(this.cm.display.selectionDiv,info.selection)
},ContentEditableInput.prototype.rememberSelection=function(){
var sel=this.getSelection()
;this.lastAnchorNode=sel.anchorNode,this.lastAnchorOffset=sel.anchorOffset,
this.lastFocusNode=sel.focusNode,
this.lastFocusOffset=sel.focusOffset
},ContentEditableInput.prototype.selectionInEditor=function(){
var sel=this.getSelection()
;if(!sel.rangeCount)return!1
;var node=sel.getRangeAt(0).commonAncestorContainer
;return contains(this.div,node)
},ContentEditableInput.prototype.focus=function(){
"nocursor"!=this.cm.options.readOnly&&(this.selectionInEditor()||this.showSelection(this.prepareSelection(),!0),
this.div.focus())
},ContentEditableInput.prototype.blur=function(){
this.div.blur()
},ContentEditableInput.prototype.getField=function(){
return this.div
},ContentEditableInput.prototype.supportsTouch=function(){
return!0
},ContentEditableInput.prototype.receivedFocus=function(){
var input=this
;this.selectionInEditor()?this.pollSelection():runInOp(this.cm,function(){
return input.cm.curOp.selectionChanged=!0
}),this.polling.set(this.cm.options.pollInterval,function poll(){
input.cm.state.focused&&(input.pollSelection(),
input.polling.set(input.cm.options.pollInterval,poll))
})
},ContentEditableInput.prototype.selectionChanged=function(){
var sel=this.getSelection()
;return sel.anchorNode!=this.lastAnchorNode||sel.anchorOffset!=this.lastAnchorOffset||sel.focusNode!=this.lastFocusNode||sel.focusOffset!=this.lastFocusOffset
},
ContentEditableInput.prototype.pollSelection=function(){
if(null==this.readDOMTimeout&&!this.gracePeriod&&this.selectionChanged()){
var sel=this.getSelection(),cm=this.cm
;if(android&&chrome&&this.cm.options.gutters.length&&function(node){
for(var scan=node;scan;scan=scan.parentNode)if(/CodeMirror-gutter-wrapper/.test(scan.className))return!0
;return!1
}(sel.anchorNode))return this.cm.triggerOnKeyDown({
type:"keydown",keyCode:8,preventDefault:Math.abs
}),this.blur(),void this.focus()
;if(!this.composing){this.rememberSelection()
;var anchor=domToPos(cm,sel.anchorNode,sel.anchorOffset),head=domToPos(cm,sel.focusNode,sel.focusOffset)
;anchor&&head&&runInOp(cm,function(){
setSelection(cm.doc,simpleSelection(anchor,head),sel_dontScroll),
(anchor.bad||head.bad)&&(cm.curOp.selectionChanged=!0)
})}}
},ContentEditableInput.prototype.pollContent=function(){
null!=this.readDOMTimeout&&(clearTimeout(this.readDOMTimeout),
this.readDOMTimeout=null)
;var fromIndex,fromLine,fromNode,cm=this.cm,display=cm.display,sel=cm.doc.sel.primary(),from=sel.from(),to=sel.to()
;if(0==from.ch&&from.line>cm.firstLine()&&(from=Pos(from.line-1,getLine(cm.doc,from.line-1).length)),
to.ch==getLine(cm.doc,to.line).text.length&&to.line<cm.lastLine()&&(to=Pos(to.line+1,0)),
from.line<display.viewFrom||to.line>display.viewTo-1)return!1
;from.line==display.viewFrom||0==(fromIndex=findViewIndex(cm,from.line))?(fromLine=lineNo(display.view[0].line),
fromNode=display.view[0].node):(fromLine=lineNo(display.view[fromIndex].line),
fromNode=display.view[fromIndex-1].node.nextSibling)
;var toLine,toNode,toIndex=findViewIndex(cm,to.line)
;if(toIndex==display.view.length-1?(toLine=display.viewTo-1,
toNode=display.lineDiv.lastChild):(toLine=lineNo(display.view[toIndex+1].line)-1,
toNode=display.view[toIndex+1].node.previousSibling),
!fromNode)return!1
;for(var newText=cm.doc.splitLines(function(cm,from,to,fromLine,toLine){
var text="",closing=!1,lineSep=cm.doc.lineSeparator(),extraLinebreak=!1
;function close(){
closing&&(text+=lineSep,extraLinebreak&&(text+=lineSep),closing=extraLinebreak=!1)
}function addText(str){str&&(close(),text+=str)}
function walk(node){if(1==node.nodeType){
var cmText=node.getAttribute("cm-text")
;if(cmText)return void addText(cmText)
;var range$$1,markerID=node.getAttribute("cm-marker")
;if(markerID){
var found=cm.findMarks(Pos(fromLine,0),Pos(toLine+1,0),(id=+markerID,
function(marker){return marker.id==id}))
;return void(found.length&&(range$$1=found[0].find(0))&&addText(getBetween(cm.doc,range$$1.from,range$$1.to).join(lineSep)))
}
if("false"==node.getAttribute("contenteditable"))return
;var isBlock=/^(pre|div|p|li|table|br)$/i.test(node.nodeName)
;if(!/^br$/i.test(node.nodeName)&&0==node.textContent.length)return
;isBlock&&close()
;for(var i=0;i<node.childNodes.length;i++)walk(node.childNodes[i])
;/^(pre|p)$/i.test(node.nodeName)&&(extraLinebreak=!0),
isBlock&&(closing=!0)
}else 3==node.nodeType&&addText(node.nodeValue.replace(/\u200b/g,"").replace(/\u00a0/g," "))
;var id}
for(;walk(from),from!=to;)from=from.nextSibling,extraLinebreak=!1
;return text
}(cm,fromNode,toNode,fromLine,toLine)),oldText=getBetween(cm.doc,Pos(fromLine,0),Pos(toLine,getLine(cm.doc,toLine).text.length));newText.length>1&&oldText.length>1;)if(lst(newText)==lst(oldText))newText.pop(),
oldText.pop(),toLine--;else{
if(newText[0]!=oldText[0])break
;newText.shift(),oldText.shift(),fromLine++}
for(var cutFront=0,cutEnd=0,newTop=newText[0],oldTop=oldText[0],maxCutFront=Math.min(newTop.length,oldTop.length);cutFront<maxCutFront&&newTop.charCodeAt(cutFront)==oldTop.charCodeAt(cutFront);)++cutFront
;for(var newBot=lst(newText),oldBot=lst(oldText),maxCutEnd=Math.min(newBot.length-(1==newText.length?cutFront:0),oldBot.length-(1==oldText.length?cutFront:0));cutEnd<maxCutEnd&&newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1);)++cutEnd
;if(1==newText.length&&1==oldText.length&&fromLine==from.line)for(;cutFront&&cutFront>from.ch&&newBot.charCodeAt(newBot.length-cutEnd-1)==oldBot.charCodeAt(oldBot.length-cutEnd-1);)cutFront--,
cutEnd++
;newText[newText.length-1]=newBot.slice(0,newBot.length-cutEnd).replace(/^\u200b+/,""),
newText[0]=newText[0].slice(cutFront).replace(/\u200b+$/,"")
;var chFrom=Pos(fromLine,cutFront),chTo=Pos(toLine,oldText.length?lst(oldText).length-cutEnd:0)
;return newText.length>1||newText[0]||cmp(chFrom,chTo)?(_replaceRange(cm.doc,newText,chFrom,chTo,"+input"),
!0):void 0
},ContentEditableInput.prototype.ensurePolled=function(){
this.forceCompositionEnd()
},ContentEditableInput.prototype.reset=function(){
this.forceCompositionEnd()
},ContentEditableInput.prototype.forceCompositionEnd=function(){
this.composing&&(clearTimeout(this.readDOMTimeout),
this.composing=null,this.updateFromDOM(),
this.div.blur(),this.div.focus())
},ContentEditableInput.prototype.readFromDOMSoon=function(){
var this$1=this
;null==this.readDOMTimeout&&(this.readDOMTimeout=setTimeout(function(){
if(this$1.readDOMTimeout=null,this$1.composing){
if(!this$1.composing.done)return
;this$1.composing=null}this$1.updateFromDOM()
},80))
},ContentEditableInput.prototype.updateFromDOM=function(){
var this$1=this
;!this.cm.isReadOnly()&&this.pollContent()||runInOp(this.cm,function(){
return regChange(this$1.cm)})
},ContentEditableInput.prototype.setUneditable=function(node){
node.contentEditable="false"
},ContentEditableInput.prototype.onKeyPress=function(e){
0==e.charCode||this.composing||(e.preventDefault(),
this.cm.isReadOnly()||operation(this.cm,applyTextInput)(this.cm,String.fromCharCode(null==e.charCode?e.keyCode:e.charCode),0))
},
ContentEditableInput.prototype.readOnlyChanged=function(val){
this.div.contentEditable=String("nocursor"!=val)
},ContentEditableInput.prototype.onContextMenu=function(){},
ContentEditableInput.prototype.resetPosition=function(){},
ContentEditableInput.prototype.needsContentAttribute=!0
;var TextareaInput=function(cm){
this.cm=cm,this.prevInput="",this.pollingFast=!1,
this.polling=new Delayed,this.hasSelection=!1,
this.composing=null}
;TextareaInput.prototype.init=function(display){
var this$1=this,input=this,cm=this.cm
;this.createField(display);var te=this.textarea
;function prepareCopyCut(e){
if(!signalDOMEvent(cm,e)){
if(cm.somethingSelected())setLastCopied({
lineWise:!1,text:cm.getSelections()});else{
if(!cm.options.lineWiseCopyCut)return
;var ranges=copyableRanges(cm);setLastCopied({
lineWise:!0,text:ranges.text
}),"cut"==e.type?cm.setSelections(ranges.ranges,null,sel_dontScroll):(input.prevInput="",
te.value=ranges.text.join("\n"),selectInput(te))}
"cut"==e.type&&(cm.state.cutIncoming=+new Date)}}
display.wrapper.insertBefore(this.wrapper,display.wrapper.firstChild),
ios&&(te.style.width="0px"),
on(te,"input",function(){
ie&&ie_version>=9&&this$1.hasSelection&&(this$1.hasSelection=null),
input.poll()}),on(te,"paste",function(e){
signalDOMEvent(cm,e)||handlePaste(e,cm)||(cm.state.pasteIncoming=+new Date,
input.fastPoll())
}),on(te,"cut",prepareCopyCut),on(te,"copy",prepareCopyCut),on(display.scroller,"paste",function(e){
if(!eventInWidget(display,e)&&!signalDOMEvent(cm,e)){
if(!te.dispatchEvent)return cm.state.pasteIncoming=+new Date,
void input.focus();var event=new Event("paste")
;event.clipboardData=e.clipboardData,
te.dispatchEvent(event)}
}),on(display.lineSpace,"selectstart",function(e){
eventInWidget(display,e)||e_preventDefault(e)
}),on(te,"compositionstart",function(){
var start=cm.getCursor("from")
;input.composing&&input.composing.range.clear(),input.composing={
start:start,
range:cm.markText(start,cm.getCursor("to"),{
className:"CodeMirror-composing"})}
}),on(te,"compositionend",function(){
input.composing&&(input.poll(),input.composing.range.clear(),
input.composing=null)})
},TextareaInput.prototype.createField=function(_display){
this.wrapper=hiddenTextarea(),
this.textarea=this.wrapper.firstChild
},TextareaInput.prototype.prepareSelection=function(){
var cm=this.cm,display=cm.display,doc=cm.doc,result=prepareSelection(cm)
;if(cm.options.moveInputWithCursor){
var headPos=_cursorCoords(cm,doc.sel.primary().head,"div"),wrapOff=display.wrapper.getBoundingClientRect(),lineOff=display.lineDiv.getBoundingClientRect()
;result.teTop=Math.max(0,Math.min(display.wrapper.clientHeight-10,headPos.top+lineOff.top-wrapOff.top)),
result.teLeft=Math.max(0,Math.min(display.wrapper.clientWidth-10,headPos.left+lineOff.left-wrapOff.left))
}return result
},TextareaInput.prototype.showSelection=function(drawn){
var cm=this.cm,display=cm.display
;removeChildrenAndAdd(display.cursorDiv,drawn.cursors),
removeChildrenAndAdd(display.selectionDiv,drawn.selection),
null!=drawn.teTop&&(this.wrapper.style.top=drawn.teTop+"px",
this.wrapper.style.left=drawn.teLeft+"px")
},TextareaInput.prototype.reset=function(typing){
if(!this.contextMenuPending&&!this.composing){
var cm=this.cm;if(cm.somethingSelected()){
this.prevInput="";var content=cm.getSelection()
;this.textarea.value=content,cm.state.focused&&selectInput(this.textarea),
ie&&ie_version>=9&&(this.hasSelection=content)
}else typing||(this.prevInput=this.textarea.value="",
ie&&ie_version>=9&&(this.hasSelection=null))}
},TextareaInput.prototype.getField=function(){
return this.textarea
},TextareaInput.prototype.supportsTouch=function(){
return!1
},TextareaInput.prototype.focus=function(){
if("nocursor"!=this.cm.options.readOnly&&(!mobile||activeElt()!=this.textarea))try{
this.textarea.focus()}catch(e){}
},TextareaInput.prototype.blur=function(){
this.textarea.blur()
},TextareaInput.prototype.resetPosition=function(){
this.wrapper.style.top=this.wrapper.style.left=0
},TextareaInput.prototype.receivedFocus=function(){
this.slowPoll()
},TextareaInput.prototype.slowPoll=function(){
var this$1=this
;this.pollingFast||this.polling.set(this.cm.options.pollInterval,function(){
this$1.poll(),
this$1.cm.state.focused&&this$1.slowPoll()})
},TextareaInput.prototype.fastPoll=function(){
var missed=!1,input=this
;input.pollingFast=!0,input.polling.set(20,function p(){
var changed=input.poll()
;changed||missed?(input.pollingFast=!1,input.slowPoll()):(missed=!0,
input.polling.set(60,p))})
},TextareaInput.prototype.poll=function(){
var this$1=this,cm=this.cm,input=this.textarea,prevInput=this.prevInput
;if(this.contextMenuPending||!cm.state.focused||hasSelection(input)&&!prevInput&&!this.composing||cm.isReadOnly()||cm.options.disableInput||cm.state.keySeq)return!1
;var text=input.value
;if(text==prevInput&&!cm.somethingSelected())return!1
;if(ie&&ie_version>=9&&this.hasSelection===text||mac&&/[\uf700-\uf7ff]/.test(text))return cm.display.input.reset(),
!1;if(cm.doc.sel==cm.display.selForContextMenu){
var first=text.charCodeAt(0)
;if(8203!=first||prevInput||(prevInput="​"),8666==first)return this.reset(),
this.cm.execCommand("undo")}
for(var same=0,l=Math.min(prevInput.length,text.length);same<l&&prevInput.charCodeAt(same)==text.charCodeAt(same);)++same
;return runInOp(cm,function(){
applyTextInput(cm,text.slice(same),prevInput.length-same,null,this$1.composing?"*compose":null),
text.length>1e3||text.indexOf("\n")>-1?input.value=this$1.prevInput="":this$1.prevInput=text,
this$1.composing&&(this$1.composing.range.clear(),
this$1.composing.range=cm.markText(this$1.composing.start,cm.getCursor("to"),{
className:"CodeMirror-composing"}))}),!0
},TextareaInput.prototype.ensurePolled=function(){
this.pollingFast&&this.poll()&&(this.pollingFast=!1)
},TextareaInput.prototype.onKeyPress=function(){
ie&&ie_version>=9&&(this.hasSelection=null),
this.fastPoll()
},TextareaInput.prototype.onContextMenu=function(e){
var input=this,cm=input.cm,display=cm.display,te=input.textarea
;input.contextMenuPending&&input.contextMenuPending()
;var pos=posFromMouse(cm,e),scrollPos=display.scroller.scrollTop
;if(pos&&!presto){
var reset=cm.options.resetSelectionOnContextMenu
;reset&&-1==cm.doc.sel.contains(pos)&&operation(cm,setSelection)(cm.doc,simpleSelection(pos),sel_dontScroll)
;var oldScrollY,oldCSS=te.style.cssText,oldWrapperCSS=input.wrapper.style.cssText,wrapperBox=input.wrapper.offsetParent.getBoundingClientRect()
;input.wrapper.style.cssText="position: static",
te.style.cssText="position: absolute; width: 30px; height: 30px;\n      top: "+(e.clientY-wrapperBox.top-5)+"px; left: "+(e.clientX-wrapperBox.left-5)+"px;\n      z-index: 1000; background: "+(ie?"rgba(255, 255, 255, .05)":"transparent")+";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);",
webkit&&(oldScrollY=window.scrollY),
display.input.focus(),webkit&&window.scrollTo(null,oldScrollY),
display.input.reset(),
cm.somethingSelected()||(te.value=input.prevInput=" "),input.contextMenuPending=rehide,
display.selForContextMenu=cm.doc.sel,
clearTimeout(display.detectingSelectAll),ie&&ie_version>=9&&prepareSelectAllHack(),
captureRightClick?(e_stop(e),
on(window,"mouseup",function mouseup(){
off(window,"mouseup",mouseup),setTimeout(rehide,20)
})):setTimeout(rehide,50)}
function prepareSelectAllHack(){
if(null!=te.selectionStart){
var selected=cm.somethingSelected(),extval="​"+(selected?te.value:"")
;te.value="⇚",
te.value=extval,input.prevInput=selected?"":"​",te.selectionStart=1,
te.selectionEnd=extval.length,
display.selForContextMenu=cm.doc.sel}}
function rehide(){
if(input.contextMenuPending==rehide&&(input.contextMenuPending=!1,
input.wrapper.style.cssText=oldWrapperCSS,
te.style.cssText=oldCSS,ie&&ie_version<9&&display.scrollbars.setScrollTop(display.scroller.scrollTop=scrollPos),
null!=te.selectionStart)){
(!ie||ie&&ie_version<9)&&prepareSelectAllHack()
;var i=0
;display.detectingSelectAll=setTimeout(function poll(){
display.selForContextMenu==cm.doc.sel&&0==te.selectionStart&&te.selectionEnd>0&&"​"==input.prevInput?operation(cm,selectAll)(cm):i++<10?display.detectingSelectAll=setTimeout(poll,500):(display.selForContextMenu=null,
display.input.reset())},200)}}
},TextareaInput.prototype.readOnlyChanged=function(val){
val||this.reset(),this.textarea.disabled="nocursor"==val
},TextareaInput.prototype.setUneditable=function(){},
TextareaInput.prototype.needsContentAttribute=!1,
function(CodeMirror){
var optionHandlers=CodeMirror.optionHandlers
;function option(name,deflt,handle,notOnInit){
CodeMirror.defaults[name]=deflt,handle&&(optionHandlers[name]=notOnInit?function(cm,val,old){
old!=Init&&handle(cm,val,old)}:handle)}
CodeMirror.defineOption=option,CodeMirror.Init=Init,
option("value","",function(cm,val){
return cm.setValue(val)
},!0),option("mode",null,function(cm,val){
cm.doc.modeOption=val,loadMode(cm)
},!0),option("indentUnit",2,loadMode,!0),option("indentWithTabs",!1),
option("smartIndent",!0),
option("tabSize",4,function(cm){
resetModeState(cm),clearCaches(cm),regChange(cm)
},!0),option("lineSeparator",null,function(cm,val){
if(cm.doc.lineSep=val,val){
var newBreaks=[],lineNo=cm.doc.first
;cm.doc.iter(function(line){for(var pos=0;;){
var found=line.text.indexOf(val,pos)
;if(-1==found)break
;pos=found+val.length,newBreaks.push(Pos(lineNo,found))
}lineNo++})
;for(var i=newBreaks.length-1;i>=0;i--)_replaceRange(cm.doc,val,newBreaks[i],Pos(newBreaks[i].line,newBreaks[i].ch+val.length))
}
}),option("specialChars",/[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g,function(cm,val,old){
cm.state.specialChars=new RegExp(val.source+(val.test("\t")?"":"|\t"),"g"),
old!=Init&&cm.refresh()
}),option("specialCharPlaceholder",defaultSpecialCharPlaceholder,function(cm){
return cm.refresh()
},!0),option("electricChars",!0),option("inputStyle",mobile?"contenteditable":"textarea",function(){
throw new Error("inputStyle can not (yet) be changed in a running editor")
},!0),option("spellcheck",!1,function(cm,val){
return cm.getInputField().spellcheck=val
},!0),option("autocorrect",!1,function(cm,val){
return cm.getInputField().autocorrect=val
},!0),option("autocapitalize",!1,function(cm,val){
return cm.getInputField().autocapitalize=val
},!0),option("rtlMoveVisually",!windows),
option("wholeLineUpdateBefore",!0),option("theme","default",function(cm){
themeChanged(cm),guttersChanged(cm)
},!0),option("keyMap","default",function(cm,val,old){
var next=getKeyMap(val),prev=old!=Init&&getKeyMap(old)
;prev&&prev.detach&&prev.detach(cm,next),
next.attach&&next.attach(cm,prev||null)
}),option("extraKeys",null),option("configureMouse",null),
option("lineWrapping",!1,wrappingChanged,!0),
option("gutters",[],function(cm){
setGuttersForLineNumbers(cm.options),guttersChanged(cm)
},!0),option("fixedGutter",!0,function(cm,val){
cm.display.gutters.style.left=val?compensateForHScroll(cm.display)+"px":"0",
cm.refresh()
},!0),option("coverGutterNextToScrollbar",!1,function(cm){
return updateScrollbars(cm)
},!0),option("scrollbarStyle","native",function(cm){
initScrollbars(cm),updateScrollbars(cm),
cm.display.scrollbars.setScrollTop(cm.doc.scrollTop),
cm.display.scrollbars.setScrollLeft(cm.doc.scrollLeft)
},!0),option("lineNumbers",!1,function(cm){
setGuttersForLineNumbers(cm.options),
guttersChanged(cm)
},!0),option("firstLineNumber",1,guttersChanged,!0),option("lineNumberFormatter",function(integer){
return integer
},guttersChanged,!0),option("showCursorWhenSelecting",!1,updateSelection,!0),
option("resetSelectionOnContextMenu",!0),
option("lineWiseCopyCut",!0),option("pasteLinesPerSelection",!0),
option("selectionsMayTouch",!1),
option("readOnly",!1,function(cm,val){
"nocursor"==val&&(onBlur(cm),cm.display.input.blur()),
cm.display.input.readOnlyChanged(val)
}),option("disableInput",!1,function(cm,val){
val||cm.display.input.reset()
},!0),option("dragDrop",!0,dragDropChanged),option("allowDropFileTypes",null),
option("cursorBlinkRate",530),
option("cursorScrollMargin",0),option("cursorHeight",1,updateSelection,!0),
option("singleCursorHeightPerLine",!0,updateSelection,!0),
option("workTime",100),
option("workDelay",100),option("flattenSpans",!0,resetModeState,!0),
option("addModeClass",!1,resetModeState,!0),
option("pollInterval",100),option("undoDepth",200,function(cm,val){
return cm.doc.history.undoDepth=val
}),option("historyEventDelay",1250),option("viewportMargin",10,function(cm){
return cm.refresh()
},!0),option("maxHighlightLength",1e4,resetModeState,!0),option("moveInputWithCursor",!0,function(cm,val){
val||cm.display.input.resetPosition()
}),option("tabindex",null,function(cm,val){
return cm.display.input.getField().tabIndex=val||""
}),option("autofocus",null),option("direction","ltr",function(cm,val){
return cm.doc.setDirection(val)
},!0),option("phrases",null)
}(CodeMirror),function(CodeMirror){
var optionHandlers=CodeMirror.optionHandlers,helpers=CodeMirror.helpers={}
;CodeMirror.prototype={constructor:CodeMirror,
focus:function(){
window.focus(),this.display.input.focus()},
setOption:function(option,value){
var options=this.options,old=options[option]
;options[option]==value&&"mode"!=option||(options[option]=value,
optionHandlers.hasOwnProperty(option)&&operation(this,optionHandlers[option])(this,value,old),
signal(this,"optionChange",this,option))},
getOption:function(option){
return this.options[option]},getDoc:function(){
return this.doc},
addKeyMap:function(map$$1,bottom){
this.state.keyMaps[bottom?"push":"unshift"](getKeyMap(map$$1))
},removeKeyMap:function(map$$1){
for(var maps=this.state.keyMaps,i=0;i<maps.length;++i)if(maps[i]==map$$1||maps[i].name==map$$1)return maps.splice(i,1),
!0},addOverlay:methodOp(function(spec,options){
var mode=spec.token?spec:CodeMirror.getMode(this.options,spec)
;if(mode.startState)throw new Error("Overlays may not be stateful.")
;!function(array,value,score){
for(var pos=0,priority=score(value);pos<array.length&&score(array[pos])<=priority;)pos++
;array.splice(pos,0,value)}(this.state.overlays,{
mode:mode,modeSpec:spec,
opaque:options&&options.opaque,
priority:options&&options.priority||0
},function(overlay){return overlay.priority
}),this.state.modeGen++,regChange(this)}),
removeOverlay:methodOp(function(spec){
for(var overlays=this.state.overlays,i=0;i<overlays.length;++i){
var cur=overlays[i].modeSpec
;if(cur==spec||"string"==typeof spec&&cur.name==spec)return overlays.splice(i,1),
this.state.modeGen++,void regChange(this)}}),
indentLine:methodOp(function(n,dir,aggressive){
"string"!=typeof dir&&"number"!=typeof dir&&(dir=null==dir?this.options.smartIndent?"smart":"prev":dir?"add":"subtract"),
isLine(this.doc,n)&&indentLine(this,n,dir,aggressive)
}),indentSelection:methodOp(function(how){
for(var ranges=this.doc.sel.ranges,end=-1,i=0;i<ranges.length;i++){
var range$$1=ranges[i]
;if(range$$1.empty())range$$1.head.line>end&&(indentLine(this,range$$1.head.line,how,!0),
end=range$$1.head.line,
i==this.doc.sel.primIndex&&ensureCursorVisible(this));else{
var from=range$$1.from(),to=range$$1.to(),start=Math.max(end,from.line)
;end=Math.min(this.lastLine(),to.line-(to.ch?0:1))+1
;for(var j=start;j<end;++j)indentLine(this,j,how)
;var newRanges=this.doc.sel.ranges
;0==from.ch&&ranges.length==newRanges.length&&newRanges[i].from().ch>0&&replaceOneSelection(this.doc,i,new Range(from,newRanges[i].to()),sel_dontScroll)
}}}),getTokenAt:function(pos,precise){
return takeToken(this,pos,precise)},
getLineTokens:function(line,precise){
return takeToken(this,Pos(line),precise,!0)},
getTokenTypeAt:function(pos){
pos=_clipPos(this.doc,pos)
;var type,styles=getLineStyles(this,getLine(this.doc,pos.line)),before=0,after=(styles.length-1)/2,ch=pos.ch
;if(0==ch)type=styles[2];else for(;;){
var mid=before+after>>1
;if((mid?styles[2*mid-1]:0)>=ch)after=mid;else{
if(!(styles[2*mid+1]<ch)){type=styles[2*mid+2]
;break}before=mid+1}}
var cut=type?type.indexOf("overlay "):-1
;return cut<0?type:0==cut?null:type.slice(0,cut-1)
},getModeAt:function(pos){var mode=this.doc.mode
;return mode.innerMode?CodeMirror.innerMode(mode,this.getTokenAt(pos).state).mode:mode
},getHelper:function(pos,type){
return this.getHelpers(pos,type)[0]},
getHelpers:function(pos,type){var found=[]
;if(!helpers.hasOwnProperty(type))return found
;var help=helpers[type],mode=this.getModeAt(pos)
;if("string"==typeof mode[type])help[mode[type]]&&found.push(help[mode[type]]);else if(mode[type])for(var i=0;i<mode[type].length;i++){
var val=help[mode[type][i]];val&&found.push(val)
}else mode.helperType&&help[mode.helperType]?found.push(help[mode.helperType]):help[mode.name]&&found.push(help[mode.name])
;for(var i$1=0;i$1<help._global.length;i$1++){
var cur=help._global[i$1]
;cur.pred(mode,this)&&-1==indexOf(found,cur.val)&&found.push(cur.val)
}return found},
getStateAfter:function(line,precise){
var doc=this.doc
;return getContextBefore(this,(line=clipLine(doc,null==line?doc.first+doc.size-1:line))+1,precise).state
},cursorCoords:function(start,mode){
var range$$1=this.doc.sel.primary()
;return _cursorCoords(this,null==start?range$$1.head:"object"==_typeof(start)?_clipPos(this.doc,start):start?range$$1.from():range$$1.to(),mode||"page")
},charCoords:function(pos,mode){
return _charCoords(this,_clipPos(this.doc,pos),mode||"page")
},coordsChar:function(coords,mode){
return _coordsChar(this,(coords=fromCoordSystem(this,coords,mode||"page")).left,coords.top)
},lineAtHeight:function(height,mode){
return height=fromCoordSystem(this,{top:height,
left:0
},mode||"page").top,_lineAtHeight(this.doc,height+this.display.viewOffset)
},heightAtLine:function(line,mode,includeWidgets){
var lineObj,end=!1;if("number"==typeof line){
var last=this.doc.first+this.doc.size-1
;line<this.doc.first?line=this.doc.first:line>last&&(line=last,
end=!0),lineObj=getLine(this.doc,line)
}else lineObj=line
;return intoCoordSystem(this,lineObj,{top:0,left:0
},mode||"page",includeWidgets||end).top+(end?this.doc.height-_heightAtLine(lineObj):0)
},defaultTextHeight:function(){
return textHeight(this.display)},
defaultCharWidth:function(){
return charWidth(this.display)},
getViewport:function(){return{
from:this.display.viewFrom,to:this.display.viewTo}
},addWidget:function(pos,node,scroll,vert,horiz){
var cm,rect,scrollPos,display=this.display,top=(pos=_cursorCoords(this,_clipPos(this.doc,pos))).bottom,left=pos.left
;if(node.style.position="absolute",
node.setAttribute("cm-ignore-events","true"),
this.display.input.setUneditable(node),
display.sizer.appendChild(node),"over"==vert)top=pos.top;else if("above"==vert||"near"==vert){
var vspace=Math.max(display.wrapper.clientHeight,this.doc.height),hspace=Math.max(display.sizer.clientWidth,display.lineSpace.clientWidth)
;("above"==vert||pos.bottom+node.offsetHeight>vspace)&&pos.top>node.offsetHeight?top=pos.top-node.offsetHeight:pos.bottom+node.offsetHeight<=vspace&&(top=pos.bottom),
left+node.offsetWidth>hspace&&(left=hspace-node.offsetWidth)
}
node.style.top=top+"px",node.style.left=node.style.right="","right"==horiz?(left=display.sizer.clientWidth-node.offsetWidth,
node.style.right="0px"):("left"==horiz?left=0:"middle"==horiz&&(left=(display.sizer.clientWidth-node.offsetWidth)/2),
node.style.left=left+"px"),scroll&&(cm=this,rect={
left:left,top:top,right:left+node.offsetWidth,
bottom:top+node.offsetHeight
},null!=(scrollPos=calculateScrollPos(cm,rect)).scrollTop&&updateScrollTop(cm,scrollPos.scrollTop),
null!=scrollPos.scrollLeft&&setScrollLeft(cm,scrollPos.scrollLeft))
},triggerOnKeyDown:methodOp(onKeyDown),
triggerOnKeyPress:methodOp(onKeyPress),
triggerOnKeyUp:onKeyUp,
triggerOnMouseDown:methodOp(onMouseDown),
execCommand:function(cmd){
if(commands.hasOwnProperty(cmd))return commands[cmd].call(null,this)
},triggerElectric:methodOp(function(text){
triggerElectric(this,text)}),
findPosH:function(from,amount,unit,visually){
var dir=1;amount<0&&(dir=-1,amount=-amount)
;for(var cur=_clipPos(this.doc,from),i=0;i<amount&&!(cur=_findPosH(this.doc,cur,dir,unit,visually)).hitSide;++i);
return cur},moveH:methodOp(function(dir,unit){
var this$1=this
;this.extendSelectionsBy(function(range$$1){
return this$1.display.shift||this$1.doc.extend||range$$1.empty()?_findPosH(this$1.doc,range$$1.head,dir,unit,this$1.options.rtlMoveVisually):dir<0?range$$1.from():range$$1.to()
},sel_move)}),deleteH:methodOp(function(dir,unit){
var sel=this.doc.sel,doc=this.doc
;sel.somethingSelected()?doc.replaceSelection("",null,"+delete"):deleteNearSelection(this,function(range$$1){
var other=_findPosH(doc,range$$1.head,dir,unit,!1)
;return dir<0?{from:other,to:range$$1.head}:{
from:range$$1.head,to:other}})}),
findPosV:function(from,amount,unit,goalColumn){
var dir=1,x=goalColumn
;amount<0&&(dir=-1,amount=-amount)
;for(var cur=_clipPos(this.doc,from),i=0;i<amount;++i){
var coords=_cursorCoords(this,cur,"div")
;if(null==x?x=coords.left:coords.left=x,
(cur=_findPosV(this,coords,dir,unit)).hitSide)break
}return cur},moveV:methodOp(function(dir,unit){
var this$1=this,doc=this.doc,goals=[],collapse=!this.display.shift&&!doc.extend&&doc.sel.somethingSelected()
;if(doc.extendSelectionsBy(function(range$$1){
if(collapse)return dir<0?range$$1.from():range$$1.to()
;var headPos=_cursorCoords(this$1,range$$1.head,"div")
;null!=range$$1.goalColumn&&(headPos.left=range$$1.goalColumn),
goals.push(headPos.left)
;var pos=_findPosV(this$1,headPos,dir,unit)
;return"page"==unit&&range$$1==doc.sel.primary()&&addToScrollTop(this$1,_charCoords(this$1,pos,"div").top-headPos.top),
pos
},sel_move),goals.length)for(var i=0;i<doc.sel.ranges.length;i++)doc.sel.ranges[i].goalColumn=goals[i]
}),findWordAt:function(pos){
var doc=this.doc,line=getLine(doc,pos.line).text,start=pos.ch,end=pos.ch
;if(line){
var helper=this.getHelper(pos,"wordChars")
;"before"!=pos.sticky&&end!=line.length||!start?++end:--start
;for(var startChar=line.charAt(start),check=isWordChar(startChar,helper)?function(ch){
return isWordChar(ch,helper)
}:/\s/.test(startChar)?function(ch){
return/\s/.test(ch)}:function(ch){
return!/\s/.test(ch)&&!isWordChar(ch)
};start>0&&check(line.charAt(start-1));)--start
;for(;end<line.length&&check(line.charAt(end));)++end
}
return new Range(Pos(pos.line,start),Pos(pos.line,end))
},toggleOverwrite:function(value){
null!=value&&value==this.state.overwrite||((this.state.overwrite=!this.state.overwrite)?addClass(this.display.cursorDiv,"CodeMirror-overwrite"):rmClass(this.display.cursorDiv,"CodeMirror-overwrite"),
signal(this,"overwriteToggle",this,this.state.overwrite))
},hasFocus:function(){
return this.display.input.getField()==activeElt()
},isReadOnly:function(){
return!(!this.options.readOnly&&!this.doc.cantEdit)
},scrollTo:methodOp(function(x,y){
scrollToCoords(this,x,y)}),
getScrollInfo:function(){
var scroller=this.display.scroller;return{
left:scroller.scrollLeft,top:scroller.scrollTop,
height:scroller.scrollHeight-scrollGap(this)-this.display.barHeight,
width:scroller.scrollWidth-scrollGap(this)-this.display.barWidth,
clientHeight:displayHeight(this),
clientWidth:displayWidth(this)}},
scrollIntoView:methodOp(function(range$$1,margin){
null==range$$1?(range$$1={
from:this.doc.sel.primary().head,to:null
},null==margin&&(margin=this.options.cursorScrollMargin)):"number"==typeof range$$1?range$$1={
from:Pos(range$$1,0),to:null
}:null==range$$1.from&&(range$$1={from:range$$1,
to:null
}),range$$1.to||(range$$1.to=range$$1.from),range$$1.margin=margin||0,null!=range$$1.from.line?function(cm,range$$1){
resolveScrollToPos(cm),
cm.curOp.scrollToPos=range$$1
}(this,range$$1):scrollToCoordsRange(this,range$$1.from,range$$1.to,range$$1.margin)
}),setSize:methodOp(function(width,height){
var this$1=this,interpret=function(val){
return"number"==typeof val||/^\d+$/.test(String(val))?val+"px":val
}
;null!=width&&(this.display.wrapper.style.width=interpret(width)),null!=height&&(this.display.wrapper.style.height=interpret(height)),
this.options.lineWrapping&&clearLineMeasurementCache(this)
;var lineNo$$1=this.display.viewFrom
;this.doc.iter(lineNo$$1,this.display.viewTo,function(line){
if(line.widgets)for(var i=0;i<line.widgets.length;i++)if(line.widgets[i].noHScroll){
regLineChange(this$1,lineNo$$1,"widget");break}
++lineNo$$1
}),this.curOp.forceUpdate=!0,signal(this,"refresh",this)
}),operation:function(f){return runInOp(this,f)},
startOperation:function(){
return _startOperation(this)},
endOperation:function(){return _endOperation(this)
},refresh:methodOp(function(){
var oldHeight=this.display.cachedTextHeight
;regChange(this),this.curOp.forceUpdate=!0,
clearCaches(this),scrollToCoords(this,this.doc.scrollLeft,this.doc.scrollTop),
updateGutterSpace(this),
(null==oldHeight||Math.abs(oldHeight-textHeight(this.display))>.5)&&estimateLineHeights(this),
signal(this,"refresh",this)}),
swapDoc:methodOp(function(doc){var old=this.doc
;return old.cm=null,attachDoc(this,doc),
clearCaches(this),this.display.input.reset(),
scrollToCoords(this,doc.scrollLeft,doc.scrollTop),
this.curOp.forceScroll=!0,signalLater(this,"swapDoc",this,old),
old}),phrase:function(phraseText){
var phrases=this.options.phrases
;return phrases&&Object.prototype.hasOwnProperty.call(phrases,phraseText)?phrases[phraseText]:phraseText
},getInputField:function(){
return this.display.input.getField()},
getWrapperElement:function(){
return this.display.wrapper},
getScrollerElement:function(){
return this.display.scroller},
getGutterElement:function(){
return this.display.gutters}
},eventMixin(CodeMirror),CodeMirror.registerHelper=function(type,name,value){
helpers.hasOwnProperty(type)||(helpers[type]=CodeMirror[type]={
_global:[]}),helpers[type][name]=value
},CodeMirror.registerGlobalHelper=function(type,name,predicate,value){
CodeMirror.registerHelper(type,name,value),
helpers[type]._global.push({pred:predicate,
val:value})}}(CodeMirror)
;var dontDelegate="iter insert remove copy getEditor constructor".split(" ")
;for(var prop in Doc.prototype)Doc.prototype.hasOwnProperty(prop)&&indexOf(dontDelegate,prop)<0&&(CodeMirror.prototype[prop]=function(method){
return function(){
return method.apply(this.doc,arguments)}
}(Doc.prototype[prop]))
;return eventMixin(Doc),CodeMirror.inputStyles={
textarea:TextareaInput,
contenteditable:ContentEditableInput
},CodeMirror.defineMode=function(name){
CodeMirror.defaults.mode||"null"==name||(CodeMirror.defaults.mode=name),
function(name,mode){
arguments.length>2&&(mode.dependencies=Array.prototype.slice.call(arguments,2)),
modes[name]=mode}.apply(this,arguments)
},CodeMirror.defineMIME=function(mime,spec){
mimeModes[mime]=spec
},CodeMirror.defineMode("null",function(){return{
token:function(stream){return stream.skipToEnd()}}
}),CodeMirror.defineMIME("text/plain","null"),
CodeMirror.defineExtension=function(name,func){
CodeMirror.prototype[name]=func
},CodeMirror.defineDocExtension=function(name,func){
Doc.prototype[name]=func
},CodeMirror.fromTextArea=function(textarea,options){
if((options=options?copyObj(options):{}).value=textarea.value,
!options.tabindex&&textarea.tabIndex&&(options.tabindex=textarea.tabIndex),
!options.placeholder&&textarea.placeholder&&(options.placeholder=textarea.placeholder),
null==options.autofocus){var hasFocus=activeElt()
;options.autofocus=hasFocus==textarea||null!=textarea.getAttribute("autofocus")&&hasFocus==document.body
}function save(){textarea.value=cm.getValue()}
var realSubmit
;if(textarea.form&&(on(textarea.form,"submit",save),!options.leaveSubmitMethodAlone)){
var form=textarea.form;realSubmit=form.submit;try{
var wrappedSubmit=form.submit=function(){
save(),form.submit=realSubmit,form.submit(),
form.submit=wrappedSubmit}}catch(e){}}
options.finishInit=function(cm){
cm.save=save,cm.getTextArea=function(){
return textarea},cm.toTextArea=function(){
cm.toTextArea=isNaN,save(),textarea.parentNode.removeChild(cm.getWrapperElement()),
textarea.style.display="",
textarea.form&&(off(textarea.form,"submit",save),"function"==typeof textarea.form.submit&&(textarea.form.submit=realSubmit))
}},textarea.style.display="none"
;var cm=CodeMirror(function(node){
return textarea.parentNode.insertBefore(node,textarea.nextSibling)
},options);return cm},function(CodeMirror){
CodeMirror.off=off,CodeMirror.on=on,CodeMirror.wheelEventPixels=wheelEventPixels,
CodeMirror.Doc=Doc,
CodeMirror.splitLines=splitLinesAuto,CodeMirror.countColumn=countColumn,
CodeMirror.findColumn=findColumn,
CodeMirror.isWordChar=isWordCharBasic,CodeMirror.Pass=Pass,
CodeMirror.signal=signal,
CodeMirror.Line=Line,CodeMirror.changeEnd=changeEnd,CodeMirror.scrollbarModel=scrollbarModel,
CodeMirror.Pos=Pos,
CodeMirror.cmpPos=cmp,CodeMirror.modes=modes,CodeMirror.mimeModes=mimeModes,
CodeMirror.resolveMode=resolveMode,
CodeMirror.getMode=getMode,CodeMirror.modeExtensions=modeExtensions,
CodeMirror.extendMode=extendMode,
CodeMirror.copyState=copyState,CodeMirror.startState=startState,
CodeMirror.innerMode=innerMode,
CodeMirror.commands=commands,CodeMirror.keyMap=keyMap,
CodeMirror.keyName=keyName,
CodeMirror.isModifierKey=isModifierKey,CodeMirror.lookupKey=lookupKey,
CodeMirror.normalizeKeyMap=normalizeKeyMap,
CodeMirror.StringStream=StringStream,
CodeMirror.SharedTextMarker=SharedTextMarker,
CodeMirror.TextMarker=TextMarker,CodeMirror.LineWidget=LineWidget,
CodeMirror.e_preventDefault=e_preventDefault,
CodeMirror.e_stopPropagation=e_stopPropagation,
CodeMirror.e_stop=e_stop,CodeMirror.addClass=addClass,
CodeMirror.contains=contains,
CodeMirror.rmClass=rmClass,CodeMirror.keyNames=keyNames
}(CodeMirror),CodeMirror.version="5.44.0",
CodeMirror}()
}),_codemirror=(createCommonjsModule(function(module,exports){
var CodeMirror
;(CodeMirror=codemirror).defineMode("javascript",function(config,parserConfig){
var type,content,indentUnit=config.indentUnit,statementIndent=parserConfig.statementIndent,jsonldMode=parserConfig.jsonld,jsonMode=parserConfig.json||jsonldMode,isTS=parserConfig.typescript,wordRE=parserConfig.wordCharacters||/[\w$\xa1-\uffff]/,keywords=function(){
function kw(type){return{type:type,style:"keyword"
}}
var A=kw("keyword a"),B=kw("keyword b"),C=kw("keyword c"),D=kw("keyword d"),operator=kw("operator"),atom={
type:"atom",style:"atom"};return{if:kw("if"),
while:A,with:A,else:B,do:B,try:B,finally:B,
return:D,break:D,continue:D,new:kw("new"),
delete:C,void:C,throw:C,debugger:kw("debugger"),
var:kw("var"),const:kw("var"),let:kw("var"),
function:kw("function"),catch:kw("catch"),
for:kw("for"),switch:kw("switch"),case:kw("case"),
default:kw("default"),in:operator,typeof:operator,
instanceof:operator,true:atom,false:atom,
null:atom,undefined:atom,NaN:atom,Infinity:atom,
this:kw("this"),class:kw("class"),
super:kw("atom"),yield:C,export:kw("export"),
import:kw("import"),extends:C,await:C}
}(),isOperatorChar=/[+\-*&%=<>!?|~^@]/,isJsonldKeyword=/^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/
;function ret(tp,style,cont){
return type=tp,content=cont,style}
function tokenBase(stream,state){
var quote,ch=stream.next()
;if('"'==ch||"'"==ch)return state.tokenize=(quote=ch,function(stream,state){
var next,escaped=!1
;if(jsonldMode&&"@"==stream.peek()&&stream.match(isJsonldKeyword))return state.tokenize=tokenBase,
ret("jsonld-keyword","meta")
;for(;null!=(next=stream.next())&&(next!=quote||escaped);)escaped=!escaped&&"\\"==next
;return escaped||(state.tokenize=tokenBase),
ret("string","string")
}),state.tokenize(stream,state)
;if("."==ch&&stream.match(/^\d+(?:[eE][+\-]?\d+)?/))return ret("number","number")
;if("."==ch&&stream.match(".."))return ret("spread","meta")
;if(/[\[\]{}\(\),;\:\.]/.test(ch))return ret(ch)
;if("="==ch&&stream.eat(">"))return ret("=>","operator")
;if("0"==ch&&stream.match(/^(?:x[\da-f]+|o[0-7]+|b[01]+)n?/i))return ret("number","number")
;if(/\d/.test(ch))return stream.match(/^\d*(?:n|(?:\.\d*)?(?:[eE][+\-]?\d+)?)?/),
ret("number","number")
;if("/"==ch)return stream.eat("*")?(state.tokenize=tokenComment,
tokenComment(stream,state)):stream.eat("/")?(stream.skipToEnd(),
ret("comment","comment")):expressionAllowed(stream,state,1)?(function(stream){
for(var next,escaped=!1,inSet=!1;null!=(next=stream.next());){
if(!escaped){if("/"==next&&!inSet)return
;"["==next?inSet=!0:inSet&&"]"==next&&(inSet=!1)}
escaped=!escaped&&"\\"==next}
}(stream),stream.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
ret("regexp","string-2")):(stream.eat("="),
ret("operator","operator",stream.current()))
;if("`"==ch)return state.tokenize=tokenQuasi,
tokenQuasi(stream,state)
;if("#"==ch)return stream.skipToEnd(),ret("error","error")
;if(isOperatorChar.test(ch))return">"==ch&&state.lexical&&">"==state.lexical.type||(stream.eat("=")?"!"!=ch&&"="!=ch||stream.eat("="):/[<>*+\-]/.test(ch)&&(stream.eat(ch),
">"==ch&&stream.eat(ch))),
ret("operator","operator",stream.current())
;if(wordRE.test(ch)){stream.eatWhile(wordRE)
;var word=stream.current()
;if("."!=state.lastType){
if(keywords.propertyIsEnumerable(word)){
var kw=keywords[word]
;return ret(kw.type,kw.style,word)}
if("async"==word&&stream.match(/^(\s|\/\*.*?\*\/)*[\[\(\w]/,!1))return ret("async","keyword",word)
}return ret("variable","variable",word)}}
function tokenComment(stream,state){
for(var ch,maybeEnd=!1;ch=stream.next();){
if("/"==ch&&maybeEnd){state.tokenize=tokenBase
;break}maybeEnd="*"==ch}
return ret("comment","comment")}
function tokenQuasi(stream,state){
for(var next,escaped=!1;null!=(next=stream.next());){
if(!escaped&&("`"==next||"$"==next&&stream.eat("{"))){
state.tokenize=tokenBase;break}
escaped=!escaped&&"\\"==next}
return ret("quasi","string-2",stream.current())}
var brackets="([{}])"
;function findFatArrow(stream,state){
state.fatArrowAt&&(state.fatArrowAt=null)
;var arrow=stream.string.indexOf("=>",stream.start)
;if(!(arrow<0)){if(isTS){
var m=/:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(stream.string.slice(stream.start,arrow))
;m&&(arrow=m.index)}
for(var depth=0,sawSomething=!1,pos=arrow-1;pos>=0;--pos){
var ch=stream.string.charAt(pos),bracket=brackets.indexOf(ch)
;if(bracket>=0&&bracket<3){if(!depth){++pos;break}
if(0==--depth){"("==ch&&(sawSomething=!0);break}
}else if(bracket>=3&&bracket<6)++depth;else if(wordRE.test(ch))sawSomething=!0;else{
if(/["'\/]/.test(ch))return
;if(sawSomething&&!depth){++pos;break}}}
sawSomething&&!depth&&(state.fatArrowAt=pos)}}
var atomicTypes={atom:!0,number:!0,variable:!0,
string:!0,regexp:!0,this:!0,"jsonld-keyword":!0}
;function JSLexical(indented,column,type,align,prev,info){
this.indented=indented,
this.column=column,this.type=type,this.prev=prev,this.info=info,
null!=align&&(this.align=align)}
function inScope(state,varname){
for(var v=state.localVars;v;v=v.next)if(v.name==varname)return!0
;for(var cx=state.context;cx;cx=cx.prev)for(var v=cx.vars;v;v=v.next)if(v.name==varname)return!0
}var cx={state:null,column:null,marked:null,
cc:null};function pass(){
for(var i=arguments.length-1;i>=0;i--)cx.cc.push(arguments[i])
}function cont(){
return pass.apply(null,arguments),!0}
function inList(name,list){
for(var v=list;v;v=v.next)if(v.name==name)return!0
;return!1}function register(varname){
var state=cx.state
;if(cx.marked="def",state.context)if("var"==state.lexical.info&&state.context&&state.context.block){
var newContext=function registerVarScoped(varname,context){
if(context){if(context.block){
var inner=registerVarScoped(varname,context.prev)
;return inner?inner==context.prev?context:new Context(inner,context.vars,!0):null
}
return inList(varname,context.vars)?context:new Context(context.prev,new Var(varname,context.vars),!1)
}return null}(varname,state.context)
;if(null!=newContext)return void(state.context=newContext)
}else if(!inList(varname,state.localVars))return void(state.localVars=new Var(varname,state.localVars))
;parserConfig.globalVars&&!inList(varname,state.globalVars)&&(state.globalVars=new Var(varname,state.globalVars))
}function isModifier(name){
return"public"==name||"private"==name||"protected"==name||"abstract"==name||"readonly"==name
}function Context(prev,vars,block){
this.prev=prev,this.vars=vars,this.block=block}
function Var(name,next){
this.name=name,this.next=next}
var defaultVars=new Var("this",new Var("arguments",null))
;function pushcontext(){
cx.state.context=new Context(cx.state.context,cx.state.localVars,!1),
cx.state.localVars=defaultVars}
function pushblockcontext(){
cx.state.context=new Context(cx.state.context,cx.state.localVars,!0),
cx.state.localVars=null}function popcontext(){
cx.state.localVars=cx.state.context.vars,
cx.state.context=cx.state.context.prev}
function pushlex(type,info){var result=function(){
var state=cx.state,indent=state.indented
;if("stat"==state.lexical.type)indent=state.lexical.indented;else for(var outer=state.lexical;outer&&")"==outer.type&&outer.align;outer=outer.prev)indent=outer.indented
;state.lexical=new JSLexical(indent,cx.stream.column(),type,null,state.lexical,info)
};return result.lex=!0,result}function poplex(){
var state=cx.state
;state.lexical.prev&&(")"==state.lexical.type&&(state.indented=state.lexical.indented),
state.lexical=state.lexical.prev)}
function expect(wanted){return function exp(type){
return type==wanted?cont():";"==wanted||"}"==type||")"==type||"]"==type?pass():cont(exp)
}}function statement(type,value){
return"var"==type?cont(pushlex("vardef",value),vardef,expect(";"),poplex):"keyword a"==type?cont(pushlex("form"),parenExpr,statement,poplex):"keyword b"==type?cont(pushlex("form"),statement,poplex):"keyword d"==type?cx.stream.match(/^\s*$/,!1)?cont():cont(pushlex("stat"),maybeexpression,expect(";"),poplex):"debugger"==type?cont(expect(";")):"{"==type?cont(pushlex("}"),pushblockcontext,block,poplex,popcontext):";"==type?cont():"if"==type?("else"==cx.state.lexical.info&&cx.state.cc[cx.state.cc.length-1]==poplex&&cx.state.cc.pop()(),
cont(pushlex("form"),parenExpr,statement,poplex,maybeelse)):"function"==type?cont(functiondef):"for"==type?cont(pushlex("form"),forspec,statement,poplex):"class"==type||isTS&&"interface"==value?(cx.marked="keyword",
cont(pushlex("form","class"==type?type:value),className,poplex)):"variable"==type?isTS&&"declare"==value?(cx.marked="keyword",
cont(statement)):isTS&&("module"==value||"enum"==value||"type"==value)&&cx.stream.match(/^\s*\w/,!1)?(cx.marked="keyword",
"enum"==value?cont(enumdef):"type"==value?cont(typename,expect("operator"),typeexpr,expect(";")):cont(pushlex("form"),pattern,expect("{"),pushlex("}"),block,poplex,poplex)):isTS&&"namespace"==value?(cx.marked="keyword",
cont(pushlex("form"),expression,statement,poplex)):isTS&&"abstract"==value?(cx.marked="keyword",
cont(statement)):cont(pushlex("stat"),maybelabel):"switch"==type?cont(pushlex("form"),parenExpr,expect("{"),pushlex("}","switch"),pushblockcontext,block,poplex,poplex,popcontext):"case"==type?cont(expression,expect(":")):"default"==type?cont(expect(":")):"catch"==type?cont(pushlex("form"),pushcontext,maybeCatchBinding,statement,poplex,popcontext):"export"==type?cont(pushlex("stat"),afterExport,poplex):"import"==type?cont(pushlex("stat"),afterImport,poplex):"async"==type?cont(statement):"@"==value?cont(expression,statement):pass(pushlex("stat"),expression,expect(";"),poplex)
}function maybeCatchBinding(type){
if("("==type)return cont(funarg,expect(")"))}
function expression(type,value){
return expressionInner(type,value,!1)}
function expressionNoComma(type,value){
return expressionInner(type,value,!0)}
function parenExpr(type){
return"("!=type?pass():cont(pushlex(")"),expression,expect(")"),poplex)
}function expressionInner(type,value,noComma){
if(cx.state.fatArrowAt==cx.stream.start){
var body=noComma?arrowBodyNoComma:arrowBody
;if("("==type)return cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,expect("=>"),body,popcontext)
;if("variable"==type)return pass(pushcontext,pattern,expect("=>"),body,popcontext)
}
var maybeop=noComma?maybeoperatorNoComma:maybeoperatorComma
;return atomicTypes.hasOwnProperty(type)?cont(maybeop):"function"==type?cont(functiondef,maybeop):"class"==type||isTS&&"interface"==value?(cx.marked="keyword",
cont(pushlex("form"),classExpression,poplex)):"keyword c"==type||"async"==type?cont(noComma?expressionNoComma:expression):"("==type?cont(pushlex(")"),maybeexpression,expect(")"),poplex,maybeop):"operator"==type||"spread"==type?cont(noComma?expressionNoComma:expression):"["==type?cont(pushlex("]"),arrayLiteral,poplex,maybeop):"{"==type?contCommasep(objprop,"}",null,maybeop):"quasi"==type?pass(quasi,maybeop):"new"==type?cont(function(noComma){
return function(type){
return"."==type?cont(noComma?targetNoComma:target):"variable"==type&&isTS?cont(maybeTypeArgs,noComma?maybeoperatorNoComma:maybeoperatorComma):pass(noComma?expressionNoComma:expression)
}
}(noComma)):"import"==type?cont(expression):cont()
}function maybeexpression(type){
return type.match(/[;\}\)\],]/)?pass():pass(expression)
}function maybeoperatorComma(type,value){
return","==type?cont(expression):maybeoperatorNoComma(type,value,!1)
}
function maybeoperatorNoComma(type,value,noComma){
var me=0==noComma?maybeoperatorComma:maybeoperatorNoComma,expr=0==noComma?expression:expressionNoComma
;return"=>"==type?cont(pushcontext,noComma?arrowBodyNoComma:arrowBody,popcontext):"operator"==type?/\+\+|--/.test(value)||isTS&&"!"==value?cont(me):isTS&&"<"==value&&cx.stream.match(/^([^>]|<.*?>)*>\s*\(/,!1)?cont(pushlex(">"),commasep(typeexpr,">"),poplex,me):"?"==value?cont(expression,expect(":"),expr):cont(expr):"quasi"==type?pass(quasi,me):";"!=type?"("==type?contCommasep(expressionNoComma,")","call",me):"."==type?cont(property,me):"["==type?cont(pushlex("]"),maybeexpression,expect("]"),poplex,me):isTS&&"as"==value?(cx.marked="keyword",
cont(typeexpr,me)):"regexp"==type?(cx.state.lastType=cx.marked="operator",
cx.stream.backUp(cx.stream.pos-cx.stream.start-1),
cont(expr)):void 0:void 0}
function quasi(type,value){
return"quasi"!=type?pass():"${"!=value.slice(value.length-2)?cont(quasi):cont(expression,continueQuasi)
}function continueQuasi(type){
if("}"==type)return cx.marked="string-2",cx.state.tokenize=tokenQuasi,
cont(quasi)}function arrowBody(type){
return findFatArrow(cx.stream,cx.state),pass("{"==type?statement:expression)
}function arrowBodyNoComma(type){
return findFatArrow(cx.stream,cx.state),pass("{"==type?statement:expressionNoComma)
}function target(_,value){
if("target"==value)return cx.marked="keyword",cont(maybeoperatorComma)
}function targetNoComma(_,value){
if("target"==value)return cx.marked="keyword",cont(maybeoperatorNoComma)
}function maybelabel(type){
return":"==type?cont(poplex,statement):pass(maybeoperatorComma,expect(";"),poplex)
}function property(type){
if("variable"==type)return cx.marked="property",cont()
}function objprop(type,value){
return"async"==type?(cx.marked="property",cont(objprop)):"variable"==type||"keyword"==cx.style?(cx.marked="property",
"get"==value||"set"==value?cont(getterSetter):(isTS&&cx.state.fatArrowAt==cx.stream.start&&(m=cx.stream.match(/^\s*:\s*/,!1))&&(cx.state.fatArrowAt=cx.stream.pos+m[0].length),
cont(afterprop))):"number"==type||"string"==type?(cx.marked=jsonldMode?"property":cx.style+" property",
cont(afterprop)):"jsonld-keyword"==type?cont(afterprop):isTS&&isModifier(value)?(cx.marked="keyword",
cont(objprop)):"["==type?cont(expression,maybetype,expect("]"),afterprop):"spread"==type?cont(expressionNoComma,afterprop):"*"==value?(cx.marked="keyword",
cont(objprop)):":"==type?pass(afterprop):void 0
;var m}function getterSetter(type){
return"variable"!=type?pass(afterprop):(cx.marked="property",
cont(functiondef))}function afterprop(type){
return":"==type?cont(expressionNoComma):"("==type?pass(functiondef):void 0
}function commasep(what,end,sep){
function proceed(type,value){
if(sep?sep.indexOf(type)>-1:","==type){
var lex=cx.state.lexical
;return"call"==lex.info&&(lex.pos=(lex.pos||0)+1),cont(function(type,value){
return type==end||value==end?pass():pass(what)
},proceed)}
return type==end||value==end?cont():sep&&sep.indexOf(";")>-1?pass(what):cont(expect(end))
}return function(type,value){
return type==end||value==end?cont():pass(what,proceed)
}}function contCommasep(what,end,info){
for(var i=3;i<arguments.length;i++)cx.cc.push(arguments[i])
;return cont(pushlex(end,info),commasep(what,end),poplex)
}function block(type){
return"}"==type?cont():pass(statement,block)}
function maybetype(type,value){if(isTS){
if(":"==type||"in"==value)return cont(typeexpr)
;if("?"==value)return cont(maybetype)}}
function mayberettype(type){
if(isTS&&":"==type)return cx.stream.match(/^\s*\w+\s+is\b/,!1)?cont(expression,isKW,typeexpr):cont(typeexpr)
}function isKW(_,value){
if("is"==value)return cx.marked="keyword",cont()}
function typeexpr(type,value){
return"keyof"==value||"typeof"==value||"infer"==value?(cx.marked="keyword",
cont("typeof"==value?expressionNoComma:typeexpr)):"variable"==type||"void"==value?(cx.marked="type",
cont(afterType)):"|"==value||"&"==value?cont(typeexpr):"string"==type||"number"==type||"atom"==type?cont(afterType):"["==type?cont(pushlex("]"),commasep(typeexpr,"]",","),poplex,afterType):"{"==type?cont(pushlex("}"),commasep(typeprop,"}",",;"),poplex,afterType):"("==type?cont(commasep(typearg,")"),maybeReturnType,afterType):"<"==type?cont(commasep(typeexpr,">"),typeexpr):void 0
}function maybeReturnType(type){
if("=>"==type)return cont(typeexpr)}
function typeprop(type,value){
return"variable"==type||"keyword"==cx.style?(cx.marked="property",
cont(typeprop)):"?"==value||"number"==type||"string"==type?cont(typeprop):":"==type?cont(typeexpr):"["==type?cont(expect("variable"),maybetype,expect("]"),typeprop):"("==type?pass(functiondecl,typeprop):void 0
}function typearg(type,value){
return"variable"==type&&cx.stream.match(/^\s*[?:]/,!1)||"?"==value?cont(typearg):":"==type?cont(typeexpr):"spread"==type?cont(typearg):pass(typeexpr)
}function afterType(type,value){
return"<"==value?cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType):"|"==value||"."==type||"&"==value?cont(typeexpr):"["==type?cont(typeexpr,expect("]"),afterType):"extends"==value||"implements"==value?(cx.marked="keyword",
cont(typeexpr)):"?"==value?cont(typeexpr,expect(":"),typeexpr):void 0
}function maybeTypeArgs(_,value){
if("<"==value)return cont(pushlex(">"),commasep(typeexpr,">"),poplex,afterType)
}function typeparam(){
return pass(typeexpr,maybeTypeDefault)}
function maybeTypeDefault(_,value){
if("="==value)return cont(typeexpr)}
function vardef(_,value){
return"enum"==value?(cx.marked="keyword",cont(enumdef)):pass(pattern,maybetype,maybeAssign,vardefCont)
}function pattern(type,value){
return isTS&&isModifier(value)?(cx.marked="keyword",
cont(pattern)):"variable"==type?(register(value),
cont()):"spread"==type?cont(pattern):"["==type?contCommasep(eltpattern,"]"):"{"==type?contCommasep(proppattern,"}"):void 0
}function proppattern(type,value){
return"variable"!=type||cx.stream.match(/^\s*:/,!1)?("variable"==type&&(cx.marked="property"),
"spread"==type?cont(pattern):"}"==type?pass():"["==type?cont(expression,expect("]"),expect(":"),proppattern):cont(expect(":"),pattern,maybeAssign)):(register(value),
cont(maybeAssign))}function eltpattern(){
return pass(pattern,maybeAssign)}
function maybeAssign(_type,value){
if("="==value)return cont(expressionNoComma)}
function vardefCont(type){
if(","==type)return cont(vardef)}
function maybeelse(type,value){
if("keyword b"==type&&"else"==value)return cont(pushlex("form","else"),statement,poplex)
}function forspec(type,value){
return"await"==value?cont(forspec):"("==type?cont(pushlex(")"),forspec1,poplex):void 0
}function forspec1(type){
return"var"==type?cont(vardef,forspec2):"variable"==type?cont(forspec2):pass(forspec2)
}function forspec2(type,value){
return")"==type?cont():";"==type?cont(forspec2):"in"==value||"of"==value?(cx.marked="keyword",
cont(expression,forspec2)):pass(expression,forspec2)
}function functiondef(type,value){
return"*"==value?(cx.marked="keyword",cont(functiondef)):"variable"==type?(register(value),
cont(functiondef)):"("==type?cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,statement,popcontext):isTS&&"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondef):void 0
}function functiondecl(type,value){
return"*"==value?(cx.marked="keyword",cont(functiondecl)):"variable"==type?(register(value),
cont(functiondecl)):"("==type?cont(pushcontext,pushlex(")"),commasep(funarg,")"),poplex,mayberettype,popcontext):isTS&&"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex,functiondecl):void 0
}function typename(type,value){
return"keyword"==type||"variable"==type?(cx.marked="type",
cont(typename)):"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex):void 0
}function funarg(type,value){
return"@"==value&&cont(expression,funarg),"spread"==type?cont(funarg):isTS&&isModifier(value)?(cx.marked="keyword",
cont(funarg)):isTS&&"this"==type?cont(maybetype,maybeAssign):pass(pattern,maybetype,maybeAssign)
}function classExpression(type,value){
return"variable"==type?className(type,value):classNameAfter(type,value)
}function className(type,value){
if("variable"==type)return register(value),cont(classNameAfter)
}function classNameAfter(type,value){
return"<"==value?cont(pushlex(">"),commasep(typeparam,">"),poplex,classNameAfter):"extends"==value||"implements"==value||isTS&&","==type?("implements"==value&&(cx.marked="keyword"),
cont(isTS?typeexpr:expression,classNameAfter)):"{"==type?cont(pushlex("}"),classBody,poplex):void 0
}function classBody(type,value){
return"async"==type||"variable"==type&&("static"==value||"get"==value||"set"==value||isTS&&isModifier(value))&&cx.stream.match(/^\s+[\w$\xa1-\uffff]/,!1)?(cx.marked="keyword",
cont(classBody)):"variable"==type||"keyword"==cx.style?(cx.marked="property",
cont(isTS?classfield:functiondef,classBody)):"number"==type||"string"==type?cont(isTS?classfield:functiondef,classBody):"["==type?cont(expression,maybetype,expect("]"),isTS?classfield:functiondef,classBody):"*"==value?(cx.marked="keyword",
cont(classBody)):isTS&&"("==type?pass(functiondecl,classBody):";"==type||","==type?cont(classBody):"}"==type?cont():"@"==value?cont(expression,classBody):void 0
}function classfield(type,value){
if("?"==value)return cont(classfield)
;if(":"==type)return cont(typeexpr,maybeAssign)
;if("="==value)return cont(expressionNoComma)
;var context=cx.state.lexical.prev,isInterface=context&&"interface"==context.info
;return pass(isInterface?functiondecl:functiondef)
}function afterExport(type,value){
return"*"==value?(cx.marked="keyword",cont(maybeFrom,expect(";"))):"default"==value?(cx.marked="keyword",
cont(expression,expect(";"))):"{"==type?cont(commasep(exportField,"}"),maybeFrom,expect(";")):pass(statement)
}function exportField(type,value){
return"as"==value?(cx.marked="keyword",cont(expect("variable"))):"variable"==type?pass(expressionNoComma,exportField):void 0
}function afterImport(type){
return"string"==type?cont():"("==type?pass(expression):pass(importSpec,maybeMoreImports,maybeFrom)
}function importSpec(type,value){
return"{"==type?contCommasep(importSpec,"}"):("variable"==type&&register(value),
"*"==value&&(cx.marked="keyword"),cont(maybeAs))}
function maybeMoreImports(type){
if(","==type)return cont(importSpec,maybeMoreImports)
}function maybeAs(_type,value){
if("as"==value)return cx.marked="keyword",cont(importSpec)
}function maybeFrom(_type,value){
if("from"==value)return cx.marked="keyword",cont(expression)
}function arrayLiteral(type){
return"]"==type?cont():pass(commasep(expressionNoComma,"]"))
}function enumdef(){
return pass(pushlex("form"),pattern,expect("{"),pushlex("}"),commasep(enummember,"}"),poplex,poplex)
}function enummember(){
return pass(pattern,maybeAssign)}
function expressionAllowed(stream,state,backUp){
return state.tokenize==tokenBase&&/^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(state.lastType)||"quasi"==state.lastType&&/\{\s*$/.test(stream.string.slice(0,stream.pos-(backUp||0)))
}return popcontext.lex=!0,poplex.lex=!0,{
startState:function(basecolumn){var state={
tokenize:tokenBase,lastType:"sof",cc:[],
lexical:new JSLexical((basecolumn||0)-indentUnit,0,"block",!1),
localVars:parserConfig.localVars,
context:parserConfig.localVars&&new Context(null,null,!1),
indented:basecolumn||0}
;return parserConfig.globalVars&&"object"==_typeof(parserConfig.globalVars)&&(state.globalVars=parserConfig.globalVars),
state},token:function(stream,state){
if(stream.sol()&&(state.lexical.hasOwnProperty("align")||(state.lexical.align=!1),
state.indented=stream.indentation(),
findFatArrow(stream,state)),state.tokenize!=tokenComment&&stream.eatSpace())return null
;var style=state.tokenize(stream,state)
;return"comment"==type?style:(state.lastType="operator"!=type||"++"!=content&&"--"!=content?type:"incdec",
function(state,style,type,content,stream){
var cc=state.cc
;for(cx.state=state,cx.stream=stream,cx.marked=null,cx.cc=cc,cx.style=style,
state.lexical.hasOwnProperty("align")||(state.lexical.align=!0);;){
var combinator=cc.length?cc.pop():jsonMode?expression:statement
;if(combinator(type,content)){
for(;cc.length&&cc[cc.length-1].lex;)cc.pop()()
;return cx.marked?cx.marked:"variable"==type&&inScope(state,content)?"variable-2":style
}}}(state,style,type,content,stream))},
indent:function(state,textAfter){
if(state.tokenize==tokenComment)return CodeMirror.Pass
;if(state.tokenize!=tokenBase)return 0
;var top,firstChar=textAfter&&textAfter.charAt(0),lexical=state.lexical
;if(!/^\s*else\b/.test(textAfter))for(var i=state.cc.length-1;i>=0;--i){
var c=state.cc[i]
;if(c==poplex)lexical=lexical.prev;else if(c!=maybeelse)break
}
for(;("stat"==lexical.type||"form"==lexical.type)&&("}"==firstChar||(top=state.cc[state.cc.length-1])&&(top==maybeoperatorComma||top==maybeoperatorNoComma)&&!/^[,\.=+\-*:?[\(]/.test(textAfter));)lexical=lexical.prev
;statementIndent&&")"==lexical.type&&"stat"==lexical.prev.type&&(lexical=lexical.prev)
;var type=lexical.type,closing=firstChar==type
;return"vardef"==type?lexical.indented+("operator"==state.lastType||","==state.lastType?lexical.info.length+1:0):"form"==type&&"{"==firstChar?lexical.indented:"form"==type?lexical.indented+indentUnit:"stat"==type?lexical.indented+(function(state,textAfter){
return"operator"==state.lastType||","==state.lastType||isOperatorChar.test(textAfter.charAt(0))||/[,.]/.test(textAfter.charAt(0))
}(state,textAfter)?statementIndent||indentUnit:0):"switch"!=lexical.info||closing||0==parserConfig.doubleIndentSwitch?lexical.align?lexical.column+(closing?0:1):lexical.indented+(closing?0:indentUnit):lexical.indented+(/^(?:case|default)\b/.test(textAfter)?indentUnit:2*indentUnit)
},
electricInput:/^\s*(?:case .*?:|default:|\{|\})$/,
blockCommentStart:jsonMode?null:"/*",
blockCommentEnd:jsonMode?null:"*/",
blockCommentContinue:jsonMode?null:" * ",
lineComment:jsonMode?null:"//",fold:"brace",
closeBrackets:"()[]{}''\"\"``",
helperType:jsonMode?"json":"javascript",
jsonldMode:jsonldMode,jsonMode:jsonMode,
expressionAllowed:expressionAllowed,
skipExpression:function(state){
var top=state.cc[state.cc.length-1]
;top!=expression&&top!=expressionNoComma||state.cc.pop()
}}
}),CodeMirror.registerHelper("wordChars","javascript",/[\w$]/),CodeMirror.defineMIME("text/javascript","javascript"),
CodeMirror.defineMIME("text/ecmascript","javascript"),
CodeMirror.defineMIME("application/javascript","javascript"),
CodeMirror.defineMIME("application/x-javascript","javascript"),
CodeMirror.defineMIME("application/ecmascript","javascript"),
CodeMirror.defineMIME("application/json",{
name:"javascript",json:!0
}),CodeMirror.defineMIME("application/x-json",{
name:"javascript",json:!0
}),CodeMirror.defineMIME("application/ld+json",{
name:"javascript",jsonld:!0
}),CodeMirror.defineMIME("text/typescript",{
name:"javascript",typescript:!0
}),CodeMirror.defineMIME("application/typescript",{
name:"javascript",typescript:!0})
}),createCommonjsModule(function(module,exports){
var CodeMirror
;(CodeMirror=codemirror).defineMode("shell",function(){
var words={};function define(style,dict){
for(var i=0;i<dict.length;i++)words[dict[i]]=style
}
var commonAtoms=["true","false"],commonKeywords=["if","then","do","else","elif","while","until","for","in","esac","fi","fin","fil","done","exit","set","unset","export","function"],commonCommands=["ab","awk","bash","beep","cat","cc","cd","chown","chmod","chroot","clear","cp","curl","cut","diff","echo","find","gawk","gcc","get","git","grep","hg","kill","killall","ln","ls","make","mkdir","openssl","mv","nc","nl","node","npm","ping","ps","restart","rm","rmdir","sed","service","sh","shopt","shred","source","sort","sleep","ssh","start","stop","su","sudo","svn","tee","telnet","top","touch","vi","vim","wall","wc","wget","who","write","yes","zsh"]
;function tokenString(quote,style){
var close="("==quote?")":"{"==quote?"}":quote
;return function(stream,state){
for(var next,escaped=!1;null!=(next=stream.next());){
if(next===close&&!escaped){state.tokens.shift()
;break}
if("$"===next&&!escaped&&"'"!==quote&&stream.peek()!=close){
escaped=!0,stream.backUp(1),
state.tokens.unshift(tokenDollar);break}
if(!escaped&&quote!==close&&next===quote)return state.tokens.unshift(tokenString(quote,style)),
tokenize(stream,state)
;if(!escaped&&/['"]/.test(next)&&!/['"]/.test(quote)){
state.tokens.unshift(tokenStringStart(next,"string")),
stream.backUp(1);break}
escaped=!escaped&&"\\"===next}return style}}
function tokenStringStart(quote,style){
return function(stream,state){
return state.tokens[0]=tokenString(quote,style),stream.next(),
tokenize(stream,state)}}
CodeMirror.registerHelper("hintWords","shell",commonAtoms.concat(commonKeywords,commonCommands)),
define("atom",commonAtoms),
define("keyword",commonKeywords),define("builtin",commonCommands)
;var tokenDollar=function(stream,state){
state.tokens.length>1&&stream.eat("$")
;var ch=stream.next()
;return/['"({]/.test(ch)?(state.tokens[0]=tokenString(ch,"("==ch?"quote":"{"==ch?"def":"string"),
tokenize(stream,state)):(/\d/.test(ch)||stream.eatWhile(/\w/),
state.tokens.shift(),"def")}
;function tokenize(stream,state){
return(state.tokens[0]||function(stream,state){
if(stream.eatSpace())return null
;var sol=stream.sol(),ch=stream.next()
;if("\\"===ch)return stream.next(),null
;if("'"===ch||'"'===ch||"`"===ch)return state.tokens.unshift(tokenString(ch,"`"===ch?"quote":"string")),
tokenize(stream,state)
;if("#"===ch)return sol&&stream.eat("!")?(stream.skipToEnd(),
"meta"):(stream.skipToEnd(),"comment")
;if("$"===ch)return state.tokens.unshift(tokenDollar),
tokenize(stream,state)
;if("+"===ch||"="===ch)return"operator"
;if("-"===ch)return stream.eat("-"),stream.eatWhile(/\w/),
"attribute"
;if(/\d/.test(ch)&&(stream.eatWhile(/\d/),stream.eol()||!/\w/.test(stream.peek())))return"number"
;stream.eatWhile(/[\w-]/);var cur=stream.current()
;return"="===stream.peek()&&/\w+/.test(cur)?"def":words.hasOwnProperty(cur)?words[cur]:null
})(stream,state)}return{startState:function(){
return{tokens:[]}},token:function(stream,state){
return tokenize(stream,state)},
closeBrackets:"()[]{}''\"\"``",lineComment:"#",
fold:"brace"}
}),CodeMirror.defineMIME("text/x-sh","shell"),CodeMirror.defineMIME("application/x-sh","shell")
}),createCommonjsModule(function(module,exports){
!function(CodeMirror){
function ensureState(states,name){
if(!states.hasOwnProperty(name))throw new Error("Undefined state "+name+" in simple mode")
}function toRegex(val,caret){if(!val)return/(?:)/
;var flags=""
;return val instanceof RegExp?(val.ignoreCase&&(flags="i"),val=val.source):val=String(val),
new RegExp((!1===caret?"":"^")+"(?:"+val+")",flags)
}function Rule(data,states){
(data.next||data.push)&&ensureState(states,data.next||data.push),
this.regex=toRegex(data.regex),
this.token=function(val){if(!val)return null
;if(val.apply)return val
;if("string"==typeof val)return val.replace(/\./g," ")
;for(var result=[],i=0;i<val.length;i++)result.push(val[i]&&val[i].replace(/\./g," "))
;return result}(data.token),this.data=data}
function tokenFunction(states,config){
return function(stream,state){if(state.pending){
var pend=state.pending.shift()
;return 0==state.pending.length&&(state.pending=null),
stream.pos+=pend.text.length,pend.token}
if(state.local){
if(state.local.end&&stream.match(state.local.end)){
var tok=state.local.endToken||null
;return state.local=state.localState=null,tok}
var m,tok=state.local.mode.token(stream,state.localState)
;return state.local.endScan&&(m=state.local.endScan.exec(stream.current()))&&(stream.pos=stream.start+m.index),
tok}
for(var curState=states[state.state],i=0;i<curState.length;i++){
var rule=curState[i],matches=(!rule.data.sol||stream.sol())&&stream.match(rule.regex)
;if(matches){
rule.data.next?state.state=rule.data.next:rule.data.push?((state.stack||(state.stack=[])).push(state.state),
state.state=rule.data.push):rule.data.pop&&state.stack&&state.stack.length&&(state.state=state.stack.pop()),
rule.data.mode&&enterLocalMode(config,state,rule.data.mode,rule.token),
rule.data.indent&&state.indent.push(stream.indentation()+config.indentUnit),
rule.data.dedent&&state.indent.pop()
;var token=rule.token
;if(token&&token.apply&&(token=token(matches)),matches.length>2&&rule.token&&"string"!=typeof rule.token){
state.pending=[]
;for(var j=2;j<matches.length;j++)matches[j]&&state.pending.push({
text:matches[j],token:rule.token[j-1]})
;return stream.backUp(matches[0].length-(matches[1]?matches[1].length:0)),
token[0]}return token&&token.join?token[0]:token}}
return stream.next(),null}}function cmp(a,b){
if(a===b)return!0
;if(!a||"object"!=_typeof(a)||!b||"object"!=_typeof(b))return!1
;var props=0
;for(var prop in a)if(a.hasOwnProperty(prop)){
if(!b.hasOwnProperty(prop)||!cmp(a[prop],b[prop]))return!1
;props++}
for(var prop in b)b.hasOwnProperty(prop)&&props--
;return 0==props}
function enterLocalMode(config,state,spec,token){
var pers
;if(spec.persistent)for(var p=state.persistentStates;p&&!pers;p=p.next)(spec.spec?cmp(spec.spec,p.spec):spec.mode==p.mode)&&(pers=p)
;var mode=pers?pers.mode:spec.mode||CodeMirror.getMode(config,spec.spec),lState=pers?pers.state:CodeMirror.startState(mode)
;spec.persistent&&!pers&&(state.persistentStates={
mode:mode,spec:spec.spec,state:lState,
next:state.persistentStates
}),state.localState=lState,state.local={mode:mode,
end:spec.end&&toRegex(spec.end),
endScan:spec.end&&!1!==spec.forceEnd&&toRegex(spec.end,!1),
endToken:token&&token.join?token[token.length-1]:token
}}function indentFunction(states,meta){
return function(state,textAfter,line){
if(state.local&&state.local.mode.indent)return state.local.mode.indent(state.localState,textAfter,line)
;if(null==state.indent||state.local||meta.dontIndentStates&&function(val,arr){
for(var i=0;i<arr.length;i++)if(arr[i]===val)return!0
}(state.state,meta.dontIndentStates)>-1)return CodeMirror.Pass
;var pos=state.indent.length-1,rules=states[state.state]
;scan:for(;;){for(var i=0;i<rules.length;i++){
var rule=rules[i]
;if(rule.data.dedent&&!1!==rule.data.dedentIfLineStart){
var m=rule.regex.exec(textAfter);if(m&&m[0]){
pos--,(rule.next||rule.push)&&(rules=states[rule.next||rule.push]),
textAfter=textAfter.slice(m[0].length)
;continue scan}}}break}
return pos<0?0:state.indent[pos]}}
CodeMirror.defineSimpleMode=function(name,states){
CodeMirror.defineMode(name,function(config){
return CodeMirror.simpleMode(config,states)})
},CodeMirror.simpleMode=function(config,states){
ensureState(states,"start")
;var states_={},meta=states.meta||{},hasIndentation=!1
;for(var state in states)if(state!=meta&&states.hasOwnProperty(state))for(var list=states_[state]=[],orig=states[state],i=0;i<orig.length;i++){
var data=orig[i]
;list.push(new Rule(data,states)),(data.indent||data.dedent)&&(hasIndentation=!0)
}var mode={startState:function(){return{
state:"start",pending:null,local:null,
localState:null,indent:hasIndentation?[]:null}},
copyState:function(state){var s={
state:state.state,pending:state.pending,
local:state.local,localState:null,
indent:state.indent&&state.indent.slice(0)}
;state.localState&&(s.localState=CodeMirror.copyState(state.local.mode,state.localState)),
state.stack&&(s.stack=state.stack.slice(0))
;for(var pers=state.persistentStates;pers;pers=pers.next)s.persistentStates={
mode:pers.mode,spec:pers.spec,
state:pers.state==state.localState?s.localState:CodeMirror.copyState(pers.mode,pers.state),
next:s.persistentStates};return s},
token:tokenFunction(states_,config),
innerMode:function(state){return state.local&&{
mode:state.local.mode,state:state.localState}},
indent:indentFunction(states_,meta)}
;if(meta)for(var prop in meta)meta.hasOwnProperty(prop)&&(mode[prop]=meta[prop])
;return mode}}(codemirror)
}),createCommonjsModule(function(module,exports){
var CodeMirror
;(CodeMirror=codemirror).multiplexingMode=function(outer){
var others=Array.prototype.slice.call(arguments,1)
;function indexOf(string,pattern,from,returnEnd){
if("string"==typeof pattern){
var found=string.indexOf(pattern,from)
;return returnEnd&&found>-1?found+pattern.length:found
}
var m=pattern.exec(from?string.slice(from):string)
;return m?m.index+from+(returnEnd?m[0].length:0):-1
}return{startState:function(){return{
outer:CodeMirror.startState(outer),
innerActive:null,inner:null}},
copyState:function(state){return{
outer:CodeMirror.copyState(outer,state.outer),
innerActive:state.innerActive,
inner:state.innerActive&&CodeMirror.copyState(state.innerActive.mode,state.inner)
}},token:function(stream,state){
if(state.innerActive){
var curInner=state.innerActive,oldContent=stream.string
;if(!curInner.close&&stream.sol())return state.innerActive=state.inner=null,
this.token(stream,state)
;var found=curInner.close?indexOf(oldContent,curInner.close,stream.pos,curInner.parseDelimiters):-1
;if(found==stream.pos&&!curInner.parseDelimiters)return stream.match(curInner.close),
state.innerActive=state.inner=null,
curInner.delimStyle&&curInner.delimStyle+" "+curInner.delimStyle+"-close"
;found>-1&&(stream.string=oldContent.slice(0,found))
;var innerToken=curInner.mode.token(stream,state.inner)
;return found>-1&&(stream.string=oldContent),
found==stream.pos&&curInner.parseDelimiters&&(state.innerActive=state.inner=null),
curInner.innerStyle&&(innerToken=innerToken?innerToken+" "+curInner.innerStyle:curInner.innerStyle),
innerToken}
for(var cutOff=1/0,oldContent=stream.string,i=0;i<others.length;++i){
var other=others[i],found=indexOf(oldContent,other.open,stream.pos)
;if(found==stream.pos){
other.parseDelimiters||stream.match(other.open),state.innerActive=other
;var outerIndent=0;if(outer.indent){
var possibleOuterIndent=outer.indent(state.outer,"","")
;possibleOuterIndent!==CodeMirror.Pass&&(outerIndent=possibleOuterIndent)
}
return state.inner=CodeMirror.startState(other.mode,outerIndent),other.delimStyle&&other.delimStyle+" "+other.delimStyle+"-open"
}-1!=found&&found<cutOff&&(cutOff=found)}
cutOff!=1/0&&(stream.string=oldContent.slice(0,cutOff))
;var outerToken=outer.token(stream,state.outer)
;return cutOff!=1/0&&(stream.string=oldContent),
outerToken},indent:function(state,textAfter,line){
var mode=state.innerActive?state.innerActive.mode:outer
;return mode.indent?mode.indent(state.innerActive?state.inner:state.outer,textAfter,line):CodeMirror.Pass
},blankLine:function(state){
var mode=state.innerActive?state.innerActive.mode:outer
;if(mode.blankLine&&mode.blankLine(state.innerActive?state.inner:state.outer),
state.innerActive)"\n"===state.innerActive.close&&(state.innerActive=state.inner=null);else for(var i=0;i<others.length;++i){
var other=others[i]
;"\n"===other.open&&(state.innerActive=other,state.inner=CodeMirror.startState(other.mode,mode.indent?mode.indent(state.outer,"",""):0))
}},electricChars:outer.electricChars,
innerMode:function(state){return state.inner?{
state:state.inner,mode:state.innerActive.mode}:{
state:state.outer,mode:outer}}}}
}),createCommonjsModule(function(module,exports){
var CodeMirror
;(CodeMirror=codemirror).defineSimpleMode("handlebars-tags",{
start:[{regex:/\{\{!--/,push:"dash_comment",
token:"comment"},{regex:/\{\{!/,push:"comment",
token:"comment"},{regex:/\{\{/,push:"handlebars",
token:"tag"}],handlebars:[{regex:/\}\}/,pop:!0,
token:"tag"},{regex:/"(?:[^\\"]|\\.)*"?/,
token:"string"},{regex:/'(?:[^\\']|\\.)*'?/,
token:"string"},{regex:/>|[#\/]([A-Za-z_]\w*)/,
token:"keyword"},{regex:/(?:else|this)\b/,
token:"keyword"},{regex:/\d+/i,token:"number"},{
regex:/=|~|@|true|false/,token:"atom"},{
regex:/(?:\.\.\/)*(?:[A-Za-z_][\w\.]*)+/,
token:"variable-2"}],dash_comment:[{
regex:/--\}\}/,pop:!0,token:"comment"},{regex:/./,
token:"comment"}],comment:[{regex:/\}\}/,pop:!0,
token:"comment"},{regex:/./,token:"comment"}],
meta:{blockCommentStart:"{{--",
blockCommentEnd:"--}}"}
}),CodeMirror.defineMode("handlebars",function(config,parserConfig){
var handlebars=CodeMirror.getMode(config,"handlebars-tags")
;return parserConfig&&parserConfig.base?CodeMirror.multiplexingMode(CodeMirror.getMode(config,parserConfig.base),{
open:"{{",close:"}}",mode:handlebars,
parseDelimiters:!0}):handlebars
}),CodeMirror.defineMIME("text/x-handlebars-template","handlebars")
}),createCommonjsModule(function(module,exports){
var CodeMirror,htmlConfig,xmlConfig;htmlConfig={
autoSelfClosers:{area:!0,base:!0,br:!0,col:!0,
command:!0,embed:!0,frame:!0,hr:!0,img:!0,
input:!0,keygen:!0,link:!0,meta:!0,param:!0,
source:!0,track:!0,wbr:!0,menuitem:!0},
implicitlyClosed:{dd:!0,li:!0,optgroup:!0,
option:!0,p:!0,rp:!0,rt:!0,tbody:!0,td:!0,
tfoot:!0,th:!0,tr:!0},contextGrabbers:{dd:{dd:!0,
dt:!0},dt:{dd:!0,dt:!0},li:{li:!0},option:{
option:!0,optgroup:!0},optgroup:{optgroup:!0},p:{
address:!0,article:!0,aside:!0,blockquote:!0,
dir:!0,div:!0,dl:!0,fieldset:!0,footer:!0,form:!0,
h1:!0,h2:!0,h3:!0,h4:!0,h5:!0,h6:!0,header:!0,
hgroup:!0,hr:!0,menu:!0,nav:!0,ol:!0,p:!0,pre:!0,
section:!0,table:!0,ul:!0},rp:{rp:!0,rt:!0},rt:{
rp:!0,rt:!0},tbody:{tbody:!0,tfoot:!0},td:{td:!0,
th:!0},tfoot:{tbody:!0},th:{td:!0,th:!0},thead:{
tbody:!0,tfoot:!0},tr:{tr:!0}},doNotIndent:{pre:!0
},allowUnquoted:!0,allowMissing:!0,caseFold:!0
},xmlConfig={autoSelfClosers:{},
implicitlyClosed:{},contextGrabbers:{},
doNotIndent:{},allowUnquoted:!1,allowMissing:!1,
allowMissingTagName:!1,caseFold:!1
},(CodeMirror=codemirror).defineMode("xml",function(editorConf,config_){
var type,setStyle,indentUnit=editorConf.indentUnit,config={},defaults=config_.htmlMode?htmlConfig:xmlConfig
;for(var prop in defaults)config[prop]=defaults[prop]
;for(var prop in config_)config[prop]=config_[prop]
;function inText(stream,state){
function chain(parser){
return state.tokenize=parser,parser(stream,state)}
var ch=stream.next()
;return"<"==ch?stream.eat("!")?stream.eat("[")?stream.match("CDATA[")?chain(inBlock("atom","]]>")):null:stream.match("--")?chain(inBlock("comment","--\x3e")):stream.match("DOCTYPE",!0,!0)?(stream.eatWhile(/[\w\._\-]/),
chain(function doctype(depth){
return function(stream,state){
for(var ch;null!=(ch=stream.next());){
if("<"==ch)return state.tokenize=doctype(depth+1),
state.tokenize(stream,state);if(">"==ch){
if(1==depth){state.tokenize=inText;break}
return state.tokenize=doctype(depth-1),
state.tokenize(stream,state)}}return"meta"}
}(1))):null:stream.eat("?")?(stream.eatWhile(/[\w\._\-]/),
state.tokenize=inBlock("meta","?>"),
"meta"):(type=stream.eat("/")?"closeTag":"openTag",
state.tokenize=inTag,"tag bracket"):"&"==ch?(stream.eat("#")?stream.eat("x")?stream.eatWhile(/[a-fA-F\d]/)&&stream.eat(";"):stream.eatWhile(/[\d]/)&&stream.eat(";"):stream.eatWhile(/[\w\.\-:]/)&&stream.eat(";"))?"atom":"error":(stream.eatWhile(/[^&<]/),
null)}function inTag(stream,state){
var quote,closure,ch=stream.next()
;if(">"==ch||"/"==ch&&stream.eat(">"))return state.tokenize=inText,
type=">"==ch?"endTag":"selfcloseTag","tag bracket"
;if("="==ch)return type="equals",null;if("<"==ch){
state.tokenize=inText,state.state=baseState,
state.tagName=state.tagStart=null
;var next=state.tokenize(stream,state)
;return next?next+" tag error":"tag error"}
return/[\'\"]/.test(ch)?(state.tokenize=(quote=ch,
(closure=function(stream,state){
for(;!stream.eol();)if(stream.next()==quote){
state.tokenize=inTag;break}return"string"
}).isInAttribute=!0,closure),state.stringStartCol=stream.column(),
state.tokenize(stream,state)):(stream.match(/^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/),
"word")}function inBlock(style,terminator){
return function(stream,state){
for(;!stream.eol();){if(stream.match(terminator)){
state.tokenize=inText;break}stream.next()}
return style}}
function Context(state,tagName,startOfLine){
this.prev=state.context,this.tagName=tagName,
this.indent=state.indented,this.startOfLine=startOfLine,
(config.doNotIndent.hasOwnProperty(tagName)||state.context&&state.context.noIndent)&&(this.noIndent=!0)
}function popContext(state){
state.context&&(state.context=state.context.prev)}
function maybePopContext(state,nextTagName){
for(var parentTagName;;){if(!state.context)return
;if(parentTagName=state.context.tagName,
!config.contextGrabbers.hasOwnProperty(parentTagName)||!config.contextGrabbers[parentTagName].hasOwnProperty(nextTagName))return
;popContext(state)}}
function baseState(type,stream,state){
return"openTag"==type?(state.tagStart=stream.column(),
tagNameState):"closeTag"==type?closeTagNameState:baseState
}function tagNameState(type,stream,state){
return"word"==type?(state.tagName=stream.current(),
setStyle="tag",attrState):config.allowMissingTagName&&"endTag"==type?(setStyle="tag bracket",
attrState(type,0,state)):(setStyle="error",
tagNameState)}
function closeTagNameState(type,stream,state){
if("word"==type){var tagName=stream.current()
;return state.context&&state.context.tagName!=tagName&&config.implicitlyClosed.hasOwnProperty(state.context.tagName)&&popContext(state),
state.context&&state.context.tagName==tagName||!1===config.matchClosing?(setStyle="tag",
closeState):(setStyle="tag error",closeStateErr)}
return config.allowMissingTagName&&"endTag"==type?(setStyle="tag bracket",
closeState(type,0,state)):(setStyle="error",
closeStateErr)}
function closeState(type,_stream,state){
return"endTag"!=type?(setStyle="error",closeState):(popContext(state),
baseState)}
function closeStateErr(type,stream,state){
return setStyle="error",closeState(type,0,state)}
function attrState(type,_stream,state){
if("word"==type)return setStyle="attribute",
attrEqState
;if("endTag"==type||"selfcloseTag"==type){
var tagName=state.tagName,tagStart=state.tagStart
;return state.tagName=state.tagStart=null,
"selfcloseTag"==type||config.autoSelfClosers.hasOwnProperty(tagName)?maybePopContext(state,tagName):(maybePopContext(state,tagName),
state.context=new Context(state,tagName,tagStart==state.indented)),
baseState}return setStyle="error",attrState}
function attrEqState(type,stream,state){
return"equals"==type?attrValueState:(config.allowMissing||(setStyle="error"),
attrState(type,0,state))}
function attrValueState(type,stream,state){
return"string"==type?attrContinuedState:"word"==type&&config.allowUnquoted?(setStyle="string",
attrState):(setStyle="error",
attrState(type,0,state))}
function attrContinuedState(type,stream,state){
return"string"==type?attrContinuedState:attrState(type,0,state)
}return inText.isInText=!0,{
startState:function(baseIndent){var state={
tokenize:inText,state:baseState,
indented:baseIndent||0,tagName:null,tagStart:null,
context:null}
;return null!=baseIndent&&(state.baseIndent=baseIndent),state
},token:function(stream,state){
if(!state.tagName&&stream.sol()&&(state.indented=stream.indentation()),
stream.eatSpace())return null;type=null
;var style=state.tokenize(stream,state)
;return(style||type)&&"comment"!=style&&(setStyle=null,
state.state=state.state(type||style,stream,state),
setStyle&&(style="error"==setStyle?style+" error":setStyle)),
style},indent:function(state,textAfter,fullLine){
var context=state.context
;if(state.tokenize.isInAttribute)return state.tagStart==state.indented?state.stringStartCol+1:state.indented+indentUnit
;if(context&&context.noIndent)return CodeMirror.Pass
;if(state.tokenize!=inTag&&state.tokenize!=inText)return fullLine?fullLine.match(/^(\s*)/)[0].length:0
;if(state.tagName)return!1!==config.multilineTagIndentPastTag?state.tagStart+state.tagName.length+2:state.tagStart+indentUnit*(config.multilineTagIndentFactor||1)
;if(config.alignCDATA&&/<!\[CDATA\[/.test(textAfter))return 0
;var tagAfter=textAfter&&/^<(\/)?([\w_:\.-]*)/.exec(textAfter)
;if(tagAfter&&tagAfter[1])for(;context;){
if(context.tagName==tagAfter[2]){
context=context.prev;break}
if(!config.implicitlyClosed.hasOwnProperty(context.tagName))break
;context=context.prev
}else if(tagAfter)for(;context;){
var grabbers=config.contextGrabbers[context.tagName]
;if(!grabbers||!grabbers.hasOwnProperty(tagAfter[2]))break
;context=context.prev}
for(;context&&context.prev&&!context.startOfLine;)context=context.prev
;return context?context.indent+indentUnit:state.baseIndent||0
},electricInput:/<\/[\s\w:]+>$/,
blockCommentStart:"\x3c!--",
blockCommentEnd:"--\x3e",
configuration:config.htmlMode?"html":"xml",
helperType:config.htmlMode?"html":"xml",
skipAttribute:function(state){
state.state==attrValueState&&(state.state=attrState)
}}
}),CodeMirror.defineMIME("text/xml","xml"),CodeMirror.defineMIME("application/xml","xml"),
CodeMirror.mimeModes.hasOwnProperty("text/html")||CodeMirror.defineMIME("text/html",{
name:"xml",htmlMode:!0})
}),createCommonjsModule(function(module,exports){
!function(CodeMirror){function keySet(array){
for(var keys={},i=0;i<array.length;++i)keys[array[i].toLowerCase()]=!0
;return keys}
CodeMirror.defineMode("css",function(config,parserConfig){
var inline=parserConfig.inline
;parserConfig.propertyKeywords||(parserConfig=CodeMirror.resolveMode("text/css"))
;var type,override,indentUnit=config.indentUnit,tokenHooks=parserConfig.tokenHooks,documentTypes=parserConfig.documentTypes||{},mediaTypes=parserConfig.mediaTypes||{},mediaFeatures=parserConfig.mediaFeatures||{},mediaValueKeywords=parserConfig.mediaValueKeywords||{},propertyKeywords=parserConfig.propertyKeywords||{},nonStandardPropertyKeywords=parserConfig.nonStandardPropertyKeywords||{},fontProperties=parserConfig.fontProperties||{},counterDescriptors=parserConfig.counterDescriptors||{},colorKeywords=parserConfig.colorKeywords||{},valueKeywords=parserConfig.valueKeywords||{},allowNested=parserConfig.allowNested,lineComment=parserConfig.lineComment,supportsAtComponent=!0===parserConfig.supportsAtComponent
;function ret(style,tp){return type=tp,style}
function tokenString(quote){
return function(stream,state){
for(var ch,escaped=!1;null!=(ch=stream.next());){
if(ch==quote&&!escaped){
")"==quote&&stream.backUp(1);break}
escaped=!escaped&&"\\"==ch}
return(ch==quote||!escaped&&")"!=quote)&&(state.tokenize=null),
ret("string","string")}}
function tokenParenthesized(stream,state){
return stream.next(),stream.match(/\s*[\"\')]/,!1)?state.tokenize=null:state.tokenize=tokenString(")"),
ret(null,"(")}function Context(type,indent,prev){
this.type=type,this.indent=indent,this.prev=prev}
function pushContext(state,stream,type,indent){
return state.context=new Context(type,stream.indentation()+(!1===indent?0:indentUnit),state.context),
type}function popContext(state){
return state.context.prev&&(state.context=state.context.prev),
state.context.type}
function pass(type,stream,state){
return states[state.context.type](type,stream,state)
}function popAndPass(type,stream,state,n){
for(var i=n||1;i>0;i--)state.context=state.context.prev
;return pass(type,stream,state)}
function wordAsValue(stream){
var word=stream.current().toLowerCase()
;override=valueKeywords.hasOwnProperty(word)?"atom":colorKeywords.hasOwnProperty(word)?"keyword":"variable"
}var states={top:function(type,stream,state){
if("{"==type)return pushContext(state,stream,"block")
;if("}"==type&&state.context.prev)return popContext(state)
;if(supportsAtComponent&&/@component/i.test(type))return pushContext(state,stream,"atComponentBlock")
;if(/^@(-moz-)?document$/i.test(type))return pushContext(state,stream,"documentTypes")
;if(/^@(media|supports|(-moz-)?document|import)$/i.test(type))return pushContext(state,stream,"atBlock")
;if(/^@(font-face|counter-style)/i.test(type))return state.stateArg=type,
"restricted_atBlock_before"
;if(/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(type))return"keyframes"
;if(type&&"@"==type.charAt(0))return pushContext(state,stream,"at")
;if("hash"==type)override="builtin";else if("word"==type)override="tag";else{
if("variable-definition"==type)return"maybeprop"
;if("interpolation"==type)return pushContext(state,stream,"interpolation")
;if(":"==type)return"pseudo"
;if(allowNested&&"("==type)return pushContext(state,stream,"parens")
}return state.context.type},
block:function(type,stream,state){
if("word"==type){
var word=stream.current().toLowerCase()
;return propertyKeywords.hasOwnProperty(word)?(override="property",
"maybeprop"):nonStandardPropertyKeywords.hasOwnProperty(word)?(override="string-2",
"maybeprop"):allowNested?(override=stream.match(/^\s*:(?:\s|$)/,!1)?"property":"tag",
"block"):(override+=" error","maybeprop")}
return"meta"==type?"block":allowNested||"hash"!=type&&"qualifier"!=type?states.top(type,stream,state):(override="error",
"block")},maybeprop:function(type,stream,state){
return":"==type?pushContext(state,stream,"prop"):pass(type,stream,state)
},prop:function(type,stream,state){
if(";"==type)return popContext(state)
;if("{"==type&&allowNested)return pushContext(state,stream,"propBlock")
;if("}"==type||"{"==type)return popAndPass(type,stream,state)
;if("("==type)return pushContext(state,stream,"parens")
;if("hash"!=type||/^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(stream.current())){
if("word"==type)wordAsValue(stream);else if("interpolation"==type)return pushContext(state,stream,"interpolation")
}else override+=" error";return"prop"},
propBlock:function(type,_stream,state){
return"}"==type?popContext(state):"word"==type?(override="property",
"maybeprop"):state.context.type},
parens:function(type,stream,state){
return"{"==type||"}"==type?popAndPass(type,stream,state):")"==type?popContext(state):"("==type?pushContext(state,stream,"parens"):"interpolation"==type?pushContext(state,stream,"interpolation"):("word"==type&&wordAsValue(stream),
"parens")},pseudo:function(type,stream,state){
return"meta"==type?"pseudo":"word"==type?(override="variable-3",
state.context.type):pass(type,stream,state)},
documentTypes:function(type,stream,state){
return"word"==type&&documentTypes.hasOwnProperty(stream.current())?(override="tag",
state.context.type):states.atBlock(type,stream,state)
},atBlock:function(type,stream,state){
if("("==type)return pushContext(state,stream,"atBlock_parens")
;if("}"==type||";"==type)return popAndPass(type,stream,state)
;if("{"==type)return popContext(state)&&pushContext(state,stream,allowNested?"block":"top")
;if("interpolation"==type)return pushContext(state,stream,"interpolation")
;if("word"==type){
var word=stream.current().toLowerCase()
;override="only"==word||"not"==word||"and"==word||"or"==word?"keyword":mediaTypes.hasOwnProperty(word)?"attribute":mediaFeatures.hasOwnProperty(word)?"property":mediaValueKeywords.hasOwnProperty(word)?"keyword":propertyKeywords.hasOwnProperty(word)?"property":nonStandardPropertyKeywords.hasOwnProperty(word)?"string-2":valueKeywords.hasOwnProperty(word)?"atom":colorKeywords.hasOwnProperty(word)?"keyword":"error"
}return state.context.type},
atComponentBlock:function(type,stream,state){
return"}"==type?popAndPass(type,stream,state):"{"==type?popContext(state)&&pushContext(state,stream,allowNested?"block":"top",!1):("word"==type&&(override="error"),
state.context.type)},
atBlock_parens:function(type,stream,state){
return")"==type?popContext(state):"{"==type||"}"==type?popAndPass(type,stream,state,2):states.atBlock(type,stream,state)
},
restricted_atBlock_before:function(type,stream,state){
return"{"==type?pushContext(state,stream,"restricted_atBlock"):"word"==type&&"@counter-style"==state.stateArg?(override="variable",
"restricted_atBlock_before"):pass(type,stream,state)
},restricted_atBlock:function(type,stream,state){
return"}"==type?(state.stateArg=null,
popContext(state)):"word"==type?(override="@font-face"==state.stateArg&&!fontProperties.hasOwnProperty(stream.current().toLowerCase())||"@counter-style"==state.stateArg&&!counterDescriptors.hasOwnProperty(stream.current().toLowerCase())?"error":"property",
"maybeprop"):"restricted_atBlock"},
keyframes:function(type,stream,state){
return"word"==type?(override="variable","keyframes"):"{"==type?pushContext(state,stream,"top"):pass(type,stream,state)
},at:function(type,stream,state){
return";"==type?popContext(state):"{"==type||"}"==type?popAndPass(type,stream,state):("word"==type?override="tag":"hash"==type&&(override="builtin"),
"at")},interpolation:function(type,stream,state){
return"}"==type?popContext(state):"{"==type||";"==type?popAndPass(type,stream,state):("word"==type?override="variable":"variable"!=type&&"("!=type&&")"!=type&&(override="error"),
"interpolation")}};return{
startState:function(base){return{tokenize:null,
state:inline?"block":"top",stateArg:null,
context:new Context(inline?"block":"top",base||0,null)
}},token:function(stream,state){
if(!state.tokenize&&stream.eatSpace())return null
;var style=(state.tokenize||function(stream,state){
var ch=stream.next();if(tokenHooks[ch]){
var result=tokenHooks[ch](stream,state)
;if(!1!==result)return result}
return"@"==ch?(stream.eatWhile(/[\w\\\-]/),ret("def",stream.current())):"="==ch||("~"==ch||"|"==ch)&&stream.eat("=")?ret(null,"compare"):'"'==ch||"'"==ch?(state.tokenize=tokenString(ch),
state.tokenize(stream,state)):"#"==ch?(stream.eatWhile(/[\w\\\-]/),
ret("atom","hash")):"!"==ch?(stream.match(/^\s*\w*/),
ret("keyword","important")):/\d/.test(ch)||"."==ch&&stream.eat(/\d/)?(stream.eatWhile(/[\w.%]/),
ret("number","unit")):"-"!==ch?/[,+>*\/]/.test(ch)?ret(null,"select-op"):"."==ch&&stream.match(/^-?[_a-z][_a-z0-9-]*/i)?ret("qualifier","qualifier"):/[:;{}\[\]\(\)]/.test(ch)?ret(null,ch):stream.match(/[\w-.]+(?=\()/)?(/^(url(-prefix)?|domain|regexp)$/.test(stream.current().toLowerCase())&&(state.tokenize=tokenParenthesized),
ret("variable callee","variable")):/[\w\\\-]/.test(ch)?(stream.eatWhile(/[\w\\\-]/),
ret("property","word")):ret(null,null):/[\d.]/.test(stream.peek())?(stream.eatWhile(/[\w.%]/),
ret("number","unit")):stream.match(/^-[\w\\\-]*/)?(stream.eatWhile(/[\w\\\-]/),
stream.match(/^\s*:/,!1)?ret("variable-2","variable-definition"):ret("variable-2","variable")):stream.match(/^\w+-/)?ret("meta","meta"):void 0
})(stream,state)
;return style&&"object"==_typeof(style)&&(type=style[1],style=style[0]),
override=style,
"comment"!=type&&(state.state=states[state.state](type,stream,state)),
override},indent:function(state,textAfter){
var cx=state.context,ch=textAfter&&textAfter.charAt(0),indent=cx.indent
;return"prop"!=cx.type||"}"!=ch&&")"!=ch||(cx=cx.prev),
cx.prev&&("}"!=ch||"block"!=cx.type&&"top"!=cx.type&&"interpolation"!=cx.type&&"restricted_atBlock"!=cx.type?(")"!=ch||"parens"!=cx.type&&"atBlock_parens"!=cx.type)&&("{"!=ch||"at"!=cx.type&&"atBlock"!=cx.type)||(indent=Math.max(0,cx.indent-indentUnit)):(cx=cx.prev,
indent=cx.indent)),indent},electricChars:"}",
blockCommentStart:"/*",blockCommentEnd:"*/",
blockCommentContinue:" * ",
lineComment:lineComment,fold:"brace"}})
;var documentTypes_=["domain","regexp","url","url-prefix"],documentTypes=keySet(documentTypes_),mediaTypes_=["all","aural","braille","handheld","print","projection","screen","tty","tv","embossed"],mediaTypes=keySet(mediaTypes_),mediaFeatures_=["width","min-width","max-width","height","min-height","max-height","device-width","min-device-width","max-device-width","device-height","min-device-height","max-device-height","aspect-ratio","min-aspect-ratio","max-aspect-ratio","device-aspect-ratio","min-device-aspect-ratio","max-device-aspect-ratio","color","min-color","max-color","color-index","min-color-index","max-color-index","monochrome","min-monochrome","max-monochrome","resolution","min-resolution","max-resolution","scan","grid","orientation","device-pixel-ratio","min-device-pixel-ratio","max-device-pixel-ratio","pointer","any-pointer","hover","any-hover"],mediaFeatures=keySet(mediaFeatures_),mediaValueKeywords_=["landscape","portrait","none","coarse","fine","on-demand","hover","interlace","progressive"],mediaValueKeywords=keySet(mediaValueKeywords_),propertyKeywords_=["align-content","align-items","align-self","alignment-adjust","alignment-baseline","anchor-point","animation","animation-delay","animation-direction","animation-duration","animation-fill-mode","animation-iteration-count","animation-name","animation-play-state","animation-timing-function","appearance","azimuth","backface-visibility","background","background-attachment","background-blend-mode","background-clip","background-color","background-image","background-origin","background-position","background-repeat","background-size","baseline-shift","binding","bleed","bookmark-label","bookmark-level","bookmark-state","bookmark-target","border","border-bottom","border-bottom-color","border-bottom-left-radius","border-bottom-right-radius","border-bottom-style","border-bottom-width","border-collapse","border-color","border-image","border-image-outset","border-image-repeat","border-image-slice","border-image-source","border-image-width","border-left","border-left-color","border-left-style","border-left-width","border-radius","border-right","border-right-color","border-right-style","border-right-width","border-spacing","border-style","border-top","border-top-color","border-top-left-radius","border-top-right-radius","border-top-style","border-top-width","border-width","bottom","box-decoration-break","box-shadow","box-sizing","break-after","break-before","break-inside","caption-side","caret-color","clear","clip","color","color-profile","column-count","column-fill","column-gap","column-rule","column-rule-color","column-rule-style","column-rule-width","column-span","column-width","columns","content","counter-increment","counter-reset","crop","cue","cue-after","cue-before","cursor","direction","display","dominant-baseline","drop-initial-after-adjust","drop-initial-after-align","drop-initial-before-adjust","drop-initial-before-align","drop-initial-size","drop-initial-value","elevation","empty-cells","fit","fit-position","flex","flex-basis","flex-direction","flex-flow","flex-grow","flex-shrink","flex-wrap","float","float-offset","flow-from","flow-into","font","font-feature-settings","font-family","font-kerning","font-language-override","font-size","font-size-adjust","font-stretch","font-style","font-synthesis","font-variant","font-variant-alternates","font-variant-caps","font-variant-east-asian","font-variant-ligatures","font-variant-numeric","font-variant-position","font-weight","grid","grid-area","grid-auto-columns","grid-auto-flow","grid-auto-rows","grid-column","grid-column-end","grid-column-gap","grid-column-start","grid-gap","grid-row","grid-row-end","grid-row-gap","grid-row-start","grid-template","grid-template-areas","grid-template-columns","grid-template-rows","hanging-punctuation","height","hyphens","icon","image-orientation","image-rendering","image-resolution","inline-box-align","justify-content","justify-items","justify-self","left","letter-spacing","line-break","line-height","line-stacking","line-stacking-ruby","line-stacking-shift","line-stacking-strategy","list-style","list-style-image","list-style-position","list-style-type","margin","margin-bottom","margin-left","margin-right","margin-top","marks","marquee-direction","marquee-loop","marquee-play-count","marquee-speed","marquee-style","max-height","max-width","min-height","min-width","mix-blend-mode","move-to","nav-down","nav-index","nav-left","nav-right","nav-up","object-fit","object-position","opacity","order","orphans","outline","outline-color","outline-offset","outline-style","outline-width","overflow","overflow-style","overflow-wrap","overflow-x","overflow-y","padding","padding-bottom","padding-left","padding-right","padding-top","page","page-break-after","page-break-before","page-break-inside","page-policy","pause","pause-after","pause-before","perspective","perspective-origin","pitch","pitch-range","place-content","place-items","place-self","play-during","position","presentation-level","punctuation-trim","quotes","region-break-after","region-break-before","region-break-inside","region-fragment","rendering-intent","resize","rest","rest-after","rest-before","richness","right","rotation","rotation-point","ruby-align","ruby-overhang","ruby-position","ruby-span","shape-image-threshold","shape-inside","shape-margin","shape-outside","size","speak","speak-as","speak-header","speak-numeral","speak-punctuation","speech-rate","stress","string-set","tab-size","table-layout","target","target-name","target-new","target-position","text-align","text-align-last","text-decoration","text-decoration-color","text-decoration-line","text-decoration-skip","text-decoration-style","text-emphasis","text-emphasis-color","text-emphasis-position","text-emphasis-style","text-height","text-indent","text-justify","text-outline","text-overflow","text-shadow","text-size-adjust","text-space-collapse","text-transform","text-underline-position","text-wrap","top","transform","transform-origin","transform-style","transition","transition-delay","transition-duration","transition-property","transition-timing-function","unicode-bidi","user-select","vertical-align","visibility","voice-balance","voice-duration","voice-family","voice-pitch","voice-range","voice-rate","voice-stress","voice-volume","volume","white-space","widows","width","will-change","word-break","word-spacing","word-wrap","z-index","clip-path","clip-rule","mask","enable-background","filter","flood-color","flood-opacity","lighting-color","stop-color","stop-opacity","pointer-events","color-interpolation","color-interpolation-filters","color-rendering","fill","fill-opacity","fill-rule","image-rendering","marker","marker-end","marker-mid","marker-start","shape-rendering","stroke","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke-width","text-rendering","baseline-shift","dominant-baseline","glyph-orientation-horizontal","glyph-orientation-vertical","text-anchor","writing-mode"],propertyKeywords=keySet(propertyKeywords_),nonStandardPropertyKeywords_=["scrollbar-arrow-color","scrollbar-base-color","scrollbar-dark-shadow-color","scrollbar-face-color","scrollbar-highlight-color","scrollbar-shadow-color","scrollbar-3d-light-color","scrollbar-track-color","shape-inside","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","zoom"],nonStandardPropertyKeywords=keySet(nonStandardPropertyKeywords_),fontProperties=keySet(["font-family","src","unicode-range","font-variant","font-feature-settings","font-stretch","font-weight","font-style"]),counterDescriptors=keySet(["additive-symbols","fallback","negative","pad","prefix","range","speak-as","suffix","symbols","system"]),colorKeywords_=["aliceblue","antiquewhite","aqua","aquamarine","azure","beige","bisque","black","blanchedalmond","blue","blueviolet","brown","burlywood","cadetblue","chartreuse","chocolate","coral","cornflowerblue","cornsilk","crimson","cyan","darkblue","darkcyan","darkgoldenrod","darkgray","darkgreen","darkkhaki","darkmagenta","darkolivegreen","darkorange","darkorchid","darkred","darksalmon","darkseagreen","darkslateblue","darkslategray","darkturquoise","darkviolet","deeppink","deepskyblue","dimgray","dodgerblue","firebrick","floralwhite","forestgreen","fuchsia","gainsboro","ghostwhite","gold","goldenrod","gray","grey","green","greenyellow","honeydew","hotpink","indianred","indigo","ivory","khaki","lavender","lavenderblush","lawngreen","lemonchiffon","lightblue","lightcoral","lightcyan","lightgoldenrodyellow","lightgray","lightgreen","lightpink","lightsalmon","lightseagreen","lightskyblue","lightslategray","lightsteelblue","lightyellow","lime","limegreen","linen","magenta","maroon","mediumaquamarine","mediumblue","mediumorchid","mediumpurple","mediumseagreen","mediumslateblue","mediumspringgreen","mediumturquoise","mediumvioletred","midnightblue","mintcream","mistyrose","moccasin","navajowhite","navy","oldlace","olive","olivedrab","orange","orangered","orchid","palegoldenrod","palegreen","paleturquoise","palevioletred","papayawhip","peachpuff","peru","pink","plum","powderblue","purple","rebeccapurple","red","rosybrown","royalblue","saddlebrown","salmon","sandybrown","seagreen","seashell","sienna","silver","skyblue","slateblue","slategray","snow","springgreen","steelblue","tan","teal","thistle","tomato","turquoise","violet","wheat","white","whitesmoke","yellow","yellowgreen"],colorKeywords=keySet(colorKeywords_),valueKeywords_=["above","absolute","activeborder","additive","activecaption","afar","after-white-space","ahead","alias","all","all-scroll","alphabetic","alternate","always","amharic","amharic-abegede","antialiased","appworkspace","arabic-indic","armenian","asterisks","attr","auto","auto-flow","avoid","avoid-column","avoid-page","avoid-region","background","backwards","baseline","below","bidi-override","binary","bengali","blink","block","block-axis","bold","bolder","border","border-box","both","bottom","break","break-all","break-word","bullets","button","button-bevel","buttonface","buttonhighlight","buttonshadow","buttontext","calc","cambodian","capitalize","caps-lock-indicator","caption","captiontext","caret","cell","center","checkbox","circle","cjk-decimal","cjk-earthly-branch","cjk-heavenly-stem","cjk-ideographic","clear","clip","close-quote","col-resize","collapse","color","color-burn","color-dodge","column","column-reverse","compact","condensed","contain","content","contents","content-box","context-menu","continuous","copy","counter","counters","cover","crop","cross","crosshair","currentcolor","cursive","cyclic","darken","dashed","decimal","decimal-leading-zero","default","default-button","dense","destination-atop","destination-in","destination-out","destination-over","devanagari","difference","disc","discard","disclosure-closed","disclosure-open","document","dot-dash","dot-dot-dash","dotted","double","down","e-resize","ease","ease-in","ease-in-out","ease-out","element","ellipse","ellipsis","embed","end","ethiopic","ethiopic-abegede","ethiopic-abegede-am-et","ethiopic-abegede-gez","ethiopic-abegede-ti-er","ethiopic-abegede-ti-et","ethiopic-halehame-aa-er","ethiopic-halehame-aa-et","ethiopic-halehame-am-et","ethiopic-halehame-gez","ethiopic-halehame-om-et","ethiopic-halehame-sid-et","ethiopic-halehame-so-et","ethiopic-halehame-ti-er","ethiopic-halehame-ti-et","ethiopic-halehame-tig","ethiopic-numeric","ew-resize","exclusion","expanded","extends","extra-condensed","extra-expanded","fantasy","fast","fill","fixed","flat","flex","flex-end","flex-start","footnotes","forwards","from","geometricPrecision","georgian","graytext","grid","groove","gujarati","gurmukhi","hand","hangul","hangul-consonant","hard-light","hebrew","help","hidden","hide","higher","highlight","highlighttext","hiragana","hiragana-iroha","horizontal","hsl","hsla","hue","icon","ignore","inactiveborder","inactivecaption","inactivecaptiontext","infinite","infobackground","infotext","inherit","initial","inline","inline-axis","inline-block","inline-flex","inline-grid","inline-table","inset","inside","intrinsic","invert","italic","japanese-formal","japanese-informal","justify","kannada","katakana","katakana-iroha","keep-all","khmer","korean-hangul-formal","korean-hanja-formal","korean-hanja-informal","landscape","lao","large","larger","left","level","lighter","lighten","line-through","linear","linear-gradient","lines","list-item","listbox","listitem","local","logical","loud","lower","lower-alpha","lower-armenian","lower-greek","lower-hexadecimal","lower-latin","lower-norwegian","lower-roman","lowercase","ltr","luminosity","malayalam","match","matrix","matrix3d","media-controls-background","media-current-time-display","media-fullscreen-button","media-mute-button","media-play-button","media-return-to-realtime-button","media-rewind-button","media-seek-back-button","media-seek-forward-button","media-slider","media-sliderthumb","media-time-remaining-display","media-volume-slider","media-volume-slider-container","media-volume-sliderthumb","medium","menu","menulist","menulist-button","menulist-text","menulist-textfield","menutext","message-box","middle","min-intrinsic","mix","mongolian","monospace","move","multiple","multiply","myanmar","n-resize","narrower","ne-resize","nesw-resize","no-close-quote","no-drop","no-open-quote","no-repeat","none","normal","not-allowed","nowrap","ns-resize","numbers","numeric","nw-resize","nwse-resize","oblique","octal","opacity","open-quote","optimizeLegibility","optimizeSpeed","oriya","oromo","outset","outside","outside-shape","overlay","overline","padding","padding-box","painted","page","paused","persian","perspective","plus-darker","plus-lighter","pointer","polygon","portrait","pre","pre-line","pre-wrap","preserve-3d","progress","push-button","radial-gradient","radio","read-only","read-write","read-write-plaintext-only","rectangle","region","relative","repeat","repeating-linear-gradient","repeating-radial-gradient","repeat-x","repeat-y","reset","reverse","rgb","rgba","ridge","right","rotate","rotate3d","rotateX","rotateY","rotateZ","round","row","row-resize","row-reverse","rtl","run-in","running","s-resize","sans-serif","saturation","scale","scale3d","scaleX","scaleY","scaleZ","screen","scroll","scrollbar","scroll-position","se-resize","searchfield","searchfield-cancel-button","searchfield-decoration","searchfield-results-button","searchfield-results-decoration","self-start","self-end","semi-condensed","semi-expanded","separate","serif","show","sidama","simp-chinese-formal","simp-chinese-informal","single","skew","skewX","skewY","skip-white-space","slide","slider-horizontal","slider-vertical","sliderthumb-horizontal","sliderthumb-vertical","slow","small","small-caps","small-caption","smaller","soft-light","solid","somali","source-atop","source-in","source-out","source-over","space","space-around","space-between","space-evenly","spell-out","square","square-button","start","static","status-bar","stretch","stroke","sub","subpixel-antialiased","super","sw-resize","symbolic","symbols","system-ui","table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row","table-row-group","tamil","telugu","text","text-bottom","text-top","textarea","textfield","thai","thick","thin","threeddarkshadow","threedface","threedhighlight","threedlightshadow","threedshadow","tibetan","tigre","tigrinya-er","tigrinya-er-abegede","tigrinya-et","tigrinya-et-abegede","to","top","trad-chinese-formal","trad-chinese-informal","transform","translate","translate3d","translateX","translateY","translateZ","transparent","ultra-condensed","ultra-expanded","underline","unset","up","upper-alpha","upper-armenian","upper-greek","upper-hexadecimal","upper-latin","upper-norwegian","upper-roman","uppercase","urdu","url","var","vertical","vertical-text","visible","visibleFill","visiblePainted","visibleStroke","visual","w-resize","wait","wave","wider","window","windowframe","windowtext","words","wrap","wrap-reverse","x-large","x-small","xor","xx-large","xx-small"],valueKeywords=keySet(valueKeywords_),allWords=documentTypes_.concat(mediaTypes_).concat(mediaFeatures_).concat(mediaValueKeywords_).concat(propertyKeywords_).concat(nonStandardPropertyKeywords_).concat(colorKeywords_).concat(valueKeywords_)
;function tokenCComment(stream,state){
for(var ch,maybeEnd=!1;null!=(ch=stream.next());){
if(maybeEnd&&"/"==ch){state.tokenize=null;break}
maybeEnd="*"==ch}return["comment","comment"]}
CodeMirror.registerHelper("hintWords","css",allWords),
CodeMirror.defineMIME("text/css",{
documentTypes:documentTypes,mediaTypes:mediaTypes,
mediaFeatures:mediaFeatures,
mediaValueKeywords:mediaValueKeywords,
propertyKeywords:propertyKeywords,
nonStandardPropertyKeywords:nonStandardPropertyKeywords,
fontProperties:fontProperties,
counterDescriptors:counterDescriptors,
colorKeywords:colorKeywords,
valueKeywords:valueKeywords,tokenHooks:{
"/":function(stream,state){
return!!stream.eat("*")&&(state.tokenize=tokenCComment,
tokenCComment(stream,state))}},name:"css"
}),CodeMirror.defineMIME("text/x-scss",{
mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,
mediaValueKeywords:mediaValueKeywords,
propertyKeywords:propertyKeywords,
nonStandardPropertyKeywords:nonStandardPropertyKeywords,
colorKeywords:colorKeywords,
valueKeywords:valueKeywords,
fontProperties:fontProperties,allowNested:!0,
lineComment:"//",tokenHooks:{
"/":function(stream,state){
return stream.eat("/")?(stream.skipToEnd(),["comment","comment"]):stream.eat("*")?(state.tokenize=tokenCComment,
tokenCComment(stream,state)):["operator","operator"]
},":":function(stream){
return!!stream.match(/\s*\{/,!1)&&[null,null]},
$:function(stream){
return stream.match(/^[\w-]+/),stream.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"]
},"#":function(stream){
return!!stream.eat("{")&&[null,"interpolation"]}},
name:"css",helperType:"scss"
}),CodeMirror.defineMIME("text/x-less",{
mediaTypes:mediaTypes,mediaFeatures:mediaFeatures,
mediaValueKeywords:mediaValueKeywords,
propertyKeywords:propertyKeywords,
nonStandardPropertyKeywords:nonStandardPropertyKeywords,
colorKeywords:colorKeywords,
valueKeywords:valueKeywords,
fontProperties:fontProperties,allowNested:!0,
lineComment:"//",tokenHooks:{
"/":function(stream,state){
return stream.eat("/")?(stream.skipToEnd(),["comment","comment"]):stream.eat("*")?(state.tokenize=tokenCComment,
tokenCComment(stream,state)):["operator","operator"]
},"@":function(stream){
return stream.eat("{")?[null,"interpolation"]:!stream.match(/^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,!1)&&(stream.eatWhile(/[\w\\\-]/),
stream.match(/^\s*:/,!1)?["variable-2","variable-definition"]:["variable-2","variable"])
},"&":function(){return["atom","atom"]}},
name:"css",helperType:"less"
}),CodeMirror.defineMIME("text/x-gss",{
documentTypes:documentTypes,mediaTypes:mediaTypes,
mediaFeatures:mediaFeatures,
propertyKeywords:propertyKeywords,
nonStandardPropertyKeywords:nonStandardPropertyKeywords,
fontProperties:fontProperties,
counterDescriptors:counterDescriptors,
colorKeywords:colorKeywords,
valueKeywords:valueKeywords,
supportsAtComponent:!0,tokenHooks:{
"/":function(stream,state){
return!!stream.eat("*")&&(state.tokenize=tokenCComment,
tokenCComment(stream,state))}},name:"css",
helperType:"gss"})}(codemirror)
}),createCommonjsModule(function(module,exports){
!function(CodeMirror){var defaultTags={
script:[["lang",/(javascript|babel)/i,"javascript"],["type",/^(?:text|application)\/(?:x-)?(?:java|ecma)script$|^module$|^$/i,"javascript"],["type",/./,"text/plain"],[null,null,"javascript"]],
style:[["lang",/^css$/i,"css"],["type",/^(text\/)?(x-)?(stylesheet|css)$/i,"css"],["type",/./,"text/plain"],[null,null,"css"]]
},attrRegexpCache={}
;function getAttrValue(text,attr){
var match=text.match(function(attr){
var regexp=attrRegexpCache[attr]
;return regexp||(attrRegexpCache[attr]=new RegExp("\\s+"+attr+"\\s*=\\s*('|\")?([^'\"]+)('|\")?\\s*"))
}(attr))
;return match?/^\s*(.*?)\s*$/.exec(match[2])[1]:""
}function getTagRegexp(tagName,anchored){
return new RegExp((anchored?"^":"")+"</s*"+tagName+"s*>","i")
}function addTags(from,to){
for(var tag in from)for(var dest=to[tag]||(to[tag]=[]),source=from[tag],i=source.length-1;i>=0;i--)dest.unshift(source[i])
}
CodeMirror.defineMode("htmlmixed",function(config,parserConfig){
var htmlMode=CodeMirror.getMode(config,{
name:"xml",htmlMode:!0,
multilineTagIndentFactor:parserConfig.multilineTagIndentFactor,
multilineTagIndentPastTag:parserConfig.multilineTagIndentPastTag
}),tags={},configTags=parserConfig&&parserConfig.tags,configScript=parserConfig&&parserConfig.scriptTypes
;if(addTags(defaultTags,tags),
configTags&&addTags(configTags,tags),configScript)for(var i=configScript.length-1;i>=0;i--)tags.script.unshift(["type",configScript[i].matches,configScript[i].mode])
;function html(stream,state){
var tagName,style=htmlMode.token(stream,state.htmlState),tag=/\btag\b/.test(style)
;if(tag&&!/[<>\s\/]/.test(stream.current())&&(tagName=state.htmlState.tagName&&state.htmlState.tagName.toLowerCase())&&tags.hasOwnProperty(tagName))state.inTag=tagName+" ";else if(state.inTag&&tag&&/>$/.test(stream.current())){
var inTag=/^([\S]+) (.*)/.exec(state.inTag)
;state.inTag=null
;var modeSpec=">"==stream.current()&&function(tagInfo,tagText){
for(var i=0;i<tagInfo.length;i++){
var spec=tagInfo[i]
;if(!spec[0]||spec[1].test(getAttrValue(tagText,spec[0])))return spec[2]
}
}(tags[inTag[1]],inTag[2]),mode=CodeMirror.getMode(config,modeSpec),endTagA=getTagRegexp(inTag[1],!0),endTag=getTagRegexp(inTag[1],!1)
;state.token=function(stream,state){
return stream.match(endTagA,!1)?(state.token=html,
state.localState=state.localMode=null,
null):function(stream,pat,style){
var cur=stream.current(),close=cur.search(pat)
;return close>-1?stream.backUp(cur.length-close):cur.match(/<\/?$/)&&(stream.backUp(cur.length),
stream.match(pat,!1)||stream.match(cur)),style
}(stream,endTag,state.localMode.token(stream,state.localState))
},state.localMode=mode,
state.localState=CodeMirror.startState(mode,htmlMode.indent(state.htmlState,"",""))
}else state.inTag&&(state.inTag+=stream.current(),
stream.eol()&&(state.inTag+=" "));return style}
return{startState:function(){
var state=CodeMirror.startState(htmlMode);return{
token:html,inTag:null,localMode:null,
localState:null,htmlState:state}},
copyState:function(state){var local
;return state.localState&&(local=CodeMirror.copyState(state.localMode,state.localState)),
{token:state.token,inTag:state.inTag,
localMode:state.localMode,localState:local,
htmlState:CodeMirror.copyState(htmlMode,state.htmlState)
}},token:function(stream,state){
return state.token(stream,state)},
indent:function(state,textAfter,line){
return!state.localMode||/^\s*<\//.test(textAfter)?htmlMode.indent(state.htmlState,textAfter,line):state.localMode.indent?state.localMode.indent(state.localState,textAfter,line):CodeMirror.Pass
},innerMode:function(state){return{
state:state.localState||state.htmlState,
mode:state.localMode||htmlMode}}}
},"xml","javascript","css"),CodeMirror.defineMIME("text/html","htmlmixed")
}(codemirror)}),codemirror)
;export default codemirror
;export{_codemirror as __moduleExports};
//# sourceMappingURL=chunk.09f27a39.js.map
