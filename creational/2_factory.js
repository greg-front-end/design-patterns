// as we see all this classes are the same, so we can create one class with specific values
class SimpleMemberShip {
  constructor(name) {
    this.name = name;
    this.cost = 50;
  }
}

class StandardMemberShip {
  constructor(name) {
    this.name = name;
    this.cost = 200;
  }
}

class PremiumMemberShip {
  constructor(name) {
    this.name = name;
    this.cost = 50;
   }
}
class MemberFactory {
  static list = {
    simle: SimpleMemberShip,
    standard: StandardMemberShip,
    premium: PremiumMemberShip
  }

  create(name, type = 'simple') {
    const MemberShip = MemberFactory.list[type] || MemberFactory.list.simle
    const member = new MemberShip(name);
    // Now that is factory we can add new prop in the member object
    member.type = type;
    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
    }
    return member;
  }
}

const factory = new MemberFactory()

const members = [
  factory.create('Greg', 'simple'),
  factory.create('Tom', 'premium'),
  factory.create('Smith', 'standard'),
  factory.create('Jhon')
]
members.forEach(member => {
  member.define()
})