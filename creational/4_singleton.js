class DataBase {
  constructor(data) {
    // if the DataBase exist instance return this instance
    if (DataBase.exists) {
      return DataBase.instance
    }
    DataBase.instance = this;
    DataBase.exists = true;
    this.data = data;
  }

  getData() {
    return this.data
  }
}

const mongo = new DataBase('MongoDB');
console.log(mongo.getData()); // MongoDB

const mySql = new DataBase('MySQL');
console.log(mongo.getData()); // MongoDB -> 
// becase we use singleton pattern and the instance always will be return the first instance