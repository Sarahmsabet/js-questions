// ? Question-3: Write a function that simulates the filter function using a callback function:
// todo-1: Your function should take an array and a callback function as arguments.
// todo-2: It should return the result of filtering based on the callback.
// todo-3: In the callback function, check if the number is greater than 2.
console.log("Q3:");
const numbers = [1, 2, 3, 4, 5];
const simulateFilter = (numbers, callback) => {
  return callback(numbers);
};
const callback = (filterNum) => {
  let numbersAre = [];
  filterNum.forEach((element) => {
    if (element > 2) {
      numbersAre.push(element);
    }
  });
  return numbersAre;
};
const evenNumbers = simulateFilter(numbers, callback);
console.log(evenNumbers); //>>> [3, 4, 5]
