import { a as _typeof } from './chunk.9598750f.js';
import { a as assign, b as protoDev, c as init, o as createComment, k as insert, q as handlePromise, i as detachNode, r as assignTrue, g as children, n as flush, d as createElement, e as createText, f as claimElement, h as claimText, j as addLoc, l as append, s as noop, p as setData, t as addListener, u as removeListener, v as setAttribute } from './chunk.4242be0c.js';
import { a as _asyncToGenerator, b as _regeneratorRuntime } from './chunk.c21c98c2.js';

// This is a generated file. Do not edit.
var Space_Separator = /[\u1680\u2000-\u200A\u202F\u205F\u3000]/;
var ID_Start = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/;
var ID_Continue = /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/;
var unicode = {
  Space_Separator: Space_Separator,
  ID_Start: ID_Start,
  ID_Continue: ID_Continue
};

var util = {
  isSpaceSeparator: function isSpaceSeparator(c) {
    return unicode.Space_Separator.test(c);
  },
  isIdStartChar: function isIdStartChar(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c === '$' || c === '_' || unicode.ID_Start.test(c);
  },
  isIdContinueChar: function isIdContinueChar(c) {
    return c >= 'a' && c <= 'z' || c >= 'A' && c <= 'Z' || c >= '0' && c <= '9' || c === '$' || c === '_' || c === "\u200C" || c === "\u200D" || unicode.ID_Continue.test(c);
  },
  isDigit: function isDigit(c) {
    return /[0-9]/.test(c);
  },
  isHexDigit: function isHexDigit(c) {
    return /[0-9A-Fa-f]/.test(c);
  }
};

var source;
var parseState;
var stack;
var pos;
var line;
var column;
var token;
var key;
var root;

var parse = function parse(text, reviver) {
  source = String(text);
  parseState = 'start';
  stack = [];
  pos = 0;
  line = 1;
  column = 0;
  token = undefined;
  key = undefined;
  root = undefined;

  do {
    token = lex(); // This code is unreachable.
    // if (!parseStates[parseState]) {
    //     throw invalidParseState()
    // }

    parseStates[parseState]();
  } while (token.type !== 'eof');

  if (typeof reviver === 'function') {
    return internalize({
      '': root
    }, '', reviver);
  }

  return root;
};

function internalize(holder, name, reviver) {
  var value = holder[name];

  if (value != null && _typeof(value) === 'object') {
    for (var _key in value) {
      var replacement = internalize(value, _key, reviver);

      if (replacement === undefined) {
        delete value[_key];
      } else {
        value[_key] = replacement;
      }
    }
  }

  return reviver.call(holder, name, value);
}

var lexState;
var buffer;
var doubleQuote;

var _sign;

var c;

function lex() {
  lexState = 'default';
  buffer = '';
  doubleQuote = false;
  _sign = 1;

  for (;;) {
    c = peek(); // This code is unreachable.
    // if (!lexStates[lexState]) {
    //     throw invalidLexState(lexState)
    // }

    var _token = lexStates[lexState]();

    if (_token) {
      return _token;
    }
  }
}

function peek() {
  if (source[pos]) {
    return String.fromCodePoint(source.codePointAt(pos));
  }
}

function read() {
  var c = peek();

  if (c === '\n') {
    line++;
    column = 0;
  } else if (c) {
    column += c.length;
  } else {
    column++;
  }

  if (c) {
    pos += c.length;
  }

  return c;
}

