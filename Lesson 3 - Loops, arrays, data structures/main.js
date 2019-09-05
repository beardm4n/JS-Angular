'use strict';
/*
===============================================================
Task #1
===============================================================
*/
console.log('=== TASK #1 ===');

let min = +prompt('Input the number №1'),
    max = +prompt('Input the number №2'),
    finalArr = [],
    i = 0;

function isPrime(num) {
   if (num === 0 || num === 1) return false;

   let numberToCompare = 2;

   while (numberToCompare < num) {
      if (num % numberToCompare === 0) {
         return false;
      }

      numberToCompare++;
   }

   return true;
}

while (min < max) {
   if (isPrime(min)) console.log(min);

   min++;
}

console.log(finalArr);

/*
===============================================================
Task #2
===============================================================
*/
console.log('=== TASK #2 ===');

let cart = [
    ['Тарелки', '5', '350'],
    ['Чашки', '4', '175'],
    ['Ложки', '6', '89'],
    ['Кастрюли', '9', '950'],
    ['Сковородки', '11', '1386'],
    ['Ножи', '12', '2150'],
    ['Вилки', '12', '75']
];

function countBasketPrice(arr) {
   let sum = [];
   
   arr.forEach((item, index) => sum[index] =  item[1] * item[2]);

   return sum.reduce((acc,current) => acc + current, 0);
}

console.log(`Total prise: ${countBasketPrice(cart)} RUB`);

/*
===============================================================
Task #3
===============================================================
*/
console.log('=== TASK #3 ===');

for (let i = 0; i < 9; i++, console.log(i)) {
   // при необходимости выполнить несколько команд, их можно записать через запятую
}

/*
===============================================================
Task #4
===============================================================
*/
console.log('=== TASK #4 ===');

let num1 = +prompt('Enter the number #1'),
    num2 = +prompt('Enter the number #2'),
    symbol = '',
    numberToCompare = num1;

while (num1 < num2) {

   for (numberToCompare; numberToCompare <= num1; numberToCompare++) {
      symbol += '#';
      console.log(symbol);
   }

   num1++;
}