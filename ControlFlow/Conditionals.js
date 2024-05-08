// if
if (true) {
  // if condition is true only then enter the scope
}
// Example:
let isLoggedIn1 = true
if (isLoggedIn1) {
  console.log('User Logged in!', '200OK')
}

// if-else
if (true) {
  // if condition is true only then enter the scope
} else {
  // if condition is false only then enter the scope
}
// Example:
let isLoggedIn2 = false
if (isLoggedIn2) {
  console.log('User Logged in!', '200OK')
} else {
  console.log('User Not Logged in!', '401Unauthorized')
}

// if-else-if
if (true) {
  // if condition is true only then enter the scope
} else if (true) {
  // if else if condition is true only then enter the scope
} else {
  // if all condition is fails only then enter the scope
}
// Example:
const mana = 10
if (mana > 1000) {
  let rank = 'S'
  console.log(`Since your mana is ${mana}, thus you rank ${rank} as hunter!`)
} else if (mana > 500) {
  rank = 'A' // since if-else is considered as one scope block no need to re-declare it
  console.log(`Since your mana is ${mana}, thus you rank ${rank} as hunter!`)
} else if (mana > 300) {
  rank = 'B'
  console.log(`Since your mana is ${mana}, thus you rank ${rank} as hunter!`)
} else if (mana > 100) {
  rank = 'C'
  console.log(`Since your mana is ${mana}, thus you rank ${rank} as hunter!`)
} else {
  console.log(`Since your mana is ${mana}, thus you are not a hunter! SORRY!`)
}
// console.log(`I am a wild card out of scope, I rank ${rank} as hunter!`) // Throws ReferenceError since `rank` is not defined outside the if-else scope

// Truthy
// true, numbers, BigInt number, strings, other data types, '', [], {}, function(){}
let usr = 'Geet'
if (usr) {
  console.log(`Hello, ${usr} 😄`)
}
// Falsy
// false, 0, -0, BigInt 0n, null, undefined, NaN
else if (!usr) {
  console.log('No Usr 🙃')
}
if (!!usr) {
  // `!` stack just like negatives in math
  console.log(`Hello Again, ${usr}`)
}

let arr = []
if (arr.length) {
  console.log('Array is not empty')
} else if (arr.length) {
  console.log('Array is empty')
}

const obj = { 1: 'one' }
// if (obj) {
if (Object.keys(obj).length) {
  console.log(Object.keys(obj))
  console.log(obj)
} else if (obj) {
  console.log('Object is empty')
}

// Nullish Coalescing Operator (??): null undefined
let val1
val1 = null ?? 10
console.log(val1)
val1 = null
let val2
val2 = val2 ?? val1 ?? 20 // it sees if value is null or undefined and if it is then returns the next value
console.log(val2)

// Ternary Operator
// condition ? if true : if false
let condition = true
console.log(condition ? 'It is True 😄' : 'It is False 🙁')
