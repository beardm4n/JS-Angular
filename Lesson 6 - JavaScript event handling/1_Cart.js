'use strict';

let products =  [
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

let $container = document.querySelector('.container'),
    $cart = document.querySelector('.cart');

let arrItems = [],
    totalPrice = 0;

let getDrawProduct = arr => {
   arr.forEach((item,index)=> {
      let $name = document.createElement('div'),
          $price = document.createElement('div'),
          $button = document.createElement('button');

      $name.textContent = item.product;
      $price.textContent = item.price;
      $button.textContent = 'Add to cart';

      $button.setAttribute('id', index);

      $container.appendChild($name);
      $container.appendChild($price);
      $container.appendChild($button);

      arrItems.push(item);
   })

};

getDrawProduct(products);

$container.addEventListener('click', (event) => {

   arrItems.forEach((item, index) => {
      if (+event.target.id === index) {

         let $name = document.createElement('div'),
             $totalPrice = document.createElement('div');

         totalPrice += +item.price;

         $name.textContent = item.product;
         $totalPrice.textContent = totalPrice;

         $cart.textContent = '';

         $cart.appendChild($name);
         $cart.appendChild($totalPrice);

      }
   })

});
