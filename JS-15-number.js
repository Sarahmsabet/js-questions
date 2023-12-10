/*
Create a sequence of numbers of length 10.
so that each number is created by the sum of the previous two numbers multiplied by 2.
- - The first two numbers must be a random number between 0 and 15.
for example :
num1 = 2
num2 = 3
2, 3, 10, 26,...
*/

//! Answer:

let firstNumber = Math.floor(Math.random() * 15);
let secondNumber = Math.floor(Math.random() * 15);
let arrayOfNumbers = [firstNumber, secondNumber];
let sumFunc = (arrayOfNumbers) => {
  for (let i = 0; i < 8; i++) {
    let rest = arrayOfNumbers.reduce((firstNumber, secondNumber) => {
      return firstNumber + secondNumber * 2;
    }, 0);
    arrayOfNumbers.push(rest);
  }
  return arrayOfNumbers;
};
console.log(sumFunc(arrayOfNumbers));
