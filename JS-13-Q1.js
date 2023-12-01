//! OPTIONAL
// ? Question-1:Using lexical scope, Write a function that displays the following outputs in order:
/**
 * Action
 * Potential
 * Signals
 */
// !Answer:
let first=()=>{
    console.log("Action");
let second=()=>{
    console.log(("Potentioal"));
let third=()=>{
    console.log("Signals");
}
return third()
}
return second()
}
first()