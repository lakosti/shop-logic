var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=r);var o=r("UDlvM"),i=r("dEdDu"),l=r("l5ICX"),a=r("c1Bmg");const d=document.querySelector(".js-list");var s;const c=null!==(s=JSON.parse(localStorage.getItem(o.common.KEY_FAVORITE)))&&void 0!==s?s:[];(0,i.createMarkup)(c,d),d.addEventListener("click",(function(e){if(e.preventDefault(),e.target.classList.contains("js-info")){const{id:n}=e.target.closest(".js-item").dataset,r=(t=Number(n),a.instruments.find((({id:e})=>e===t)));(0,l.createModal)(r)}var t}));
//# sourceMappingURL=favorite.e5c817b2.js.map
