// The Iterator pattern allows clients to effectively loop over a collection of objects.
class MyIterator {
  constructor(data) {
    this.data = data;
    this.idx = 0;
  }

  [Symbol.iterator]() {
    return {
      next: () => {
        if (this.idx < this.data.length) {
          return {
            value: this.data[this.idx++],
            done: false
          }
        } else {
          this.idx = 0
          return {
            done: true,
            value: void 0
          }
        }
      }
    }
  }
}

function* generator(collection) {
  let idx = 0;
  while (idx < collection.length) {
    yield collection[idx++]
  }
}
// function's genereator
const gen = generator(['This', 'is', 'iterator'])
// class iterator
const iterator = new MyIterator(['This', 'is', 'iterator'])

// we can using object from class iterator
// for (const val of iterator) {
//   console.log('Val: ' + val); // Val: This\n Val: is\n Val: \niterator
// }

// or we can using function of generator in for...of
// for (const val of gen) {
//   console.log('Val: ' + val); // Val: This\n Val: is\n Val: \niterator
// }

// of call three times manualy
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
