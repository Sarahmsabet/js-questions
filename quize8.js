// ? 8. Write a function to calculate the average of array items using reduce

//! Answer:

const arr1 = [3, 5, 7, 2];
const arr2 = [1, 2, 3, 4, 5];
const arr3 = [11, 3, 1];

function average(arr) {
let total=arr.reduce((num1,num2)=>(num1+num2),0);
let ave=total/arr.length
return ave
}
console.log(average(arr1)); // result: 6
console.log(average(arr2)); // result: 3
console.log(average(arr3)); // result: 5
