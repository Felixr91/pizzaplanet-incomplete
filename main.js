import PizzaController from './apps/components/PizzaController.js'

class App {
	constructor() {
		this.controllers = {
			pizzaController: new PizzaController()
		}
	}
}

window.app = new App()