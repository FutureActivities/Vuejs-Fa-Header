!function(){function e(n,t,i){function o(a,s){if(!t[a]){if(!n[a]){var c="function"==typeof require&&require;if(!s&&c)return c(a,!0);if(r)return r(a,!0);var d=new Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d}var u=t[a]={exports:{}};n[a][0].call(u.exports,function(e){return o(n[a][1][e]||e)},u,u.exports,e,n,t,i)}return t[a].exports}for(var r="function"==typeof require&&require,a=0;a<i.length;a++)o(i[a]);return o}return e}()({1:[function(e,n,t){!function(e,i){"object"==typeof t&&"object"==typeof n?n.exports=i():"function"==typeof define&&define.amd?define([],i):"object"==typeof t?t.vMediaQuery=i():e.vMediaQuery=i()}(this,function(){return function(e){function n(i){if(t[i])return t[i].exports;var o=t[i]={exports:{},id:i,loaded:!1};return e[i].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="/dist/",n(0)}([function(e,n,t){"use strict";function i(e){h=e.util.extend,y=e.util.defineReactive}function o(){var e=(0,v.default)(function(){Object.keys(m).forEach(function(e){return++m[e][_.methods].resize})},150);window.addEventListener("resize",e)}function r(e){return e.length>0?e.reverse():e}function a(e){return(""+parseInt(e)).length===(""+e).length?e+"px":e}function s(e){return matchMedia(e).matches}function c(){for(var e=arguments.length,n=Array(e),t=0;e>t;t++)n[t]=arguments[t];var i=r(n),o=f(i,2),s=o[0],c=o[1],d=void 0===c?"width":c;return matchMedia("(max-"+d+": "+a(s)+")").matches}function d(){for(var e=arguments.length,n=Array(e),t=0;e>t;t++)n[t]=arguments[t];var i=r(n),o=f(i,2),s=o[0],c=o[1],d=void 0===c?"width":c;return matchMedia("(min-"+d+": "+a(s)+")").matches}function u(){for(var e=arguments.length,n=Array(e),t=0;e>t;t++)n[t]=arguments[t];var i=r(n),o=f(i,2),s=o[0],c=o[1],d=void 0===c?"width":c,u=f(s,2),l=u[0],p=u[1];return matchMedia("\n    (min-"+d+": "+a(l)+") and\n    (max-"+d+": "+a(p)+")\n  ").matches}function l(){for(var e=arguments.length,n=Array(e),t=0;e>t;t++)n[t]=arguments[t];var i=r(n),o=f(i,2),s=o[0],c=o[1],d=void 0===c?"width":c,u=f(s,2),l=u[0],p=u[1];return matchMedia("\n    (min-"+d+": "+a(p)+"),\n    (max-"+d+": "+a(l)+")\n  ").matches}Object.defineProperty(n,"__esModule",{value:!0});var f=function(){function e(e,n){var t=[],i=!0,o=!1,r=void 0;try{for(var a,s=e[Symbol.iterator]();!(i=(a=s.next()).done)&&(t.push(a.value),!n||t.length!==n);i=!0);}catch(e){o=!0,r=e}finally{try{!i&&s.return&&s.return()}finally{if(o)throw r}}return t}return function(n,t){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return e(n,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),p=t(1),v=function(e){return e&&e.__esModule?e:{default:e}}(p),h=void 0,y=void 0,m={},_={methods:"$mq",variables:"$mv"},b={expr:s,below:c,above:d,beyond:l,between:u},w={created:function(){var e=this.$parent;e?y(this[_.methods],"resize",e[_.methods].resize):(m[this._uid]=this,y(this[_.methods],"resize",1))}};n.default={methods:b,install:function(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1],t=n.methods,r=void 0===t?{}:t,a=n.variables,s=void 0===a?{}:a,c=n.nameSpace,d=void 0===c?{}:c;i(e),h(_,d),e.mixin(w),e.prototype[_.methods]=h(h({},b),r),e.prototype[_.variables]=s,o()}}},function(e,n){(function(n){function t(e,n,t){function i(n){var t=h,i=y;return h=y=void 0,C=n,_=e.apply(i,t)}function r(e){return C=e,b=setTimeout(u,n),$?i(e):_}function a(e){var t=e-w,i=e-C,o=n-t;return j?k(o,m-i):o}function d(e){var t=e-w,i=e-C;return void 0===w||t>=n||0>t||j&&i>=m}function u(){var e=x();return d(e)?l(e):void(b=setTimeout(u,a(e)))}function l(e){return b=void 0,A&&h?i(e):(h=y=void 0,_)}function f(){void 0!==b&&clearTimeout(b),C=0,h=w=y=b=void 0}function p(){return void 0===b?_:l(x())}function v(){var e=x(),t=d(e);if(h=arguments,y=this,w=e,t){if(void 0===b)return r(w);if(j)return b=setTimeout(u,n),i(w)}return void 0===b&&(b=setTimeout(u,n)),_}var h,y,m,_,b,w,C=0,$=!1,j=!1,A=!0;if("function"!=typeof e)throw new TypeError(c);return n=s(n)||0,o(t)&&($=!!t.leading,j="maxWait"in t,m=j?g(s(t.maxWait)||0,n):m,A="trailing"in t?!!t.trailing:A),v.cancel=f,v.flush=p,v}function i(e,n,i){var r=!0,a=!0;if("function"!=typeof e)throw new TypeError(c);return o(i)&&(r="leading"in i?!!i.leading:r,a="trailing"in i?!!i.trailing:a),t(e,n,{leading:r,maxWait:n,trailing:a})}function o(e){var n=typeof e;return!!e&&("object"==n||"function"==n)}function r(e){return!!e&&"object"==typeof e}function a(e){return"symbol"==typeof e||r(e)&&w.call(e)==u}function s(e){if("number"==typeof e)return e;if(a(e))return d;if(o(e)){var n="function"==typeof e.valueOf?e.valueOf():e;e=o(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var t=p.test(e);return t||v.test(e)?h(e.slice(2),t?2:8):f.test(e)?d:+e}var c="Expected a function",d=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,v=/^0o[0-7]+$/i,h=parseInt,y="object"==typeof n&&n&&n.Object===Object&&n,m="object"==typeof self&&self&&self.Object===Object&&self,_=y||m||Function("return this")(),b=Object.prototype,w=b.toString,g=Math.max,k=Math.min,x=function(){return _.Date.now()};e.exports=i}).call(n,function(){return this}())}])})},{}],2:[function(e,n,t){function i(e,n){if(n.functional){var t=n.render;n.render=function(n,i){var o=d[e].instances;return i&&o.indexOf(i.parent)<0&&o.push(i.parent),t(n,i)}}else o(n,f,function(){var n=d[e];n.Ctor||(n.Ctor=this.constructor),n.instances.push(this)}),o(n,"beforeDestroy",function(){var n=d[e].instances;n.splice(n.indexOf(this),1)})}function o(e,n,t){var i=e[n];e[n]=i?Array.isArray(i)?i.concat(t):[i,t]:[t]}function r(e){return function(n,t){try{e(n,t)}catch(e){console.error(e),console.warn("Something went wrong during Vue component hot-reload. Full reload required.")}}}function a(e,n){for(var t in e)t in n||delete e[t];for(var i in n)e[i]=n[i]}var s,c,d=window.__VUE_HOT_MAP__=Object.create(null),u=!1,l=!1,f="beforeCreate";t.install=function(e,n){if(!u)return u=!0,s=e.__esModule?e.default:e,c=s.version.split(".").map(Number),l=n,s.config._lifecycleHooks.indexOf("init")>-1&&(f="init"),t.compatible=c[0]>=2,t.compatible?void 0:void console.warn("[HMR] You are using a version of vue-hot-reload-api that is only compatible with Vue.js core ^2.0.0.")},t.createRecord=function(e,n){if(!d[e]){var t=null;"function"==typeof n&&(t=n,n=t.options),i(e,n),d[e]={Ctor:t,options:n,instances:[]}}},t.isRecorded=function(e){return void 0!==d[e]},t.rerender=r(function(e,n){var t=d[e];if(!n)return void t.instances.slice().forEach(function(e){e.$forceUpdate()});if("function"==typeof n&&(n=n.options),t.Ctor)t.Ctor.options.render=n.render,t.Ctor.options.staticRenderFns=n.staticRenderFns,t.instances.slice().forEach(function(e){e.$options.render=n.render,e.$options.staticRenderFns=n.staticRenderFns,e._staticTrees&&(e._staticTrees=[]),Array.isArray(t.Ctor.options.cached)&&(t.Ctor.options.cached=[]),Array.isArray(e.$options.cached)&&(e.$options.cached=[]),e.$forceUpdate()});else if(t.options.render=n.render,t.options.staticRenderFns=n.staticRenderFns,t.options.functional){if(Object.keys(n).length>2)a(t.options,n);else{var i=t.options._injectStyles;if(i){var o=n.render;t.options.render=function(e,n){return i.call(n),o(e,n)}}}t.options._Ctor=null,Array.isArray(t.options.cached)&&(t.options.cached=[]),t.instances.slice().forEach(function(e){e.$forceUpdate()})}}),t.reload=r(function(e,n){var t=d[e];if(n)if("function"==typeof n&&(n=n.options),i(e,n),t.Ctor){c[1]<2&&(t.Ctor.extendOptions=n);var o=t.Ctor.super.extend(n);t.Ctor.options=o.options,t.Ctor.cid=o.cid,t.Ctor.prototype=o.prototype,o.release&&o.release()}else a(t.options,n);t.instances.slice().forEach(function(e){e.$vnode&&e.$vnode.context?e.$vnode.context.$forceUpdate():console.warn("Root or manually mounted instance modified. Full reload required.")})})},{}],3:[function(e,n,t){function i(){}var o=t.cache={};t.insert=function(e){if(o[e])return i;o[e]=!0;var n=document.createElement("style");return n.setAttribute("type","text/css"),"textContent"in n?n.textContent=e:n.styleSheet.cssText=e,document.getElementsByTagName("head")[0].appendChild(n),function(){document.getElementsByTagName("head")[0].removeChild(n),o[e]=!1}}},{}],4:[function(e,n,t){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function o(e){e.use(a.default),e.component("fa-header",c.default),e.component("fa-navigation",u.default),e.component("fa-search",f.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.Search=t.Navigation=t.Header=void 0;var r=e("v-media-query"),a=i(r),s=e("./components/Header.vue"),c=i(s),d=e("./components/Navigation.vue"),u=i(d),l=e("./components/Search.vue"),f=i(l);"undefined"!=typeof window&&window.Vue&&window.Vue.use(o),t.default=o,t.Header=c.default,t.Navigation=u.default,t.Search=f.default},{"./components/Header.vue":5,"./components/Navigation.vue":6,"./components/Search.vue":7,"v-media-query":1}],5:[function(e,n,t){(function(i){var o=e("vueify/lib/insert-css").insert("/* line 53, stdin */\n.header .wrapper {\n  position: relative; }\n\n/* line 57, stdin */\n.header--sticky .header__wrapper {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 9999; }");!function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=e("../lib/sticky.js"),i=function(e){return e&&e.__esModule?e:{default:e}}(n);t.default={name:"fa-header",data:function(){return{desktopView:!1}},props:{breakpoint:{type:Number,default:1024},sticky:{type:Number,default:-1}},watch:{"$mq.resize":"screenResize"},methods:{screenResize:function(){this.$mq.above(this.breakpoint)?this.desktopView=!0:this.desktopView=!1}},created:function(){this.$mq.above(this.breakpoint)&&(this.desktopView=!0)},directives:{sticky:i.default}}}(),n.exports.__esModule&&(n.exports=n.exports.default);var r="function"==typeof n.exports?n.exports.options:n.exports;r.functional&&console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions."),r.render=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("header",{directives:[{name:"sticky",rawName:"v-sticky",value:{stickyTop:e.sticky},expression:"{ stickyTop: sticky}"}],staticClass:"header",class:{"header--desktop":e.desktopView}},[t("div",{staticClass:"header__wrapper"},[t("div",{staticClass:"header__content"},[e._t("default")],2)])])},r.staticRenderFns=[],n.hot&&function(){var t=e("vue-hot-reload-api");t.install("undefined"!=typeof window?window.VUE:void 0!==i?i.VUE:null,!0),t.compatible&&(n.hot.accept(),n.hot.dispose(o),n.hot.data?t.reload("data-v-ac3d933a",r):t.createRecord("data-v-ac3d933a",r))}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../lib/sticky.js":8,"vue-hot-reload-api":2,"vueify/lib/insert-css":3}],6:[function(e,n,t){(function(i){var o=e("vueify/lib/insert-css").insert('/* line 71, stdin */\n.nav__wrapper {\n  display: block;\n  padding: 0;\n  position: fixed;\n  z-index: 999;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  visibility: hidden; }\n\n/* line 82, stdin */\n.nav__background {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 1;\n  display: none; }\n\n/* line 91, stdin */\n.nav__container {\n  width: 320px;\n  padding: 40px 10px;\n  padding-top: 12px;\n  height: 100%;\n  right: -320px;\n  -webkit-transition: all 0.5s ease;\n  transition: all 0.5s ease;\n  position: absolute;\n  z-index: 2; }\n\n/* line 102, stdin */\n.nav__mobile {\n  cursor: pointer; }\n  /* line 104, stdin */\n  .nav__mobile:before {\n    font-family: FontAwesome;\n    content: "\\f0c9"; }\n\n/* line 109, stdin */\n.nav__close {\n  cursor: pointer;\n  display: block;\n  float: right;\n  padding: 0 10px; }\n  /* line 114, stdin */\n  .nav__close:before {\n    font-family: FontAwesome;\n    content: "\\f00d"; }\n\n/* line 120, stdin */\n.nav--show .nav__wrapper {\n  visibility: visible; }\n\n/* line 123, stdin */\n.nav--show .nav__background {\n  display: block; }\n\n/* line 126, stdin */\n.nav--show .nav__container {\n  right: 0;\n  margin: 0; }\n\n/* line 135, stdin */\nheader:not(.header--sticky) .nav--desktop .nav__wrapper,\n.header--sticky .nav--desktop:not(.nav--burger) .nav__wrapper {\n  position: inherit;\n  visibility: visible;\n  height: auto; }\n\n/* line 140, stdin */\nheader:not(.header--sticky) .nav--desktop .nav__container,\n.header--sticky .nav--desktop:not(.nav--burger) .nav__container {\n  position: inherit;\n  transition: none;\n  padding: 0;\n  width: auto;\n  right: auto;\n  height: auto; }\n\n/* line 148, stdin */\nheader:not(.header--sticky) .nav--desktop .nav__mobile,\n.header--sticky .nav--desktop:not(.nav--burger) .nav__mobile {\n  display: none; }\n\n/* line 151, stdin */\nheader:not(.header--sticky) .nav--desktop .nav__close,\n.header--sticky .nav--desktop:not(.nav--burger) .nav__close {\n  display: none; }');!function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fa-navigation",data:function(){return{desktopView:!1,navActive:!1}},props:{breakpoint:{type:Number,default:1024},burgersticky:{type:Boolean,default:!1},value:{type:Boolean,default:!1}},watch:{"$mq.resize":function(){this.$mq.above(this.breakpoint)?this.desktopView=!0:this.desktopView=!1},value:function(e){this.navActive=e,this.setBodyClass()}},methods:{navToggle:function(e){this.navActive=!this.navActive,this.$emit("input",this.navActive)},setBodyClass:function(){this.navActive?document.body.className+=" noscroll":document.body.className=document.body.className.replace(" noscroll","")}},created:function(){this.$mq.above(this.breakpoint)&&(this.desktopView=!0)}}}(),n.exports.__esModule&&(n.exports=n.exports.default);var r="function"==typeof n.exports?n.exports.options:n.exports;r.functional&&console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions."),r.render=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("nav",{staticClass:"nav",class:{"nav--show":e.navActive,"nav--desktop":e.desktopView,"nav--burger":e.burgersticky}},[t("div",{staticClass:"nav__mobile",on:{click:e.navToggle}},[e._t("icon")],2),e._v(" "),t("div",{staticClass:"nav__wrapper"},[t("div",{staticClass:"nav__background",on:{click:e.navToggle}}),e._v(" "),t("div",{staticClass:"nav__container"},[t("div",{staticClass:"nav__close",on:{click:e.navToggle}},[e._t("close-icon")],2),e._v(" "),e._t("default")],2)])])},r.staticRenderFns=[],n.hot&&function(){var t=e("vue-hot-reload-api");t.install("undefined"!=typeof window?window.VUE:void 0!==i?i.VUE:null,!0),t.compatible&&(n.hot.accept(),n.hot.dispose(o),n.hot.data?t.reload("data-v-ad89992c",r):t.createRecord("data-v-ad89992c",r))}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"vue-hot-reload-api":2,"vueify/lib/insert-css":3}],7:[function(e,n,t){(function(i){var o=e("vueify/lib/insert-css").insert('/* line 54, stdin */\n.search__mobile {\n  cursor: pointer; }\n  /* line 57, stdin */\n  .search__mobile:before {\n    font-family: FontAwesome;\n    content: "\\f002"; }\n\n/* line 63, stdin */\n.search__content {\n  display: none; }\n\n/* line 68, stdin */\n.search--show .search__content {\n  display: block;\n  position: absolute;\n  left: 0;\n  right: 0;\n  z-index: 999; }\n  /* line 75, stdin */\n  .search--show .search__content input {\n    width: 100%; }\n\n/* line 83, stdin */\nheader:not(.header--sticky) .search--desktop .search__mobile, .header--sticky .search--desktop:not(.search--iconsticky) .search__mobile {\n  display: none; }\n\n/* line 87, stdin */\nheader:not(.header--sticky) .search--desktop .search__content, .header--sticky .search--desktop:not(.search--iconsticky) .search__content {\n  display: block;\n  position: relative; }');!function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"fa-search",data:function(){return{desktopView:!1,searchActive:!1}},props:{breakpoint:{type:Number,default:1024},iconsticky:{type:Boolean,default:!1}},watch:{"$mq.resize":"screenResize"},methods:{screenResize:function(){this.$mq.above(this.breakpoint)?this.desktopView=!0:this.desktopView=!1},searchToggle:function(e){this.searchActive=!this.searchActive}},created:function(){this.$mq.above(this.breakpoint)&&(this.desktopView=!0)}}}(),n.exports.__esModule&&(n.exports=n.exports.default);var r="function"==typeof n.exports?n.exports.options:n.exports;r.functional&&console.error("[vueify] functional components are not supported and should be defined in plain js files using render functions."),r.render=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"search",class:{"search--show":e.searchActive,"search--desktop":e.desktopView,"search--iconsticky":e.iconsticky}},[t("div",{staticClass:"search__mobile",on:{click:e.searchToggle}},[e._t("icon")],2),e._v(" "),t("div",{staticClass:"search__content"},[e._t("default")],2)])},r.staticRenderFns=[],n.hot&&function(){var t=e("vue-hot-reload-api");t.install("undefined"!=typeof window?window.VUE:void 0!==i?i.VUE:null,!0),t.compatible&&(n.hot.accept(),n.hot.dispose(o),n.hot.data?t.reload("data-v-09a9b3fe",r):t.createRecord("data-v-09a9b3fe",r))}()}).call(this,"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"vue-hot-reload-api":2,"vueify/lib/insert-css":3}],8:[function(e,n,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i;t.default={bind:function(e,n){var t=n.value||{},o=t.stickyTop||0,r=t.class||"header--sticky";if(-1!=o){var a,s,c=!1,d=0,u=e.firstElementChild,l=function(){c||(e.classList.add(r),e.style.height=d+"px",c=!0)},f=function(){c&&(e.classList.remove(r),e.style.height="auto",c=!1)},p=function(){e.getBoundingClientRect().top<=o?l():f()};i=function(){clearTimeout(s),s=setTimeout(function(){clearInterval(a),a=null},1e3),a||(a=setInterval(p,30))},window.addEventListener("scroll",i),window.addEventListener("load",function(){d=u.clientHeight,setTimeout(function(){d=u.clientHeight},300)})}},unbind:function(){window.removeEventListener("scroll",i)}}},{}]},{},[4]);