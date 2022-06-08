/*
  It is a behavioural design pattern that allows an object to alter its behaviour based on changes to its internal state. 
  The object returned by a state pattern class seems to change its class. 
  It provides state-specific logic to a limited set of objects in which each object type represents a particular state.
*/

class Light {
  constructor(light) {
    this.light = light
  }
}

class RedLight extends Light {
  constructor() {
    super('red')
  }

  sign() {
    return 'STOP'
  }
}

class YellowLight extends Light {
  constructor() {
    super('yellow')
  }

  sign() {
    return 'READY'
  }
}

class GreenLight extends Light {
  constructor() {
    super('green')
  }

  sign() {
    return 'GO'
  }
}


class TraficLight {
  constructor() {
    this.states = [
      new RedLight(),
      new YellowLight(),
      new GreenLight()
    ];
    this.currentState = this.states[0]
  }

  change() {
    const total = this.states.length
    let idx = this.states.findIndex(light => light === this.currentState)

    if (idx + 1 < total) {
      this.currentState = this.states[idx + 1]
    } else {
      this.currentState = this.states[0]
    }
  }

  sign() {
    return this.currentState.sign()
  }
}

const traffic = new TraficLight();
console.log(traffic.sign()); // STOP

traffic.change()
console.log(traffic.sign()); // READY

traffic.change()
console.log(traffic.sign()); // GO

traffic.change()
console.log(traffic.sign()); // STOP

traffic.change()
console.log(traffic.sign()); // READY

traffic.change()
console.log(traffic.sign()); // GO

