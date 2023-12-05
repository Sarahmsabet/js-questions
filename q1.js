// * ===============================1========================================

/*
 ? look at the code below:
 ? make a sentence by concatenating the object keys 
*/
const object1 = {
  ali: "name",
  writes: "does what",
  novels: "kind of book",
};
let print = Object.keys(object1);
console.log(...print);
// output => 'ali writes novels'
