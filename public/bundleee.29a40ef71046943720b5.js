(()=>{"use strict";var t={28:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),a=n(645),i=n.n(a)()(o());i.push([t.id,"/**\r\n * Body CSS\r\n */\r\n\r\n html,\r\n body {\r\n\t height: 100%;\r\n }\r\n \r\n html,\r\n body,\r\n input,\r\n textarea,\r\n button {\r\n\t -webkit-font-smoothing: antialiased;\r\n\t -moz-osx-font-smoothing: grayscale;\r\n\t text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);\r\n }\r\n \r\n \r\n /**\r\n\t* Sidebar CSS\r\n\t*/\r\n \r\n #sidebar {\r\n\t background-color: #2196F3;\r\n\t padding: 15px;\r\n }\r\n \r\n @media (min-width: 768px) {\r\n\t #sidebar {\r\n\t\t position: fixed;\r\n\t\t top: 0;\r\n\t\t bottom: 0;\r\n\t\t width: 180px;\r\n\t\t height: 100%;\r\n\t\t padding-top: 30px;\r\n\t }\r\n }\r\n \r\n \r\n /**\r\n\t* Content CSS\r\n\t*/\r\n @media (min-width: 768px) {\r\n\t #content {\r\n\t\t margin-left: 180px;\r\n\t }\r\n }\r\n\r\n.floatin-btn {\r\n\tposition: fixed;\r\n\tbottom: 50px;\r\n\tright: 50px;\r\n}\r\n\r\n.modal {\r\n\tmax-width: 600px;\r\n\tmax-height: 300px;\r\n\tmargin: 100px auto;\r\n\toverflow-y: auto;\r\n\tbackground: #fff;\r\n}\r\n\r\n.modal > h1 {\r\n\ttext-align: center;\r\n}\r\n\r\n.modal .modal-content {\r\n\tpadding: 1rem;\r\n}\r\n\r\n.error {\r\n\tcolor: red;\r\n}",""]);const s=i},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<t.length;c++){var l=[].concat(t[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var a={},i=[],s=0;s<t.length;s++){var d=t[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,u="".concat(c," ").concat(l);a[c]=l+1;var p=n(u),f={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==p)e[p].references++,e[p].updater(f);else{var m=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var a=r(t=t||[],o=o||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var s=n(a[i]);e[s].references--}for(var d=r(t,o),c=0;c<a.length;c++){var l=n(a[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}a=d}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{class t{static create(n){return fetch("https://ask-app-ff283-default-rtdb.europe-west1.firebasedatabase.app/questions.json",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>(n.id=t.name,n))).then(e).then(t.renderList)}static fetch(t){return t?fetch(`https://ask-app-ff283-default-rtdb.europe-west1.firebasedatabase.app/questions.json?auth=${t}`).then((t=>t.json())).then((t=>t&&t.error?`<p class='error'>${t.error}</p>`:t?Object.keys(t).map((e=>({...t[e],id:e}))):[])):Promise.resolve("<p class='error'> You don't have a token</p>")}static renderList(){const t=r(),e=t.length?t.map(o).join(""):'<div class="mui--text-headline">Нou haven\'t asked anything yet</div>';document.getElementById("list").innerHTML=e}static listToHTML(t){return t.length?`<ol>${t.map((t=>`<li>${t.text}</li>`)).join("")}</ol>`:"<p>No questions yet</p>"}}function e(t){const e=r();e.push(t),localStorage.setItem("question",JSON.stringify(e))}function r(){return JSON.parse(localStorage.getItem("question")||"[]")}function o(t){return`\n\t<div class="mui--text-black-54">\n\t${new Date(t.date).toLocaleDateString()}\n\t${new Date(t.date).toLocaleTimeString()}\n\t</div>\n\t<div>${t.text}</div>\n\t<br>\n\t`}function a(t){return t.length>=10}function i(t,e){const n=document.createElement("div");n.classList.add("modal");const r=`\n\t<h1>${t}</h1>\n\t<div class='modal-content'>${e}</div>\n\t`;n.innerHTML=r,mui.overlay("on",n)}var s=n(379),d=n.n(s),c=n(795),l=n.n(c),u=n(569),p=n.n(u),f=n(565),m=n.n(f),h=n(216),v=n.n(h),b=n(589),y=n.n(b),g=n(28),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=p().bind(null,"head"),x.domAPI=l(),x.insertStyleElement=v(),d()(g.Z,x),g.Z&&g.Z.locals&&g.Z.locals;const S=document.getElementById("form"),w=document.getElementById("modal-btn"),T=S.querySelector("#question-input"),L=S.querySelector("#submit");function E(e){e.preventDefault();const n=e.target.querySelector("button"),r=e.target.querySelector("#email").value,o=e.target.querySelector("#password").value;n.disabled=!0,function(t,e){return fetch("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBisp_fX68vECBgbXUtw0_lNnV3lxlG6Ic",{method:"POST",body:JSON.stringify({email:t,password:e,returnSecureToken:!0}),headers:{"Content-Type":"application/json"}}).then((t=>t.json())).then((t=>t.idToken))}(r,o).then(t.fetch).then(k).then((()=>n.disabled=!1))}function k(e){"string"==typeof e?i("Error!!!",e):i("Questions list",t.listToHTML(e))}window.addEventListener("load",t.renderList),S.addEventListener("submit",(function(e){if(e.preventDefault(),a(T.value)){const e={text:T.value.trim(),date:(new Date).toJSON()};L.disabled=!0,t.create(e).then((()=>{T.value="",T.className="",L.disabled=!1}))}})),w.addEventListener("click",(function(){i("Log in",'\n\t<form class="mui-form" id="auth-form">\n\t\t<div class="mui-textfield mui-textfield--float-label">\n\t\t\t<input type="email" id="email" required/>\n\t\t\t<label for="email">Email</label>\n\t\t</div>\n\t\t<div class="mui-textfield mui-textfield--float-label">\n\t\t\t<input type="password" id="password" required/>\n\t\t\t<label for="password">Password</label>\n\t\t</div>\n\n\t\t<button\n\t\t\ttype="submit"\n\t\t\tclass="mui-btn mui-btn--raised mui-btn--primary"\n\t\t>\n\t\t\tLog in\n\t\t</button>\n\t</form>\n\t'),document.getElementById("auth-form").addEventListener("submit",E,{once:!0})})),T.addEventListener("input",(()=>{L.disabled=!a(T.value)}))})()})();