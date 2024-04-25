//! NOTE: For more info -> `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String`

let name1 = 'Geet'
let age = 21

console.log('My name is ' + name1 + ' and my age is ' + age) ////Not a good approach
console.log(`My name is ${name1} and my age is ${age}`) // Better

console.log(name1)
console.log(typeof name1)

let name2 = new String('Geet') // Creates a object String
console.log(name2)
console.log(name2.length)
console.log(name2.toUpperCase())
console.log(name2.charAt(2))
console.log(name2.indexOf('t'))
console.log(typeof name2)

console.log(name2.slice(1, 3))
console.log(name2.slice(0, -4))
console.log(name2.split(''))

const name3 = '    Geet      '
console.log(name3)
console.log(name3.trim())

let url = 'http://google.com/geet%20kaushik%20age'

console.log(url.replace('%20','-'));
console.log(url.includes('*'));