// According to your js11 session, write a code that shows why we shouldn't use var?
console.log(
  "well if we use it,it is available every where.\ndoesn't matter we are coding in a block scope or global one.who?where? var.\n"
);
console.log("example:");
 var age=23
 console.log(`first:${age}`);
 var age=32
 console.log(`seconde:${age}`);
 let input=(amount)=>{
  var amount="23$"
  console.log(amount);
 }
 input()
 console.log(amount);