var lexStates = {
  default: function _default() {
    switch (c) {
      case '\t':
      case '\v':
      case '\f':
      case ' ':
      case "\xA0":
      case "\uFEFF":
      case '\n':
      case '\r':
      case "\u2028":
      case "\u2029":
        read();
        return;

      case '/':
        read();
        lexState = 'comment';
        return;

      case undefined:
        read();
        return newToken('eof');
    }

    if (util.isSpaceSeparator(c)) {
      read();
      return;
    } // This code is unreachable.
    // if (!lexStates[parseState]) {
    //     throw invalidLexState(parseState)
    // }


    return lexStates[parseState]();
  },
  comment: function comment() {
    switch (c) {
      case '*':
        read();
        lexState = 'multiLineComment';
        return;

      case '/':
        read();
        lexState = 'singleLineComment';
        return;
    }

    throw invalidChar(read());
  },
  multiLineComment: function multiLineComment() {
    switch (c) {
      case '*':
        read();
        lexState = 'multiLineCommentAsterisk';
        return;

      case undefined:
        throw invalidChar(read());
    }

    read();
  },
  multiLineCommentAsterisk: function multiLineCommentAsterisk() {
    switch (c) {
      case '*':
        read();
        return;

      case '/':
        read();
        lexState = 'default';
        return;

      case undefined:
        throw invalidChar(read());
    }

    read();
    lexState = 'multiLineComment';
  },
  singleLineComment: function singleLineComment() {
    switch (c) {
      case '\n':
      case '\r':
      case "\u2028":
      case "\u2029":
        read();
        lexState = 'default';
        return;

      case undefined:
        read();
        return newToken('eof');
    }

    read();
  },
  value: function value() {
    switch (c) {
      case '{':
      case '[':
        return newToken('punctuator', read());

      case 'n':
        read();
        literal('ull');
        return newToken('null', null);

      case 't':
        read();
        literal('rue');
        return newToken('boolean', true);

      case 'f':
        read();
        literal('alse');
        return newToken('boolean', false);

      case '-':
      case '+':
        if (read() === '-') {
          _sign = -1;
        }

        lexState = 'sign';
        return;

      case '.':
        buffer = read();
        lexState = 'decimalPointLeading';
        return;

      case '0':
        buffer = read();
        lexState = 'zero';
        return;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        buffer = read();
        lexState = 'decimalInteger';
        return;

      case 'I':
        read();
        literal('nfinity');
        return newToken('numeric', Infinity);

      case 'N':
        read();
        literal('aN');
        return newToken('numeric', NaN);

      case '"':
      case "'":
        doubleQuote = read() === '"';
        buffer = '';
        lexState = 'string';
        return;
    }

    throw invalidChar(read());
  },
  identifierNameStartEscape: function identifierNameStartEscape() {
    if (c !== 'u') {
      throw invalidChar(read());
    }

    read();
    var u = unicodeEscape();

    switch (u) {
      case '$':
      case '_':
        break;

      default:
        if (!util.isIdStartChar(u)) {
          throw invalidIdentifier();
        }

        break;
    }

    buffer += u;
    lexState = 'identifierName';
  },
  identifierName: function identifierName() {
    switch (c) {
      case '$':
      case '_':
      case "\u200C":
      case "\u200D":
        buffer += read();
        return;

      case '\\':
        read();
        lexState = 'identifierNameEscape';
        return;
    }

    if (util.isIdContinueChar(c)) {
      buffer += read();
      return;
    }

    return newToken('identifier', buffer);
  },
  identifierNameEscape: function identifierNameEscape() {
    if (c !== 'u') {
      throw invalidChar(read());
    }

    read();
    var u = unicodeEscape();

    switch (u) {
      case '$':
      case '_':
      case "\u200C":
      case "\u200D":
        break;

      default:
        if (!util.isIdContinueChar(u)) {
          throw invalidIdentifier();
        }

        break;
    }

    buffer += u;
    lexState = 'identifierName';
  },
  sign: function sign() {
    switch (c) {
      case '.':
        buffer = read();
        lexState = 'decimalPointLeading';
        return;

      case '0':
        buffer = read();
        lexState = 'zero';
        return;

      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
        buffer = read();
        lexState = 'decimalInteger';
        return;

      case 'I':
        read();
        literal('nfinity');
        return newToken('numeric', _sign * Infinity);

      case 'N':
        read();
        literal('aN');
        return newToken('numeric', NaN);
    }

    throw invalidChar(read());
  },
  zero: function zero() {
    switch (c) {
      case '.':
        buffer += read();
        lexState = 'decimalPoint';
        return;

      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;

      case 'x':
      case 'X':
        buffer += read();
        lexState = 'hexadecimal';
        return;
    }

    return newToken('numeric', _sign * 0);
  },
  decimalInteger: function decimalInteger() {
    switch (c) {
      case '.':
        buffer += read();
        lexState = 'decimalPoint';
        return;

      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;
    }

    if (util.isDigit(c)) {
      buffer += read();
      return;
    }

    return newToken('numeric', _sign * Number(buffer));
  },
  decimalPointLeading: function decimalPointLeading() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalFraction';
      return;
    }

    throw invalidChar(read());
  },
  decimalPoint: function decimalPoint() {
    switch (c) {
      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;
    }

    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalFraction';
      return;
    }

    return newToken('numeric', _sign * Number(buffer));
  },
  decimalFraction: function decimalFraction() {
    switch (c) {
      case 'e':
      case 'E':
        buffer += read();
        lexState = 'decimalExponent';
        return;
    }

    if (util.isDigit(c)) {
      buffer += read();
      return;
    }

    return newToken('numeric', _sign * Number(buffer));
  },
  decimalExponent: function decimalExponent() {
    switch (c) {
      case '+':
      case '-':
        buffer += read();
        lexState = 'decimalExponentSign';
        return;
    }

    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalExponentInteger';
      return;
    }

    throw invalidChar(read());
  },
  decimalExponentSign: function decimalExponentSign() {
    if (util.isDigit(c)) {
      buffer += read();
      lexState = 'decimalExponentInteger';
      return;
    }

    throw invalidChar(read());
  },
  decimalExponentInteger: function decimalExponentInteger() {
    if (util.isDigit(c)) {
      buffer += read();
      return;
    }

    return newToken('numeric', _sign * Number(buffer));
  },
  hexadecimal: function hexadecimal() {
    if (util.isHexDigit(c)) {
      buffer += read();
      lexState = 'hexadecimalInteger';
      return;
    }

    throw invalidChar(read());
  },
  hexadecimalInteger: function hexadecimalInteger() {
    if (util.isHexDigit(c)) {
      buffer += read();
      return;
    }

    return newToken('numeric', _sign * Number(buffer));
  },
  string: function string() {
    switch (c) {
      case '\\':
        read();
        buffer += escape();
        return;

      case '"':
        if (doubleQuote) {
          read();
          return newToken('string', buffer);
        }

        buffer += read();
        return;

      case "'":
        if (!doubleQuote) {
          read();
          return newToken('string', buffer);
        }

        buffer += read();
        return;

      case '\n':
      case '\r':
        throw invalidChar(read());

      case "\u2028":
      case "\u2029":
        separatorChar(c);
        break;

      case undefined:
        throw invalidChar(read());
    }

    buffer += read();
  },
  start: function start() {
    switch (c) {
      case '{':
      case '[':
        return newToken('punctuator', read());
      // This code is unreachable since the default lexState handles eof.
      // case undefined:
      //     return newToken('eof')
    }

    lexState = 'value';
  },
  beforePropertyName: function beforePropertyName() {
    switch (c) {
      case '$':
      case '_':
        buffer = read();
        lexState = 'identifierName';
        return;

      case '\\':
        read();
        lexState = 'identifierNameStartEscape';
        return;

      case '}':
        return newToken('punctuator', read());

      case '"':
      case "'":
        doubleQuote = read() === '"';
        lexState = 'string';
        return;
    }

    if (util.isIdStartChar(c)) {
      buffer += read();
      lexState = 'identifierName';
      return;
    }

    throw invalidChar(read());
  },
  afterPropertyName: function afterPropertyName() {
    if (c === ':') {
      return newToken('punctuator', read());
    }

    throw invalidChar(read());
  },
  beforePropertyValue: function beforePropertyValue() {
    lexState = 'value';
  },
  afterPropertyValue: function afterPropertyValue() {
    switch (c) {
      case ',':
      case '}':
        return newToken('punctuator', read());
    }

    throw invalidChar(read());
  },
  beforeArrayValue: function beforeArrayValue() {
    if (c === ']') {
      return newToken('punctuator', read());
    }

    lexState = 'value';
  },
  afterArrayValue: function afterArrayValue() {
    switch (c) {
      case ',':
      case ']':
        return newToken('punctuator', read());
    }

    throw invalidChar(read());
  },
  end: function end() {
    // This code is unreachable since it's handled by the default lexState.
    // if (c === undefined) {
    //     read()
    //     return newToken('eof')
    // }
    throw invalidChar(read());
  }
};

function newToken(type, value) {
  return {
    type: type,
    value: value,
    line: line,
    column: column
  };
}

