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

function userLogout(usrname = 'User') { // Default value
  // if (usrname === undefined) { 
  if (!usrname) {
    return `No user logged in 😾`
  }
  return `${usrname} Logged out`
}
console.log(userLogout());
console.log(userLogout('Geet'));
