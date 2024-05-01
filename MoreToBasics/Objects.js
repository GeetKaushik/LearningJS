/*****************`Objects`********************/
//! NOTE: For more info -> `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object`
//! NOTE: For more info -> `https://www.w3schools.com/js/js_object_definition.asp`

//? Objects created from litrals are not singletons whereas objects created from constructors are singletons

//Object Litrals method
const sym1 = Symbol('key1 ')
// const age = 11
const obj1 = {
  [sym1]: 'mykey1', // correct way to create a symbol as key
  name: 'Geet',
  'full name': 'Geet Kaushik',
  age: 21, // way to access value out of object (?)
  isHappy: true,
  address: {
    city: 'Mumbai',
    state: 'Maharashtra',
    country: 'India',
  },
  hobbies: ['Reading', 'Coding', 'Gaming'],
  getHobbies: function () {
    return this.hobbies
  },
  setHobbies: function (hobbies) {
    this.hobbies = hobbies
  },
}

//Different ways to access objects elements
console.log(obj1.name) // this is mostly used
console.log(obj1['age'])
console.log(obj1['name'])
console.log(obj1['full name']) //this way is more versatile than `.` method

console.log(obj1[sym1]) // correct way to access symbols
// Object.freeze(obj1) // freezes objects from further changes
console.log(obj1)
//changes here not applied
obj1.name = 'Geetu'
console.log(obj1.name)
obj1['age'] = 18
console.log(obj1['age'])

obj1.greetings = function () {
  console.log(`Hello World, ${this.name}`)
}
console.log(obj1.greetings)
console.log(obj1.greetings())

console.log(`My City: ${obj1.address.city}`)
console.log(`My City: ${obj1?.address.city}`) //Optional chaining

console.log('----------------------------')
// Constructor method
// Object.create
// const obj2 = new Object() // Singleton object
// console.log(obj2)
// console.log(typeof obj2)
const obj3 = {} // Non-singleton object
console.log(obj3)
obj3.id = '123abc'
obj3.name = 'Mukul'
obj3.age = 21
obj3.isLoggedIn = false
console.log(obj3)

const objA = { 1: 'a', 2: 'b' }
const objB = { 3: 'c', 4: 'd' }

const objC = { objA, objB } // Objects in object
console.log(objC)

const objD = Object.assign({}, objA, objB)
console.log(objD)

const objE = { ...objA, ...objB }
console.log(objE)
