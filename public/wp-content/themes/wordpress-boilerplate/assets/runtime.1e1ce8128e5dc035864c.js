!function(){"use strict";var e,t,n,r,o={},i={};function u(e){if(i[e])return i[e].exports;var t=i[e]={exports:{}};return o[e](t,t.exports,u),t.exports}u.m=o,u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,{a:t}),t},u.d=function(e,t){for(var n in t)u.o(t,n)&&!u.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},u.f={},u.e=function(e){return Promise.all(Object.keys(u.f).reduce((function(t,n){return u.f[n](e,t),t}),[]))},u.u=function(e){return"off-canvas-menu.357ee629aec1ec8ecb81.js"},u.miniCssF=function(e){return{87:"off-canvas-menu",179:"main",578:"icons",666:"runtime"}[e]+"."+{87:"0b46a61a",179:"9ec6779b",578:"e25ae78c",666:"undefine"}[e]+".css"},u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},e={},t="@dotsunited/wordpress-boilerplate:",u.l=function(n,r,o){if(e[n])e[n].push(r);else{var i,a;if(void 0!==o)for(var f=document.getElementsByTagName("script"),c=0;c<f.length;c++){var l=f[c];if(l.getAttribute("src")==n||l.getAttribute("data-webpack")==t+o){i=l;break}}i||(a=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.setAttribute("data-webpack",t+o),i.src=n),e[n]=[r];var s=function(t,r){i.onerror=i.onload=null,clearTimeout(d);var o=e[n];if(delete e[n],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((function(e){return e(r)})),t)return t(r)},d=setTimeout(s.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=s.bind(null,i.onerror),i.onload=s.bind(null,i.onload),a&&document.head.appendChild(i)}},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.p="",n=function(e){return new Promise((function(t,n){var r=u.miniCssF(e),o=u.p+r;if(function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=(u=n[r]).getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(o===e||o===t))return u}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){var u;if((o=(u=i[r]).getAttribute("data-href"))===e||o===t)return u}}(r,o))return t();!function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css",o.onerror=o.onload=function(i){if(o.onerror=o.onload=null,"load"===i.type)n();else{var u=i&&i.target&&i.target.href||t,a=new Error("Loading CSS chunk "+e+" failed.\n("+u+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=u,o.parentNode.removeChild(o),r(a)}},o.href=t,document.head.appendChild(o)}(e,o,t,n)}))},r={666:0},u.f.miniCss=function(e,t){r[e]?t.push(r[e]):0!==r[e]&&{87:1}[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))},function(){var e={666:0},t=[];u.f.j=function(t,n){var r=u.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var o=new Promise((function(n,o){r=e[t]=[n,o]}));n.push(r[2]=o);var i=u.p+u.u(t),a=new Error;u.l(i,(function(n){if(u.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var o=n&&("load"===n.type?"missing":n.type),i=n&&n.target&&n.target.src;a.message="Loading chunk "+t+" failed.\n("+o+": "+i+")",a.name="ChunkLoadError",a.type=o,a.request=i,r[1](a)}}),"chunk-"+t)}};var n=function(){};function r(){for(var n,r=0;r<t.length;r++){for(var o=t[r],i=!0,a=1;a<o.length;a++){var f=o[a];0!==e[f]&&(i=!1)}i&&(t.splice(r--,1),n=u(u.s=o[0]))}return 0===t.length&&(u.x(),u.x=function(){}),n}u.x=function(){u.x=function(){},i=i.slice();for(var e=0;e<i.length;e++)o(i[e]);return(n=r)()};var o=function(r){for(var o,i,f=r[0],c=r[1],l=r[2],s=r[3],d=0,p=[];d<f.length;d++)i=f[d],u.o(e,i)&&e[i]&&p.push(e[i][0]),e[i]=0;for(o in c)u.o(c,o)&&(u.m[o]=c[o]);for(l&&l(u),a(r);p.length;)p.shift()();return s&&t.push.apply(t,s),n()},i=self.webpackChunk_dotsunited_wordpress_boilerplate=self.webpackChunk_dotsunited_wordpress_boilerplate||[],a=i.push.bind(i);i.push=o}(),u.x()}();