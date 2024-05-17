let count = 0
const values = document.querySelector('.values')
let stopwatch
document.querySelector('#start').addEventListener('click', () => {
  if (!stopwatch) {
    stopwatch = setInterval(() => {
      values.innerHTML = `${count++}`
    }, 1000)
  }
})
document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(stopwatch)
  stopwatch = null
})
