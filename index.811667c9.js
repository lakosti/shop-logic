!function(){function n(n,t,e,o){Object.defineProperty(n,t,{get:e,set:o,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},o={},i=t.parcelRequired7c6;null==i&&((i=function(n){if(n in e)return e[n].exports;if(n in o){var t=o[n];delete o[n];var i={id:n,exports:{}};return e[n]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+n+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(n,t){o[n]=t},t.parcelRequired7c6=i),i.register("7jJJd",(function(t,e){n(t.exports,"common",(function(){return o}));var o={KEY_FAVORITE:"favorite",KEY_BASKET:"basket"}})),i.register("l1rGz",(function(t,e){function o(n,t){var e=n.map((function(n){var t=n.id,e=n.img,o=n.name;return"\n        <li class='js-item' data-id='".concat(t,"'>\n      <img src=\"").concat(e,'" alt="').concat(o,"\" width='300'>\n      <h2>").concat(o,"</h2>\n      <p><a class='js-info' href='#'>More info</a></p>\n    <div>\n      <button class=\"js-favorite\">Add to favorite</button>\n      <button class=\"js-basket\">Add to basket</button>\n    </div>\n    </li>\n    ")})).join("");t.innerHTML=e}n(t.exports,"createMarkup",(function(){return o}))})),i.register("87LyB",(function(t,e){n(t.exports,"createModal",(function(){return c}));var o=i("dyT35"),r=i("6kLNs");function c(n){o.create('\n\t<div class="modal">\n    <img src="'.concat(n.img,'" alt="').concat(n.name,'" width="200">\n    <h2>').concat(n.name,"</h2>\n    <h3>").concat(n.price," грн</h3>\n    <p>").concat(n.description,'</p>\n    <div>\n        <button class="js-favorite">Add to favorite</button>\n        <button class="js-basket">Add to basket</button>\n      </div>\n</div>\n'),{handler:null,onShow:function(n){this.handler=r.closeModal.bind(n),document.addEventListener("keydown",this.handler)},onClose:function(){document.removeEventListener("keydown",this.handler)}}).show()}})),i.register("dyT35",(function(n,t){n.exports=function n(t,e,o){function i(c,a){if(!e[c]){if(!t[c]){var s=void 0;if(!a&&s)return s(c,!0);if(r)return r(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var d=e[c]={exports:{}};t[c][0].call(d.exports,(function(n){return i(t[c][1][n]||n)}),d,d.exports,n,t,e,o)}return e[c].exports}for(var r=void 0,c=0;c<o.length;c++)i(o[c]);return i}({1:[function(n,t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.create=e.visible=void 0;var o=function(n){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e=document.createElement("div");return e.innerHTML=n.trim(),!0===t?e.children:e.firstChild},i=function(n,t){var e=n.children;return 1===e.length&&e[0].tagName===t},r=function(n){return null!=(n=n||document.querySelector(".basicLightbox"))&&!0===n.ownerDocument.body.contains(n)};e.visible=r,e.create=function(n,t){var e=function(n,t){var e=o('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),r=e.querySelector(".basicLightbox__placeholder");n.forEach((function(n){return r.appendChild(n)}));var c=i(r,"IMG"),a=i(r,"VIDEO"),s=i(r,"IFRAME");return!0===c&&e.classList.add("basicLightbox--img"),!0===a&&e.classList.add("basicLightbox--video"),!0===s&&e.classList.add("basicLightbox--iframe"),e}(n=function(n){var t="string"==typeof n,e=n instanceof HTMLElement==1;if(!1===t&&!1===e)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(o(n,!0)):"TEMPLATE"===n.tagName?[n.content.cloneNode(!0)]:Array.from(n.children)}(n),t=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(n=Object.assign({},n)).closable&&(n.closable=!0),null==n.className&&(n.className=""),null==n.onShow&&(n.onShow=function(){}),null==n.onClose&&(n.onClose=function(){}),"boolean"!=typeof n.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof n.className)throw new Error("Property `className` must be a string");if("function"!=typeof n.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof n.onClose)throw new Error("Property `onClose` must be a function");return n}(t)),c=function(n){return!1!==t.onClose(a)&&function(n,t){return n.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===r(n)||n.parentElement.removeChild(n),t()}),410),!0}(e,(function(){if("function"==typeof n)return n(a)}))};!0===t.closable&&e.addEventListener("click",(function(n){n.target===e&&c()}));var a={element:function(){return e},visible:function(){return r(e)},show:function(n){return!1!==t.onShow(a)&&function(n,t){return document.body.appendChild(n),setTimeout((function(){requestAnimationFrame((function(){return n.classList.add("basicLightbox--visible"),t()}))}),10),!0}(e,(function(){if("function"==typeof n)return n(a)}))},close:c};return a}},{}]},{},[1])(1)})),i.register("6kLNs",(function(t,e){function o(n){"Escape"===n.code&&this.close()}n(t.exports,"closeModal",(function(){return o}))})),i.register("IPVlA",(function(t,e){n(t.exports,"instruments",(function(){return o}));var o=[{id:1,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Шуруповерт",price:150,description:"Мережевий дриль-шуруповерт TD-30 — надійний помічник для робіт по дому та в невеликій майстерні, якщо необхідно виконувати роботу переважно з закручування кріпильних елементів. Муфта регулювання крутного моменту робить інструмент універсальним вибором як для свердління, так і для роботи з кріпленнями."},{id:2,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Перфоратор",price:3948,description:"Перфоратор бочковий Dnipro-M ВН-20 використовується для виконання широкого спектру будівельних і ремонтних робіт: буріння та свердління отворів, розмішування будівельних сумішей, демонтажу і т.д."},{id:3,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Шліфмашина",price:1299,description:"Кутова шліфувальна машина Dnipro-M GS-98 – модель, яка поєднує в собі оптимальне співвідношення потужності, ваги та мобільності. Конструкція шліфмашини сприяє зручній та надійній роботі, навіть однією рукою. Інструмент ідеально підходить для виконання різу на висоті та використання у важкодоступних місцях. Низький рівень шуму та вібрації, двопозиційне розташування додаткової рукоятки під кутом 100 градусів, мінімізує втому під час шліфування."},{id:4,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Пила",price:11049,description:"Мобільна акумуляторна ланцюгова пила DCS-200BC DUAL призначена для обрізання зайвих гілок, спилювання дерев та чагарника, заготівлі дров, покрою будматеріалів та демонтажних робіт. Її просто використовувати у будь-яких місцях: на висоті, на виїзних роботах, у лісі або саду. При цьому Вам не потрібно буде турбуватися про підключення до мережі."},{id:5,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Рівень",price:897,description:"Рівень серії ProVision виробництва DNIPRO-M має не тільки високу точність вимірювань і чудові захисні властивості, а й надає максимальний комфорт користувачеві в процесі експлуатації."},{id:6,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Тример",price:3699,description:"Тример електричний Dnipro-M 110 призначений для покосу густої трави, а також кущів з діаметром стовбура до 10 мм."},{id:7,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Мотокоса",price:11049,description:"Мотокоса Dnipro-M 43 призначена для покосу трави, чагарників, бур'янів, газонів, а також для заготівлі сіна в невеликих масштабах.    Використовується для польових робіт на садовій ділянці площею до 2000 м2."},{id:8,img:"https://static.dnipro-m.ua/cache/products/5596/catalog_origin_191105.jpg",name:"Генератор",price:10890,description:"Бензиновий генератор GX-25 номінальною потужністю 2,5 кВт забезпечить автономність побутових приладів на дачі або у приватному будинку. Ви зможете одночасно підключити до нього освітлення, холодильник, зарядку телефону, ноутбук та водяний насос."}]}))}();
//# sourceMappingURL=index.811667c9.js.map