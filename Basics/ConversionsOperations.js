//! NOTE: For more information visit `https://tc39.es/ecma262/#sec-abstract-operations`
//******************`Conversions`**************************
console.log('******************`Conversions`**************************')
let number = 'abc'
console.log(typeof number)

let value = Number(number)
console.log(value)
console.log(typeof value)

/*
Number conversions
* '33' => 33
* '33abc' => NaN // here, typeof is NaN
* true/flase => 1/0
*/

console.log('--------------------------------------------------------')

let isSomething = undefined
console.log(typeof isSomething)

let isSomethingBool = Boolean(isSomething)
console.log(isSomethingBool)
console.log(typeof isSomethingBool)
/*
Boolean conversions
* (0, '', null, undefined) => false
* ( 1,'abc','1') => true
*/

console.log('--------------------------------------------------------')

let str = undefined
console.log(typeof str)

let val = String(str)
console.log(val)
console.log(typeof val)

/*
String conversions
* 33 => '33'
* true/flase => 'true'/'false'
* null => 'null'
* undefined => 'undefined'
*/

//******************`Operations`**************************
console.log('******************`Operations`**************************')

let val1 = 3

console.log(val1)
console.log(val1 + val1) // addition
console.log(val1 - val1) // subtraction
console.log(val1 / val1) // division
console.log(val1 * val1) // multiplication
console.log(val1 ** val1) // power
console.log(val1 % val1) // modulo

let str1 = 'Hello '
let str2 = 'World'

console.log(str1 + str2) // concatenate strings
console.log('1' + 2) // concatenate & convert 2 to string
console.log(1 + '2') // concatenate & convert 1 to string
console.log(1 + 2 + '3') // 1 + 2 then concatenate & convert (1 + 2 = 3) to string
console.log('1' + 2 + 3) // concatenate & convert 2 to string and then concatenate & convert 3 to string
console.log(true + 1) // (true = 1) therefore add 1 + 1 = 2
console.log(false + 1) // (false = 0) therefore add 0 + 1 = 1
console.log(true + '1') // concatenate & convert `false/true` to string
console.log(true + true) // add true + true = 2 (i.e, 1 + 1 = 2) since, true = 1
console.log(true + false) // add true + false = 1 (i.e, 1 + 0 = 1) since, false = 0, true = 1
console.log(false + false) // add false + false = 0 (i.e, 0 + 0 = 1) since, false = 0
console.log(false * false) // add false * false = 0 (i.e, 0 * 0 = 1) since, false = 0
console.log(false / false) // add false / false = 0 (i.e, 0 / 0 = NaN) since, false = 0
console.log(+true) // Output: 1
console.log(+false) // Output: 0
console.log(+'') // Output: 0
// console.log(''+) // throws SyntaxError
// console.log(true+) // throws SyntaxError post/pre increment and decrement not allowed for boolean values

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

console.table([num1, num2, num3])

//? TOREAD: For increment operations  `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment`
let x = 3
const y = x++
console.log(`x:${x}, y:${y}`)
// Expected output: "x:4, y:3"
let a = 3
const b = ++a
console.log(`a:${a}, b:${b}`)
// Expected output: "a:4, b:4"

let x2 = 3n //n represents bigint data type
const y2 = x2++
console.log(typeof x2)
console.log(y2)
// x2 is 4n; y2 is 3n
