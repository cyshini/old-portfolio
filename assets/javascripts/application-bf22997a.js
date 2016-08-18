!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.Blazy=t()}(this,function(){function e(e){var o=e._util;o.elements=a(e.options.selector),o.count=o.elements.length,o.destroyed&&(o.destroyed=!1,e.options.container&&f(e.options.container,function(e){l(e,"scroll",o.validateT)}),l(window,"resize",o.save_viewportOffsetT),l(window,"resize",o.validateT),l(window,"scroll",o.validateT)),t(e)}function t(e){for(var t=e._util,o=0;o<t.count;o++){var n=t.elements[o],r=n.getBoundingClientRect();(r.right>=h.left&&r.bottom>=h.top&&r.left<=h.right&&r.top<=h.bottom||s(n,e.options.successClass))&&(e.load(n),t.elements.splice(o,1),t.count--,o--)}0===t.count&&e.destroy()}function o(e,t,o){if(!s(e,o.successClass)&&(t||o.loadInvisible||0<e.offsetWidth&&0<e.offsetHeight))if(t=e.getAttribute(p)||e.getAttribute(o.src)){t=t.split(o.separator);var a=t[m&&1<t.length?1:0],c="img"===e.nodeName.toLowerCase();if(c||void 0===e.src){var d=new Image,h=function(){o.error&&o.error(e,"invalid"),i(e,o.errorClass),u(d,"error",h),u(d,"load",v)},v=function(){if(c){e.src=a,r(e,"srcset",o.srcset);var t=e.parentNode;t&&"picture"===t.nodeName.toLowerCase()&&f(t.getElementsByTagName("source"),function(e){r(e,"srcset",o.srcset)})}else e.style.backgroundImage='url("'+a+'")';n(e,o),u(d,"load",v),u(d,"error",h)};l(d,"error",h),l(d,"load",v),d.src=a}else e.src=a,n(e,o)}else"video"===e.nodeName.toLowerCase()?(f(e.getElementsByTagName("source"),function(e){r(e,"src",o.src)}),e.load(),n(e,o)):(o.error&&o.error(e,"missing"),i(e,o.errorClass))}function n(e,t){i(e,t.successClass),t.success&&t.success(e),e.removeAttribute(t.src),f(t.breakpoints,function(t){e.removeAttribute(t.src)})}function r(e,t,o){var n=e.getAttribute(o);n&&(e[t]=n,e.removeAttribute(o))}function s(e,t){return-1!==(" "+e.className+" ").indexOf(" "+t+" ")}function i(e,t){s(e,t)||(e.className+=" "+t)}function a(e){var t=[];e=document.querySelectorAll(e);for(var o=e.length;o--;t.unshift(e[o]));return t}function c(e){h.bottom=(window.innerHeight||document.documentElement.clientHeight)+e,h.right=(window.innerWidth||document.documentElement.clientWidth)+e}function l(e,t,o){e.attachEvent?e.attachEvent&&e.attachEvent("on"+t,o):e.addEventListener(t,o,!1)}function u(e,t,o){e.detachEvent?e.detachEvent&&e.detachEvent("on"+t,o):e.removeEventListener(t,o,!1)}function f(e,t){if(e&&t)for(var o=e.length,n=0;o>n&&!1!==t(e[n],n);n++);}function d(e,t,o){var n=0;return function(){var r=+new Date;t>r-n||(n=r,e.apply(o,arguments))}}var p,h,m;return function(n){if(!document.querySelectorAll){var r=document.createStyleSheet();document.querySelectorAll=function(e,t,o,n,s){for(s=document.all,t=[],e=e.replace(/\[for\b/gi,"[htmlFor").split(","),o=e.length;o--;){for(r.addRule(e[o],"k:v"),n=s.length;n--;)s[n].currentStyle.k&&t.push(s[n]);r.removeRule(0)}return t}}var s=this,i=s._util={};i.elements=[],i.destroyed=!0,s.options=n||{},s.options.error=s.options.error||!1,s.options.offset=s.options.offset||100,s.options.success=s.options.success||!1,s.options.selector=s.options.selector||".b-lazy",s.options.separator=s.options.separator||"|",s.options.container=s.options.container?document.querySelectorAll(s.options.container):!1,s.options.errorClass=s.options.errorClass||"b-error",s.options.breakpoints=s.options.breakpoints||!1,s.options.loadInvisible=s.options.loadInvisible||!1,s.options.successClass=s.options.successClass||"b-loaded",s.options.validateDelay=s.options.validateDelay||25,s.options.save_viewportOffsetDelay=s.options.save_viewportOffsetDelay||50,s.options.srcset=s.options.srcset||"data-srcset",s.options.src=p=s.options.src||"data-src",m=1<window.devicePixelRatio,h={},h.top=0-s.options.offset,h.left=0-s.options.offset,s.revalidate=function(){e(this)},s.load=function(e,t){var n=this.options;void 0===e.length?o(e,t,n):f(e,function(e){o(e,t,n)})},s.destroy=function(){var e=this._util;this.options.container&&f(this.options.container,function(t){u(t,"scroll",e.validateT)}),u(window,"scroll",e.validateT),u(window,"resize",e.validateT),u(window,"resize",e.save_viewportOffsetT),e.count=0,e.elements.length=0,e.destroyed=!0},i.validateT=d(function(){t(s)},s.options.validateDelay,s),i.save_viewportOffsetT=d(function(){c(s.options.offset)},s.options.save_viewportOffsetDelay,s),c(s.options.offset),f(s.options.breakpoints,function(e){return e.width>=window.screen.width?(p=e.src,!1):void 0}),setTimeout(function(){e(s)})}}),function(e){function t(){var t,o,n,r="prototype",s="scroll",i=Array[r].slice,a=e.setTimeout,c=[],l=function(e,t,o){this.element=e,this.threshold=t,this.callback=function(){o(e)}},u=function(){var n,r=c.length;if(r)for(t=e.scrollY||e.pageYOffset,o=t+e.innerHeight;r--;)n=c[r],n.visible()&&(a(n.callback,0),c.splice(r,1));else e.removeEventListener(s,u)};return l[r].visible=function(){var e=this.element,n=this.threshold,r=e.offsetTop-n,s=r+e.offsetHeight+n;return o>=r&&s>=t},function(t){if(t){var o,r=t.on,a=t.threshold!==n?t.threshold:100,f=t.callback;if(!r||!f)throw"elements or callback missing";if(r.length!==n)for(r=i.call(r),o=r.length;o--;)c.push(new l(r[o],a,f));else c.push(new l(r,a,f));u(),c.length&&e.addEventListener(s,u)}}}e.define&&e.define.amd?e.define("sloth",t):e.sloth=t()}(this),!function(e,t){"function"==typeof define&&define.amd?define([],t(e)):"object"==typeof exports?module.exports=t(e):e.smoothScroll=t(e)}("undefined"!=typeof global?global:this.window||this.global,function(e){"use strict";var t,o,n,r,s,i={},a="querySelector"in document&&"addEventListener"in e,c={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},l=function(){var e={},t=!1,o=0,n=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(t=arguments[0],o++);for(var r=function(o){for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t&&"[object Object]"===Object.prototype.toString.call(o[n])?e[n]=l(!0,e[n],o[n]):e[n]=o[n])};n>o;o++){var s=arguments[o];r(s)}return e},u=function(e){return Math.max(e.scrollHeight,e.offsetHeight,e.clientHeight)},f=function(e,t){var o,n,r=t.charAt(0),s="classList"in document.documentElement;for("["===r&&(t=t.substr(1,t.length-2),o=t.split("="),o.length>1&&(n=!0,o[1]=o[1].replace(/"/g,"").replace(/'/g,"")));e&&e!==document&&1===e.nodeType;e=e.parentNode){if("."===r)if(s){if(e.classList.contains(t.substr(1)))return e}else if(new RegExp("(^|\\s)"+t.substr(1)+"(\\s|$)").test(e.className))return e;if("#"===r&&e.id===t.substr(1))return e;if("["===r&&e.hasAttribute(o[0])){if(!n)return e;if(e.getAttribute(o[0])===o[1])return e}if(e.tagName.toLowerCase()===t)return e}return null};i.escapeCharacters=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,o=String(e),n=o.length,r=-1,s="",i=o.charCodeAt(0);++r<n;){if(t=o.charCodeAt(r),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");s+=t>=1&&31>=t||127==t||0===r&&t>=48&&57>=t||1===r&&t>=48&&57>=t&&45===i?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&57>=t||t>=65&&90>=t||t>=97&&122>=t?o.charAt(r):"\\"+o.charAt(r)}return"#"+s};var d=function(e,t){var o;return"easeInQuad"===e&&(o=t*t),"easeOutQuad"===e&&(o=t*(2-t)),"easeInOutQuad"===e&&(o=.5>t?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e&&(o=t*t*t),"easeOutCubic"===e&&(o=--t*t*t+1),"easeInOutCubic"===e&&(o=.5>t?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e&&(o=t*t*t*t),"easeOutQuart"===e&&(o=1- --t*t*t*t),"easeInOutQuart"===e&&(o=.5>t?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e&&(o=t*t*t*t*t),"easeOutQuint"===e&&(o=1+--t*t*t*t*t),"easeInOutQuint"===e&&(o=.5>t?16*t*t*t*t*t:1+16*--t*t*t*t*t),o||t},p=function(e,t,o){var n=0;if(e.offsetParent)do n+=e.offsetTop,e=e.offsetParent;while(e);return n=Math.max(n-t-o,0),Math.min(n,m()-h())},h=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},m=function(){return Math.max(e.document.body.scrollHeight,e.document.documentElement.scrollHeight,e.document.body.offsetHeight,e.document.documentElement.offsetHeight,e.document.body.clientHeight,e.document.documentElement.clientHeight)},v=function(e){return e&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(e):{}},g=function(t,o){e.history.pushState&&(o||"true"===o)&&"file:"!==e.location.protocol&&e.history.pushState(null,null,[e.location.protocol,"//",e.location.host,e.location.pathname,e.location.search,t].join(""))},b=function(e){return null===e?0:u(e)+e.offsetTop};i.animateScroll=function(o,i,a){var u=v(i?i.getAttribute("data-options"):null),f=l(t||c,a||{},u),h="[object Number]"===Object.prototype.toString.call(o)?!0:!1,y=h?null:"#"===o?e.document.documentElement:e.document.querySelector(o);if(h||y){var w=e.pageYOffset;n||(n=e.document.querySelector(f.selectorHeader)),r||(r=b(n));var O,E,S=h?o:p(y,r,parseInt(f.offset,10)),C=S-w,I=m(),A=0;h||g(o,f.updateURL);var H=function(t,n,r){var s=e.pageYOffset;(t==n||s==n||e.innerHeight+s>=I)&&(clearInterval(r),h||y.focus(),f.callback(o,i))},T=function(){A+=16,O=A/parseInt(f.speed,10),O=O>1?1:O,E=w+C*d(f.easing,O),e.scrollTo(0,Math.floor(E)),H(E,S,s)},L=function(){clearInterval(s),s=setInterval(T,16)};0===e.pageYOffset&&e.scrollTo(0,0),L()}};var y=function(e){if(0===e.button&&!e.metaKey&&!e.ctrlKey){var o=f(e.target,t.selector);if(o&&"a"===o.tagName.toLowerCase()){e.preventDefault();var n=i.escapeCharacters(o.hash);i.animateScroll(n,o,t)}}},w=function(e){o||(o=setTimeout(function(){o=null,r=b(n)},66))};return i.destroy=function(){t&&(e.document.removeEventListener("click",y,!1),e.removeEventListener("resize",w,!1),t=null,o=null,n=null,r=null,s=null)},i.init=function(o){a&&(i.destroy(),t=l(c,o||{}),n=e.document.querySelector(t.selectorHeader),r=b(n),e.document.addEventListener("click",y,!1),n&&e.addEventListener("resize",w,!1))},i}),function(){new Blazy}(),sloth({on:document.querySelectorAll(".work"),threshold:-200,callback:function(e){e.className+=" visible"}}),smoothScroll.init({selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:50,updateURL:!1,callback:function(e,t){}});