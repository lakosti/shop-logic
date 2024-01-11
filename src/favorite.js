import '/node_modules/basiclightbox/dist/basicLightbox.min.css';

import { common } from './common';
import { createMarkup } from './helpers/createMarkup';
import { createModal } from './helpers/createModal';

import { instruments } from './helpers/instruments';

const list = document.querySelector('.js-list');
const favorite = JSON.parse(localStorage.getItem(common.KEY_FAVORITE)) ?? [];

createMarkup(favorite, list);
list.addEventListener('click', onClick);
function onClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains('js-info')) {
    const { id } = evt.target.closest('.js-item').dataset;
    const product = findProduct(Number(id));
    createModal(product);
  }
}
function findProduct(productId) {
  return instruments.find(({ id }) => id === productId);
}
