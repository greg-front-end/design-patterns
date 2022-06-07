// The pattern are using for make a connect to object which has different types 
class MySum {
  constructor(initialValue = 42) {
    this.sum = initialValue
  }

  add(value) {
    this.sum += value
    // now add the pattern and return object
    return this
  }
} 

const sum1 = new MySum()
sum1.add(8) // undefined - without pattern chain_of_responsibility
// here we already can call the add method many times from chain
const sum2 = new MySum()
console.log(sum2.add(8).add(10).add(20).sum); // 80