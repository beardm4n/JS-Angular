'use strict';
/*
===============================================================
Task #1
===============================================================
*/
/*
let min = +prompt('Input the number №1'),
    max = +prompt('Input the number №2'),
    finalArr = [],
    i = 0;

while (min < max) {
   // по договоренности сообщества было принято не брать в расчет числа 0 и 1,
   // для сравнения простых чисел, поэтому проверку будем осуществлять с 2-х
   let  numberToCompare = 2;
   //проверка: делится ли число на 1 или нет
   while (numberToCompare < min) {
      if (min % numberToCompare === 0) break;
      numberToCompare++;
   }
   //проверка: равно ли число самому себе
   if (numberToCompare === min) {
      finalArr[i] = min;
      i++;
   }

   min++;
}

console.log(finalArr);
*/
/*
===============================================================
Task #2
===============================================================
*/

let cart = [
    ['Тарелки', '15', '350'],
    ['Чашки', '24', '175'],
    ['Ложки', '80', '89'],
    ['Кастрюли', '5', '950'],
    ['Сковородки', '11', '1386'],
    ['Ножи', '87', '2150'],
    ['Вилки', '80', '75']
];

function countBasketPrice(arr) {
   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
      sum = sum + parseInt(arr[i][2], 10);
   }

   return sum;
}

console.log(`Total prise: ${countBasketPrice(cart)} RUB`);