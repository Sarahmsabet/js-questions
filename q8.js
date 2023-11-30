// ? 8. Use Array Destructuring to get all of the names from this Nested Array
// hint: Search about destructuring nested arrays.

const moreStudents = ['Chris', ['Ahmad', 'Antigoni'], ['Toby', 'Sam']];

//! Answer :
const [first,second,third]=moreStudents
const [firsts,seconds]=second
const[firstt,secondt]=third
console.log(`${first}\n${firsts}\n${seconds}\n${firstt}\n${secondt}`);