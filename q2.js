// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/
const object1 = {
  ali: "name",
  writes: "does what",
  novels: "kind of book",
};
console.log("first:\n");
console.log(Object.values(object1));
console.log("seconde:\n");
// let objectValues = [];
for (let values in object1) {
  values = [Object.values(object1)];
  // objectValues.push(values);
  console.log(values);
}
