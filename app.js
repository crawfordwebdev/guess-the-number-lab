const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    // currentGuess = get guess
    // while not secret num
    // currentGuess = getGuess
    // prevGuesses.push(currentGuess)
    // 
  },
  guessAgainMessage: function () {
    let theGuess = this.prevGuesses[this.prevGuesses.length - 1]
    let messageHighOrLow = function () {
      // REFACTOR ternary
      if (theGuess > this.secretNum) {
        return high
      } else {
        return low
      }
    }
    return alert(`Your guess of ${theGuess} is too ${messageHighOrLow()}.
    Previous Guesses: ${this.prevGuesses.join(', ')}`)
  },
  getGuess: function () {
    return prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
  },
  secretNumGuessed: function() {
    return alert(`Congratulations! You guessed the secret number in ${this.prevGuesses.length} tries!`)
  },
  prevGuesses: [],
}