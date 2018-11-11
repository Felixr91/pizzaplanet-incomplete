import pizza from "../models/pizza.js";
import toppings from "../models/toppings.js";

let regular = new Pizza("regular", 12)

let pepperoni = new Toppings("Pepperoni", 1.50);
let olives = new Toppings("Olives", .50);
let pineapple = new Toppings("Pineapple", .75);


let total = regular.price;

/*
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
*/
//public

export default class PizzaService {
  addpep() {
    console.log(pepperoni)
  }
}