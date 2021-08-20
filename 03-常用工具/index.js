// const util = require('util');
// function fn() {
//   return Promise.reject(null);
// }
// const callbackFunction = util.callbackify(fn);

// callbackFunction((err, ret) => {
//   // 当 Promise 被以 `null` 拒绝时，它被包装为 Error 并且原始值存储在 `reason` 中。
//   console.log(err)
//   err && err.hasOwnProperty('reason') && err.reason === null;  // true
// });
// var util = require('util'); 
// function Base() { 
//     this.name = 'base'; 
//     this.base = 1991; 
//     this.sayHello = function() { 
//     console.log('Hello ' + this.name); 
//     }; 
// } 
// Base.prototype.showName = function() { 
//     console.log(this.name);
// }; 
// function Sub() { 
//     this.name = 'sub'; 
// } 
// util.inherits(Sub, Base); 
// var objBase = new Base(); 
// objBase.showName(); 
// objBase.sayHello(); 
// console.log(objBase); 
// var objSub = new Sub(); 
// objSub.showName(); 
// //objSub.sayHello(); 
// console.log(objSub); 
// var util = require('util'); 
// function Person() { 
//     this.name = 'byvoid'; 
//     this.toString = function() { 
//     return this.name; 
//     }; 
// } 
// var obj = new Person(); 
// console.log(util.inspect(obj)); 
// console.log(util.inspect(obj, true)); 
// var util = require('util');
// console.log(util.isArray([]),util.isArray(new Array),util.isArray({}));
var util = require('util');

util.isDate(new Date())
  // true
util.isDate(Date())
  // false (without 'new' returns a String)
util.isDate({})
