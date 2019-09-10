let columns = 8,
    rows = 8,
    $container = document.createElement('div'),
    letters = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    arrLetters = letters.split('');
console.log(arrLetters);

$container.classList.add('container');

function getChessboard() {
   for (let i = 0; i < rows + 2; i++) {
      let row = document.createElement('div');
      row.classList.add('col');

      for (let j = 0; j < columns + 2; j++) {
         let col = document.createElement('div');

         col.classList.add('row');

         // закрашиваем клетки
         if (i % 2 === j % 2) {
            col.classList.add('white');
         } else {
            col.classList.add('black');
         }

         // нумеруем столбцы цифрами
         if (i === i && j === 0 || i === i && j === columns + 1) {
            col.classList.remove('black');
            col.classList.add('white');
            col.textContent = i;
         }

         //нумеруем строки буквами
         if (i === 0 && j === j || i === rows + 1 && j === j) {
            col.classList.remove('black');
            col.classList.add('white');
            col.textContent = arrLetters[j];
         }

         // освобождаем углы поля
         if (i === 0 && j === 0 || i === 0 && j === columns + 1 || i === rows + 1 && j === 0 || i === rows + 1 && j === columns + 1) {
            col.textContent = '';
         }

         row.appendChild(col);
      }

      $container.appendChild(row);
   }

   document.body.appendChild($container);
}

window.onload = getChessboard;