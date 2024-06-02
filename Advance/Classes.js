class User1 {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
  greetings() {
    console.log(`Hello ${this.name}, You are ${this.age}`)
  }
  getUsr() {
    console.log(this)
  }

  static createID() {
    console.log(`Your ID is ${Math.random() * 1000}`)
  }
}

class Admin extends User1 {
  constructor(name, age, isAdmin) {
    super(name, age)
    this.isAdmin = isAdmin
  }
  whoAmI(name, age, isAdmin) {
    if (this.isAdmin) {
      console.log(
        `Hello ${this.name}, You are ${this.age} and you are an admin`
      )
    } else {
      console.log(
        `Hello ${this.name}, You are ${this.age} and you are not an admin`
      )
    }
  }
}

const Usr1 = new User1('Geet', 21)
// Usr1.greetings()
// Usr1.getUsr()

// Behind the scene
function User2(name, age) {
  this.name = name
  this.age = age
}
User2.prototype.greetings = function () {
  console.log(`Hello ${this.name}, You are ${this.age}`)
}
User2.prototype.getUsr = function () {
  console.log(this)
}

const Usr2 = new User2('Love', 23)
// Usr2.greetings()
// Usr2.getUsr()

const Usr3 = new Admin('Geetu', 21, true)
// Usr3.whoAmI()

// console.log(Usr1 instanceof User1)
// console.log(Usr2 instanceof User1)
// console.log(Usr3 instanceof User1)
// console.log(Usr3 instanceof Admin)

console.log(Object.getOwnPropertyDescriptor(Math, 'PI'))
console.log(Object.getOwnPropertyDescriptor(Usr3, 'name'))
console.log(Usr3.name)
Object.defineProperty(Usr3, 'name', {
  value: 'Geetanshu',
  writable: false,
  enumerable: false,
  configurable: false,
})
console.log(Object.getOwnPropertyDescriptor(Usr3, 'name'))
console.log(Usr3.name)
Usr3.name = 'Geet'
console.log(Usr3.name)

// Object.defineProperty(Math, 'PI', {
//   writable: true,
//   enumerable: true,
//   configurable: true,
// })

// console.log(Math.PI)
