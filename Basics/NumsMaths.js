//++++++++++++++`Numbers`+++++++++++++++++++++++++
//! NOTE: For more info - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number`

const num1 = 100
console.log(num1)
console.log(typeof num1)
const num2 = new Number(200) // Explicitly defining a number
console.log(num2)
console.log(typeof num2)
console.log(num2.toString())
console.log(num2.toFixed(2))

console.log(parseFloat('100').toFixed(2))

let num3 = 148.239
console.log(num3.toPrecision(5))

let million = 100000000
console.log(`I will have a Rs.${million.toLocaleString('en-IN')} in future`)

//++++++++++++++++`Maths`++++++++++++++++
//! NOTE: For more info - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math`
console.log(Math)
console.log(Math.abs(-10))
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(1, 2, 3, 5, 0, 3))
console.log(Math.max(1, 2, 3, 5, 0, 3))
console.log((Math.random() * 10).toFixed(0))
console.log(Math.floor(Math.random() * 10) + 1) //better and optimized way

const min = 10
const max = 60

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // Formula to calculate random number between specific min and max
