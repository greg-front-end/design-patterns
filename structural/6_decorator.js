// we use this patter for add new methods in the had classes
class Server {
  constructor(ip, port) {
    this._ip = ip;
    this._port = port;
  }

  get url() {
    return `https://${this._ip}:${this._port}`
  }
}

// decorators
function aws(server) {
  server.isAws = true;
  server.awsInfo = function () {
    return server.url
  }
  return server
}

function azure(server) {
  server.isAzure = true;
  server._port += 500;
  return server;
}

// now this server without isAws and awsInfo properties
// const s1 = new Server('12.47.82.55', '8080')

// for add them, should call the class with decorator aws
const s1 = aws(new Server('12.47.82.55', 8080))

// second example with decorator azure
const s2 = azure(new Server('98.97.66.12', 1000))

console.log(s2.url); // '98.97.66.12:1500
console.log(s2.awsInfo); // undefined