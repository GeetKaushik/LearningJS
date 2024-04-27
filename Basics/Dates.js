//! NOTE: For more info - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date`

let myDate = new Date()
console.log(myDate)
console.log('*toString(): ' + myDate.toString())
console.log('*toDateString(): ' + myDate.toDateString())
console.log('*toJSON(): ' + myDate.toJSON())
console.log('*toLocaleString() : ' + myDate.toLocaleString())
console.log('*toLocaleDateString() : ' + myDate.toLocaleDateString())
console.log('toISOString(): ' + myDate.toISOString())
console.log('toUTCString() : ' + myDate.toUTCString())
console.log('typeof Date: ' + typeof myDate)

// let myCreatedDate = new Date(2024, 11, 1)
// let myCreatedDate = new Date(2024, 11, 1, 5, 30)
let myCreatedDate = new Date('1-14-2024')
// console.log(myCreatedDate.toLocaleString())

let timeStamp = Date.now()

console.log(timeStamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now() / 1000))

let Date3 = new Date()
console.log(Date3.getMonth() + 1)
console.log(Date3.getDay())
console.log(Date3.getDate())

let Date4 = Date3.toLocaleString('default', {
  dateStyle: 'full'
})
console.log(Date4);

