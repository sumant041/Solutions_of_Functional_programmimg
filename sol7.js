function reduce(arr, func, initv) {
  if(arr.length)
  return reduce(arr.slice(1),func,func(initv,arr[0]))
  else return initv
}
module.exports = reduce

reduce = require('./sol7.js')
console.log(reduce([1,2,3,4],function(prev, curr){
  return prev + curr
},0));