function literal(s) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = s[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var _c = _step.value;
      var p = peek();

      if (p !== _c) {
        throw invalidChar(read());
      }

      read();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function escape() {
  var c = peek();

  switch (c) {
    case 'b':
      read();
      return '\b';

    case 'f':
      read();
      return '\f';

    case 'n':
      read();
      return '\n';

    case 'r':
      read();
      return '\r';

    case 't':
      read();
      return '\t';

    case 'v':
      read();
      return '\v';

    case '0':
      read();

      if (util.isDigit(peek())) {
        throw invalidChar(read());
      }

      return '\0';

    case 'x':
      read();
      return hexEscape();

    case 'u':
      read();
      return unicodeEscape();

    case '\n':
    case "\u2028":
    case "\u2029":
      read();
      return '';

    case '\r':
      read();

      if (peek() === '\n') {
        read();
      }

      return '';

    case '1':
    case '2':
    case '3':
    case '4':
    case '5':
    case '6':
    case '7':
    case '8':
    case '9':
      throw invalidChar(read());

    case undefined:
      throw invalidChar(read());
  }

  return read();
}

function hexEscape() {
  var buffer = '';
  var c = peek();

  if (!util.isHexDigit(c)) {
    throw invalidChar(read());
  }

  buffer += read();
  c = peek();

  if (!util.isHexDigit(c)) {
    throw invalidChar(read());
  }

  buffer += read();
  return String.fromCodePoint(parseInt(buffer, 16));
}

function unicodeEscape() {
  var buffer = '';
  var count = 4;

  while (count-- > 0) {
    var _c2 = peek();

    if (!util.isHexDigit(_c2)) {
      throw invalidChar(read());
    }

    buffer += read();
  }

  return String.fromCodePoint(parseInt(buffer, 16));
}

var parseStates = {
  start: function start() {
    if (token.type === 'eof') {
      throw invalidEOF();
    }

    push();
  },
  beforePropertyName: function beforePropertyName() {
    switch (token.type) {
      case 'identifier':
      case 'string':
        key = token.value;
        parseState = 'afterPropertyName';
        return;

      case 'punctuator':
        // This code is unreachable since it's handled by the lexState.
        // if (token.value !== '}') {
        //     throw invalidToken()
        // }
        pop();
        return;

      case 'eof':
        throw invalidEOF();
    } // This code is unreachable since it's handled by the lexState.
    // throw invalidToken()

  },
  afterPropertyName: function afterPropertyName() {
    // This code is unreachable since it's handled by the lexState.
    // if (token.type !== 'punctuator' || token.value !== ':') {
    //     throw invalidToken()
    // }
    if (token.type === 'eof') {
      throw invalidEOF();
    }

    parseState = 'beforePropertyValue';
  },
  beforePropertyValue: function beforePropertyValue() {
    if (token.type === 'eof') {
      throw invalidEOF();
    }

    push();
  },
  beforeArrayValue: function beforeArrayValue() {
    if (token.type === 'eof') {
      throw invalidEOF();
    }

    if (token.type === 'punctuator' && token.value === ']') {
      pop();
      return;
    }

    push();
  },
  afterPropertyValue: function afterPropertyValue() {
    // This code is unreachable since it's handled by the lexState.
    // if (token.type !== 'punctuator') {
    //     throw invalidToken()
    // }
    if (token.type === 'eof') {
      throw invalidEOF();
    }

    switch (token.value) {
      case ',':
        parseState = 'beforePropertyName';
        return;

      case '}':
        pop();
    } // This code is unreachable since it's handled by the lexState.
    // throw invalidToken()

  },
  afterArrayValue: function afterArrayValue() {
    // This code is unreachable since it's handled by the lexState.
    // if (token.type !== 'punctuator') {
    //     throw invalidToken()
    // }
    if (token.type === 'eof') {
      throw invalidEOF();
    }

    switch (token.value) {
      case ',':
        parseState = 'beforeArrayValue';
        return;

      case ']':
        pop();
    } // This code is unreachable since it's handled by the lexState.
    // throw invalidToken()

  },
  end: function end() {// This code is unreachable since it's handled by the lexState.
    // if (token.type !== 'eof') {
    //     throw invalidToken()
    // }
  }
};

function push() {
  var value;

  switch (token.type) {
    case 'punctuator':
      switch (token.value) {
        case '{':
          value = {};
          break;

        case '[':
          value = [];
          break;
      }

      break;

    case 'null':
    case 'boolean':
    case 'numeric':
    case 'string':
      value = token.value;
      break;
    // This code is unreachable.
    // default:
    //     throw invalidToken()
  }

  if (root === undefined) {
    root = value;
  } else {
    var parent = stack[stack.length - 1];

    if (Array.isArray(parent)) {
      parent.push(value);
    } else {
      parent[key] = value;
    }
  }

  if (value !== null && _typeof(value) === 'object') {
    stack.push(value);

    if (Array.isArray(value)) {
      parseState = 'beforeArrayValue';
    } else {
      parseState = 'beforePropertyName';
    }
  } else {
    var current = stack[stack.length - 1];

    if (current == null) {
      parseState = 'end';
    } else if (Array.isArray(current)) {
      parseState = 'afterArrayValue';
    } else {
      parseState = 'afterPropertyValue';
    }
  }
}

function pop() {
  stack.pop();
  var current = stack[stack.length - 1];

  if (current == null) {
    parseState = 'end';
  } else if (Array.isArray(current)) {
    parseState = 'afterArrayValue';
  } else {
    parseState = 'afterPropertyValue';
  }
} // This code is unreachable.
// function invalidParseState () {
//     return new Error(`JSON5: invalid parse state '${parseState}'`)
// }
// This code is unreachable.
// function invalidLexState (state) {
//     return new Error(`JSON5: invalid lex state '${state}'`)
// }


function invalidChar(c) {
  if (c === undefined) {
    return syntaxError("JSON5: invalid end of input at ".concat(line, ":").concat(column));
  }

  return syntaxError("JSON5: invalid character '".concat(formatChar(c), "' at ").concat(line, ":").concat(column));
}

function invalidEOF() {
  return syntaxError("JSON5: invalid end of input at ".concat(line, ":").concat(column));
} // This code is unreachable.
// function invalidToken () {
//     if (token.type === 'eof') {
//         return syntaxError(`JSON5: invalid end of input at ${line}:${column}`)
//     }
//     const c = String.fromCodePoint(token.value.codePointAt(0))
//     return syntaxError(`JSON5: invalid character '${formatChar(c)}' at ${line}:${column}`)
// }


function invalidIdentifier() {
  column -= 5;
  return syntaxError("JSON5: invalid identifier character at ".concat(line, ":").concat(column));
}

function separatorChar(c) {
  console.warn("JSON5: '".concat(formatChar(c), "' in strings is not valid ECMAScript; consider escaping"));
}

function formatChar(c) {
  var replacements = {
    "'": "\\'",
    '"': '\\"',
    '\\': '\\\\',
    '\b': '\\b',
    '\f': '\\f',
    '\n': '\\n',
    '\r': '\\r',
    '\t': '\\t',
    '\v': '\\v',
    '\0': '\\0',
    "\u2028": "\\u2028",
    "\u2029": "\\u2029"
  };

  if (replacements[c]) {
    return replacements[c];
  }

  if (c < ' ') {
    var hexString = c.charCodeAt(0).toString(16);
    return '\\x' + ('00' + hexString).substring(hexString.length);
  }

  return c;
}

function syntaxError(message) {
  var err = new SyntaxError(message);
  err.lineNumber = line;
  err.columnNumber = column;
  return err;
}

var stringify = function stringify(value, replacer, space) {
  var stack = [];
  var indent = '';
  var propertyList;
  var replacerFunc;
  var gap = '';
  var quote;

  if (replacer != null && _typeof(replacer) === 'object' && !Array.isArray(replacer)) {
    space = replacer.space;
    quote = replacer.quote;
    replacer = replacer.replacer;
  }

  if (typeof replacer === 'function') {
    replacerFunc = replacer;
  } else if (Array.isArray(replacer)) {
    propertyList = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = replacer[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var v = _step.value;
        var item = void 0;

        if (typeof v === 'string') {
          item = v;
        } else if (typeof v === 'number' || v instanceof String || v instanceof Number) {
          item = String(v);
        }

        if (item !== undefined && propertyList.indexOf(item) < 0) {
          propertyList.push(item);
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  if (space instanceof Number) {
    space = Number(space);
  } else if (space instanceof String) {
    space = String(space);
  }

  if (typeof space === 'number') {
    if (space > 0) {
      space = Math.min(10, Math.floor(space));
      gap = '          '.substr(0, space);
    }
  } else if (typeof space === 'string') {
    gap = space.substr(0, 10);
  }

  return serializeProperty('', {
    '': value
  });

  function serializeProperty(key, holder) {
    var value = holder[key];

    if (value != null) {
      if (typeof value.toJSON5 === 'function') {
        value = value.toJSON5(key);
      } else if (typeof value.toJSON === 'function') {
        value = value.toJSON(key);
      }
    }

    if (replacerFunc) {
      value = replacerFunc.call(holder, key, value);
    }

    if (value instanceof Number) {
      value = Number(value);
    } else if (value instanceof String) {
      value = String(value);
    } else if (value instanceof Boolean) {
      value = value.valueOf();
    }

    switch (value) {
      case null:
        return 'null';

      case true:
        return 'true';

      case false:
        return 'false';
    }

    if (typeof value === 'string') {
      return quoteString(value, false);
    }

    if (typeof value === 'number') {
      return String(value);
    }

    if (_typeof(value) === 'object') {
      return Array.isArray(value) ? serializeArray(value) : serializeObject(value);
    }

    return undefined;
  }

  function quoteString(value) {
    var quotes = {
      "'": 0.1,
      '"': 0.2
    };
    var replacements = {
      "'": "\\'",
      '"': '\\"',
      '\\': '\\\\',
      '\b': '\\b',
      '\f': '\\f',
      '\n': '\\n',
      '\r': '\\r',
      '\t': '\\t',
      '\v': '\\v',
      '\0': '\\0',
      "\u2028": "\\u2028",
      "\u2029": "\\u2029"
    };
    var product = '';
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var c = _step2.value;

        switch (c) {
          case "'":
          case '"':
            quotes[c]++;
            product += c;
            continue;
        }

        if (replacements[c]) {
          product += replacements[c];
          continue;
        }

        if (c < ' ') {
          var hexString = c.charCodeAt(0).toString(16);
          product += '\\x' + ('00' + hexString).substring(hexString.length);
          continue;
        }

        product += c;
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var quoteChar = quote || Object.keys(quotes).reduce(function (a, b) {
      return quotes[a] < quotes[b] ? a : b;
    });
    product = product.replace(new RegExp(quoteChar, 'g'), replacements[quoteChar]);
    return quoteChar + product + quoteChar;
  }

  function serializeObject(value) {
    if (stack.indexOf(value) >= 0) {
      throw TypeError('Converting circular structure to JSON5');
    }

    stack.push(value);
    var stepback = indent;
    indent = indent + gap;
    var keys = propertyList || Object.keys(value);
    var partial = [];
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = keys[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var key = _step3.value;
        var propertyString = serializeProperty(key, value);

        if (propertyString !== undefined) {
          var member = serializeKey(key) + ':';

          if (gap !== '') {
            member += ' ';
          }

          member += propertyString;
          partial.push(member);
        }
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    var final;

    if (partial.length === 0) {
      final = '{}';
    } else {
      var properties;

      if (gap === '') {
        properties = partial.join(',');
        final = '{' + properties + '}';
      } else {
        var separator = ',\n' + indent;
        properties = partial.join(separator);
        final = '{\n' + indent + properties + ',\n' + stepback + '}';
      }
    }

    stack.pop();
    indent = stepback;
    return final;
  }

  function serializeKey(key) {
    if (key.length === 0) {
      return quoteString(key, true);
    }

    var firstChar = String.fromCodePoint(key.codePointAt(0));

    if (!util.isIdStartChar(firstChar)) {
      return quoteString(key, true);
    }

    for (var i = firstChar.length; i < key.length; i++) {
      if (!util.isIdContinueChar(String.fromCodePoint(key.codePointAt(i)))) {
        return quoteString(key, true);
      }
    }

    return key;
  }

  function serializeArray(value) {
    if (stack.indexOf(value) >= 0) {
      throw TypeError('Converting circular structure to JSON5');
    }

    stack.push(value);
    var stepback = indent;
    indent = indent + gap;
    var partial = [];

    for (var i = 0; i < value.length; i++) {
      var propertyString = serializeProperty(String(i), value);
      partial.push(propertyString !== undefined ? propertyString : 'null');
    }

    var final;

    if (partial.length === 0) {
      final = '[]';
    } else {
      if (gap === '') {
        var properties = partial.join(',');
        final = '[' + properties + ']';
      } else {
        var separator = ',\n' + indent;

        var _properties = partial.join(separator);

        final = '[\n' + indent + _properties + ',\n' + stepback + ']';
      }
    }

    stack.pop();
    indent = stepback;
    return final;
  }
};

var JSON5 = {
  parse: parse,
  stringify: stringify
};
var lib = JSON5;

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var classCallCheck = _classCallCheck;

var WebWorkerRunner = function WebWorkerRunner() {
  classCallCheck(this, WebWorkerRunner);
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
          postMessage(JSON.stringify(data));
        }).catch(function (ex) {
          console.error('WebWorkerRunner error:', ex, '\r\ncode: ', code);
          data.error = ex.stack || ex.toString();
          postMessage(JSON.stringify(data));
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
      code: typeof codeOrFunc === 'function' ? "(".concat(codeOrFunc.toString(), ")();") : "".concat(codeOrFunc)
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

function observe(key, callback, opts) {
  var fn = callback.bind(this);

  if (!opts || opts.init !== false) {
    fn(this.get()[key]);
  }

  return this.on(opts && opts.defer ? 'update' : 'state', function (_a) {
    var changed = _a.changed,
        current = _a.current,
        previous = _a.previous;
    if (changed[key]) fn(current[key], previous && previous[key]);
  });
}

/* src\components\CodeMirror.svelte generated by Svelte v2.16.1 */
var codemirrorPromise;

function loadCodemirror() {
  return import('./chunk.b8692fd7.js').then(function (m) {
    return m.default;
  });
}

function data() {
  return {
    codemirrorPromise: codemirrorPromise || (codemirrorPromise = loadCodemirror())
  };
}
var methods = {
  createEditor: function createEditor(CodeMirror) {
    var _this = this;

    if (this.editor) {
      this.editor.toTextArea();
    }

    var _this$get = this.get(),
        mode = _this$get.mode,
        code = _this$get.code,
        readonly = _this$get.readonly;

    var modes = {
      json: {
        name: 'javascript',
        json: true
      },
      handlebars: {
        name: 'handlebars',
        base: 'text/html'
      }
    };
    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
      lineNumbers: true,
      lineWrapping: true,
      indentWithTabs: true,
      indentUnit: 2,
      tabSize: 2,
      value: code,
      mode: modes[mode] || {
        name: mode
      },
      readOnly: readonly
    });
    this.editor.on('change', function (instance) {
      if (!_this.updating) {
        _this.updating = true;

        _this.set({
          code: instance.getValue()
        });

        _this.updating = false;
      }
    });
  },
  resize: function resize() {
    this.editor.refresh();
  },
  observe: observe
};

function oncreate() {
  var _this2 = this;

  codemirrorPromise.then(function (CodeMirror) {
    CodeMirror.defaults.smartIndent = false;
    CodeMirror.keyMap.default['Shift-Tab'] = 'indentLess';
    CodeMirror.keyMap.default.Tab = 'indentMore';
    _this2.updating = false;

    _this2.observe('mode', function () {
      _this2.createEditor(CodeMirror);
    });

    _this2.observe('code', function (code) {
      if (!_this2.updating && code != null) {
        _this2.updating = true;

        _this2.editor.setValue(code);

        _this2.updating = false;
      }
    });

    var marker;

    _this2.observe('errorLoc', function (loc) {
      if (marker) {
        marker.clear();
      }

      if (loc == null) {
        _this2.set({
          errorLine: null
        });
      } else {
        var line = loc.line - 1;
        var ch = loc.column;
        marker = _this2.editor.markText({
          line: line,
          ch: ch
        }, {
          line: line,
          ch: ch + 1
        }, {
          className: 'error-loc'
        });

        _this2.set({
          errorLine: line
        });
      }
    });

    _this2.observe('errorLine', function (line, previousLine) {
      if (previousLine != null) {
        _this2.editor.removeLineClass(previousLine, 'wrap', 'error-line');
      }

      if (line != null) {
        _this2.editor.addLineClass(line, 'wrap', 'error-line');
      }
    });

    _this2.on('destroy', function () {
      _this2.editor.toTextArea();
    });

    _this2.editor.refresh();
  });
}
var file = "src\\components\\CodeMirror.svelte";

function create_main_fragment(component, ctx) {
  var await_block_anchor, promise;
  var info = {
    component: component,
    ctx: ctx,
    current: null,
    pending: create_pending_block,
    then: create_then_block,
    catch: create_catch_block,
    value: '_',
    error: 'err'
  };
  handlePromise(promise = ctx.codemirrorPromise, info);
  return {
    c: function create() {
      await_block_anchor = createComment();
      info.block.c();
    },
    l: function claim(nodes) {
      await_block_anchor = createComment();
      info.block.l(nodes);
    },
    m: function mount(target, anchor) {
      insert(target, await_block_anchor, anchor);
      info.block.m(target, info.anchor = anchor);

      info.mount = function () {
        return await_block_anchor.parentNode;
      };

      info.anchor = await_block_anchor;
    },
    p: function update(changed, _ctx) {
      ctx = _ctx;
      info.ctx = ctx;

      if ('codemirrorPromise' in changed && promise !== (promise = ctx.codemirrorPromise) && handlePromise(promise, info)) ; else {
        info.block.p(changed, assign(assign({}, ctx), info.resolved));
      }
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(await_block_anchor);
      }

      info.block.d(detach);
      info = null;
    }
  };
} // (27:0) {:catch err}


function create_catch_block(component, ctx) {
  var p, text;
  return {
    c: function create() {
      p = createElement("p");
      text = createText("error loading CodeMirror");
      this.h();
    },
    l: function claim(nodes) {
      p = claimElement(nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      text = claimText(p_nodes, "error loading CodeMirror");
      p_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      p.className = "error svelte-asatn3";
      addLoc(p, file, 27, 1, 678);
    },
    m: function mount(target, anchor) {
      insert(target, p, anchor);
      append(p, text);
    },
    p: noop,
    d: function destroy(detach) {
      if (detach) {
        detachNode(p);
      }
    }
  };
} // (3:0) {:then _}


function create_then_block(component, ctx) {
  var div, textarea, text;

  function select_block_type(ctx) {
    if (ctx.error) return create_if_block;
    if (ctx.warningCount > 0) return create_if_block_3;
  }

  var current_block_type = select_block_type(ctx);
  var if_block = current_block_type && current_block_type(component, ctx);
  return {
    c: function create() {
      div = createElement("div");
      textarea = createElement("textarea");
      text = createText("\n\n\t\t");
      if (if_block) if_block.c();
      this.h();
    },
    l: function claim(nodes) {
      div = claimElement(nodes, "DIV", {
        class: true
      }, false);
      var div_nodes = children(div);
      textarea = claimElement(div_nodes, "TEXTAREA", {
        class: true
      }, false);
      var textarea_nodes = children(textarea);
      textarea_nodes.forEach(detachNode);
      text = claimText(div_nodes, "\n\n\t\t");
      if (if_block) if_block.l(div_nodes);
      div_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      textarea.className = "svelte-asatn3";
      addLoc(textarea, file, 4, 2, 117);
      div.className = "codemirror-container svelte-asatn3";
      addLoc(div, file, 3, 1, 80);
    },
    m: function mount(target, anchor) {
      insert(target, div, anchor);
      append(div, textarea);
      component.refs.editor = textarea;
      append(div, text);
      if (if_block) if_block.m(div, null);
    },
    p: function update(changed, ctx) {
      if (current_block_type === (current_block_type = select_block_type(ctx)) && if_block) {
        if_block.p(changed, ctx);
      } else {
        if (if_block) if_block.d(1);
        if_block = current_block_type && current_block_type(component, ctx);
        if (if_block) if_block.c();
        if (if_block) if_block.m(div, null);
      }
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(div);
      }

      if (component.refs.editor === textarea) component.refs.editor = null;
      if (if_block) if_block.d();
    }
  };
} // (21:28) 


function create_if_block_3(component, ctx) {
  var p,
      text0,
      text1,
      text2,
      text3_value = ctx.warningCount === 1 ? 'warning' : 'warnings',
      text3,
      text4;
  return {
    c: function create() {
      p = createElement("p");
      text0 = createText("Compiled, but with ");
      text1 = createText(ctx.warningCount);
      text2 = createText(" ");
      text3 = createText(text3_value);
      text4 = createText(" — check the console for details");
      this.h();
    },
    l: function claim(nodes) {
      p = claimElement(nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      text0 = claimText(p_nodes, "Compiled, but with ");
      text1 = claimText(p_nodes, ctx.warningCount);
      text2 = claimText(p_nodes, " ");
      text3 = claimText(p_nodes, text3_value);
      text4 = claimText(p_nodes, " — check the console for details");
      p_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      p.className = "warning message svelte-asatn3";
      addLoc(p, file, 21, 3, 496);
    },
    m: function mount(target, anchor) {
      insert(target, p, anchor);
      append(p, text0);
      append(p, text1);
      append(p, text2);
      append(p, text3);
      append(p, text4);
    },
    p: function update(changed, ctx) {
      if (changed.warningCount) {
        setData(text1, ctx.warningCount);
      }

      if (changed.warningCount && text3_value !== (text3_value = ctx.warningCount === 1 ? 'warning' : 'warnings')) {
        setData(text3, text3_value);
      }
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(p);
      }
    }
  };
} // (7:2) {#if error}


function create_if_block(component, ctx) {
  var p,
      text0,
      text1_value = ctx.error.message,
      text1;
  var if_block = ctx.error.loc && create_if_block_1(component, ctx);
  return {
    c: function create() {
      p = createElement("p");
      if (if_block) if_block.c();
      text0 = createText("\n\n\t\t\t\t");
      text1 = createText(text1_value);
      this.h();
    },
    l: function claim(nodes) {
      p = claimElement(nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      if (if_block) if_block.l(p_nodes);
      text0 = claimText(p_nodes, "\n\n\t\t\t\t");
      text1 = claimText(p_nodes, text1_value);
      p_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      p.className = "error message svelte-asatn3";
      addLoc(p, file, 7, 3, 168);
    },
    m: function mount(target, anchor) {
      insert(target, p, anchor);
      if (if_block) if_block.m(p, null);
      append(p, text0);
      append(p, text1);
    },
    p: function update(changed, ctx) {
      if (ctx.error.loc) {
        if (if_block) {
          if_block.p(changed, ctx);
        } else {
          if_block = create_if_block_1(component, ctx);
          if_block.c();
          if_block.m(p, text0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (changed.error && text1_value !== (text1_value = ctx.error.message)) {
        setData(text1, text1_value);
      }
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(p);
      }

      if (if_block) if_block.d();
    }
  };
} // (9:4) {#if error.loc}


function create_if_block_1(component, ctx) {
  var strong,
      text0,
      text1_value = ctx.error.loc.line,
      text1,
      text2,
      text3_value = ctx.error.loc.column,
      text3,
      text4;
  var if_block = ctx.error.filename && create_if_block_2(component, ctx);
  return {
    c: function create() {
      strong = createElement("strong");
      if (if_block) if_block.c();
      text0 = createText("\n\n\t\t\t\t\t\t(");
      text1 = createText(text1_value);
      text2 = createText(":");
      text3 = createText(text3_value);
      text4 = createText(")");
      this.h();
    },
    l: function claim(nodes) {
      strong = claimElement(nodes, "STRONG", {}, false);
      var strong_nodes = children(strong);
      if (if_block) if_block.l(strong_nodes);
      text0 = claimText(strong_nodes, "\n\n\t\t\t\t\t\t(");
      text1 = claimText(strong_nodes, text1_value);
      text2 = claimText(strong_nodes, ":");
      text3 = claimText(strong_nodes, text3_value);
      text4 = claimText(strong_nodes, ")");
      strong_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      addLoc(strong, file, 9, 5, 219);
    },
    m: function mount(target, anchor) {
      insert(target, strong, anchor);
      if (if_block) if_block.m(strong, null);
      append(strong, text0);
      append(strong, text1);
      append(strong, text2);
      append(strong, text3);
      append(strong, text4);
    },
    p: function update(changed, ctx) {
      if (ctx.error.filename) {
        if (if_block) {
          if_block.p(changed, ctx);
        } else {
          if_block = create_if_block_2(component, ctx);
          if_block.c();
          if_block.m(strong, text0);
        }
      } else if (if_block) {
        if_block.d(1);
        if_block = null;
      }

      if (changed.error && text1_value !== (text1_value = ctx.error.loc.line)) {
        setData(text1, text1_value);
      }

      if (changed.error && text3_value !== (text3_value = ctx.error.loc.column)) {
        setData(text3, text3_value);
      }
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(strong);
      }

      if (if_block) if_block.d();
    }
  };
} // (11:6) {#if error.filename}


function create_if_block_2(component, ctx) {
  var span,
      text_value = ctx.error.filename,
      text;

  function click_handler(event) {
    component.fire("navigate", ctx.error.filename);
  }

  return {
    c: function create() {
      span = createElement("span");
      text = createText(text_value);
      this.h();
    },
    l: function claim(nodes) {
      span = claimElement(nodes, "SPAN", {
        class: true
      }, false);
      var span_nodes = children(span);
      text = claimText(span_nodes, text_value);
      span_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      addListener(span, "click", click_handler);
      span.className = "filename";
      addLoc(span, file, 11, 7, 262);
    },
    m: function mount(target, anchor) {
      insert(target, span, anchor);
      append(span, text);
    },
    p: function update(changed, _ctx) {
      ctx = _ctx;

      if (changed.error && text_value !== (text_value = ctx.error.filename)) {
        setData(text, text_value);
      }
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(span);
      }

      removeListener(span, "click", click_handler);
    }
  };
} // (1:26)   <p class='loading'>loading editor...</p> {:then _}


function create_pending_block(component, ctx) {
  var p, text;
  return {
    c: function create() {
      p = createElement("p");
      text = createText("loading editor...");
      this.h();
    },
    l: function claim(nodes) {
      p = claimElement(nodes, "P", {
        class: true
      }, false);
      var p_nodes = children(p);
      text = claimText(p_nodes, "loading editor...");
      p_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      p.className = "loading svelte-asatn3";
      addLoc(p, file, 1, 1, 28);
    },
    m: function mount(target, anchor) {
      insert(target, p, anchor);
      append(p, text);
    },
    p: noop,
    d: function destroy(detach) {
      if (detach) {
        detachNode(p);
      }
    }
  };
}

function CodeMirror(options) {
  var _this3 = this;

  this._debugName = '<CodeMirror>';

  if (!options || !options.target && !options.root) {
    throw new Error("'target' is a required option");
  }

  init(this, options);
  this.refs = {};
  this._state = assign(data(), options.data);
  if (!('codemirrorPromise' in this._state)) console.warn("<CodeMirror> was created without expected data property 'codemirrorPromise'");
  if (!('error' in this._state)) console.warn("<CodeMirror> was created without expected data property 'error'");
  if (!('warningCount' in this._state)) console.warn("<CodeMirror> was created without expected data property 'warningCount'");
  this._intro = true;
  this._fragment = create_main_fragment(this, this._state);

  this.root._oncreate.push(function () {
    oncreate.call(_this3);

    _this3.fire("update", {
      changed: assignTrue({}, _this3._state),
      current: _this3._state
    });
  });

  if (options.target) {
    var nodes = children(options.target);
    options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
    nodes.forEach(detachNode);

    this._mount(options.target, options.anchor);

    flush(this);
  }
}

assign(CodeMirror.prototype, protoDev);
assign(CodeMirror.prototype, methods);

CodeMirror.prototype._checkReadOnly = function _checkReadOnly(newState) {};

function createConverter() {
  // eslint-disable-next-line no-undef
  if (typeof window === 'undefined') {
    // Mock for server side
    return {
      cssToJs: function cssToJs(o) {
        return o;
      },
      jsToCss: function jsToCss(o) {
        return o;
      }
    };
  } // eslint-disable-next-line no-undef


  var _window = window,
      postcss = _window.postcss;
  var webWorkerRunner = new WebWorkerRunner();
  var postcssPlugins = {
    nested: postcss.plugins.nested(),
    nano: postcss.plugins.nano({
      preset: ['default', {
        discardComments: {
          removeAll: true
        }
      }]
    }),
    beautify: postcss.plugins.beautify()
  };
  return {
    cssToJs: cssToJs,
    jsToCss: jsToCss
  };

  function cssToJs(css) {
    try {
      var js = postcss().process(css, {
        stringifier: postcss.syntaxes.js.stringify
      }).css;
      js = lib.stringify(JSON.parse(js), null, 4);
      return ";(".concat(js, ")");
    } catch (ex) {
      return ex.toString();
    }
  }

  function jsToCss(_x, _x2) {
    return _jsToCss.apply(this, arguments);
  }

  function _jsToCss() {
    _jsToCss = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(js, plugins) {
      var jsObject, result;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return webWorkerRunner.run(js);

            case 3:
              jsObject = _context.sent;
              _context.next = 6;
              return postcss(Object.keys(plugins).filter(function (o) {
                return plugins[o];
              }).map(function (o) {
                return postcssPlugins[o];
              }).filter(function (o) {
                return o;
              })).process(js, {
                parser: postcss.syntaxes.js.parse,
                requireFromString: function requireFromString() {
                  return jsObject;
                }
              });

            case 6:
              result = _context.sent;
              return _context.abrupt("return", result.css);

            case 10:
              _context.prev = 10;
              _context.t0 = _context["catch"](0);
              return _context.abrupt("return", "js = ".concat(jsObject, "\r\n\r\n============================\r\nPostcss Error:\r\n").concat(_context.t0.toString()));

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 10]]);
    }));
    return _jsToCss.apply(this, arguments);
  }
}

