!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},e.parcelRequired7c6=n);var i,o,s=n("7jJJd"),a=n("l1rGz"),l=n("87LyB"),c=n("IPVlA"),d=document.querySelector(".js-list"),u=null!==(i=JSON.parse(localStorage.getItem(s.common.KEY_FAVORITE)))&&void 0!==i?i:[],f=null!==(o=JSON.parse(localStorage.getItem(s.common.KEY_BASKET)))&&void 0!==o?o:[];function m(e){return c.instruments.find((function(t){return t.id===e}))}(0,a.createMarkup)(c.instruments,d),d.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){var t=e.target.closest(".js-item").dataset.id,r=m(Number(t));(0,l.createModal)(r)}if(e.target.classList.contains("js-basket")){var n=e.target.closest(".js-item").dataset.id,i=m(Number(n));f.push(i),localStorage.setItem(s.common.KEY_BASKET,JSON.stringify(f))}if(e.target.classList.contains("js-favorite")){var o=e.target.closest(".js-item").dataset.id,a=m(Number(o));if(u.some((function(e){return e.id===a.id})))return;u.push(a),localStorage.setItem(s.common.KEY_FAVORITE,JSON.stringify(u))}}))}();
//# sourceMappingURL=index.fe417ba4.js.map