parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=r(e))){var n=0,t=function(){};return{s:t,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:t}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,l=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==o.return||o.return()}finally{if(a)throw i}}}}function n(e){return i(e)||o(e)||r(e)||t()}function t(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function r(e,n){if(e){if("string"==typeof e)return l(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?l(e,n):void 0}}function o(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function i(e){if(Array.isArray(e))return l(e)}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var a=document.querySelector(".append-row"),c=document.querySelector(".remove-row"),d=document.querySelector(".append-column"),u=document.querySelector(".remove-column"),f=document.querySelector("td"),y=document.querySelector("tr"),s=document.querySelector("tbody"),m=2,b=10;a.addEventListener("click",function(){s.append(y.cloneNode(!0)),c.disabled=!1,n(s.children).length===b&&(a.disabled=!0)}),c.addEventListener("click",function(){s.lastElementChild.remove(),a.disabled=!1,n(s.children).length===m&&(c.disabled=!0)}),d.addEventListener("click",function(){var t,r=e(s.children);try{for(r.s();!(t=r.n()).done;){t.value.append(f.cloneNode(!0))}}catch(o){r.e(o)}finally{r.f()}u.disabled=!1,n(y.children).length===b&&(d.disabled=!0)}),u.addEventListener("click",function(){var t,r=e(s.children);try{for(r.s();!(t=r.n()).done;){t.value.lastElementChild.remove()}}catch(o){r.e(o)}finally{r.f()}d.disabled=!1,n(y.children).length===m&&(u.disabled=!0)});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.1ef6fdbe.js.map