var converter = createConverter();

function data$1() {
  var data; // eslint-disable-next-line no-undef

  if (typeof window !== 'undefined') {
    // eslint-disable-next-line no-undef
    data = JSON.parse(localStorage.getItem('JsCssConverter'));
  }

  if (!data) {
    data = {
      js: "[\n    '@at-rule-wiwhout-params',\n    '@at-rule with params',\n    '@at-rule (with params)',\n    '// comment',\n    {\n        '.selector1': {\n            color: '#0f0',\n        },\n        '.selector2': {\n            color: '#0f0',\n        },\n    },\n    '// another comment',\n    {\n        '@at-rule (with params)': {\n            'and-content': 'value',\n        },\n        '.selector3': {\n            color: '#0f0',\n            '.sub-selector': {\n                content: '\"quotes is required for this CSS property\"',\n            },\n        },\n    },\n]",
      css: "\n@at-rule-wiwhout-params;\n@at-rule with params;\n@at-rule (with params);\n/* comment */\n.selector1 {\n\tcolor: #0f0\n}\n.selector2 {\n\tcolor: #0f0\n}\n/* another comment */\n@at-rule (with params) {\n\tand-content: value\n}\n.selector3 {\n\tcolor: #0f0;\n\t.sub-selector {\ncontent: \"quotes is required for this CSS property\"\n\t}\n}\n"
    };
  }

  if (!data.plugins) {
    data.plugins = {
      nested: false,
      nano: true,
      beautify: true
    };
  }

  return data;
}

