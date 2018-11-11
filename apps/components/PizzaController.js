import PizzaService from "./PizzaService.js"

//Private

/*

let addpepperoni = document.getElementById("pepperoniCheck");
let addolive = document.getElementById("oliveCheck");
let addpineapples = document.getElementById("pineappleCheck");
let reset = document.getElementById("submit");

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
*/

//Public

export default class PizzaController {
  constructor() {
    let addpepperoni = document.getElementById("pepperoniCheck");
    addpepperoni.addEventListener("change", function addPepp() {
      console.log("whadup from controller");
    })
  }
}