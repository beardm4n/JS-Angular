'use strict';

let products =  [
   {
      product: 'Тарелки',
      quantity: 5,
      price: 350
   },
   {
      product: 'Чашки',
      quantity: 4,
      price: 175
   }
];

const renderItem = ({product, price, made = 'Russia'}) => `<div class="item"><h3>${product}</h3><p>${price}</p><p>Made in ${made}</p></div>`;

const renderList = (item) => {
   document.querySelector('.container').innerHTML = item.map(renderItem).join('');

   const $button = document.createElement('button');
   $button.textContent = 'Buy';
   $button.setAttribute('class', 'btn');

   document.querySelector('.container').appendChild($button);
};

renderList(products);

