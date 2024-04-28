/***************** Arrays ****************/
//! NOTE: For more info - `https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array`

const func1 = () => {}
const arr1 = [3, 1, 2, 3, 4]
const arr2 = [0, 1, 'a', true, {}, func1] // In JS array can have different datatype elements
const arr3 = new Array(1, 2, 3, 4) // Another way of declaring array

console.log(typeof arr1, typeof arr2, typeof arr3) // typeof array is an object
console.log(arr1[0]) // access the elements (zero-indexing) of the array

// Array mehtods
console.log(arr1)
arr1.push(6) // Adding element to last of the array
console.log(arr1)
arr1.pop() // Removing last element from the array
console.log(arr1)
arr1.unshift(7) // Adding element to the beginning (Not Recommended)
console.log(arr1)
arr1.shift() // Removing element from the beginning (Not Recommended)
console.log(arr1)

console.log(arr1.includes(10))
console.log(arr1.indexOf(10))

const arr4 = arr1.join()

console.log(arr1)
console.log(arr4)

//slice & splice

const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log('arr5', arr5)
// console.log('arr5 slice', arr5.slice(1, 3)) // does not manipulate og array
// console.log('arr5 splice', arr5.splice(1, 3)) // manipulate og array
// console.log('arr5', arr5)
const arr6 = [11, 12, 13, 14, 15]

console.log(arr5.push(arr6)) // It adds the element in the array and returns it last index
console.log(arr5) // arr6 is added as last element

const arr7 = ['a', 'b', 'c']
const arr8 = ['d', 'e', 'f']

console.log(arr7.concat(arr8)) // It concats the both arrays and returns a new array without modifying existing one
console.log(arr7)

const arr9 = [...arr7, ...arr8] // spread operator (`...`) spreads all elements in the array or obeject into individual elements (better way then concat)
console.log(arr9)

const arr10 = [1, 2, 3, [4, 5, 6], 7, 8, [9, [10, 11, 12]]]

console.log(arr10)
console.log(arr10.flat(1)) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(arr10.flat(2)) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
console.log(arr10.flat(Infinity)) // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.

console.log(Array.isArray('Geet'))
console.log(Array.from('Geet')) // Creates an array from element (String, objects)

let n1 = 1
let n2 = 2
let n3 = 3

console.log(Array.of(n1, n2, n3))
