//? 5. Write a code to show if there are any truthy values in the array below
//? hint: use just one of this methods and pass the isTruthy function to that method
//? some(), every(), includes(), slice()

//! Answer:

const array = ['0', null, '', 0];
function isTruthy(num) {
  return array.every((num) => num < 10)
  // write your code here
}
console.log(isTruthy());