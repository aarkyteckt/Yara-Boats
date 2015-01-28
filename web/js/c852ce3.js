/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l="1.11.1",m=function(a,b){return new m.fn.init(a,b)},n=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,o=/^-ms-/,p=/-([\da-z])/gi,q=function(a,b){return b.toUpperCase()};m.fn=m.prototype={jquery:l,constructor:m,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=m.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return m.each(this,a,b)},map:function(a){return this.pushStack(m.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},m.extend=m.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||m.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(e=arguments[h]))for(d in e)a=g[d],c=e[d],g!==c&&(j&&c&&(m.isPlainObject(c)||(b=m.isArray(c)))?(b?(b=!1,f=a&&m.isArray(a)?a:[]):f=a&&m.isPlainObject(a)?a:{},g[d]=m.extend(j,f,c)):void 0!==c&&(g[d]=c));return g},m.extend({expando:"jQuery"+(l+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===m.type(a)},isArray:Array.isArray||function(a){return"array"===m.type(a)},isWindow:function(a){return null!=a&&a==a.window},isNumeric:function(a){return!m.isArray(a)&&a-parseFloat(a)>=0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},isPlainObject:function(a){var b;if(!a||"object"!==m.type(a)||a.nodeType||m.isWindow(a))return!1;try{if(a.constructor&&!j.call(a,"constructor")&&!j.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}if(k.ownLast)for(b in a)return j.call(a,b);for(b in a);return void 0===b||j.call(a,b)},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(b){b&&m.trim(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(o,"ms-").replace(p,q)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=r(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(n,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(r(Object(a))?m.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){var d;if(b){if(g)return g.call(b,a,c);for(d=b.length,c=c?0>c?Math.max(0,d+c):c:0;d>c;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,b){var c=+b.length,d=0,e=a.length;while(c>d)a[e++]=b[d++];if(c!==c)while(void 0!==b[d])a[e++]=b[d++];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=r(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(f=a[b],b=a,a=f),m.isFunction(a)?(c=d.call(arguments,2),e=function(){return a.apply(b||this,c.concat(d.call(arguments)))},e.guid=a.guid=a.guid||m.guid++,e):void 0},now:function(){return+new Date},support:k}),m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function r(a){var b=a.length,c=m.type(a);return"function"===c||m.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var s=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+-new Date,v=a.document,w=0,x=0,y=gb(),z=gb(),A=gb(),B=function(a,b){return a===b&&(l=!0),0},C="undefined",D=1<<31,E={}.hasOwnProperty,F=[],G=F.pop,H=F.push,I=F.push,J=F.slice,K=F.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},L="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",N="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",O=N.replace("w","w#"),P="\\["+M+"*("+N+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+O+"))|)"+M+"*\\]",Q=":("+N+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+P+")*)|.*)\\)|)",R=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),S=new RegExp("^"+M+"*,"+M+"*"),T=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),V=new RegExp(Q),W=new RegExp("^"+O+"$"),X={ID:new RegExp("^#("+N+")"),CLASS:new RegExp("^\\.("+N+")"),TAG:new RegExp("^("+N.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+Q),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+L+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{I.apply(F=J.call(v.childNodes),v.childNodes),F[v.childNodes.length].nodeType}catch(eb){I={apply:F.length?function(a,b){H.apply(a,J.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],!a||"string"!=typeof a)return d;if(1!==(k=b.nodeType)&&9!==k)return[];if(p&&!e){if(f=_.exec(a))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return I.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName&&b.getElementsByClassName)return I.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=9===k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+qb(o[l]);w=ab.test(a)&&ob(b.parentNode)||b,x=o.join(",")}if(x)try{return I.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function gb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function hb(a){return a[u]=!0,a}function ib(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function jb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function kb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||D)-(~a.sourceIndex||D);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function lb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function nb(a){return hb(function(b){return b=+b,hb(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function ob(a){return a&&typeof a.getElementsByTagName!==C&&a}c=fb.support={},f=fb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fb.setDocument=function(a){var b,e=a?a.ownerDocument||a:v,g=e.defaultView;return e!==n&&9===e.nodeType&&e.documentElement?(n=e,o=e.documentElement,p=!f(e),g&&g!==g.top&&(g.addEventListener?g.addEventListener("unload",function(){m()},!1):g.attachEvent&&g.attachEvent("onunload",function(){m()})),c.attributes=ib(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ib(function(a){return a.appendChild(e.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(e.getElementsByClassName)&&ib(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),c.getById=ib(function(a){return o.appendChild(a).id=u,!e.getElementsByName||!e.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if(typeof b.getElementById!==C&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c=typeof a.getAttributeNode!==C&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==C?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==C&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(e.querySelectorAll))&&(ib(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&q.push("[*^$]="+M+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+M+"*(?:value|"+L+")"),a.querySelectorAll(":checked").length||q.push(":checked")}),ib(function(a){var b=e.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+M+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ib(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",Q)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===e||a.ownerDocument===v&&t(v,a)?-1:b===e||b.ownerDocument===v&&t(v,b)?1:k?K.call(k,a)-K.call(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,f=a.parentNode,g=b.parentNode,h=[a],i=[b];if(!f||!g)return a===e?-1:b===e?1:f?-1:g?1:k?K.call(k,a)-K.call(k,b):0;if(f===g)return kb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?kb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},e):n},fb.matches=function(a,b){return fb(a,null,null,b)},fb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fb(b,n,null,[a]).length>0},fb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&E.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fb.selectors={cacheLength:50,createPseudo:hb,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+M+")"+a+"("+M+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==C&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?hb(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=K.call(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:hb(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?hb(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),!c.pop()}}),has:hb(function(a){return function(b){return fb(a,b).length>0}}),contains:hb(function(a){return function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:hb(function(a){return W.test(a||"")||fb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:nb(function(){return[0]}),last:nb(function(a,b){return[b-1]}),eq:nb(function(a,b,c){return[0>c?c+b:c]}),even:nb(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:nb(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:nb(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:nb(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=lb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=mb(b);function pb(){}pb.prototype=d.filters=d.pseudos,d.setFilters=new pb,g=fb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fb.error(a):z(a,i).slice(0)};function qb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function rb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function sb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function tb(a,b,c){for(var d=0,e=b.length;e>d;d++)fb(a,b[d],c);return c}function ub(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function vb(a,b,c,d,e,f){return d&&!d[u]&&(d=vb(d)),e&&!e[u]&&(e=vb(e,f)),hb(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||tb(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ub(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ub(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?K.call(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ub(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):I.apply(g,r)})}function wb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=rb(function(a){return a===b},h,!0),l=rb(function(a){return K.call(b,a)>-1},h,!0),m=[function(a,c,d){return!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d))}];f>i;i++)if(c=d.relative[a[i].type])m=[rb(sb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return vb(i>1&&sb(m),i>1&&qb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&wb(a.slice(i,e)),f>e&&wb(a=a.slice(e)),f>e&&qb(a))}m.push(c)}return sb(m)}function xb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=G.call(i));s=ub(s)}I.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&fb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?hb(f):f}return h=fb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xb(e,d)),f.selector=a}return f},i=fb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&ob(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qb(j),!a)return I.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&ob(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ib(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ib(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||jb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ib(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||jb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ib(function(a){return null==a.getAttribute("disabled")})||jb(L,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fb}(a);m.find=s,m.expr=s.selectors,m.expr[":"]=m.expr.pseudos,m.unique=s.uniqueSort,m.text=s.getText,m.isXMLDoc=s.isXML,m.contains=s.contains;var t=m.expr.match.needsContext,u=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/^.[^:#\[\.,]*$/;function w(a,b,c){if(m.isFunction(b))return m.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return m.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(v.test(b))return m.filter(b,a,c);b=m.filter(b,a)}return m.grep(a,function(a){return m.inArray(a,b)>=0!==c})}m.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?m.find.matchesSelector(d,a)?[d]:[]:m.find.matches(a,m.grep(b,function(a){return 1===a.nodeType}))},m.fn.extend({find:function(a){var b,c=[],d=this,e=d.length;if("string"!=typeof a)return this.pushStack(m(a).filter(function(){for(b=0;e>b;b++)if(m.contains(d[b],this))return!0}));for(b=0;e>b;b++)m.find(a,d[b],c);return c=this.pushStack(e>1?m.unique(c):c),c.selector=this.selector?this.selector+" "+a:a,c},filter:function(a){return this.pushStack(w(this,a||[],!1))},not:function(a){return this.pushStack(w(this,a||[],!0))},is:function(a){return!!w(this,"string"==typeof a&&t.test(a)?m(a):a||[],!1).length}});var x,y=a.document,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=m.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a.charAt(0)&&">"===a.charAt(a.length-1)&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||x).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof m?b[0]:b,m.merge(this,m.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:y,!0)),u.test(c[1])&&m.isPlainObject(b))for(c in b)m.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}if(d=y.getElementById(c[2]),d&&d.parentNode){if(d.id!==c[2])return x.find(a);this.length=1,this[0]=d}return this.context=y,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):m.isFunction(a)?"undefined"!=typeof x.ready?x.ready(a):a(m):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),m.makeArray(a,this))};A.prototype=m.fn,x=m(y);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};m.extend({dir:function(a,b,c){var d=[],e=a[b];while(e&&9!==e.nodeType&&(void 0===c||1!==e.nodeType||!m(e).is(c)))1===e.nodeType&&d.push(e),e=e[b];return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),m.fn.extend({has:function(a){var b,c=m(a,this),d=c.length;return this.filter(function(){for(b=0;d>b;b++)if(m.contains(this,c[b]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=t.test(a)||"string"!=typeof a?m(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&m.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?m.unique(f):f)},index:function(a){return a?"string"==typeof a?m.inArray(this[0],m(a)):m.inArray(a.jquery?a[0]:a,this):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(m.unique(m.merge(this.get(),m(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){do a=a[b];while(a&&1!==a.nodeType);return a}m.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return m.dir(a,"parentNode")},parentsUntil:function(a,b,c){return m.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return m.dir(a,"nextSibling")},prevAll:function(a){return m.dir(a,"previousSibling")},nextUntil:function(a,b,c){return m.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return m.dir(a,"previousSibling",c)},siblings:function(a){return m.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return m.sibling(a.firstChild)},contents:function(a){return m.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:m.merge([],a.childNodes)}},function(a,b){m.fn[a]=function(c,d){var e=m.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=m.filter(d,e)),this.length>1&&(C[a]||(e=m.unique(e)),B.test(a)&&(e=e.reverse())),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return m.each(a.match(E)||[],function(a,c){b[c]=!0}),b}m.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):m.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(c=a.memory&&l,d=!0,f=g||0,g=0,e=h.length,b=!0;h&&e>f;f++)if(h[f].apply(l[0],l[1])===!1&&a.stopOnFalse){c=!1;break}b=!1,h&&(i?i.length&&j(i.shift()):c?h=[]:k.disable())},k={add:function(){if(h){var d=h.length;!function f(b){m.each(b,function(b,c){var d=m.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),b?e=h.length:c&&(g=d,j(c))}return this},remove:function(){return h&&m.each(arguments,function(a,c){var d;while((d=m.inArray(c,h,d))>-1)h.splice(d,1),b&&(e>=d&&e--,f>=d&&f--)}),this},has:function(a){return a?m.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],e=0,this},disable:function(){return h=i=c=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,c||k.disable(),this},locked:function(){return!i},fireWith:function(a,c){return!h||d&&!i||(c=c||[],c=[a,c.slice?c.slice():c],b?i.push(c):j(c)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!d}};return k},m.extend({Deferred:function(a){var b=[["resolve","done",m.Callbacks("once memory"),"resolved"],["reject","fail",m.Callbacks("once memory"),"rejected"],["notify","progress",m.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return m.Deferred(function(c){m.each(b,function(b,f){var g=m.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&m.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?m.extend(a,d):d}},e={};return d.pipe=d.then,m.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&m.isFunction(a.promise)?e:0,g=1===f?a:m.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&m.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;m.fn.ready=function(a){return m.ready.promise().done(a),this},m.extend({isReady:!1,readyWait:1,holdReady:function(a){a?m.readyWait++:m.ready(!0)},ready:function(a){if(a===!0?!--m.readyWait:!m.isReady){if(!y.body)return setTimeout(m.ready);m.isReady=!0,a!==!0&&--m.readyWait>0||(H.resolveWith(y,[m]),m.fn.triggerHandler&&(m(y).triggerHandler("ready"),m(y).off("ready")))}}});function I(){y.addEventListener?(y.removeEventListener("DOMContentLoaded",J,!1),a.removeEventListener("load",J,!1)):(y.detachEvent("onreadystatechange",J),a.detachEvent("onload",J))}function J(){(y.addEventListener||"load"===event.type||"complete"===y.readyState)&&(I(),m.ready())}m.ready.promise=function(b){if(!H)if(H=m.Deferred(),"complete"===y.readyState)setTimeout(m.ready);else if(y.addEventListener)y.addEventListener("DOMContentLoaded",J,!1),a.addEventListener("load",J,!1);else{y.attachEvent("onreadystatechange",J),a.attachEvent("onload",J);var c=!1;try{c=null==a.frameElement&&y.documentElement}catch(d){}c&&c.doScroll&&!function e(){if(!m.isReady){try{c.doScroll("left")}catch(a){return setTimeout(e,50)}I(),m.ready()}}()}return H.promise(b)};var K="undefined",L;for(L in m(k))break;k.ownLast="0"!==L,k.inlineBlockNeedsLayout=!1,m(function(){var a,b,c,d;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",k.inlineBlockNeedsLayout=a=3===b.offsetWidth,a&&(c.style.zoom=1)),c.removeChild(d))}),function(){var a=y.createElement("div");if(null==k.deleteExpando){k.deleteExpando=!0;try{delete a.test}catch(b){k.deleteExpando=!1}}a=null}(),m.acceptData=function(a){var b=m.noData[(a.nodeName+" ").toLowerCase()],c=+a.nodeType||1;return 1!==c&&9!==c?!1:!b||b!==!0&&a.getAttribute("classid")===b};var M=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,N=/([A-Z])/g;function O(a,b,c){if(void 0===c&&1===a.nodeType){var d="data-"+b.replace(N,"-$1").toLowerCase();if(c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:M.test(c)?m.parseJSON(c):c}catch(e){}m.data(a,b,c)}else c=void 0}return c}function P(a){var b;for(b in a)if(("data"!==b||!m.isEmptyObject(a[b]))&&"toJSON"!==b)return!1;return!0}function Q(a,b,d,e){if(m.acceptData(a)){var f,g,h=m.expando,i=a.nodeType,j=i?m.cache:a,k=i?a[h]:a[h]&&h;
if(k&&j[k]&&(e||j[k].data)||void 0!==d||"string"!=typeof b)return k||(k=i?a[h]=c.pop()||m.guid++:h),j[k]||(j[k]=i?{}:{toJSON:m.noop}),("object"==typeof b||"function"==typeof b)&&(e?j[k]=m.extend(j[k],b):j[k].data=m.extend(j[k].data,b)),g=j[k],e||(g.data||(g.data={}),g=g.data),void 0!==d&&(g[m.camelCase(b)]=d),"string"==typeof b?(f=g[b],null==f&&(f=g[m.camelCase(b)])):f=g,f}}function R(a,b,c){if(m.acceptData(a)){var d,e,f=a.nodeType,g=f?m.cache:a,h=f?a[m.expando]:m.expando;if(g[h]){if(b&&(d=c?g[h]:g[h].data)){m.isArray(b)?b=b.concat(m.map(b,m.camelCase)):b in d?b=[b]:(b=m.camelCase(b),b=b in d?[b]:b.split(" ")),e=b.length;while(e--)delete d[b[e]];if(c?!P(d):!m.isEmptyObject(d))return}(c||(delete g[h].data,P(g[h])))&&(f?m.cleanData([a],!0):k.deleteExpando||g!=g.window?delete g[h]:g[h]=null)}}}m.extend({cache:{},noData:{"applet ":!0,"embed ":!0,"object ":"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},hasData:function(a){return a=a.nodeType?m.cache[a[m.expando]]:a[m.expando],!!a&&!P(a)},data:function(a,b,c){return Q(a,b,c)},removeData:function(a,b){return R(a,b)},_data:function(a,b,c){return Q(a,b,c,!0)},_removeData:function(a,b){return R(a,b,!0)}}),m.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=m.data(f),1===f.nodeType&&!m._data(f,"parsedAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=m.camelCase(d.slice(5)),O(f,d,e[d])));m._data(f,"parsedAttrs",!0)}return e}return"object"==typeof a?this.each(function(){m.data(this,a)}):arguments.length>1?this.each(function(){m.data(this,a,b)}):f?O(f,a,m.data(f,a)):void 0},removeData:function(a){return this.each(function(){m.removeData(this,a)})}}),m.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=m._data(a,b),c&&(!d||m.isArray(c)?d=m._data(a,b,m.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=m.queue(a,b),d=c.length,e=c.shift(),f=m._queueHooks(a,b),g=function(){m.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return m._data(a,c)||m._data(a,c,{empty:m.Callbacks("once memory").add(function(){m._removeData(a,b+"queue"),m._removeData(a,c)})})}}),m.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?m.queue(this[0],a):void 0===b?this:this.each(function(){var c=m.queue(this,a,b);m._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&m.dequeue(this,a)})},dequeue:function(a){return this.each(function(){m.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=m.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=m._data(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=["Top","Right","Bottom","Left"],U=function(a,b){return a=b||a,"none"===m.css(a,"display")||!m.contains(a.ownerDocument,a)},V=m.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===m.type(c)){e=!0;for(h in c)m.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,m.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(m(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},W=/^(?:checkbox|radio)$/i;!function(){var a=y.createElement("input"),b=y.createElement("div"),c=y.createDocumentFragment();if(b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",k.leadingWhitespace=3===b.firstChild.nodeType,k.tbody=!b.getElementsByTagName("tbody").length,k.htmlSerialize=!!b.getElementsByTagName("link").length,k.html5Clone="<:nav></:nav>"!==y.createElement("nav").cloneNode(!0).outerHTML,a.type="checkbox",a.checked=!0,c.appendChild(a),k.appendChecked=a.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue,c.appendChild(b),b.innerHTML="<input type='radio' checked='checked' name='t'/>",k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,k.noCloneEvent=!0,b.attachEvent&&(b.attachEvent("onclick",function(){k.noCloneEvent=!1}),b.cloneNode(!0).click()),null==k.deleteExpando){k.deleteExpando=!0;try{delete b.test}catch(d){k.deleteExpando=!1}}}(),function(){var b,c,d=y.createElement("div");for(b in{submit:!0,change:!0,focusin:!0})c="on"+b,(k[b+"Bubbles"]=c in a)||(d.setAttribute(c,"t"),k[b+"Bubbles"]=d.attributes[c].expando===!1);d=null}();var X=/^(?:input|select|textarea)$/i,Y=/^key/,Z=/^(?:mouse|pointer|contextmenu)|click/,$=/^(?:focusinfocus|focusoutblur)$/,_=/^([^.]*)(?:\.(.+)|)$/;function ab(){return!0}function bb(){return!1}function cb(){try{return y.activeElement}catch(a){}}m.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m._data(a);if(r){c.handler&&(i=c,c=i.handler,e=i.selector),c.guid||(c.guid=m.guid++),(g=r.events)||(g=r.events={}),(k=r.handle)||(k=r.handle=function(a){return typeof m===K||a&&m.event.triggered===a.type?void 0:m.event.dispatch.apply(k.elem,arguments)},k.elem=a),b=(b||"").match(E)||[""],h=b.length;while(h--)f=_.exec(b[h])||[],o=q=f[1],p=(f[2]||"").split(".").sort(),o&&(j=m.event.special[o]||{},o=(e?j.delegateType:j.bindType)||o,j=m.event.special[o]||{},l=m.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&m.expr.match.needsContext.test(e),namespace:p.join(".")},i),(n=g[o])||(n=g[o]=[],n.delegateCount=0,j.setup&&j.setup.call(a,d,p,k)!==!1||(a.addEventListener?a.addEventListener(o,k,!1):a.attachEvent&&a.attachEvent("on"+o,k))),j.add&&(j.add.call(a,l),l.handler.guid||(l.handler.guid=c.guid)),e?n.splice(n.delegateCount++,0,l):n.push(l),m.event.global[o]=!0);a=null}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,n,o,p,q,r=m.hasData(a)&&m._data(a);if(r&&(k=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=_.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=m.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,n=k[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),i=f=n.length;while(f--)g=n[f],!e&&q!==g.origType||c&&c.guid!==g.guid||h&&!h.test(g.namespace)||d&&d!==g.selector&&("**"!==d||!g.selector)||(n.splice(f,1),g.selector&&n.delegateCount--,l.remove&&l.remove.call(a,g));i&&!n.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||m.removeEvent(a,o,r.handle),delete k[o])}else for(o in k)m.event.remove(a,o+b[j],c,d,!0);m.isEmptyObject(k)&&(delete r.handle,m._removeData(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,l,n,o=[d||y],p=j.call(b,"type")?b.type:b,q=j.call(b,"namespace")?b.namespace.split("."):[];if(h=l=d=d||y,3!==d.nodeType&&8!==d.nodeType&&!$.test(p+m.event.triggered)&&(p.indexOf(".")>=0&&(q=p.split("."),p=q.shift(),q.sort()),g=p.indexOf(":")<0&&"on"+p,b=b[m.expando]?b:new m.Event(p,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=q.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:m.makeArray(c,[b]),k=m.event.special[p]||{},e||!k.trigger||k.trigger.apply(d,c)!==!1)){if(!e&&!k.noBubble&&!m.isWindow(d)){for(i=k.delegateType||p,$.test(i+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),l=h;l===(d.ownerDocument||y)&&o.push(l.defaultView||l.parentWindow||a)}n=0;while((h=o[n++])&&!b.isPropagationStopped())b.type=n>1?i:k.bindType||p,f=(m._data(h,"events")||{})[b.type]&&m._data(h,"handle"),f&&f.apply(h,c),f=g&&h[g],f&&f.apply&&m.acceptData(h)&&(b.result=f.apply(h,c),b.result===!1&&b.preventDefault());if(b.type=p,!e&&!b.isDefaultPrevented()&&(!k._default||k._default.apply(o.pop(),c)===!1)&&m.acceptData(d)&&g&&d[p]&&!m.isWindow(d)){l=d[g],l&&(d[g]=null),m.event.triggered=p;try{d[p]()}catch(r){}m.event.triggered=void 0,l&&(d[g]=l)}return b.result}},dispatch:function(a){a=m.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(m._data(this,"events")||{})[a.type]||[],k=m.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=m.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,g=0;while((e=f.handlers[g++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(e.namespace))&&(a.handleObj=e,a.data=e.data,c=((m.event.special[e.origType]||{}).handle||e.handler).apply(f.elem,i),void 0!==c&&(a.result=c)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!=this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(e=[],f=0;h>f;f++)d=b[f],c=d.selector+" ",void 0===e[c]&&(e[c]=d.needsContext?m(c,this).index(i)>=0:m.find(c,this,null,[i]).length),e[c]&&e.push(d);e.length&&g.push({elem:i,handlers:e})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},fix:function(a){if(a[m.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=Z.test(e)?this.mouseHooks:Y.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new m.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=f.srcElement||y),3===a.target.nodeType&&(a.target=a.target.parentNode),a.metaKey=!!a.metaKey,g.filter?g.filter(a,f):a},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button,g=b.fromElement;return null==a.pageX&&null!=b.clientX&&(d=a.target.ownerDocument||y,e=d.documentElement,c=d.body,a.pageX=b.clientX+(e&&e.scrollLeft||c&&c.scrollLeft||0)-(e&&e.clientLeft||c&&c.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||c&&c.scrollTop||0)-(e&&e.clientTop||c&&c.clientTop||0)),!a.relatedTarget&&g&&(a.relatedTarget=g===a.target?b.toElement:g),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==cb()&&this.focus)try{return this.focus(),!1}catch(a){}},delegateType:"focusin"},blur:{trigger:function(){return this===cb()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return m.nodeName(this,"input")&&"checkbox"===this.type&&this.click?(this.click(),!1):void 0},_default:function(a){return m.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=m.extend(new m.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?m.event.trigger(e,null,b):m.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},m.removeEvent=y.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){var d="on"+b;a.detachEvent&&(typeof a[d]===K&&(a[d]=null),a.detachEvent(d,c))},m.Event=function(a,b){return this instanceof m.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ab:bb):this.type=a,b&&m.extend(this,b),this.timeStamp=a&&a.timeStamp||m.now(),void(this[m.expando]=!0)):new m.Event(a,b)},m.Event.prototype={isDefaultPrevented:bb,isPropagationStopped:bb,isImmediatePropagationStopped:bb,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ab,a&&(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ab,a&&(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ab,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},m.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){m.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!m.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.submitBubbles||(m.event.special.submit={setup:function(){return m.nodeName(this,"form")?!1:void m.event.add(this,"click._submit keypress._submit",function(a){var b=a.target,c=m.nodeName(b,"input")||m.nodeName(b,"button")?b.form:void 0;c&&!m._data(c,"submitBubbles")&&(m.event.add(c,"submit._submit",function(a){a._submit_bubble=!0}),m._data(c,"submitBubbles",!0))})},postDispatch:function(a){a._submit_bubble&&(delete a._submit_bubble,this.parentNode&&!a.isTrigger&&m.event.simulate("submit",this.parentNode,a,!0))},teardown:function(){return m.nodeName(this,"form")?!1:void m.event.remove(this,"._submit")}}),k.changeBubbles||(m.event.special.change={setup:function(){return X.test(this.nodeName)?(("checkbox"===this.type||"radio"===this.type)&&(m.event.add(this,"propertychange._change",function(a){"checked"===a.originalEvent.propertyName&&(this._just_changed=!0)}),m.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1),m.event.simulate("change",this,a,!0)})),!1):void m.event.add(this,"beforeactivate._change",function(a){var b=a.target;X.test(b.nodeName)&&!m._data(b,"changeBubbles")&&(m.event.add(b,"change._change",function(a){!this.parentNode||a.isSimulated||a.isTrigger||m.event.simulate("change",this.parentNode,a,!0)}),m._data(b,"changeBubbles",!0))})},handle:function(a){var b=a.target;return this!==b||a.isSimulated||a.isTrigger||"radio"!==b.type&&"checkbox"!==b.type?a.handleObj.handler.apply(this,arguments):void 0},teardown:function(){return m.event.remove(this,"._change"),!X.test(this.nodeName)}}),k.focusinBubbles||m.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){m.event.simulate(b,a.target,m.event.fix(a),!0)};m.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=m._data(d,b);e||d.addEventListener(a,c,!0),m._data(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=m._data(d,b)-1;e?m._data(d,b,e):(d.removeEventListener(a,c,!0),m._removeData(d,b))}}}),m.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(f in a)this.on(f,b,c,a[f],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=bb;else if(!d)return this;return 1===e&&(g=d,d=function(a){return m().off(a),g.apply(this,arguments)},d.guid=g.guid||(g.guid=m.guid++)),this.each(function(){m.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,m(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=bb),this.each(function(){m.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){m.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?m.event.trigger(a,b,c,!0):void 0}});function db(a){var b=eb.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}var eb="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",fb=/ jQuery\d+="(?:null|\d+)"/g,gb=new RegExp("<(?:"+eb+")[\\s/>]","i"),hb=/^\s+/,ib=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jb=/<([\w:]+)/,kb=/<tbody/i,lb=/<|&#?\w+;/,mb=/<(?:script|style|link)/i,nb=/checked\s*(?:[^=]|=\s*.checked.)/i,ob=/^$|\/(?:java|ecma)script/i,pb=/^true\/(.*)/,qb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,rb={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],area:[1,"<map>","</map>"],param:[1,"<object>","</object>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:k.htmlSerialize?[0,"",""]:[1,"X<div>","</div>"]},sb=db(y),tb=sb.appendChild(y.createElement("div"));rb.optgroup=rb.option,rb.tbody=rb.tfoot=rb.colgroup=rb.caption=rb.thead,rb.th=rb.td;function ub(a,b){var c,d,e=0,f=typeof a.getElementsByTagName!==K?a.getElementsByTagName(b||"*"):typeof a.querySelectorAll!==K?a.querySelectorAll(b||"*"):void 0;if(!f)for(f=[],c=a.childNodes||a;null!=(d=c[e]);e++)!b||m.nodeName(d,b)?f.push(d):m.merge(f,ub(d,b));return void 0===b||b&&m.nodeName(a,b)?m.merge([a],f):f}function vb(a){W.test(a.type)&&(a.defaultChecked=a.checked)}function wb(a,b){return m.nodeName(a,"table")&&m.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function xb(a){return a.type=(null!==m.find.attr(a,"type"))+"/"+a.type,a}function yb(a){var b=pb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function zb(a,b){for(var c,d=0;null!=(c=a[d]);d++)m._data(c,"globalEval",!b||m._data(b[d],"globalEval"))}function Ab(a,b){if(1===b.nodeType&&m.hasData(a)){var c,d,e,f=m._data(a),g=m._data(b,f),h=f.events;if(h){delete g.handle,g.events={};for(c in h)for(d=0,e=h[c].length;e>d;d++)m.event.add(b,c,h[c][d])}g.data&&(g.data=m.extend({},g.data))}}function Bb(a,b){var c,d,e;if(1===b.nodeType){if(c=b.nodeName.toLowerCase(),!k.noCloneEvent&&b[m.expando]){e=m._data(b);for(d in e.events)m.removeEvent(b,d,e.handle);b.removeAttribute(m.expando)}"script"===c&&b.text!==a.text?(xb(b).text=a.text,yb(b)):"object"===c?(b.parentNode&&(b.outerHTML=a.outerHTML),k.html5Clone&&a.innerHTML&&!m.trim(b.innerHTML)&&(b.innerHTML=a.innerHTML)):"input"===c&&W.test(a.type)?(b.defaultChecked=b.checked=a.checked,b.value!==a.value&&(b.value=a.value)):"option"===c?b.defaultSelected=b.selected=a.defaultSelected:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}}m.extend({clone:function(a,b,c){var d,e,f,g,h,i=m.contains(a.ownerDocument,a);if(k.html5Clone||m.isXMLDoc(a)||!gb.test("<"+a.nodeName+">")?f=a.cloneNode(!0):(tb.innerHTML=a.outerHTML,tb.removeChild(f=tb.firstChild)),!(k.noCloneEvent&&k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||m.isXMLDoc(a)))for(d=ub(f),h=ub(a),g=0;null!=(e=h[g]);++g)d[g]&&Bb(e,d[g]);if(b)if(c)for(h=h||ub(a),d=d||ub(f),g=0;null!=(e=h[g]);g++)Ab(e,d[g]);else Ab(a,f);return d=ub(f,"script"),d.length>0&&zb(d,!i&&ub(a,"script")),d=h=e=null,f},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,l,n=a.length,o=db(b),p=[],q=0;n>q;q++)if(f=a[q],f||0===f)if("object"===m.type(f))m.merge(p,f.nodeType?[f]:f);else if(lb.test(f)){h=h||o.appendChild(b.createElement("div")),i=(jb.exec(f)||["",""])[1].toLowerCase(),l=rb[i]||rb._default,h.innerHTML=l[1]+f.replace(ib,"<$1></$2>")+l[2],e=l[0];while(e--)h=h.lastChild;if(!k.leadingWhitespace&&hb.test(f)&&p.push(b.createTextNode(hb.exec(f)[0])),!k.tbody){f="table"!==i||kb.test(f)?"<table>"!==l[1]||kb.test(f)?0:h:h.firstChild,e=f&&f.childNodes.length;while(e--)m.nodeName(j=f.childNodes[e],"tbody")&&!j.childNodes.length&&f.removeChild(j)}m.merge(p,h.childNodes),h.textContent="";while(h.firstChild)h.removeChild(h.firstChild);h=o.lastChild}else p.push(b.createTextNode(f));h&&o.removeChild(h),k.appendChecked||m.grep(ub(p,"input"),vb),q=0;while(f=p[q++])if((!d||-1===m.inArray(f,d))&&(g=m.contains(f.ownerDocument,f),h=ub(o.appendChild(f),"script"),g&&zb(h),c)){e=0;while(f=h[e++])ob.test(f.type||"")&&c.push(f)}return h=null,o},cleanData:function(a,b){for(var d,e,f,g,h=0,i=m.expando,j=m.cache,l=k.deleteExpando,n=m.event.special;null!=(d=a[h]);h++)if((b||m.acceptData(d))&&(f=d[i],g=f&&j[f])){if(g.events)for(e in g.events)n[e]?m.event.remove(d,e):m.removeEvent(d,e,g.handle);j[f]&&(delete j[f],l?delete d[i]:typeof d.removeAttribute!==K?d.removeAttribute(i):d[i]=null,c.push(f))}}}),m.fn.extend({text:function(a){return V(this,function(a){return void 0===a?m.text(this):this.empty().append((this[0]&&this[0].ownerDocument||y).createTextNode(a))},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=wb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?m.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||m.cleanData(ub(c)),c.parentNode&&(b&&m.contains(c.ownerDocument,c)&&zb(ub(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&m.cleanData(ub(a,!1));while(a.firstChild)a.removeChild(a.firstChild);a.options&&m.nodeName(a,"select")&&(a.options.length=0)}return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return m.clone(this,a,b)})},html:function(a){return V(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a)return 1===b.nodeType?b.innerHTML.replace(fb,""):void 0;if(!("string"!=typeof a||mb.test(a)||!k.htmlSerialize&&gb.test(a)||!k.leadingWhitespace&&hb.test(a)||rb[(jb.exec(a)||["",""])[1].toLowerCase()])){a=a.replace(ib,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(m.cleanData(ub(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,m.cleanData(ub(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,n=this,o=l-1,p=a[0],q=m.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&nb.test(p))return this.each(function(c){var d=n.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(i=m.buildFragment(a,this[0].ownerDocument,!1,this),c=i.firstChild,1===i.childNodes.length&&(i=c),c)){for(g=m.map(ub(i,"script"),xb),f=g.length;l>j;j++)d=i,j!==o&&(d=m.clone(d,!0,!0),f&&m.merge(g,ub(d,"script"))),b.call(this[j],d,j);if(f)for(h=g[g.length-1].ownerDocument,m.map(g,yb),j=0;f>j;j++)d=g[j],ob.test(d.type||"")&&!m._data(d,"globalEval")&&m.contains(h,d)&&(d.src?m._evalUrl&&m._evalUrl(d.src):m.globalEval((d.text||d.textContent||d.innerHTML||"").replace(qb,"")));i=c=null}return this}}),m.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){m.fn[a]=function(a){for(var c,d=0,e=[],g=m(a),h=g.length-1;h>=d;d++)c=d===h?this:this.clone(!0),m(g[d])[b](c),f.apply(e,c.get());return this.pushStack(e)}});var Cb,Db={};function Eb(b,c){var d,e=m(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:m.css(e[0],"display");return e.detach(),f}function Fb(a){var b=y,c=Db[a];return c||(c=Eb(a,b),"none"!==c&&c||(Cb=(Cb||m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=(Cb[0].contentWindow||Cb[0].contentDocument).document,b.write(),b.close(),c=Eb(a,b),Cb.detach()),Db[a]=c),c}!function(){var a;k.shrinkWrapBlocks=function(){if(null!=a)return a;a=!1;var b,c,d;return c=y.getElementsByTagName("body")[0],c&&c.style?(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),typeof b.style.zoom!==K&&(b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",b.appendChild(y.createElement("div")).style.width="5px",a=3!==b.offsetWidth),c.removeChild(d),a):void 0}}();var Gb=/^margin/,Hb=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ib,Jb,Kb=/^(top|right|bottom|left)$/;a.getComputedStyle?(Ib=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c.getPropertyValue(b)||c[b]:void 0,c&&(""!==g||m.contains(a.ownerDocument,a)||(g=m.style(a,b)),Hb.test(g)&&Gb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0===g?g:g+""}):y.documentElement.currentStyle&&(Ib=function(a){return a.currentStyle},Jb=function(a,b,c){var d,e,f,g,h=a.style;return c=c||Ib(a),g=c?c[b]:void 0,null==g&&h&&h[b]&&(g=h[b]),Hb.test(g)&&!Kb.test(b)&&(d=h.left,e=a.runtimeStyle,f=e&&e.left,f&&(e.left=a.currentStyle.left),h.left="fontSize"===b?"1em":g,g=h.pixelLeft+"px",h.left=d,f&&(e.left=f)),void 0===g?g:g+""||"auto"});function Lb(a,b){return{get:function(){var c=a();if(null!=c)return c?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d,e,f,g,h;if(b=y.createElement("div"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=d&&d.style){c.cssText="float:left;opacity:.5",k.opacity="0.5"===c.opacity,k.cssFloat=!!c.cssFloat,b.style.backgroundClip="content-box",b.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===b.style.backgroundClip,k.boxSizing=""===c.boxSizing||""===c.MozBoxSizing||""===c.WebkitBoxSizing,m.extend(k,{reliableHiddenOffsets:function(){return null==g&&i(),g},boxSizingReliable:function(){return null==f&&i(),f},pixelPosition:function(){return null==e&&i(),e},reliableMarginRight:function(){return null==h&&i(),h}});function i(){var b,c,d,i;c=y.getElementsByTagName("body")[0],c&&c.style&&(b=y.createElement("div"),d=y.createElement("div"),d.style.cssText="position:absolute;border:0;width:0;height:0;top:0;left:-9999px",c.appendChild(d).appendChild(b),b.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",e=f=!1,h=!0,a.getComputedStyle&&(e="1%"!==(a.getComputedStyle(b,null)||{}).top,f="4px"===(a.getComputedStyle(b,null)||{width:"4px"}).width,i=b.appendChild(y.createElement("div")),i.style.cssText=b.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",i.style.marginRight=i.style.width="0",b.style.width="1px",h=!parseFloat((a.getComputedStyle(i,null)||{}).marginRight)),b.innerHTML="<table><tr><td></td><td>t</td></tr></table>",i=b.getElementsByTagName("td"),i[0].style.cssText="margin:0;border:0;padding:0;display:none",g=0===i[0].offsetHeight,g&&(i[0].style.display="",i[1].style.display="none",g=0===i[0].offsetHeight),c.removeChild(d))}}}(),m.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Mb=/alpha\([^)]*\)/i,Nb=/opacity\s*=\s*([^)]*)/,Ob=/^(none|table(?!-c[ea]).+)/,Pb=new RegExp("^("+S+")(.*)$","i"),Qb=new RegExp("^([+-])=("+S+")","i"),Rb={position:"absolute",visibility:"hidden",display:"block"},Sb={letterSpacing:"0",fontWeight:"400"},Tb=["Webkit","O","Moz","ms"];function Ub(a,b){if(b in a)return b;var c=b.charAt(0).toUpperCase()+b.slice(1),d=b,e=Tb.length;while(e--)if(b=Tb[e]+c,b in a)return b;return d}function Vb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=m._data(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&U(d)&&(f[g]=m._data(d,"olddisplay",Fb(d.nodeName)))):(e=U(d),(c&&"none"!==c||!e)&&m._data(d,"olddisplay",e?c:m.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function Wb(a,b,c){var d=Pb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Xb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=m.css(a,c+T[f],!0,e)),d?("content"===c&&(g-=m.css(a,"padding"+T[f],!0,e)),"margin"!==c&&(g-=m.css(a,"border"+T[f]+"Width",!0,e))):(g+=m.css(a,"padding"+T[f],!0,e),"padding"!==c&&(g+=m.css(a,"border"+T[f]+"Width",!0,e)));return g}function Yb(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ib(a),g=k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Jb(a,b,f),(0>e||null==e)&&(e=a.style[b]),Hb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Xb(a,b,c||(g?"border":"content"),d,f)+"px"}m.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Jb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":k.cssFloat?"cssFloat":"styleFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=m.camelCase(b),i=a.style;if(b=m.cssProps[h]||(m.cssProps[h]=Ub(i,h)),g=m.cssHooks[b]||m.cssHooks[h],void 0===c)return g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b];if(f=typeof c,"string"===f&&(e=Qb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(m.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||m.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),!(g&&"set"in g&&void 0===(c=g.set(a,c,d)))))try{i[b]=c}catch(j){}}},css:function(a,b,c,d){var e,f,g,h=m.camelCase(b);return b=m.cssProps[h]||(m.cssProps[h]=Ub(a.style,h)),g=m.cssHooks[b]||m.cssHooks[h],g&&"get"in g&&(f=g.get(a,!0,c)),void 0===f&&(f=Jb(a,b,d)),"normal"===f&&b in Sb&&(f=Sb[b]),""===c||c?(e=parseFloat(f),c===!0||m.isNumeric(e)?e||0:f):f}}),m.each(["height","width"],function(a,b){m.cssHooks[b]={get:function(a,c,d){return c?Ob.test(m.css(a,"display"))&&0===a.offsetWidth?m.swap(a,Rb,function(){return Yb(a,b,d)}):Yb(a,b,d):void 0},set:function(a,c,d){var e=d&&Ib(a);return Wb(a,c,d?Xb(a,b,d,k.boxSizing&&"border-box"===m.css(a,"boxSizing",!1,e),e):0)}}}),k.opacity||(m.cssHooks.opacity={get:function(a,b){return Nb.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=m.isNumeric(b)?"alpha(opacity="+100*b+")":"",f=d&&d.filter||c.filter||"";c.zoom=1,(b>=1||""===b)&&""===m.trim(f.replace(Mb,""))&&c.removeAttribute&&(c.removeAttribute("filter"),""===b||d&&!d.filter)||(c.filter=Mb.test(f)?f.replace(Mb,e):f+" "+e)}}),m.cssHooks.marginRight=Lb(k.reliableMarginRight,function(a,b){return b?m.swap(a,{display:"inline-block"},Jb,[a,"marginRight"]):void 0}),m.each({margin:"",padding:"",border:"Width"},function(a,b){m.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+T[d]+b]=f[d]||f[d-2]||f[0];return e}},Gb.test(a)||(m.cssHooks[a+b].set=Wb)}),m.fn.extend({css:function(a,b){return V(this,function(a,b,c){var d,e,f={},g=0;if(m.isArray(b)){for(d=Ib(a),e=b.length;e>g;g++)f[b[g]]=m.css(a,b[g],!1,d);return f}return void 0!==c?m.style(a,b,c):m.css(a,b)},a,b,arguments.length>1)},show:function(){return Vb(this,!0)},hide:function(){return Vb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){U(this)?m(this).show():m(this).hide()})}});function Zb(a,b,c,d,e){return new Zb.prototype.init(a,b,c,d,e)}m.Tween=Zb,Zb.prototype={constructor:Zb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(m.cssNumber[c]?"":"px")
},cur:function(){var a=Zb.propHooks[this.prop];return a&&a.get?a.get(this):Zb.propHooks._default.get(this)},run:function(a){var b,c=Zb.propHooks[this.prop];return this.pos=b=this.options.duration?m.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Zb.propHooks._default.set(this),this}},Zb.prototype.init.prototype=Zb.prototype,Zb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=m.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){m.fx.step[a.prop]?m.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[m.cssProps[a.prop]]||m.cssHooks[a.prop])?m.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Zb.propHooks.scrollTop=Zb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},m.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},m.fx=Zb.prototype.init,m.fx.step={};var $b,_b,ac=/^(?:toggle|show|hide)$/,bc=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),cc=/queueHooks$/,dc=[ic],ec={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=bc.exec(b),f=e&&e[3]||(m.cssNumber[a]?"":"px"),g=(m.cssNumber[a]||"px"!==f&&+d)&&bc.exec(m.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,m.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function fc(){return setTimeout(function(){$b=void 0}),$b=m.now()}function gc(a,b){var c,d={height:a},e=0;for(b=b?1:0;4>e;e+=2-b)c=T[e],d["margin"+c]=d["padding"+c]=a;return b&&(d.opacity=d.width=a),d}function hc(a,b,c){for(var d,e=(ec[b]||[]).concat(ec["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function ic(a,b,c){var d,e,f,g,h,i,j,l,n=this,o={},p=a.style,q=a.nodeType&&U(a),r=m._data(a,"fxshow");c.queue||(h=m._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,n.always(function(){n.always(function(){h.unqueued--,m.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[p.overflow,p.overflowX,p.overflowY],j=m.css(a,"display"),l="none"===j?m._data(a,"olddisplay")||Fb(a.nodeName):j,"inline"===l&&"none"===m.css(a,"float")&&(k.inlineBlockNeedsLayout&&"inline"!==Fb(a.nodeName)?p.zoom=1:p.display="inline-block")),c.overflow&&(p.overflow="hidden",k.shrinkWrapBlocks()||n.always(function(){p.overflow=c.overflow[0],p.overflowX=c.overflow[1],p.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],ac.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(q?"hide":"show")){if("show"!==e||!r||void 0===r[d])continue;q=!0}o[d]=r&&r[d]||m.style(a,d)}else j=void 0;if(m.isEmptyObject(o))"inline"===("none"===j?Fb(a.nodeName):j)&&(p.display=j);else{r?"hidden"in r&&(q=r.hidden):r=m._data(a,"fxshow",{}),f&&(r.hidden=!q),q?m(a).show():n.done(function(){m(a).hide()}),n.done(function(){var b;m._removeData(a,"fxshow");for(b in o)m.style(a,b,o[b])});for(d in o)g=hc(q?r[d]:0,d,n),d in r||(r[d]=g.start,q&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function jc(a,b){var c,d,e,f,g;for(c in a)if(d=m.camelCase(c),e=b[d],f=a[c],m.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=m.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kc(a,b,c){var d,e,f=0,g=dc.length,h=m.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=$b||fc(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:m.extend({},b),opts:m.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:$b||fc(),duration:c.duration,tweens:[],createTween:function(b,c){var d=m.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jc(k,j.opts.specialEasing);g>f;f++)if(d=dc[f].call(j,a,k,j.opts))return d;return m.map(k,hc,j),m.isFunction(j.opts.start)&&j.opts.start.call(a,j),m.fx.timer(m.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}m.Animation=m.extend(kc,{tweener:function(a,b){m.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],ec[c]=ec[c]||[],ec[c].unshift(b)},prefilter:function(a,b){b?dc.unshift(a):dc.push(a)}}),m.speed=function(a,b,c){var d=a&&"object"==typeof a?m.extend({},a):{complete:c||!c&&b||m.isFunction(a)&&a,duration:a,easing:c&&b||b&&!m.isFunction(b)&&b};return d.duration=m.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in m.fx.speeds?m.fx.speeds[d.duration]:m.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){m.isFunction(d.old)&&d.old.call(this),d.queue&&m.dequeue(this,d.queue)},d},m.fn.extend({fadeTo:function(a,b,c,d){return this.filter(U).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=m.isEmptyObject(a),f=m.speed(b,c,d),g=function(){var b=kc(this,m.extend({},a),f);(e||m._data(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=m.timers,g=m._data(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&cc.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&m.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=m._data(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=m.timers,g=d?d.length:0;for(c.finish=!0,m.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),m.each(["toggle","show","hide"],function(a,b){var c=m.fn[b];m.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gc(b,!0),a,d,e)}}),m.each({slideDown:gc("show"),slideUp:gc("hide"),slideToggle:gc("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){m.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),m.timers=[],m.fx.tick=function(){var a,b=m.timers,c=0;for($b=m.now();c<b.length;c++)a=b[c],a()||b[c]!==a||b.splice(c--,1);b.length||m.fx.stop(),$b=void 0},m.fx.timer=function(a){m.timers.push(a),a()?m.fx.start():m.timers.pop()},m.fx.interval=13,m.fx.start=function(){_b||(_b=setInterval(m.fx.tick,m.fx.interval))},m.fx.stop=function(){clearInterval(_b),_b=null},m.fx.speeds={slow:600,fast:200,_default:400},m.fn.delay=function(a,b){return a=m.fx?m.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a,b,c,d,e;b=y.createElement("div"),b.setAttribute("className","t"),b.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",d=b.getElementsByTagName("a")[0],c=y.createElement("select"),e=c.appendChild(y.createElement("option")),a=b.getElementsByTagName("input")[0],d.style.cssText="top:1px",k.getSetAttribute="t"!==b.className,k.style=/top/.test(d.getAttribute("style")),k.hrefNormalized="/a"===d.getAttribute("href"),k.checkOn=!!a.value,k.optSelected=e.selected,k.enctype=!!y.createElement("form").enctype,c.disabled=!0,k.optDisabled=!e.disabled,a=y.createElement("input"),a.setAttribute("value",""),k.input=""===a.getAttribute("value"),a.value="t",a.setAttribute("type","radio"),k.radioValue="t"===a.value}();var lc=/\r/g;m.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=m.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,m(this).val()):a,null==e?e="":"number"==typeof e?e+="":m.isArray(e)&&(e=m.map(e,function(a){return null==a?"":a+""})),b=m.valHooks[this.type]||m.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=m.valHooks[e.type]||m.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(lc,""):null==c?"":c)}}}),m.extend({valHooks:{option:{get:function(a){var b=m.find.attr(a,"value");return null!=b?b:m.trim(m.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&m.nodeName(c.parentNode,"optgroup"))){if(b=m(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=m.makeArray(b),g=e.length;while(g--)if(d=e[g],m.inArray(m.valHooks.option.get(d),f)>=0)try{d.selected=c=!0}catch(h){d.scrollHeight}else d.selected=!1;return c||(a.selectedIndex=-1),e}}}}),m.each(["radio","checkbox"],function(){m.valHooks[this]={set:function(a,b){return m.isArray(b)?a.checked=m.inArray(m(a).val(),b)>=0:void 0}},k.checkOn||(m.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var mc,nc,oc=m.expr.attrHandle,pc=/^(?:checked|selected)$/i,qc=k.getSetAttribute,rc=k.input;m.fn.extend({attr:function(a,b){return V(this,m.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){m.removeAttr(this,a)})}}),m.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===K?m.prop(a,b,c):(1===f&&m.isXMLDoc(a)||(b=b.toLowerCase(),d=m.attrHooks[b]||(m.expr.match.bool.test(b)?nc:mc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=m.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void m.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=m.propFix[c]||c,m.expr.match.bool.test(c)?rc&&qc||!pc.test(c)?a[d]=!1:a[m.camelCase("default-"+c)]=a[d]=!1:m.attr(a,c,""),a.removeAttribute(qc?c:d)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&m.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),nc={set:function(a,b,c){return b===!1?m.removeAttr(a,c):rc&&qc||!pc.test(c)?a.setAttribute(!qc&&m.propFix[c]||c,c):a[m.camelCase("default-"+c)]=a[c]=!0,c}},m.each(m.expr.match.bool.source.match(/\w+/g),function(a,b){var c=oc[b]||m.find.attr;oc[b]=rc&&qc||!pc.test(b)?function(a,b,d){var e,f;return d||(f=oc[b],oc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,oc[b]=f),e}:function(a,b,c){return c?void 0:a[m.camelCase("default-"+b)]?b.toLowerCase():null}}),rc&&qc||(m.attrHooks.value={set:function(a,b,c){return m.nodeName(a,"input")?void(a.defaultValue=b):mc&&mc.set(a,b,c)}}),qc||(mc={set:function(a,b,c){var d=a.getAttributeNode(c);return d||a.setAttributeNode(d=a.ownerDocument.createAttribute(c)),d.value=b+="","value"===c||b===a.getAttribute(c)?b:void 0}},oc.id=oc.name=oc.coords=function(a,b,c){var d;return c?void 0:(d=a.getAttributeNode(b))&&""!==d.value?d.value:null},m.valHooks.button={get:function(a,b){var c=a.getAttributeNode(b);return c&&c.specified?c.value:void 0},set:mc.set},m.attrHooks.contenteditable={set:function(a,b,c){mc.set(a,""===b?!1:b,c)}},m.each(["width","height"],function(a,b){m.attrHooks[b]={set:function(a,c){return""===c?(a.setAttribute(b,"auto"),c):void 0}}})),k.style||(m.attrHooks.style={get:function(a){return a.style.cssText||void 0},set:function(a,b){return a.style.cssText=b+""}});var sc=/^(?:input|select|textarea|button|object)$/i,tc=/^(?:a|area)$/i;m.fn.extend({prop:function(a,b){return V(this,m.prop,a,b,arguments.length>1)},removeProp:function(a){return a=m.propFix[a]||a,this.each(function(){try{this[a]=void 0,delete this[a]}catch(b){}})}}),m.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!m.isXMLDoc(a),f&&(b=m.propFix[b]||b,e=m.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=m.find.attr(a,"tabindex");return b?parseInt(b,10):sc.test(a.nodeName)||tc.test(a.nodeName)&&a.href?0:-1}}}}),k.hrefNormalized||m.each(["href","src"],function(a,b){m.propHooks[b]={get:function(a){return a.getAttribute(b,4)}}}),k.optSelected||(m.propHooks.selected={get:function(a){var b=a.parentNode;return b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex),null}}),m.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){m.propFix[this.toLowerCase()]=this}),k.enctype||(m.propFix.enctype="encoding");var uc=/[\t\r\n\f]/g;m.fn.extend({addClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j="string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).addClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=m.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0,i=this.length,j=0===arguments.length||"string"==typeof a&&a;if(m.isFunction(a))return this.each(function(b){m(this).removeClass(a.call(this,b,this.className))});if(j)for(b=(a||"").match(E)||[];i>h;h++)if(c=this[h],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(uc," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?m.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(m.isFunction(a)?function(c){m(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=m(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===K||"boolean"===c)&&(this.className&&m._data(this,"__className__",this.className),this.className=this.className||a===!1?"":m._data(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(uc," ").indexOf(b)>=0)return!0;return!1}}),m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){m.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),m.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var vc=m.now(),wc=/\?/,xc=/(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;m.parseJSON=function(b){if(a.JSON&&a.JSON.parse)return a.JSON.parse(b+"");var c,d=null,e=m.trim(b+"");return e&&!m.trim(e.replace(xc,function(a,b,e,f){return c&&b&&(d=0),0===d?a:(c=e||b,d+=!f-!e,"")}))?Function("return "+e)():m.error("Invalid JSON: "+b)},m.parseXML=function(b){var c,d;if(!b||"string"!=typeof b)return null;try{a.DOMParser?(d=new DOMParser,c=d.parseFromString(b,"text/xml")):(c=new ActiveXObject("Microsoft.XMLDOM"),c.async="false",c.loadXML(b))}catch(e){c=void 0}return c&&c.documentElement&&!c.getElementsByTagName("parsererror").length||m.error("Invalid XML: "+b),c};var yc,zc,Ac=/#.*$/,Bc=/([?&])_=[^&]*/,Cc=/^(.*?):[ \t]*([^\r\n]*)\r?$/gm,Dc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Ec=/^(?:GET|HEAD)$/,Fc=/^\/\//,Gc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,Hc={},Ic={},Jc="*/".concat("*");try{zc=location.href}catch(Kc){zc=y.createElement("a"),zc.href="",zc=zc.href}yc=Gc.exec(zc.toLowerCase())||[];function Lc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(m.isFunction(c))while(d=f[e++])"+"===d.charAt(0)?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Mc(a,b,c,d){var e={},f=a===Ic;function g(h){var i;return e[h]=!0,m.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Nc(a,b){var c,d,e=m.ajaxSettings.flatOptions||{};for(d in b)void 0!==b[d]&&((e[d]?a:c||(c={}))[d]=b[d]);return c&&m.extend(!0,a,c),a}function Oc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===e&&(e=a.mimeType||b.getResponseHeader("Content-Type"));if(e)for(g in h)if(h[g]&&h[g].test(e)){i.unshift(g);break}if(i[0]in c)f=i[0];else{for(g in c){if(!i[0]||a.converters[g+" "+i[0]]){f=g;break}d||(d=g)}f=f||d}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Pc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}m.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:zc,type:"GET",isLocal:Dc.test(yc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Jc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":m.parseJSON,"text xml":m.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Nc(Nc(a,m.ajaxSettings),b):Nc(m.ajaxSettings,a)},ajaxPrefilter:Lc(Hc),ajaxTransport:Lc(Ic),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=m.ajaxSetup({},b),l=k.context||k,n=k.context&&(l.nodeType||l.jquery)?m(l):m.event,o=m.Deferred(),p=m.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!j){j={};while(b=Cc.exec(f))j[b[1].toLowerCase()]=b[2]}b=j[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return i&&i.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||zc)+"").replace(Ac,"").replace(Fc,yc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=m.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(c=Gc.exec(k.url.toLowerCase()),k.crossDomain=!(!c||c[1]===yc[1]&&c[2]===yc[2]&&(c[3]||("http:"===c[1]?"80":"443"))===(yc[3]||("http:"===yc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=m.param(k.data,k.traditional)),Mc(Hc,k,b,v),2===t)return v;h=k.global,h&&0===m.active++&&m.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!Ec.test(k.type),e=k.url,k.hasContent||(k.data&&(e=k.url+=(wc.test(e)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=Bc.test(e)?e.replace(Bc,"$1_="+vc++):e+(wc.test(e)?"&":"?")+"_="+vc++)),k.ifModified&&(m.lastModified[e]&&v.setRequestHeader("If-Modified-Since",m.lastModified[e]),m.etag[e]&&v.setRequestHeader("If-None-Match",m.etag[e])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+Jc+"; q=0.01":""):k.accepts["*"]);for(d in k.headers)v.setRequestHeader(d,k.headers[d]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(d in{success:1,error:1,complete:1})v[d](k[d]);if(i=Mc(Ic,k,b,v)){v.readyState=1,h&&n.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,i.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,c,d){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),i=void 0,f=d||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,c&&(u=Oc(k,v,c)),u=Pc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(m.lastModified[e]=w),w=v.getResponseHeader("etag"),w&&(m.etag[e]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,h&&n.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),h&&(n.trigger("ajaxComplete",[v,k]),--m.active||m.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return m.get(a,b,c,"json")},getScript:function(a,b){return m.get(a,void 0,b,"script")}}),m.each(["get","post"],function(a,b){m[b]=function(a,c,d,e){return m.isFunction(c)&&(e=e||d,d=c,c=void 0),m.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),m.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){m.fn[b]=function(a){return this.on(b,a)}}),m._evalUrl=function(a){return m.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},m.fn.extend({wrapAll:function(a){if(m.isFunction(a))return this.each(function(b){m(this).wrapAll(a.call(this,b))});if(this[0]){var b=m(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&1===a.firstChild.nodeType)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){return this.each(m.isFunction(a)?function(b){m(this).wrapInner(a.call(this,b))}:function(){var b=m(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=m.isFunction(a);return this.each(function(c){m(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){m.nodeName(this,"body")||m(this).replaceWith(this.childNodes)}).end()}}),m.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0||!k.reliableHiddenOffsets()&&"none"===(a.style&&a.style.display||m.css(a,"display"))},m.expr.filters.visible=function(a){return!m.expr.filters.hidden(a)};var Qc=/%20/g,Rc=/\[\]$/,Sc=/\r?\n/g,Tc=/^(?:submit|button|image|reset|file)$/i,Uc=/^(?:input|select|textarea|keygen)/i;function Vc(a,b,c,d){var e;if(m.isArray(b))m.each(b,function(b,e){c||Rc.test(a)?d(a,e):Vc(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==m.type(b))d(a,b);else for(e in b)Vc(a+"["+e+"]",b[e],c,d)}m.param=function(a,b){var c,d=[],e=function(a,b){b=m.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=m.ajaxSettings&&m.ajaxSettings.traditional),m.isArray(a)||a.jquery&&!m.isPlainObject(a))m.each(a,function(){e(this.name,this.value)});else for(c in a)Vc(c,a[c],b,e);return d.join("&").replace(Qc,"+")},m.fn.extend({serialize:function(){return m.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=m.prop(this,"elements");return a?m.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!m(this).is(":disabled")&&Uc.test(this.nodeName)&&!Tc.test(a)&&(this.checked||!W.test(a))}).map(function(a,b){var c=m(this).val();return null==c?null:m.isArray(c)?m.map(c,function(a){return{name:b.name,value:a.replace(Sc,"\r\n")}}):{name:b.name,value:c.replace(Sc,"\r\n")}}).get()}}),m.ajaxSettings.xhr=void 0!==a.ActiveXObject?function(){return!this.isLocal&&/^(get|post|head|put|delete|options)$/i.test(this.type)&&Zc()||$c()}:Zc;var Wc=0,Xc={},Yc=m.ajaxSettings.xhr();a.ActiveXObject&&m(a).on("unload",function(){for(var a in Xc)Xc[a](void 0,!0)}),k.cors=!!Yc&&"withCredentials"in Yc,Yc=k.ajax=!!Yc,Yc&&m.ajaxTransport(function(a){if(!a.crossDomain||k.cors){var b;return{send:function(c,d){var e,f=a.xhr(),g=++Wc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)void 0!==c[e]&&f.setRequestHeader(e,c[e]+"");f.send(a.hasContent&&a.data||null),b=function(c,e){var h,i,j;if(b&&(e||4===f.readyState))if(delete Xc[g],b=void 0,f.onreadystatechange=m.noop,e)4!==f.readyState&&f.abort();else{j={},h=f.status,"string"==typeof f.responseText&&(j.text=f.responseText);try{i=f.statusText}catch(k){i=""}h||!a.isLocal||a.crossDomain?1223===h&&(h=204):h=j.text?200:404}j&&d(h,i,j,f.getAllResponseHeaders())},a.async?4===f.readyState?setTimeout(b):f.onreadystatechange=Xc[g]=b:b()},abort:function(){b&&b(void 0,!0)}}}});function Zc(){try{return new a.XMLHttpRequest}catch(b){}}function $c(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}m.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return m.globalEval(a),a}}}),m.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),m.ajaxTransport("script",function(a){if(a.crossDomain){var b,c=y.head||m("head")[0]||y.documentElement;return{send:function(d,e){b=y.createElement("script"),b.async=!0,a.scriptCharset&&(b.charset=a.scriptCharset),b.src=a.url,b.onload=b.onreadystatechange=function(a,c){(c||!b.readyState||/loaded|complete/.test(b.readyState))&&(b.onload=b.onreadystatechange=null,b.parentNode&&b.parentNode.removeChild(b),b=null,c||e(200,"success"))},c.insertBefore(b,c.firstChild)},abort:function(){b&&b.onload(void 0,!0)}}}});var _c=[],ad=/(=)\?(?=&|$)|\?\?/;m.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=_c.pop()||m.expando+"_"+vc++;return this[a]=!0,a}}),m.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(ad.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&ad.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=m.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(ad,"$1"+e):b.jsonp!==!1&&(b.url+=(wc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||m.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,_c.push(e)),g&&m.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),m.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||y;var d=u.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=m.buildFragment([a],b,e),e&&e.length&&m(e).remove(),m.merge([],d.childNodes))};var bd=m.fn.load;m.fn.load=function(a,b,c){if("string"!=typeof a&&bd)return bd.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=m.trim(a.slice(h,a.length)),a=a.slice(0,h)),m.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(f="POST"),g.length>0&&m.ajax({url:a,type:f,dataType:"html",data:b}).done(function(a){e=arguments,g.html(d?m("<div>").append(m.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,e||[a.responseText,b,a])}),this},m.expr.filters.animated=function(a){return m.grep(m.timers,function(b){return a===b.elem}).length};var cd=a.document.documentElement;function dd(a){return m.isWindow(a)?a:9===a.nodeType?a.defaultView||a.parentWindow:!1}m.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=m.css(a,"position"),l=m(a),n={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=m.css(a,"top"),i=m.css(a,"left"),j=("absolute"===k||"fixed"===k)&&m.inArray("auto",[f,i])>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),m.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(n.top=b.top-h.top+g),null!=b.left&&(n.left=b.left-h.left+e),"using"in b?b.using.call(a,n):l.css(n)}},m.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){m.offset.setOffset(this,a,b)});var b,c,d={top:0,left:0},e=this[0],f=e&&e.ownerDocument;if(f)return b=f.documentElement,m.contains(b,e)?(typeof e.getBoundingClientRect!==K&&(d=e.getBoundingClientRect()),c=dd(f),{top:d.top+(c.pageYOffset||b.scrollTop)-(b.clientTop||0),left:d.left+(c.pageXOffset||b.scrollLeft)-(b.clientLeft||0)}):d},position:function(){if(this[0]){var a,b,c={top:0,left:0},d=this[0];return"fixed"===m.css(d,"position")?b=d.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),m.nodeName(a[0],"html")||(c=a.offset()),c.top+=m.css(a[0],"borderTopWidth",!0),c.left+=m.css(a[0],"borderLeftWidth",!0)),{top:b.top-c.top-m.css(d,"marginTop",!0),left:b.left-c.left-m.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||cd;while(a&&!m.nodeName(a,"html")&&"static"===m.css(a,"position"))a=a.offsetParent;return a||cd})}}),m.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c=/Y/.test(b);m.fn[a]=function(d){return V(this,function(a,d,e){var f=dd(a);return void 0===e?f?b in f?f[b]:f.document.documentElement[d]:a[d]:void(f?f.scrollTo(c?m(f).scrollLeft():e,c?e:m(f).scrollTop()):a[d]=e)},a,d,arguments.length,null)}}),m.each(["top","left"],function(a,b){m.cssHooks[b]=Lb(k.pixelPosition,function(a,c){return c?(c=Jb(a,b),Hb.test(c)?m(a).position()[b]+"px":c):void 0})}),m.each({Height:"height",Width:"width"},function(a,b){m.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){m.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return V(this,function(b,c,d){var e;return m.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?m.css(b,c,g):m.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),m.fn.size=function(){return this.length},m.fn.andSelf=m.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return m});var ed=a.jQuery,fd=a.$;return m.noConflict=function(b){return a.$===m&&(a.$=fd),b&&a.jQuery===m&&(a.jQuery=ed),m},typeof b===K&&(a.jQuery=a.$=m),m});

/* jquery.dropotron.js v1.4.3 | (c) n33 | n33.co | MIT licensed */
(function(e){var t="openerActiveClass",n="click touchend",r="left",i="doCollapseAll",s="position",o="trigger",u="disableSelection_dropotron",a="addClass",f="doCollapse",l=!1,c="outerWidth",h="removeClass",p="preventDefault",d="length",v="dropotron",m="clearTimeout",g="right",y="parent",b=!0,w="speed",E="none",S="stopPropagation",x="doExpand",T=":visible",N="absolute",C="css",k="center",L="toggle",A="baseZIndex",O="offsetX",M="alignment",_="submenuClassPrefix",D="children",P="hover",H="relative",B="doToggle",j="ul",F="z-index",I="opacity",q="find",R="opener",U="px",z=null,W="hide",X="offset",V="detach",$="fast";e.fn[u]=function(){return e(this)[C]("user-select",E)[C]("-khtml-user-select",E)[C]("-moz-user-select",E)[C]("-o-user-select",E)[C]("-webkit-user-select",E)},e.fn[v]=function(t){var n;if(this[d]==0)return e(this);if(this[d]>1)for(n=0;n<this[d];n++)e(this[n])[v](t);return e[v](e.extend({selectorParent:e(this)},t))},e[v]=function(E){var et=e.extend({selectorParent:z,baseZIndex:1e3,menuClass:v,expandMode:P,hoverDelay:150,hideDelay:250,openerClass:R,openerActiveClass:"active",submenuClassPrefix:"level-",mode:"fade",speed:$,easing:"swing",alignment:r,offsetX:0,offsetY:0,globalOffsetY:0,IEOffsetX:0,IEOffsetY:0,noOpenerFade:b,detach:b,cloneOnDetach:b},E),tt=et.selectorParent,nt=tt[q](j),rt=e("body"),it=e("body,html"),st=e(window),ot=l,ut=z,at=z;tt.on(i,function(){nt[o](f)}),nt.each(function(){var i=e(this),d=i[y]();et.hideDelay>0&&i.add(d).on("mouseleave",function(){window[m](at),at=window.setTimeout(function(){i[o](f)},et.hideDelay)}),i[u]()[W]()[a](et.menuClass)[C](s,N).on("mouseenter",function(){window[m](at)}).on(x,function(){var n,u,p,v,E,S,x,_,D,P,B;if(i.is(T))return l;window[m](at),nt.each(function(){var t=e(this);e.contains(t.get(0),d.get(0))||t[o](f)}),n=d[X](),u=d[s](),p=d[y]()[s](),v=d[c](),E=i[c](),S=i[C](F)==et[A];if(S){et[V]?x=n:x=u,P=x.top+d.outerHeight()+et.globalOffsetY,_=et[M],i[h](r)[h](g)[h](k);switch(et[M]){case g:D=x[r]-E+v,D<0&&(D=x[r],_=r);break;case k:D=x[r]-Math.floor((E-v)/2),D<0?(D=x[r],_=r):D+E>st.width()&&(D=x[r]-E+v,_=g);break;case r:default:D=x[r],D+E>st.width()&&(D=x[r]-E+v,_=g)}i[a](_)}else{d[C](s)==H||d[C](s)==N?(P=et.offsetY,D=-1*u[r]):(P=u.top+et.offsetY,D=0);switch(et[M]){case g:D+=-1*d[y]()[c]()+et[O];break;case k:case r:default:D+=d[y]()[c]()+et[O]}}navigator.userAgent.match(/MSIE ([0-9]+)\./)&&RegExp.$1<8&&(D+=et.IEOffsetX,P+=et.IEOffsetY),i[C](r,D+U)[C]("top",P+U)[C](I,"0.01").show(),B=l,d[C](s)==H||d[C](s)==N?D=-1*u[r]:D=0,i[X]()[r]<0?(D+=d[y]()[c]()-et[O],B=b):i[X]()[r]+E>st.width()&&(D+=-1*d[y]()[c]()-et[O],B=b),B&&i[C](r,D+U),i[W]()[C](I,"1");switch(et.mode){case"zoom":ot=b,d[a](et[t]),i.animate({width:L,height:L},et[w],et.easing,function(){ot=l});break;case"slide":ot=b,d[a](et[t]),i.animate({height:L},et[w],et.easing,function(){ot=l});break;case"fade":ot=b,S&&!et.noOpenerFade?(et[w]=="slow"?B=80:et[w]==$?B=40:B=Math.floor(et[w]/2),d.fadeTo(B,.01,function(){d[a](et[t]),d.fadeTo(et[w],1),i.fadeIn(et[w],function(){ot=l})})):(d[a](et[t]),d.fadeTo(et[w],1),i.fadeIn(et[w],function(){ot=l}));break;case"instant":default:d[a](et[t]),i.show()}return l}).on(f,function(){return i.is(T)?(i[W](),d[h](et[t]),i[q]("."+et[t])[h](et[t]),i[q](j)[W](),l):l}).on(B,function(){return i.is(T)?i[o](f):i[o](x),l}),d[u]()[a](R)[C]("cursor","pointer").on(n,function(e){if(ot)return;e[p](),e[S](),i[o](B)}),et.expandMode==P&&d[P](function(){if(ot)return;ut=window.setTimeout(function(){i[o](x)},et.hoverDelay)},function(){window[m](ut)})}),nt[q]("a")[C]("display","block").on(n,function(t){if(ot)return;e(this).attr("href")[d]<1&&t[p]()}),tt[q]("li")[C]("white-space","nowrap").each(function(){var t=e(this),r=t[D]("a"),s=t[D](j),u=r.attr("href");r.on(n,function(e){u[d]==0||u=="#"?e[p]():e[S]()}),r[d]>0&&s[d]==0&&t.on(n,function(e){if(ot)return;tt[o](i),e[S]()})}),tt[D]("li").each(function(){var t,n,r,i,s=e(this),o=s[D](j);if(o[d]>0){et[V]&&(et.cloneOnDetach&&(t=o.clone(),t.attr("class","")[W]().appendTo(o[y]())),o[V]().appendTo(rt));for(n=et[A],r=1,i=o;i[d]>0;r++)i[C](F,n++),et[_]&&i[a](et[_]+(n-1-et[A])),i=i[q]("> li > ul")}}),st.on("scroll",function(){tt[o](i)}).on("keypress",function(e){!ot&&e.keyCode==27&&(e[p](),tt[o](i))}),it.on(n,function(){ot||tt[o](i)})}})(jQuery);
/* jquery.scrolly v0.1 | (c) n33 | n33.co @n33co | MIT */
(function(e){var t="click.scrolly";e.fn.scrolly=function(r,i){var s=e(this);return r||(r=1e3),i||(i=0),s.off(t).on(t,function(t){var n,s,o,u=e(this),a=u.attr("href");a.charAt(0)=="#"&&a.length>1&&(n=e(a)).length>0&&(s=n.offset().top,u.hasClass("scrolly-centered")?o=s-(e(window).height()-n.outerHeight())/2:(o=Math.max(s,0),i&&(typeof i=="function"?o-=i():o-=i)),t.preventDefault(),e("body,html").stop().animate({scrollTop:o},r,"swing"))}),s}})(jQuery);
/* jquery.onvisible.js v0.1 | (c) n33 | n33.co @n33co | MIT */
(function(){var e,t=jQuery(window),n=[],r=100,i=150,s=function(){var e=n.length,r=t.scrollTop()+t.height()-i,s,o;for(s=0;s<e;s++)o=n[s],!o.state&&r>o.o.offset().top&&(o.state=!0,o.fn())};t.load(function(){t.on("scroll resize",function(){window.clearTimeout(e),e=window.setTimeout(function(){s()},r)}).trigger("resize")}),jQuery.fn.onVisible=function(e,t){n.push({o:jQuery(this),fn:e,pad:t?t:i,state:!1})}})();
/* skel.js v2.0.0 | (c) n33 | getskel.com | MIT licensed */
var skel=function(){var e="config",t="breakpoints",n="iterate",r="stateId",i="getElementsByClassName",s="elements",o="stateElements",u="getElementsByTagName",a=!1,f="length",l=" 0 0 ",c=null,h="viewport",p="getCachedElement",d="cacheNewElement",v="config_breakpoint",m="gutters",g="insertBefore",y="vars",b="}",w="newInline",E=!0,S="parentNode",x="locations",T="orientationChange",N="createElement",C="deviceType",k="className",L="substring",A="object",O="isArray",M="match",_="cache",D="replace",P="head",H="newElement",B="indexOf",j="+*,",F="_skel_isReversed",I="extend",q="push",R="matchesMedia",U="grid",z="containers",W="onorientationchange",X="maxGridZoom",V="lock",$="defaults",J="DOMReady",K="getComputedStyle",Q="addEventListener",G="^head",Y="{display:none!important}",Z="registerLocation",et="parseMeasurement",tt="events",nt="IEVersion",rt="placeholder",it="documentElement",st="attachElements",ot="plugins",ut="attachElement",at="DOMContentLoaded",ft="text/css",lt="device-height",ct="states",ht="device-width",pt="initial-scale=1",dt="_skel_attach",vt="removeEventListener",mt="previousSibling",gt="resize",yt="attached",bt="collapse",wt="normalize",Et="media",St="location",xt="(min-width: ",Tt="change",Nt="applyRowTransforms",Ct="split",kt="html",Lt="forceDefaultState",At="_skel_placeholder",Ot="firstChild",Mt="max-height",_t="min-height",Dt="querySelectorAll",Pt="max-width",Ht="min-width",Bt="prototype",jt="innerHTML",Ft="nextSibling",It="domready",qt="hasOwnProperty",Rt="readyState",Ut="href",zt="height=",Wt=".\\3$1 ",Xt="priority",Vt="isStatic",$t="zoom",Jt="onresize",Kt="android",Qt={breakpoints:[],breakpointList:[],cache:{elements:{},states:{},stateElements:{}},config:{breakpoints:{"*":{href:a,media:""}},containers:1140,defaultState:c,events:{},grid:{zoom:1,collapse:a,gutters:[40,0]},lock:{path:a,permanent:E},plugins:{},pollOnce:a,preload:a,reset:wt,RTL:a,viewport:{width:ht,height:lt,scalable:E}},css:{bm:"*,*:before,*:after{-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box}",n:"html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{font-size:2em;margin:.67em 0}mark{background:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{border:1px solid silver;margin:0 2px;padding:.35em .625em .75em}legend{border:0;padding:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}",r:"html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}body{line-height:1}ol,ul{list-style:none}blockquote,q{quotes:none}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none}table{border-collapse:collapse;border-spacing:0}body{-webkit-text-size-adjust:none}",gc:function(e){return".\\31 2u"+e+",.\\31 2u\\24"+e+"{width:100%;clear:none}"+".\\31 1u"+e+",.\\31 1u\\24"+e+"{width:91.6666666667%;clear:none}"+".\\31 0u"+e+",.\\31 0u\\24"+e+"{width:83.3333333333%;clear:none}"+".\\39 u"+e+",.\\39 u\\24"+e+"{width:75%;clear:none}"+".\\38 u"+e+",.\\38 u\\24"+e+"{width:66.6666666667%;clear:none}"+".\\37 u"+e+",.\\37 u\\24"+e+"{width:58.3333333333%;clear:none}"+".\\36 u"+e+",.\\36 u\\24"+e+"{width:50%;clear:none}"+".\\35 u"+e+",.\\35 u\\24"+e+"{width:41.6666666667%;clear:none}"+".\\34 u"+e+",.\\34 u\\24"+e+"{width:33.3333333333%; clear: none}"+".\\33 u"+e+",.\\33 u\\24"+e+"{width:25%;clear:none}"+".\\32 u"+e+",.\\32 u\\24"+e+"{width:16.6666666667%;clear:none}"+".\\31 u"+e+",.\\31 u\\24"+e+"{width:8.3333333333%;clear:none}"+".\\31 2u\\24"+e+j+".\\31 1u\\24"+e+j+".\\31 0u\\24"+e+j+".\\39 u\\24"+e+j+".\\38 u\\24"+e+j+".\\37 u\\24"+e+j+".\\36 u\\24"+e+j+".\\35 u\\24"+e+j+".\\34 u\\24"+e+j+".\\33 u\\24"+e+j+".\\32 u\\24"+e+"+*"+".\\31 u\\24"+e+"+*{"+"clear:left;"+b+".\\-11u{margin-left:91.6666666667%}"+".\\-10u{margin-left:83.3333333333%}"+".\\-9u{margin-left:75%}"+".\\-8u{margin-left:66.6666666667%}"+".\\-7u{margin-left:58.3333333333%}"+".\\-6u{margin-left:50%}"+".\\-5u{margin-left:41.6666666667%}"+".\\-4u{margin-left:33.3333333333%}"+".\\-3u{margin-left:25%}"+".\\-2u{margin-left:16.6666666667%}"+".\\-1u{margin-left:8.3333333333%}"}},defaults:{breakpoint:{config:c,elements:c,test:c},config_breakpoint:{containers:"100%",grid:{},href:a,media:"",viewport:{}}},events:[],forceDefaultState:a,isInit:a,isStatic:a,locations:{body:c,head:c,html:c},lcn:"_skel_lock",maxGridZoom:1,me:c,plugins:{},sd:"/",stateId:"",vars:{},DOMReady:c,getElementsByClassName:c,indexOf:c,isArray:c,iterate:c,matchesMedia:c,extend:function(e,t){var r;Qt[n](t,function(n){Qt[O](t[n])?(Qt[O](e[n])||(e[n]=[]),Qt[I](e[n],t[n])):typeof t[n]==A?(typeof e[n]!=A&&(e[n]={}),Qt[I](e[n],t[n])):e[n]=t[n]})},getArray:function(e){return Qt[O](e)?e:[e]},parseMeasurement:function(e){var t,n;if(typeof e!="string")t=[e,"px"];else if(e=="fluid")t=[100,"%"];else{var n;n=e[M](/([0-9\.]+)([^\s]*)/),n[f]<3||!n[2]?t=[parseFloat(e),"px"]:t=[parseFloat(n[1]),n[2]]}return t},canUse:function(e){return Qt[t][e]&&Qt[t][e].test()},hasActive:function(e){var t=a;return Qt[n](e,function(n){t=t||Qt.isActive(e[n])}),t},isActive:function(e){return Qt[B](Qt[r],Qt.sd+e)!==-1},isLocked:function(){return!!Qt[y][V]&&Qt[O](Qt[y][V])},lock:function(t,n){Qt[y][V]=[t,n],document.cookie=Qt.lcn+"="+Qt[y][V].join("_")+(Qt[e][V].path?";path="+Qt[e][V].path:"")+(Qt[e][V].permanent?";expires=Tue, 19 Jan 2038 03:14:07 GMT":""),window[St].reload()},unlock:function(){Qt[y][V]=c,document.cookie=Qt.lcn+"="+(Qt[e][V].path?";path="+Qt[e][V].path:"")+";expires=Thu, 01 Jan 1970 01:02:03 GMT",window[St].reload()},useActive:function(e){if(typeof e!==A)return e;var t=c;return Qt[n](e,function(n){if(t!==c)return;Qt.isActive(n)&&(t=e[n])}),t},wasActive:function(e){return Qt[B](Qt[y].lastStateId,Qt.sd+e)!==-1},applyRowTransforms:function(t){Qt[e].RTL&&(Qt.unreverseRows(),t[e][U][bt]&&Qt.reverseRows());var r="_skel_important",s=[],o,u;for(o=1;o<=Qt[X];o++)u=Qt[i]("important("+o+")"),Qt[n](u,function(e){s[q](u[e])});u=Qt[i]("important(collapse)"),Qt[n](u,function(e){s[q](u[e])}),Qt[n](s,function(n){if(n===f)return;var i=s[n],o=i[S],u,l=a,c,h;if(!o)return;if(!i[qt](r)||i[r]===a){t[e][U][bt]&&i[k][M](/important\(collapse\)/)?l="c":i[k][M](/important\(([0-9])\)/)&&(h=parseInt(RegExp.$1))<=t[e][U][$t]&&(l="z");if(!l)return;c=Qt[e].RTL?Ft:mt,u=i[c];while(u&&u.nodeName=="#text")u=u[c];if(!u)return;o[g](i,Qt[e].RTL&&l=="z"?o.lastChild:o[Ot]),i[r]={placeholder:u,mode:l,zoom:h}}else{u=i[r][rt],l=i[r].mode;if(l=="c"&&t[e][U][bt]||l=="z"&&i[r][$t]<=t[e][U][$t])return;o[g](i,Qt[e].RTL&&l=="z"?u[mt]:u[Ft]),i[r]=a}})},reverseRows:function(){var e=Qt[i]("row");Qt[n](e,function(t){if(t===f)return;var n=e[t];if(n[F])return;var r=n.children,i;for(i=1;i<r[f];i++)n[g](r[i],r[0]);n[F]=E})},unreverseRows:function(){var e=Qt[i]("row");Qt[n](e,function(t){if(t===f)return;var n=e[t];if(!n[F])return;var r=n.children,i;for(i=1;i<r[f];i++)n[g](r[i],r[0]);n[F]=a})},bind:function(e,t){Qt[tt][e]||(Qt[tt][e]=[]),Qt[tt][e][q](t),e==Tt&&Qt.isInit&&t()},change:function(e){Qt.bind(Tt,e)},trigger:function(e){if(!Qt[tt][e]||Qt[tt][e][f]==0)return;var t;Qt[n](Qt[tt][e],function(t){Qt[tt][e][t]()})},registerLocation:function(e,t){e==P?t[dt]=function(e,t){t?this[g](e,this[Ot]):this===Qt.me[S]?this[g](e,Qt.me):this.appendChild(e)}:t[dt]=function(e,t){t?this[g](e,this[Ot]):this.appendChild(e)},Qt[x][e]=t},addCachedElementToBreakpoint:function(e,n){Qt[t][e]&&Qt[t][e][s][q](n)},addCachedElementToState:function(e,t){Qt[_][o][e]?Qt[_][o][e][q](t):Qt[_][o][e]=[t]},attachElement:function(e){var t,n=e[St],r=a;return e[yt]?E:(n[0]=="^"&&(n=n[L](1),r=E),n in Qt[x]?(t=Qt[x][n],t[dt](e[A],r),e[yt]=E,e.onAttach&&e.onAttach(),E):a)},attachElements:function(e){var t=[],r=[],i,s,o;Qt[n](e,function(n){t[e[n][Xt]]||(t[e[n][Xt]]=[]),t[e[n][Xt]][q](e[n])}),Qt[n](t,function(e){if(t[e][f]==0)return;Qt[n](t[e],function(n){Qt[ut](t[e][n])||r[q](t[e][n])})}),r[f]>0&&Qt[J](function(){Qt[n](r,function(e){Qt[ut](r[e])})})},cacheElement:function(e){return Qt[_][s][e.id]=e,e},cacheNewElement:function(e,t,n,r){var i;return t[S]&&t[S].removeChild(t),i=Qt[H](e,t,n,r),Qt.cacheElement(i)},detachAllElements:function(e){var t,r,i={};Qt[n](e,function(t){i[e[t].id]=E}),Qt[n](Qt[_][s],function(e){if(e in i)return;Qt.detachElement(e)})},detachElement:function(e){var t=Qt[_][s][e],n;if(!t[yt])return;n=t[A];if(!n[S]||n[S]&&!n[S].tagName)return;n[S].removeChild(n),t[yt]=a,t.onDetach&&t.onDetach()},getCachedElement:function(e){return Qt[_][s][e]?Qt[_][s][e]:c},newElement:function(e,t,n,r){return{id:e,object:t,location:n,priority:r,attached:a}},changeState:function(i){var u,c,g,S,x,T,N,C,k;Qt[y].lastStateId=Qt[r],Qt[r]=i;if(!Qt[_][ct][Qt[r]]){Qt[_][ct][Qt[r]]={config:{},elements:[],values:{}},g=Qt[_][ct][Qt[r]],Qt[r]===Qt.sd?u=[]:u=Qt[r][L](1)[Ct](Qt.sd),Qt[I](g[e],Qt[$][v]),Qt[n](u,function(n){Qt[I](g[e],Qt[t][u[n]][e])}),N="mV"+Qt[r],g[e][h].content?C=g[e][h].content:Qt.isLocked()?(S=[],S[q]("user-scalable=yes"),Qt[y][V][0]&&S[q]("width="+Qt[y][V][0]),Qt[y][V][1]&&S[q](zt+Qt[y][V][1]),C=S.join(","),window.setTimeout(function(){Qt.poll()},0)):(S=[],S[q]("user-scalable="+(g[e][h].scalable?"yes":"no")),g[e][h].width&&S[q]("width="+g[e][h].width),g[e][h].height&&S[q](zt+g[e][h].height),g[e][h].width==ht&&g[e][h].height==lt&&S[q](pt),C=S.join(",")),(x=Qt[p](N))||(x=Qt[d](N,Qt.newMeta(h,C),G,4)),g[s][q](x);var A,O,M=a;S=Qt[et](g[e][z]),A=S[0],O=S[1],g.values[z]=A+O,N="iC"+g.values[z],O.substr(-1)=="!"&&(M=E,O=O.substr(0,O[f]-1)),(x=Qt[p](N))||(x=Qt[d](N,Qt[w]("body{min-width:"+A*1+O+b+".container{margin-left:auto;margin-right:auto;width:"+A*1+O+(M?"!important;max-width:none!important;min-width:0!important"+b:b+".container.\\31 25\\25{width:100%;max-width:"+A*1.25+O+";min-width:"+A+b+".container.\\37 5\\25{width:"+A*.75+O+b+".container.\\35 0\\25{width:"+A*.5+O+b+".container.\\32 5\\25{width:"+A*.25+O+b)),P,3)),g[s][q](x),N="iGG"+g[e][U][m][0]+"_"+g[e][U][m][1];if(!(x=Qt[p](N))){var H,j;S=Qt[et](g[e][U][m][0]),H=S[0],j=S[1];var F,R;S=Qt[et](g[e][U][m][1]),F=S[0],R=S[1],x=Qt[d]("iGG"+g[e][U][m][0]+"_"+g[e][U][m][1],Qt[w](".row>*{padding:"+F*1+R+l+H*1+j+b+".row{margin:"+F*-1+R+l+H*-1+j+b+".row.uniform>*{padding:"+H*1+j+l+H*1+j+b+".row.uniform{margin:"+H*-1+j+l+H*-1+j+b+".row.\\32 00\\25>*{padding:"+F*2+R+l+H*2+j+b+".row.\\32 00\\25{margin:"+F*-2+R+l+H*-2+j+b+".row.uniform.\\32 00\\25>*{padding:"+H*2+j+l+H*2+j+b+".row.uniform.\\32 00\\25{margin:"+H*-2+j+l+H*-2+j+b+".row.\\31 50\\25>*{padding:"+F*1.5+R+l+H*1.5+j+b+".row.\\31 50\\25{margin:"+F*-1.5+R+l+H*-1.5+j+b+".row.uniform.\\31 50\\25>*{padding:"+H*1.5+j+l+H*1.5+j+b+".row.uniform.\\31 50\\25{margin:"+H*-1.5+j+l+H*-1.5+j+b+".row.\\35 0\\25>*{padding:"+F*.5+R+l+H*.5+j+b+".row.\\35 0\\25{margin:"+F*-0.5+R+l+H*-0.5+j+b+".row.uniform.\\35 0\\25>*{padding:"+H*.5+j+l+H*.5+j+b+".row.uniform.\\35 0\\25{margin:"+H*-0.5+j+l+H*-0.5+j+b+".row.\\32 5\\25>*{padding:"+F*.25+R+l+H*.25+j+b+".row.\\32 5\\25{margin:"+F*-0.25+R+l+H*-0.25+j+b+".row.uniform.\\32 5\\25>*{padding:"+H*.25+j+l+H*.25+j+b+".row.uniform.\\32 5\\25{margin:"+H*-0.25+j+l+H*-0.25+j+b+".row.\\30 \\25>*{padding:0}"+".row.\\30 \\25{margin:0}"),P,3)}g[s][q](x),N="igZ"+g[e][U][$t];if(!(x=Qt[p](N))){C="";for(T=1;T<=g[e][U][$t];T++)C+=Qt.css.gc("\\28 "+T+"\\29");x=Qt[d](N,Qt[w](C),P,3)}g[s][q](x),g[e][U][bt]&&(N="igC"+g[e][z],(x=Qt[p](N))||(x=Qt[d](N,Qt[w](".row:not(.no-collapse)>*{width:100%!important;margin-left:0!important"+b),P,3)),g[s][q](x)),N="iCd"+Qt[r];if(!(x=Qt[p](N))){C=[],k=[],Qt[n](Qt[t],function(e){Qt[B](u,e)!==-1?C[q](".not-"+e):k[q](".only-"+e)});var W=(C[f]>0?C.join(",")+Y:"")+(k[f]>0?k.join(",")+Y:"");x=Qt[d](N,Qt[w](W[D](/\.([0-9])/,Wt)),P,3),g[s][q](x)}Qt[n](u,function(r){Qt[t][u[r]][e][Ut]&&(N="ss"+u[r],(x=Qt[p](N))||(x=Qt[d](N,Qt.newStyleSheet(Qt[t][u[r]][e][Ut]),P,5)),g[s][q](x)),Qt[t][u[r]][s][f]>0&&Qt[n](Qt[t][u[r]][s],function(e){g[s][q](Qt[t][u[r]][s][e])})}),Qt[_][o][Qt[r]]&&(Qt[n](Qt[_][o][Qt[r]],function(e){g[s][q](Qt[_][o][Qt[r]][e])}),Qt[_][o][Qt[r]]=[])}else g=Qt[_][ct][Qt[r]];Qt.detachAllElements(g[s]),Qt[st](g[s]),Qt[J](function(){Qt[Nt](g)}),Qt[y].state=Qt[_][ct][Qt[r]],Qt[y][r]=Qt[r],Qt.trigger(Tt)},getStateId:function(){if(Qt[Lt]&&Qt[e].defaultState)return Qt[e].defaultState;var r="";return Qt[n](Qt[t],function(e){Qt[t][e].test()&&(r+=Qt.sd+e)}),r},poll:function(){var e="";e=Qt.getStateId(),e===""&&(e=Qt.sd),e!==Qt[r]&&(Qt[Vt]?Qt.changeState(e):(Qt[x][kt][k]=Qt[x][kt][k][D](Qt[r][L](1)[D](new RegExp(Qt.sd,"g")," "),""),Qt.changeState(e),Qt[x][kt][k]=Qt[x][kt][k]+" "+Qt[r][L](1)[D](new RegExp(Qt.sd,"g")," "),Qt[x][kt][k].charAt(0)==" "&&(Qt[x][kt][k]=Qt[x][kt][k][L](1))))},updateState:function(){var e,i,u,a,l=[];if(Qt[r]==Qt.sd)return;e=Qt[r][L](1)[Ct](Qt.sd),Qt[n](e,function(o){i=Qt[t][e[o]];if(i[s][f]==0)return;Qt[n](i[s],function(e){Qt[_][ct][Qt[r]][s][q](i[s][e]),l[q](i[s][e])})}),Qt[_][o][Qt[r]]&&(Qt[n](Qt[_][o][Qt[r]],function(e){Qt[_][ct][Qt[r]][s][q](Qt[_][o][Qt[r]][e]),l[q](Qt[_][o][Qt[r]][e])}),Qt[_][o][Qt[r]]=[]),l[f]>0&&Qt[st](l)},newDiv:function(e){var t=document[N]("div");return t[jt]=e,t},newInline:function(e){var t;return t=document[N]("style"),t.type=ft,t[jt]=e,t},newMeta:function(e,t){var n=document[N]("meta");return n.name=e,n.content=t,n},newStyleSheet:function(e){var t=document[N]("link");return t.rel="stylesheet",t.type=ft,t[Ut]=e,t},initPlugin:function(t,n){typeof n==A&&Qt[I](t[e],n),t.init&&t.init()},registerPlugin:function(e,t){if(!t)return a;Qt[ot][e]=t,t._=this,t.register&&t.register()},init:function(t,r){Qt.initConfig(t),Qt.initElements(),Qt.initEvents(),Qt.poll(),r&&typeof r==A&&(Qt[e][ot]=r),Qt[n](Qt[ot],function(t){Qt.initPlugin(Qt[ot][t],t in Qt[e][ot]?Qt[e][ot][t]:c)}),Qt.isInit=E},initAPI:function(){var e,t,r=navigator.userAgent;Qt[y][nt]=99,e="other",r[M](/Firefox/)?e="firefox":r[M](/Chrome/)?e="chrome":r[M](/Safari/)&&!r[M](/Chrome/)?e="safari":r[M](/(OPR|Opera)/)?e="opera":r[M](/MSIE ([0-9]+)/)?(e="ie",Qt[y][nt]=RegExp.$1):r[M](/Trident\/.+rv:([0-9]+)/)&&(e="ie",Qt[y][nt]=RegExp.$1),Qt[y].browser=e,Qt[y][C]="other",t={ios:"(iPad|iPhone|iPod)",android:"Android",mac:"Macintosh",wp:"Windows Phone",windows:"Windows NT"},Qt[n](t,function(e){r[M](new RegExp(t[e],"g"))&&(Qt[y][C]=e)});switch(Qt[y][C]){case"ios":r[M](/([0-9_]+) like Mac OS X/),e=parseFloat(RegExp.$1[D]("_",".")[D]("_",""));break;case Kt:r[M](/Android ([0-9\.]+)/),e=parseFloat(RegExp.$1);break;case"mac":r[M](/Mac OS X ([0-9_]+)/),e=parseFloat(RegExp.$1[D]("_",".")[D]("_",""));break;case"wp":r[M](/IEMobile\/([0-9\.]+)/),e=parseFloat(RegExp.$1);break;case"windows":r[M](/Windows NT ([0-9\.]+)/),e=parseFloat(RegExp.$1);break;default:e=99}Qt[y].deviceVersion=e,Qt[y].isTouch=Qt[y][C]=="wp"?navigator.msMaxTouchPoints>0:"ontouchstart"in window,Qt[y].isMobile=Qt[y][C]=="wp"||Qt[y][C]==Kt||Qt[y][C]=="ios",e=document.cookie[Ct](";"),Qt[n](e,function(t){var n=e[t][Ct]("=");if(n[0][D](/^\s+|\s+$/g,"")==Qt.lcn&&n[1][f]>0){Qt[y][V]=n[1][Ct]("_");return}})},initConfig:function(r){var i=[],o=[];if(!r||!(t in r))Qt[Vt]=E,Qt[e][h].width="",Qt[e][h].height="",Qt[e][h].scalable=E;typeof r==A&&(r[t]&&(Qt[e][t]={}),Qt[I](Qt[e],r)),U in Qt[e]&&m in Qt[e][U]&&!Qt[O](Qt[e][U][m])&&(Qt[e][U][m]=[Qt[e][U][m],Qt[e][U][m]]),Qt[I](Qt[$][v][U],Qt[e][U]),Qt[X]=Math.max(Qt[X],Qt[e][U][$t]),Qt[I](Qt[$][v][h],Qt[e][h]),Qt[$][v][z]=Qt[e][z],Qt[n](Qt[e][t],function(n){var r,i={},u,a;Qt[I](i,Qt[e][t][n]),Ut in i||(i[Ut]=Qt[$][v][Ut]),Et in i||(i[Et]=Qt[$][v][Et]),"range"in i&&(u=i.range,u=="*"?a="":u.charAt(0)=="-"?a="(max-width: "+parseInt(u[L](1))+"px)":u.charAt(u[f]-1)=="-"?a=xt+parseInt(u[L](0,u[f]-1))+"px)":Qt[B](u,"-")!=-1&&(u=u[Ct]("-"),a=xt+parseInt(u[0])+"px) and (max-width: "+parseInt(u[1])+"px)"),i[Et]=a),U in i&&(m in i[U]&&!Qt[O](i[U][m])&&(i[U][m]=[i[U][m],i[U][m]]),$t in i[U]&&(Qt[X]=Math.max(Qt[X],i[U][$t]))),Qt[e][t][n]=i,r={},Qt[I](r,Qt[$].breakpoint),r[e]=Qt[e][t][n],r.test=function(){return Qt[R](i[Et])},r[s]=[],Qt[e].preload&&r[e][Ut]&&o[q](r[e][Ut]),Qt[t][n]=r,Qt.breakpointList[q](n)}),Qt[n](Qt[e][tt],function(t){Qt.bind(t,Qt[e][tt][t])}),o[f]>0&&window[St].protocol!="file:"&&Qt[J](function(){var e,t=document[u](P)[0],r=new XMLHttpRequest;Qt[n](o,function(e){r.open("GET",o[e],a),r.send("")})})},initElements:function(){var t=[];t[q](Qt[H]("mV",Qt.newMeta(h,pt),G,1));switch(Qt[e].reset){case"full":t[q](Qt[H]("iR",Qt[w](Qt.css.r),G,2));break;case wt:t[q](Qt[H]("iN",Qt[w](Qt.css.n),G,2))}t[q](Qt[H]("iBM",Qt[w](Qt.css.bm),G,1)),t[q](Qt[H]("iG",Qt[w]('.row{border-bottom:solid 1px transparent}.row>*{float:left}.row:after,.row:before{content:"";display:block;clear:both;height:0}.row.uniform>*>:first-child{margin-top:0}.row.uniform>*>:last-child{margin-bottom:0}'+Qt.css.gc("")),P,3)),Qt[st](t)},initEvents:function(){var t;!Qt[e].pollOnce&&!Qt[Vt]&&(Qt.bind(gt,function(){Qt.poll()}),Qt.bind(T,function(){Qt.poll()})),Qt[y][C]=="ios"&&Qt[J](function(){Qt.bind(T,function(){var e=document[u]("input");Qt[n](e,function(t){e[t][At]=e[t][rt],e[t][rt]=""}),window.setTimeout(function(){Qt[n](e,function(t){e[t][rt]=e[t][At]})},100)})}),window[Jt]&&Qt.bind(gt,window[Jt]),window[Jt]=function(){Qt.trigger(gt)},window[W]&&Qt.bind(T,window[W]),window[W]=function(){Qt.trigger(T)}},initUtilityMethods:function(){document[Q]?!function(e,t){Qt[J]=t()}(It,function(){function e(e){s=1;while(e=t.shift())e()}var t=[],n,r=document,i=at,s=/^loaded|^c/.test(r[Rt]);return r[Q](i,n=function(){r[vt](i,n),e()}),function(e){s?e():t[q](e)}}):!function(e,t){Qt[J]=t()}(It,function(e){function t(e){p=1;while(e=n.shift())e()}var n=[],r,i=!1,s=document,o=s[it],u=o.doScroll,a=at,f=Q,l="onreadystatechange",c=Rt,h=u?/^loaded|^c/:/^loaded|c/,p=h.test(s[c]);return s[f]&&s[f](a,r=function(){s[vt](a,r,i),t()},i),u&&s.attachEvent(l,r=function(){/^c/.test(s[c])&&(s.detachEvent(l,r),t())}),e=u?function(t){self!=top?p?t():n[q](t):function(){try{o.doScroll("left")}catch(n){return setTimeout(function(){e(t)},50)}t()}()}:function(e){p?e():n[q](e)}}),document[i]?Qt[i]=function(e){return document[i](e)}:Qt[i]=function(e){var t=document;return t[Dt]?t[Dt](("."+e[D](" "," ."))[D](/\.([0-9])/,Wt)):[]},Array[Bt][B]?Qt[B]=function(e,t){return e[B](t)}:Qt[B]=function(e,t){if(typeof e=="string")return e[B](t);var n,r=t?t:0,i;if(!this)throw new TypeError;i=this[f];if(i===0||r>=i)return-1;r<0&&(r=i-Math.abs(r));for(n=r;n<i;n++)if(this[n]===e)return n;return-1},Array[O]?Qt[O]=function(e){return Array[O](e)}:Qt[O]=function(e){return Object[Bt].toString.call(e)==="[object Array]"},Object.keys?Qt[n]=function(e,t){if(!e)return[];var n,r=Object.keys(e);for(n=0;r[n];n++)t(r[n])}:Qt[n]=function(e,t){if(!e)return[];var n;for(n in e)Object[Bt][qt].call(e,n)&&t(n)},window.matchMedia?Qt[R]=function(e){return e==""?E:window.matchMedia(e).matches}:window.styleMedia||window[Et]?Qt[R]=function(e){if(e=="")return E;var t=window.styleMedia||window[Et];return t.matchMedium(e||"all")}:window[K]?Qt[R]=function(e){if(e=="")return E;var t=document[N]("style"),n=document[u]("script")[0],r=c;t.type=ft,t.id="matchmediajs-test",n[S][g](t,n),r=K in window&&window[K](t,c)||t.currentStyle;var i="@media "+e+"{ #matchmediajs-test { width: 1px; } }";return t.styleSheet?t.styleSheet.cssText=i:t.textContent=i,r.width==="1px"}:(Qt[Lt]=E,Qt[R]=function(e){if(e=="")return E;var t,n,r,i,s={"min-width":c,"max-width":c},o=a;n=e[Ct](/\s+and\s+/);for(i in n)t=n[i],t.charAt(0)=="("&&(t=t[L](1,t[f]-1),r=t[Ct](/:\s+/),r[f]==2&&(s[r[0][D](/^\s+|\s+$/g,"")]=parseInt(r[1]),o=E));if(!o)return a;var u=document[it].clientWidth,l=document[it].clientHeight;return s[Ht]!==c&&u<s[Ht]||s[Pt]!==c&&u>s[Pt]||s[_t]!==c&&l<s[_t]||s[Mt]!==c&&l>s[Mt]?a:E})},preInit:function(){var e=document[u]("script");Qt.me=e[e[f]-1],Qt.initUtilityMethods(),Qt.initAPI(),Qt[Z](kt,document[u](kt)[0]),Qt[Z](P,document[u](P)[0]),Qt[J](function(){Qt[Z]("body",document[u]("body")[0])}),Qt[y][nt]>=10&&Qt[ut](Qt[H]("msie-viewport-fix",Qt[w]("@-ms-viewport{width:device-width;}"),G,1))}};return Qt.preInit(),Qt[y][nt]<9&&(Qt[Nt]=function(e){},Qt[w]=function(e){var t;return t=document[N]("span"),t[jt]='&nbsp;<style type="text/css">'+e+"</style>",t}),Qt}();
/* skel-layers.js v1.0.3 | (c) n33 | getskel.com | MIT licensed */
skel.registerPlugin("layers",function(e){function cn(e,r,i){var o,u;this.id=e,this.index=i,this[n]={breakpoints:x,states:x,position:x,side:x,animation:mt,orientation:mt,width:0,height:0,zIndex:this.index,html:"",hidden:H,exclusive:V,resetScroll:V,resetForms:V,swipeToHide:V,clickToHide:H},t._.extend(this[n],r),this[j]=t._.newDiv(this[n][jt]),this[j].id=e,this[j]._layer=this,this[s]=x,this[bt]=x,this[St]=x,this[z]=H,u=t._.newElement(this.id,this[j],ut,1),u.onAttach=function(){var e=this[$t]._layer;e[Z]()||e.init(),e.resume()},u.onDetach=function(){var e=this[$t]._layer;e.suspend()},this[n].states&&this[n].states!=t._.sd?(t._.cacheElement(u),o=t._[un](this[n].states),t._[Ht](o,function(e){t._.addCachedElementToState(o[e],u)})):this[n].breakpoints?(t._.cacheElement(u),o=t._[un](this[n].breakpoints),t._[Ht](o,function(e){t._.addCachedElementToBreakpoint(o[e],u)})):t._.attachElement(u)}var t,n="config",r="_skel_layers_translateOrigin",i="cache",s="$element",o="_skel_layers_translate",u="visibleWrapper",f="_skel_layers_resetForms",l="_skel_layers_resume",c="_skel_layers_promote",h="exclusiveLayer",p="_skel_layers_demote",d="moveToVisibleWrapper",v="setTimeout",m="moveToHiddenWrapper",g="right",y="bottom",b="position",w="useActive",E="width",S="css",x=null,T="center",N="_skel_layers_suspend",C="prototype",k="left",L="wrapper",A="skel-layers-layer-z-index",O="children",M="_skel_layers_init",_="skel-layers-moved",D="overflow-x",P="hiddenWrapper",H=!1,B="scrollTop",j="element",F=".skel-layers-fixed:not(.skel-layers-moved)",I="transform",q="top",R="height",U="length",z="visible",W="touchstart.lock click.lock scroll.lock",X='<div id="skel-layers-placeholder-',V=!0,$="resetForms",J="-webkit-",K="recalcW",Q="skel-layers-exclusiveVisible",G="padding-bottom",Y="-webkit-tap-highlight-color",Z="isInitialized",et="animation",tt="originalEvent",nt="hidden",rt="skel-layers-layer-index",it="z-index",st="skel-layers-layer-position",ot="unlockView",ut="skel_layers_hiddenWrapper",at="#skel-layers-placeholder-",ft="animations",lt="_skel_layers_initializeCell",ct="layers",ht="append",pt="resize.lock scroll.lock",dt="speed",vt="registerLocation",mt="none",gt="undefined",yt="orientationchange.lock",bt="touchPosX",wt="window",Et="stopPropagation",St="touchPosY",xt="positions",Tt="-moz-",Nt="blur",Ct="_skel_layers_expandCell",kt="preventDefault",Lt="_skel_layers_hasParent",At="attr",Ot="find",Mt="deviceType",_t="-ms-",Dt="addClass",Pt="DOMReady",Ht="iterate",Bt="lockView",jt="html",Ft="auto",It="hide",qt="_skel_layers_xcss",Rt="transformBreakpoints",Ut="-o-",zt="rgba(0,0,0,0)",Wt="trigger",Xt="removeClass",Vt="appendTo",$t="object",Jt="cell-size",Kt="-",Qt="body",Gt="px",Yt="recalcH",Zt="touches",en="side",tn="isVisible",nn="relative",rn="show",sn="transformTest",on="*",un="getArray",an="#",fn="x",ln="htmlbody";return typeof e==gt?H:(e.fn[p]=function(){var t,n;if(this[U]>1){for(t=0;t<this[U];t++)e(this[t])[p]();return e(this)}return n=e(this),n[S](it,n.data(A)).data(A,""),n},e.fn[Ct]=function(){var t=e(this),n=t.parent(),r=12;n[O]().each(function(){var t=e(this),n=t[At]("class");n&&n.match(/(\s+|^)([0-9]+)u(\s+|$)/)&&(r-=parseInt(RegExp.$2))}),r>0&&(t[lt](),t[S](E,(t.data(Jt)+r)/12*100+"%"))},e.fn[Lt]=function(){return e(this).parents()[U]>0},e.fn[lt]=function(){var t=e(this);t[At]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/)&&t.data(Jt,parseInt(RegExp.$2))},e.fn[c]=function(r){var i,s,o;if(this[U]>1){for(i=0;i<this[U];i++)e(this[i])[c](r);return e(this)}return s=e(this),isNaN(o=parseInt(s.data(rt)))&&(o=0),s.data(A,s[S](it))[S](it,t[n].baseZIndex+o+(r?r:1)),s},e.fn[f]=function(){var t=e(this);return e(this)[Ot]("form").each(function(){this.reset()}),t},e.fn[qt]=function(t,n){return e(this)[S](t,n)[S](Tt+t,Tt+n)[S](J+t,J+n)[S](Ut+t,Ut+n)[S](_t+t,_t+n)},e.fn._skel_layers_xcssProperty=function(t,n){return e(this)[S](t,n)[S](Tt+t,n)[S](J+t,n)[S](Ut+t,n)[S](_t+t,n)},e.fn._skel_layers_xcssValue=function(t,n){return e(this)[S](t,n)[S](t,Tt+n)[S](t,J+n)[S](t,Ut+n)[S](t,_t+n)},cn[C][ft]={none:{show:function(e){var t=e[n],r=e[s];r[B](0)[c](t.zIndex)[rn](),t[$]&&r[f](),e[d]()},hide:function(e){var t=e[n],r=e[s];r[It]()[p](),e[m]()}},overlayX:{show:function(e){var r=e[n],i=e[s];i[B](0)[c](r.zIndex)[S](r[en],Kt+t[K](t._[w](r[E]))+Gt)[rn](),r[$]&&i[f](),t[Bt](fn),e[d](),window[v](function(){i[o]((r[en]==g?Kt:"")+t[K](t._[w](r[E])),0)},50)},hide:function(e){var i=e[n],o=e[s];o[Ot](on)[Wt](Nt,[V]),o[r](),window[v](function(){t[ot](fn),e[m](),o[p]()[It]()},t[n][dt]+50)}},overlayY:{show:function(e){var r=e[n],i=e[s];i[B](0)[c](r.zIndex)[S](r[en],Kt+t[K](t._[w](r[R]))+Gt)[rn](),r[$]&&i[f](),t[Bt]("y"),e[d](),window[v](function(){i[o](0,(r[en]==y?Kt:"")+t[K](t._[w](r[R])))},50)},hide:function(e){var i=e[n],o=e[s];o[Ot](on)[Wt](Nt,[V]),o[r](),window[v](function(){t[ot]("y"),e[m](),o[p]()[It]()},t[n][dt]+50)}},pushX:{show:function(e){var r=e[n],a=e[s],l=t[i][L].add(t[i][u][O]());a[B](0)[S](r[en],Kt+t[K](t._[w](r[E]))+Gt)[rn](),r[$]&&a[f](),l[c](),t[Bt](fn),e[d](),window[v](function(){a.add(l)[o]((r[en]==g?Kt:"")+t[K](t._[w](r[E])),0)},50)},hide:function(e){var o=e[n],a=e[s],f=t[i][L].add(t[i][u][O]());a[Ot](on)[Wt](Nt,[V]),a.add(f)[r](),window[v](function(){t[ot](fn),a[It](),e[m](),f[p]()},t[n][dt]+50)}},pushY:{show:function(e){var r=e[n],a=e[s],l=t[i][L].add(t[i][u][O]());a[B](0)[S](r[en],Kt+t[Yt](t._[w](r[R]))+Gt)[rn](),r[$]&&a[f](),t[Bt]("y"),e[d](),window[v](function(){a.add(l)[o](0,(r[en]==y?Kt:"")+t[Yt](t._[w](r[R])))},50)},hide:function(e){var o=e[n],a=e[s],f=t[i][L].add(t[i][u][O]());a[Ot](on)[Wt](Nt,[V]),a.add(f)[r](),window[v](function(){t[ot]("y"),a[It](),e[m]()},t[n][dt]+50)}},revealX:{show:function(e){var r=e[n],a=e[s],l=t[i][L].add(t[i][u][O]());a[B](0)[rn](),r[$]&&a[f](),l[c](),t[Bt](fn),e[d](),window[v](function(){l[o]((r[en]==g?Kt:"")+t[K](t._[w](r[E])),0)},50)},hide:function(e){var o=e[n],a=e[s],f=t[i][L].add(t[i][u][O]());a[Ot](on)[Wt](Nt,[V]),f[r](),window[v](function(){t[ot](fn),a[It](),f[p](),e[m]()},t[n][dt]+50)}}},cn[C][xt]={"top-left":{v:q,h:k,side:k},"top-right":{v:q,h:g,side:g},top:{v:q,h:T,side:q},"top-center":{v:q,h:T,side:q},"bottom-left":{v:y,h:k,side:k},"bottom-right":{v:y,h:g,side:g},bottom:{v:y,h:T,side:y},"bottom-center":{v:y,h:T,side:y},left:{v:T,h:k,side:k},"center-left":{v:T,h:k,side:k},right:{v:T,h:g,side:g},"center-right":{v:T,h:g,side:g}},cn[C][rn]=function(){var e,r,o,a,f;if(this[z]){t[i][u][ht](this[j]);return}e=this,r=this[n],o=t._[w](r[et]),a=this[s],a[S](E,t._[w](r[E]))[S](R,t._[w](r[R])),t._.vars[Mt]=="ios"&&(r[R]=="100%"&&!r[nt]&&a[S](R,"-webkit-calc("+t._[w](r[R])+" + 70px)"),a.on(Nt,"input,select,textarea",function(n,r){if(r)return;window[v](function(){t[i][P][ht](e[j]),window[v](function(){t[i][u][ht](e[j])},500)},500)})),f=this[xt][r[b]],a[Dt]("skel-layer-"+r[b]).data(st,r[b]);switch(f.v){case q:a[S](q,0);break;case y:a[S](y,0);break;case T:a[S](q,"50%")[S]("margin-top",Kt+t.getHalf(r[R]))}switch(f.h){case k:a[S](k,0);break;case g:a[S](g,0);break;case T:a[S](k,"50%")[S]("margin-left",Kt+t.getHalf(r[E]))}this[ft][o][rn](this),r[nt]&&r.exclusive&&(t[i][Qt][Dt](Q),t[i][h]=this),this[z]=V},cn[C][It]=function(){var e,r;if(!this[z]){t[i][P][ht](this[j]);return}e=this[n],r=t._[w](e[et]),r in this[ft]||(r=mt),this[ft][r][It](this),e[nt]&&e.exclusive&&t[i][h]===this&&(t[i][Qt][Xt](Q),t[i][h]=x),this[z]=H},cn[C].init=function(){var r=this[n],i=e(this[j]),o=this;i[M](),i[Ot](on).each(function(){t.parseInit(e(this))}),i[Dt]("skel-layer").data(rt,this.index)[S](it,t[n].baseZIndex)[S](b,"fixed")[S]("-ms-overflow-style","-ms-autohiding-scrollbar")[S]("-webkit-overflow-scrolling","touch")[It]();switch(r.orientation){case"vertical":i[S]("overflow-y",Ft);break;case"horizontal":i[S](D,Ft);break;case mt:default:}if(!r[b]||!(r[b]in this[xt]))r[b]="top-left";r[en]||(r[en]=this[xt][r[b]][en]);if(!r[et]||typeof r[et]!==$t&&!(r[et]in this[ft]))r[et]=mt;r.clickToHide&&i[Ot]("a")[S](Y,zt).on("click.skel-layers",function(r){var i,s,u=e(this);if(u.hasClass("skel-layers-ignore"))return;r[kt](),r[Et](),o[It]();if(u.hasClass("skel-layers-ignoreHref"))return;i=u[At]("href"),s=u[At]("target"),typeof i!==gt&&i!=""&&window[v](function(){s=="_blank"&&t._.vars[Mt]!="wp"?window.open(i):window.location.href=i},t[n][dt]+10)}),i.on("touchstart",function(e){o[bt]=e[tt][Zt][0].pageX,o[St]=e[tt][Zt][0].pageY}).on("touchmove",function(e){var t,n,s,u,a,f,l;if(o[bt]===x||o[St]===x)return;t=o[bt]-e[tt][Zt][0].pageX,n=o[St]-e[tt][Zt][0].pageY,s=i.outerHeight(),u=i.get(0).scrollHeight-i[B]();if(r[nt]&&r.swipeToHide){a=H,f=20,l=50;switch(r[en]){case k:a=n<f&&n>-1*f&&t>l;break;case g:a=n<f&&n>-1*f&&t<-1*l;break;case q:a=t<f&&t>-1*f&&n>l;break;case y:a=t<f&&t>-1*f&&n<-1*l}if(a)return o[bt]=x,o[St]=x,o[It](),H}if(i[B]()==0&&n<0||u>s-2&&u<s+2&&n>0)return H}),this[s]=i},cn[C][Z]=function(){return this[s]!==x},cn[C][tn]=function(){return this[s].is(":visible")},cn[C][d]=function(){t[i][u][ht](this[s])},cn[C][m]=function(){if(!this[s][Lt]())return;t[i][P][ht](this[s])},cn[C].resume=function(r){if(!this[Z]())return;this[s][Ot](on).each(function(){t.parseResume(e(this))}),this[n][nt]||this[rn](r)},cn[C].suspend=function(){if(!this[Z]())return;this[s][r](),this[s][Ot](on).each(function(){t.parseSuspend(e(this))}),this[z]&&this[It]()},t={cache:{visibleWrapper:x,body:x,exclusiveLayer:x,html:x,htmlbody:x,hiddenWrapper:x,layers:{},window:x,wrapper:x},config:{baseZIndex:1e4,layers:{},speed:250,transform:V,transformBreakpoints:x,transformTest:x},eventType:"click touchend",show:function(e){t._[Pt](function(){t[i][ct][e][rn]()})},hide:function(e){t._[Pt](function(){t[i][ct][e][It]()})},toggle:function(e){t._[Pt](function(){var n=t[i][ct][e];n[tn]()?n[It]():n[rn]()})},getBaseFontSize:function(){return t._.vars.IEVersion<9?16.5:parseFloat(getComputedStyle(t[i][Qt].get(0)).fontSize)},getHalf:function(e){var t=parseInt(e);return typeof e=="string"&&e.charAt(e[U]-1)=="%"?Math.floor(t/2)+"%":Math.floor(t/2)+Gt},lockView:function(e){t[i][wt]._skel_layers_scrollPos=t[i][wt][B](),e==fn&&t[i][ln][S](D,nt),t[i][L].on(W,function(e){e[kt](),e[Et](),t[i][h]&&t[i][h][It]()}),t[i][wt].on(yt,function(e){t[i][h]&&t[i][h][It]()}),t._.vars.isMobile||window[v](function(){t[i][wt].on(pt,function(e){t[i][h]&&t[i][h][It]()})},t[n][dt]+50)},parseInit:function(n){var r,s,o=n.get(0),u=n[At]("data-action"),a=n[At]("data-args"),f,c;u&&a&&(a=a.split(","));switch(u){case"toggleLayer":case"layerToggle":n[S](Y,zt)[S]("cursor","pointer"),r=function(n){n[kt](),n[Et]();if(t[i][h])return t[i][h][It](),H;var r=e(this),s=t[i][ct][a[0]];s[tn]()?s[It]():s[rn]()},n.on(t.eventType,r);break;case"navList":f=e(an+a[0]),r=f[Ot]("a"),s=[],r.each(function(){var t=e(this),n,r;n=Math.max(0,t.parents("li")[U]-1),r=t[At]("href"),s.push('<a class="link depth-'+n+'"'+(typeof r!==gt&&r!=""?' href="'+r+'"':"")+'><span class="indent-'+n+'"></span>'+t.text()+"</a>")}),s[U]>0&&n[jt]("<nav>"+s.join("")+"</nav>");break;case"copyText":f=e(an+a[0]),n[jt](f.text());break;case"copyHTML":f=e(an+a[0]),n[jt](f[jt]());break;case"moveElementContents":f=e(an+a[0]),o[l]=function(){f[O]().each(function(){var t=e(this);n[ht](t),t[Dt](_)})},o[N]=function(){n[O]().each(function(){var n=e(this);f[ht](n),n[Xt](_),t.refresh(n)})},o[l]();break;case"moveElement":f=e(an+a[0]),o[l]=function(){e(X+f[At]("id")+'" />').insertBefore(f),n[ht](f),f[Dt](_)},o[N]=function(){e(at+f[At]("id")).replaceWith(f),f[Xt](_),t.refresh(f)},o[l]();break;case"moveCell":f=e(an+a[0]),c=e(an+a[1]),o[l]=function(){e(X+f[At]("id")+'" />').insertBefore(f),n[ht](f),f[S](E,Ft),c&&c[Ct]()},o[N]=function(){e(at+f[At]("id")).replaceWith(f),f[S](E,""),c&&c[S](E,"")},o[l]();break;default:}},parseResume:function(e){var t=e.get(0);t[l]&&t[l]()},parseSuspend:function(e){var t=e.get(0);t[N]&&t[N]()},recalc:function(e,n){var r=t._.parseMeasurement(e),i;switch(r[1]){case"%":i=Math.floor(n*(r[0]/100));break;case"em":i=t.getBaseFontSize()*r[0];break;default:case Gt:i=r[0]}return i},recalcH:function(n){return t.recalc(n,e(window)[R]())},recalcW:function(n){return t.recalc(n,e(window)[E]())},refresh:function(r){var s;t[n][I]&&(r?s=r.filter(F):s=e(F),s[M]()[Vt](t[i][u]))},unlockView:function(e){e==fn&&t[i][ln][S](D,z),t[i][L].off(W),t[i][wt].off(yt),t._.vars.isMobile||t[i][wt].off(pt)},init:function(){n in t[n]&&(t._.extend(t[n],t[n][n]),delete t[n][n]),t._[Ht](t[n],function(e){t[n][e]&&typeof t[n][e]==$t&&b in t[n][e]&&(t[n][ct][e]=t[n][e],delete t[n][e])}),t[n][sn]&&(t[n][I]=t[n][sn]());if(t[n][I]){if(t._.vars[Mt]=="android"&&t._.vars.deviceVersion<4||t._.vars[Mt]=="wp")t[n][I]=H;t._.vars.IEVersion<10&&(t[n][I]=H),t[n][Rt]&&!t._.hasActive(t._[un](t[n][Rt]))&&(t[n][I]=H)}t.initObjects(),t.initTransforms(),t._[Pt](function(){t.initLayers(),t.initIncludes(),t._.updateState(),t.refresh()})},initIncludes:function(){e(".skel-layers-include").each(function(){t.parseInit(e(this))})},initLayers:function(){var r,s,o,u=1;t._[Ht](t[n][ct],function(r){var s;if(!(b in t[n][ct][r]))return;if(!t[n][ct][r][jt]&&(s=e(an+r))[U]==0)return;o=new cn(r,t[n][ct][r],u++),t[i][ct][r]=o,s&&(s[O]()[Vt](o[j]),s.remove())})},initObjects:function(){t[i][wt]=e(window),t._[Pt](function(){t[i][jt]=e(jt),t[i][Qt]=e(Qt),t[i][ln]=e("html,body"),t[i][Qt].wrapInner('<div id="skel-layers-wrapper" />'),t[i][L]=e("#skel-layers-wrapper"),t[i][L][S](b,nn)[S](k,"0")[S](g,"0")[S](q,"0")[M](),t[i][P]=e('<div id="skel-layers-hiddenWrapper" />')[Vt](t[i][Qt]),t[i][P][S](R,"100%"),t[i][u]=e('<div id="skel-layers-visibleWrapper" />')[Vt](t[i][Qt]),t[i][u][S](b,nn),t._[vt](ut,t[i][P][0]),t._[vt]("skel_layers_visibleWrapper",t[i][u][0]),t._[vt]("skel_layers_wrapper",t[i][L][0]),e("[autofocus]").focus()})},initTransforms:function(){if(t[n][I])e.fn[r]=function(){return e(this)[o](0,0)},e.fn[o]=function(t,n){return e(this)[S](I,"translate("+t+"px, "+n+"px)")},e.fn[M]=function(){return e(this)[S]("backface-visibility",nt)[S]("perspective","500")[qt]("transition","transform "+t[n][dt]/1e3+"s ease-in-out")};else{var s,u=[];t[i][wt].resize(function(){if(t[n][dt]!=0){var e=t[n][dt];t[n][dt]=0,window[v](function(){t[n][dt]=e,u=[]},e)}}),e.fn[r]=function(){for(var r=0;r<this[U];r++){var s=this[r],o=e(s);u[s.id]&&o.animate(u[s.id],t[n][dt],"swing",function(){t._[Ht](u[s.id],function(e){o[S](e,u[s.id][e])}),t[i][Qt][S](D,z),t[i][L][S](E,Ft)[S](G,0)})}return e(this)},e.fn[o]=function(r,s){var o,f,l,c;r=parseInt(r),s=parseInt(s),r!=0?(t[i][Qt][S](D,nt),t[i][L][S](E,t[i][wt][E]())):l=function(){t[i][Qt][S](D,z),t[i][L][S](E,Ft)},s<0?t[i][L][S](G,Math.abs(s)):c=function(){t[i][L][S](G,0)};for(o=0;o<this[U];o++){var h=this[o],p=e(h),d;if(!u[h.id])if(d=cn[C][xt][p.data(st)]){u[h.id]={};switch(d.v){case T:case q:u[h.id][q]=parseInt(p[S](q));break;case y:u[h.id][y]=parseInt(p[S](y))}switch(d.h){case T:case k:u[h.id][k]=parseInt(p[S](k));break;case g:u[h.id][g]=parseInt(p[S](g))}}else d=p[b](),u[h.id]={top:d[q],left:d[k]};a={},t._[Ht](u[h.id],function(e){var n;switch(e){case q:n=t[Yt](u[h.id][e])+s;break;case y:n=t[Yt](u[h.id][e])-s;break;case k:n=t[K](u[h.id][e])+r;break;case g:n=t[K](u[h.id][e])-r}a[e]=n}),p.animate(a,t[n][dt],"swing",function(){l&&l(),c&&c()})}return e(this)},e.fn[M]=function(){return e(this)[S](b,"absolute")}}}},t)}(jQuery));
/*
	Helios by HTML5 UP
	html5up.net | @n33co
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var settings = {
		
		// Header (homepage only)
			header: {
				fullScreen: true,
				fadeIn: true,
				fadeDelay: 500
			},

		// Carousels
			carousels: {
				speed: 4,
				fadeIn: true,
				fadeDelay: 250
			},
	
	};
	
	skel.init({
		reset: 'full',
		breakpoints: {
			'global':	{ range: '*', href: 'css/style.css', containers: 1400, grid: { gutters: 48 } },
			'wide':		{ range: '-1680', href: 'css/style-wide.css', containers: 1200 },
			'normal':	{ range: '-1280', href: 'css/style-normal.css', containers: '100%', grid: { gutters: 36 } },
			'narrow':	{ range: '-960', href: 'css/style-narrow.css', grid: { gutters: 32 } },
			'narrower': { range: '-840', href: 'css/style-narrower.css', containers: '100%!', grid: { collapse: true } },
			'mobile':	{ range: '-736', href: 'css/style-mobile.css', grid: { gutters: 20 }, viewport: { scalable: false } }
		},
		plugins: {
			layers: {
				config: {
					transformTest: function() { return skel.vars.isMobile; }
				},
				navPanel: {
					hidden: true,
					breakpoints: 'mobile',
					position: 'top-left',
					side: 'top',
					width: '100%',
					height: 250,
					animation: 'pushY',
					clickToHide: true,
					swipeToHide: false,
					html: '<div data-action="navList" data-args="nav"></div>',
					orientation: 'vertical'
				},
				navButton: {
					breakpoints: 'mobile',
					position: 'top-center',
					side: 'top',
					width: 100,
					height: 50,
					html: '<div class="toggle" data-action="toggleLayer" data-args="navPanel"></div>'
				}
			}
		}
	});

	$(function() {

		var	$window = $(window),
			$body = $('body'),
			$header =  $('#header');
			
		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');
			
			$window.on('load', function() {
				$body.removeClass('is-loading');
			});
			
		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Forms (IE<10).
			var $form = $('form');
			if ($form.length > 0) {
				
				$form.find('.form-button-submit')
					.on('click', function() {
						$(this).parents('form').submit();
						return false;
					});
		
				if (skel.vars.IEVersion < 10) {
					$.fn.n33_formerize=function(){var _fakes=new Array(),_form = $(this);_form.find('input[type=text],textarea').each(function() { var e = $(this); if (e.val() == '' || e.val() == e.attr('placeholder')) { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).blur(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } }).focus(function() { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) return; if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); _form.find('input[type=password]').each(function() { var e = $(this); var x = $($('<div>').append(e.clone()).remove().html().replace(/type="password"/i, 'type="text"').replace(/type=password/i, 'type=text')); if (e.attr('id') != '') x.attr('id', e.attr('id') + '_fakeformerizefield'); if (e.attr('name') != '') x.attr('name', e.attr('name') + '_fakeformerizefield'); x.addClass('formerize-placeholder').val(x.attr('placeholder')).insertAfter(e); if (e.val() == '') e.hide(); else x.hide(); e.blur(function(event) { event.preventDefault(); var e = $(this); var x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } }); x.focus(function(event) { event.preventDefault(); var x = $(this); var e = x.parent().find('input[name=' + x.attr('name').replace('_fakeformerizefield', '') + ']'); x.hide(); e.show().focus(); }); x.keypress(function(event) { event.preventDefault(); x.val(''); }); });  _form.submit(function() { $(this).find('input[type=text],input[type=password],textarea').each(function(event) { var e = $(this); if (e.attr('name').match(/_fakeformerizefield$/)) e.attr('name', ''); if (e.val() == e.attr('placeholder')) { e.removeClass('formerize-placeholder'); e.val(''); } }); }).bind("reset", function(event) { event.preventDefault(); $(this).find('select').val($('option:first').val()); $(this).find('input,textarea').each(function() { var e = $(this); var x; e.removeClass('formerize-placeholder'); switch (this.type) { case 'submit': case 'reset': break; case 'password': e.val(e.attr('defaultValue')); x = e.parent().find('input[name=' + e.attr('name') + '_fakeformerizefield]'); if (e.val() == '') { e.hide(); x.show(); } else { e.show(); x.hide(); } break; case 'checkbox': case 'radio': e.attr('checked', e.attr('defaultValue')); break; case 'text': case 'textarea': e.val(e.attr('defaultValue')); if (e.val() == '') { e.addClass('formerize-placeholder'); e.val(e.attr('placeholder')); } break; default: e.val(e.attr('defaultValue')); break; } }); window.setTimeout(function() { for (x in _fakes) _fakes[x].trigger('formerize_sync'); }, 10); }); return _form; };
					$form.n33_formerize();
				}

			}

		// Dropdowns.
			$('#nav > ul').dropotron({ 
				mode: 'fade',
				speed: 350,
				noOpenerFade: true,
				alignment: 'center'
			});

		// Scrolly links.
			$('.scrolly').scrolly();			

		// Carousels.
			$('.carousel').each(function() {
				
				var	$t = $(this),
					$forward = $('<span class="forward"></span>'),
					$backward = $('<span class="backward"></span>'),
					$reel = $t.children('.reel'),
					$items = $reel.children('article');
				
				var	pos = 0,
					leftLimit,
					rightLimit,
					itemWidth,
					reelWidth,
					timerId;

				// Items.
					if (settings.carousels.fadeIn) {
						
						$items.addClass('loading');

						$t.onVisible(function() {
							var	timerId,
								limit = $items.length - Math.ceil($window.width() / itemWidth);
							
							timerId = window.setInterval(function() {
								var x = $items.filter('.loading'), xf = x.first();
								
								if (x.length <= limit) {
									
									window.clearInterval(timerId);
									$items.removeClass('loading');
									return;
								
								}
								
								if (skel.vars.IEVersion < 10) {
									
									xf.fadeTo(750, 1.0);
									window.setTimeout(function() {
										xf.removeClass('loading');
									}, 50);
								
								}
								else
									xf.removeClass('loading');
								
							}, settings.carousels.fadeDelay);
						}, 50);
					}
				
				// Main.
					$t._update = function() {
						pos = 0;
						rightLimit = (-1 * reelWidth) + $window.width();
						leftLimit = 0;
						$t._updatePos();
					};
				
					if (skel.vars.IEVersion < 9)
						$t._updatePos = function() { $reel.css('left', pos); };
					else
						$t._updatePos = function() { $reel.css('transform', 'translate(' + pos + 'px, 0)'); };
					
				// Forward.
					$forward
						.appendTo($t)
						.hide()
						.mouseenter(function(e) {
							timerId = window.setInterval(function() {
								pos -= settings.carousels.speed;

								if (pos <= rightLimit)
								{
									window.clearInterval(timerId);
									pos = rightLimit;
								}
								
								$t._updatePos();
							}, 10);
						})
						.mouseleave(function(e) {
							window.clearInterval(timerId);
						});
				
				// Backward.
					$backward
						.appendTo($t)
						.hide()
						.mouseenter(function(e) {
							timerId = window.setInterval(function() {
								pos += settings.carousels.speed;

								if (pos >= leftLimit) {
									
									window.clearInterval(timerId);
									pos = leftLimit;
								
								}
								
								$t._updatePos();
							}, 10);
						})
						.mouseleave(function(e) {
							window.clearInterval(timerId);
						});
						
				// Init.
					$window.load(function() {

						reelWidth = $reel[0].scrollWidth;

						skel.change(function() {
				
							if (skel.vars.isTouch) {
								
								$reel
									.css('overflow-y', 'hidden')
									.css('overflow-x', 'scroll')
									.scrollLeft(0);
								$forward.hide();
								$backward.hide();
							
							}
							else {
								
								$reel
									.css('overflow', 'visible')
									.scrollLeft(0);
								$forward.show();
								$backward.show();
							
							}

							$t._update();
						});

						$window.resize(function() {
							reelWidth = $reel[0].scrollWidth;
							$t._update();
						}).trigger('resize');

					});
				
			});
		
		// Header.
			if ($body.hasClass('homepage')) {
				
				if (settings.header.fullScreen) {
					
					$window.bind('resize.helios', function() {
						window.setTimeout(function() {
							var s = $header.children('.inner');
							var sh = s.outerHeight(), hh = $window.height(), h = Math.ceil((hh - sh) / 2) + 1;

							$header
								.css('padding-top', h)
								.css('padding-bottom', h);
						}, 0);
					}).trigger('resize');
				
				}

				if (settings.header.fadeIn) {

					$.n33_preloadImage = function(url, onload) { var $img = $('<img />'), _IEVersion = (navigator.userAgent.match(/MSIE ([0-9]+)\./) ? parseInt(RegExp.$1) : 99); $img.attr('src', url); if ($img.get(0).complete || _IEVersion < 9) (onload)(); else $img.load(onload); };
					
					$('<div class="overlay" />').appendTo($header);
					
					$window
						.load(function() {
							var imageURL = $header.css('background-image').replace(/"/g,"").replace(/url\(|\)$/ig, "");

							$.n33_preloadImage(imageURL, function() {
								
								if (skel.vars.IEVersion < 10)
									$header.children('.overlay').fadeOut(2000);
								else
									window.setTimeout(function() {
										$header.addClass('ready');
									}, settings.header.fadeDelay);
							
							});
						});
				
				}

			}

	});

})(jQuery);
/*
	Compilation of functions for jQuery & Javascripts functions effets
*/

        $(function()
        { 
            $(window).scroll(function()
            {
                    if ($(this).scrollTop() > 100) 
                    {
                            $('.scrollup').fadeIn();
                    } 

                    else 
                    {
                            $('.scrollup').fadeOut();
                    }
            }); 

            $('.scrollup').click(function()
            {
                    $("html, body").animate({ scrollTop: 0 }, 600);
                    return false;
            });
        });
    
    
/*
 * Ideal Image Slider v1.4.0
 *
 * By Gilbert Pellegrom
 * http://gilbert.pellegrom.me
 *
 * Copyright (C) 2014 Dev7studios
 * https://raw.githubusercontent.com/gilbitron/Ideal-Image-Slider/master/LICENSE
 */

var IdealImageSlider = (function() {
	"use strict";

	/*
	 * Helper functions
	 */
	var _deepExtend = function(out) {
		out = out || {};
		for(var i = 1; i < arguments.length; i++){
			var obj = arguments[i];
			if(!obj)
				continue;
			for(var key in obj){
				if(obj.hasOwnProperty(key)){
					if(typeof obj[key] === 'object')
						deepExtend(out[key], obj[key]);
					else
						out[key] = obj[key];
				}
			}
		}
		return out;
	};

	var _hasClass = function(el, className) {
		if(!className) return false;
		if(el.classList){
			return el.classList.contains(className);
		} else {
			return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className);
		}
	};

	var _addClass = function(el, className) {
		if(!className) return;
		if(el.classList){
			el.classList.add(className);
		} else {
			el.className += ' ' + className;
		}
	};

	var _removeClass = function(el, className) {
		if(!className) return;
		if(el.classList){
			el.classList.remove(className);
		} else {
			el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
		}
	};

	var _toArray = function(obj) {
		return Array.prototype.slice.call(obj);
	};

	var _arrayRemove = function(array, from, to) {
		var rest = array.slice((to || from) + 1 || array.length);
		array.length = from < 0 ? array.length + from : from;
		return array.push.apply(array, rest);
	};

	var _loadImg = function(slide, callback) {
		if(!slide.style.backgroundImage){
			var img = new Image();
			img.setAttribute('src', slide.getAttribute('data-src'));
			img.onload = function() {
				slide.style.backgroundImage = 'url('+ slide.getAttribute('data-src') +')';
				if(typeof(callback) === 'function') callback(this);
			};
		}
	};

	var _isHighDPI = function() {
	    var mediaQuery = "(-webkit-min-device-pixel-ratio: 1.5),(min--moz-device-pixel-ratio: 1.5),(-o-min-device-pixel-ratio: 3/2),(min-resolution: 1.5dppx)";
	    if (window.devicePixelRatio > 1)
	        return true;
	    if (window.matchMedia && window.matchMedia(mediaQuery).matches)
	        return true;
	    return false;
	};

	var _translate = function(slide, dist, speed) {
		slide.style.webkitTransitionDuration =
		slide.style.MozTransitionDuration =
		slide.style.msTransitionDuration =
		slide.style.OTransitionDuration =
		slide.style.transitionDuration = speed + 'ms';

		slide.style.webkitTransform =
		slide.style.MozTransform =
		slide.style.msTransform =
		slide.style.OTransform = 'translateX('+ dist +'px)';
	};

	var _unTranslate = function(slide) {
		slide.style.removeProperty('-webkit-transition-duration');
		slide.style.removeProperty('transition-duration');

		slide.style.removeProperty('-webkit-transform');
		slide.style.removeProperty('-ms-transform');
		slide.style.removeProperty('transform');
	};

	var _touch = {
		vars: {
			start: {},
			delta: {},
			isScrolling: undefined,
			direction: null
		},
		start: function(event) {
			if(_hasClass(this._attributes.container, this.settings.classes.animating)) return;

			var touches = event.touches[0];
			_touch.vars.start = {
				x: touches.pageX,
				y: touches.pageY,
				time: +new Date()
			};
			_touch.vars.delta = {};
			_touch.vars.isScrolling = undefined;
			_touch.vars.direction = null;

			this.stop(); // Stop slider

			this.settings.beforeChange.apply(this);
			_addClass(this._attributes.container, this.settings.classes.touching);
		},
		move: function(event) {
			if(_hasClass(this._attributes.container, this.settings.classes.animating)) return;
			// Ensure swiping with one touch and not pinching
			if(event.touches.length > 1 || event.scale && event.scale !== 1) return;

			var touches = event.touches[0];
			_touch.vars.delta = {
				x: touches.pageX - _touch.vars.start.x,
				y: touches.pageY - _touch.vars.start.y
			};

			if(typeof _touch.vars.isScrolling == 'undefined'){
				_touch.vars.isScrolling = !!(_touch.vars.isScrolling || Math.abs(_touch.vars.delta.x) < Math.abs(_touch.vars.delta.y));
			}

			// If user is not trying to scroll vertically
			if (!_touch.vars.isScrolling) {
				event.preventDefault(); // Prevent native scrolling

				_translate(this._attributes.previousSlide, _touch.vars.delta.x - this._attributes.previousSlide.offsetWidth, 0);
				_translate(this._attributes.currentSlide, _touch.vars.delta.x, 0);
				_translate(this._attributes.nextSlide, _touch.vars.delta.x + this._attributes.currentSlide.offsetWidth, 0);
			}
		},
		end: function(event) {
			if(_hasClass(this._attributes.container, this.settings.classes.animating)) return;

			var duration = +new Date() - _touch.vars.start.time;

			// Determine if slide attempt triggers next/prev slide
			var isChangeSlide = Number(duration) < 250 && Math.abs(_touch.vars.delta.x) > 20 || Math.abs(_touch.vars.delta.x) > this._attributes.currentSlide.offsetWidth/2;

			var direction = _touch.vars.delta.x < 0 ? 'next' : 'previous';
			var speed = this.settings.transitionDuration ? this.settings.transitionDuration/2 : 0;

			// If not scrolling vertically
			if(!_touch.vars.isScrolling){
				if(isChangeSlide){
					_touch.vars.direction = direction;

					if(_touch.vars.direction == 'next'){
						_translate(this._attributes.currentSlide, -this._attributes.currentSlide.offsetWidth, speed);
						_translate(this._attributes.nextSlide, 0, speed);
					} else {
						_translate(this._attributes.previousSlide, 0, speed);
						_translate(this._attributes.currentSlide, this._attributes.currentSlide.offsetWidth, speed);
					}

					setTimeout(_touch.transitionEnd.bind(this), speed);
				} else {
					// Slides return to original position
					if(direction == 'next'){
						_translate(this._attributes.currentSlide, 0, speed);
						_translate(this._attributes.nextSlide, this._attributes.currentSlide.offsetWidth, speed);
					} else {
						_translate(this._attributes.previousSlide, -this._attributes.previousSlide.offsetWidth, speed);
						_translate(this._attributes.currentSlide, 0, speed);
					}
				}

				if(speed){
					_addClass(this._attributes.container, this.settings.classes.animating);
					setTimeout(function(){
						_removeClass(this._attributes.container, this.settings.classes.animating);
					}.bind(this), speed);
				}
			}
		},
		transitionEnd: function(event) {
			if(_touch.vars.direction){
				_unTranslate(this._attributes.previousSlide);
				_unTranslate(this._attributes.currentSlide);
				_unTranslate(this._attributes.nextSlide);
				_removeClass(this._attributes.container, this.settings.classes.touching);

				_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
				_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
				_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
				this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

				var slides = this._attributes.slides,
					index = slides.indexOf(this._attributes.currentSlide);

				if(_touch.vars.direction == 'next'){
					this._attributes.previousSlide = this._attributes.currentSlide;
					this._attributes.currentSlide = slides[index+1];
					this._attributes.nextSlide = slides[index+2];
					if(typeof this._attributes.currentSlide === 'undefined' &&
					typeof this._attributes.nextSlide === 'undefined'){
						this._attributes.currentSlide = slides[0];
						this._attributes.nextSlide = slides[1];
					} else {
						if(typeof this._attributes.nextSlide === 'undefined'){
							this._attributes.nextSlide = slides[0];
						}
					}

					_loadImg(this._attributes.nextSlide);
				} else {
					this._attributes.nextSlide = this._attributes.currentSlide;
					this._attributes.previousSlide = slides[index-2];
					this._attributes.currentSlide = slides[index-1];
					if(typeof this._attributes.currentSlide === 'undefined' &&
					typeof this._attributes.previousSlide === 'undefined'){
						this._attributes.currentSlide = slides[slides.length-1];
						this._attributes.previousSlide = slides[slides.length-2];
					} else {
						if(typeof this._attributes.previousSlide === 'undefined'){
							this._attributes.previousSlide = slides[slides.length-1];
						}
					}

					_loadImg(this._attributes.previousSlide);
				}

				_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
				_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
				_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
				this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

				this.settings.afterChange.apply(this);
			}
		}
	};

	/*
	 * Slider class
	 */
	var Slider = function(args) {
		// Defaults
		this.settings = {
			selector: '',
			height: 400, // Required but can be set by CSS
			interval: 4000,
			transitionDuration: 700,
			effect: 'slide',
			disableNav: false,
			keyboardNav: true,
			previousNavSelector: '',
			nextNavSelector: '',
			classes: {
				container: 'ideal-image-slider',
				slide: 'iis-slide',
				previousSlide: 'iis-previous-slide',
				currentSlide: 'iis-current-slide',
				nextSlide: 'iis-next-slide',
				previousNav: 'iis-previous-nav',
				nextNav: 'iis-next-nav',
				animating: 'iis-is-animating',
				touchEnabled: 'iis-touch-enabled',
				touching: 'iis-is-touching',
				directionPrevious: 'iis-direction-previous',
				directionNext: 'iis-direction-next'
			},
			onInit: function(){},
			onStart: function(){},
			onStop: function(){},
			onDestroy: function(){},
			beforeChange: function(){},
			afterChange: function(){}
		};

		// Parse args
		if(typeof args === 'string'){
			this.settings.selector = args;
		}
		else if(typeof args === 'object'){
			_deepExtend(this.settings, args);
		}

		// Slider (container) element
		var sliderEl = document.querySelector(this.settings.selector);
		if(!sliderEl) return null;

		// Slides
		var origChildren = _toArray(sliderEl.children),
			validSlides = [];
		sliderEl.innerHTML = '';
		Array.prototype.forEach.call(origChildren, function(slide, i){
			if(slide instanceof HTMLImageElement || slide instanceof HTMLAnchorElement){
				var slideEl = document.createElement('a'),
					href = '',
					target = '';

				if(slide instanceof HTMLAnchorElement){
					href = slide.getAttribute('href');
					target = slide.getAttribute('target');

					var img = slide.querySelector('img');
					if(img !== null){
						slide = img;
					} else {
						return;
					}
				}

				if(typeof slide.dataset !== 'undefined'){
					_deepExtend(slideEl.dataset, slide.dataset);
					if(slide.dataset.src){
						// Use data-src for on-demand loading
						slideEl.dataset.src = slide.dataset.src;
					} else {
						slideEl.dataset.src = slide.src;
					}

					// HiDPI support
					if(_isHighDPI() && slide.dataset['src-2x']){
						slideEl.dataset.src = slide.dataset['src-2x'];
					}
				} else {
					// IE
					if(slide.getAttribute('data-src')){
						slideEl.setAttribute('data-src', slide.getAttribute('data-src'));
					} else {
						slideEl.setAttribute('data-src', slide.getAttribute('src'));
					}
				}

				if(href) slideEl.setAttribute('href', href);
				if(target) slideEl.setAttribute('target', target);
				if(slide.getAttribute('className')) _addClass(slideEl, slide.getAttribute('className'));
				if(slide.getAttribute('id')) slideEl.setAttribute('id', slide.getAttribute('id'));
				if(slide.getAttribute('title')) slideEl.setAttribute('title', slide.getAttribute('title'));
				if(slide.getAttribute('alt')) slideEl.innerHTML = slide.getAttribute('alt');
				slideEl.setAttribute('role', 'tabpanel');
				slideEl.setAttribute('aria-hidden', 'true');

				slideEl.style.cssText += '-webkit-transition-duration:'+ this.settings.transitionDuration +'ms;-moz-transition-duration:'+ this.settings.transitionDuration +'ms;-o-transition-duration:'+ this.settings.transitionDuration +'ms;transition-duration:'+ this.settings.transitionDuration +'ms;';

				sliderEl.appendChild(slideEl);
				validSlides.push(slideEl);
			}
		}.bind(this));
		var slides = validSlides;
		if(slides.length <= 1){
			sliderEl.innerHTML = '';
			Array.prototype.forEach.call(origChildren, function(child, i){
				sliderEl.appendChild(child);
			});
			return null;
		}

		// Create navigation
		if(!this.settings.disableNav){
			var previousNav, nextNav;
			if(this.settings.previousNavSelector){
				previousNav = document.querySelector(this.settings.previousNavSelector);
			} else {
				previousNav = document.createElement('a');
				sliderEl.appendChild(previousNav);
			}
			if(this.settings.nextNavSelector){
				nextNav = document.querySelector(this.settings.nextNavSelector);
			} else {
				nextNav = document.createElement('a');
				sliderEl.appendChild(nextNav);
			}

			_addClass(previousNav, this.settings.classes.previousNav);
			_addClass(nextNav, this.settings.classes.nextNav);
			previousNav.addEventListener('click', function(){
				if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
				this.stop();
				this.previousSlide();
			}.bind(this));
			nextNav.addEventListener('click', function(){
				if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
				this.stop();
				this.nextSlide();
			}.bind(this));

			// Touch Navigation
			if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
				this.settings.effect = 'slide';
				previousNav.style.display = 'none';
				nextNav.style.display = 'none';
				_addClass(sliderEl, this.settings.classes.touchEnabled);

				sliderEl.addEventListener('touchstart', _touch.start.bind(this), false);
				sliderEl.addEventListener('touchmove', _touch.move.bind(this), false);
				sliderEl.addEventListener('touchend', _touch.end.bind(this), false);
			}

			// Keyboard Navigation
			if(this.settings.keyboardNav){
				document.addEventListener('keyup', function(e){
					e = e || window.event;
					var button = (typeof e.which == 'number') ? e.which : e.keyCode;
					if (button == 37) {
						if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
						this.stop();
						this.previousSlide();
					} else if (button == 39) {
						if(_hasClass(this._attributes.container, this.settings.classes.animating)) return false;
						this.stop();
						this.nextSlide();
					}
				}.bind(this));
			}
		}

		// Create internal attributes
		this._attributes = {
			container: sliderEl,
			slides: slides,
			previousSlide: typeof slides[slides.length-1] !== 'undefined' ? slides[slides.length-1] : slides[0],
			currentSlide: slides[0],
			nextSlide: typeof slides[1] !== 'undefined' ? slides[1] : slides[0],
			timerId: 0,
			origChildren: origChildren // Used in destroy()
		};

		// Set height
		if(this.settings.height){
			this._attributes.container.style.height = this.settings.height +'px';
		}

		// Add classes
		_addClass(sliderEl, this.settings.classes.container);
		_addClass(sliderEl, 'iis-effect-'+ this.settings.effect);
		Array.prototype.forEach.call(this._attributes.slides, function(slide, i){
			_addClass(slide, this.settings.classes.slide);
		}.bind(this));
		_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
		_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
		_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);

		// ARIA
		this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

		// Load first image
		_loadImg(this._attributes.currentSlide, (function(){
			this.settings.onInit.apply(this);
		}).bind(this));
		// Preload next images
		_loadImg(this._attributes.previousSlide);
		_loadImg(this._attributes.nextSlide);
	};

	Slider.prototype.get = function(attribute) {
		if(!this._attributes) return null;
		if(this._attributes.hasOwnProperty(attribute)){
			return this._attributes[attribute];
		}
	};

	Slider.prototype.set = function(attribute, value) {
		if(!this._attributes) return null;
		return (this._attributes[attribute] = value);
	};

	Slider.prototype.start = function() {
		if(!this._attributes) return;
		this._attributes.timerId = setInterval(this.nextSlide.bind(this), this.settings.interval);
		this.settings.onStart.apply(this);

		// Stop if window blur
		window.onblur = function(){
			this.stop();
		}.bind(this);
	};

	Slider.prototype.stop = function() {
		if(!this._attributes) return;
		clearInterval(this._attributes.timerId);
		this._attributes.timerId = 0;
		this.settings.onStop.apply(this);
	};

	Slider.prototype.previousSlide = function() {
		this.settings.beforeChange.apply(this);
		_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
		_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
		_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
		this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

		var slides = this._attributes.slides,
			index = slides.indexOf(this._attributes.currentSlide);
		this._attributes.nextSlide = this._attributes.currentSlide;
		this._attributes.previousSlide = slides[index-2];
		this._attributes.currentSlide = slides[index-1];
		if(typeof this._attributes.currentSlide === 'undefined' &&
		typeof this._attributes.previousSlide === 'undefined'){
			this._attributes.currentSlide = slides[slides.length-1];
			this._attributes.previousSlide = slides[slides.length-2];
		} else {
			if(typeof this._attributes.previousSlide === 'undefined'){
				this._attributes.previousSlide = slides[slides.length-1];
			}
		}

		// Preload next image
		_loadImg(this._attributes.previousSlide);

		_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
		_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
		_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
		this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

		_addClass(this._attributes.container, this.settings.classes.directionPrevious);
		setTimeout(function(){
			_removeClass(this._attributes.container, this.settings.classes.directionPrevious);
		}.bind(this), this.settings.transitionDuration);

		if(this.settings.transitionDuration){
			_addClass(this._attributes.container, this.settings.classes.animating);
			setTimeout(function(){
				_removeClass(this._attributes.container, this.settings.classes.animating);
			}.bind(this), this.settings.transitionDuration);
		}
		this.settings.afterChange.apply(this);
	};

	Slider.prototype.nextSlide = function() {
		this.settings.beforeChange.apply(this);
		_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
		_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
		_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
		this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

		var slides = this._attributes.slides,
			index = slides.indexOf(this._attributes.currentSlide);
		this._attributes.previousSlide = this._attributes.currentSlide;
		this._attributes.currentSlide = slides[index+1];
		this._attributes.nextSlide = slides[index+2];
		if(typeof this._attributes.currentSlide === 'undefined' &&
		   typeof this._attributes.nextSlide === 'undefined'){
			this._attributes.currentSlide = slides[0];
			this._attributes.nextSlide = slides[1];
		} else {
			if(typeof this._attributes.nextSlide === 'undefined'){
				this._attributes.nextSlide = slides[0];
			}
		}

		// Preload next image
		_loadImg(this._attributes.nextSlide);

		_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
		_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
		_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
		this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

		_addClass(this._attributes.container, this.settings.classes.directionNext);
		setTimeout(function(){
			_removeClass(this._attributes.container, this.settings.classes.directionNext);
		}.bind(this), this.settings.transitionDuration);

		if(this.settings.transitionDuration){
			_addClass(this._attributes.container, this.settings.classes.animating);
			setTimeout(function(){
				_removeClass(this._attributes.container, this.settings.classes.animating);
			}.bind(this), this.settings.transitionDuration);
		}
		this.settings.afterChange.apply(this);
	};

	Slider.prototype.gotoSlide = function(index) {
		this.settings.beforeChange.apply(this);
		this.stop();

		_removeClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
		_removeClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
		_removeClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
		this._attributes.currentSlide.setAttribute('aria-hidden', 'true');

		index--; // Index should be 1-indexed
		var slides = this._attributes.slides,
			oldIndex = slides.indexOf(this._attributes.currentSlide);
		this._attributes.previousSlide = slides[index-1];
		this._attributes.currentSlide = slides[index];
		this._attributes.nextSlide = slides[index+1];
		if(typeof this._attributes.previousSlide === 'undefined'){
			this._attributes.previousSlide = slides[slides.length-1];
		}
		if(typeof this._attributes.nextSlide === 'undefined'){
			this._attributes.nextSlide = slides[0];
		}

		// Load images
		_loadImg(this._attributes.previousSlide);
		_loadImg(this._attributes.currentSlide);
		_loadImg(this._attributes.nextSlide);

		_addClass(this._attributes.previousSlide, this.settings.classes.previousSlide);
		_addClass(this._attributes.currentSlide, this.settings.classes.currentSlide);
		_addClass(this._attributes.nextSlide, this.settings.classes.nextSlide);
		this._attributes.currentSlide.setAttribute('aria-hidden', 'false');

		if(index < oldIndex){
			_addClass(this._attributes.container, this.settings.classes.directionPrevious);
			setTimeout(function(){
				_removeClass(this._attributes.container, this.settings.classes.directionPrevious);
			}.bind(this), this.settings.transitionDuration);
		} else {
			_addClass(this._attributes.container, this.settings.classes.directionNext);
			setTimeout(function(){
				_removeClass(this._attributes.container, this.settings.classes.directionNext);
			}.bind(this), this.settings.transitionDuration);
		}

		if(this.settings.transitionDuration){
			_addClass(this._attributes.container, this.settings.classes.animating);
			setTimeout(function(){
				_removeClass(this._attributes.container, this.settings.classes.animating);
			}.bind(this), this.settings.transitionDuration);
		}
		this.settings.afterChange.apply(this);
	};

	Slider.prototype.destroy = function() {
		clearInterval(this._attributes.timerId);
		this._attributes.timerId = 0;

		this._attributes.container.innerHTML = '';
		Array.prototype.forEach.call(this._attributes.origChildren, function(child, i){
			this._attributes.container.appendChild(child);
		}.bind(this));

		_removeClass(this._attributes.container, this.settings.classes.container);
		_removeClass(this._attributes.container, 'iis-effect-'+ this.settings.effect);
		this._attributes.container.style.height = '';

		this.settings.onDestroy.apply(this);
	};

	return {
		_hasClass: _hasClass,
		_addClass: _addClass,
		_removeClass: _removeClass,
		Slider: Slider
	};

})();
