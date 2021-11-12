function guessingGame() {
  let target = Math.floor(Math.random() * 100)
  let guesses = 0
  let hasWon = false
  return function makeGuess(guess) {
    if (this.hasWon) return "The game is over, you already won!"
    guesses++
    if (guess < target) {
      return `${guess} is too low!`
    } else if (guess > target) {
      return `${guess} is too high!`
    } else {
      this.hasWon = true
      return `You win! You found ${target} in ${guesses} guesses.`
    }
  }
}

module.exports = { guessingGame };