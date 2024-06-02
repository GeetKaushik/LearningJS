let myName = 'Geet'

// console.log(myName.length)
// // console.log(myName.trim().length)
// console.log(myName.trueLength)

const myArr = [1, 2, 3]
const myObj = {
  name: 'Geet',
  age: 20,
}

Object.prototype.Super = (item) => {
  console.log(`I am a super function available everywhere : ${item} was passed`)
}

Array.prototype.SuperArr = (item) => {
  console.log(`I am a super function available in Array : ${item} was passed`)
}

// myArr.Super(myArr)
// myObj.Super('a')
// myName.Super(myName)
// myArr.SuperArr(myArr) // Only presents in Array

// Inheritance

const User = {
  name: 'Geet',
  age: 20,
}

const Admin = {
  isAdmin: true,
}

const UserInfo = {
  __proto__: User,
  isVerified: true,
}

const AdminInfo = {
  isWorking: true,
}

Admin.__proto__ = UserInfo

// console.log(UserInfo.age)

// modern syntax
Object.setPrototypeOf(AdminInfo, Admin)
// console.log(AdminInfo.isAdmin)

// Find true length of string without using trim method

let Str1 = 'Geet      '
let Str2 = 'Kaushik     '

console.log(`Length of ${Str1}: ${Str1.length}`)
console.log(`Length of ${Str2}: ${Str2.length}`)
String.prototype.trueLength = function () {
  console.log(`True Length of ${this}:  ${this.trim().length}`)
}
Str1.trueLength()
Str2.trueLength()
