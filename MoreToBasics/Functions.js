/**********************`Basics of Functions`*************************/
//! NOTE: For more info -> `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions`
//! NOTE: For more info -> `https://www.w3schools.com/js/js_functions.asp`

function Hello(name) {
  console.log(`Hello,${name}`)
  console.log('I hope you are doing well with Learning')
}

Hello // Reference of the function
Hello('Geet') // Execution of the function

function Seprater() {
  const n = 50
  let line = ''
  for (let i = 0; i < n; i++) line += '-'
  console.log(line)
}

Seprater()

// Add two number function

function Add(num1, num2) {
  console.log(`${num1} + ${num2} = ${num1 + num2}`)
} // This function is returnning nothing
const res = Add(1, 2) // Same name (line 29) but different scope
console.log('Result:', res) // Thus Undefined here
Add(1, 2)
Add(1, 'a')

function Subtract(num1, num2) {
  let res = num1 - num2 // Same name (line 23) but different scope
  return res
  console.log(res) // Unreachable code after `return`
}
// Subtract(1, 2)
console.log(Subtract(1, 2))

function Multiply(num1, num2) {
  return num1 * num2
}
console.log('Result:', Multiply(2, 2))

Seprater()

function userLogin(usrname) {
  return `Welcome, ${usrname} 😄`
}
console.log(userLogin('Geet'))
console.log(userLogin()) // converted to string
console.log(userLogin(true)) // converted to string
console.log(userLogin(null)) // converted to string
console.log(userLogin(3)) // converted to string

function userLogout(usrname = 'User') {
  // Default value
  // if (usrname === undefined) {
  if (!usrname) {
    return `No user logged in 😾`
  }
  return `${usrname} Logged out`
}
console.log(userLogout())
console.log(userLogout('Geet'))
Seprater()
Seprater()

/**********************`More to Functions`*************************/

function Cart1(items) {
  // Only takes first argument as parameter
  return items
}
function Cart2(...items) {
  // Here, `...` Rest operator is used to take multiple arguments in paramenter dynamically and return an object array
  return items
}

console.log(Cart1('itm1', 'itm2', 'itm3'))
console.log(typeof Cart1('itm1', 'itm2', 'itm3'))
console.log(Cart2('itm1', 'itm2', 'itm3'))
console.log(typeof Cart2('itm1', 'itm2', 'itm3'))

const Obj1 = {
  name: 'Geet',
  age: 21,
}
function handleObj(params) {
  console.log(`Hello ${params.name}, You are ${params.age}`)
}
// handleObj(Obj1)
handleObj({
  name: 'Mehek',
  age: 21,
})

const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 1

function handleArr(params, i) {
  return params[i]
}

console.log(`Value at index:${i} in ${arr1} is ${handleArr(arr1, i)}`)
console.log(`Value at index:${3} is ${handleArr([1,2,3,4,5], 3)}`)
