// The pattern are using for check values and to avoid don't need request on server
function networkFetch(url) {
  return `${url} - answers from server`
}

// exemple the user make request on server for get some data
// and if the data already return the server, doesn't need again make request, so we block it
const cache = new Set()
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArg, args) {
    const url = args[0]

    if (cache.has(url)) {
      return `${url} - answers from cache`
    } else {
      cache.add(url)
      return Reflect.apply(target, thisArg, args)
    }
  }
})

console.log(proxiedFetch('angular.io')) // angular.io - answers from server
console.log(proxiedFetch('react.io')) // react.io - answers from server
console.log(proxiedFetch('angular.io')) // angular.io - answers from cache