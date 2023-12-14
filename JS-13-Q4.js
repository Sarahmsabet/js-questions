//? Question-4:Explain these things in the new EcmaScript standard with examples. (Explain in the form of an example.)
// todo:Using const, let instead of var
// todo:arrow function
// todo:template string instead of "" and ''
// todo:destructuring
console.log("if we define a variable with var and we forget the name an reuse it again we faced with beautiful bugs but if you use let an const you can not use same variable name for variables,and if you want somme varibles do not change a all you can use const");
var num3 = 4;
var num3 = 5; //redeclaring ✓
num3 = 66; //reassigning ✓

let num1 = 2;
num1 = 98; //reassigning ✓
let num1 = 45; //redeclaring ✕

const num2 = 3;
const num2 = 9; //redeclaring  ✕
num2 = 78; //reassigning ✕

console.log("well about arrow function we got smaller syntax but dont forget that 'this' doesnt work for it if we use objects.it shows window not our defined object\n");
//regular function
function check() {
  console.log("hello");
}
check();
//arrow function
let seconedCheck = () => {
  return "heelo aleykom";
};
console.log("dont know what to say about it.you can add operation in consol log when you are using sing or double by adding some '+' you can add operations in template string with '${}' this.\n");
// doubel qoution
console.log("hello");
//single qoution
console.log('hello');
//template string
console.log(`this is ${1 + 1 + 1}d hello`);

console.log("nothing to say about it :D checkout examples \n<3");
//object
let Object = {
  name: "yek",
  family: "do",
  ability: false,
};
const { name, family, abillity, age = 77 } = Object;

//array
let total = [1, 2, 3, 4, 5];
const [first, second, ...rest] = total;
