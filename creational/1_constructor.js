// Before
/*
function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function () {
  return `https://${this.ip}:80 `
}
*/

// now es6
class Server {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `http://${this.ip}:80`
  }
}
const aws = new Server('Aws Italy', '61.11.41.22')
console.log(aws.getUrl());