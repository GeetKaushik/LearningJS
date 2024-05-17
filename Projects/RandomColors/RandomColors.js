// Generate Random Color
const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return `rgb(${r},${g},${b})`
}

console.log(generateRandomColor())

const box = document.getElementById('box')

let changingColors
const startChangingColor = () => {
  if (!changingColors) {
    changingColors = setInterval(changeBGColor, 1000)
  }
  function changeBGColor() {
    document.querySelector('.values').innerText = generateRandomColor()
    box.style.backgroundColor = generateRandomColor()
  }
}

const stopChangingColor = () => {
  clearInterval(changingColors)
  changingColors = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
