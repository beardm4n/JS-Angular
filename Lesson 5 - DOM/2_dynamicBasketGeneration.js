'use strict';

let carts = [
    [   {
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
    ],
    []
];

let randomCartIndex = Math.floor(Math.random() * carts.length);

function outputCart(arr) {
   let $emptyCart = document.createElement('div'),
       cart = [];

   $emptyCart.classList.add('cart');

   arr.forEach(item => cart.push(item));

   if (cart.length === 0) {
      $emptyCart.textContent = 'Cart is empty';
   } else {
      let totalSum = arr.reduce((acc, item) => acc + item.quantity * item.price, 0),
          totalNum = arr.reduce((acc, item) => acc + item.quantity, 0);

      $emptyCart.textContent = `There are ${totalNum} products in the basket in the amount of ${totalSum} RUB`;
   }

   document.body.appendChild($emptyCart);
}

outputCart(carts[randomCartIndex]);