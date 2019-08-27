'use strict';

function checkNum(num1, num2) {
   if (num1 === null || num2 === null) {
      return alert('The End')
   } else if ((+num1 === 0) && (+num2 === 0)) {
      alert('You entered no number. Please enter a number');
      return window.location.reload();
   } else if (isNaN(num1) || isNaN(num2)) {
      alert('Non-numerical values are available. Please try again');
      return window.location.reload();
   }
}

function getRandomNum(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function userNumber(rndNum) {
   let userNum = null;

   while (userNum !== rndNum) {
      userNum = +prompt('Enter a number');

      if (userNum > rndNum) {
         alert('Need less number')
      } else if (userNum < rndNum) {
         alert('Need more number')
      }

   }

   return alert(`You Win! This number is ${rndNum}`);
}

// USAGE
let minNum = prompt('Enter the MIN value for the lower range'),
    maxNum = prompt('Enter the MAX value for the upper range');
checkNum(minNum, maxNum);

let randomNum = getRandomNum(+minNum, +maxNum);
console.log(randomNum);

userNumber(randomNum);
