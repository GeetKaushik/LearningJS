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
console.log('arr5', arr5)
console.log('arr5 slice', arr5.slice(1, 3)) // does not manipulate og array
console.log('arr5 splice', arr5.splice(1, 3)) // manipulate og array
console.log('arr5', arr5)
