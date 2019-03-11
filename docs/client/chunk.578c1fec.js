import{a as _typeof,b as createCommonjsModule,c as commonjsGlobal,d as unwrapExports}from"./chunk.b0ae64c3.js"

;import{a as assign,b as protoDev,c as init,o as createComment,k as insert,q as handlePromise,i as detachNode,r as assignTrue,g as children,n as flush,d as createElement,e as createText,f as claimElement,h as claimText,j as addLoc,l as append,s as noop,p as setData,t as addListener,u as removeListener,v as setAttribute}from"./chunk.42d23e7c.js"

;import{a as _asyncToGenerator,b as _regeneratorRuntime}from"./chunk.4f4de8d6.js"

;var source,parseState,stack,pos,line,column,token,key,root,lexState,buffer,doubleQuote,_sign,c,unicode={
Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,
ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
},util={isSpaceSeparator:function(c){
return unicode.Space_Separator.test(c)},
isIdStartChar:function(c){
return c>="a"&&c<="z"||c>="A"&&c<="Z"||"$"===c||"_"===c||unicode.ID_Start.test(c)
},isIdContinueChar:function(c){
return c>="a"&&c<="z"||c>="A"&&c<="Z"||c>="0"&&c<="9"||"$"===c||"_"===c||"‌"===c||"‍"===c||unicode.ID_Continue.test(c)
},isDigit:function(c){return/[0-9]/.test(c)},
isHexDigit:function(c){return/[0-9A-Fa-f]/.test(c)
}};function lex(){
for(lexState="default",buffer="",doubleQuote=!1,_sign=1;;){
c=peek();var _token=lexStates[lexState]()
;if(_token)return _token}}function peek(){
if(source[pos])return String.fromCodePoint(source.codePointAt(pos))
}function read(){var c=peek()
;return"\n"===c?(line++,column=0):c?column+=c.length:column++,
c&&(pos+=c.length),c}var lexStates={
default:function(){switch(c){case"\t":case"\v":
case"\f":case" ":case" ":case"\ufeff":case"\n":
case"\r":case"\u2028":case"\u2029":
return void read();case"/":
return read(),void(lexState="comment")
;case void 0:return read(),newToken("eof")}
if(!util.isSpaceSeparator(c))return lexStates[parseState]()
;read()},comment:function(){switch(c){case"*":
return read(),void(lexState="multiLineComment")
;case"/":
return read(),void(lexState="singleLineComment")}
throw invalidChar(read())},
multiLineComment:function(){switch(c){case"*":
return read(),void(lexState="multiLineCommentAsterisk")
;case void 0:throw invalidChar(read())}read()},
multiLineCommentAsterisk:function(){switch(c){
case"*":return void read();case"/":
return read(),void(lexState="default")
;case void 0:throw invalidChar(read())}
read(),lexState="multiLineComment"},
singleLineComment:function(){switch(c){case"\n":
case"\r":case"\u2028":case"\u2029":
return read(),void(lexState="default")
;case void 0:return read(),newToken("eof")}read()
},value:function(){switch(c){case"{":case"[":
return newToken("punctuator",read());case"n":
return read(),literal("ull"),newToken("null",null)
;case"t":
return read(),literal("rue"),newToken("boolean",!0)
;case"f":
return read(),literal("alse"),newToken("boolean",!1)
;case"-":case"+":
return"-"===read()&&(_sign=-1),void(lexState="sign")
;case".":
return buffer=read(),void(lexState="decimalPointLeading")
;case"0":
return buffer=read(),void(lexState="zero")
;case"1":case"2":case"3":case"4":case"5":case"6":
case"7":case"8":case"9":
return buffer=read(),void(lexState="decimalInteger")
;case"I":
return read(),literal("nfinity"),newToken("numeric",1/0)
;case"N":
return read(),literal("aN"),newToken("numeric",NaN)
;case'"':case"'":
return doubleQuote='"'===read(),buffer="",void(lexState="string")
}throw invalidChar(read())},
identifierNameStartEscape:function(){
if("u"!==c)throw invalidChar(read());read()
;var u=unicodeEscape();switch(u){case"$":case"_":
break;default:
if(!util.isIdStartChar(u))throw invalidIdentifier()
}buffer+=u,lexState="identifierName"},
identifierName:function(){switch(c){case"$":
case"_":case"‌":case"‍":
return void(buffer+=read());case"\\":
return read(),void(lexState="identifierNameEscape")
}
if(!util.isIdContinueChar(c))return newToken("identifier",buffer)
;buffer+=read()},identifierNameEscape:function(){
if("u"!==c)throw invalidChar(read());read()
;var u=unicodeEscape();switch(u){case"$":case"_":
case"‌":case"‍":break;default:
if(!util.isIdContinueChar(u))throw invalidIdentifier()
}buffer+=u,lexState="identifierName"},
sign:function(){switch(c){case".":
return buffer=read(),void(lexState="decimalPointLeading")
;case"0":
return buffer=read(),void(lexState="zero")
;case"1":case"2":case"3":case"4":case"5":case"6":
case"7":case"8":case"9":
return buffer=read(),void(lexState="decimalInteger")
;case"I":
return read(),literal("nfinity"),newToken("numeric",_sign*(1/0))
;case"N":
return read(),literal("aN"),newToken("numeric",NaN)
}throw invalidChar(read())},zero:function(){
switch(c){case".":
return buffer+=read(),void(lexState="decimalPoint")
;case"e":case"E":
return buffer+=read(),void(lexState="decimalExponent")
;case"x":case"X":
return buffer+=read(),void(lexState="hexadecimal")
}return newToken("numeric",0*_sign)},
decimalInteger:function(){switch(c){case".":
return buffer+=read(),void(lexState="decimalPoint")
;case"e":case"E":
return buffer+=read(),void(lexState="decimalExponent")
}
if(!util.isDigit(c))return newToken("numeric",_sign*Number(buffer))
;buffer+=read()},decimalPointLeading:function(){
if(util.isDigit(c))return buffer+=read(),
void(lexState="decimalFraction")
;throw invalidChar(read())},
decimalPoint:function(){switch(c){case"e":case"E":
return buffer+=read(),void(lexState="decimalExponent")
}
return util.isDigit(c)?(buffer+=read(),void(lexState="decimalFraction")):newToken("numeric",_sign*Number(buffer))
},decimalFraction:function(){switch(c){case"e":
case"E":
return buffer+=read(),void(lexState="decimalExponent")
}
if(!util.isDigit(c))return newToken("numeric",_sign*Number(buffer))
;buffer+=read()},decimalExponent:function(){
switch(c){case"+":case"-":
return buffer+=read(),void(lexState="decimalExponentSign")
}
if(util.isDigit(c))return buffer+=read(),void(lexState="decimalExponentInteger")
;throw invalidChar(read())},
decimalExponentSign:function(){
if(util.isDigit(c))return buffer+=read(),void(lexState="decimalExponentInteger")
;throw invalidChar(read())},
decimalExponentInteger:function(){
if(!util.isDigit(c))return newToken("numeric",_sign*Number(buffer))
;buffer+=read()},hexadecimal:function(){
if(util.isHexDigit(c))return buffer+=read(),
void(lexState="hexadecimalInteger")
;throw invalidChar(read())},
hexadecimalInteger:function(){
if(!util.isHexDigit(c))return newToken("numeric",_sign*Number(buffer))
;buffer+=read()},string:function(){switch(c){
case"\\":return read(),void(buffer+=function(){
switch(peek()){case"b":return read(),"\b";case"f":
return read(),"\f";case"n":return read(),"\n"
;case"r":return read(),"\r";case"t":
return read(),"\t";case"v":return read(),"\v"
;case"0":
if(read(),util.isDigit(peek()))throw invalidChar(read())
;return"\0";case"x":return read(),function(){
var buffer="",c=peek()
;if(!util.isHexDigit(c))throw invalidChar(read())
;if(buffer+=read(),c=peek(),!util.isHexDigit(c))throw invalidChar(read())
;return buffer+=read(),
String.fromCodePoint(parseInt(buffer,16))}()
;case"u":return read(),unicodeEscape();case"\n":
case"\u2028":case"\u2029":return read(),""
;case"\r":return read(),"\n"===peek()&&read(),""
;case"1":case"2":case"3":case"4":case"5":case"6":
case"7":case"8":case"9":case void 0:
throw invalidChar(read())}return read()}())
;case'"':
return doubleQuote?(read(),newToken("string",buffer)):void(buffer+=read())
;case"'":
return doubleQuote?void(buffer+=read()):(read(),newToken("string",buffer))
;case"\n":case"\r":throw invalidChar(read())
;case"\u2028":case"\u2029":!function(c){
console.warn("JSON5: '".concat(formatChar(c),"' in strings is not valid ECMAScript; consider escaping"))
}(c);break;case void 0:throw invalidChar(read())}
buffer+=read()},start:function(){switch(c){
case"{":case"[":
return newToken("punctuator",read())}
lexState="value"},beforePropertyName:function(){
switch(c){case"$":case"_":
return buffer=read(),void(lexState="identifierName")
;case"\\":
return read(),void(lexState="identifierNameStartEscape")
;case"}":return newToken("punctuator",read())
;case'"':case"'":
return doubleQuote='"'===read(),void(lexState="string")
}
if(util.isIdStartChar(c))return buffer+=read(),void(lexState="identifierName")
;throw invalidChar(read())},
afterPropertyName:function(){
if(":"===c)return newToken("punctuator",read())
;throw invalidChar(read())},
beforePropertyValue:function(){lexState="value"},
afterPropertyValue:function(){switch(c){case",":
case"}":return newToken("punctuator",read())}
throw invalidChar(read())},
beforeArrayValue:function(){
if("]"===c)return newToken("punctuator",read())
;lexState="value"},afterArrayValue:function(){
switch(c){case",":case"]":
return newToken("punctuator",read())}
throw invalidChar(read())},end:function(){
throw invalidChar(read())}}
;function newToken(type,value){return{type:type,
value:value,line:line,column:column}}
function literal(s){
var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0
;try{
for(var _step,_iterator=s[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){
var _c=_step.value
;if(peek()!==_c)throw invalidChar(read());read()}
}catch(err){
_didIteratorError=!0,_iteratorError=err}finally{
try{
_iteratorNormalCompletion||null==_iterator.return||_iterator.return()
}finally{if(_didIteratorError)throw _iteratorError
}}}function unicodeEscape(){
for(var buffer="",count=4;count-- >0;){
var _c2=peek()
;if(!util.isHexDigit(_c2))throw invalidChar(read())
;buffer+=read()}
return String.fromCodePoint(parseInt(buffer,16))}
var parseStates={start:function(){
if("eof"===token.type)throw invalidEOF();push()},
beforePropertyName:function(){switch(token.type){
case"identifier":case"string":
return key=token.value,void(parseState="afterPropertyName")
;case"punctuator":return void pop();case"eof":
throw invalidEOF()}},afterPropertyName:function(){
if("eof"===token.type)throw invalidEOF()
;parseState="beforePropertyValue"},
beforePropertyValue:function(){
if("eof"===token.type)throw invalidEOF();push()},
beforeArrayValue:function(){
if("eof"===token.type)throw invalidEOF()
;"punctuator"!==token.type||"]"!==token.value?push():pop()
},afterPropertyValue:function(){
if("eof"===token.type)throw invalidEOF()
;switch(token.value){case",":
return void(parseState="beforePropertyName")
;case"}":pop()}},afterArrayValue:function(){
if("eof"===token.type)throw invalidEOF()
;switch(token.value){case",":
return void(parseState="beforeArrayValue")
;case"]":pop()}},end:function(){}}
;function push(){var value;switch(token.type){
case"punctuator":switch(token.value){case"{":
value={};break;case"[":value=[]}break;case"null":
case"boolean":case"numeric":case"string":
value=token.value}
if(void 0===root)root=value;else{
var parent=stack[stack.length-1]
;Array.isArray(parent)?parent.push(value):parent[key]=value
}
if(null!==value&&"object"===_typeof(value))stack.push(value),parseState=Array.isArray(value)?"beforeArrayValue":"beforePropertyName";else{
var current=stack[stack.length-1]
;parseState=null==current?"end":Array.isArray(current)?"afterArrayValue":"afterPropertyValue"
}}function pop(){stack.pop()
;var current=stack[stack.length-1]
;parseState=null==current?"end":Array.isArray(current)?"afterArrayValue":"afterPropertyValue"
}function invalidChar(c){
return syntaxError(void 0===c?"JSON5: invalid end of input at ".concat(line,":").concat(column):"JSON5: invalid character '".concat(formatChar(c),"' at ").concat(line,":").concat(column))
}function invalidEOF(){
return syntaxError("JSON5: invalid end of input at ".concat(line,":").concat(column))
}function invalidIdentifier(){
return column-=5,syntaxError("JSON5: invalid identifier character at ".concat(line,":").concat(column))
}function formatChar(c){var replacements={
"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b",
"\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t",
"\v":"\\v","\0":"\\0","\u2028":"\\u2028",
"\u2029":"\\u2029"}
;if(replacements[c])return replacements[c]
;if(c<" "){
var hexString=c.charCodeAt(0).toString(16)
;return"\\x"+("00"+hexString).substring(hexString.length)
}return c}function syntaxError(message){
var err=new SyntaxError(message)
;return err.lineNumber=line,err.columnNumber=column,
err}var lib={parse:function(text,reviver){
source=String(text),parseState="start",
stack=[],pos=0,line=1,column=0,token=void 0,
key=void 0,root=void 0;do{
token=lex(),parseStates[parseState]()
}while("eof"!==token.type)
;return"function"==typeof reviver?function internalize(holder,name,reviver){
var value=holder[name]
;if(null!=value&&"object"===_typeof(value))for(var _key in value){
var replacement=internalize(value,_key,reviver)
;void 0===replacement?delete value[_key]:value[_key]=replacement
}return reviver.call(holder,name,value)}({"":root
},"",reviver):root},
stringify:function(value,replacer,space){
var propertyList,replacerFunc,quote,stack=[],indent="",gap=""
;if(null==replacer||"object"!==_typeof(replacer)||Array.isArray(replacer)||(space=replacer.space,
quote=replacer.quote,
replacer=replacer.replacer),"function"==typeof replacer)replacerFunc=replacer;else if(Array.isArray(replacer)){
propertyList=[]
;var _iteratorNormalCompletion=!0,_didIteratorError=!1,_iteratorError=void 0
;try{
for(var _step,_iterator=replacer[Symbol.iterator]();!(_iteratorNormalCompletion=(_step=_iterator.next()).done);_iteratorNormalCompletion=!0){
var v=_step.value,item=void 0
;"string"==typeof v?item=v:("number"==typeof v||v instanceof String||v instanceof Number)&&(item=String(v)),
void 0!==item&&propertyList.indexOf(item)<0&&propertyList.push(item)
}}catch(err){
_didIteratorError=!0,_iteratorError=err}finally{
try{
_iteratorNormalCompletion||null==_iterator.return||_iterator.return()
}finally{if(_didIteratorError)throw _iteratorError
}}}
return space instanceof Number?space=Number(space):space instanceof String&&(space=String(space)),
"number"==typeof space?space>0&&(space=Math.min(10,Math.floor(space)),
gap="          ".substr(0,space)):"string"==typeof space&&(gap=space.substr(0,10)),
serializeProperty("",{"":value})
;function serializeProperty(key,holder){
var value=holder[key]
;switch(null!=value&&("function"==typeof value.toJSON5?value=value.toJSON5(key):"function"==typeof value.toJSON&&(value=value.toJSON(key))),
replacerFunc&&(value=replacerFunc.call(holder,key,value)),
value instanceof Number?value=Number(value):value instanceof String?value=String(value):value instanceof Boolean&&(value=value.valueOf()),
value){case null:return"null";case!0:return"true"
;case!1:return"false"}
return"string"==typeof value?quoteString(value):"number"==typeof value?String(value):"object"===_typeof(value)?Array.isArray(value)?function(value){
if(stack.indexOf(value)>=0)throw TypeError("Converting circular structure to JSON5")
;stack.push(value);var stepback=indent;indent+=gap
;for(var final,partial=[],i=0;i<value.length;i++){
var propertyString=serializeProperty(String(i),value)
;partial.push(void 0!==propertyString?propertyString:"null")
}
if(0===partial.length)final="[]";else if(""===gap){
var properties=partial.join(",")
;final="["+properties+"]"}else{
var separator=",\n"+indent,_properties=partial.join(separator)
;final="[\n"+indent+_properties+",\n"+stepback+"]"
}return stack.pop(),indent=stepback,final
}(value):function(value){
if(stack.indexOf(value)>=0)throw TypeError("Converting circular structure to JSON5")
;stack.push(value);var stepback=indent;indent+=gap
;var final,properties,keys=propertyList||Object.keys(value),partial=[],_iteratorNormalCompletion3=!0,_didIteratorError3=!1,_iteratorError3=void 0
;try{
for(var _step3,_iterator3=keys[Symbol.iterator]();!(_iteratorNormalCompletion3=(_step3=_iterator3.next()).done);_iteratorNormalCompletion3=!0){
var key=_step3.value,propertyString=serializeProperty(key,value)
;if(void 0!==propertyString){
var member=serializeKey(key)+":"
;""!==gap&&(member+=" "),member+=propertyString,
partial.push(member)}}}catch(err){
_didIteratorError3=!0,_iteratorError3=err}finally{
try{
_iteratorNormalCompletion3||null==_iterator3.return||_iterator3.return()
}finally{
if(_didIteratorError3)throw _iteratorError3}}
if(0===partial.length)final="{}";else if(""===gap)properties=partial.join(","),
final="{"+properties+"}";else{
var separator=",\n"+indent
;properties=partial.join(separator),final="{\n"+indent+properties+",\n"+stepback+"}"
}return stack.pop(),indent=stepback,final
}(value):void 0}function quoteString(value){
var quotes={"'":.1,'"':.2},replacements={
"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b",
"\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t",
"\v":"\\v","\0":"\\0","\u2028":"\\u2028",
"\u2029":"\\u2029"
},product="",_iteratorNormalCompletion2=!0,_didIteratorError2=!1,_iteratorError2=void 0
;try{
for(var _step2,_iterator2=value[Symbol.iterator]();!(_iteratorNormalCompletion2=(_step2=_iterator2.next()).done);_iteratorNormalCompletion2=!0){
var c=_step2.value;switch(c){case"'":case'"':
quotes[c]++,product+=c;continue}
if(replacements[c])product+=replacements[c];else if(c<" "){
var hexString=c.charCodeAt(0).toString(16)
;product+="\\x"+("00"+hexString).substring(hexString.length)
}else product+=c}}catch(err){
_didIteratorError2=!0,_iteratorError2=err}finally{
try{
_iteratorNormalCompletion2||null==_iterator2.return||_iterator2.return()
}finally{
if(_didIteratorError2)throw _iteratorError2}}
var quoteChar=quote||Object.keys(quotes).reduce(function(a,b){
return quotes[a]<quotes[b]?a:b})
;return quoteChar+(product=product.replace(new RegExp(quoteChar,"g"),replacements[quoteChar]))+quoteChar
}function serializeKey(key){
if(0===key.length)return quoteString(key)
;var firstChar=String.fromCodePoint(key.codePointAt(0))
;if(!util.isIdStartChar(firstChar))return quoteString(key)
;for(var i=firstChar.length;i<key.length;i++)if(!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i))))return quoteString(key)
;return key}}}
;var codemirrorPromise,classCallCheck=function(instance,Constructor){
if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")
},esprima$1=unwrapExports(createCommonjsModule(function(module,exports){
var factory;factory=function(){
return function(modules){var installedModules={}
;function __webpack_require__(moduleId){
if(installedModules[moduleId])return installedModules[moduleId].exports
;var module=installedModules[moduleId]={
exports:{},id:moduleId,loaded:!1}
;return modules[moduleId].call(module.exports,module,module.exports,__webpack_require__),
module.loaded=!0,module.exports}
return __webpack_require__.m=modules,__webpack_require__.c=installedModules,
__webpack_require__.p="",__webpack_require__(0)
}([function(module,exports,__webpack_require__){
Object.defineProperty(exports,"__esModule",{
value:!0})
;var comment_handler_1=__webpack_require__(1),jsx_parser_1=__webpack_require__(3),parser_1=__webpack_require__(8),tokenizer_1=__webpack_require__(15)
;function parse(code,options,delegate){
var commentHandler=null,proxyDelegate=function(node,metadata){
delegate&&delegate(node,metadata),
commentHandler&&commentHandler.visit(node,metadata)
},parserDelegate="function"==typeof delegate?proxyDelegate:null,collectComment=!1
;if(options){
collectComment="boolean"==typeof options.comment&&options.comment
;var attachComment="boolean"==typeof options.attachComment&&options.attachComment
;(collectComment||attachComment)&&((commentHandler=new comment_handler_1.CommentHandler).attach=attachComment,
options.comment=!0,parserDelegate=proxyDelegate)}
var parser,isModule=!1
;options&&"string"==typeof options.sourceType&&(isModule="module"===options.sourceType),
parser=options&&"boolean"==typeof options.jsx&&options.jsx?new jsx_parser_1.JSXParser(code,options,parserDelegate):new parser_1.Parser(code,options,parserDelegate)
;var ast=isModule?parser.parseModule():parser.parseScript()
;return collectComment&&commentHandler&&(ast.comments=commentHandler.comments),
parser.config.tokens&&(ast.tokens=parser.tokens),
parser.config.tolerant&&(ast.errors=parser.errorHandler.errors),
ast}
exports.parse=parse,exports.parseModule=function(code,options,delegate){
var parsingOptions=options||{}
;return parsingOptions.sourceType="module",parse(code,parsingOptions,delegate)
},
exports.parseScript=function(code,options,delegate){
var parsingOptions=options||{}
;return parsingOptions.sourceType="script",parse(code,parsingOptions,delegate)
},
exports.tokenize=function(code,options,delegate){
var tokens,tokenizer=new tokenizer_1.Tokenizer(code,options)
;tokens=[];try{for(;;){
var token=tokenizer.getNextToken();if(!token)break
;delegate&&(token=delegate(token)),
tokens.push(token)}}catch(e){
tokenizer.errorHandler.tolerate(e)}
return tokenizer.errorHandler.tolerant&&(tokens.errors=tokenizer.errors()),
tokens};var syntax_1=__webpack_require__(2)
;exports.Syntax=syntax_1.Syntax,exports.version="4.0.1"
},function(module,exports,__webpack_require__){
Object.defineProperty(exports,"__esModule",{
value:!0})
;var syntax_1=__webpack_require__(2),CommentHandler=function(){
function CommentHandler(){
this.attach=!1,this.comments=[],this.stack=[],this.leading=[],
this.trailing=[]}
return CommentHandler.prototype.insertInnerComments=function(node,metadata){
if(node.type===syntax_1.Syntax.BlockStatement&&0===node.body.length){
for(var innerComments=[],i=this.leading.length-1;i>=0;--i){
var entry=this.leading[i]
;metadata.end.offset>=entry.start&&(innerComments.unshift(entry.comment),
this.leading.splice(i,1),
this.trailing.splice(i,1))}
innerComments.length&&(node.innerComments=innerComments)
}
},CommentHandler.prototype.findTrailingComments=function(metadata){
var trailingComments=[]
;if(this.trailing.length>0){
for(var i=this.trailing.length-1;i>=0;--i){
var entry_1=this.trailing[i]
;entry_1.start>=metadata.end.offset&&trailingComments.unshift(entry_1.comment)
}return this.trailing.length=0,trailingComments}
var entry=this.stack[this.stack.length-1]
;if(entry&&entry.node.trailingComments){
var firstComment=entry.node.trailingComments[0]
;firstComment&&firstComment.range[0]>=metadata.end.offset&&(trailingComments=entry.node.trailingComments,
delete entry.node.trailingComments)}
return trailingComments
},CommentHandler.prototype.findLeadingComments=function(metadata){
for(var target,leadingComments=[];this.stack.length>0;){
if(!((entry=this.stack[this.stack.length-1])&&entry.start>=metadata.start.offset))break
;target=entry.node,this.stack.pop()}if(target){
for(var i=(target.leadingComments?target.leadingComments.length:0)-1;i>=0;--i){
var comment=target.leadingComments[i]
;comment.range[1]<=metadata.start.offset&&(leadingComments.unshift(comment),
target.leadingComments.splice(i,1))}
return target.leadingComments&&0===target.leadingComments.length&&delete target.leadingComments,
leadingComments}
for(i=this.leading.length-1;i>=0;--i){var entry
;(entry=this.leading[i]).start<=metadata.start.offset&&(leadingComments.unshift(entry.comment),
this.leading.splice(i,1))}return leadingComments
},CommentHandler.prototype.visitNode=function(node,metadata){
if(!(node.type===syntax_1.Syntax.Program&&node.body.length>0)){
this.insertInnerComments(node,metadata)
;var trailingComments=this.findTrailingComments(metadata),leadingComments=this.findLeadingComments(metadata)
;leadingComments.length>0&&(node.leadingComments=leadingComments),
trailingComments.length>0&&(node.trailingComments=trailingComments),
this.stack.push({node:node,
start:metadata.start.offset})}
},CommentHandler.prototype.visitComment=function(node,metadata){
var type="L"===node.type[0]?"Line":"Block",comment={
type:type,value:node.value}
;if(node.range&&(comment.range=node.range),node.loc&&(comment.loc=node.loc),
this.comments.push(comment),this.attach){
var entry={comment:{type:type,value:node.value,
range:[metadata.start.offset,metadata.end.offset]
},start:metadata.start.offset}
;node.loc&&(entry.comment.loc=node.loc),node.type=type,
this.leading.push(entry),this.trailing.push(entry)
}
},CommentHandler.prototype.visit=function(node,metadata){
"LineComment"===node.type?this.visitComment(node,metadata):"BlockComment"===node.type?this.visitComment(node,metadata):this.attach&&this.visitNode(node,metadata)
},CommentHandler}()
;exports.CommentHandler=CommentHandler
},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0}),exports.Syntax={
AssignmentExpression:"AssignmentExpression",
AssignmentPattern:"AssignmentPattern",
ArrayExpression:"ArrayExpression",
ArrayPattern:"ArrayPattern",
ArrowFunctionExpression:"ArrowFunctionExpression",
AwaitExpression:"AwaitExpression",
BlockStatement:"BlockStatement",
BinaryExpression:"BinaryExpression",
BreakStatement:"BreakStatement",
CallExpression:"CallExpression",
CatchClause:"CatchClause",ClassBody:"ClassBody",
ClassDeclaration:"ClassDeclaration",
ClassExpression:"ClassExpression",
ConditionalExpression:"ConditionalExpression",
ContinueStatement:"ContinueStatement",
DoWhileStatement:"DoWhileStatement",
DebuggerStatement:"DebuggerStatement",
EmptyStatement:"EmptyStatement",
ExportAllDeclaration:"ExportAllDeclaration",
ExportDefaultDeclaration:"ExportDefaultDeclaration",
ExportNamedDeclaration:"ExportNamedDeclaration",
ExportSpecifier:"ExportSpecifier",
ExpressionStatement:"ExpressionStatement",
ForStatement:"ForStatement",
ForOfStatement:"ForOfStatement",
ForInStatement:"ForInStatement",
FunctionDeclaration:"FunctionDeclaration",
FunctionExpression:"FunctionExpression",
Identifier:"Identifier",IfStatement:"IfStatement",
ImportDeclaration:"ImportDeclaration",
ImportDefaultSpecifier:"ImportDefaultSpecifier",
ImportNamespaceSpecifier:"ImportNamespaceSpecifier",
ImportSpecifier:"ImportSpecifier",
Literal:"Literal",
LabeledStatement:"LabeledStatement",
LogicalExpression:"LogicalExpression",
MemberExpression:"MemberExpression",
MetaProperty:"MetaProperty",
MethodDefinition:"MethodDefinition",
NewExpression:"NewExpression",
ObjectExpression:"ObjectExpression",
ObjectPattern:"ObjectPattern",Program:"Program",
Property:"Property",RestElement:"RestElement",
ReturnStatement:"ReturnStatement",
SequenceExpression:"SequenceExpression",
SpreadElement:"SpreadElement",Super:"Super",
SwitchCase:"SwitchCase",
SwitchStatement:"SwitchStatement",
TaggedTemplateExpression:"TaggedTemplateExpression",
TemplateElement:"TemplateElement",
TemplateLiteral:"TemplateLiteral",
ThisExpression:"ThisExpression",
ThrowStatement:"ThrowStatement",
TryStatement:"TryStatement",
UnaryExpression:"UnaryExpression",
UpdateExpression:"UpdateExpression",
VariableDeclaration:"VariableDeclaration",
VariableDeclarator:"VariableDeclarator",
WhileStatement:"WhileStatement",
WithStatement:"WithStatement",
YieldExpression:"YieldExpression"}
},function(module,exports,__webpack_require__){
var extendStatics,__extends=this&&this.__extends||(extendStatics=Object.setPrototypeOf||{
__proto__:[]}instanceof Array&&function(d,b){
d.__proto__=b}||function(d,b){
for(var p in b)b.hasOwnProperty(p)&&(d[p]=b[p])
},function(d,b){function __(){this.constructor=d}
extendStatics(d,b),d.prototype=null===b?Object.create(b):(__.prototype=b.prototype,
new __)})
;Object.defineProperty(exports,"__esModule",{
value:!0})
;var character_1=__webpack_require__(4),JSXNode=__webpack_require__(5),jsx_syntax_1=__webpack_require__(6),Node=__webpack_require__(7),parser_1=__webpack_require__(8),token_1=__webpack_require__(13),xhtml_entities_1=__webpack_require__(14)
;function getQualifiedElementName(elementName){
var qualifiedName;switch(elementName.type){
case jsx_syntax_1.JSXSyntax.JSXIdentifier:
qualifiedName=elementName.name;break
;case jsx_syntax_1.JSXSyntax.JSXNamespacedName:
var ns=elementName
;qualifiedName=getQualifiedElementName(ns.namespace)+":"+getQualifiedElementName(ns.name)
;break
;case jsx_syntax_1.JSXSyntax.JSXMemberExpression:
var expr=elementName
;qualifiedName=getQualifiedElementName(expr.object)+"."+getQualifiedElementName(expr.property)
}return qualifiedName}
token_1.TokenName[100]="JSXIdentifier",token_1.TokenName[101]="JSXText"
;var JSXParser=function(_super){
function JSXParser(code,options,delegate){
return _super.call(this,code,options,delegate)||this
}
return __extends(JSXParser,_super),JSXParser.prototype.parsePrimaryExpression=function(){
return this.match("<")?this.parseJSXRoot():_super.prototype.parsePrimaryExpression.call(this)
},JSXParser.prototype.startJSX=function(){
this.scanner.index=this.startMarker.index,
this.scanner.lineNumber=this.startMarker.line,
this.scanner.lineStart=this.startMarker.index-this.startMarker.column
},JSXParser.prototype.finishJSX=function(){
this.nextToken()
},JSXParser.prototype.reenterJSX=function(){
this.startJSX(),this.expectJSX("}"),
this.config.tokens&&this.tokens.pop()
},JSXParser.prototype.createJSXNode=function(){
return this.collectComments(),{
index:this.scanner.index,
line:this.scanner.lineNumber,
column:this.scanner.index-this.scanner.lineStart}
},JSXParser.prototype.createJSXChildNode=function(){
return{index:this.scanner.index,
line:this.scanner.lineNumber,
column:this.scanner.index-this.scanner.lineStart}
},JSXParser.prototype.scanXHTMLEntity=function(quote){
for(var result="&",valid=!0,terminated=!1,numeric=!1,hex=!1;!this.scanner.eof()&&valid&&!terminated;){
var ch=this.scanner.source[this.scanner.index]
;if(ch===quote)break
;if(terminated=";"===ch,result+=ch,++this.scanner.index,!terminated)switch(result.length){
case 2:numeric="#"===ch;break;case 3:
numeric&&(valid=(hex="x"===ch)||character_1.Character.isDecimalDigit(ch.charCodeAt(0)),
numeric=numeric&&!hex);break;default:
valid=(valid=valid&&!(numeric&&!character_1.Character.isDecimalDigit(ch.charCodeAt(0))))&&!(hex&&!character_1.Character.isHexDigit(ch.charCodeAt(0)))
}}if(valid&&terminated&&result.length>2){
var str=result.substr(1,result.length-2)
;numeric&&str.length>1?result=String.fromCharCode(parseInt(str.substr(1),10)):hex&&str.length>2?result=String.fromCharCode(parseInt("0"+str.substr(1),16)):numeric||hex||!xhtml_entities_1.XHTMLEntities[str]||(result=xhtml_entities_1.XHTMLEntities[str])
}return result
},JSXParser.prototype.lexJSX=function(){
var cp=this.scanner.source.charCodeAt(this.scanner.index)
;if(60===cp||62===cp||47===cp||58===cp||61===cp||123===cp||125===cp)return{
type:7,
value:value=this.scanner.source[this.scanner.index++],
lineNumber:this.scanner.lineNumber,
lineStart:this.scanner.lineStart,
start:this.scanner.index-1,end:this.scanner.index}
;if(34===cp||39===cp){
for(var start=this.scanner.index,quote=this.scanner.source[this.scanner.index++],str="";!this.scanner.eof();){
if((ch=this.scanner.source[this.scanner.index++])===quote)break
;str+="&"===ch?this.scanXHTMLEntity(quote):ch}
return{type:8,value:str,
lineNumber:this.scanner.lineNumber,
lineStart:this.scanner.lineStart,start:start,
end:this.scanner.index}}if(46===cp){
var n1=this.scanner.source.charCodeAt(this.scanner.index+1),n2=this.scanner.source.charCodeAt(this.scanner.index+2),value=46===n1&&46===n2?"...":"."
;start=this.scanner.index
;return this.scanner.index+=value.length,{type:7,
value:value,lineNumber:this.scanner.lineNumber,
lineStart:this.scanner.lineStart,start:start,
end:this.scanner.index}}if(96===cp)return{type:10,
value:"",lineNumber:this.scanner.lineNumber,
lineStart:this.scanner.lineStart,
start:this.scanner.index,end:this.scanner.index}
;if(character_1.Character.isIdentifierStart(cp)&&92!==cp){
start=this.scanner.index
;for(++this.scanner.index;!this.scanner.eof();){
var ch=this.scanner.source.charCodeAt(this.scanner.index)
;if(character_1.Character.isIdentifierPart(ch)&&92!==ch)++this.scanner.index;else{
if(45!==ch)break;++this.scanner.index}}return{
type:100,
value:this.scanner.source.slice(start,this.scanner.index),
lineNumber:this.scanner.lineNumber,
lineStart:this.scanner.lineStart,start:start,
end:this.scanner.index}}return this.scanner.lex()
},JSXParser.prototype.nextJSXToken=function(){
this.collectComments(),this.startMarker.index=this.scanner.index,
this.startMarker.line=this.scanner.lineNumber,
this.startMarker.column=this.scanner.index-this.scanner.lineStart
;var token=this.lexJSX()
;return this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,
this.lastMarker.column=this.scanner.index-this.scanner.lineStart,
this.config.tokens&&this.tokens.push(this.convertToken(token)),
token},JSXParser.prototype.nextJSXText=function(){
this.startMarker.index=this.scanner.index,
this.startMarker.line=this.scanner.lineNumber,
this.startMarker.column=this.scanner.index-this.scanner.lineStart
;for(var start=this.scanner.index,text="";!this.scanner.eof();){
var ch=this.scanner.source[this.scanner.index]
;if("{"===ch||"<"===ch)break
;++this.scanner.index,text+=ch,character_1.Character.isLineTerminator(ch.charCodeAt(0))&&(++this.scanner.lineNumber,
"\r"===ch&&"\n"===this.scanner.source[this.scanner.index]&&++this.scanner.index,
this.scanner.lineStart=this.scanner.index)}
this.lastMarker.index=this.scanner.index,
this.lastMarker.line=this.scanner.lineNumber,
this.lastMarker.column=this.scanner.index-this.scanner.lineStart
;var token={type:101,value:text,
lineNumber:this.scanner.lineNumber,
lineStart:this.scanner.lineStart,start:start,
end:this.scanner.index}
;return text.length>0&&this.config.tokens&&this.tokens.push(this.convertToken(token)),
token
},JSXParser.prototype.peekJSXToken=function(){
var state=this.scanner.saveState()
;this.scanner.scanComments()
;var next=this.lexJSX()
;return this.scanner.restoreState(state),next
},JSXParser.prototype.expectJSX=function(value){
var token=this.nextJSXToken()
;7===token.type&&token.value===value||this.throwUnexpectedToken(token)
},JSXParser.prototype.matchJSX=function(value){
var next=this.peekJSXToken()
;return 7===next.type&&next.value===value
},JSXParser.prototype.parseJSXIdentifier=function(){
var node=this.createJSXNode(),token=this.nextJSXToken()
;return 100!==token.type&&this.throwUnexpectedToken(token),
this.finalize(node,new JSXNode.JSXIdentifier(token.value))
},JSXParser.prototype.parseJSXElementName=function(){
var node=this.createJSXNode(),elementName=this.parseJSXIdentifier()
;if(this.matchJSX(":")){var namespace=elementName
;this.expectJSX(":")
;var name_1=this.parseJSXIdentifier()
;elementName=this.finalize(node,new JSXNode.JSXNamespacedName(namespace,name_1))
}else if(this.matchJSX("."))for(;this.matchJSX(".");){
var object=elementName;this.expectJSX(".")
;var property=this.parseJSXIdentifier()
;elementName=this.finalize(node,new JSXNode.JSXMemberExpression(object,property))
}return elementName
},JSXParser.prototype.parseJSXAttributeName=function(){
var attributeName,node=this.createJSXNode(),identifier=this.parseJSXIdentifier()
;if(this.matchJSX(":")){var namespace=identifier
;this.expectJSX(":")
;var name_2=this.parseJSXIdentifier()
;attributeName=this.finalize(node,new JSXNode.JSXNamespacedName(namespace,name_2))
}else attributeName=identifier
;return attributeName
},JSXParser.prototype.parseJSXStringLiteralAttribute=function(){
var node=this.createJSXNode(),token=this.nextJSXToken()
;8!==token.type&&this.throwUnexpectedToken(token)
;var raw=this.getTokenRaw(token)
;return this.finalize(node,new Node.Literal(token.value,raw))
},JSXParser.prototype.parseJSXExpressionAttribute=function(){
var node=this.createJSXNode()
;this.expectJSX("{"),this.finishJSX(),this.match("}")&&this.tolerateError("JSX attributes must only be assigned a non-empty expression")
;var expression=this.parseAssignmentExpression()
;return this.reenterJSX(),this.finalize(node,new JSXNode.JSXExpressionContainer(expression))
},
JSXParser.prototype.parseJSXAttributeValue=function(){
return this.matchJSX("{")?this.parseJSXExpressionAttribute():this.matchJSX("<")?this.parseJSXElement():this.parseJSXStringLiteralAttribute()
},
JSXParser.prototype.parseJSXNameValueAttribute=function(){
var node=this.createJSXNode(),name=this.parseJSXAttributeName(),value=null
;return this.matchJSX("=")&&(this.expectJSX("="),
value=this.parseJSXAttributeValue()),
this.finalize(node,new JSXNode.JSXAttribute(name,value))
},JSXParser.prototype.parseJSXSpreadAttribute=function(){
var node=this.createJSXNode()
;this.expectJSX("{"),this.expectJSX("..."),this.finishJSX()
;var argument=this.parseAssignmentExpression()
;return this.reenterJSX(),this.finalize(node,new JSXNode.JSXSpreadAttribute(argument))
},
JSXParser.prototype.parseJSXAttributes=function(){
for(var attributes=[];!this.matchJSX("/")&&!this.matchJSX(">");){
var attribute=this.matchJSX("{")?this.parseJSXSpreadAttribute():this.parseJSXNameValueAttribute()
;attributes.push(attribute)}return attributes
},JSXParser.prototype.parseJSXOpeningElement=function(){
var node=this.createJSXNode();this.expectJSX("<")
;var name=this.parseJSXElementName(),attributes=this.parseJSXAttributes(),selfClosing=this.matchJSX("/")
;return selfClosing&&this.expectJSX("/"),
this.expectJSX(">"),this.finalize(node,new JSXNode.JSXOpeningElement(name,selfClosing,attributes))
},
JSXParser.prototype.parseJSXBoundaryElement=function(){
var node=this.createJSXNode()
;if(this.expectJSX("<"),this.matchJSX("/")){
this.expectJSX("/")
;var name_3=this.parseJSXElementName()
;return this.expectJSX(">"),this.finalize(node,new JSXNode.JSXClosingElement(name_3))
}
var name=this.parseJSXElementName(),attributes=this.parseJSXAttributes(),selfClosing=this.matchJSX("/")
;return selfClosing&&this.expectJSX("/"),
this.expectJSX(">"),this.finalize(node,new JSXNode.JSXOpeningElement(name,selfClosing,attributes))
},
JSXParser.prototype.parseJSXEmptyExpression=function(){
var node=this.createJSXChildNode()
;return this.collectComments(),this.lastMarker.index=this.scanner.index,
this.lastMarker.line=this.scanner.lineNumber,
this.lastMarker.column=this.scanner.index-this.scanner.lineStart,
this.finalize(node,new JSXNode.JSXEmptyExpression)
},JSXParser.prototype.parseJSXExpressionContainer=function(){
var expression,node=this.createJSXNode()
;return this.expectJSX("{"),this.matchJSX("}")?(expression=this.parseJSXEmptyExpression(),
this.expectJSX("}")):(this.finishJSX(),
expression=this.parseAssignmentExpression(),
this.reenterJSX()),this.finalize(node,new JSXNode.JSXExpressionContainer(expression))
},JSXParser.prototype.parseJSXChildren=function(){
for(var children=[];!this.scanner.eof();){
var node=this.createJSXChildNode(),token=this.nextJSXText()
;if(token.start<token.end){
var raw=this.getTokenRaw(token),child=this.finalize(node,new JSXNode.JSXText(token.value,raw))
;children.push(child)}
if("{"!==this.scanner.source[this.scanner.index])break
;var container=this.parseJSXExpressionContainer()
;children.push(container)}return children
},JSXParser.prototype.parseComplexJSXElement=function(el){
for(var stack=[];!this.scanner.eof();){
el.children=el.children.concat(this.parseJSXChildren())
;var node=this.createJSXChildNode(),element=this.parseJSXBoundaryElement()
;if(element.type===jsx_syntax_1.JSXSyntax.JSXOpeningElement){
var opening=element;if(opening.selfClosing){
var child=this.finalize(node,new JSXNode.JSXElement(opening,[],null))
;el.children.push(child)}else stack.push(el),el={
node:node,opening:opening,closing:null,children:[]
}}
if(element.type===jsx_syntax_1.JSXSyntax.JSXClosingElement){
el.closing=element
;var open_1=getQualifiedElementName(el.opening.name)
;if(open_1!==getQualifiedElementName(el.closing.name)&&this.tolerateError("Expected corresponding JSX closing tag for %0",open_1),
!(stack.length>0))break
;child=this.finalize(el.node,new JSXNode.JSXElement(el.opening,el.children,el.closing))
;(el=stack[stack.length-1]).children.push(child),
stack.pop()}}return el
},JSXParser.prototype.parseJSXElement=function(){
var node=this.createJSXNode(),opening=this.parseJSXOpeningElement(),children=[],closing=null
;if(!opening.selfClosing){
var el=this.parseComplexJSXElement({node:node,
opening:opening,closing:closing,children:children
});children=el.children,closing=el.closing}
return this.finalize(node,new JSXNode.JSXElement(opening,children,closing))
},JSXParser.prototype.parseJSXRoot=function(){
this.config.tokens&&this.tokens.pop(),
this.startJSX();var element=this.parseJSXElement()
;return this.finishJSX(),element
},JSXParser.prototype.isStartOfExpression=function(){
return _super.prototype.isStartOfExpression.call(this)||this.match("<")
},JSXParser}(parser_1.Parser)
;exports.JSXParser=JSXParser
},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0});var Regex={
NonAsciiIdentifierStart:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/,
NonAsciiIdentifierPart:/[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFC-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AD\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C4\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/
};exports.Character={fromCodePoint:function(cp){
return cp<65536?String.fromCharCode(cp):String.fromCharCode(55296+(cp-65536>>10))+String.fromCharCode(56320+(cp-65536&1023))
},isWhiteSpace:function(cp){
return 32===cp||9===cp||11===cp||12===cp||160===cp||cp>=5760&&[5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279].indexOf(cp)>=0
},isLineTerminator:function(cp){
return 10===cp||13===cp||8232===cp||8233===cp},
isIdentifierStart:function(cp){
return 36===cp||95===cp||cp>=65&&cp<=90||cp>=97&&cp<=122||92===cp||cp>=128&&Regex.NonAsciiIdentifierStart.test(exports.Character.fromCodePoint(cp))
},isIdentifierPart:function(cp){
return 36===cp||95===cp||cp>=65&&cp<=90||cp>=97&&cp<=122||cp>=48&&cp<=57||92===cp||cp>=128&&Regex.NonAsciiIdentifierPart.test(exports.Character.fromCodePoint(cp))
},isDecimalDigit:function(cp){
return cp>=48&&cp<=57},isHexDigit:function(cp){
return cp>=48&&cp<=57||cp>=65&&cp<=70||cp>=97&&cp<=102
},isOctalDigit:function(cp){return cp>=48&&cp<=55}
}},function(module,exports,__webpack_require__){
Object.defineProperty(exports,"__esModule",{
value:!0})
;var jsx_syntax_1=__webpack_require__(6),JSXClosingElement=function(){
return function(name){
this.type=jsx_syntax_1.JSXSyntax.JSXClosingElement,this.name=name
}}();exports.JSXClosingElement=JSXClosingElement
;var JSXElement=function(){
return function(openingElement,children,closingElement){
this.type=jsx_syntax_1.JSXSyntax.JSXElement,
this.openingElement=openingElement,this.children=children,
this.closingElement=closingElement}}()
;exports.JSXElement=JSXElement
;var JSXEmptyExpression=function(){
return function(){
this.type=jsx_syntax_1.JSXSyntax.JSXEmptyExpression
}}();exports.JSXEmptyExpression=JSXEmptyExpression
;var JSXExpressionContainer=function(){
return function(expression){
this.type=jsx_syntax_1.JSXSyntax.JSXExpressionContainer,
this.expression=expression}}()
;exports.JSXExpressionContainer=JSXExpressionContainer
;var JSXIdentifier=function(){
return function(name){
this.type=jsx_syntax_1.JSXSyntax.JSXIdentifier,this.name=name
}}();exports.JSXIdentifier=JSXIdentifier
;var JSXMemberExpression=function(){
return function(object,property){
this.type=jsx_syntax_1.JSXSyntax.JSXMemberExpression,
this.object=object,this.property=property}}()
;exports.JSXMemberExpression=JSXMemberExpression
;var JSXAttribute=function(){
return function(name,value){
this.type=jsx_syntax_1.JSXSyntax.JSXAttribute,this.name=name,
this.value=value}}()
;exports.JSXAttribute=JSXAttribute
;var JSXNamespacedName=function(){
return function(namespace,name){
this.type=jsx_syntax_1.JSXSyntax.JSXNamespacedName,
this.namespace=namespace,this.name=name}}()
;exports.JSXNamespacedName=JSXNamespacedName
;var JSXOpeningElement=function(){
return function(name,selfClosing,attributes){
this.type=jsx_syntax_1.JSXSyntax.JSXOpeningElement,
this.name=name,this.selfClosing=selfClosing,
this.attributes=attributes}}()
;exports.JSXOpeningElement=JSXOpeningElement
;var JSXSpreadAttribute=function(){
return function(argument){
this.type=jsx_syntax_1.JSXSyntax.JSXSpreadAttribute,this.argument=argument
}}();exports.JSXSpreadAttribute=JSXSpreadAttribute
;var JSXText=function(){
return function(value,raw){
this.type=jsx_syntax_1.JSXSyntax.JSXText,this.value=value,
this.raw=raw}}();exports.JSXText=JSXText
},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0}),exports.JSXSyntax={
JSXAttribute:"JSXAttribute",
JSXClosingElement:"JSXClosingElement",
JSXElement:"JSXElement",
JSXEmptyExpression:"JSXEmptyExpression",
JSXExpressionContainer:"JSXExpressionContainer",
JSXIdentifier:"JSXIdentifier",
JSXMemberExpression:"JSXMemberExpression",
JSXNamespacedName:"JSXNamespacedName",
JSXOpeningElement:"JSXOpeningElement",
JSXSpreadAttribute:"JSXSpreadAttribute",
JSXText:"JSXText"}
},function(module,exports,__webpack_require__){
Object.defineProperty(exports,"__esModule",{
value:!0})
;var syntax_1=__webpack_require__(2),ArrayExpression=function(){
return function(elements){
this.type=syntax_1.Syntax.ArrayExpression,this.elements=elements
}}();exports.ArrayExpression=ArrayExpression
;var ArrayPattern=function(){
return function(elements){
this.type=syntax_1.Syntax.ArrayPattern,this.elements=elements
}}();exports.ArrayPattern=ArrayPattern
;var ArrowFunctionExpression=function(){
return function(params,body,expression){
this.type=syntax_1.Syntax.ArrowFunctionExpression,
this.id=null,this.params=params,
this.body=body,this.generator=!1,this.expression=expression,
this.async=!1}}()
;exports.ArrowFunctionExpression=ArrowFunctionExpression
;var AssignmentExpression=function(){
return function(operator,left,right){
this.type=syntax_1.Syntax.AssignmentExpression,
this.operator=operator,this.left=left,
this.right=right}}()
;exports.AssignmentExpression=AssignmentExpression
;var AssignmentPattern=function(){
return function(left,right){
this.type=syntax_1.Syntax.AssignmentPattern,this.left=left,
this.right=right}}()
;exports.AssignmentPattern=AssignmentPattern
;var AsyncArrowFunctionExpression=function(){
return function(params,body,expression){
this.type=syntax_1.Syntax.ArrowFunctionExpression,
this.id=null,this.params=params,
this.body=body,this.generator=!1,this.expression=expression,
this.async=!0}}()
;exports.AsyncArrowFunctionExpression=AsyncArrowFunctionExpression
;var AsyncFunctionDeclaration=function(){
return function(id,params,body){
this.type=syntax_1.Syntax.FunctionDeclaration,this.id=id,
this.params=params,this.body=body,
this.generator=!1,this.expression=!1,this.async=!0
}}()
;exports.AsyncFunctionDeclaration=AsyncFunctionDeclaration
;var AsyncFunctionExpression=function(){
return function(id,params,body){
this.type=syntax_1.Syntax.FunctionExpression,this.id=id,
this.params=params,this.body=body,
this.generator=!1,this.expression=!1,this.async=!0
}}()
;exports.AsyncFunctionExpression=AsyncFunctionExpression
;var AwaitExpression=function(){
return function(argument){
this.type=syntax_1.Syntax.AwaitExpression,this.argument=argument
}}();exports.AwaitExpression=AwaitExpression
;var BinaryExpression=function(){
return function(operator,left,right){
var logical="||"===operator||"&&"===operator
;this.type=logical?syntax_1.Syntax.LogicalExpression:syntax_1.Syntax.BinaryExpression,
this.operator=operator,
this.left=left,this.right=right}}()
;exports.BinaryExpression=BinaryExpression
;var BlockStatement=function(){
return function(body){
this.type=syntax_1.Syntax.BlockStatement,this.body=body
}}();exports.BlockStatement=BlockStatement
;var BreakStatement=function(){
return function(label){
this.type=syntax_1.Syntax.BreakStatement,this.label=label
}}();exports.BreakStatement=BreakStatement
;var CallExpression=function(){
return function(callee,args){
this.type=syntax_1.Syntax.CallExpression,this.callee=callee,
this.arguments=args}}()
;exports.CallExpression=CallExpression
;var CatchClause=function(){
return function(param,body){
this.type=syntax_1.Syntax.CatchClause,this.param=param,
this.body=body}}();exports.CatchClause=CatchClause
;var ClassBody=function(){return function(body){
this.type=syntax_1.Syntax.ClassBody,this.body=body
}}();exports.ClassBody=ClassBody
;var ClassDeclaration=function(){
return function(id,superClass,body){
this.type=syntax_1.Syntax.ClassDeclaration,this.id=id,
this.superClass=superClass,this.body=body}}()
;exports.ClassDeclaration=ClassDeclaration
;var ClassExpression=function(){
return function(id,superClass,body){
this.type=syntax_1.Syntax.ClassExpression,this.id=id,
this.superClass=superClass,this.body=body}}()
;exports.ClassExpression=ClassExpression
;var ComputedMemberExpression=function(){
return function(object,property){
this.type=syntax_1.Syntax.MemberExpression,this.computed=!0,
this.object=object,this.property=property}}()
;exports.ComputedMemberExpression=ComputedMemberExpression
;var ConditionalExpression=function(){
return function(test,consequent,alternate){
this.type=syntax_1.Syntax.ConditionalExpression,
this.test=test,this.consequent=consequent,
this.alternate=alternate}}()
;exports.ConditionalExpression=ConditionalExpression
;var ContinueStatement=function(){
return function(label){
this.type=syntax_1.Syntax.ContinueStatement,this.label=label
}}();exports.ContinueStatement=ContinueStatement
;var DebuggerStatement=function(){
return function(){
this.type=syntax_1.Syntax.DebuggerStatement}}()
;exports.DebuggerStatement=DebuggerStatement
;var Directive=function(){
return function(expression,directive){
this.type=syntax_1.Syntax.ExpressionStatement,
this.expression=expression,this.directive=directive
}}();exports.Directive=Directive
;var DoWhileStatement=function(){
return function(body,test){
this.type=syntax_1.Syntax.DoWhileStatement,this.body=body,
this.test=test}}()
;exports.DoWhileStatement=DoWhileStatement
;var EmptyStatement=function(){return function(){
this.type=syntax_1.Syntax.EmptyStatement}}()
;exports.EmptyStatement=EmptyStatement
;var ExportAllDeclaration=function(){
return function(source){
this.type=syntax_1.Syntax.ExportAllDeclaration,this.source=source
}}()
;exports.ExportAllDeclaration=ExportAllDeclaration
;var ExportDefaultDeclaration=function(){
return function(declaration){
this.type=syntax_1.Syntax.ExportDefaultDeclaration,
this.declaration=declaration}}()
;exports.ExportDefaultDeclaration=ExportDefaultDeclaration
;var ExportNamedDeclaration=function(){
return function(declaration,specifiers,source){
this.type=syntax_1.Syntax.ExportNamedDeclaration,
this.declaration=declaration,this.specifiers=specifiers,
this.source=source}}()
;exports.ExportNamedDeclaration=ExportNamedDeclaration
;var ExportSpecifier=function(){
return function(local,exported){
this.type=syntax_1.Syntax.ExportSpecifier,this.exported=exported,
this.local=local}}()
;exports.ExportSpecifier=ExportSpecifier
;var ExpressionStatement=function(){
return function(expression){
this.type=syntax_1.Syntax.ExpressionStatement,this.expression=expression
}}()
;exports.ExpressionStatement=ExpressionStatement
;var ForInStatement=function(){
return function(left,right,body){
this.type=syntax_1.Syntax.ForInStatement,this.left=left,
this.right=right,this.body=body,this.each=!1}}()
;exports.ForInStatement=ForInStatement
;var ForOfStatement=function(){
return function(left,right,body){
this.type=syntax_1.Syntax.ForOfStatement,this.left=left,
this.right=right,this.body=body}}()
;exports.ForOfStatement=ForOfStatement
;var ForStatement=function(){
return function(init,test,update,body){
this.type=syntax_1.Syntax.ForStatement,this.init=init,
this.test=test,this.update=update,this.body=body}
}();exports.ForStatement=ForStatement
;var FunctionDeclaration=function(){
return function(id,params,body,generator){
this.type=syntax_1.Syntax.FunctionDeclaration,
this.id=id,this.params=params,this.body=body,
this.generator=generator,this.expression=!1,
this.async=!1}}()
;exports.FunctionDeclaration=FunctionDeclaration
;var FunctionExpression=function(){
return function(id,params,body,generator){
this.type=syntax_1.Syntax.FunctionExpression,
this.id=id,this.params=params,this.body=body,
this.generator=generator,this.expression=!1,
this.async=!1}}()
;exports.FunctionExpression=FunctionExpression
;var Identifier=function(){return function(name){
this.type=syntax_1.Syntax.Identifier,
this.name=name}}();exports.Identifier=Identifier
;var IfStatement=function(){
return function(test,consequent,alternate){
this.type=syntax_1.Syntax.IfStatement,
this.test=test,this.consequent=consequent,
this.alternate=alternate}}()
;exports.IfStatement=IfStatement
;var ImportDeclaration=function(){
return function(specifiers,source){
this.type=syntax_1.Syntax.ImportDeclaration,this.specifiers=specifiers,
this.source=source}}()
;exports.ImportDeclaration=ImportDeclaration
;var ImportDefaultSpecifier=function(){
return function(local){
this.type=syntax_1.Syntax.ImportDefaultSpecifier,this.local=local
}}()
;exports.ImportDefaultSpecifier=ImportDefaultSpecifier
;var ImportNamespaceSpecifier=function(){
return function(local){
this.type=syntax_1.Syntax.ImportNamespaceSpecifier,this.local=local
}}()
;exports.ImportNamespaceSpecifier=ImportNamespaceSpecifier
;var ImportSpecifier=function(){
return function(local,imported){
this.type=syntax_1.Syntax.ImportSpecifier,this.local=local,
this.imported=imported}}()
;exports.ImportSpecifier=ImportSpecifier
;var LabeledStatement=function(){
return function(label,body){
this.type=syntax_1.Syntax.LabeledStatement,this.label=label,
this.body=body}}()
;exports.LabeledStatement=LabeledStatement
;var Literal=function(){
return function(value,raw){
this.type=syntax_1.Syntax.Literal,this.value=value,this.raw=raw
}}();exports.Literal=Literal
;var MetaProperty=function(){
return function(meta,property){
this.type=syntax_1.Syntax.MetaProperty,this.meta=meta,
this.property=property}}()
;exports.MetaProperty=MetaProperty
;var MethodDefinition=function(){
return function(key,computed,value,kind,isStatic){
this.type=syntax_1.Syntax.MethodDefinition,
this.key=key,this.computed=computed,this.value=value,
this.kind=kind,this.static=isStatic}}()
;exports.MethodDefinition=MethodDefinition
;var Module=function(){return function(body){
this.type=syntax_1.Syntax.Program,this.body=body,
this.sourceType="module"}}();exports.Module=Module
;var NewExpression=function(){
return function(callee,args){
this.type=syntax_1.Syntax.NewExpression,this.callee=callee,
this.arguments=args}}()
;exports.NewExpression=NewExpression
;var ObjectExpression=function(){
return function(properties){
this.type=syntax_1.Syntax.ObjectExpression,this.properties=properties
}}();exports.ObjectExpression=ObjectExpression
;var ObjectPattern=function(){
return function(properties){
this.type=syntax_1.Syntax.ObjectPattern,this.properties=properties
}}();exports.ObjectPattern=ObjectPattern
;var Property=function(){
return function(kind,key,computed,value,method,shorthand){
this.type=syntax_1.Syntax.Property,
this.key=key,this.computed=computed,this.value=value,
this.kind=kind,this.method=method,
this.shorthand=shorthand}}()
;exports.Property=Property
;var RegexLiteral=function(){
return function(value,raw,pattern,flags){
this.type=syntax_1.Syntax.Literal,this.value=value,
this.raw=raw,this.regex={pattern:pattern,
flags:flags}}}();exports.RegexLiteral=RegexLiteral
;var RestElement=function(){
return function(argument){
this.type=syntax_1.Syntax.RestElement,this.argument=argument
}}();exports.RestElement=RestElement
;var ReturnStatement=function(){
return function(argument){
this.type=syntax_1.Syntax.ReturnStatement,this.argument=argument
}}();exports.ReturnStatement=ReturnStatement
;var Script=function(){return function(body){
this.type=syntax_1.Syntax.Program,this.body=body,
this.sourceType="script"}}();exports.Script=Script
;var SequenceExpression=function(){
return function(expressions){
this.type=syntax_1.Syntax.SequenceExpression,this.expressions=expressions
}}();exports.SequenceExpression=SequenceExpression
;var SpreadElement=function(){
return function(argument){
this.type=syntax_1.Syntax.SpreadElement,this.argument=argument
}}();exports.SpreadElement=SpreadElement
;var StaticMemberExpression=function(){
return function(object,property){
this.type=syntax_1.Syntax.MemberExpression,this.computed=!1,
this.object=object,this.property=property}}()
;exports.StaticMemberExpression=StaticMemberExpression
;var Super=function(){return function(){
this.type=syntax_1.Syntax.Super}}()
;exports.Super=Super;var SwitchCase=function(){
return function(test,consequent){
this.type=syntax_1.Syntax.SwitchCase,this.test=test,
this.consequent=consequent}}()
;exports.SwitchCase=SwitchCase
;var SwitchStatement=function(){
return function(discriminant,cases){
this.type=syntax_1.Syntax.SwitchStatement,this.discriminant=discriminant,
this.cases=cases}}()
;exports.SwitchStatement=SwitchStatement
;var TaggedTemplateExpression=function(){
return function(tag,quasi){
this.type=syntax_1.Syntax.TaggedTemplateExpression,this.tag=tag,
this.quasi=quasi}}()
;exports.TaggedTemplateExpression=TaggedTemplateExpression
;var TemplateElement=function(){
return function(value,tail){
this.type=syntax_1.Syntax.TemplateElement,this.value=value,
this.tail=tail}}()
;exports.TemplateElement=TemplateElement
;var TemplateLiteral=function(){
return function(quasis,expressions){
this.type=syntax_1.Syntax.TemplateLiteral,this.quasis=quasis,
this.expressions=expressions}}()
;exports.TemplateLiteral=TemplateLiteral
;var ThisExpression=function(){return function(){
this.type=syntax_1.Syntax.ThisExpression}}()
;exports.ThisExpression=ThisExpression
;var ThrowStatement=function(){
return function(argument){
this.type=syntax_1.Syntax.ThrowStatement,this.argument=argument
}}();exports.ThrowStatement=ThrowStatement
;var TryStatement=function(){
return function(block,handler,finalizer){
this.type=syntax_1.Syntax.TryStatement,
this.block=block,this.handler=handler,this.finalizer=finalizer
}}();exports.TryStatement=TryStatement
;var UnaryExpression=function(){
return function(operator,argument){
this.type=syntax_1.Syntax.UnaryExpression,this.operator=operator,
this.argument=argument,this.prefix=!0}}()
;exports.UnaryExpression=UnaryExpression
;var UpdateExpression=function(){
return function(operator,argument,prefix){
this.type=syntax_1.Syntax.UpdateExpression,
this.operator=operator,this.argument=argument,
this.prefix=prefix}}()
;exports.UpdateExpression=UpdateExpression
;var VariableDeclaration=function(){
return function(declarations,kind){
this.type=syntax_1.Syntax.VariableDeclaration,
this.declarations=declarations,this.kind=kind}}()
;exports.VariableDeclaration=VariableDeclaration
;var VariableDeclarator=function(){
return function(id,init){
this.type=syntax_1.Syntax.VariableDeclarator,this.id=id,
this.init=init}}()
;exports.VariableDeclarator=VariableDeclarator
;var WhileStatement=function(){
return function(test,body){
this.type=syntax_1.Syntax.WhileStatement,this.test=test,
this.body=body}}()
;exports.WhileStatement=WhileStatement
;var WithStatement=function(){
return function(object,body){
this.type=syntax_1.Syntax.WithStatement,this.object=object,
this.body=body}}()
;exports.WithStatement=WithStatement
;var YieldExpression=function(){
return function(argument,delegate){
this.type=syntax_1.Syntax.YieldExpression,this.argument=argument,
this.delegate=delegate}}()
;exports.YieldExpression=YieldExpression
},function(module,exports,__webpack_require__){
Object.defineProperty(exports,"__esModule",{
value:!0})
;var assert_1=__webpack_require__(9),error_handler_1=__webpack_require__(10),messages_1=__webpack_require__(11),Node=__webpack_require__(7),scanner_1=__webpack_require__(12),syntax_1=__webpack_require__(2),token_1=__webpack_require__(13),Parser=function(){
function Parser(code,options,delegate){
void 0===options&&(options={}),this.config={
range:"boolean"==typeof options.range&&options.range,
loc:"boolean"==typeof options.loc&&options.loc,
source:null,
tokens:"boolean"==typeof options.tokens&&options.tokens,
comment:"boolean"==typeof options.comment&&options.comment,
tolerant:"boolean"==typeof options.tolerant&&options.tolerant
},this.config.loc&&options.source&&null!==options.source&&(this.config.source=String(options.source)),
this.delegate=delegate,
this.errorHandler=new error_handler_1.ErrorHandler,this.errorHandler.tolerant=this.config.tolerant,
this.scanner=new scanner_1.Scanner(code,this.errorHandler),
this.scanner.trackComment=this.config.comment,
this.operatorPrecedence={")":0,";":0,",":0,"=":0,
"]":0,"||":1,"&&":2,"|":3,"^":4,"&":5,"==":6,
"!=":6,"===":6,"!==":6,"<":7,">":7,"<=":7,">=":7,
"<<":8,">>":8,">>>":8,"+":9,"-":9,"*":11,"/":11,
"%":11},this.lookahead={type:2,value:"",
lineNumber:this.scanner.lineNumber,lineStart:0,
start:0,end:0
},this.hasLineTerminator=!1,this.context={
isModule:!1,await:!1,allowIn:!0,
allowStrictDirective:!0,allowYield:!0,
firstCoverInitializedNameError:null,
isAssignmentTarget:!1,isBindingElement:!1,
inFunctionBody:!1,inIteration:!1,inSwitch:!1,
labelSet:{},strict:!1
},this.tokens=[],this.startMarker={index:0,
line:this.scanner.lineNumber,column:0
},this.lastMarker={index:0,
line:this.scanner.lineNumber,column:0
},this.nextToken(),this.lastMarker={
index:this.scanner.index,
line:this.scanner.lineNumber,
column:this.scanner.index-this.scanner.lineStart}}
return Parser.prototype.throwError=function(messageFormat){
for(var values=[],_i=1;_i<arguments.length;_i++)values[_i-1]=arguments[_i]
;var args=Array.prototype.slice.call(arguments,1),msg=messageFormat.replace(/%(\d)/g,function(whole,idx){
return assert_1.assert(idx<args.length,"Message reference must be in range"),
args[idx]
}),index=this.lastMarker.index,line=this.lastMarker.line,column=this.lastMarker.column+1
;throw this.errorHandler.createError(index,line,column,msg)
},Parser.prototype.tolerateError=function(messageFormat){
for(var values=[],_i=1;_i<arguments.length;_i++)values[_i-1]=arguments[_i]
;var args=Array.prototype.slice.call(arguments,1),msg=messageFormat.replace(/%(\d)/g,function(whole,idx){
return assert_1.assert(idx<args.length,"Message reference must be in range"),
args[idx]
}),index=this.lastMarker.index,line=this.scanner.lineNumber,column=this.lastMarker.column+1
;this.errorHandler.tolerateError(index,line,column,msg)
},Parser.prototype.unexpectedTokenError=function(token,message){
var value,msg=message||messages_1.Messages.UnexpectedToken
;if(token?(message||(msg=2===token.type?messages_1.Messages.UnexpectedEOS:3===token.type?messages_1.Messages.UnexpectedIdentifier:6===token.type?messages_1.Messages.UnexpectedNumber:8===token.type?messages_1.Messages.UnexpectedString:10===token.type?messages_1.Messages.UnexpectedTemplate:messages_1.Messages.UnexpectedToken,
4===token.type&&(this.scanner.isFutureReservedWord(token.value)?msg=messages_1.Messages.UnexpectedReserved:this.context.strict&&this.scanner.isStrictModeReservedWord(token.value)&&(msg=messages_1.Messages.StrictReservedWord))),
value=token.value):value="ILLEGAL",
msg=msg.replace("%0",value),token&&"number"==typeof token.lineNumber){
var index=token.start,line=token.lineNumber,lastMarkerLineStart=this.lastMarker.index-this.lastMarker.column,column=token.start-lastMarkerLineStart+1
;return this.errorHandler.createError(index,line,column,msg)
}
index=this.lastMarker.index,line=this.lastMarker.line,column=this.lastMarker.column+1
;return this.errorHandler.createError(index,line,column,msg)
},Parser.prototype.throwUnexpectedToken=function(token,message){
throw this.unexpectedTokenError(token,message)
},Parser.prototype.tolerateUnexpectedToken=function(token,message){
this.errorHandler.tolerate(this.unexpectedTokenError(token,message))
},Parser.prototype.collectComments=function(){
if(this.config.comment){
var comments=this.scanner.scanComments()
;if(comments.length>0&&this.delegate)for(var i=0;i<comments.length;++i){
var e=comments[i],node=void 0;node={
type:e.multiLine?"BlockComment":"LineComment",
value:this.scanner.source.slice(e.slice[0],e.slice[1])
},this.config.range&&(node.range=e.range),
this.config.loc&&(node.loc=e.loc);var metadata={
start:{line:e.loc.start.line,
column:e.loc.start.column,offset:e.range[0]},end:{
line:e.loc.end.line,column:e.loc.end.column,
offset:e.range[1]}};this.delegate(node,metadata)}
}else this.scanner.scanComments()
},Parser.prototype.getTokenRaw=function(token){
return this.scanner.source.slice(token.start,token.end)
},Parser.prototype.convertToken=function(token){
var t={type:token_1.TokenName[token.type],
value:this.getTokenRaw(token)}
;if(this.config.range&&(t.range=[token.start,token.end]),
this.config.loc&&(t.loc={start:{
line:this.startMarker.line,
column:this.startMarker.column},end:{
line:this.scanner.lineNumber,
column:this.scanner.index-this.scanner.lineStart}
}),9===token.type){
var pattern=token.pattern,flags=token.flags
;t.regex={pattern:pattern,flags:flags}}return t
},Parser.prototype.nextToken=function(){
var token=this.lookahead
;this.lastMarker.index=this.scanner.index,this.lastMarker.line=this.scanner.lineNumber,
this.lastMarker.column=this.scanner.index-this.scanner.lineStart,
this.collectComments(),
this.scanner.index!==this.startMarker.index&&(this.startMarker.index=this.scanner.index,
this.startMarker.line=this.scanner.lineNumber,
this.startMarker.column=this.scanner.index-this.scanner.lineStart)
;var next=this.scanner.lex()
;return this.hasLineTerminator=token.lineNumber!==next.lineNumber,
next&&this.context.strict&&3===next.type&&this.scanner.isStrictModeReservedWord(next.value)&&(next.type=4),
this.lookahead=next,
this.config.tokens&&2!==next.type&&this.tokens.push(this.convertToken(next)),
token},Parser.prototype.nextRegexToken=function(){
this.collectComments()
;var token=this.scanner.scanRegExp()
;return this.config.tokens&&(this.tokens.pop(),
this.tokens.push(this.convertToken(token))),
this.lookahead=token,this.nextToken(),token
},Parser.prototype.createNode=function(){return{
index:this.startMarker.index,
line:this.startMarker.line,
column:this.startMarker.column}
},Parser.prototype.startNode=function(token,lastLineStart){
void 0===lastLineStart&&(lastLineStart=0)
;var column=token.start-token.lineStart,line=token.lineNumber
;return column<0&&(column+=lastLineStart,line--),{
index:token.start,line:line,column:column}
},Parser.prototype.finalize=function(marker,node){
if(this.config.range&&(node.range=[marker.index,this.lastMarker.index]),
this.config.loc&&(node.loc={start:{
line:marker.line,column:marker.column},end:{
line:this.lastMarker.line,
column:this.lastMarker.column}
},this.config.source&&(node.loc.source=this.config.source)),
this.delegate){var metadata={start:{
line:marker.line,column:marker.column,
offset:marker.index},end:{
line:this.lastMarker.line,
column:this.lastMarker.column,
offset:this.lastMarker.index}}
;this.delegate(node,metadata)}return node
},Parser.prototype.expect=function(value){
var token=this.nextToken()
;7===token.type&&token.value===value||this.throwUnexpectedToken(token)
},Parser.prototype.expectCommaSeparator=function(){
if(this.config.tolerant){var token=this.lookahead
;7===token.type&&","===token.value?this.nextToken():7===token.type&&";"===token.value?(this.nextToken(),
this.tolerateUnexpectedToken(token)):this.tolerateUnexpectedToken(token,messages_1.Messages.UnexpectedToken)
}else this.expect(",")
},Parser.prototype.expectKeyword=function(keyword){
var token=this.nextToken()
;4===token.type&&token.value===keyword||this.throwUnexpectedToken(token)
},Parser.prototype.match=function(value){
return 7===this.lookahead.type&&this.lookahead.value===value
},Parser.prototype.matchKeyword=function(keyword){
return 4===this.lookahead.type&&this.lookahead.value===keyword
},Parser.prototype.matchContextualKeyword=function(keyword){
return 3===this.lookahead.type&&this.lookahead.value===keyword
},Parser.prototype.matchAssign=function(){
if(7!==this.lookahead.type)return!1
;var op=this.lookahead.value
;return"="===op||"*="===op||"**="===op||"/="===op||"%="===op||"+="===op||"-="===op||"<<="===op||">>="===op||">>>="===op||"&="===op||"^="===op||"|="===op
},
Parser.prototype.isolateCoverGrammar=function(parseFunction){
var previousIsBindingElement=this.context.isBindingElement,previousIsAssignmentTarget=this.context.isAssignmentTarget,previousFirstCoverInitializedNameError=this.context.firstCoverInitializedNameError
;this.context.isBindingElement=!0,
this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null
;var result=parseFunction.call(this)
;return null!==this.context.firstCoverInitializedNameError&&this.throwUnexpectedToken(this.context.firstCoverInitializedNameError),
this.context.isBindingElement=previousIsBindingElement,
this.context.isAssignmentTarget=previousIsAssignmentTarget,
this.context.firstCoverInitializedNameError=previousFirstCoverInitializedNameError,
result
},Parser.prototype.inheritCoverGrammar=function(parseFunction){
var previousIsBindingElement=this.context.isBindingElement,previousIsAssignmentTarget=this.context.isAssignmentTarget,previousFirstCoverInitializedNameError=this.context.firstCoverInitializedNameError
;this.context.isBindingElement=!0,
this.context.isAssignmentTarget=!0,this.context.firstCoverInitializedNameError=null
;var result=parseFunction.call(this)
;return this.context.isBindingElement=this.context.isBindingElement&&previousIsBindingElement,
this.context.isAssignmentTarget=this.context.isAssignmentTarget&&previousIsAssignmentTarget,
this.context.firstCoverInitializedNameError=previousFirstCoverInitializedNameError||this.context.firstCoverInitializedNameError,
result
},Parser.prototype.consumeSemicolon=function(){
this.match(";")?this.nextToken():this.hasLineTerminator||(2===this.lookahead.type||this.match("}")||this.throwUnexpectedToken(this.lookahead),
this.lastMarker.index=this.startMarker.index,
this.lastMarker.line=this.startMarker.line,
this.lastMarker.column=this.startMarker.column)
},Parser.prototype.parsePrimaryExpression=function(){
var expr,token,raw,node=this.createNode()
;switch(this.lookahead.type){case 3:
(this.context.isModule||this.context.await)&&"await"===this.lookahead.value&&this.tolerateUnexpectedToken(this.lookahead),
expr=this.matchAsyncFunction()?this.parseFunctionExpression():this.finalize(node,new Node.Identifier(this.nextToken().value))
;break;case 6:case 8:
this.context.strict&&this.lookahead.octal&&this.tolerateUnexpectedToken(this.lookahead,messages_1.Messages.StrictOctalLiteral),
this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1,token=this.nextToken(),
raw=this.getTokenRaw(token),
expr=this.finalize(node,new Node.Literal(token.value,raw))
;break;case 1:
this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,
token=this.nextToken(),
raw=this.getTokenRaw(token),expr=this.finalize(node,new Node.Literal("true"===token.value,raw))
;break;case 5:
this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,
token=this.nextToken(),
raw=this.getTokenRaw(token),expr=this.finalize(node,new Node.Literal(null,raw))
;break;case 10:expr=this.parseTemplateLiteral()
;break;case 7:switch(this.lookahead.value){
case"(":
this.context.isBindingElement=!1,expr=this.inheritCoverGrammar(this.parseGroupExpression)
;break;case"[":
expr=this.inheritCoverGrammar(this.parseArrayInitializer)
;break;case"{":
expr=this.inheritCoverGrammar(this.parseObjectInitializer)
;break;case"/":case"/=":
this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1,
this.scanner.index=this.startMarker.index,
token=this.nextRegexToken(),raw=this.getTokenRaw(token),
expr=this.finalize(node,new Node.RegexLiteral(token.regex,raw,token.pattern,token.flags))
;break;default:
expr=this.throwUnexpectedToken(this.nextToken())}
break;case 4:
!this.context.strict&&this.context.allowYield&&this.matchKeyword("yield")?expr=this.parseIdentifierName():!this.context.strict&&this.matchKeyword("let")?expr=this.finalize(node,new Node.Identifier(this.nextToken().value)):(this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1,
this.matchKeyword("function")?expr=this.parseFunctionExpression():this.matchKeyword("this")?(this.nextToken(),
expr=this.finalize(node,new Node.ThisExpression)):expr=this.matchKeyword("class")?this.parseClassExpression():this.throwUnexpectedToken(this.nextToken()))
;break;default:
expr=this.throwUnexpectedToken(this.nextToken())}
return expr
},Parser.prototype.parseSpreadElement=function(){
var node=this.createNode();this.expect("...")
;var arg=this.inheritCoverGrammar(this.parseAssignmentExpression)
;return this.finalize(node,new Node.SpreadElement(arg))
},Parser.prototype.parseArrayInitializer=function(){
var node=this.createNode(),elements=[]
;for(this.expect("[");!this.match("]");)if(this.match(","))this.nextToken(),
elements.push(null);else if(this.match("...")){
var element=this.parseSpreadElement()
;this.match("]")||(this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1,
this.expect(",")),elements.push(element)
}else elements.push(this.inheritCoverGrammar(this.parseAssignmentExpression)),
this.match("]")||this.expect(",")
;return this.expect("]"),this.finalize(node,new Node.ArrayExpression(elements))
},
Parser.prototype.parsePropertyMethod=function(params){
this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1
;var previousStrict=this.context.strict,previousAllowStrictDirective=this.context.allowStrictDirective
;this.context.allowStrictDirective=params.simple
;var body=this.isolateCoverGrammar(this.parseFunctionSourceElements)
;return this.context.strict&&params.firstRestricted&&this.tolerateUnexpectedToken(params.firstRestricted,params.message),
this.context.strict&&params.stricted&&this.tolerateUnexpectedToken(params.stricted,params.message),
this.context.strict=previousStrict,
this.context.allowStrictDirective=previousAllowStrictDirective,
body
},Parser.prototype.parsePropertyMethodFunction=function(){
var node=this.createNode(),previousAllowYield=this.context.allowYield
;this.context.allowYield=!0
;var params=this.parseFormalParameters(),method=this.parsePropertyMethod(params)
;return this.context.allowYield=previousAllowYield,
this.finalize(node,new Node.FunctionExpression(null,params.params,method,!1))
},Parser.prototype.parsePropertyMethodAsyncFunction=function(){
var node=this.createNode(),previousAllowYield=this.context.allowYield,previousAwait=this.context.await
;this.context.allowYield=!1,this.context.await=!0
;var params=this.parseFormalParameters(),method=this.parsePropertyMethod(params)
;return this.context.allowYield=previousAllowYield,
this.context.await=previousAwait,
this.finalize(node,new Node.AsyncFunctionExpression(null,params.params,method))
},
Parser.prototype.parseObjectPropertyKey=function(){
var key,node=this.createNode(),token=this.nextToken()
;switch(token.type){case 8:case 6:
this.context.strict&&token.octal&&this.tolerateUnexpectedToken(token,messages_1.Messages.StrictOctalLiteral)
;var raw=this.getTokenRaw(token)
;key=this.finalize(node,new Node.Literal(token.value,raw))
;break;case 3:case 1:case 5:case 4:
key=this.finalize(node,new Node.Identifier(token.value))
;break;case 7:
"["===token.value?(key=this.isolateCoverGrammar(this.parseAssignmentExpression),
this.expect("]")):key=this.throwUnexpectedToken(token)
;break;default:
key=this.throwUnexpectedToken(token)}return key
},Parser.prototype.isPropertyKey=function(key,value){
return key.type===syntax_1.Syntax.Identifier&&key.name===value||key.type===syntax_1.Syntax.Literal&&key.value===value
},
Parser.prototype.parseObjectProperty=function(hasProto){
var kind,node=this.createNode(),token=this.lookahead,key=null,value=null,computed=!1,method=!1,shorthand=!1,isAsync=!1
;if(3===token.type){var id=token.value
;this.nextToken(),computed=this.match("["),
key=(isAsync=!(this.hasLineTerminator||"async"!==id||this.match(":")||this.match("(")||this.match("*")||this.match(",")))?this.parseObjectPropertyKey():this.finalize(node,new Node.Identifier(id))
}else this.match("*")?this.nextToken():(computed=this.match("["),
key=this.parseObjectPropertyKey())
;var lookaheadPropertyKey=this.qualifiedPropertyName(this.lookahead)
;if(3===token.type&&!isAsync&&"get"===token.value&&lookaheadPropertyKey)kind="get",
computed=this.match("["),
key=this.parseObjectPropertyKey(),this.context.allowYield=!1,
value=this.parseGetterMethod();else if(3===token.type&&!isAsync&&"set"===token.value&&lookaheadPropertyKey)kind="set",
computed=this.match("["),
key=this.parseObjectPropertyKey(),value=this.parseSetterMethod();else if(7===token.type&&"*"===token.value&&lookaheadPropertyKey)kind="init",
computed=this.match("["),
key=this.parseObjectPropertyKey(),value=this.parseGeneratorMethod(),
method=!0;else if(key||this.throwUnexpectedToken(this.lookahead),
kind="init",this.match(":")&&!isAsync)!computed&&this.isPropertyKey(key,"__proto__")&&(hasProto.value&&this.tolerateError(messages_1.Messages.DuplicateProtoProperty),
hasProto.value=!0),
this.nextToken(),value=this.inheritCoverGrammar(this.parseAssignmentExpression);else if(this.match("("))value=isAsync?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),
method=!0;else if(3===token.type){
id=this.finalize(node,new Node.Identifier(token.value))
;if(this.match("=")){
this.context.firstCoverInitializedNameError=this.lookahead,
this.nextToken(),shorthand=!0
;var init=this.isolateCoverGrammar(this.parseAssignmentExpression)
;value=this.finalize(node,new Node.AssignmentPattern(id,init))
}else shorthand=!0,value=id
}else this.throwUnexpectedToken(this.nextToken())
;return this.finalize(node,new Node.Property(kind,key,computed,value,method,shorthand))
},
Parser.prototype.parseObjectInitializer=function(){
var node=this.createNode();this.expect("{")
;for(var properties=[],hasProto={value:!1
};!this.match("}");)properties.push(this.parseObjectProperty(hasProto)),
this.match("}")||this.expectCommaSeparator()
;return this.expect("}"),this.finalize(node,new Node.ObjectExpression(properties))
},Parser.prototype.parseTemplateHead=function(){
assert_1.assert(this.lookahead.head,"Template literal must start with a template head")
;var node=this.createNode(),token=this.nextToken(),raw=token.value,cooked=token.cooked
;return this.finalize(node,new Node.TemplateElement({
raw:raw,cooked:cooked},token.tail))
},Parser.prototype.parseTemplateElement=function(){
10!==this.lookahead.type&&this.throwUnexpectedToken()
;var node=this.createNode(),token=this.nextToken(),raw=token.value,cooked=token.cooked
;return this.finalize(node,new Node.TemplateElement({
raw:raw,cooked:cooked},token.tail))
},Parser.prototype.parseTemplateLiteral=function(){
var node=this.createNode(),expressions=[],quasis=[],quasi=this.parseTemplateHead()
;for(quasis.push(quasi);!quasi.tail;)expressions.push(this.parseExpression()),
quasi=this.parseTemplateElement(),
quasis.push(quasi)
;return this.finalize(node,new Node.TemplateLiteral(quasis,expressions))
},Parser.prototype.reinterpretExpressionAsPattern=function(expr){
switch(expr.type){case syntax_1.Syntax.Identifier:
case syntax_1.Syntax.MemberExpression:
case syntax_1.Syntax.RestElement:
case syntax_1.Syntax.AssignmentPattern:break
;case syntax_1.Syntax.SpreadElement:
expr.type=syntax_1.Syntax.RestElement,this.reinterpretExpressionAsPattern(expr.argument)
;break;case syntax_1.Syntax.ArrayExpression:
expr.type=syntax_1.Syntax.ArrayPattern
;for(var i=0;i<expr.elements.length;i++)null!==expr.elements[i]&&this.reinterpretExpressionAsPattern(expr.elements[i])
;break;case syntax_1.Syntax.ObjectExpression:
expr.type=syntax_1.Syntax.ObjectPattern
;for(i=0;i<expr.properties.length;i++)this.reinterpretExpressionAsPattern(expr.properties[i].value)
;break;case syntax_1.Syntax.AssignmentExpression:
expr.type=syntax_1.Syntax.AssignmentPattern,
delete expr.operator,this.reinterpretExpressionAsPattern(expr.left)
}
},Parser.prototype.parseGroupExpression=function(){
var expr
;if(this.expect("("),this.match(")"))this.nextToken(),this.match("=>")||this.expect("=>"),
expr={type:"ArrowParameterPlaceHolder",params:[],
async:!1};else{
var startToken=this.lookahead,params=[]
;if(this.match("..."))expr=this.parseRestElement(params),
this.expect(")"),this.match("=>")||this.expect("=>"),
expr={type:"ArrowParameterPlaceHolder",
params:[expr],async:!1};else{var arrow=!1
;if(this.context.isBindingElement=!0,expr=this.inheritCoverGrammar(this.parseAssignmentExpression),
this.match(",")){var expressions=[]
;for(this.context.isAssignmentTarget=!1,expressions.push(expr);2!==this.lookahead.type&&this.match(",");){
if(this.nextToken(),this.match(")")){
this.nextToken()
;for(var i=0;i<expressions.length;i++)this.reinterpretExpressionAsPattern(expressions[i])
;arrow=!0,expr={type:"ArrowParameterPlaceHolder",
params:expressions,async:!1}
}else if(this.match("...")){
this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),
expressions.push(this.parseRestElement(params)),
this.expect(")"),this.match("=>")||this.expect("=>"),
this.context.isBindingElement=!1
;for(i=0;i<expressions.length;i++)this.reinterpretExpressionAsPattern(expressions[i])
;arrow=!0,expr={type:"ArrowParameterPlaceHolder",
params:expressions,async:!1}
}else expressions.push(this.inheritCoverGrammar(this.parseAssignmentExpression))
;if(arrow)break}
arrow||(expr=this.finalize(this.startNode(startToken),new Node.SequenceExpression(expressions)))
}if(!arrow){
if(this.expect(")"),this.match("=>")&&(expr.type===syntax_1.Syntax.Identifier&&"yield"===expr.name&&(arrow=!0,
expr={type:"ArrowParameterPlaceHolder",
params:[expr],async:!1}),!arrow)){
if(this.context.isBindingElement||this.throwUnexpectedToken(this.lookahead),
expr.type===syntax_1.Syntax.SequenceExpression)for(i=0;i<expr.expressions.length;i++)this.reinterpretExpressionAsPattern(expr.expressions[i]);else this.reinterpretExpressionAsPattern(expr)
;expr={type:"ArrowParameterPlaceHolder",
params:expr.type===syntax_1.Syntax.SequenceExpression?expr.expressions:[expr],
async:!1}}this.context.isBindingElement=!1}}}
return expr
},Parser.prototype.parseArguments=function(){
this.expect("(");var args=[]
;if(!this.match(")"))for(;;){
var expr=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAssignmentExpression)
;if(args.push(expr),this.match(")"))break
;if(this.expectCommaSeparator(),this.match(")"))break
}return this.expect(")"),args
},Parser.prototype.isIdentifierName=function(token){
return 3===token.type||4===token.type||1===token.type||5===token.type
},Parser.prototype.parseIdentifierName=function(){
var node=this.createNode(),token=this.nextToken()
;return this.isIdentifierName(token)||this.throwUnexpectedToken(token),
this.finalize(node,new Node.Identifier(token.value))
},Parser.prototype.parseNewExpression=function(){
var expr,node=this.createNode(),id=this.parseIdentifierName()
;if(assert_1.assert("new"===id.name,"New expression must start with `new`"),
this.match("."))if(this.nextToken(),
3===this.lookahead.type&&this.context.inFunctionBody&&"target"===this.lookahead.value){
var property=this.parseIdentifierName()
;expr=new Node.MetaProperty(id,property)
}else this.throwUnexpectedToken(this.lookahead);else{
var callee=this.isolateCoverGrammar(this.parseLeftHandSideExpression),args=this.match("(")?this.parseArguments():[]
;expr=new Node.NewExpression(callee,args),
this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
}return this.finalize(node,expr)
},Parser.prototype.parseAsyncArgument=function(){
var arg=this.parseAssignmentExpression()
;return this.context.firstCoverInitializedNameError=null,
arg
},Parser.prototype.parseAsyncArguments=function(){
this.expect("(");var args=[]
;if(!this.match(")"))for(;;){
var expr=this.match("...")?this.parseSpreadElement():this.isolateCoverGrammar(this.parseAsyncArgument)
;if(args.push(expr),this.match(")"))break
;if(this.expectCommaSeparator(),this.match(")"))break
}return this.expect(")"),args
},Parser.prototype.parseLeftHandSideExpressionAllowCall=function(){
var expr,startToken=this.lookahead,maybeAsync=this.matchContextualKeyword("async"),previousAllowIn=this.context.allowIn
;for(this.context.allowIn=!0,
this.matchKeyword("super")&&this.context.inFunctionBody?(expr=this.createNode(),
this.nextToken(),
expr=this.finalize(expr,new Node.Super),this.match("(")||this.match(".")||this.match("[")||this.throwUnexpectedToken(this.lookahead)):expr=this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match(".")){
this.context.isBindingElement=!1,
this.context.isAssignmentTarget=!0,this.expect(".")
;var property=this.parseIdentifierName()
;expr=this.finalize(this.startNode(startToken),new Node.StaticMemberExpression(expr,property))
}else if(this.match("(")){
var asyncArrow=maybeAsync&&startToken.lineNumber===this.lookahead.lineNumber
;this.context.isBindingElement=!1,
this.context.isAssignmentTarget=!1
;var args=asyncArrow?this.parseAsyncArguments():this.parseArguments()
;if(expr=this.finalize(this.startNode(startToken),new Node.CallExpression(expr,args)),
asyncArrow&&this.match("=>")){
for(var i=0;i<args.length;++i)this.reinterpretExpressionAsPattern(args[i])
;expr={type:"ArrowParameterPlaceHolder",
params:args,async:!0}}}else if(this.match("[")){
this.context.isBindingElement=!1,
this.context.isAssignmentTarget=!0,this.expect("[")
;property=this.isolateCoverGrammar(this.parseExpression)
;this.expect("]"),expr=this.finalize(this.startNode(startToken),new Node.ComputedMemberExpression(expr,property))
}else{
if(10!==this.lookahead.type||!this.lookahead.head)break
;var quasi=this.parseTemplateLiteral()
;expr=this.finalize(this.startNode(startToken),new Node.TaggedTemplateExpression(expr,quasi))
}return this.context.allowIn=previousAllowIn,expr
},Parser.prototype.parseSuper=function(){
var node=this.createNode()
;return this.expectKeyword("super"),this.match("[")||this.match(".")||this.throwUnexpectedToken(this.lookahead),
this.finalize(node,new Node.Super)
},Parser.prototype.parseLeftHandSideExpression=function(){
assert_1.assert(this.context.allowIn,"callee of new expression always allow in keyword.")
;for(var node=this.startNode(this.lookahead),expr=this.matchKeyword("super")&&this.context.inFunctionBody?this.parseSuper():this.inheritCoverGrammar(this.matchKeyword("new")?this.parseNewExpression:this.parsePrimaryExpression);;)if(this.match("[")){
this.context.isBindingElement=!1,
this.context.isAssignmentTarget=!0,this.expect("[")
;var property=this.isolateCoverGrammar(this.parseExpression)
;this.expect("]"),expr=this.finalize(node,new Node.ComputedMemberExpression(expr,property))
}else if(this.match(".")){
this.context.isBindingElement=!1,this.context.isAssignmentTarget=!0,
this.expect(".")
;property=this.parseIdentifierName()
;expr=this.finalize(node,new Node.StaticMemberExpression(expr,property))
}else{
if(10!==this.lookahead.type||!this.lookahead.head)break
;var quasi=this.parseTemplateLiteral()
;expr=this.finalize(node,new Node.TaggedTemplateExpression(expr,quasi))
}return expr
},Parser.prototype.parseUpdateExpression=function(){
var expr,startToken=this.lookahead
;if(this.match("++")||this.match("--")){
var node=this.startNode(startToken),token=this.nextToken()
;expr=this.inheritCoverGrammar(this.parseUnaryExpression),
this.context.strict&&expr.type===syntax_1.Syntax.Identifier&&this.scanner.isRestrictedWord(expr.name)&&this.tolerateError(messages_1.Messages.StrictLHSPrefix),
this.context.isAssignmentTarget||this.tolerateError(messages_1.Messages.InvalidLHSInAssignment)
;var prefix=!0
;expr=this.finalize(node,new Node.UpdateExpression(token.value,expr,prefix)),
this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1
}else if(expr=this.inheritCoverGrammar(this.parseLeftHandSideExpressionAllowCall),
!this.hasLineTerminator&&7===this.lookahead.type&&(this.match("++")||this.match("--"))){
this.context.strict&&expr.type===syntax_1.Syntax.Identifier&&this.scanner.isRestrictedWord(expr.name)&&this.tolerateError(messages_1.Messages.StrictLHSPostfix),
this.context.isAssignmentTarget||this.tolerateError(messages_1.Messages.InvalidLHSInAssignment),
this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1
;var operator=this.nextToken().value;prefix=!1
;expr=this.finalize(this.startNode(startToken),new Node.UpdateExpression(operator,expr,prefix))
}return expr
},Parser.prototype.parseAwaitExpression=function(){
var node=this.createNode();this.nextToken()
;var argument=this.parseUnaryExpression()
;return this.finalize(node,new Node.AwaitExpression(argument))
},Parser.prototype.parseUnaryExpression=function(){
var expr
;if(this.match("+")||this.match("-")||this.match("~")||this.match("!")||this.matchKeyword("delete")||this.matchKeyword("void")||this.matchKeyword("typeof")){
var node=this.startNode(this.lookahead),token=this.nextToken()
;expr=this.inheritCoverGrammar(this.parseUnaryExpression),
expr=this.finalize(node,new Node.UnaryExpression(token.value,expr)),
this.context.strict&&"delete"===expr.operator&&expr.argument.type===syntax_1.Syntax.Identifier&&this.tolerateError(messages_1.Messages.StrictDelete),
this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1
}else expr=this.context.await&&this.matchContextualKeyword("await")?this.parseAwaitExpression():this.parseUpdateExpression()
;return expr
},Parser.prototype.parseExponentiationExpression=function(){
var startToken=this.lookahead,expr=this.inheritCoverGrammar(this.parseUnaryExpression)
;if(expr.type!==syntax_1.Syntax.UnaryExpression&&this.match("**")){
this.nextToken(),
this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
;var left=expr,right=this.isolateCoverGrammar(this.parseExponentiationExpression)
;expr=this.finalize(this.startNode(startToken),new Node.BinaryExpression("**",left,right))
}return expr
},Parser.prototype.binaryPrecedence=function(token){
var op=token.value
;return 7===token.type?this.operatorPrecedence[op]||0:4===token.type&&("instanceof"===op||this.context.allowIn&&"in"===op)?7:0
},
Parser.prototype.parseBinaryExpression=function(){
var startToken=this.lookahead,expr=this.inheritCoverGrammar(this.parseExponentiationExpression),token=this.lookahead,prec=this.binaryPrecedence(token)
;if(prec>0){
this.nextToken(),this.context.isAssignmentTarget=!1,this.context.isBindingElement=!1
;for(var markers=[startToken,this.lookahead],left=expr,right=this.isolateCoverGrammar(this.parseExponentiationExpression),stack=[left,token.value,right],precedences=[prec];!((prec=this.binaryPrecedence(this.lookahead))<=0);){
for(;stack.length>2&&prec<=precedences[precedences.length-1];){
right=stack.pop();var operator=stack.pop()
;precedences.pop(),left=stack.pop(),markers.pop()
;var node=this.startNode(markers[markers.length-1])
;stack.push(this.finalize(node,new Node.BinaryExpression(operator,left,right)))
}
stack.push(this.nextToken().value),precedences.push(prec),markers.push(this.lookahead),
stack.push(this.isolateCoverGrammar(this.parseExponentiationExpression))
}var i=stack.length-1;expr=stack[i]
;for(var lastMarker=markers.pop();i>1;){
var marker=markers.pop(),lastLineStart=lastMarker&&lastMarker.lineStart
;node=this.startNode(marker,lastLineStart),
operator=stack[i-1]
;expr=this.finalize(node,new Node.BinaryExpression(operator,stack[i-2],expr)),
i-=2,lastMarker=marker}}return expr
},Parser.prototype.parseConditionalExpression=function(){
var startToken=this.lookahead,expr=this.inheritCoverGrammar(this.parseBinaryExpression)
;if(this.match("?")){this.nextToken()
;var previousAllowIn=this.context.allowIn
;this.context.allowIn=!0
;var consequent=this.isolateCoverGrammar(this.parseAssignmentExpression)
;this.context.allowIn=previousAllowIn,
this.expect(":")
;var alternate=this.isolateCoverGrammar(this.parseAssignmentExpression)
;expr=this.finalize(this.startNode(startToken),new Node.ConditionalExpression(expr,consequent,alternate)),
this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1}return expr
},Parser.prototype.checkPatternParam=function(options,param){
switch(param.type){
case syntax_1.Syntax.Identifier:
this.validateParam(options,param,param.name);break
;case syntax_1.Syntax.RestElement:
this.checkPatternParam(options,param.argument)
;break;case syntax_1.Syntax.AssignmentPattern:
this.checkPatternParam(options,param.left);break
;case syntax_1.Syntax.ArrayPattern:
for(var i=0;i<param.elements.length;i++)null!==param.elements[i]&&this.checkPatternParam(options,param.elements[i])
;break;case syntax_1.Syntax.ObjectPattern:
for(i=0;i<param.properties.length;i++)this.checkPatternParam(options,param.properties[i].value)
}
options.simple=options.simple&&param instanceof Node.Identifier
},Parser.prototype.reinterpretAsCoverFormalsList=function(expr){
var options,params=[expr],asyncArrow=!1
;switch(expr.type){
case syntax_1.Syntax.Identifier:break
;case"ArrowParameterPlaceHolder":
params=expr.params,asyncArrow=expr.async;break
;default:return null}options={simple:!0,
paramSet:{}};for(var i=0;i<params.length;++i){
(param=params[i]).type===syntax_1.Syntax.AssignmentPattern?param.right.type===syntax_1.Syntax.YieldExpression&&(param.right.argument&&this.throwUnexpectedToken(this.lookahead),
param.right.type=syntax_1.Syntax.Identifier,
param.right.name="yield",delete param.right.argument,
delete param.right.delegate):asyncArrow&&param.type===syntax_1.Syntax.Identifier&&"await"===param.name&&this.throwUnexpectedToken(this.lookahead),
this.checkPatternParam(options,param),
params[i]=param}
if(this.context.strict||!this.context.allowYield)for(i=0;i<params.length;++i){
var param
;(param=params[i]).type===syntax_1.Syntax.YieldExpression&&this.throwUnexpectedToken(this.lookahead)
}
if(options.message===messages_1.Messages.StrictParamDupe){
var token=this.context.strict?options.stricted:options.firstRestricted
;this.throwUnexpectedToken(token,options.message)}
return{simple:options.simple,params:params,
stricted:options.stricted,
firstRestricted:options.firstRestricted,
message:options.message}
},Parser.prototype.parseAssignmentExpression=function(){
var expr
;if(!this.context.allowYield&&this.matchKeyword("yield"))expr=this.parseYieldExpression();else{
var startToken=this.lookahead,token=startToken
;if(expr=this.parseConditionalExpression(),
3===token.type&&token.lineNumber===this.lookahead.lineNumber&&"async"===token.value&&(3===this.lookahead.type||this.matchKeyword("yield"))){
var arg=this.parsePrimaryExpression()
;this.reinterpretExpressionAsPattern(arg),expr={
type:"ArrowParameterPlaceHolder",params:[arg],
async:!0}}
if("ArrowParameterPlaceHolder"===expr.type||this.match("=>")){
this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1
;var isAsync=expr.async,list=this.reinterpretAsCoverFormalsList(expr)
;if(list){
this.hasLineTerminator&&this.tolerateUnexpectedToken(this.lookahead),this.context.firstCoverInitializedNameError=null
;var previousStrict=this.context.strict,previousAllowStrictDirective=this.context.allowStrictDirective
;this.context.allowStrictDirective=list.simple
;var previousAllowYield=this.context.allowYield,previousAwait=this.context.await
;this.context.allowYield=!0,
this.context.await=isAsync
;var node=this.startNode(startToken)
;this.expect("=>");var body=void 0
;if(this.match("{")){
var previousAllowIn=this.context.allowIn
;this.context.allowIn=!0,body=this.parseFunctionSourceElements(),
this.context.allowIn=previousAllowIn
}else body=this.isolateCoverGrammar(this.parseAssignmentExpression)
;var expression=body.type!==syntax_1.Syntax.BlockStatement
;this.context.strict&&list.firstRestricted&&this.throwUnexpectedToken(list.firstRestricted,list.message),
this.context.strict&&list.stricted&&this.tolerateUnexpectedToken(list.stricted,list.message),
expr=isAsync?this.finalize(node,new Node.AsyncArrowFunctionExpression(list.params,body,expression)):this.finalize(node,new Node.ArrowFunctionExpression(list.params,body,expression)),
this.context.strict=previousStrict,
this.context.allowStrictDirective=previousAllowStrictDirective,
this.context.allowYield=previousAllowYield,
this.context.await=previousAwait}
}else if(this.matchAssign()){
if(this.context.isAssignmentTarget||this.tolerateError(messages_1.Messages.InvalidLHSInAssignment),
this.context.strict&&expr.type===syntax_1.Syntax.Identifier){
var id=expr
;this.scanner.isRestrictedWord(id.name)&&this.tolerateUnexpectedToken(token,messages_1.Messages.StrictLHSAssignment),
this.scanner.isStrictModeReservedWord(id.name)&&this.tolerateUnexpectedToken(token,messages_1.Messages.StrictReservedWord)
}
this.match("=")?this.reinterpretExpressionAsPattern(expr):(this.context.isAssignmentTarget=!1,
this.context.isBindingElement=!1)
;var operator=(token=this.nextToken()).value,right=this.isolateCoverGrammar(this.parseAssignmentExpression)
;expr=this.finalize(this.startNode(startToken),new Node.AssignmentExpression(operator,expr,right)),
this.context.firstCoverInitializedNameError=null}}
return expr
},Parser.prototype.parseExpression=function(){
var startToken=this.lookahead,expr=this.isolateCoverGrammar(this.parseAssignmentExpression)
;if(this.match(",")){var expressions=[]
;for(expressions.push(expr);2!==this.lookahead.type&&this.match(",");)this.nextToken(),
expressions.push(this.isolateCoverGrammar(this.parseAssignmentExpression))
;expr=this.finalize(this.startNode(startToken),new Node.SequenceExpression(expressions))
}return expr
},Parser.prototype.parseStatementListItem=function(){
var statement
;if(this.context.isAssignmentTarget=!0,this.context.isBindingElement=!0,
4===this.lookahead.type)switch(this.lookahead.value){
case"export":
this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,messages_1.Messages.IllegalExportDeclaration),
statement=this.parseExportDeclaration();break
;case"import":
this.context.isModule||this.tolerateUnexpectedToken(this.lookahead,messages_1.Messages.IllegalImportDeclaration),
statement=this.parseImportDeclaration();break
;case"const":
statement=this.parseLexicalDeclaration({inFor:!1})
;break;case"function":
statement=this.parseFunctionDeclaration();break
;case"class":
statement=this.parseClassDeclaration();break
;case"let":
statement=this.isLexicalDeclaration()?this.parseLexicalDeclaration({
inFor:!1}):this.parseStatement();break;default:
statement=this.parseStatement()
}else statement=this.parseStatement()
;return statement
},Parser.prototype.parseBlock=function(){
var node=this.createNode();this.expect("{")
;for(var block=[];!this.match("}");)block.push(this.parseStatementListItem())
;return this.expect("}"),
this.finalize(node,new Node.BlockStatement(block))
},Parser.prototype.parseLexicalBinding=function(kind,options){
var node=this.createNode(),id=this.parsePattern([],kind)
;this.context.strict&&id.type===syntax_1.Syntax.Identifier&&this.scanner.isRestrictedWord(id.name)&&this.tolerateError(messages_1.Messages.StrictVarName)
;var init=null
;return"const"===kind?this.matchKeyword("in")||this.matchContextualKeyword("of")||(this.match("=")?(this.nextToken(),
init=this.isolateCoverGrammar(this.parseAssignmentExpression)):this.throwError(messages_1.Messages.DeclarationMissingInitializer,"const")):(!options.inFor&&id.type!==syntax_1.Syntax.Identifier||this.match("="))&&(this.expect("="),
init=this.isolateCoverGrammar(this.parseAssignmentExpression)),
this.finalize(node,new Node.VariableDeclarator(id,init))
},Parser.prototype.parseBindingList=function(kind,options){
for(var list=[this.parseLexicalBinding(kind,options)];this.match(",");)this.nextToken(),
list.push(this.parseLexicalBinding(kind,options))
;return list
},Parser.prototype.isLexicalDeclaration=function(){
var state=this.scanner.saveState()
;this.scanner.scanComments()
;var next=this.scanner.lex()
;return this.scanner.restoreState(state),3===next.type||7===next.type&&"["===next.value||7===next.type&&"{"===next.value||4===next.type&&"let"===next.value||4===next.type&&"yield"===next.value
},
Parser.prototype.parseLexicalDeclaration=function(options){
var node=this.createNode(),kind=this.nextToken().value
;assert_1.assert("let"===kind||"const"===kind,"Lexical declaration must be either let or const")
;var declarations=this.parseBindingList(kind,options)
;return this.consumeSemicolon(),
this.finalize(node,new Node.VariableDeclaration(declarations,kind))
},Parser.prototype.parseBindingRestElement=function(params,kind){
var node=this.createNode();this.expect("...")
;var arg=this.parsePattern(params,kind)
;return this.finalize(node,new Node.RestElement(arg))
},Parser.prototype.parseArrayPattern=function(params,kind){
var node=this.createNode();this.expect("[")
;for(var elements=[];!this.match("]");)if(this.match(","))this.nextToken(),
elements.push(null);else{if(this.match("...")){
elements.push(this.parseBindingRestElement(params,kind))
;break}
elements.push(this.parsePatternWithDefault(params,kind)),this.match("]")||this.expect(",")
}
return this.expect("]"),this.finalize(node,new Node.ArrayPattern(elements))
},Parser.prototype.parsePropertyPattern=function(params,kind){
var key,value,node=this.createNode(),computed=!1,shorthand=!1
;if(3===this.lookahead.type){
var keyToken=this.lookahead
;key=this.parseVariableIdentifier()
;var init=this.finalize(node,new Node.Identifier(keyToken.value))
;if(this.match("=")){
params.push(keyToken),shorthand=!0,this.nextToken()
;var expr=this.parseAssignmentExpression()
;value=this.finalize(this.startNode(keyToken),new Node.AssignmentPattern(init,expr))
}else this.match(":")?(this.expect(":"),
value=this.parsePatternWithDefault(params,kind)):(params.push(keyToken),
shorthand=!0,value=init)
}else computed=this.match("["),key=this.parseObjectPropertyKey(),
this.expect(":"),
value=this.parsePatternWithDefault(params,kind)
;return this.finalize(node,new Node.Property("init",key,computed,value,!1,shorthand))
},
Parser.prototype.parseObjectPattern=function(params,kind){
var node=this.createNode(),properties=[]
;for(this.expect("{");!this.match("}");)properties.push(this.parsePropertyPattern(params,kind)),
this.match("}")||this.expect(",")
;return this.expect("}"),this.finalize(node,new Node.ObjectPattern(properties))
},
Parser.prototype.parsePattern=function(params,kind){
var pattern
;return this.match("[")?pattern=this.parseArrayPattern(params,kind):this.match("{")?pattern=this.parseObjectPattern(params,kind):(!this.matchKeyword("let")||"const"!==kind&&"let"!==kind||this.tolerateUnexpectedToken(this.lookahead,messages_1.Messages.LetInLexicalBinding),
params.push(this.lookahead),
pattern=this.parseVariableIdentifier(kind)),pattern
},Parser.prototype.parsePatternWithDefault=function(params,kind){
var startToken=this.lookahead,pattern=this.parsePattern(params,kind)
;if(this.match("=")){this.nextToken()
;var previousAllowYield=this.context.allowYield
;this.context.allowYield=!0
;var right=this.isolateCoverGrammar(this.parseAssignmentExpression)
;this.context.allowYield=previousAllowYield,
pattern=this.finalize(this.startNode(startToken),new Node.AssignmentPattern(pattern,right))
}return pattern
},Parser.prototype.parseVariableIdentifier=function(kind){
var node=this.createNode(),token=this.nextToken()
;return 4===token.type&&"yield"===token.value?this.context.strict?this.tolerateUnexpectedToken(token,messages_1.Messages.StrictReservedWord):this.context.allowYield||this.throwUnexpectedToken(token):3!==token.type?this.context.strict&&4===token.type&&this.scanner.isStrictModeReservedWord(token.value)?this.tolerateUnexpectedToken(token,messages_1.Messages.StrictReservedWord):(this.context.strict||"let"!==token.value||"var"!==kind)&&this.throwUnexpectedToken(token):(this.context.isModule||this.context.await)&&3===token.type&&"await"===token.value&&this.tolerateUnexpectedToken(token),
this.finalize(node,new Node.Identifier(token.value))
},Parser.prototype.parseVariableDeclaration=function(options){
var node=this.createNode(),id=this.parsePattern([],"var")
;this.context.strict&&id.type===syntax_1.Syntax.Identifier&&this.scanner.isRestrictedWord(id.name)&&this.tolerateError(messages_1.Messages.StrictVarName)
;var init=null
;return this.match("=")?(this.nextToken(),init=this.isolateCoverGrammar(this.parseAssignmentExpression)):id.type===syntax_1.Syntax.Identifier||options.inFor||this.expect("="),
this.finalize(node,new Node.VariableDeclarator(id,init))
},Parser.prototype.parseVariableDeclarationList=function(options){
var opt={inFor:options.inFor},list=[]
;for(list.push(this.parseVariableDeclaration(opt));this.match(",");)this.nextToken(),
list.push(this.parseVariableDeclaration(opt))
;return list
},Parser.prototype.parseVariableStatement=function(){
var node=this.createNode()
;this.expectKeyword("var")
;var declarations=this.parseVariableDeclarationList({
inFor:!1})
;return this.consumeSemicolon(),this.finalize(node,new Node.VariableDeclaration(declarations,"var"))
},Parser.prototype.parseEmptyStatement=function(){
var node=this.createNode()
;return this.expect(";"),this.finalize(node,new Node.EmptyStatement)
},Parser.prototype.parseExpressionStatement=function(){
var node=this.createNode(),expr=this.parseExpression()
;return this.consumeSemicolon(),
this.finalize(node,new Node.ExpressionStatement(expr))
},Parser.prototype.parseIfClause=function(){
return this.context.strict&&this.matchKeyword("function")&&this.tolerateError(messages_1.Messages.StrictFunction),
this.parseStatement()
},Parser.prototype.parseIfStatement=function(){
var consequent,node=this.createNode(),alternate=null
;this.expectKeyword("if"),this.expect("(")
;var test=this.parseExpression()
;return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),
consequent=this.finalize(this.createNode(),new Node.EmptyStatement)):(this.expect(")"),
consequent=this.parseIfClause(),
this.matchKeyword("else")&&(this.nextToken(),alternate=this.parseIfClause())),
this.finalize(node,new Node.IfStatement(test,consequent,alternate))
},Parser.prototype.parseDoWhileStatement=function(){
var node=this.createNode()
;this.expectKeyword("do")
;var previousInIteration=this.context.inIteration
;this.context.inIteration=!0
;var body=this.parseStatement()
;this.context.inIteration=previousInIteration,this.expectKeyword("while"),
this.expect("(");var test=this.parseExpression()
;return!this.match(")")&&this.config.tolerant?this.tolerateUnexpectedToken(this.nextToken()):(this.expect(")"),
this.match(";")&&this.nextToken()),
this.finalize(node,new Node.DoWhileStatement(body,test))
},Parser.prototype.parseWhileStatement=function(){
var body,node=this.createNode()
;this.expectKeyword("while"),this.expect("(")
;var test=this.parseExpression()
;if(!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),
body=this.finalize(this.createNode(),new Node.EmptyStatement);else{
this.expect(")")
;var previousInIteration=this.context.inIteration
;this.context.inIteration=!0,body=this.parseStatement(),
this.context.inIteration=previousInIteration}
return this.finalize(node,new Node.WhileStatement(test,body))
},Parser.prototype.parseForStatement=function(){
var left,right,body,init=null,test=null,update=null,forIn=!0,node=this.createNode()
;if(this.expectKeyword("for"),
this.expect("("),this.match(";"))this.nextToken();else if(this.matchKeyword("var")){
init=this.createNode(),this.nextToken()
;var previousAllowIn=this.context.allowIn
;this.context.allowIn=!1
;var declarations=this.parseVariableDeclarationList({
inFor:!0})
;if(this.context.allowIn=previousAllowIn,1===declarations.length&&this.matchKeyword("in")){
var decl=declarations[0]
;decl.init&&(decl.id.type===syntax_1.Syntax.ArrayPattern||decl.id.type===syntax_1.Syntax.ObjectPattern||this.context.strict)&&this.tolerateError(messages_1.Messages.ForInOfLoopInitializer,"for-in"),
init=this.finalize(init,new Node.VariableDeclaration(declarations,"var")),
this.nextToken(),
left=init,right=this.parseExpression(),init=null
}else 1===declarations.length&&null===declarations[0].init&&this.matchContextualKeyword("of")?(init=this.finalize(init,new Node.VariableDeclaration(declarations,"var")),
this.nextToken(),
left=init,right=this.parseAssignmentExpression(),init=null,forIn=!1):(init=this.finalize(init,new Node.VariableDeclaration(declarations,"var")),
this.expect(";"))
}else if(this.matchKeyword("const")||this.matchKeyword("let")){
init=this.createNode()
;var kind=this.nextToken().value
;if(this.context.strict||"in"!==this.lookahead.value){
previousAllowIn=this.context.allowIn
;this.context.allowIn=!1
;declarations=this.parseBindingList(kind,{inFor:!0
})
;this.context.allowIn=previousAllowIn,1===declarations.length&&null===declarations[0].init&&this.matchKeyword("in")?(init=this.finalize(init,new Node.VariableDeclaration(declarations,kind)),
this.nextToken(),
left=init,right=this.parseExpression(),init=null):1===declarations.length&&null===declarations[0].init&&this.matchContextualKeyword("of")?(init=this.finalize(init,new Node.VariableDeclaration(declarations,kind)),
this.nextToken(),
left=init,right=this.parseAssignmentExpression(),init=null,forIn=!1):(this.consumeSemicolon(),
init=this.finalize(init,new Node.VariableDeclaration(declarations,kind)))
}else init=this.finalize(init,new Node.Identifier(kind)),
this.nextToken(),left=init,
right=this.parseExpression(),init=null}else{
var initStartToken=this.lookahead
;previousAllowIn=this.context.allowIn
;if(this.context.allowIn=!1,init=this.inheritCoverGrammar(this.parseAssignmentExpression),
this.context.allowIn=previousAllowIn,
this.matchKeyword("in"))this.context.isAssignmentTarget&&init.type!==syntax_1.Syntax.AssignmentExpression||this.tolerateError(messages_1.Messages.InvalidLHSInForIn),
this.nextToken(),
this.reinterpretExpressionAsPattern(init),left=init,right=this.parseExpression(),
init=null;else if(this.matchContextualKeyword("of"))this.context.isAssignmentTarget&&init.type!==syntax_1.Syntax.AssignmentExpression||this.tolerateError(messages_1.Messages.InvalidLHSInForLoop),
this.nextToken(),
this.reinterpretExpressionAsPattern(init),left=init,right=this.parseAssignmentExpression(),
init=null,forIn=!1;else{if(this.match(",")){
for(var initSeq=[init];this.match(",");)this.nextToken(),
initSeq.push(this.isolateCoverGrammar(this.parseAssignmentExpression))
;init=this.finalize(this.startNode(initStartToken),new Node.SequenceExpression(initSeq))
}this.expect(";")}}
if(void 0===left&&(this.match(";")||(test=this.parseExpression()),
this.expect(";"),
this.match(")")||(update=this.parseExpression())),!this.match(")")&&this.config.tolerant)this.tolerateUnexpectedToken(this.nextToken()),
body=this.finalize(this.createNode(),new Node.EmptyStatement);else{
this.expect(")")
;var previousInIteration=this.context.inIteration
;this.context.inIteration=!0,body=this.isolateCoverGrammar(this.parseStatement),
this.context.inIteration=previousInIteration}
return void 0===left?this.finalize(node,new Node.ForStatement(init,test,update,body)):forIn?this.finalize(node,new Node.ForInStatement(left,right,body)):this.finalize(node,new Node.ForOfStatement(left,right,body))
},
Parser.prototype.parseContinueStatement=function(){
var node=this.createNode()
;this.expectKeyword("continue");var label=null
;if(3===this.lookahead.type&&!this.hasLineTerminator){
var id=this.parseVariableIdentifier();label=id
;var key="$"+id.name
;Object.prototype.hasOwnProperty.call(this.context.labelSet,key)||this.throwError(messages_1.Messages.UnknownLabel,id.name)
}
return this.consumeSemicolon(),null!==label||this.context.inIteration||this.throwError(messages_1.Messages.IllegalContinue),
this.finalize(node,new Node.ContinueStatement(label))
},Parser.prototype.parseBreakStatement=function(){
var node=this.createNode()
;this.expectKeyword("break");var label=null
;if(3===this.lookahead.type&&!this.hasLineTerminator){
var id=this.parseVariableIdentifier(),key="$"+id.name
;Object.prototype.hasOwnProperty.call(this.context.labelSet,key)||this.throwError(messages_1.Messages.UnknownLabel,id.name),
label=id}
return this.consumeSemicolon(),null!==label||this.context.inIteration||this.context.inSwitch||this.throwError(messages_1.Messages.IllegalBreak),
this.finalize(node,new Node.BreakStatement(label))
},Parser.prototype.parseReturnStatement=function(){
this.context.inFunctionBody||this.tolerateError(messages_1.Messages.IllegalReturn)
;var node=this.createNode()
;this.expectKeyword("return")
;var argument=!this.match(";")&&!this.match("}")&&!this.hasLineTerminator&&2!==this.lookahead.type||8===this.lookahead.type||10===this.lookahead.type?this.parseExpression():null
;return this.consumeSemicolon(),
this.finalize(node,new Node.ReturnStatement(argument))
},Parser.prototype.parseWithStatement=function(){
this.context.strict&&this.tolerateError(messages_1.Messages.StrictModeWith)
;var body,node=this.createNode()
;this.expectKeyword("with"),this.expect("(")
;var object=this.parseExpression()
;return!this.match(")")&&this.config.tolerant?(this.tolerateUnexpectedToken(this.nextToken()),
body=this.finalize(this.createNode(),new Node.EmptyStatement)):(this.expect(")"),
body=this.parseStatement()),
this.finalize(node,new Node.WithStatement(object,body))
},Parser.prototype.parseSwitchCase=function(){
var test,node=this.createNode()
;this.matchKeyword("default")?(this.nextToken(),test=null):(this.expectKeyword("case"),
test=this.parseExpression()),this.expect(":")
;for(var consequent=[];!(this.match("}")||this.matchKeyword("default")||this.matchKeyword("case"));)consequent.push(this.parseStatementListItem())
;return this.finalize(node,new Node.SwitchCase(test,consequent))
},Parser.prototype.parseSwitchStatement=function(){
var node=this.createNode()
;this.expectKeyword("switch"),this.expect("(")
;var discriminant=this.parseExpression()
;this.expect(")")
;var previousInSwitch=this.context.inSwitch
;this.context.inSwitch=!0
;var cases=[],defaultFound=!1
;for(this.expect("{");!this.match("}");){
var clause=this.parseSwitchCase()
;null===clause.test&&(defaultFound&&this.throwError(messages_1.Messages.MultipleDefaultsInSwitch),
defaultFound=!0),cases.push(clause)}
return this.expect("}"),this.context.inSwitch=previousInSwitch,
this.finalize(node,new Node.SwitchStatement(discriminant,cases))
},Parser.prototype.parseLabelledStatement=function(){
var statement,node=this.createNode(),expr=this.parseExpression()
;if(expr.type===syntax_1.Syntax.Identifier&&this.match(":")){
this.nextToken();var id=expr,key="$"+id.name
;Object.prototype.hasOwnProperty.call(this.context.labelSet,key)&&this.throwError(messages_1.Messages.Redeclaration,"Label",id.name),
this.context.labelSet[key]=!0;var body=void 0
;if(this.matchKeyword("class"))this.tolerateUnexpectedToken(this.lookahead),
body=this.parseClassDeclaration();else if(this.matchKeyword("function")){
var token=this.lookahead,declaration=this.parseFunctionDeclaration()
;this.context.strict?this.tolerateUnexpectedToken(token,messages_1.Messages.StrictFunction):declaration.generator&&this.tolerateUnexpectedToken(token,messages_1.Messages.GeneratorInLegacyContext),
body=declaration}else body=this.parseStatement()
;delete this.context.labelSet[key],
statement=new Node.LabeledStatement(id,body)
}else this.consumeSemicolon(),statement=new Node.ExpressionStatement(expr)
;return this.finalize(node,statement)
},Parser.prototype.parseThrowStatement=function(){
var node=this.createNode()
;this.expectKeyword("throw"),this.hasLineTerminator&&this.throwError(messages_1.Messages.NewlineAfterThrow)
;var argument=this.parseExpression()
;return this.consumeSemicolon(),this.finalize(node,new Node.ThrowStatement(argument))
},Parser.prototype.parseCatchClause=function(){
var node=this.createNode()
;this.expectKeyword("catch"),this.expect("("),this.match(")")&&this.throwUnexpectedToken(this.lookahead)
;for(var params=[],param=this.parsePattern(params),paramMap={},i=0;i<params.length;i++){
var key="$"+params[i].value
;Object.prototype.hasOwnProperty.call(paramMap,key)&&this.tolerateError(messages_1.Messages.DuplicateBinding,params[i].value),
paramMap[key]=!0}
this.context.strict&&param.type===syntax_1.Syntax.Identifier&&this.scanner.isRestrictedWord(param.name)&&this.tolerateError(messages_1.Messages.StrictCatchVariable),
this.expect(")");var body=this.parseBlock()
;return this.finalize(node,new Node.CatchClause(param,body))
},Parser.prototype.parseFinallyClause=function(){
return this.expectKeyword("finally"),
this.parseBlock()
},Parser.prototype.parseTryStatement=function(){
var node=this.createNode()
;this.expectKeyword("try")
;var block=this.parseBlock(),handler=this.matchKeyword("catch")?this.parseCatchClause():null,finalizer=this.matchKeyword("finally")?this.parseFinallyClause():null
;return handler||finalizer||this.throwError(messages_1.Messages.NoCatchOrFinally),
this.finalize(node,new Node.TryStatement(block,handler,finalizer))
},Parser.prototype.parseDebuggerStatement=function(){
var node=this.createNode()
;return this.expectKeyword("debugger"),this.consumeSemicolon(),
this.finalize(node,new Node.DebuggerStatement)
},Parser.prototype.parseStatement=function(){
var statement;switch(this.lookahead.type){case 1:
case 5:case 6:case 8:case 10:case 9:
statement=this.parseExpressionStatement();break
;case 7:var value=this.lookahead.value
;statement="{"===value?this.parseBlock():"("===value?this.parseExpressionStatement():";"===value?this.parseEmptyStatement():this.parseExpressionStatement()
;break;case 3:
statement=this.matchAsyncFunction()?this.parseFunctionDeclaration():this.parseLabelledStatement()
;break;case 4:switch(this.lookahead.value){
case"break":statement=this.parseBreakStatement()
;break;case"continue":
statement=this.parseContinueStatement();break
;case"debugger":
statement=this.parseDebuggerStatement();break
;case"do":statement=this.parseDoWhileStatement()
;break;case"for":
statement=this.parseForStatement();break
;case"function":
statement=this.parseFunctionDeclaration();break
;case"if":statement=this.parseIfStatement();break
;case"return":
statement=this.parseReturnStatement();break
;case"switch":
statement=this.parseSwitchStatement();break
;case"throw":statement=this.parseThrowStatement()
;break;case"try":
statement=this.parseTryStatement();break
;case"var":statement=this.parseVariableStatement()
;break;case"while":
statement=this.parseWhileStatement();break
;case"with":statement=this.parseWithStatement()
;break;default:
statement=this.parseExpressionStatement()}break
;default:
statement=this.throwUnexpectedToken(this.lookahead)
}return statement
},Parser.prototype.parseFunctionSourceElements=function(){
var node=this.createNode();this.expect("{")
;var body=this.parseDirectivePrologues(),previousLabelSet=this.context.labelSet,previousInIteration=this.context.inIteration,previousInSwitch=this.context.inSwitch,previousInFunctionBody=this.context.inFunctionBody
;for(this.context.labelSet={},
this.context.inIteration=!1,this.context.inSwitch=!1,
this.context.inFunctionBody=!0;2!==this.lookahead.type&&!this.match("}");)body.push(this.parseStatementListItem())
;return this.expect("}"),
this.context.labelSet=previousLabelSet,this.context.inIteration=previousInIteration,
this.context.inSwitch=previousInSwitch,
this.context.inFunctionBody=previousInFunctionBody,
this.finalize(node,new Node.BlockStatement(body))
},Parser.prototype.validateParam=function(options,param,name){
var key="$"+name
;this.context.strict?(this.scanner.isRestrictedWord(name)&&(options.stricted=param,
options.message=messages_1.Messages.StrictParamName),
Object.prototype.hasOwnProperty.call(options.paramSet,key)&&(options.stricted=param,
options.message=messages_1.Messages.StrictParamDupe)):options.firstRestricted||(this.scanner.isRestrictedWord(name)?(options.firstRestricted=param,
options.message=messages_1.Messages.StrictParamName):this.scanner.isStrictModeReservedWord(name)?(options.firstRestricted=param,
options.message=messages_1.Messages.StrictReservedWord):Object.prototype.hasOwnProperty.call(options.paramSet,key)&&(options.stricted=param,
options.message=messages_1.Messages.StrictParamDupe)),
"function"==typeof Object.defineProperty?Object.defineProperty(options.paramSet,key,{
value:!0,enumerable:!0,writable:!0,configurable:!0
}):options.paramSet[key]=!0
},Parser.prototype.parseRestElement=function(params){
var node=this.createNode();this.expect("...")
;var arg=this.parsePattern(params)
;return this.match("=")&&this.throwError(messages_1.Messages.DefaultRestParameter),
this.match(")")||this.throwError(messages_1.Messages.ParameterAfterRestParameter),
this.finalize(node,new Node.RestElement(arg))
},Parser.prototype.parseFormalParameter=function(options){
for(var params=[],param=this.match("...")?this.parseRestElement(params):this.parsePatternWithDefault(params),i=0;i<params.length;i++)this.validateParam(options,params[i],params[i].value)
;options.simple=options.simple&&param instanceof Node.Identifier,
options.params.push(param)
},Parser.prototype.parseFormalParameters=function(firstRestricted){
var options;if(options={simple:!0,params:[],
firstRestricted:firstRestricted
},this.expect("("),!this.match(")"))for(options.paramSet={};2!==this.lookahead.type&&(this.parseFormalParameter(options),
!this.match(")"))&&(this.expect(","),
!this.match(")")););return this.expect(")"),{
simple:options.simple,params:options.params,
stricted:options.stricted,
firstRestricted:options.firstRestricted,
message:options.message}
},Parser.prototype.matchAsyncFunction=function(){
var match=this.matchContextualKeyword("async")
;if(match){var state=this.scanner.saveState()
;this.scanner.scanComments()
;var next=this.scanner.lex()
;this.scanner.restoreState(state),match=state.lineNumber===next.lineNumber&&4===next.type&&"function"===next.value
}return match
},Parser.prototype.parseFunctionDeclaration=function(identifierIsOptional){
var node=this.createNode(),isAsync=this.matchContextualKeyword("async")
;isAsync&&this.nextToken(),
this.expectKeyword("function")
;var message,isGenerator=!isAsync&&this.match("*")
;isGenerator&&this.nextToken()
;var id=null,firstRestricted=null
;if(!identifierIsOptional||!this.match("(")){
var token=this.lookahead
;id=this.parseVariableIdentifier(),this.context.strict?this.scanner.isRestrictedWord(token.value)&&this.tolerateUnexpectedToken(token,messages_1.Messages.StrictFunctionName):this.scanner.isRestrictedWord(token.value)?(firstRestricted=token,
message=messages_1.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(token.value)&&(firstRestricted=token,
message=messages_1.Messages.StrictReservedWord)}
var previousAllowAwait=this.context.await,previousAllowYield=this.context.allowYield
;this.context.await=isAsync,
this.context.allowYield=!isGenerator
;var formalParameters=this.parseFormalParameters(firstRestricted),params=formalParameters.params,stricted=formalParameters.stricted
;firstRestricted=formalParameters.firstRestricted,
formalParameters.message&&(message=formalParameters.message)
;var previousStrict=this.context.strict,previousAllowStrictDirective=this.context.allowStrictDirective
;this.context.allowStrictDirective=formalParameters.simple
;var body=this.parseFunctionSourceElements()
;return this.context.strict&&firstRestricted&&this.throwUnexpectedToken(firstRestricted,message),
this.context.strict&&stricted&&this.tolerateUnexpectedToken(stricted,message),
this.context.strict=previousStrict,
this.context.allowStrictDirective=previousAllowStrictDirective,
this.context.await=previousAllowAwait,
this.context.allowYield=previousAllowYield,
isAsync?this.finalize(node,new Node.AsyncFunctionDeclaration(id,params,body)):this.finalize(node,new Node.FunctionDeclaration(id,params,body,isGenerator))
},
Parser.prototype.parseFunctionExpression=function(){
var node=this.createNode(),isAsync=this.matchContextualKeyword("async")
;isAsync&&this.nextToken(),
this.expectKeyword("function")
;var message,isGenerator=!isAsync&&this.match("*")
;isGenerator&&this.nextToken()
;var firstRestricted,id=null,previousAllowAwait=this.context.await,previousAllowYield=this.context.allowYield
;if(this.context.await=isAsync,
this.context.allowYield=!isGenerator,!this.match("(")){
var token=this.lookahead
;id=this.context.strict||isGenerator||!this.matchKeyword("yield")?this.parseVariableIdentifier():this.parseIdentifierName(),
this.context.strict?this.scanner.isRestrictedWord(token.value)&&this.tolerateUnexpectedToken(token,messages_1.Messages.StrictFunctionName):this.scanner.isRestrictedWord(token.value)?(firstRestricted=token,
message=messages_1.Messages.StrictFunctionName):this.scanner.isStrictModeReservedWord(token.value)&&(firstRestricted=token,
message=messages_1.Messages.StrictReservedWord)}
var formalParameters=this.parseFormalParameters(firstRestricted),params=formalParameters.params,stricted=formalParameters.stricted
;firstRestricted=formalParameters.firstRestricted,
formalParameters.message&&(message=formalParameters.message)
;var previousStrict=this.context.strict,previousAllowStrictDirective=this.context.allowStrictDirective
;this.context.allowStrictDirective=formalParameters.simple
;var body=this.parseFunctionSourceElements()
;return this.context.strict&&firstRestricted&&this.throwUnexpectedToken(firstRestricted,message),
this.context.strict&&stricted&&this.tolerateUnexpectedToken(stricted,message),
this.context.strict=previousStrict,
this.context.allowStrictDirective=previousAllowStrictDirective,
this.context.await=previousAllowAwait,
this.context.allowYield=previousAllowYield,
isAsync?this.finalize(node,new Node.AsyncFunctionExpression(id,params,body)):this.finalize(node,new Node.FunctionExpression(id,params,body,isGenerator))
},Parser.prototype.parseDirective=function(){
var token=this.lookahead,node=this.createNode(),expr=this.parseExpression(),directive=expr.type===syntax_1.Syntax.Literal?this.getTokenRaw(token).slice(1,-1):null
;return this.consumeSemicolon(),
this.finalize(node,directive?new Node.Directive(expr,directive):new Node.ExpressionStatement(expr))
},
Parser.prototype.parseDirectivePrologues=function(){
for(var firstRestricted=null,body=[];;){
var token=this.lookahead;if(8!==token.type)break
;var statement=this.parseDirective()
;body.push(statement)
;var directive=statement.directive
;if("string"!=typeof directive)break
;"use strict"===directive?(this.context.strict=!0,
firstRestricted&&this.tolerateUnexpectedToken(firstRestricted,messages_1.Messages.StrictOctalLiteral),
this.context.allowStrictDirective||this.tolerateUnexpectedToken(token,messages_1.Messages.IllegalLanguageModeDirective)):!firstRestricted&&token.octal&&(firstRestricted=token)
}return body
},Parser.prototype.qualifiedPropertyName=function(token){
switch(token.type){case 3:case 8:case 1:case 5:
case 6:case 4:return!0;case 7:
return"["===token.value}return!1
},Parser.prototype.parseGetterMethod=function(){
var node=this.createNode(),previousAllowYield=this.context.allowYield
;this.context.allowYield=!0
;var formalParameters=this.parseFormalParameters()
;formalParameters.params.length>0&&this.tolerateError(messages_1.Messages.BadGetterArity)
;var method=this.parsePropertyMethod(formalParameters)
;return this.context.allowYield=previousAllowYield,
this.finalize(node,new Node.FunctionExpression(null,formalParameters.params,method,!1))
},Parser.prototype.parseSetterMethod=function(){
var node=this.createNode(),previousAllowYield=this.context.allowYield
;this.context.allowYield=!0
;var formalParameters=this.parseFormalParameters()
;1!==formalParameters.params.length?this.tolerateError(messages_1.Messages.BadSetterArity):formalParameters.params[0]instanceof Node.RestElement&&this.tolerateError(messages_1.Messages.BadSetterRestParameter)
;var method=this.parsePropertyMethod(formalParameters)
;return this.context.allowYield=previousAllowYield,
this.finalize(node,new Node.FunctionExpression(null,formalParameters.params,method,!1))
},
Parser.prototype.parseGeneratorMethod=function(){
var node=this.createNode(),previousAllowYield=this.context.allowYield
;this.context.allowYield=!0
;var params=this.parseFormalParameters()
;this.context.allowYield=!1
;var method=this.parsePropertyMethod(params)
;return this.context.allowYield=previousAllowYield,
this.finalize(node,new Node.FunctionExpression(null,params.params,method,!0))
},Parser.prototype.isStartOfExpression=function(){
var start=!0,value=this.lookahead.value
;switch(this.lookahead.type){case 7:
start="["===value||"("===value||"{"===value||"+"===value||"-"===value||"!"===value||"~"===value||"++"===value||"--"===value||"/"===value||"/="===value
;break;case 4:
start="class"===value||"delete"===value||"function"===value||"let"===value||"new"===value||"super"===value||"this"===value||"typeof"===value||"void"===value||"yield"===value
}return start
},Parser.prototype.parseYieldExpression=function(){
var node=this.createNode()
;this.expectKeyword("yield")
;var argument=null,delegate=!1
;if(!this.hasLineTerminator){
var previousAllowYield=this.context.allowYield
;this.context.allowYield=!1,(delegate=this.match("*"))?(this.nextToken(),
argument=this.parseAssignmentExpression()):this.isStartOfExpression()&&(argument=this.parseAssignmentExpression()),
this.context.allowYield=previousAllowYield}
return this.finalize(node,new Node.YieldExpression(argument,delegate))
},Parser.prototype.parseClassElement=function(hasConstructor){
var token=this.lookahead,node=this.createNode(),kind="",key=null,value=null,computed=!1,method=!1,isStatic=!1,isAsync=!1
;if(this.match("*"))this.nextToken();else if(computed=this.match("["),
"static"===(key=this.parseObjectPropertyKey()).name&&(this.qualifiedPropertyName(this.lookahead)||this.match("*"))&&(token=this.lookahead,
isStatic=!0,
computed=this.match("["),this.match("*")?this.nextToken():key=this.parseObjectPropertyKey()),
3===token.type&&!this.hasLineTerminator&&"async"===token.value){
var punctuator=this.lookahead.value
;":"!==punctuator&&"("!==punctuator&&"*"!==punctuator&&(isAsync=!0,
token=this.lookahead,
key=this.parseObjectPropertyKey(),3===token.type&&"constructor"===token.value&&this.tolerateUnexpectedToken(token,messages_1.Messages.ConstructorIsAsync))
}
var lookaheadPropertyKey=this.qualifiedPropertyName(this.lookahead)
;return 3===token.type?"get"===token.value&&lookaheadPropertyKey?(kind="get",
computed=this.match("["),
key=this.parseObjectPropertyKey(),this.context.allowYield=!1,
value=this.parseGetterMethod()):"set"===token.value&&lookaheadPropertyKey&&(kind="set",
computed=this.match("["),
key=this.parseObjectPropertyKey(),value=this.parseSetterMethod()):7===token.type&&"*"===token.value&&lookaheadPropertyKey&&(kind="init",
computed=this.match("["),
key=this.parseObjectPropertyKey(),value=this.parseGeneratorMethod(),
method=!0),!kind&&key&&this.match("(")&&(kind="init",
value=isAsync?this.parsePropertyMethodAsyncFunction():this.parsePropertyMethodFunction(),
method=!0),
kind||this.throwUnexpectedToken(this.lookahead),"init"===kind&&(kind="method"),
computed||(isStatic&&this.isPropertyKey(key,"prototype")&&this.throwUnexpectedToken(token,messages_1.Messages.StaticPrototype),
!isStatic&&this.isPropertyKey(key,"constructor")&&(("method"!==kind||!method||value&&value.generator)&&this.throwUnexpectedToken(token,messages_1.Messages.ConstructorSpecialMethod),
hasConstructor.value?this.throwUnexpectedToken(token,messages_1.Messages.DuplicateConstructor):hasConstructor.value=!0,
kind="constructor")),
this.finalize(node,new Node.MethodDefinition(key,computed,value,kind,isStatic))
},
Parser.prototype.parseClassElementList=function(){
var body=[],hasConstructor={value:!1}
;for(this.expect("{");!this.match("}");)this.match(";")?this.nextToken():body.push(this.parseClassElement(hasConstructor))
;return this.expect("}"),body
},Parser.prototype.parseClassBody=function(){
var node=this.createNode(),elementList=this.parseClassElementList()
;return this.finalize(node,new Node.ClassBody(elementList))
},Parser.prototype.parseClassDeclaration=function(identifierIsOptional){
var node=this.createNode(),previousStrict=this.context.strict
;this.context.strict=!0,
this.expectKeyword("class")
;var id=identifierIsOptional&&3!==this.lookahead.type?null:this.parseVariableIdentifier(),superClass=null
;this.matchKeyword("extends")&&(this.nextToken(),
superClass=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall))
;var classBody=this.parseClassBody()
;return this.context.strict=previousStrict,this.finalize(node,new Node.ClassDeclaration(id,superClass,classBody))
},
Parser.prototype.parseClassExpression=function(){
var node=this.createNode(),previousStrict=this.context.strict
;this.context.strict=!0,
this.expectKeyword("class")
;var id=3===this.lookahead.type?this.parseVariableIdentifier():null,superClass=null
;this.matchKeyword("extends")&&(this.nextToken(),
superClass=this.isolateCoverGrammar(this.parseLeftHandSideExpressionAllowCall))
;var classBody=this.parseClassBody()
;return this.context.strict=previousStrict,this.finalize(node,new Node.ClassExpression(id,superClass,classBody))
},Parser.prototype.parseModule=function(){
this.context.strict=!0,this.context.isModule=!0,
this.scanner.isModule=!0
;for(var node=this.createNode(),body=this.parseDirectivePrologues();2!==this.lookahead.type;)body.push(this.parseStatementListItem())
;return this.finalize(node,new Node.Module(body))
},Parser.prototype.parseScript=function(){
for(var node=this.createNode(),body=this.parseDirectivePrologues();2!==this.lookahead.type;)body.push(this.parseStatementListItem())
;return this.finalize(node,new Node.Script(body))
},Parser.prototype.parseModuleSpecifier=function(){
var node=this.createNode()
;8!==this.lookahead.type&&this.throwError(messages_1.Messages.InvalidModuleSpecifier)
;var token=this.nextToken(),raw=this.getTokenRaw(token)
;return this.finalize(node,new Node.Literal(token.value,raw))
},Parser.prototype.parseImportSpecifier=function(){
var imported,local,node=this.createNode()
;return 3===this.lookahead.type?(local=imported=this.parseVariableIdentifier(),
this.matchContextualKeyword("as")&&(this.nextToken(),
local=this.parseVariableIdentifier())):(local=imported=this.parseIdentifierName(),
this.matchContextualKeyword("as")?(this.nextToken(),
local=this.parseVariableIdentifier()):this.throwUnexpectedToken(this.nextToken())),
this.finalize(node,new Node.ImportSpecifier(local,imported))
},Parser.prototype.parseNamedImports=function(){
this.expect("{")
;for(var specifiers=[];!this.match("}");)specifiers.push(this.parseImportSpecifier()),
this.match("}")||this.expect(",")
;return this.expect("}"),specifiers
},Parser.prototype.parseImportDefaultSpecifier=function(){
var node=this.createNode(),local=this.parseIdentifierName()
;return this.finalize(node,new Node.ImportDefaultSpecifier(local))
},Parser.prototype.parseImportNamespaceSpecifier=function(){
var node=this.createNode()
;this.expect("*"),this.matchContextualKeyword("as")||this.throwError(messages_1.Messages.NoAsAfterImportNamespace),
this.nextToken()
;var local=this.parseIdentifierName()
;return this.finalize(node,new Node.ImportNamespaceSpecifier(local))
},Parser.prototype.parseImportDeclaration=function(){
this.context.inFunctionBody&&this.throwError(messages_1.Messages.IllegalImportDeclaration)
;var src,node=this.createNode()
;this.expectKeyword("import");var specifiers=[]
;if(8===this.lookahead.type)src=this.parseModuleSpecifier();else{
if(this.match("{")?specifiers=specifiers.concat(this.parseNamedImports()):this.match("*")?specifiers.push(this.parseImportNamespaceSpecifier()):this.isIdentifierName(this.lookahead)&&!this.matchKeyword("default")?(specifiers.push(this.parseImportDefaultSpecifier()),
this.match(",")&&(this.nextToken(),
this.match("*")?specifiers.push(this.parseImportNamespaceSpecifier()):this.match("{")?specifiers=specifiers.concat(this.parseNamedImports()):this.throwUnexpectedToken(this.lookahead))):this.throwUnexpectedToken(this.nextToken()),
!this.matchContextualKeyword("from")){
var message=this.lookahead.value?messages_1.Messages.UnexpectedToken:messages_1.Messages.MissingFromClause
;this.throwError(message,this.lookahead.value)}
this.nextToken(),src=this.parseModuleSpecifier()}
return this.consumeSemicolon(),
this.finalize(node,new Node.ImportDeclaration(specifiers,src))
},Parser.prototype.parseExportSpecifier=function(){
var node=this.createNode(),local=this.parseIdentifierName(),exported=local
;return this.matchContextualKeyword("as")&&(this.nextToken(),
exported=this.parseIdentifierName()),
this.finalize(node,new Node.ExportSpecifier(local,exported))
},Parser.prototype.parseExportDeclaration=function(){
this.context.inFunctionBody&&this.throwError(messages_1.Messages.IllegalExportDeclaration)
;var exportDeclaration,node=this.createNode()
;if(this.expectKeyword("export"),this.matchKeyword("default"))if(this.nextToken(),
this.matchKeyword("function")){
var declaration=this.parseFunctionDeclaration(!0)
;exportDeclaration=this.finalize(node,new Node.ExportDefaultDeclaration(declaration))
}else if(this.matchKeyword("class")){
declaration=this.parseClassDeclaration(!0)
;exportDeclaration=this.finalize(node,new Node.ExportDefaultDeclaration(declaration))
}else if(this.matchContextualKeyword("async")){
declaration=this.matchAsyncFunction()?this.parseFunctionDeclaration(!0):this.parseAssignmentExpression()
;exportDeclaration=this.finalize(node,new Node.ExportDefaultDeclaration(declaration))
}else{
this.matchContextualKeyword("from")&&this.throwError(messages_1.Messages.UnexpectedToken,this.lookahead.value)
;declaration=this.match("{")?this.parseObjectInitializer():this.match("[")?this.parseArrayInitializer():this.parseAssignmentExpression()
;this.consumeSemicolon(),
exportDeclaration=this.finalize(node,new Node.ExportDefaultDeclaration(declaration))
}else if(this.match("*")){
if(this.nextToken(),!this.matchContextualKeyword("from")){
var message=this.lookahead.value?messages_1.Messages.UnexpectedToken:messages_1.Messages.MissingFromClause
;this.throwError(message,this.lookahead.value)}
this.nextToken()
;var src=this.parseModuleSpecifier()
;this.consumeSemicolon(),exportDeclaration=this.finalize(node,new Node.ExportAllDeclaration(src))
}else if(4===this.lookahead.type){
declaration=void 0;switch(this.lookahead.value){
case"let":case"const":
declaration=this.parseLexicalDeclaration({inFor:!1
});break;case"var":case"class":case"function":
declaration=this.parseStatementListItem();break
;default:this.throwUnexpectedToken(this.lookahead)
}
exportDeclaration=this.finalize(node,new Node.ExportNamedDeclaration(declaration,[],null))
}else if(this.matchAsyncFunction()){
declaration=this.parseFunctionDeclaration()
;exportDeclaration=this.finalize(node,new Node.ExportNamedDeclaration(declaration,[],null))
}else{
var specifiers=[],source=null,isExportFromIdentifier=!1
;for(this.expect("{");!this.match("}");)isExportFromIdentifier=isExportFromIdentifier||this.matchKeyword("default"),
specifiers.push(this.parseExportSpecifier()),
this.match("}")||this.expect(",")
;if(this.expect("}"),this.matchContextualKeyword("from"))this.nextToken(),
source=this.parseModuleSpecifier(),
this.consumeSemicolon();else if(isExportFromIdentifier){
message=this.lookahead.value?messages_1.Messages.UnexpectedToken:messages_1.Messages.MissingFromClause
;this.throwError(message,this.lookahead.value)
}else this.consumeSemicolon()
;exportDeclaration=this.finalize(node,new Node.ExportNamedDeclaration(null,specifiers,source))
}return exportDeclaration},Parser}()
;exports.Parser=Parser},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0
}),exports.assert=function(condition,message){
if(!condition)throw new Error("ASSERT: "+message)}
},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0});var ErrorHandler=function(){
function ErrorHandler(){
this.errors=[],this.tolerant=!1}
return ErrorHandler.prototype.recordError=function(error){
this.errors.push(error)
},ErrorHandler.prototype.tolerate=function(error){
if(!this.tolerant)throw error
;this.recordError(error)
},ErrorHandler.prototype.constructError=function(msg,column){
var error=new Error(msg);try{throw error
}catch(base){
Object.create&&Object.defineProperty&&(error=Object.create(base),Object.defineProperty(error,"column",{
value:column}))}return error
},ErrorHandler.prototype.createError=function(index,line,col,description){
var msg="Line "+line+": "+description,error=this.constructError(msg,col)
;return error.index=index,
error.lineNumber=line,error.description=description,error
},ErrorHandler.prototype.throwError=function(index,line,col,description){
throw this.createError(index,line,col,description)
},ErrorHandler.prototype.tolerateError=function(index,line,col,description){
var error=this.createError(index,line,col,description)
;if(!this.tolerant)throw error
;this.recordError(error)},ErrorHandler}()
;exports.ErrorHandler=ErrorHandler
},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0}),exports.Messages={
BadGetterArity:"Getter must not have any formal parameters",
BadSetterArity:"Setter must have exactly one formal parameter",
BadSetterRestParameter:"Setter function argument must not be a rest parameter",
ConstructorIsAsync:"Class constructor may not be an async method",
ConstructorSpecialMethod:"Class constructor may not be an accessor",
DeclarationMissingInitializer:"Missing initializer in %0 declaration",
DefaultRestParameter:"Unexpected token =",
DuplicateBinding:"Duplicate binding %0",
DuplicateConstructor:"A class may only have one constructor",
DuplicateProtoProperty:"Duplicate __proto__ fields are not allowed in object literals",
ForInOfLoopInitializer:"%0 loop variable declaration may not have an initializer",
GeneratorInLegacyContext:"Generator declarations are not allowed in legacy contexts",
IllegalBreak:"Illegal break statement",
IllegalContinue:"Illegal continue statement",
IllegalExportDeclaration:"Unexpected token",
IllegalImportDeclaration:"Unexpected token",
IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list",
IllegalReturn:"Illegal return statement",
InvalidEscapedReservedWord:"Keyword must not contain escaped characters",
InvalidHexEscapeSequence:"Invalid hexadecimal escape sequence",
InvalidLHSInAssignment:"Invalid left-hand side in assignment",
InvalidLHSInForIn:"Invalid left-hand side in for-in",
InvalidLHSInForLoop:"Invalid left-hand side in for-loop",
InvalidModuleSpecifier:"Unexpected token",
InvalidRegExp:"Invalid regular expression",
LetInLexicalBinding:"let is disallowed as a lexically bound name",
MissingFromClause:"Unexpected token",
MultipleDefaultsInSwitch:"More than one default clause in switch statement",
NewlineAfterThrow:"Illegal newline after throw",
NoAsAfterImportNamespace:"Unexpected token",
NoCatchOrFinally:"Missing catch or finally after try",
ParameterAfterRestParameter:"Rest parameter must be last formal parameter",
Redeclaration:"%0 '%1' has already been declared",
StaticPrototype:"Classes may not have static property named prototype",
StrictCatchVariable:"Catch variable may not be eval or arguments in strict mode",
StrictDelete:"Delete of an unqualified identifier in strict mode.",
StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block",
StrictFunctionName:"Function name may not be eval or arguments in strict mode",
StrictLHSAssignment:"Assignment to eval or arguments is not allowed in strict mode",
StrictLHSPostfix:"Postfix increment/decrement may not have eval or arguments operand in strict mode",
StrictLHSPrefix:"Prefix increment/decrement may not have eval or arguments operand in strict mode",
StrictModeWith:"Strict mode code may not include a with statement",
StrictOctalLiteral:"Octal literals are not allowed in strict mode.",
StrictParamDupe:"Strict mode function may not have duplicate parameter names",
StrictParamName:"Parameter name eval or arguments is not allowed in strict mode",
StrictReservedWord:"Use of future reserved word in strict mode",
StrictVarName:"Variable name may not be eval or arguments in strict mode",
TemplateOctalLiteral:"Octal literals are not allowed in template strings.",
UnexpectedEOS:"Unexpected end of input",
UnexpectedIdentifier:"Unexpected identifier",
UnexpectedNumber:"Unexpected number",
UnexpectedReserved:"Unexpected reserved word",
UnexpectedString:"Unexpected string",
UnexpectedTemplate:"Unexpected quasi %0",
UnexpectedToken:"Unexpected token %0",
UnexpectedTokenIllegal:"Unexpected token ILLEGAL",
UnknownLabel:"Undefined label '%0'",
UnterminatedRegExp:"Invalid regular expression: missing /"
}},function(module,exports,__webpack_require__){
Object.defineProperty(exports,"__esModule",{
value:!0})
;var assert_1=__webpack_require__(9),character_1=__webpack_require__(4),messages_1=__webpack_require__(11)
;function hexValue(ch){
return"0123456789abcdef".indexOf(ch.toLowerCase())
}function octalValue(ch){
return"01234567".indexOf(ch)}
var Scanner=function(){
function Scanner(code,handler){
this.source=code,this.errorHandler=handler,this.trackComment=!1,
this.isModule=!1,
this.length=code.length,this.index=0,this.lineNumber=code.length>0?1:0,
this.lineStart=0,this.curlyStack=[]}
return Scanner.prototype.saveState=function(){
return{index:this.index,
lineNumber:this.lineNumber,
lineStart:this.lineStart}
},Scanner.prototype.restoreState=function(state){
this.index=state.index,this.lineNumber=state.lineNumber,
this.lineStart=state.lineStart
},Scanner.prototype.eof=function(){
return this.index>=this.length
},Scanner.prototype.throwUnexpectedToken=function(message){
return void 0===message&&(message=messages_1.Messages.UnexpectedTokenIllegal),
this.errorHandler.throwError(this.index,this.lineNumber,this.index-this.lineStart+1,message)
},
Scanner.prototype.tolerateUnexpectedToken=function(message){
void 0===message&&(message=messages_1.Messages.UnexpectedTokenIllegal),
this.errorHandler.tolerateError(this.index,this.lineNumber,this.index-this.lineStart+1,message)
},
Scanner.prototype.skipSingleLineComment=function(offset){
var start,loc,comments=[]
;for(this.trackComment&&(comments=[],start=this.index-offset,
loc={start:{line:this.lineNumber,
column:this.index-this.lineStart-offset},end:{}
});!this.eof();){
var ch=this.source.charCodeAt(this.index)
;if(++this.index,character_1.Character.isLineTerminator(ch)){
if(this.trackComment){loc.end={
line:this.lineNumber,
column:this.index-this.lineStart-1};var entry={
multiLine:!1,slice:[start+offset,this.index-1],
range:[start,this.index-1],loc:loc}
;comments.push(entry)}
return 13===ch&&10===this.source.charCodeAt(this.index)&&++this.index,
++this.lineNumber,
this.lineStart=this.index,comments}}
if(this.trackComment){loc.end={
line:this.lineNumber,
column:this.index-this.lineStart};entry={
multiLine:!1,slice:[start+offset,this.index],
range:[start,this.index],loc:loc}
;comments.push(entry)}return comments
},Scanner.prototype.skipMultiLineComment=function(){
var start,loc,comments=[]
;for(this.trackComment&&(comments=[],start=this.index-2,
loc={start:{line:this.lineNumber,
column:this.index-this.lineStart-2},end:{}
});!this.eof();){
var ch=this.source.charCodeAt(this.index)
;if(character_1.Character.isLineTerminator(ch))13===ch&&10===this.source.charCodeAt(this.index+1)&&++this.index,
++this.lineNumber,
++this.index,this.lineStart=this.index;else if(42===ch){
if(47===this.source.charCodeAt(this.index+1)){
if(this.index+=2,this.trackComment){loc.end={
line:this.lineNumber,
column:this.index-this.lineStart};var entry={
multiLine:!0,slice:[start+2,this.index-2],
range:[start,this.index],loc:loc}
;comments.push(entry)}return comments}++this.index
}else++this.index}if(this.trackComment){loc.end={
line:this.lineNumber,
column:this.index-this.lineStart};entry={
multiLine:!0,slice:[start+2,this.index],
range:[start,this.index],loc:loc}
;comments.push(entry)}
return this.tolerateUnexpectedToken(),comments
},Scanner.prototype.scanComments=function(){
var comments;this.trackComment&&(comments=[])
;for(var start=0===this.index;!this.eof();){
var ch=this.source.charCodeAt(this.index)
;if(character_1.Character.isWhiteSpace(ch))++this.index;else if(character_1.Character.isLineTerminator(ch))++this.index,
13===ch&&10===this.source.charCodeAt(this.index)&&++this.index,
++this.lineNumber,
this.lineStart=this.index,start=!0;else if(47===ch)if(47===(ch=this.source.charCodeAt(this.index+1))){
this.index+=2
;var comment=this.skipSingleLineComment(2)
;this.trackComment&&(comments=comments.concat(comment)),
start=!0}else{if(42!==ch)break;this.index+=2
;comment=this.skipMultiLineComment()
;this.trackComment&&(comments=comments.concat(comment))
}else if(start&&45===ch){
if(45!==this.source.charCodeAt(this.index+1)||62!==this.source.charCodeAt(this.index+2))break
;this.index+=3
;comment=this.skipSingleLineComment(3)
;this.trackComment&&(comments=comments.concat(comment))
}else{if(60!==ch||this.isModule)break
;if("!--"!==this.source.slice(this.index+1,this.index+4))break
;this.index+=4
;comment=this.skipSingleLineComment(4)
;this.trackComment&&(comments=comments.concat(comment))
}}return comments
},Scanner.prototype.isFutureReservedWord=function(id){
switch(id){case"enum":case"export":case"import":
case"super":return!0;default:return!1}
},Scanner.prototype.isStrictModeReservedWord=function(id){
switch(id){case"implements":case"interface":
case"package":case"private":case"protected":
case"public":case"static":case"yield":case"let":
return!0;default:return!1}
},Scanner.prototype.isRestrictedWord=function(id){
return"eval"===id||"arguments"===id
},Scanner.prototype.isKeyword=function(id){
switch(id.length){case 2:
return"if"===id||"in"===id||"do"===id;case 3:
return"var"===id||"for"===id||"new"===id||"try"===id||"let"===id
;case 4:
return"this"===id||"else"===id||"case"===id||"void"===id||"with"===id||"enum"===id
;case 5:
return"while"===id||"break"===id||"catch"===id||"throw"===id||"const"===id||"yield"===id||"class"===id||"super"===id
;case 6:
return"return"===id||"typeof"===id||"delete"===id||"switch"===id||"export"===id||"import"===id
;case 7:
return"default"===id||"finally"===id||"extends"===id
;case 8:
return"function"===id||"continue"===id||"debugger"===id
;case 10:return"instanceof"===id;default:return!1}
},Scanner.prototype.codePointAt=function(i){
var cp=this.source.charCodeAt(i)
;if(cp>=55296&&cp<=56319){
var second=this.source.charCodeAt(i+1)
;if(second>=56320&&second<=57343)cp=1024*(cp-55296)+second-56320+65536
}return cp
},Scanner.prototype.scanHexEscape=function(prefix){
for(var len="u"===prefix?4:2,code=0,i=0;i<len;++i){
if(this.eof()||!character_1.Character.isHexDigit(this.source.charCodeAt(this.index)))return null
;code=16*code+hexValue(this.source[this.index++])}
return String.fromCharCode(code)
},Scanner.prototype.scanUnicodeCodePointEscape=function(){
var ch=this.source[this.index],code=0
;for("}"===ch&&this.throwUnexpectedToken();!this.eof()&&(ch=this.source[this.index++],
character_1.Character.isHexDigit(ch.charCodeAt(0)));)code=16*code+hexValue(ch)
;return(code>1114111||"}"!==ch)&&this.throwUnexpectedToken(),
character_1.Character.fromCodePoint(code)
},Scanner.prototype.getIdentifier=function(){
for(var start=this.index++;!this.eof();){
var ch=this.source.charCodeAt(this.index)
;if(92===ch)return this.index=start,this.getComplexIdentifier()
;if(ch>=55296&&ch<57343)return this.index=start,
this.getComplexIdentifier()
;if(!character_1.Character.isIdentifierPart(ch))break
;++this.index}
return this.source.slice(start,this.index)
},Scanner.prototype.getComplexIdentifier=function(){
var ch,cp=this.codePointAt(this.index),id=character_1.Character.fromCodePoint(cp)
;for(this.index+=id.length,
92===cp&&(117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),
++this.index,
"{"===this.source[this.index]?(++this.index,ch=this.scanUnicodeCodePointEscape()):null!==(ch=this.scanHexEscape("u"))&&"\\"!==ch&&character_1.Character.isIdentifierStart(ch.charCodeAt(0))||this.throwUnexpectedToken(),
id=ch);!this.eof()&&(cp=this.codePointAt(this.index),
character_1.Character.isIdentifierPart(cp));)id+=ch=character_1.Character.fromCodePoint(cp),
this.index+=ch.length,
92===cp&&(id=id.substr(0,id.length-1),117!==this.source.charCodeAt(this.index)&&this.throwUnexpectedToken(),
++this.index,
"{"===this.source[this.index]?(++this.index,ch=this.scanUnicodeCodePointEscape()):null!==(ch=this.scanHexEscape("u"))&&"\\"!==ch&&character_1.Character.isIdentifierPart(ch.charCodeAt(0))||this.throwUnexpectedToken(),
id+=ch);return id
},Scanner.prototype.octalToDecimal=function(ch){
var octal="0"!==ch,code=octalValue(ch)
;return!this.eof()&&character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(octal=!0,
code=8*code+octalValue(this.source[this.index++]),
"0123".indexOf(ch)>=0&&!this.eof()&&character_1.Character.isOctalDigit(this.source.charCodeAt(this.index))&&(code=8*code+octalValue(this.source[this.index++]))),
{code:code,octal:octal}
},Scanner.prototype.scanIdentifier=function(){
var type,start=this.index,id=92===this.source.charCodeAt(start)?this.getComplexIdentifier():this.getIdentifier()
;if(3!==(type=1===id.length?3:this.isKeyword(id)?4:"null"===id?5:"true"===id||"false"===id?1:3)&&start+id.length!==this.index){
var restore=this.index
;this.index=start,this.tolerateUnexpectedToken(messages_1.Messages.InvalidEscapedReservedWord),
this.index=restore}return{type:type,value:id,
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.scanPunctuator=function(){
var start=this.index,str=this.source[this.index]
;switch(str){case"(":case"{":
"{"===str&&this.curlyStack.push("{"),++this.index
;break;case".":
++this.index,"."===this.source[this.index]&&"."===this.source[this.index+1]&&(this.index+=2,
str="...");break;case"}":
++this.index,this.curlyStack.pop();break;case")":
case";":case",":case"[":case"]":case":":case"?":
case"~":++this.index;break;default:
">>>="===(str=this.source.substr(this.index,4))?this.index+=4:"==="===(str=str.substr(0,3))||"!=="===str||">>>"===str||"<<="===str||">>="===str||"**="===str?this.index+=3:"&&"===(str=str.substr(0,2))||"||"===str||"=="===str||"!="===str||"+="===str||"-="===str||"*="===str||"/="===str||"++"===str||"--"===str||"<<"===str||">>"===str||"&="===str||"|="===str||"^="===str||"%="===str||"<="===str||">="===str||"=>"===str||"**"===str?this.index+=2:(str=this.source[this.index],
"<>=!+-*%&|^/".indexOf(str)>=0&&++this.index)}
return this.index===start&&this.throwUnexpectedToken(),
{type:7,value:str,lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.scanHexLiteral=function(start){
for(var num="";!this.eof()&&character_1.Character.isHexDigit(this.source.charCodeAt(this.index));)num+=this.source[this.index++]
;return 0===num.length&&this.throwUnexpectedToken(),
character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),
{type:6,value:parseInt("0x"+num,16),
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.scanBinaryLiteral=function(start){
for(var ch,num="";!this.eof()&&("0"===(ch=this.source[this.index])||"1"===ch);)num+=this.source[this.index++]
;return 0===num.length&&this.throwUnexpectedToken(),
this.eof()||(ch=this.source.charCodeAt(this.index),
(character_1.Character.isIdentifierStart(ch)||character_1.Character.isDecimalDigit(ch))&&this.throwUnexpectedToken()),
{type:6,value:parseInt(num,2),
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.scanOctalLiteral=function(prefix,start){
var num="",octal=!1
;for(character_1.Character.isOctalDigit(prefix.charCodeAt(0))?(octal=!0,
num="0"+this.source[this.index++]):++this.index;!this.eof()&&character_1.Character.isOctalDigit(this.source.charCodeAt(this.index));)num+=this.source[this.index++]
;return octal||0!==num.length||this.throwUnexpectedToken(),
(character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))||character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index)))&&this.throwUnexpectedToken(),
{type:6,value:parseInt(num,8),octal:octal,
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.isImplicitOctalLiteral=function(){
for(var i=this.index+1;i<this.length;++i){
var ch=this.source[i]
;if("8"===ch||"9"===ch)return!1
;if(!character_1.Character.isOctalDigit(ch.charCodeAt(0)))return!0
}return!0
},Scanner.prototype.scanNumericLiteral=function(){
var start=this.index,ch=this.source[start]
;assert_1.assert(character_1.Character.isDecimalDigit(ch.charCodeAt(0))||"."===ch,"Numeric literal must start with a decimal digit or a decimal point")
;var num="";if("."!==ch){
if(num=this.source[this.index++],ch=this.source[this.index],
"0"===num){
if("x"===ch||"X"===ch)return++this.index,this.scanHexLiteral(start)
;if("b"===ch||"B"===ch)return++this.index,
this.scanBinaryLiteral(start)
;if("o"===ch||"O"===ch)return this.scanOctalLiteral(ch,start)
;if(ch&&character_1.Character.isOctalDigit(ch.charCodeAt(0))&&this.isImplicitOctalLiteral())return this.scanOctalLiteral(ch,start)
}
for(;character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index));)num+=this.source[this.index++]
;ch=this.source[this.index]}if("."===ch){
for(num+=this.source[this.index++];character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index));)num+=this.source[this.index++]
;ch=this.source[this.index]}
if("e"===ch||"E"===ch)if(num+=this.source[this.index++],
"+"!==(ch=this.source[this.index])&&"-"!==ch||(num+=this.source[this.index++]),
character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index)))for(;character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index));)num+=this.source[this.index++];else this.throwUnexpectedToken()
;return character_1.Character.isIdentifierStart(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(),
{type:6,value:parseFloat(num),
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.scanStringLiteral=function(){
var start=this.index,quote=this.source[start]
;assert_1.assert("'"===quote||'"'===quote,"String literal must starts with a quote"),
++this.index
;for(var octal=!1,str="";!this.eof();){
var ch=this.source[this.index++];if(ch===quote){
quote="";break}
if("\\"===ch)if((ch=this.source[this.index++])&&character_1.Character.isLineTerminator(ch.charCodeAt(0)))++this.lineNumber,
"\r"===ch&&"\n"===this.source[this.index]&&++this.index,
this.lineStart=this.index;else switch(ch){case"u":
if("{"===this.source[this.index])++this.index,
str+=this.scanUnicodeCodePointEscape();else{
var unescaped_1=this.scanHexEscape(ch)
;null===unescaped_1&&this.throwUnexpectedToken(),
str+=unescaped_1}break;case"x":
var unescaped=this.scanHexEscape(ch)
;null===unescaped&&this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence),
str+=unescaped;break;case"n":str+="\n";break
;case"r":str+="\r";break;case"t":str+="\t";break
;case"b":str+="\b";break;case"f":str+="\f";break
;case"v":str+="\v";break;case"8":case"9":
str+=ch,this.tolerateUnexpectedToken();break
;default:
if(ch&&character_1.Character.isOctalDigit(ch.charCodeAt(0))){
var octToDec=this.octalToDecimal(ch)
;octal=octToDec.octal||octal,str+=String.fromCharCode(octToDec.code)
}else str+=ch}else{
if(character_1.Character.isLineTerminator(ch.charCodeAt(0)))break
;str+=ch}}
return""!==quote&&(this.index=start,this.throwUnexpectedToken()),{
type:8,value:str,octal:octal,
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.scanTemplate=function(){
var cooked="",terminated=!1,start=this.index,head="`"===this.source[start],tail=!1,rawOffset=2
;for(++this.index;!this.eof();){
var ch=this.source[this.index++];if("`"===ch){
rawOffset=1,tail=!0,terminated=!0;break}
if("$"===ch){if("{"===this.source[this.index]){
this.curlyStack.push("${"),++this.index,
terminated=!0;break}cooked+=ch
}else if("\\"===ch)if(ch=this.source[this.index++],
character_1.Character.isLineTerminator(ch.charCodeAt(0)))++this.lineNumber,
"\r"===ch&&"\n"===this.source[this.index]&&++this.index,
this.lineStart=this.index;else switch(ch){case"n":
cooked+="\n";break;case"r":cooked+="\r";break
;case"t":cooked+="\t";break;case"u":
if("{"===this.source[this.index])++this.index,
cooked+=this.scanUnicodeCodePointEscape();else{
var restore=this.index,unescaped_2=this.scanHexEscape(ch)
;null!==unescaped_2?cooked+=unescaped_2:(this.index=restore,
cooked+=ch)}break;case"x":
var unescaped=this.scanHexEscape(ch)
;null===unescaped&&this.throwUnexpectedToken(messages_1.Messages.InvalidHexEscapeSequence),
cooked+=unescaped;break;case"b":cooked+="\b";break
;case"f":cooked+="\f";break;case"v":cooked+="\v"
;break;default:
"0"===ch?(character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index))&&this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral),
cooked+="\0"):character_1.Character.isOctalDigit(ch.charCodeAt(0))?this.throwUnexpectedToken(messages_1.Messages.TemplateOctalLiteral):cooked+=ch
}else character_1.Character.isLineTerminator(ch.charCodeAt(0))?(++this.lineNumber,
"\r"===ch&&"\n"===this.source[this.index]&&++this.index,
this.lineStart=this.index,cooked+="\n"):cooked+=ch
}
return terminated||this.throwUnexpectedToken(),head||this.curlyStack.pop(),{
type:10,
value:this.source.slice(start+1,this.index-rawOffset),
cooked:cooked,head:head,tail:tail,
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}
},Scanner.prototype.testRegExp=function(pattern,flags){
var tmp=pattern,self=this
;flags.indexOf("u")>=0&&(tmp=tmp.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,function($0,$1,$2){
var codePoint=parseInt($1||$2,16)
;return codePoint>1114111&&self.throwUnexpectedToken(messages_1.Messages.InvalidRegExp),
codePoint<=65535?String.fromCharCode(codePoint):"￿"
}).replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,"￿"))
;try{return new RegExp(pattern,flags)
}catch(exception){return null}
},Scanner.prototype.scanRegExpBody=function(){
var ch=this.source[this.index]
;assert_1.assert("/"===ch,"Regular expression literal must start with a slash")
;for(var str=this.source[this.index++],classMarker=!1,terminated=!1;!this.eof();)if(str+=ch=this.source[this.index++],
"\\"===ch)ch=this.source[this.index++],
character_1.Character.isLineTerminator(ch.charCodeAt(0))&&this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp),
str+=ch;else if(character_1.Character.isLineTerminator(ch.charCodeAt(0)))this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp);else if(classMarker)"]"===ch&&(classMarker=!1);else{
if("/"===ch){terminated=!0;break}
"["===ch&&(classMarker=!0)}
return terminated||this.throwUnexpectedToken(messages_1.Messages.UnterminatedRegExp),
str.substr(1,str.length-2)
},Scanner.prototype.scanRegExpFlags=function(){
for(var flags="";!this.eof();){
var ch=this.source[this.index]
;if(!character_1.Character.isIdentifierPart(ch.charCodeAt(0)))break
;if(++this.index,
"\\"!==ch||this.eof())flags+=ch,ch;else if("u"===(ch=this.source[this.index])){
++this.index
;var restore=this.index,char=this.scanHexEscape("u")
;if(null!==char)for(flags+=char,
"\\u";restore<this.index;++restore)this.source[restore];else this.index=restore,
flags+="u","\\u";this.tolerateUnexpectedToken()
}else"\\",this.tolerateUnexpectedToken()}
return flags
},Scanner.prototype.scanRegExp=function(){
var start=this.index,pattern=this.scanRegExpBody(),flags=this.scanRegExpFlags()
;return{type:9,value:"",pattern:pattern,
flags:flags,regex:this.testRegExp(pattern,flags),
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:start,
end:this.index}},Scanner.prototype.lex=function(){
if(this.eof())return{type:2,value:"",
lineNumber:this.lineNumber,
lineStart:this.lineStart,start:this.index,
end:this.index}
;var cp=this.source.charCodeAt(this.index)
;return character_1.Character.isIdentifierStart(cp)?this.scanIdentifier():40===cp||41===cp||59===cp?this.scanPunctuator():39===cp||34===cp?this.scanStringLiteral():46===cp?character_1.Character.isDecimalDigit(this.source.charCodeAt(this.index+1))?this.scanNumericLiteral():this.scanPunctuator():character_1.Character.isDecimalDigit(cp)?this.scanNumericLiteral():96===cp||125===cp&&"${"===this.curlyStack[this.curlyStack.length-1]?this.scanTemplate():cp>=55296&&cp<57343&&character_1.Character.isIdentifierStart(this.codePointAt(this.index))?this.scanIdentifier():this.scanPunctuator()
},Scanner}();exports.Scanner=Scanner
},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0
}),exports.TokenName={},exports.TokenName[1]="Boolean",exports.TokenName[2]="<end>",
exports.TokenName[3]="Identifier",
exports.TokenName[4]="Keyword",exports.TokenName[5]="Null",
exports.TokenName[6]="Numeric",
exports.TokenName[7]="Punctuator",exports.TokenName[8]="String",
exports.TokenName[9]="RegularExpression",
exports.TokenName[10]="Template"
},function(module,exports){
Object.defineProperty(exports,"__esModule",{
value:!0}),exports.XHTMLEntities={quot:'"',
amp:"&",apos:"'",gt:">",nbsp:" ",iexcl:"¡",
cent:"¢",pound:"£",curren:"¤",yen:"¥",brvbar:"¦",
sect:"§",uml:"¨",copy:"©",ordf:"ª",laquo:"«",
not:"¬",shy:"­",reg:"®",macr:"¯",deg:"°",
plusmn:"±",sup2:"²",sup3:"³",acute:"´",micro:"µ",
para:"¶",middot:"·",cedil:"¸",sup1:"¹",ordm:"º",
raquo:"»",frac14:"¼",frac12:"½",frac34:"¾",
iquest:"¿",Agrave:"À",Aacute:"Á",Acirc:"Â",
Atilde:"Ã",Auml:"Ä",Aring:"Å",AElig:"Æ",
Ccedil:"Ç",Egrave:"È",Eacute:"É",Ecirc:"Ê",
Euml:"Ë",Igrave:"Ì",Iacute:"Í",Icirc:"Î",Iuml:"Ï",
ETH:"Ð",Ntilde:"Ñ",Ograve:"Ò",Oacute:"Ó",
Ocirc:"Ô",Otilde:"Õ",Ouml:"Ö",times:"×",
Oslash:"Ø",Ugrave:"Ù",Uacute:"Ú",Ucirc:"Û",
Uuml:"Ü",Yacute:"Ý",THORN:"Þ",szlig:"ß",
agrave:"à",aacute:"á",acirc:"â",atilde:"ã",
auml:"ä",aring:"å",aelig:"æ",ccedil:"ç",
egrave:"è",eacute:"é",ecirc:"ê",euml:"ë",
igrave:"ì",iacute:"í",icirc:"î",iuml:"ï",eth:"ð",
ntilde:"ñ",ograve:"ò",oacute:"ó",ocirc:"ô",
otilde:"õ",ouml:"ö",divide:"÷",oslash:"ø",
ugrave:"ù",uacute:"ú",ucirc:"û",uuml:"ü",
yacute:"ý",thorn:"þ",yuml:"ÿ",OElig:"Œ",oelig:"œ",
Scaron:"Š",scaron:"š",Yuml:"Ÿ",fnof:"ƒ",circ:"ˆ",
tilde:"˜",Alpha:"Α",Beta:"Β",Gamma:"Γ",Delta:"Δ",
Epsilon:"Ε",Zeta:"Ζ",Eta:"Η",Theta:"Θ",Iota:"Ι",
Kappa:"Κ",Lambda:"Λ",Mu:"Μ",Nu:"Ν",Xi:"Ξ",
Omicron:"Ο",Pi:"Π",Rho:"Ρ",Sigma:"Σ",Tau:"Τ",
Upsilon:"Υ",Phi:"Φ",Chi:"Χ",Psi:"Ψ",Omega:"Ω",
alpha:"α",beta:"β",gamma:"γ",delta:"δ",
epsilon:"ε",zeta:"ζ",eta:"η",theta:"θ",iota:"ι",
kappa:"κ",lambda:"λ",mu:"μ",nu:"ν",xi:"ξ",
omicron:"ο",pi:"π",rho:"ρ",sigmaf:"ς",sigma:"σ",
tau:"τ",upsilon:"υ",phi:"φ",chi:"χ",psi:"ψ",
omega:"ω",thetasym:"ϑ",upsih:"ϒ",piv:"ϖ",ensp:" ",
emsp:" ",thinsp:" ",zwnj:"‌",zwj:"‍",lrm:"‎",
rlm:"‏",ndash:"–",mdash:"—",lsquo:"‘",rsquo:"’",
sbquo:"‚",ldquo:"“",rdquo:"”",bdquo:"„",
dagger:"†",Dagger:"‡",bull:"•",hellip:"…",
permil:"‰",prime:"′",Prime:"″",lsaquo:"‹",
rsaquo:"›",oline:"‾",frasl:"⁄",euro:"€",image:"ℑ",
weierp:"℘",real:"ℜ",trade:"™",alefsym:"ℵ",
larr:"←",uarr:"↑",rarr:"→",darr:"↓",harr:"↔",
crarr:"↵",lArr:"⇐",uArr:"⇑",rArr:"⇒",dArr:"⇓",
hArr:"⇔",forall:"∀",part:"∂",exist:"∃",empty:"∅",
nabla:"∇",isin:"∈",notin:"∉",ni:"∋",prod:"∏",
sum:"∑",minus:"−",lowast:"∗",radic:"√",prop:"∝",
infin:"∞",ang:"∠",and:"∧",or:"∨",cap:"∩",cup:"∪",
int:"∫",there4:"∴",sim:"∼",cong:"≅",asymp:"≈",
ne:"≠",equiv:"≡",le:"≤",ge:"≥",sub:"⊂",sup:"⊃",
nsub:"⊄",sube:"⊆",supe:"⊇",oplus:"⊕",otimes:"⊗",
perp:"⊥",sdot:"⋅",lceil:"⌈",rceil:"⌉",lfloor:"⌊",
rfloor:"⌋",loz:"◊",spades:"♠",clubs:"♣",
hearts:"♥",diams:"♦",lang:"⟨",rang:"⟩"}
},function(module,exports,__webpack_require__){
Object.defineProperty(exports,"__esModule",{
value:!0})
;var error_handler_1=__webpack_require__(10),scanner_1=__webpack_require__(12),token_1=__webpack_require__(13),Reader=function(){
function Reader(){
this.values=[],this.curly=this.paren=-1}
return Reader.prototype.beforeFunctionExpression=function(t){
return["(","{","[","in","typeof","instanceof","new","return","case","delete","throw","void","=","+=","-=","*=","**=","/=","%=","<<=",">>=",">>>=","&=","|=","^=",",","+","-","*","**","/","%","++","--","<<",">>",">>>","&","|","^","!","~","&&","||","?",":","===","==",">=","<=","<",">","!=","!=="].indexOf(t)>=0
},Reader.prototype.isRegexStart=function(){
var previous=this.values[this.values.length-1],regex=null!==previous
;switch(previous){case"this":case"]":regex=!1
;break;case")":
var keyword=this.values[this.paren-1]
;regex="if"===keyword||"while"===keyword||"for"===keyword||"with"===keyword
;break;case"}":
if(regex=!1,"function"===this.values[this.curly-3])regex=!!(check=this.values[this.curly-4])&&!this.beforeFunctionExpression(check);else if("function"===this.values[this.curly-4]){
var check
;regex=!(check=this.values[this.curly-5])||!this.beforeFunctionExpression(check)
}}return regex
},Reader.prototype.push=function(token){
7===token.type||4===token.type?("{"===token.value?this.curly=this.values.length:"("===token.value&&(this.paren=this.values.length),
this.values.push(token.value)):this.values.push(null)
},Reader}(),Tokenizer=function(){
function Tokenizer(code,config){
this.errorHandler=new error_handler_1.ErrorHandler,
this.errorHandler.tolerant=!!config&&("boolean"==typeof config.tolerant&&config.tolerant),
this.scanner=new scanner_1.Scanner(code,this.errorHandler),
this.scanner.trackComment=!!config&&("boolean"==typeof config.comment&&config.comment),
this.trackRange=!!config&&("boolean"==typeof config.range&&config.range),
this.trackLoc=!!config&&("boolean"==typeof config.loc&&config.loc),
this.buffer=[],this.reader=new Reader}
return Tokenizer.prototype.errors=function(){
return this.errorHandler.errors
},Tokenizer.prototype.getNextToken=function(){
if(0===this.buffer.length){
var comments=this.scanner.scanComments()
;if(this.scanner.trackComment)for(var i=0;i<comments.length;++i){
var e=comments[i],value=this.scanner.source.slice(e.slice[0],e.slice[1]),comment={
type:e.multiLine?"BlockComment":"LineComment",
value:value}
;this.trackRange&&(comment.range=e.range),this.trackLoc&&(comment.loc=e.loc),
this.buffer.push(comment)}if(!this.scanner.eof()){
var loc=void 0;this.trackLoc&&(loc={start:{
line:this.scanner.lineNumber,
column:this.scanner.index-this.scanner.lineStart},
end:{}})
;var token="/"===this.scanner.source[this.scanner.index]&&this.reader.isRegexStart()?this.scanner.scanRegExp():this.scanner.lex()
;this.reader.push(token);var entry={
type:token_1.TokenName[token.type],
value:this.scanner.source.slice(token.start,token.end)
}
;if(this.trackRange&&(entry.range=[token.start,token.end]),this.trackLoc&&(loc.end={
line:this.scanner.lineNumber,
column:this.scanner.index-this.scanner.lineStart
},entry.loc=loc),9===token.type){
var pattern=token.pattern,flags=token.flags
;entry.regex={pattern:pattern,flags:flags}}
this.buffer.push(entry)}}
return this.buffer.shift()},Tokenizer}()
;exports.Tokenizer=Tokenizer}])
},module.exports=factory()
})),WebWorkerRunner=function WebWorkerRunner(){
classCallCheck(this,WebWorkerRunner)
;var blob=new Blob(['"use strict"; ('.concat(function(){
onmessage=function(_ref){var data,code
;return Promise.resolve().then(function(){
return data=_ref.data,code=data.code,delete data.code,
Promise.resolve().then(function(){
return self.eval(code)}).then(function(_resp){
data.result=_resp,postMessage(JSON.stringify(data))
}).catch(function(ex){
data.error=ex.stack||ex.toString(),data.errorType=ex.constructor?ex.constructor.name:"unknown",
postMessage(JSON.stringify(data))})
}).then(function(){})}}.toString(),")();")],{
type:"application/javascript"
}),worker=new Worker(URL.createObjectURL(blob))
;var nextMessageId=0,requests={}
;function emitResult(_ref4){
var messageId=_ref4.messageId,error=_ref4.error,errorType=_ref4.errorType,result=_ref4.result,request=requests[messageId]
;if(request)if(delete requests[messageId],
error)if("SyntaxError"===errorType)try{
request.reject(new Error("".concat(error.stack||error,"\r\n\r\n")+"Parse code report:\r\n".concat(esprima$1.parseScript(request.code))))
}catch(ex){request.reject(ex)
}else request.reject(error);else request.resolve(result)
}this.run=function(codeOrFunc){
if(!codeOrFunc)throw new Error("Argument func is empty")
;var messageId=nextMessageId++,request=(promise=new Promise(function(resolve,reject){
promiseResolve=resolve,promiseReject=reject
}),promise.resolve=promiseResolve,promise.reject=promiseReject,
promise);var promiseResolve,promiseReject,promise
;requests[messageId]=request
;var code="function"==typeof codeOrFunc?"(".concat(codeOrFunc.toString(),")();"):"".concat(codeOrFunc)
;return request.code=code,worker.postMessage({
messageId:messageId,code:code}),request
},worker.onmessage=function(e){
emitResult(JSON.parse(e.data))
},worker.onerror=function(e){
for(var messageId in requests)Object.prototype.hasOwnProperty.call(requests,messageId)&&emitResult({
messageId:messageId,error:e})}};var methods={
createEditor:function(CodeMirror){var _this=this
;this.editor&&this.editor.toTextArea()
;var _this$get=this.get(),mode=_this$get.mode,code=_this$get.code,readonly=_this$get.readonly
;this.editor=CodeMirror.fromTextArea(this.refs.editor,{
lineNumbers:!0,lineWrapping:!0,indentWithTabs:!0,
value:code,mode:{json:{name:"javascript",json:!0},
handlebars:{name:"handlebars",base:"text/html"}
}[mode]||{name:mode},readOnly:readonly
}),this.editor.on("change",function(instance){
_this.updating||(_this.updating=!0,_this.set({
code:instance.getValue()}),_this.updating=!1)})},
resize:function(){this.editor.refresh()},
observe:function(key,callback,opts){
var fn=callback.bind(this)
;return opts&&!1===opts.init||fn(this.get()[key]),this.on(opts&&opts.defer?"update":"state",function(_a){
var changed=_a.changed,current=_a.current,previous=_a.previous
;changed[key]&&fn(current[key],previous&&previous[key])
})}};var file="src\\components\\CodeMirror.svelte"
;function create_catch_block(component,ctx){
var p,text;return{c:function(){
p=createElement("p"),text=createText("error loading CodeMirror"),
this.h()},l:function(nodes){
p=claimElement(nodes,"P",{class:!0},!1)
;var p_nodes=children(p)
;text=claimText(p_nodes,"error loading CodeMirror"),p_nodes.forEach(detachNode),
this.h()},h:function(){
p.className="error svelte-asatn3",addLoc(p,file,27,1,678)
},m:function(target,anchor){
insert(target,p,anchor),append(p,text)},p:noop,
d:function(detach){detach&&detachNode(p)}}}
function create_then_block(component,ctx){
var div,textarea,text
;function select_block_type(ctx){
return ctx.error?create_if_block:ctx.warningCount>0?create_if_block_3:void 0
}
var current_block_type=select_block_type(ctx),if_block=current_block_type&&current_block_type(component,ctx)
;return{c:function(){
div=createElement("div"),textarea=createElement("textarea"),
text=createText("\n\n\t\t"),
if_block&&if_block.c(),this.h()},
l:function(nodes){div=claimElement(nodes,"DIV",{
class:!0},!1);var div_nodes=children(div)
;textarea=claimElement(div_nodes,"TEXTAREA",{
class:!0
},!1),children(textarea).forEach(detachNode),text=claimText(div_nodes,"\n\n\t\t"),
if_block&&if_block.l(div_nodes),
div_nodes.forEach(detachNode),this.h()},
h:function(){
textarea.className="svelte-asatn3",addLoc(textarea,file,4,2,117),div.className="codemirror-container svelte-asatn3",
addLoc(div,file,3,1,80)},
m:function(target,anchor){
insert(target,div,anchor),append(div,textarea),component.refs.editor=textarea,
append(div,text),if_block&&if_block.m(div,null)},
p:function(changed,ctx){
current_block_type===(current_block_type=select_block_type(ctx))&&if_block?if_block.p(changed,ctx):(if_block&&if_block.d(1),
(if_block=current_block_type&&current_block_type(component,ctx))&&if_block.c(),
if_block&&if_block.m(div,null))},
d:function(detach){
detach&&detachNode(div),component.refs.editor===textarea&&(component.refs.editor=null),
if_block&&if_block.d()}}}
function create_if_block_3(component,ctx){
var p,text0,text1,text2,text3,text4,text3_value=1===ctx.warningCount?"warning":"warnings"
;return{c:function(){
p=createElement("p"),text0=createText("Compiled, but with "),
text1=createText(ctx.warningCount),
text2=createText(" "),text3=createText(text3_value),
text4=createText(" — check the console for details"),
this.h()},l:function(nodes){
p=claimElement(nodes,"P",{class:!0},!1)
;var p_nodes=children(p)
;text0=claimText(p_nodes,"Compiled, but with "),text1=claimText(p_nodes,ctx.warningCount),
text2=claimText(p_nodes," "),
text3=claimText(p_nodes,text3_value),text4=claimText(p_nodes," — check the console for details"),
p_nodes.forEach(detachNode),this.h()},
h:function(){
p.className="warning message svelte-asatn3",addLoc(p,file,21,3,496)
},m:function(target,anchor){
insert(target,p,anchor),append(p,text0),append(p,text1),
append(p,text2),append(p,text3),append(p,text4)},
p:function(changed,ctx){
changed.warningCount&&setData(text1,ctx.warningCount),changed.warningCount&&text3_value!==(text3_value=1===ctx.warningCount?"warning":"warnings")&&setData(text3,text3_value)
},d:function(detach){detach&&detachNode(p)}}}
function create_if_block(component,ctx){
var p,text0,text1,text1_value=ctx.error.message,if_block=ctx.error.loc&&create_if_block_1(component,ctx)
;return{c:function(){
p=createElement("p"),if_block&&if_block.c(),text0=createText("\n\n\t\t\t\t"),
text1=createText(text1_value),this.h()},
l:function(nodes){p=claimElement(nodes,"P",{
class:!0},!1);var p_nodes=children(p)
;if_block&&if_block.l(p_nodes),text0=claimText(p_nodes,"\n\n\t\t\t\t"),
text1=claimText(p_nodes,text1_value),
p_nodes.forEach(detachNode),this.h()},
h:function(){
p.className="error message svelte-asatn3",addLoc(p,file,7,3,168)
},m:function(target,anchor){
insert(target,p,anchor),if_block&&if_block.m(p,null),
append(p,text0),append(p,text1)},
p:function(changed,ctx){
ctx.error.loc?if_block?if_block.p(changed,ctx):((if_block=create_if_block_1(component,ctx)).c(),
if_block.m(p,text0)):if_block&&(if_block.d(1),
if_block=null),changed.error&&text1_value!==(text1_value=ctx.error.message)&&setData(text1,text1_value)
},d:function(detach){
detach&&detachNode(p),if_block&&if_block.d()}}}
function create_if_block_1(component,ctx){
var strong,text0,text1,text2,text3,text4,text1_value=ctx.error.loc.line,text3_value=ctx.error.loc.column,if_block=ctx.error.filename&&create_if_block_2(component,ctx)
;return{c:function(){
strong=createElement("strong"),if_block&&if_block.c(),text0=createText("\n\n\t\t\t\t\t\t("),
text1=createText(text1_value),
text2=createText(":"),text3=createText(text3_value),
text4=createText(")"),this.h()},l:function(nodes){
strong=claimElement(nodes,"STRONG",{},!1)
;var strong_nodes=children(strong)
;if_block&&if_block.l(strong_nodes),text0=claimText(strong_nodes,"\n\n\t\t\t\t\t\t("),
text1=claimText(strong_nodes,text1_value),
text2=claimText(strong_nodes,":"),text3=claimText(strong_nodes,text3_value),
text4=claimText(strong_nodes,")"),
strong_nodes.forEach(detachNode),this.h()},
h:function(){addLoc(strong,file,9,5,219)},
m:function(target,anchor){
insert(target,strong,anchor),if_block&&if_block.m(strong,null),
append(strong,text0),
append(strong,text1),append(strong,text2),append(strong,text3),
append(strong,text4)},p:function(changed,ctx){
ctx.error.filename?if_block?if_block.p(changed,ctx):((if_block=create_if_block_2(component,ctx)).c(),
if_block.m(strong,text0)):if_block&&(if_block.d(1),
if_block=null),changed.error&&text1_value!==(text1_value=ctx.error.loc.line)&&setData(text1,text1_value),
changed.error&&text3_value!==(text3_value=ctx.error.loc.column)&&setData(text3,text3_value)
},d:function(detach){
detach&&detachNode(strong),if_block&&if_block.d()}
}}function create_if_block_2(component,ctx){
var span,text,text_value=ctx.error.filename
;function click_handler(event){
component.fire("navigate",ctx.error.filename)}
return{c:function(){
span=createElement("span"),text=createText(text_value),this.h()
},l:function(nodes){
span=claimElement(nodes,"SPAN",{class:!0},!1)
;var span_nodes=children(span)
;text=claimText(span_nodes,text_value),span_nodes.forEach(detachNode),
this.h()},h:function(){
addListener(span,"click",click_handler),span.className="filename",
addLoc(span,file,11,7,262)},
m:function(target,anchor){
insert(target,span,anchor),append(span,text)},
p:function(changed,_ctx){
ctx=_ctx,changed.error&&text_value!==(text_value=ctx.error.filename)&&setData(text,text_value)
},d:function(detach){
detach&&detachNode(span),removeListener(span,"click",click_handler)
}}}function create_pending_block(component,ctx){
var p,text;return{c:function(){
p=createElement("p"),text=createText("loading editor..."),
this.h()},l:function(nodes){
p=claimElement(nodes,"P",{class:!0},!1)
;var p_nodes=children(p)
;text=claimText(p_nodes,"loading editor..."),p_nodes.forEach(detachNode),
this.h()},h:function(){
p.className="loading svelte-asatn3",addLoc(p,file,1,1,28)
},m:function(target,anchor){
insert(target,p,anchor),append(p,text)},p:noop,
d:function(detach){detach&&detachNode(p)}}}
function CodeMirror(options){
var component,ctx,await_block_anchor,promise,info,_this3=this
;if(this._debugName="<CodeMirror>",
!options||!options.target&&!options.root)throw new Error("'target' is a required option")
;if(init(this,options),
this.refs={},this._state=assign({
codemirrorPromise:codemirrorPromise||(codemirrorPromise=import("./chunk.13989c80.js").then(function(m){
return m.default}))
},options.data),"codemirrorPromise"in this._state||console.warn("<CodeMirror> was created without expected data property 'codemirrorPromise'"),
"error"in this._state||console.warn("<CodeMirror> was created without expected data property 'error'"),
"warningCount"in this._state||console.warn("<CodeMirror> was created without expected data property 'warningCount'"),
this._intro=!0,
this._fragment=(component=this,ctx=this._state,info={
component:component,ctx:ctx,current:null,
pending:create_pending_block,
then:create_then_block,catch:create_catch_block,
value:"_",error:"err"
},handlePromise(promise=ctx.codemirrorPromise,info),{
c:function(){
await_block_anchor=createComment(),info.block.c()
},l:function(nodes){
await_block_anchor=createComment(),info.block.l(nodes)
},m:function(target,anchor){
insert(target,await_block_anchor,anchor),info.block.m(target,info.anchor=anchor),
info.mount=function(){
return await_block_anchor.parentNode
},info.anchor=await_block_anchor},
p:function(changed,_ctx){
ctx=_ctx,info.ctx=ctx,"codemirrorPromise"in changed&&promise!==(promise=ctx.codemirrorPromise)&&handlePromise(promise,info)||info.block.p(changed,assign(assign({},ctx),info.resolved))
},d:function(detach){
detach&&detachNode(await_block_anchor),info.block.d(detach),
info=null}}),this.root._oncreate.push(function(){
(function(){var _this2=this
;codemirrorPromise.then(function(CodeMirror){
var marker
;CodeMirror.defaults.smartIndent=!1,CodeMirror.keyMap.default["Shift-Tab"]="indentLess",
CodeMirror.keyMap.default.Tab="indentMore",
_this2.updating=!1,_this2.observe("mode",function(){
_this2.createEditor(CodeMirror)
}),_this2.observe("code",function(code){
_this2.updating||null==code||(_this2.updating=!0,
_this2.editor.setValue(code),_this2.updating=!1)
}),_this2.observe("errorLoc",function(loc){
if(marker&&marker.clear(),null==loc)_this2.set({
errorLine:null});else{
var line=loc.line-1,ch=loc.column
;marker=_this2.editor.markText({line:line,ch:ch},{
line:line,ch:ch+1},{className:"error-loc"
}),_this2.set({errorLine:line})}
}),_this2.observe("errorLine",function(line,previousLine){
null!=previousLine&&_this2.editor.removeLineClass(previousLine,"wrap","error-line"),
null!=line&&_this2.editor.addLineClass(line,"wrap","error-line")
}),_this2.on("destroy",function(){
_this2.editor.toTextArea()
}),_this2.editor.refresh()})
}).call(_this3),_this3.fire("update",{
changed:assignTrue({},_this3._state),
current:_this3._state})}),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor),flush(this)
}}
assign(CodeMirror.prototype,protoDev),assign(CodeMirror.prototype,methods),CodeMirror.prototype._checkReadOnly=function(newState){}
;var converter=function(){
if("undefined"==typeof window)return{
cssToJs:function(o){return o},jsToCss:function(o){
return o}}
;var postcss=window.postcss,webWorkerRunner=new WebWorkerRunner,postcssPlugins={
nested:postcss.plugins.nested(),
nano:postcss.plugins.nano({preset:["default",{
discardComments:{removeAll:!0}}]}),
beautify:postcss.plugins.beautify({cascade:!1,
indentChar:"\t",indentSize:1,trimLeadingZero:!1,
zeroLengthNoUnit:!0})};return{
cssToJs:function(css){try{
var js=postcss().process(css,{
stringifier:postcss.syntaxes.js.stringify}).css
;return js=lib.stringify(JSON.parse(js),{
space:"\t",quote:"`"
}).replace(/`([\0-_a-\uFFFF]*)`([\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*:)/g,function(){
for(var _len=arguments.length,match=new Array(_len),_key=0;_key<_len;_key++)match[_key]=arguments[_key]
;return"'".concat(match[1].replace(/'/g,"\\'"),"'").concat(match[2])
}),";(".concat(js,")")}catch(ex){
return ex.toString()}},jsToCss:function(_x,_x2){
return _jsToCss.apply(this,arguments)}}
;function _jsToCss(){
return(_jsToCss=_asyncToGenerator(_regeneratorRuntime.mark(function _callee(js,plugins){
var jsObject,result
;return _regeneratorRuntime.wrap(function(_context){
for(;;)switch(_context.prev=_context.next){case 0:
return _context.prev=0,_context.next=3,
webWorkerRunner.run(js);case 3:
return jsObject=_context.sent,_context.next=6,postcss(Object.keys(plugins).filter(function(o){
return plugins[o]}).map(function(o){
return postcssPlugins[o]}).filter(function(o){
return o})).process(js,{
parser:postcss.syntaxes.js.parse,
requireFromString:function(){return jsObject}})
;case 6:
return result=_context.sent,_context.abrupt("return",result.css)
;case 10:
return _context.prev=10,_context.t0=_context.catch(0),_context.abrupt("return","js = ".concat(jsObject,"\r\n\r\n============================\r\nPostcss Error:\r\n").concat(_context.t0.toString()))
;case 13:case"end":return _context.stop()}
},_callee,null,[[0,10]])}))).apply(this,arguments)
}}();function onstate(_x3){
return _onstate.apply(this,arguments)}
function _onstate(){
return(_onstate=_asyncToGenerator(_regeneratorRuntime.mark(function _callee2(_ref){
var changed
;return _regeneratorRuntime.wrap(function(_context2){
for(;;)switch(_context2.prev=_context2.next){
case 0:
if(changed=_ref.changed,_ref.current,_ref.previous,this.converting){
_context2.next=21;break}if(null!=this.converting){
_context2.next=5;break}
return this.converting=!1,_context2.abrupt("return")
;case 5:
if(_context2.prev=5,this.converting=!0,!changed.js&&!changed.plugins){
_context2.next=16;break}
return _context2.t0=this,_context2.next=11,converter.jsToCss(this.get().js,this.get().plugins)
;case 11:
_context2.t1=_context2.sent,_context2.t2={
css:_context2.t1
},_context2.t0.set.call(_context2.t0,_context2.t2),_context2.next=17
;break;case 16:changed.css&&this.set({
js:converter.cssToJs(this.get().css)});case 17:
"undefined"!=typeof window&&localStorage.setItem("JsCssConverter",JSON.stringify(this.get()))
;case 18:
return _context2.prev=18,this.converting=!1,_context2.finish(18)
;case 21:case"end":return _context2.stop()}
},_callee2,this,[[5,,18,21]])
}))).apply(this,arguments)}
var file$1="src\\components\\JsCssConverter.svelte"
;function JsCssConverter(options){
var data,_this=this
;if(this._debugName="<JsCssConverter>",!options||!options.target&&!options.root)throw new Error("'target' is a required option")
;if(init(this,options),
this._state=assign(("undefined"!=typeof window&&(data=JSON.parse(localStorage.getItem("JsCssConverter"))),
data||(data={
js:"[\n    '@at-rule-wiwhout-params',\n    '@at-rule with params',\n    '@at-rule (with params)',\n    '// comment',\n    {\n        '.selector1': {\n            color: '#0f0',\n        },\n        '.selector2': {\n            color: '#0f0',\n        },\n    },\n    '// another comment',\n    {\n        '@at-rule (with params)': {\n            'and-content': 'value',\n        },\n        '.selector3': {\n            color: '#0f0',\n            '.sub-selector': {\n                content: '\"quotes is required for this CSS property\"',\n            },\n        },\n    },\n]",
css:'\n@at-rule-wiwhout-params;\n@at-rule with params;\n@at-rule (with params);\n/* comment */\n.selector1 {\n\tcolor: #0f0\n}\n.selector2 {\n\tcolor: #0f0\n}\n/* another comment */\n@at-rule (with params) {\n\tand-content: value\n}\n.selector3 {\n\tcolor: #0f0;\n\t.sub-selector {\ncontent: "quotes is required for this CSS property"\n\t}\n}\n'
}),data.plugins||(data.plugins={nested:!1,nano:!0,
beautify:!0
}),data),options.data),"plugins"in this._state||console.warn("<JsCssConverter> was created without expected data property 'plugins'"),
"js"in this._state||console.warn("<JsCssConverter> was created without expected data property 'js'"),
"css"in this._state||console.warn("<JsCssConverter> was created without expected data property 'css'"),
this._intro=!0,
this._handlers.state=[onstate],onstate.call(this,{
changed:assignTrue({},this._state),
current:this._state
}),this._fragment=function(component,ctx){
var table,thead,tr0,th0,text0,text1,th1,span0,text2,text3,span1,label0,input0,text4,text5,span2,label1,input1,text6,text7,span3,label2,input2,text8,text9,tbody,tr1,td0,text10,td1,codemirror0_updating={},codemirror1_updating={}
;function input0_change_handler(){
ctx.plugins.nested=input0.checked,component.set({
plugins:ctx.plugins})}
function input1_change_handler(){
ctx.plugins.nano=input1.checked,component.set({
plugins:ctx.plugins})}
function input2_change_handler(){
ctx.plugins.beautify=input2.checked,component.set({
plugins:ctx.plugins})}
var codemirror0_initial_data={}
;void 0!==ctx.js&&(codemirror0_initial_data.code=ctx.js,
codemirror0_updating.code=!0)
;var codemirror0=new CodeMirror({
root:component.root,store:component.store,
data:codemirror0_initial_data,
_bind:function(changed,childState){var newState={}
;!codemirror0_updating.code&&changed.code&&(newState.js=childState.code),
component._set(newState),codemirror0_updating={}}
});component.root._beforecreate.push(function(){
codemirror0._bind({code:1},codemirror0.get())})
;var codemirror1_initial_data={}
;void 0!==ctx.css&&(codemirror1_initial_data.code=ctx.css,
codemirror1_updating.code=!0)
;var codemirror1=new CodeMirror({
root:component.root,store:component.store,
data:codemirror1_initial_data,
_bind:function(changed,childState){var newState={}
;!codemirror1_updating.code&&changed.code&&(newState.css=childState.code),
component._set(newState),codemirror1_updating={}}
})
;return component.root._beforecreate.push(function(){
codemirror1._bind({code:1},codemirror1.get())}),{
c:function(){
table=createElement("table"),thead=createElement("thead"),tr0=createElement("tr"),
th0=createElement("th"),
text0=createText("JS"),text1=createText("\n\t\t"),th1=createElement("th"),
span0=createElement("span"),
text2=createText("CSS   "),text3=createText("\n\t\t\t"),
span1=createElement("span"),
label0=createElement("label"),input0=createElement("input"),
text4=createText("un nested"),
text5=createText("\n\t\t\t"),span2=createElement("span"),
label1=createElement("label"),
input1=createElement("input"),text6=createText("optimized"),
text7=createText("\n\t\t\t"),
span3=createElement("span"),label2=createElement("label"),
input2=createElement("input"),
text8=createText("beautify"),text9=createText("\n\t"),
tbody=createElement("tbody"),
tr1=createElement("tr"),td0=createElement("td"),codemirror0._fragment.c(),
text10=createText("\n\t\t"),
td1=createElement("td"),codemirror1._fragment.c(),this.h()
},l:function(nodes){
table=claimElement(nodes,"TABLE",{class:!0},!1)
;var table_nodes=children(table)
;thead=claimElement(table_nodes,"THEAD",{},!1)
;var thead_nodes=children(thead)
;tr0=claimElement(thead_nodes,"TR",{class:!0},!1)
;var tr0_nodes=children(tr0)
;th0=claimElement(tr0_nodes,"TH",{},!1)
;var th0_nodes=children(th0)
;text0=claimText(th0_nodes,"JS"),th0_nodes.forEach(detachNode),
text1=claimText(tr0_nodes,"\n\t\t"),
th1=claimElement(tr0_nodes,"TH",{},!1)
;var th1_nodes=children(th1)
;span0=claimElement(th1_nodes,"SPAN",{},!1)
;var span0_nodes=children(span0)
;text2=claimText(span0_nodes,"CSS   "),span0_nodes.forEach(detachNode),
text3=claimText(th1_nodes,"\n\t\t\t"),
span1=claimElement(th1_nodes,"SPAN",{},!1)
;var span1_nodes=children(span1)
;label0=claimElement(span1_nodes,"LABEL",{},!1)
;var label0_nodes=children(label0)
;input0=claimElement(label0_nodes,"INPUT",{type:!0
},!1),children(input0).forEach(detachNode),
text4=claimText(label0_nodes,"un nested"),
label0_nodes.forEach(detachNode),span1_nodes.forEach(detachNode),
text5=claimText(th1_nodes,"\n\t\t\t"),
span2=claimElement(th1_nodes,"SPAN",{},!1)
;var span2_nodes=children(span2)
;label1=claimElement(span2_nodes,"LABEL",{},!1)
;var label1_nodes=children(label1)
;input1=claimElement(label1_nodes,"INPUT",{type:!0
},!1),children(input1).forEach(detachNode),
text6=claimText(label1_nodes,"optimized"),
label1_nodes.forEach(detachNode),span2_nodes.forEach(detachNode),
text7=claimText(th1_nodes,"\n\t\t\t"),
span3=claimElement(th1_nodes,"SPAN",{},!1)
;var span3_nodes=children(span3)
;label2=claimElement(span3_nodes,"LABEL",{},!1)
;var label2_nodes=children(label2)
;input2=claimElement(label2_nodes,"INPUT",{type:!0
},!1),children(input2).forEach(detachNode),
text8=claimText(label2_nodes,"beautify"),
label2_nodes.forEach(detachNode),span3_nodes.forEach(detachNode),
th1_nodes.forEach(detachNode),
tr0_nodes.forEach(detachNode),thead_nodes.forEach(detachNode),
text9=claimText(table_nodes,"\n\t"),
tbody=claimElement(table_nodes,"TBODY",{},!1)
;var tbody_nodes=children(tbody)
;tr1=claimElement(tbody_nodes,"TR",{class:!0},!1)
;var tr1_nodes=children(tr1)
;td0=claimElement(tr1_nodes,"TD",{class:!0},!1)
;var td0_nodes=children(td0)
;codemirror0._fragment.l(td0_nodes),td0_nodes.forEach(detachNode),
text10=claimText(tr1_nodes,"\n\t\t"),
td1=claimElement(tr1_nodes,"TD",{class:!0},!1)
;var td1_nodes=children(td1)
;codemirror1._fragment.l(td1_nodes),td1_nodes.forEach(detachNode),
tr1_nodes.forEach(detachNode),
tbody_nodes.forEach(detachNode),table_nodes.forEach(detachNode),
this.h()},h:function(){
addLoc(th0,file$1,3,2,40),addLoc(span0,file$1,5,3,62),addListener(input0,"change",input0_change_handler),
setAttribute(input0,"type","checkbox"),
addLoc(input0,file$1,6,16,113),addLoc(label0,file$1,6,9,106),
addLoc(span1,file$1,6,3,100),
addListener(input1,"change",input1_change_handler),
setAttribute(input1,"type","checkbox"),
addLoc(input1,file$1,7,16,207),addLoc(label1,file$1,7,9,200),
addLoc(span2,file$1,7,3,194),
addListener(input2,"change",input2_change_handler),
setAttribute(input2,"type","checkbox"),
addLoc(input2,file$1,8,16,299),addLoc(label2,file$1,8,9,292),
addLoc(span3,file$1,8,3,286),
addLoc(th1,file$1,4,2,54),tr0.className="svelte-a4z50c",
addLoc(tr0,file$1,2,1,33),
addLoc(thead,file$1,1,1,24),td0.className="js svelte-a4z50c",
addLoc(td0,file$1,14,2,420),
td1.className="css svelte-a4z50c",addLoc(td1,file$1,17,2,478),
tr1.className="svelte-a4z50c",
addLoc(tr1,file$1,13,1,413),addLoc(tbody,file$1,12,1,404),
table.className="editor svelte-a4z50c",
addLoc(table,file$1,0,0,0)},
m:function(target,anchor){
insert(target,table,anchor),append(table,thead),append(thead,tr0),
append(tr0,th0),
append(th0,text0),append(tr0,text1),append(tr0,th1),append(th1,span0),
append(span0,text2),
append(th1,text3),append(th1,span1),append(span1,label0),append(label0,input0),
input0.checked=ctx.plugins.nested,
append(label0,text4),append(th1,text5),append(th1,span2),
append(span2,label1),append(label1,input1),
input1.checked=ctx.plugins.nano,append(label1,text6),
append(th1,text7),append(th1,span3),
append(span3,label2),append(label2,input2),input2.checked=ctx.plugins.beautify,
append(label2,text8),
append(table,text9),append(table,tbody),append(tbody,tr1),append(tr1,td0),
codemirror0._mount(td0,null),
append(tr1,text10),append(tr1,td1),codemirror1._mount(td1,null)
},p:function(changed,_ctx){
ctx=_ctx,changed.plugins&&(input0.checked=ctx.plugins.nested),
changed.plugins&&(input1.checked=ctx.plugins.nano),
changed.plugins&&(input2.checked=ctx.plugins.beautify)
;var codemirror0_changes={}
;!codemirror0_updating.code&&changed.js&&(codemirror0_changes.code=ctx.js,
codemirror0_updating.code=void 0!==ctx.js),
codemirror0._set(codemirror0_changes),
codemirror0_updating={};var codemirror1_changes={}
;!codemirror1_updating.code&&changed.css&&(codemirror1_changes.code=ctx.css,
codemirror1_updating.code=void 0!==ctx.css),
codemirror1._set(codemirror1_changes),
codemirror1_updating={}},d:function(detach){
detach&&detachNode(table),removeListener(input0,"change",input0_change_handler),
removeListener(input1,"change",input1_change_handler),
removeListener(input2,"change",input2_change_handler),
codemirror0.destroy(),codemirror1.destroy()}}
}(this,this._state),this.root._oncreate.push(function(){
(function(){}).call(_this),_this.fire("update",{
changed:assignTrue({},_this._state),
current:_this._state})}),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor),flush(this)
}}function Index(options){
if(this._debugName="<Index>",!options||!options.target&&!options.root)throw new Error("'target' is a required option")
;var component,text,jscssconverter
;if(init(this,options),this._state=assign({},options.data),
this._intro=!0,this._fragment=(component=this,
this._state,jscssconverter=new JsCssConverter({
root:component.root,store:component.store}),{
c:function(){
text=createText("\n\n"),jscssconverter._fragment.c(),this.h()
},l:function(nodes){
text=claimText(nodes,"\n\n"),jscssconverter._fragment.l(nodes),
this.h()},h:function(){
document.title="Postcss-Js-Syntax to CSS converter"
},m:function(target,anchor){
insert(target,text,anchor),jscssconverter._mount(target,anchor)
},p:noop,d:function(detach){
detach&&detachNode(text),jscssconverter.destroy(detach)
}}),options.target){
var nodes=children(options.target)
;options.hydrate?this._fragment.l(nodes):this._fragment.c(),
nodes.forEach(detachNode),
this._mount(options.target,options.anchor),flush(this)
}}
assign(JsCssConverter.prototype,protoDev),JsCssConverter.prototype._checkReadOnly=function(newState){},
assign(Index.prototype,protoDev),
Index.prototype._checkReadOnly=function(newState){}
;export default Index;
//# sourceMappingURL=chunk.578c1fec.js.map