function oncreate$1() {}

function onstate(_x3) {
  return _onstate.apply(this, arguments);
}

function _onstate() {
  _onstate = _asyncToGenerator(
  /*#__PURE__*/
  _regeneratorRuntime.mark(function _callee2(_ref) {
    var changed, current, previous;
    return _regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            changed = _ref.changed, current = _ref.current, previous = _ref.previous;

            if (this.converting) {
              _context2.next = 18;
              break;
            }

            this.converting = true;
            _context2.prev = 3;

            if (!(changed.js || changed.plugins)) {
              _context2.next = 13;
              break;
            }

            _context2.t0 = this;
            _context2.next = 8;
            return converter.jsToCss(this.get().js, this.get().plugins);

          case 8:
            _context2.t1 = _context2.sent;
            _context2.t2 = {
              css: _context2.t1
            };

            _context2.t0.set.call(_context2.t0, _context2.t2);

            _context2.next = 14;
            break;

          case 13:
            if (changed.css) {
              this.set({
                js: converter.cssToJs(this.get().css)
              });
            }

          case 14:
            if (typeof window !== 'undefined') {
              // eslint-disable-next-line no-undef
              localStorage.setItem('JsCssConverter', JSON.stringify(this.get()));
            }

          case 15:
            _context2.prev = 15;
            this.converting = false;
            return _context2.finish(15);

          case 18:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this, [[3,, 15, 18]]);
  }));
  return _onstate.apply(this, arguments);
}
var file$1 = "src\\components\\JsCssConverter.svelte";

