const clock = document.getElementById('clock')
const banner = document.getElementById('banner')

setInterval(() => {
  let time = new Date().toLocaleTimeString()
  let date = new Date().toDateString()
  banner.innerHTML = date
  if (time > 12) {
    clock.innerHTML = `<h1>${time - 12}</h1>PM`
  } else {
    clock.innerHTML = `<h1>${time}</h1>AM`
  }
}, 1000)
