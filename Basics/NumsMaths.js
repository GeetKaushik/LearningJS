//++++++++++++++`Numbers`+++++++++++++++++++++++++
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
console.log(Math)
console.log(Math.abs(-10))
console.log(Math.round(4.5))
console.log(Math.ceil(4.5))
console.log(Math.floor(4.5))
console.log(Math.min(1, 2, 3, 5, 0, 3))
console.log(Math.max(1, 2, 3, 5, 0, 3))
console.log((Math.random()*10).toFixed(0));
