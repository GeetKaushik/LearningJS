/*****************`This and Arrow Function`**********************/
const usr = {
  usrname: 'Geet',
  usrstatus: 'Happy 😄',
  greeting: function () {
    console.log(`Hello ${this.usrname}`)
    console.log(`You are ${this.usrstatus}`)
  },
  getUsr: function () {
    console.log(this)
  },
}

// usr.greeting()
// usr.getUsr()
// usr.usrname = 'Sam'
// usr.usrstatus = 'OK 👍'
// usr.greeting()
// usr.getUsr()

// function func1() {
//   let usr = 'Geet'
//   console.log(this.usr) // Outputs undefined
// }
// func1()
// function func1() {
//   console.log(this)
// }
// func1()

// Arrow function
const arrowFunc1 = () => {
  console.log(this) // Unlike normal function Outputs Empty Object
}
arrowFunc1()

const Subtract = (num1, num2) => {
  return num1 - num2
}
console.log(Subtract(2, 1))
const Add = (num1, num2) => num1 + num2 // Implicit return
console.log(Add(1, 2))

const usr2 = () => { usrname: 'Geet' } // Since Object can't be return like this
console.log(usr2()) // Output is undefined

const usr3 = () => ({ usrname: 'Geet' })
console.log(usr3())
