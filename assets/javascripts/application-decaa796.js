/*!
  hey, [be]Lazy.js - v1.6.2 - 2016.05.09
  A fast, small and dependency free lazy load script (https://github.com/dinbror/blazy)
  (c) Bjoern Klinggaard - @bklinggaard - http://dinbror.dk/blazy
*/
!function(t,e){"function"==typeof define&&define.amd?define(e):"object"==typeof exports?module.exports=e():t.Blazy=e()}(this,function(){function t(t){var n=t._util;n.elements=a(t.options.selector),n.count=n.elements.length,n.destroyed&&(n.destroyed=!1,t.options.container&&f(t.options.container,function(t){c(t,"scroll",n.validateT)}),c(window,"resize",n.save_viewportOffsetT),c(window,"resize",n.validateT),c(window,"scroll",n.validateT)),e(t)}function e(t){for(var e=t._util,n=0;n<e.count;n++){var o=e.elements[n],i=o.getBoundingClientRect();(i.right>=p.left&&i.bottom>=p.top&&i.left<=p.right&&i.top<=p.bottom||r(o,t.options.successClass))&&(t.load(o),e.elements.splice(n,1),e.count--,n--)}0===e.count&&t.destroy()}function n(t,e,n){if(!r(t,n.successClass)&&(e||n.loadInvisible||0<t.offsetWidth&&0<t.offsetHeight))if(e=t.getAttribute(h)||t.getAttribute(n.src)){e=e.split(n.separator);var a=e[v&&1<e.length?1:0],l="img"===t.nodeName.toLowerCase();if(l||void 0===t.src){var d=new Image,p=function(){n.error&&n.error(t,"invalid"),s(t,n.errorClass),u(d,"error",p),u(d,"load",m)},m=function(){if(l){t.src=a,i(t,"srcset",n.srcset);var e=t.parentNode;e&&"picture"===e.nodeName.toLowerCase()&&f(e.getElementsByTagName("source"),function(t){i(t,"srcset",n.srcset)})}else t.style.backgroundImage='url("'+a+'")';o(t,n),u(d,"load",m),u(d,"error",p)};c(d,"error",p),c(d,"load",m),d.src=a}else t.src=a,o(t,n)}else"video"===t.nodeName.toLowerCase()?(f(t.getElementsByTagName("source"),function(t){i(t,"src",n.src)}),t.load(),o(t,n)):(n.error&&n.error(t,"missing"),s(t,n.errorClass))}function o(t,e){s(t,e.successClass),e.success&&e.success(t),t.removeAttribute(e.src),f(e.breakpoints,function(e){t.removeAttribute(e.src)})}function i(t,e,n){var o=t.getAttribute(n);o&&(t[e]=o,t.removeAttribute(n))}function r(t,e){return-1!==(" "+t.className+" ").indexOf(" "+e+" ")}function s(t,e){r(t,e)||(t.className+=" "+e)}function a(t){var e=[];t=document.querySelectorAll(t);for(var n=t.length;n--;e.unshift(t[n]));return e}function l(t){p.bottom=(window.innerHeight||document.documentElement.clientHeight)+t,p.right=(window.innerWidth||document.documentElement.clientWidth)+t}function c(t,e,n){t.attachEvent?t.attachEvent&&t.attachEvent("on"+e,n):t.addEventListener(e,n,!1)}function u(t,e,n){t.detachEvent?t.detachEvent&&t.detachEvent("on"+e,n):t.removeEventListener(e,n,!1)}function f(t,e){if(t&&e)for(var n=t.length,o=0;n>o&&!1!==e(t[o],o);o++);}function d(t,e,n){var o=0;return function(){var i=+new Date;e>i-o||(o=i,t.apply(n,arguments))}}var h,p,v;return function(o){if(!document.querySelectorAll){var i=document.createStyleSheet();document.querySelectorAll=function(t,e,n,o,r){for(r=document.all,e=[],t=t.replace(/\[for\b/gi,"[htmlFor").split(","),n=t.length;n--;){for(i.addRule(t[n],"k:v"),o=r.length;o--;)r[o].currentStyle.k&&e.push(r[o]);i.removeRule(0)}return e}}var r=this,s=r._util={};s.elements=[],s.destroyed=!0,r.options=o||{},r.options.error=r.options.error||!1,r.options.offset=r.options.offset||100,r.options.success=r.options.success||!1,r.options.selector=r.options.selector||".b-lazy",r.options.separator=r.options.separator||"|",r.options.container=r.options.container?document.querySelectorAll(r.options.container):!1,r.options.errorClass=r.options.errorClass||"b-error",r.options.breakpoints=r.options.breakpoints||!1,r.options.loadInvisible=r.options.loadInvisible||!1,r.options.successClass=r.options.successClass||"b-loaded",r.options.validateDelay=r.options.validateDelay||25,r.options.save_viewportOffsetDelay=r.options.save_viewportOffsetDelay||50,r.options.srcset=r.options.srcset||"data-srcset",r.options.src=h=r.options.src||"data-src",v=1<window.devicePixelRatio,p={},p.top=0-r.options.offset,p.left=0-r.options.offset,r.revalidate=function(){t(this)},r.load=function(t,e){var o=this.options;void 0===t.length?n(t,e,o):f(t,function(t){n(t,e,o)})},r.destroy=function(){var t=this._util;this.options.container&&f(this.options.container,function(e){u(e,"scroll",t.validateT)}),u(window,"scroll",t.validateT),u(window,"resize",t.validateT),u(window,"resize",t.save_viewportOffsetT),t.count=0,t.elements.length=0,t.destroyed=!0},s.validateT=d(function(){e(r)},r.options.validateDelay,r),s.save_viewportOffsetT=d(function(){l(r.options.offset)},r.options.save_viewportOffsetDelay,r),l(r.options.offset),f(r.options.breakpoints,function(t){return t.width>=window.screen.width?(h=t.src,!1):void 0}),setTimeout(function(){t(r)})}}),/*! smooth-scroll v9.1.4 | (c) 2016 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */
!function(t,e){"function"==typeof define&&define.amd?define([],e(t)):"object"==typeof exports?module.exports=e(t):t.smoothScroll=e(t)}("undefined"!=typeof global?global:this.window||this.global,function(t){"use strict";var e,n,o,i,r,s={},a="querySelector"in document&&"addEventListener"in t,l={selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:0,updateURL:!0,callback:function(){}},c=function(){var t={},e=!1,n=0,o=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(e=arguments[0],n++);for(var i=function(n){for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e&&"[object Object]"===Object.prototype.toString.call(n[o])?t[o]=c(!0,t[o],n[o]):t[o]=n[o])};o>n;n++){var r=arguments[n];i(r)}return t},u=function(t){return Math.max(t.scrollHeight,t.offsetHeight,t.clientHeight)},f=function(t,e){var n,o,i=e.charAt(0),r="classList"in document.documentElement;for("["===i&&(e=e.substr(1,e.length-2),n=e.split("="),n.length>1&&(o=!0,n[1]=n[1].replace(/"/g,"").replace(/'/g,"")));t&&t!==document&&1===t.nodeType;t=t.parentNode){if("."===i)if(r){if(t.classList.contains(e.substr(1)))return t}else if(new RegExp("(^|\\s)"+e.substr(1)+"(\\s|$)").test(t.className))return t;if("#"===i&&t.id===e.substr(1))return t;if("["===i&&t.hasAttribute(n[0])){if(!o)return t;if(t.getAttribute(n[0])===n[1])return t}if(t.tagName.toLowerCase()===e)return t}return null};s.escapeCharacters=function(t){"#"===t.charAt(0)&&(t=t.substr(1));for(var e,n=String(t),o=n.length,i=-1,r="",s=n.charCodeAt(0);++i<o;){if(e=n.charCodeAt(i),0===e)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=e>=1&&31>=e||127==e||0===i&&e>=48&&57>=e||1===i&&e>=48&&57>=e&&45===s?"\\"+e.toString(16)+" ":e>=128||45===e||95===e||e>=48&&57>=e||e>=65&&90>=e||e>=97&&122>=e?n.charAt(i):"\\"+n.charAt(i)}return"#"+r};var d=function(t,e){var n;return"easeInQuad"===t&&(n=e*e),"easeOutQuad"===t&&(n=e*(2-e)),"easeInOutQuad"===t&&(n=.5>e?2*e*e:-1+(4-2*e)*e),"easeInCubic"===t&&(n=e*e*e),"easeOutCubic"===t&&(n=--e*e*e+1),"easeInOutCubic"===t&&(n=.5>e?4*e*e*e:(e-1)*(2*e-2)*(2*e-2)+1),"easeInQuart"===t&&(n=e*e*e*e),"easeOutQuart"===t&&(n=1- --e*e*e*e),"easeInOutQuart"===t&&(n=.5>e?8*e*e*e*e:1-8*--e*e*e*e),"easeInQuint"===t&&(n=e*e*e*e*e),"easeOutQuint"===t&&(n=1+--e*e*e*e*e),"easeInOutQuint"===t&&(n=.5>e?16*e*e*e*e*e:1+16*--e*e*e*e*e),n||e},h=function(t,e,n){var o=0;if(t.offsetParent)do o+=t.offsetTop,t=t.offsetParent;while(t);return o=Math.max(o-e-n,0),Math.min(o,v()-p())},p=function(){return Math.max(document.documentElement.clientHeight,window.innerHeight||0)},v=function(){return Math.max(t.document.body.scrollHeight,t.document.documentElement.scrollHeight,t.document.body.offsetHeight,t.document.documentElement.offsetHeight,t.document.body.clientHeight,t.document.documentElement.clientHeight)},m=function(t){return t&&"object"==typeof JSON&&"function"==typeof JSON.parse?JSON.parse(t):{}},y=function(e,n){t.history.pushState&&(n||"true"===n)&&"file:"!==t.location.protocol&&t.history.pushState(null,null,[t.location.protocol,"//",t.location.host,t.location.pathname,t.location.search,e].join(""))},g=function(t){return null===t?0:u(t)+t.offsetTop};s.animateScroll=function(n,s,a){var u=m(s?s.getAttribute("data-options"):null),f=c(e||l,a||{},u),p="[object Number]"===Object.prototype.toString.call(n)?!0:!1,b=p?null:"#"===n?t.document.documentElement:t.document.querySelector(n);if(p||b){var w=t.pageYOffset;o||(o=t.document.querySelector(f.selectorHeader)),i||(i=g(o));var E,S,C=p?n:h(b,i,parseInt(f.offset,10)),O=C-w,A=v(),N=0;p||y(n,f.updateURL);var H=function(e,o,i){var r=t.pageYOffset;(e==o||r==o||t.innerHeight+r>=A)&&(clearInterval(i),p||b.focus(),f.callback(n,s))},k=function(){N+=16,E=N/parseInt(f.speed,10),E=E>1?1:E,S=w+O*d(f.easing,E),t.scrollTo(0,Math.floor(S)),H(S,C,r)},x=function(){clearInterval(r),r=setInterval(k,16)};0===t.pageYOffset&&t.scrollTo(0,0),x()}};var b=function(t){if(0===t.button&&!t.metaKey&&!t.ctrlKey){var n=f(t.target,e.selector);if(n&&"a"===n.tagName.toLowerCase()){t.preventDefault();var o=s.escapeCharacters(n.hash);s.animateScroll(o,n,e)}}},w=function(t){n||(n=setTimeout(function(){n=null,i=g(o)},66))};return s.destroy=function(){e&&(t.document.removeEventListener("click",b,!1),t.removeEventListener("resize",w,!1),e=null,n=null,o=null,i=null,r=null)},s.init=function(n){a&&(s.destroy(),e=c(l,n||{}),o=t.document.querySelector(e.selectorHeader),i=g(o),t.document.addEventListener("click",b,!1),o&&t.addEventListener("resize",w,!1))},s}),/*! WOW - v1.1.3 - 2016-05-06
* Copyright (c) 2016 Matthieu Aussaguel;*/
function(){var t,e,n,o,i,r=function(t,e){return function(){return t.apply(e,arguments)}},s=[].indexOf||function(t){for(var e=0,n=this.length;n>e;e++)if(e in this&&this[e]===t)return e;return-1};e=function(){function t(){}return t.prototype.extend=function(t,e){var n,o;for(n in e)o=e[n],null==t[n]&&(t[n]=o);return t},t.prototype.isMobile=function(t){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)},t.prototype.createEvent=function(t,e,n,o){var i;return null==e&&(e=!1),null==n&&(n=!1),null==o&&(o=null),null!=document.createEvent?(i=document.createEvent("CustomEvent"),i.initCustomEvent(t,e,n,o)):null!=document.createEventObject?(i=document.createEventObject(),i.eventType=t):i.eventName=t,i},t.prototype.emitEvent=function(t,e){return null!=t.dispatchEvent?t.dispatchEvent(e):e in(null!=t)?t[e]():"on"+e in(null!=t)?t["on"+e]():void 0},t.prototype.addEvent=function(t,e,n){return null!=t.addEventListener?t.addEventListener(e,n,!1):null!=t.attachEvent?t.attachEvent("on"+e,n):t[e]=n},t.prototype.removeEvent=function(t,e,n){return null!=t.removeEventListener?t.removeEventListener(e,n,!1):null!=t.detachEvent?t.detachEvent("on"+e,n):delete t[e]},t.prototype.innerHeight=function(){return"innerHeight"in window?window.innerHeight:document.documentElement.clientHeight},t}(),n=this.WeakMap||this.MozWeakMap||(n=function(){function t(){this.keys=[],this.values=[]}return t.prototype.get=function(t){var e,n,o,i,r;for(r=this.keys,e=o=0,i=r.length;i>o;e=++o)if(n=r[e],n===t)return this.values[e]},t.prototype.set=function(t,e){var n,o,i,r,s;for(s=this.keys,n=i=0,r=s.length;r>i;n=++i)if(o=s[n],o===t)return void(this.values[n]=e);return this.keys.push(t),this.values.push(e)},t}()),t=this.MutationObserver||this.WebkitMutationObserver||this.MozMutationObserver||(t=function(){function t(){"undefined"!=typeof console&&null!==console&&console.warn("MutationObserver is not supported by your browser."),"undefined"!=typeof console&&null!==console&&console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")}return t.notSupported=!0,t.prototype.observe=function(){},t}()),o=this.getComputedStyle||function(t,e){return this.getPropertyValue=function(e){var n;return"float"===e&&(e="styleFloat"),i.test(e)&&e.replace(i,function(t,e){return e.toUpperCase()}),(null!=(n=t.currentStyle)?n[e]:void 0)||null},this},i=/(\-([a-z]){1})/g,this.WOW=function(){function i(t){null==t&&(t={}),this.scrollCallback=r(this.scrollCallback,this),this.scrollHandler=r(this.scrollHandler,this),this.resetAnimation=r(this.resetAnimation,this),this.start=r(this.start,this),this.scrolled=!0,this.config=this.util().extend(t,this.defaults),null!=t.scrollContainer&&(this.config.scrollContainer=document.querySelector(t.scrollContainer)),this.animationNameCache=new n,this.wowEvent=this.util().createEvent(this.config.boxClass)}return i.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0,callback:null,scrollContainer:null},i.prototype.init=function(){var t;return this.element=window.document.documentElement,"interactive"===(t=document.readyState)||"complete"===t?this.start():this.util().addEvent(document,"DOMContentLoaded",this.start),this.finished=[]},i.prototype.start=function(){var e,n,o,i;if(this.stopped=!1,this.boxes=function(){var t,n,o,i;for(o=this.element.querySelectorAll("."+this.config.boxClass),i=[],t=0,n=o.length;n>t;t++)e=o[t],i.push(e);return i}.call(this),this.all=function(){var t,n,o,i;for(o=this.boxes,i=[],t=0,n=o.length;n>t;t++)e=o[t],i.push(e);return i}.call(this),this.boxes.length)if(this.disabled())this.resetStyle();else for(i=this.boxes,n=0,o=i.length;o>n;n++)e=i[n],this.applyStyle(e,!0);return this.disabled()||(this.util().addEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().addEvent(window,"resize",this.scrollHandler),this.interval=setInterval(this.scrollCallback,50)),this.config.live?new t(function(t){return function(e){var n,o,i,r,s;for(s=[],n=0,o=e.length;o>n;n++)r=e[n],s.push(function(){var t,e,n,o;for(n=r.addedNodes||[],o=[],t=0,e=n.length;e>t;t++)i=n[t],o.push(this.doSync(i));return o}.call(t));return s}}(this)).observe(document.body,{childList:!0,subtree:!0}):void 0},i.prototype.stop=function(){return this.stopped=!0,this.util().removeEvent(this.config.scrollContainer||window,"scroll",this.scrollHandler),this.util().removeEvent(window,"resize",this.scrollHandler),null!=this.interval?clearInterval(this.interval):void 0},i.prototype.sync=function(e){return t.notSupported?this.doSync(this.element):void 0},i.prototype.doSync=function(t){var e,n,o,i,r;if(null==t&&(t=this.element),1===t.nodeType){for(t=t.parentNode||t,i=t.querySelectorAll("."+this.config.boxClass),r=[],n=0,o=i.length;o>n;n++)e=i[n],s.call(this.all,e)<0?(this.boxes.push(e),this.all.push(e),this.stopped||this.disabled()?this.resetStyle():this.applyStyle(e,!0),r.push(this.scrolled=!0)):r.push(void 0);return r}},i.prototype.show=function(t){return this.applyStyle(t),t.className=t.className+" "+this.config.animateClass,null!=this.config.callback&&this.config.callback(t),this.util().emitEvent(t,this.wowEvent),this.util().addEvent(t,"animationend",this.resetAnimation),this.util().addEvent(t,"oanimationend",this.resetAnimation),this.util().addEvent(t,"webkitAnimationEnd",this.resetAnimation),this.util().addEvent(t,"MSAnimationEnd",this.resetAnimation),t},i.prototype.applyStyle=function(t,e){var n,o,i;return o=t.getAttribute("data-wow-duration"),n=t.getAttribute("data-wow-delay"),i=t.getAttribute("data-wow-iteration"),this.animate(function(r){return function(){return r.customStyle(t,e,o,n,i)}}(this))},i.prototype.animate=function(){return"requestAnimationFrame"in window?function(t){return window.requestAnimationFrame(t)}:function(t){return t()}}(),i.prototype.resetStyle=function(){var t,e,n,o,i;for(o=this.boxes,i=[],e=0,n=o.length;n>e;e++)t=o[e],i.push(t.style.visibility="visible");return i},i.prototype.resetAnimation=function(t){var e;return t.type.toLowerCase().indexOf("animationend")>=0?(e=t.target||t.srcElement,e.className=e.className.replace(this.config.animateClass,"").trim()):void 0},i.prototype.customStyle=function(t,e,n,o,i){return e&&this.cacheAnimationName(t),t.style.visibility=e?"hidden":"visible",n&&this.vendorSet(t.style,{animationDuration:n}),o&&this.vendorSet(t.style,{animationDelay:o}),i&&this.vendorSet(t.style,{animationIterationCount:i}),this.vendorSet(t.style,{animationName:e?"none":this.cachedAnimationName(t)}),t},i.prototype.vendors=["moz","webkit"],i.prototype.vendorSet=function(t,e){var n,o,i,r;o=[];for(n in e)i=e[n],t[""+n]=i,o.push(function(){var e,o,s,a;for(s=this.vendors,a=[],e=0,o=s.length;o>e;e++)r=s[e],a.push(t[""+r+n.charAt(0).toUpperCase()+n.substr(1)]=i);return a}.call(this));return o},i.prototype.vendorCSS=function(t,e){var n,i,r,s,a,l;for(a=o(t),s=a.getPropertyCSSValue(e),r=this.vendors,n=0,i=r.length;i>n;n++)l=r[n],s=s||a.getPropertyCSSValue("-"+l+"-"+e);return s},i.prototype.animationName=function(t){var e;try{e=this.vendorCSS(t,"animation-name").cssText}catch(n){e=o(t).getPropertyValue("animation-name")}return"none"===e?"":e},i.prototype.cacheAnimationName=function(t){return this.animationNameCache.set(t,this.animationName(t))},i.prototype.cachedAnimationName=function(t){return this.animationNameCache.get(t)},i.prototype.scrollHandler=function(){return this.scrolled=!0},i.prototype.scrollCallback=function(){var t;return!this.scrolled||(this.scrolled=!1,this.boxes=function(){var e,n,o,i;for(o=this.boxes,i=[],e=0,n=o.length;n>e;e++)t=o[e],t&&(this.isVisible(t)?this.show(t):i.push(t));return i}.call(this),this.boxes.length||this.config.live)?void 0:this.stop()},i.prototype.offsetTop=function(t){for(var e;void 0===t.offsetTop;)t=t.parentNode;for(e=t.offsetTop;t=t.offsetParent;)e+=t.offsetTop;return e},i.prototype.isVisible=function(t){var e,n,o,i,r;return n=t.getAttribute("data-wow-offset")||this.config.offset,r=this.config.scrollContainer&&this.config.scrollContainer.scrollTop||window.pageYOffset,i=r+Math.min(this.element.clientHeight,this.util().innerHeight())-n,o=this.offsetTop(t),e=o+t.clientHeight,i>=o&&e>=r},i.prototype.util=function(){return null!=this._util?this._util:this._util=new e},i.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},i}()}.call(this),function(){new Blazy}(),smoothScroll.init({selector:"[data-scroll]",selectorHeader:"[data-scroll-header]",speed:500,easing:"easeInOutCubic",offset:50,updateURL:!1,callback:function(t,e){}}),(new WOW).init();