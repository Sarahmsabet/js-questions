/*
  Write a function that calculates the sum of two numbers.

  - The function must return a promise.
  - The solution should be solved after half a second.
  - If a negative value is entered into the function, it will be rejected.
  - Note: you should use "Promise" to resolve this question.
*/
const sum = (firstNum, secondNum) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (firstNum > 0 && secondNum > 0) {
        resolve(`Sum is= ${firstNum + secondNum}`);
      } else {
        reject(`calculation denied`);
      }
    }, 500);
  });
};
sum(-2, -5)
  .then((res) => {
    console.log(res);
  })
  .catch((er) => {
    console.log(er);
  });
