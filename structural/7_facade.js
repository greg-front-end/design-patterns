// this pattern to use for create simple/uniqe interface 
// for example jquery -> $('.test') -> we can say it is facade pattern
class Complaints {
  constructor() {
    this.complaints = [];
  }

  reply(complaint) { }
  
  add(complaint) {
    this.complaints.push(complaint)
    return this.reply(complaint)
  }
}

class ProductsComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Product: ${id}: ${customer} (${details})`
  }
}

class ServiceComplaints extends Complaints {
  reply({ id, customer, details }) {
    return `Service: ${id}: ${customer} (${details})`
  }
}

// Now we create facade
class ComplainRegistry {
  register(customer, type, details) {
    const id = Date.now()
    let complaint
    
    if (type === 'service') {
      complaint = new ServiceComplaints()
    } else {
      complaint = new ProductsComplaints()
    }
    return complaint.add({ id, customer, details })
  }
}

const registry = new ComplainRegistry()

console.log(registry.register('Greg', 'service', 'undefined'));
console.log(registry.register('Tom', 'product', 'some error'));