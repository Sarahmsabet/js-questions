//? 6. write a reduce method to get the sum of all array items

//! Answer:
const arr = [31, 1, 7, 12, 27];
const total =arr.reduce((num1,num2)=>num1+num2,0)
console.log(total);