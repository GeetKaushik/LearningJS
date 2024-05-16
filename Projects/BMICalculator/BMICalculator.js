const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)
  const results = document.querySelector('#results')

  console.log(height)
  console.log(weight)

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid Height. ${height}`
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid Weight. ${weight}`
  } else {
    const bmi = (weight / (height * height)) * 10000
    results.innerHTML = `<span>Your BMI is ${bmi.toFixed(2)}</span>`
  }
})
