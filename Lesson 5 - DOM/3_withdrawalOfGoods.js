'use strict';

let products = [
   {
      product: 'Тарелки',
      quantity: 5,
      price: 350
   },
   {
      product: 'Чашки',
      quantity: 4,
      price: 175
   },
   {
      product: 'Ложки',
      quantity: 6,
      price: 89
   },
   {
      product: 'Кастрюли',
      quantity: 9,
      price: 950
   }
];

let catalog = document.querySelector('#catalog');

let productInCart = [];
products.forEach(function (item, index) {
   productInCart[index] = `товар: ` + item.product + ', кол-во: ' +
       item.quantity + ' шт, цена: ' + item.price + ' руб. || ';

   catalog.textContent = `${productInCart.join(' ')}`;
});

console.log(productInCart);