'use strict';

/*
===============================================================
Task #1
===============================================================
*/
console.log('=== TASK #1 ===');

let num = +prompt('Input a number');

function compareNum(compareNum) {
   if (compareNum <= 0) return console.log(`ERROR! A number should be larger then 0. Object is empty:`);

   if (compareNum >= 1000) return console.log(`ERROR! A number should be less then 1000. Object is empty:`);

   if (isNaN(compareNum)) return console.log(`Please, enter a number again. Object is empty:`);
}

function numToObj(num) {
   let object = {};

   compareNum(num);

   if (num > 0 && num < 1000) {
      let h = Math.floor(num / 100),
          d = Math.floor((num - (h * 100)) / 10),
          u = Math.floor(num - ((h * 100) + (d * 10)));

      object.hundreds = h;
      object.dozens = d;
      object.units = u;
   }

   return object;
}

console.log(numToObj(num));

/*
===============================================================
Task #2
===============================================================
*/
console.log('=== TASK #2 ===');

let cart = [
   {
      product: 'Тарелки',
      quantity: '5',
      price: '350'
   },
   {
      product: 'Чашки',
      quantity:'4',
      price: '175'
   },
   {
      product: 'Ложки',
      quantity:'6',
      price: '89'
   },
   {
      product: 'Кастрюли',
      quantity:'9',
      price: '950'
   },
   {
      product: 'Сковородки',
      quantity:'11',
      price: '1386'
   },
   {
      product: 'Ножи',
      quantity:'12',
      price: '2150'
   },
   {
      product: 'Вилки',
      quantity:'12',
      price: '75'
   }
];

function countBasketPrice(arr) {
   let totalPrice = [];

   arr.forEach((item, index) => totalPrice[index] =  item.quantity * item.price);

   return totalPrice.reduce((acc, current) => acc + current, 0);
}

console.log(`Total price: ${countBasketPrice(cart)} RUB`);

/*
===============================================================
Task #3
===============================================================
*/

/*
let product = {
   name: 'blabla',
   price: 1,
   quantity: 12,

   getPrice: () => this.price,
   getQuantity: () => this.quantity,
   getName: () => this.name
}
*/