console.log(`'Greater than comparison',{2 > 1} : ${2 > 1}`) // true
console.log(`'Less than comparison', 2 < 1 : ${2 < 1}`) // false
console.log(`'Greater than equalto comparison', 2 >= 1 : ${2 >= 1}`) // true
console.log(`'Less than equalto comparison', 2 <= 1 : ${2 <= 1}`) // false
console.log(`'Not equalto comparison', 2 != 1 : ${2 != 1}`) // true
console.log(`'Equalto comparison', 2 == 1 : ${2 == 1}`) // false
console.log(`'Equalto comparison with datatype check', 2 === 1 : ${2 === 1}`) // false
console.log(
  `'Equalto comparison with datatype check', 2 === '2' : ${2 === '2'}`
) // false
console.log(
  `'Not equalto comparison with datatype check', 2 !== '1' : ${2 !== '1'}`
) // true

console.log('2' >= 1) // string is typecasted to number here, thus true
console.log('2' >= '3') // string is typecasted to number here, thus false

console.log('-----------------------');

console.log(null > 0) // false
console.log(null == 0) // false
console.log(null >= 0) // true
/* 
  ?REASON: 
  The reason is that an equality check == and comparisons >＜>=
  <= work differently.Comparisons convert null to a number, treating it as 0.
  That's why (3) null >= 0 is true and (1) null > 0 is false
*/

console.log('-----------------------');
console.log(undefined > 0) // false
console.log(undefined == 0) // false
console.log(undefined >= 0) // false
