let randomNumber = Math.floor(Math.random() * 100 + 1);
let output = document.querySelector(".final-output");
let tries = document.querySelector(".Tries-output");
let newGameButton = document.querySelector(".btnNewGame");
let counter = 7;
tries.innerText = `Number of Tries: ${counter}`;
function guessNumber() {
  if (counter > 0) {
    counter--;
    tries.innerText = `Number of Tries: ${counter}`;
    //Collect input from the user
    let guess = document.querySelector(".inputs-Values").value;
    console.log(randomNumber);
    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess == "" || guess > 100 || guess < 0) {
      output.innerText = "Please enter a number between 1 and 100";
    }
    //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    else if (guess > randomNumber) {
      output.innerText = "Number is too high, try again";
    }
    //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    else if (guess < randomNumber) {
      output.innerText = "Number is too low, try again";
    }
    //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    else if (guess == randomNumber) {
      tries.innerText = `It took you ${7 - counter} tries`;
      output.innerText = `${randomNumber} Guess is correct. You win!`;
    }
  } else {
    tries.style.display = "none";
    output.innerText = `You Lose, the number was ${randomNumber}`;
  }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  randomNumber = Math.floor(Math.random() * 100 + 1);
  //Reset users input field
  document.querySelector(".inputs-Values").value = "";
  //Reset tries, and triesTaken by the user
  counter = 7;
  tries.style.display = "block";
  tries.innerText = `Number of Tries: ${counter}`;
  output.innerText = "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}
newGameButton.addEventListener("click", newGame);
document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
