if (true) {
  let a = 10 // has scope resolution
  const b = 20 // has scope resolution
  var c = 30 // does not have scope resolution
}

// console.log(a) // throws error!
// console.log(b) // throws error!
console.log(c) // works fine which is a issue for consistent code

// Rule: Global scope values can go inside block scope but vice versa is not allowed for good scope resolution

let a = 100 // `let` & `const` follow scope resolution rule
var b = 100 // `var` does not follow scope resolution rule
console.log('Before Outer let a: ', a) // 100
console.log('Before Outer var b: ', b) // 200
if (true) {
  let a = 200
  console.log('Inner let a: ', a) // 200
  var b = 200
  console.log('Inner var b', b) // 200
}
console.log('Outer let a: ', a) // 100
console.log('Outer var b: ', b) // 200

// Nested scopes

function one() {
  const usrname = 'Geetu'
  function two() {
    const website = 'Google'
    console.log(usrname)
  }
  // console.log(website) //throws an error
  two()
}
one()

// Scopes in conditionals
if (true) {
  let usrname = 'Geet'
  if (true) {
    let website = 'Youtube'
    console.log(usrname, website)
  }
  // console.log(website) // Error: Not Defined: variable out of scope
}
// console.log(usrname) // Error: Not Defined: variable out of scope

//++++++++++++++++++++++++++++++++++++++

console.log(add1(3)) // function hoisting is allowed here
function add1(num) { // Function
  return num + 1
}


// console.log(add2(3)) // Throw ReferenceError
const add2 = function (num) { // Expression or Function
  return num + 2
}
add2(6)
