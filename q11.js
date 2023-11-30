// ? 11. Write a function called displayName() that takes an object as an argument
// todo1 : Print the person's first and last name.
// todo2 : Use object destructuring in the function argument.
// todo3 : Use  template strings when printing the first and last name.

const person2 = {
  first: 'Elon',
  last: 'Musk',
  twitter: '@elonmusk',
  company: 'Space X',
};

// ! Answer

function displayName(object){
  const {first,last}=person2
  return `${person2.first} ${person2.last}`
}
console.log(displayName(this.person2));