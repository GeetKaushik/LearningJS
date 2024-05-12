// For Loop
let arr1 = []
for (let i = 0; i < 10; i++) {
  arr1 += i
}
console.log(arr1)

let n = 10
let d = 8
let arr2 = []
for (let i = 0; i < n; i++) {
  arr2 += i
  if (i == d) {
    let darr = []
    for (let i = 0; i <= d; i++) {
      darr += '*'
    }
    console.log(darr)
    continue
  }
  console.log(arr2)
}
// Table of Numbers
for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
  console.log('\n')
}
