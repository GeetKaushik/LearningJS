const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    body.style.backgroundColor = e.target.id
  })
})

const reset = document.querySelector('#reset')
reset.addEventListener('click', (e) => {
  body.style.backgroundColor = '#111'
})
