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

const objD = Object.assign({}, objA, objB) // using Object.assign
console.log(objD)

const objE = { ...objA, ...objB } // using spread operator
console.log(objE)

console.log(Object.keys(objE))
console.log(Object.values(objE))
console.log(Object.entries(objE)) // not used much

console.log(objE.hasOwnProperty('1'))
console.log(objE.hasOwnProperty('0'))

console.log('------------------------------------')

// Destructuring of objects

const newObj1 = {
  id: '123abc',
  usrname: 'Geet',
  age: 21,
  isLoggedIn: false,
}
const newObj2 = {
  id: '456edf',
  usrname: 'Sanu',
  age: 23,
  isLoggedIn: true,
}

const { id, usrname, age, isLoggedIn } = newObj1
// const { id, usrname, age, isLoggedIn } = newObj2 // No objects having same props can be destructured together
const {
  id: id2,
  usrname: usrname2,
  age: age2,
  isLoggedIn: isLoggedIn2,
} = newObj2 // using alias to remove conflicts in naming when destructuring objects

console.log(id)
console.log(id2)

// A little bit about API(Application Programming Interface)
// Earlier values were fetched in `.xml(Extensible Markup Language)` format which was complicated, thus replaced currently used `.json(JavaScript Object Notation)` format

{
  const newObj3 = {
    id: '123abc',
    usrname: 'Geet',
    age: 21,
    isLoggedIn: false,
  }
  const newObj4 = {
    id: '456edf',
    usrname: 'Sanu',
    age: 23,
    isLoggedIn: true,
  }

  const { id, usrname, age, isLoggedIn } = newObj3
  const {
    id: id2,
    usrname: usrname2,
    age: age2,
    isLoggedIn: isLoggedIn2,
  } = newObj4 // using alias to remove conflicts in naming when destructuring objects
}
