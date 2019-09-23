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

function Product(category) {
   this.category = category;
}

Product.prototype.getTotalSum = function () {
   const totalSum = this.price * this.quantity;
   console.log(`All ${this.name} cost ${totalSum}`)
};

function Telephones(name, model, price, quantity) {
   Product.call(this, 'Telephones');
   this.name = name;
   this.model = model;
   this.price = price;
   this.quantity = quantity;
}

function Laptops(name, model, price, quantity) {
   Product.call(this, 'Laptops');
   this.name = name;
   this.model = model;
   this.price = price;
   this.quantity = quantity;
}

Telephones.prototype = Object.create(Product.prototype);
Laptops.prototype = Object.create(Product.prototype);

const samsung = new Telephones('Samsung', 'S10', 100000, 15);
const iPhone = new Telephones('iPhone', '11 Pro', 150000, 23);
const acer = new Laptops('Acer', 'Swift 7', 135000, 10);

samsung.getTotalSum();
iPhone.getTotalSum();
acer.getTotalSum();

console.log({samsung, iPhone, acer});