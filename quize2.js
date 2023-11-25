//? follow these steps:
// todo1 : Write a code that logs “wait 5 sec”
// todo2 : and then after 5 seconds logs “ready?”
// todo3 :  and finally logs “🚀”  every one second
// todo4 : ( write a condition that cleans up the setInterval after 10 seconds to avoid crashing)

//!   Answer:
console.log("wait 5 sec😕");
let question=setTimeout(() => {
  console.log("ready?");
  let i = 0;
let stopIt = setInterval(() => {
  console.log("🚀");
  i++;
  if (i === 10) {
    clearInterval(stopIt);
  }
}, 1000);
}, 5000);

