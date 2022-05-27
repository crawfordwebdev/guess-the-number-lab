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
      console.log("Start Do: " + this.prevGuesses)
      this.prevGuesses.push(this.getGuess())
      console.log("After Push: " + this.prevGuesses)

    // Did the play guess the correct answer?
    } while (this.prevGuesses[this.prevGuesses.length - 1] !== this.secretNum)

  },
  getGuess: function () {
    // Need to declare the player's guess up here so we don't get stuck in the while loop
    let guess

    do {
      console.log('Getting Guess')
      guess = parseInt(prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}.`))
      console.log("Type of guess: " + typeof(guess))
      console.log("What is the guess? : " + guess)
    } while (
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
      // Must use isNaN because NaN === NaN will return false
      isNaN(guess) ||
      guess > this.biggestNum || // Guess is too big
      guess < this.smallestNum) // Guess is too small

    // Don't forget to return guess so it can get pushed onto the prevGuess array
    return guess

  },
  prevGuesses: [],
}

console.log("Let's Play!")
game.play()