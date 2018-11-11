class Pizza {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

class Toppings {
  constructor(name, price) {
    this.name = name
    this.price = price
  }
}

let regular = new Pizza("regular", 12)

let pepperoni = new Toppings("Pepperoni", 1.50);
let olives = new Toppings("Olives", .50);
let pineapple = new Toppings("Pineapple", .75);

let addpepperoni = document.getElementById("pepperoniCheck");
let addolive = document.getElementById("oliveCheck");
let addpineapples = document.getElementById("pineappleCheck");
let reset = document.getElementById("submit");

let total = regular.price;

let displayTotal = document.getElementById("price");

addpepperoni.addEventListener("change", function () {
  addPepp();
})

addolive.addEventListener("change", function () {
  addolives();
})

addpineapples.addEventListener("change", function () {
  addpineapple();
})
/*
reset.addEventListener("click", function () {
	total = regular.price;
})
*/

let peppclickcount = 0
let oliveclickcount = 0
let pineappleclickcount = 0

function addPepp() {
  peppclickcount += 1
  console.log(peppclickcount)
  if (peppclickcount % 2 === 1) {
    total += pepperoni.price
    displayTotal.innerHTML = total
  } else {
    total -= pepperoni.price
    displayTotal.innerHTML = total
  }
}

function addolives() {
  oliveclickcount += 1
  console.log(oliveclickcount)
  if (oliveclickcount % 2 === 1) {
    total += olives.price
    displayTotal.innerHTML = total
  } else {
    total -= olives.price
    displayTotal.innerHTML = total
  }
}

function addpineapple() {
  pineappleclickcount += 1
  console.log(pineappleclickcount)
  if (pineappleclickcount % 2 === 1) {
    total += pineapple.price
    displayTotal.innerHTML = total
  } else {
    total -= pineapple.price
    displayTotal.innerHTML = total
  }
}
