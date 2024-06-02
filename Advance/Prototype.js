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

myArr.Super(myArr)
myObj.Super('a')
myName.Super(myName)
