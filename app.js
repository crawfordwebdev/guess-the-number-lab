const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: null,
  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
    do {
      // getGuess should only return a valid guess, otherwise it will keep asking.
      this.prevGuesses.push(this.getGuess())

      this.render()

    // Did the player guess the correct answer?
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)

  },
  getGuess: function () {
    // Need to declare the player's guess up here so we don't get stuck in the while loop
    let guess

    do {
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
 
    } while (
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
      // Must use isNaN because NaN === NaN will return false
      isNaN(guess) ||
      guess > this.biggestNum || // Guess is too big
      guess < this.smallestNum) // Guess is too small

    // Don't forget to return guess so it can get pushed onto the prevGuess array
    return guess
  },
  render: function() {
    let message
    let lastGuess = this.prevGuesses[this.prevGuesses.length - 1]

    if (lastGuess === this.secretNum) {
      message = `Congrats! You guessed the number in ${this.prevGuesses.length} ${this.prevGuesses.length > 1 ? "tries" : "try"}!`
    } else {
      let highLow = lastGuess > this.secretNum ?  "high" : "low"
      message = `Your guess is too ${highLow}. Previous guesses: ${this.prevGuesses.join(', ')}` 
    }
    alert(message)
  },

  prevGuesses: [],
}

game.play()