console.log('Main Thread Running...........')
console.log('Fetching...1')
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task completed successfully ✅')
    resolve()
  }, 1000)
})
promise1.then(() => {
  console.log('Promise1 Consumed')
})

console.log('Fetching...2')
new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 2 completed successfully ✅')
    resolve()
  }, 2000)
}).then(() => {
  console.log('Promise 2 Consumed')
})

console.log('Fetching...3')
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async task 3 completed successfully ✅')
    resolve({ usrname: 'Geet', email: 'geet@example.com' })
  }, 3000)
})
promise3.then((data) => {
  console.log(data)
})

console.log('Fetching...4')
const promiseErr = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false
    if (error) {
      reject('Something went wrong 404 ERROR ⚠️')
    } else {
      resolve({ usrname: 'Geetu', msg: 'Success 200 OK ✅' })
    }
  }, 4000)
})
promiseErr
  .then((data) => {
    console.log(data)
    return data.msg
  })
  .then((msg) => {
    console.log(msg)
  })
  .catch((err) => {
    console.log(err)
  })
  .finally(() => console.log('[ Exit successfully ]'))

console.log('Fetching...5')
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true
    if (error) {
      reject('Something went wrong 404 ERROR ⚠️')
    } else {
      resolve('Async task 5 completed successfully ✅')
    }
  }, 5000)
})
const consumePromise5 = (async () => {
  try {
    const res = await promise5
    console.log(res)
  } catch (err) {
    console.log(err)
  }
})() // Made it IIFE to sanitise from global variables
// const consumePromise5 = async () => {
//   try {
//     const res = await promise5
//     console.log(res)
//   } catch (err) {
//     console.log(err)
//   }
// }
// consumePromise5()

console.log('Fetching...6...API')
const URL = 'https://jsonplaceholder.typicode.com/users'
// const URL = 'https://api.github.com/users/GeetKaushik'
// const get = (async () => {
//   try {
//     const res = await fetch(URL)
//     const data = await res.json()
//     console.log(data)
//   } catch (err) {
//     console.log('404 ERROR: '.err)
//   }
// })()
fetch(URL)
  .then((res) => {
    console.log('Converting to JSON Format...')
    return res.json()
  })
  .then((data) => {
    console.log('Converted to JSON Format...')
    console.log(data)
  })
  .catch((err) => {
    console.log('404 ERROR: ', err)
  })
  .finally(() => console.log('[ Exit ]'))
