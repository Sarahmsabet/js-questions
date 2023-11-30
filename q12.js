// ? 12. Create a function named goToSecondClass()
// todo1 : destructure the object in the function argument.
// todo2 : pass ‘myClasses’ object to the function.
// todo3: The function should return this statement ==> "Time to go to {property_value} class!"

const myClasses = {
  firstHour: "Ethics",
  secondHour: "Programming",
  thirdHour: "Biology",
};

//   Example Output: "Time to go to Programming class!"

// // ! Answer
function goToSecondClass({ firstHour, secondHour, thirdHour }) {
  let first = `Time to go to ${firstHour} class!`;
  let second= `Time to go to ${secondHour} class!`;
  let third = `Time to go to ${thirdHour} class!`;
  return first,second,third
}
console.log(goToSecondClass(myClasses));