function create_main_fragment$1(component, ctx) {
  var table,
      thead,
      tr0,
      th0,
      text0,
      text1,
      th1,
      span0,
      text2,
      text3,
      span1,
      label0,
      input0,
      text4,
      text5,
      span2,
      label1,
      input1,
      text6,
      text7,
      span3,
      label2,
      input2,
      text8,
      text9,
      tbody,
      tr1,
      td0,
      codemirror0_updating = {},
      text10,
      td1,
      codemirror1_updating = {};

  function input0_change_handler() {
    ctx.plugins.nested = input0.checked;
    component.set({
      plugins: ctx.plugins
    });
  }

  function input1_change_handler() {
    ctx.plugins.nano = input1.checked;
    component.set({
      plugins: ctx.plugins
    });
  }

  function input2_change_handler() {
    ctx.plugins.beautify = input2.checked;
    component.set({
      plugins: ctx.plugins
    });
  }

  var codemirror0_initial_data = {};

  if (ctx.js !== void 0) {
    codemirror0_initial_data.code = ctx.js;
    codemirror0_updating.code = true;
  }

  var codemirror0 = new CodeMirror({
    root: component.root,
    store: component.store,
    data: codemirror0_initial_data,
    _bind: function _bind(changed, childState) {
      var newState = {};

      if (!codemirror0_updating.code && changed.code) {
        newState.js = childState.code;
      }

      component._set(newState);

      codemirror0_updating = {};
    }
  });

  component.root._beforecreate.push(function () {
    codemirror0._bind({
      code: 1
    }, codemirror0.get());
  });

  var codemirror1_initial_data = {};

  if (ctx.css !== void 0) {
    codemirror1_initial_data.code = ctx.css;
    codemirror1_updating.code = true;
  }

  var codemirror1 = new CodeMirror({
    root: component.root,
    store: component.store,
    data: codemirror1_initial_data,
    _bind: function _bind(changed, childState) {
      var newState = {};

      if (!codemirror1_updating.code && changed.code) {
        newState.css = childState.code;
      }

      component._set(newState);

      codemirror1_updating = {};
    }
  });

  component.root._beforecreate.push(function () {
    codemirror1._bind({
      code: 1
    }, codemirror1.get());
  });

  return {
    c: function create() {
      table = createElement("table");
      thead = createElement("thead");
      tr0 = createElement("tr");
      th0 = createElement("th");
      text0 = createText("JS");
      text1 = createText("\n\t\t");
      th1 = createElement("th");
      span0 = createElement("span");
      text2 = createText("CSS   ");
      text3 = createText("\n\t\t\t");
      span1 = createElement("span");
      label0 = createElement("label");
      input0 = createElement("input");
      text4 = createText("un nested");
      text5 = createText("\n\t\t\t");
      span2 = createElement("span");
      label1 = createElement("label");
      input1 = createElement("input");
      text6 = createText("optimized");
      text7 = createText("\n\t\t\t");
      span3 = createElement("span");
      label2 = createElement("label");
      input2 = createElement("input");
      text8 = createText("beautify");
      text9 = createText("\n\t");
      tbody = createElement("tbody");
      tr1 = createElement("tr");
      td0 = createElement("td");

      codemirror0._fragment.c();

      text10 = createText("\n\t\t");
      td1 = createElement("td");

      codemirror1._fragment.c();

      this.h();
    },
    l: function claim(nodes) {
      table = claimElement(nodes, "TABLE", {
        class: true
      }, false);
      var table_nodes = children(table);
      thead = claimElement(table_nodes, "THEAD", {}, false);
      var thead_nodes = children(thead);
      tr0 = claimElement(thead_nodes, "TR", {}, false);
      var tr0_nodes = children(tr0);
      th0 = claimElement(tr0_nodes, "TH", {}, false);
      var th0_nodes = children(th0);
      text0 = claimText(th0_nodes, "JS");
      th0_nodes.forEach(detachNode);
      text1 = claimText(tr0_nodes, "\n\t\t");
      th1 = claimElement(tr0_nodes, "TH", {}, false);
      var th1_nodes = children(th1);
      span0 = claimElement(th1_nodes, "SPAN", {}, false);
      var span0_nodes = children(span0);
      text2 = claimText(span0_nodes, "CSS   ");
      span0_nodes.forEach(detachNode);
      text3 = claimText(th1_nodes, "\n\t\t\t");
      span1 = claimElement(th1_nodes, "SPAN", {}, false);
      var span1_nodes = children(span1);
      label0 = claimElement(span1_nodes, "LABEL", {}, false);
      var label0_nodes = children(label0);
      input0 = claimElement(label0_nodes, "INPUT", {
        type: true
      }, false);
      var input0_nodes = children(input0);
      input0_nodes.forEach(detachNode);
      text4 = claimText(label0_nodes, "un nested");
      label0_nodes.forEach(detachNode);
      span1_nodes.forEach(detachNode);
      text5 = claimText(th1_nodes, "\n\t\t\t");
      span2 = claimElement(th1_nodes, "SPAN", {}, false);
      var span2_nodes = children(span2);
      label1 = claimElement(span2_nodes, "LABEL", {}, false);
      var label1_nodes = children(label1);
      input1 = claimElement(label1_nodes, "INPUT", {
        type: true
      }, false);
      var input1_nodes = children(input1);
      input1_nodes.forEach(detachNode);
      text6 = claimText(label1_nodes, "optimized");
      label1_nodes.forEach(detachNode);
      span2_nodes.forEach(detachNode);
      text7 = claimText(th1_nodes, "\n\t\t\t");
      span3 = claimElement(th1_nodes, "SPAN", {}, false);
      var span3_nodes = children(span3);
      label2 = claimElement(span3_nodes, "LABEL", {}, false);
      var label2_nodes = children(label2);
      input2 = claimElement(label2_nodes, "INPUT", {
        type: true
      }, false);
      var input2_nodes = children(input2);
      input2_nodes.forEach(detachNode);
      text8 = claimText(label2_nodes, "beautify");
      label2_nodes.forEach(detachNode);
      span3_nodes.forEach(detachNode);
      th1_nodes.forEach(detachNode);
      tr0_nodes.forEach(detachNode);
      thead_nodes.forEach(detachNode);
      text9 = claimText(table_nodes, "\n\t");
      tbody = claimElement(table_nodes, "TBODY", {}, false);
      var tbody_nodes = children(tbody);
      tr1 = claimElement(tbody_nodes, "TR", {}, false);
      var tr1_nodes = children(tr1);
      td0 = claimElement(tr1_nodes, "TD", {
        class: true
      }, false);
      var td0_nodes = children(td0);

      codemirror0._fragment.l(td0_nodes);

      td0_nodes.forEach(detachNode);
      text10 = claimText(tr1_nodes, "\n\t\t");
      td1 = claimElement(tr1_nodes, "TD", {
        class: true
      }, false);
      var td1_nodes = children(td1);

      codemirror1._fragment.l(td1_nodes);

      td1_nodes.forEach(detachNode);
      tr1_nodes.forEach(detachNode);
      tbody_nodes.forEach(detachNode);
      table_nodes.forEach(detachNode);
      this.h();
    },
    h: function hydrate() {
      addLoc(th0, file$1, 3, 2, 40);
      addLoc(span0, file$1, 5, 3, 62);
      addListener(input0, "change", input0_change_handler);
      setAttribute(input0, "type", "checkbox");
      addLoc(input0, file$1, 6, 16, 113);
      addLoc(label0, file$1, 6, 9, 106);
      addLoc(span1, file$1, 6, 3, 100);
      addListener(input1, "change", input1_change_handler);
      setAttribute(input1, "type", "checkbox");
      addLoc(input1, file$1, 7, 16, 207);
      addLoc(label1, file$1, 7, 9, 200);
      addLoc(span2, file$1, 7, 3, 194);
      addListener(input2, "change", input2_change_handler);
      setAttribute(input2, "type", "checkbox");
      addLoc(input2, file$1, 8, 16, 299);
      addLoc(label2, file$1, 8, 9, 292);
      addLoc(span3, file$1, 8, 3, 286);
      addLoc(th1, file$1, 4, 2, 54);
      addLoc(tr0, file$1, 2, 1, 33);
      addLoc(thead, file$1, 1, 1, 24);
      td0.className = "js svelte-1oq4kut";
      addLoc(td0, file$1, 14, 2, 420);
      td1.className = "css svelte-1oq4kut";
      addLoc(td1, file$1, 17, 2, 478);
      addLoc(tr1, file$1, 13, 1, 413);
      addLoc(tbody, file$1, 12, 1, 404);
      table.className = "editor svelte-1oq4kut";
      addLoc(table, file$1, 0, 0, 0);
    },
    m: function mount(target, anchor) {
      insert(target, table, anchor);
      append(table, thead);
      append(thead, tr0);
      append(tr0, th0);
      append(th0, text0);
      append(tr0, text1);
      append(tr0, th1);
      append(th1, span0);
      append(span0, text2);
      append(th1, text3);
      append(th1, span1);
      append(span1, label0);
      append(label0, input0);
      input0.checked = ctx.plugins.nested;
      append(label0, text4);
      append(th1, text5);
      append(th1, span2);
      append(span2, label1);
      append(label1, input1);
      input1.checked = ctx.plugins.nano;
      append(label1, text6);
      append(th1, text7);
      append(th1, span3);
      append(span3, label2);
      append(label2, input2);
      input2.checked = ctx.plugins.beautify;
      append(label2, text8);
      append(table, text9);
      append(table, tbody);
      append(tbody, tr1);
      append(tr1, td0);

      codemirror0._mount(td0, null);

      append(tr1, text10);
      append(tr1, td1);

      codemirror1._mount(td1, null);
    },
    p: function update(changed, _ctx) {
      ctx = _ctx;
      if (changed.plugins) input0.checked = ctx.plugins.nested;
      if (changed.plugins) input1.checked = ctx.plugins.nano;
      if (changed.plugins) input2.checked = ctx.plugins.beautify;
      var codemirror0_changes = {};

      if (!codemirror0_updating.code && changed.js) {
        codemirror0_changes.code = ctx.js;
        codemirror0_updating.code = ctx.js !== void 0;
      }

      codemirror0._set(codemirror0_changes);

      codemirror0_updating = {};
      var codemirror1_changes = {};

      if (!codemirror1_updating.code && changed.css) {
        codemirror1_changes.code = ctx.css;
        codemirror1_updating.code = ctx.css !== void 0;
      }

      codemirror1._set(codemirror1_changes);

      codemirror1_updating = {};
    },
    d: function destroy(detach) {
      if (detach) {
        detachNode(table);
      }

      removeListener(input0, "change", input0_change_handler);
      removeListener(input1, "change", input1_change_handler);
      removeListener(input2, "change", input2_change_handler);
      codemirror0.destroy();
      codemirror1.destroy();
    }
  };
}

