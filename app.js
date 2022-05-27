const game = {
  title: 'Guess the Number!',
  biggestNum: 100,
  smallestNum: 1,
  secretNum: 1,
  play: function () {
    this.secretNum = Math.floor(Math.random() *
      (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
    
    this.prevGuesses.push(getGuess())

  },
  getGuess: function () {
    let guess

    do {
      guess = parseInt(prompt(``))

    } while (
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
      // Must use isNaN because NaN === NaN will return false
      isNaN(guess) ||
      guess > this.biggestNum || // Guess is too big
      guess < this.smallestNum) // Guess is too small


  },
  prevGuesses: [],
}

game.play()