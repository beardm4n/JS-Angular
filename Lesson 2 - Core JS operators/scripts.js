'use strict';

/*
===============================================================
Task #1
===============================================================
*/

/*
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 - префиксная запись инкремента возвращает сразу инкрементированное значение
d = b++; alert(d);           // 1 - в постфиксной форме происходит возвращение значения, а потом инкрементирование
c = (2+ ++a); alert(c);      // 5 - а = 3 (префиксный инкремент), 2+ будет 2, т.к. постфиксная форма инкремента
d = (2+ b++); alert(d);      // 4 - b = 2 (постфиксный инкремент, предыдущее значени было 2), 2+ будет 2, т.к. постфиксная форма инкремента
alert(a);                    // 3 - т.к. по всему коду было 2 префиксных инкремента.
alert(b);                    // 3 - т.к. по всему коду было 2 постфиксных инкремента.
*/

/*
===============================================================
Task #2
===============================================================
*/

/*
var a = 2;
var x = 1 + (a *= 2);

x = 5 - потому что первым дело выполнится выражение, заключенное в скобки, а именно:
        *= - говорит нам о том, что мы будем имеющуюся переменную а со значением 2
        умножать на 2, что в итоге нам даст x = 4. Затем выполнится сложение 1 + 4.
*/

/*
===============================================================
Task #3
===============================================================
*/
console.log('TASK #3');

let a = Math.floor(+prompt('Enter value A')),
    b = Math.floor(+prompt('Enter value B'));
console.log(`A = ${a}`);
console.log(`B = ${b}`);

if (a >= 0 && b >= 0) {
   console.log(`A - B = ${a - b}`);
} else if (a < 0 && b < 0) {
   console.log(`A * B = ${a * b}`);
} else if ((a >= 0 && b < 0) || (a < 0 && b >= 0)) {
   console.log(`A + B = ${a + b}`);
}

/*
===============================================================
Task #4
===============================================================
*/
console.log('TASK #4');

let lowerRange = +prompt('Enter the MIN value for the lower range'),
    upperRange = +prompt('Enter the MAX value for the lower range'),
    valueA = Math.floor(Math.random() * (upperRange - lowerRange)) + lowerRange,
    arrToValueA = [],
    finalArr = [];

for (let i = lowerRange; i < upperRange + 1; i++){
   arrToValueA[i] = i;
}

switch (valueA) {
   case (valueA):
      for (let j = valueA; j < arrToValueA.length; j++) {
         finalArr[j] = j;
      }
      alert(finalArr.slice(valueA).join(', '));
      break;
}
//CHECK
console.log(lowerRange);
console.log(upperRange);
console.log(valueA);
console.log(arrToValueA);
console.log(finalArr);

/*
===============================================================
Task #5
===============================================================
*/
console.log('TASK #5');

let numA = +prompt('Enter a number A'),
    numB = +prompt('Enter a number B');

// addition
function getAdd(num1, num2) {
   return num1 + num2;
}

// subtraction
function getSub(num1, num2) {
   return num1 - num2;
}

// multiplication
function getMulti(num1, num2) {
   return num1 * num2;
}

// division
function getDiv(num1, num2) {
   return Math.floor((num1 / num2) * 100) / 100;
}

//USED
console.log(`A = ${numA}`);
console.log(`B = ${numB}`);
console.log(`A + B = ${getAdd(numA, numB)}`);
console.log(`A - B = ${getSub(numA, numB)}`);
console.log(`A * B = ${getMulti(numA, numB)}`);
console.log(`A / B = ${getDiv(numA, numB)}`);

/*
===============================================================
Task #6
===============================================================
*/
console.log('TASK #6');

let arg1 = Math.floor(Math.random() * 100),
    arg2 = Math.floor(Math.random() * 100),
    arrOperation = ['addition', 'subtraction', 'multiplication', 'division'],
    arrFinalOperation = arrOperation[Math.floor(Math.random() * arrOperation.length)];

//CHECK
console.log(arg1);
console.log(arg2);
console.log(arrOperation);
console.log(arrFinalOperation);

function mathOperation(arg1, arg2, operation) {
   switch (operation) {
      case ('addition'):
      function getAdd(num1, num2) {
         return num1 + num2;
      }
         console.log(`A + B = ${getAdd(arg1, arg2)}`);
         break;
      case ('subtraction'):
      function getSub(num1, num2) {
         return num1 - num2;
      }
         console.log(`A - B = ${getSub(arg1, arg2)}`);
         break;
      case ('multiplication'):
      function getMulti(num1, num2) {
         return num1 * num2;
      }
         console.log(`A * B = ${getMulti(arg1, arg2)}`);
         break;
      case ('division'):
      function getDiv(num1, num2) {
         return Math.floor((num1 / num2) * 100) / 100;
      }
         console.log(`A / B = ${getDiv(arg1, arg2)}`);
         break;
   }
}

mathOperation(arg1, arg2, arrFinalOperation);

/*
===============================================================
Task #7
===============================================================
*/
console.log('TASK #7');

console.log(null == 0);   // false
console.log(typeof null); // object. Хотя null это собственный тип, состоящий из единственного значения - null,
                          // которое имеет смысл "значение неизвестно" или "ничего".
console.log(typeof 0);    // number. 0 это тип число, и значение у него 0.
                          // null и 0 отличаются по типу и значению, если, конечно, null не преобразовать в число
                          // тогда: +null == 0 будет true

/*
===============================================================
Task #8
===============================================================
*/
console.log('TASK #8');

let value = prompt('Enter a number'),
    exp = prompt('Enter a number');

function power(val, pow) {
   if (pow === 1) {
      return val
   } else {
      return val * power(val, pow - 1);
   }
}

console.log(`${value}^${exp} = ${power(value, exp)}`);