function JsCssConverter(options) {
  var _this = this;

  this._debugName = '<JsCssConverter>';

  if (!options || !options.target && !options.root) {
    throw new Error("'target' is a required option");
  }

  init(this, options);
  this._state = assign(data$1(), options.data);
  if (!('plugins' in this._state)) console.warn("<JsCssConverter> was created without expected data property 'plugins'");
  if (!('js' in this._state)) console.warn("<JsCssConverter> was created without expected data property 'js'");
  if (!('css' in this._state)) console.warn("<JsCssConverter> was created without expected data property 'css'");
  this._intro = true;
  this._handlers.state = [onstate];
  onstate.call(this, {
    changed: assignTrue({}, this._state),
    current: this._state
  });
  this._fragment = create_main_fragment$1(this, this._state);

  this.root._oncreate.push(function () {
    oncreate$1.call(_this);

    _this.fire("update", {
      changed: assignTrue({}, _this._state),
      current: _this._state
    });
  });

  if (options.target) {
    var nodes = children(options.target);
    options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
    nodes.forEach(detachNode);

    this._mount(options.target, options.anchor);

    flush(this);
  }
}

assign(JsCssConverter.prototype, protoDev);

JsCssConverter.prototype._checkReadOnly = function _checkReadOnly(newState) {};

