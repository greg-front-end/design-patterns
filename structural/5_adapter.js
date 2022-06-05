// we use the pattern for integrate old interface to the new interface 
// Old interface
class OldCalc {
  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return term1 + term2
      case 'sub':
        return term1 - term2
      default:
        return NaN;
    }
  }
}
// New interface 
class NewCalc {
  add(term1, term2) {
    return term1 + term2
  }
  sub(term1, term2) {
    return term1 - term2
  }
}
// Using adapter pattern for include new interface into old interface
class CaclAdapter {
  constructor() {
    this.calc = new NewCalc()
  }

  operations(term1, term2, operation) {
    switch (operation) {
      case 'add':
        return this.calc.add(term1, term2)
      case 'sub':
        return this.calc.sub(term1, term2)
      default:
        return NaN;
    }
  }
}
// Old method
const oldCalc = new OldCalc()
console.log(oldCalc.operations(10, 5, 'add')); // 15
// New method
const newCalc = new NewCalc()
console.log(newCalc.add(10, 10)); // 20
// Mix
const adapterCalc = new CaclAdapter();
console.log(adapterCalc.operations(5, 24, 'add')); // 29