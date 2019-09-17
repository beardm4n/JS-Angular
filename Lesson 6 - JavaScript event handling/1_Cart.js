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

let $product = document.createElement('div'),
    // $priceProduct = document.createElement('div'),
    $quantity = document.createElement('div');
    // $totalSum = document.createElement('div');

let count = 0;

let getDrawProduct = arr => {
   arr.forEach(item => {
      let $name = document.createElement('div'),
          $price = document.createElement('div'),
          $button = document.createElement('button');

      $name.textContent = item.product;
      $price.textContent = item.price;
      $button.textContent = 'Add to cart';

      $container.appendChild($name);
      $container.appendChild($price);
      $container.appendChild($button);

      $button.addEventListener('click', handleAddProduct);

      function handleAddProduct() {

         $product.textContent = item.product;
         $quantity.textContent = `${count}`;

         count += 1;

         $cart.appendChild($product);
         $cart.appendChild($quantity);
      }
   })


};

getDrawProduct(products);

