const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: 1,
  currentGuess: undefined,
  play: function () {
    // this.secretNum = Math.floor(Math.random() *
    //  (this.biggestNum - this.smallestNum + 1)) + this.smallestNum

    do {
      this.currentGuess = this.getGuess()
      this.currentGuess = this.checkValidNumberChoice()
      console.log(this.currentGuess)
      if (this.currentGuess !== false ||
        this.currentGuess !== null) {
          this.currentGuess = parseInt(this.currentGuess)
          this.prevGuesses.push(this.currentGuess)
          if (this.currentGuess !== this.secretNum ) {
            this.guessAgainMessage()
          }
      }
      // https://stackoverflow.com/questions/12864582/javascript-prompt-cancel-button-to-terminate-the-function
      // using cancel to get out of this
    } while (this.currentGuess !== this.secretNum && this.currentGuess !== null)

    if (this.currentGuess === this.secretNum) {
      this.secretNumGuessed()
    }
    alert(`Refresh the page to play again!`)
  },
  checkValidNumberChoice: function () {
    // REFACTOR ternary
    if (parseInt(this.currentGuess) >= this.smallestNum && parseInt(this.currentGuess) <= this.biggestNum) {
      return true
    } else  {
      return false
    }
  },
  guessAgainMessage: function () {
    let theGuess = this.currentGuess
    let messageHighOrLow = function () {
      // REFACTOR ternary
      if (theGuess > this.secretNum) {
        return "high"
      } else {
        return "low"
      }
    }
    return alert(`Your guess of ${this.currentGuess} is too ${messageHighOrLow()}.
    Previous Guesses: ${this.prevGuesses.join(', ')}`)
  },
  getGuess: function () {
    return prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`)
  },
  secretNumGuessed: function () {
    return alert(`Congratulations! You guessed the secret number in ${this.prevGuesses.length} tries!`)
  },
  prevGuesses: [],
}

game.play()