/* src\routes\index.html generated by Svelte v2.16.1 */

function create_main_fragment$2(component, ctx) {
  var text;
  var jscssconverter = new JsCssConverter({
    root: component.root,
    store: component.store
  });
  return {
    c: function create() {
      text = createText("\n\n");

      jscssconverter._fragment.c();

      this.h();
    },
    l: function claim(nodes) {
      text = claimText(nodes, "\n\n");

      jscssconverter._fragment.l(nodes);

      this.h();
    },
    h: function hydrate() {
      document.title = "Sapper project template";
    },
    m: function mount(target, anchor) {
      insert(target, text, anchor);

      jscssconverter._mount(target, anchor);
    },
    p: noop,
    d: function destroy(detach) {
      if (detach) {
        detachNode(text);
      }

      jscssconverter.destroy(detach);
    }
  };
}

function Index(options) {
  this._debugName = '<Index>';

  if (!options || !options.target && !options.root) {
    throw new Error("'target' is a required option");
  }

  init(this, options);
  this._state = assign({}, options.data);
  this._intro = true;
  this._fragment = create_main_fragment$2(this, this._state);

  if (options.target) {
    var nodes = children(options.target);
    options.hydrate ? this._fragment.l(nodes) : this._fragment.c();
    nodes.forEach(detachNode);

    this._mount(options.target, options.anchor);

    flush(this);
  }
}

assign(Index.prototype, protoDev);

Index.prototype._checkReadOnly = function _checkReadOnly(newState) {};

export default Index;
//# sourceMappingURL=chunk.4ca7fdba.js.map
