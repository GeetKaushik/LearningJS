let randomNumber = parseInt(Math.random() * 100 + 1)
console.log(randomNumber)

const userInput = document.querySelector('#guessField')
const submit = document.querySelector('#subt')
const result = document.querySelector('#result')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const startOver = document.querySelector('.resultParas')

const div = document.createElement('div')

let prevGuess = []
let numGuesses = 10
let playGame = true

if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault()
    const guess = parseInt(userInput.value)
    console.log(guess)
    validateGuess(guess)
  })
}

function validateGuess(guess) {
  // Validate the guess input
  if (isNaN(guess)) {
    result.innerHTML = `<h3>Please enter a valid guess: ${userInput.value} is NaN</h3>`
  } else if (guess < 1 || guess > 100) {
    result.innerHTML = `Please enter a valid guess: ${guess} is out of range [1 - 100]`
  } else {
    prevGuess.push(guess)
    if (numGuesses <= 1) {
      displayGuess(guess)
      displayMessage(`GameOver 😢. Number was ${randomNumber}`)
      endGame()
    } else {
      displayGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess) {
  // Check if the guess is correct
  if (guess === randomNumber) {
    displayMessage(`You guessed it right 😄. Number was ${randomNumber}`)
    endGame()
  } else if (guess < randomNumber) {
    displayMessage(`Your guess is too low 🙁. Try again`)
  } else if (guess > randomNumber) {
    displayMessage(`Your guess is too high 🙁. Try Again`)
  }
}

function displayMessage(message) {
  // Display the message
  result.innerHTML = `<h3>${message}</h3>`
}

function displayGuess(guess) {
  // Display the guess
  userInput.value = ''
  guessSlot.innerHTML += ` ${guess} `
  numGuesses--
  remaining.innerHTML = `${numGuesses}`
}

function endGame() {
  // End the game
  userInput.value = ''
  userInput.disabled = true
  submit.disabled = true
  userInput.style.backgroundColor = 'beige'
  div.innerHTML = '<button id="newGame">Play Again? 👀</button>'
  startOver.appendChild(div)
  playGame = false
  newGame()
}

function newGame() {
  // Start a new game
  startOver.addEventListener('click', () => {
    window.location.reload()
  })
  // randomNumber = parseInt(Math.random() * 100 + 1)
  // userInput.value = ''
  // userInput.disabled = false
  // prevGuess = []
  // numGuesses = 10
  // remaining.innerHTML = `${numGuesses}`
  // guessSlot.innerHTML = ''
  // playGame = true
}
