// this patters is common for JavaScript because JavaScript in JavaScript everything is prototype
const car = {
  type: 'Tesla',
  wheels: 4,
  init() {
    console.log(`My type is ${this.type},  I have ${this.wheels} wheels. And my owner is ${this.owner}`);
  }
}

const carWithOwner = Object.create(car, {
  owner: {
    value: 'Greg'
  }
})

console.log(carWithOwner.__proto__ === car);

carWithOwner.init();