// This pattern make connect with other objects
class User {
  constructor(name) {
    this.name = name;
    this.room = null;
  }

  send(message, to) {
    this.room.send(message, this, to)
  }

  receive(message, from) {
    console.log(`${from.name} => ${this.name}: ${message}`);
  }
}

// Here we create mediator 
class ChatRoom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      to.receive(message, from)
    } else {
      Object.keys(this.users).forEach(key => {
        if (this.users[key] !== from) {
          this.users[key].receive(message, from)
        }
      })
    }
  }
}

const tom = new User('Tom')
const smith = new User('Smith')
const jhon = new User('Jhon')

const room = new ChatRoom()

room.register(tom)
room.register(smith)
room.register(jhon)

tom.send('hello', smith)
smith.send('hi', tom)
jhon.send('Hello everyone')