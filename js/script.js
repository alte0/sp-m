!function(e){function t(t){for(var n,c,s=t[0],l=t[1],i=t[2],d=0,v=[];d<s.length;d++)c=s[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&v.push(o[c][0]),o[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);v.length;)v.shift()();return a.push.apply(a,i||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={0:0},a=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window.webpackJsonp=window.webpackJsonp||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;a.push([3,1]),r()}({3:function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=function(e){var t=document.querySelector(".write-us-wrap"),r=t.querySelector("input");if(t){var n=t.querySelector(".write-us__btn-close"),o=t.querySelector(".write-us__btn-close-text"),a=function e(r){var a=r.type,c=r.code,s=function(){t.classList.remove("write-us-wrap_open-js"),n.removeEventListener("click",e),o.removeEventListener("click",e),window.removeEventListener("keydown",e),document.body.classList.remove("overflow-hidden")};("keydown"===a&&"Escape"===c||"click"===a)&&s()};t.classList.add("write-us-wrap_open-js"),document.body.classList.add("overflow-hidden"),r.focus(),n&&o&&(n.addEventListener("click",a),o.addEventListener("click",a),window.addEventListener("keydown",a))}},c=function(){var e=document.querySelector(".header__nav");if(e){var t=e.querySelector(".btn_close-modal");e.classList.add("header__nav_open-js"),document.body.classList.add("overflow-hidden"),t&&t.addEventListener("click",(function r(){e.classList.remove("header__nav_open-js"),document.body.classList.remove("overflow-hidden"),t.removeEventListener("click",r)}))}},s=function(e,t){e.classList.toggle(t)},l=r(1),i=(r(2),document.querySelector(".btn_email")),u=document.querySelector(".btn_menu"),d=document.querySelector(".btn_search"),v=document.querySelector(".write-us"),f=document.querySelector(".header__nav");document.addEventListener("DOMContentLoaded",(function(){var e={scrollbars:{visibility:"visible",clickScrolling:!0},textarea:{inheritedAttrs:null}},t=window.innerWidth,r=t>=1024,n=function(t,r){r=OverlayScrollbars(f,e),t&&r.destroy()};if(o()(),OverlayScrollbars(document.querySelectorAll("[data-overlayscrollbars]"),e),function(){var e={autoplay:{delay:3e3},wrapperClass:"slider-main__wrap",slideClass:"slider-main__item",loop:!0,simulateTouch:!1,navigation:{nextEl:".slider-main__btn-next",prevEl:".slider-main__btn-prev"}},t=document.querySelector(".slider-main"),r=document.querySelector(".slider-main__progress-bar"),n=new l.a(t,e),o=e.autoplay.delay/100,a=0,c=null,s=function(e){r.setAttribute("style","transform: translateX(".concat(-100+e,"%);"))},i=function(){(a+=1)>=100&&(s(a=0),clearTimeout(c)),s(a)};c=setInterval(i,o);var u=function(e){var t=e.type;"mouseenter"===t?(n.autoplay.stop(),a=0,clearTimeout(c),s(a)):"mouseleave"===t&&(n.autoplay.start(),c=setInterval(i,o))};t.addEventListener("mouseenter",u),t.addEventListener("mouseleave",u),n.on("slideChange",(function(){clearTimeout(c),a=0,n.autoplay.running&&(c=setInterval(i,o))}))}(),n(r,null),i){var m=v.querySelector(".write-us__textarea"),p=v.querySelector(".os-host-textarea");m.addEventListener("focus",(function(){s(p,"scrollbar-focus-js")})),m.addEventListener("blur",(function(){s(p,"scrollbar-focus-js")})),i.addEventListener("click",a),v.addEventListener("submit",(function(e){e.preventDefault();var t=new FormData(e.target);alert(t.get("tel"))}))}u&&u.addEventListener("click",c),d&&d.addEventListener("click",(function(){r?function(){console.log("handleClickSearchDesktop");var e=document.querySelector(".header__form-search"),t=e.querySelector(".header__form-input-search");if(e){var r=document.querySelector(".header__nav"),n=document.querySelector(".svg_search"),o=document.querySelector(".svg_x");r.classList.toggle("header__nav_hidden-js"),e.classList.toggle("header__form-search_open-js"),n.classList.toggle("svg_hidden"),o.classList.toggle("svg_hidden"),t.focus()}}():function(){console.log("handleClickSearchMobile");var e=document.querySelector(".header__form-search"),t=e.querySelector(".header__form-input-search");if(e){var r=e.querySelector(".btn_close-modal");e.classList.add("header__form-search_open-js"),document.body.classList.add("overflow-hidden"),t.focus(),r&&r.addEventListener("click",(function t(){e.classList.remove("header__form-search_open-js"),document.body.classList.remove("overflow-hidden"),r.removeEventListener("click",t)}))}}()})),window.onresize=function(){t=window.innerWidth,n(r=t>=1024,null)}}))}});
//# sourceMappingURL=script.js.map