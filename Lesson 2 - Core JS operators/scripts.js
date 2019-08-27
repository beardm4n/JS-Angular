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



