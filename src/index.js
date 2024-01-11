import '/node_modules/basiclightbox/dist/basicLightbox.min.css';

import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';

import { instruments } from './helpers/instruments';
// const search = document.querySelector('.js-search');
const list = document.querySelector('.js-list');
const favoriteArr = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];
const basketArr = JSON.parse(localStorage.getItem(common.KEY_BASKET)) ?? [];
//якщо локал сторадж пустий він поверне нал і буде пустий масив

createMarkup(instruments, list);

list.addEventListener('click', onClick);

function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-item').dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
  if (evt.target.classList.contains('js-basket')) {
    // отримуємо айді
    const { id } = evt.target.closest('.js-item').dataset;
    const product = findProduct(Number(id));
    //щоб зберегти обрані файли пушемо їх, і поміщаємо в локал сторадж
    basketArr.push(product);
    localStorage.setItem(common.KEY_BASKET, JSON.stringify(basketArr));
  }
  if (evt.target.classList.contains('js-favorite')) {
    const { id } = evt.target.closest('.js-item').dataset;
    const product = findProduct(Number(id));
    //перевірка чи міститься уже такий об'єкт
    const inStorage = favoriteArr.some(({ id }) => id === product.id);
    if (inStorage) {
      return;
    }
    favoriteArr.push(product);
    localStorage.setItem(common.KEY_FAVORITE, JSON.stringify(favoriteArr));
  }
}

function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
