// ? Question-2:Write a function called "printPersons" that takes an array of persons and displays them on the screen.
const persons = [
  { name: "Alice", age: 18 },
  { name: "Bob", age: 21 },
  { name: "Charlie", age: 15 },
];
console.log("Q2:");
const printPersons = (persons) => {
  persons.forEach((element) => {
    console.log(
      `person name is: ${element.name}\nand person age is: ${element.age}`
    );
  });
};
printPersons(persons);
