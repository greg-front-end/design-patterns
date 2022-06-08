// The pattern is uisng one to many dependencis(publish-subscriber, dispatcher, listener, observer)
class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer)
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter(el => el !== observer)
  }

  fire(action) {
    this.observers.forEach(observer => {
      observer.update(action)
    })
  }
}

class Observer {
  constructor(state) {
    this.state = state;
    this.initialState = state; 
  }

  update(action) {
    switch (action.type) {
      case 'INCREMENT':
        this.state = ++this.state
        break;
      case 'DICREMENT':
        this.state = --this.state
        break;
      case 'ADD':
        this.state += action.payload
        break;
      default:
        this.state =   this.initialState
    }
  }
}

const stream$ = new Subject()

const obs1 = new Observer(1)
const obs2 = new Observer(2)

stream$.subscribe(obs1)
stream$.subscribe(obs2)

stream$.fire({ type: 'INCREMENT' }) // obs1 = 2 | obs2 = 3
stream$.fire({ type: 'INCREMENT' }) // obs1 = 3 | obs2 = 4
stream$.fire({ type: 'DICREMENT' }) // obs1 = 2 | obs2 = 3
stream$.fire({ type: 'ADD', payload: 10 }) // obs1 = 2 | obs2 = 3

console.log(obs1.state); // obs1 = 2
console.log(obs2.state); // obs2 = 3
