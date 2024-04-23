// Primitive
// 7 types : String, Number, BigInt, Boolean, null, undefined, Symbol

let str = 'abc' // String
let num1 = 100 // Number
let num2 = 100.4 // Number
let bignum = 100n // BigInt
let bool = true // Boolean
let nul = null // null, typeof object
let undef1 = undefined // undefined
let undef2 // undefined
let sym1 = Symbol('123') // Symbol
let sym2 = Symbol('123') // Symbol

// console.log(sym1 == sym2) // false, cause symbols are unique

// Reference (Non primitive)
// Array, Objects, Functions

let arr1 = [1, 2, 3] // Array, typeof -> object

let obj1 = { name: 'geet' } // Object, typeof -> object

let func1 = function () {
  console.log('hello')
} // Function, typeof -> function //objectfunction

console.table([
  ['String', 'Number', 'BigInt', 'Boolean', 'Null', 'Undefined', 'Symbol', 'Array', 'Object', 'Function'],
  [str, num1, bignum, bool, nul, undef1, sym1, arr1, obj1, func1],
  [typeof str,typeof num1,typeof bignum,typeof bool,typeof nul,typeof undef1,typeof sym1, typeof arr1, typeof obj1, typeof func1],
])
