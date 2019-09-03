'use strict';
/*
===============================================================
Task #1
===============================================================
*/

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