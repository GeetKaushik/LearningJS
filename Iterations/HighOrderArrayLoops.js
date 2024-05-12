// for of
const arr1 = [1, 2, 3, 4, 5]

// for (const i of arr1) {
//   console.log(i)
// }
// for (const i in arr1) {
//   console.log(i, arr1[i]);
// }

// Maps
const map = new Map()
map.set('a', 1)
map.set('b', 2)
map.set('c', 3)
map.set('d', 4)

// console.log(map)

// for (const [key,val] of map) {
//   console.log(key,val);
// }
for (const [key, val] in map) {
  // for in doesnt work in for in
  console.log(key, val)
}

// const obj1 = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4,
// }

// for (const [i,j] of obj1) {
//   console.log(i); //throws error
// }

// for in
const obj1 = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
}

// for (const i in obj1) {
//   console.log(i, obj1[i]);
// }

// for each
// const arr2 = ['a', 'b', 'c', 'd']
// arr2.forEach((element, index, arr) => {
//   console.log(element, index, arr)
// })

const arr3 = [
  {
    language: 'Java',
    extension: 'java',
  },
  {
    language: 'JavaScript',
    extension: 'js',
  },
  {
    language: 'Ruby',
    extension: 'rb',
  },
  {
    language: 'Python',
    extension: 'py',
  },
]
// arr3.forEach((item) => {
//   console.log(item.language, ':', item.extension) // doesn't return anything
// })

// filter
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const arr5 = arr4.filter((item) => {
//   return item % 2 == 0 // can return unlike foreach loop above
// })
const arr5 = []
arr4.forEach((item) => {
  // if (item % 2 == 0) {
  //   arr5.push(item)
  // }
})
// console.log(arr5)

const books = [
  { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
  { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
  { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
  { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
  { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
  { title: 'Book six', genre: 'Fiction', publish: 1987, edition: 2010 },
  { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
  { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2010 },
  { title: 'Book Nine', genre: 'Non-Fiction', publish: 1999, edition: 2012 },
  { title: 'Book Ten', genre: 'Fiction', publish: 1999, edition: 2014 },
]

// const usrBooks = books.filter((book) => book.genre === 'Non-Fiction')
// const usrBooks = books.filter(
//   (book) => book.edition >= 2000 && book.genre === 'Fiction'
// )
// console.log(usrBooks)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Map
// const newNumbers = numbers.map((num) => num + 10)
const newNumbers = numbers
  .map((num) => num * 10) // return while performing operations
  .filter((num) => num > 50) // returns while checking condition
  .map((num) => num + 1)
// console.log(newNumbers)

// Reduce
const arr6 = [1, 2, 3]
const sum = arr6.reduce((acc, num) => {
  return acc + num
}, 0)
// const sum = arr6.reduce(function (acc, num) {
//   return acc + num
// }, 0)
console.log(sum)

const cart = [
  {
    item: 'toothpaste',
    price: 100,
    quantity: 1,
  },
  {
    item: 'toothbrush',
    price: 200,
    quantity: 1,
  },
  {
    item: 'soap',
    price: 50,
    quantity: 2,
  },
  {
    item: 'T-Shirt',
    price: 1000,
    quantity: 2,
  },
  {
    item: 'Cargo Pants',
    price: 2000,
    quantity: 1,
  },
  {
    item: 'Shoes',
    price: 10000,
    quantity: 1,
  },
]

const totalPrice = cart.reduce((acc, item) => {
  return acc + item.price * item.quantity
}, 0)
console.table(cart)
console.log(`*************[ Bill: Rs.${totalPrice} ]***************`)
