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
      console.log("Current Guess: " + this.currentGuess)
      if (this.currentGuess !== NaN &&
        this.currentGuess !== null) {
        if (this.winCheck() === true && this.prevGuesses.length > 0)
          this.prevGuesses.push(this.currentGuess)
        if (this.winCheck() === false && this.currentGuess !== NaN && this.currentGuess !== null) {
          this.guessAgainMessage()
        }
      }


      // https://stackoverflow.com/questions/12864582/javascript-prompt-cancel-button-to-terminate-the-function
      // using cancel to get out of this
      console.log("Win Check: " + this.winCheck())
    } while (this.winCheck() || this.currentGuess !== null)

    if (this.currentGuess === this.secretNum) {
      this.secretNumGuessed()
    }
  },
  getGuess: function () {
    this.currentGuess = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.
    Hint: The Secret Number is: ${this.secretNum}`)
    console.log("Get Guess: " + this.currentGuess)
    if (parseInt(this.currentGuess) >= this.smallestNum && parseInt(this.currentGuess) <= this.biggestNum) {
      return parseInt(this.currentGuess)
    } else if (this.currentGuess === null) {
      return null
    } else if (parseInt(this.currentGuess) === NaN){
      return NaN
    }
  },
  winCheck: function () {
    if (this.currentGuess === this.secretNum) {
      return true
    } else {
      return false
    }
  },
  guessAgainMessage: function () {
    let messageHighOrLow = function () {
      // REFACTOR ternary
      if (this.currentGuess > this.secretNum) {
        return "high"
      } else if (this.currentGuess < secretNum) {
        return "low"
      }
    }
    return alert(`Your guess of ${this.currentGuess} is too ${messageHighOrLow()}.
    Previous Guesses: ${this.prevGuesses.join(', ')}`)
  },

  secretNumGuessed: function () {
    if (this.prevGuesses.length > 1) {
      return alert(`Congratulations! You guessed the secret number in ${this.prevGuesses.length} tries!`)
    } else {
      return alert(`Congratulations! You guessed the secret number in one try!`)
    }
  },
  prevGuesses: [],
}

game.play()