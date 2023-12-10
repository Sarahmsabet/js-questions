/*
Do you remember the game of hop?

Get a  number between 2 and 6 from the user(you can use prompt and alert in this practice), then log from 1 to 200 in the console.
It is just like the game of hop, whatever number the user enters, the numbers will be printed accordingly.

Example: If the user enters the number 3, the numbers will be printed like this:
1, 2, hop, 4, 5, hop, 7, 8, hop, 10 ..., 200 
*/
//! Answer:

let getNumber = () => {
  let enterNumber = prompt("please enter your number", "here");
  if (enterNumber >= 2 && enterNumber <= 6) {
    for (let i = 1; i <= 200; i++) {
      if (i % enterNumber == 0) {
        console.log("hop");
      } else {
        console.log(i);
      }
    }
  } else {
    alert("this game start with numbers between 2 and 6");
    return getNumber();
  }
};
getNumber();

// let firstArray = [];
// let hopFunc = (enterNumber=5) => {
//   for (let i = 1; i <= 200; i++) {
//     firstArray.push(i);
//     if (i%enterNumber===0) {
//       (i,"hop")

//     }
//   }
//   console.log(firstArray);
// };
// hopFunc();
// let hopFunc = (enterNumber = 2, point = 200) => {
//   for (let i = 1; i <= point; i++) {
//     if (i % enterNumber === 0) {
//       i.replaceAll("hop");
//     }
//   }
// };
// console.log(hopFunc());
// let checked = hop.push(i);
//     checked
//       .filter((num) => {
//         return num % enterNumber === 0;
//       })
//       .map(()=>{hop});
//     return checked;
