(()=>{var e={666:(e,t,r)=>{var n=r(17),o=r(354),a=r(977);e.exports=function(e,t){var r="production"===t.mode?"https://obscure-harbor-49797.herokuapp.com/api/notes":"http://localhost:3001/notes";return{target:"node",entry:"./src/index.js",externalsPresets:{node:!0},externals:[a()],output:{path:n.resolve(__dirname,"build"),filename:"main.js"},devServer:{static:n.resolve(__dirname,"build"),compress:!0,port:3e3},performance:{hints:!1,maxEntrypointSize:512e3,maxAssetSize:512e3},module:{rules:[{test:/\.m?js$/,exclude:/node_modules/,use:{loader:"babel-loader",options:{presets:["@babel/preset-env","@babel/preset-react"]}}},{test:/\.css$/,use:["style-loader","css-loader"]}]},plugins:[new o.DefinePlugin({BACKEND_URL:JSON.stringify(r)})]}}},424:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(81),o=r.n(n),a=r(645),s=r.n(a)()(o());s.push([e.id,".container {\n  margin: 10;\n  background-color: #dee8e4;\n}\n",""]);const i=s},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(n)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);n&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},379:e=>{"use strict";var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],u=n.base?c[0]+n.base:c[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=r(p),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var v=o(f,n);n.byIndex=i,t.splice(i,0,{identifier:p,updater:v,references:1})}s.push(p)}return s}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=r(a[s]);t[i].references--}for(var c=n(e,o),u=0;u<a.length;u++){var l=r(a[u]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=c}}},569:e=>{"use strict";var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{"use strict";e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},354:e=>{"use strict";e.exports=require("webpack")},977:e=>{"use strict";e.exports=require("webpack-node-externals")},17:e=>{"use strict";e.exports=require("path")}},t={};function r(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={id:n,exports:{}};return e[n](a,a.exports,r),a.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=require("react");var t=r.n(e);const n=require("react-dom");var o=r.n(n);const a=require("axios");var s=r.n(a),i=r(666),c=r.n(i);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(e){i=!0,o=e}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(e){if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?l(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}const p=function(){var r=u((0,e.useState)(0),2),n=r[0],o=r[1],a=u((0,e.useState)([]),2),i=a[0],l=a[1],p=function(t){var r=u((0,e.useState)([]),2),n=r[0],o=r[1];return(0,e.useEffect)((function(){s().get(t).then((function(e){o(e.data)}))}),[t]),n}(c());return t().createElement("div",{className:"container"},"hello webpack ",n," clicks",t().createElement("button",{onClick:function(){o(n+1),l(i.concat(n))}},"press"),t().createElement("div",null,p.length," notes on server ",c()))};require("core-js/stable/index.js"),require("regenerator-runtime/runtime.js");var d=r(379),f=r.n(d),v=r(795),m=r.n(v),h=r(569),y=r.n(h),b=r(565),g=r.n(b),x=r(216),S=r.n(x),w=r(589),E=r.n(w),j=r(424),A={};A.styleTagTransform=E(),A.setAttributes=g(),A.insert=y().bind(null,"head"),A.domAPI=m(),A.insertStyleElement=S(),f()(j.Z,A),j.Z&&j.Z.locals&&j.Z.locals,o().render(t().createElement(p,null),document.getElementById("root"))})()})();