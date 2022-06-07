// This pattern to use for send data from different objects
class Car {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}

class CarFactory {
  constructor() {
    this.cars = []
  }
  // Here we assing flyweight pattern
  create(model, price) {
    // here we take an object if it has
    const canditate = this.getCar(model)

    if (canditate) {
      return canditate
    }

    // if no we create new object model
    const newCar = new Car(model, price)
    this.cars.push(newCar)
    return newCar
  }

  getCar(model) {
    return this.cars.find(car => car.model === model)
  }
}

const factory = new CarFactory()

const bmwX6 = factory.create('BMW', 20000)
const audiQ7 = factory.create('Audi', 30000)

// Here we try create new object, but it will be take from cashe
const bmwX3 = factory.create('BMW', 8000)

console.log(bmwX3); // { model: 'BMW', price: 20000 }
console.log(bmwX3 === bmwX6) // true
