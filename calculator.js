/*
Create a calculator that performs four basic operations.
The styling should be something like calculator.png
*/

const clearEle = document.querySelector(".clear");
const displayEle = document.querySelector(".current");
const btnNumbers = document.querySelectorAll(".numbers");
const btnOperators = document.querySelectorAll(".count");
let displayVal = "0";
let pendingVal;
let evalArray = [];
updateVal = (element) => {
  let btnText = element.target.innerText;
  if (displayVal === "0") {
    displayVal = "";
  }

  displayVal += btnText;
  displayEle.innerText = displayVal;
};
currentOperation = (element) => {
  let operator = element.target.innerText;

  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayEle.innerText = displayVal;
      evalArray.push(pendingVal);
      evalArray.push("+");
      break;
    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayEle.innerText = displayVal;
      evalArray.push(pendingVal);
      evalArray.push("-");
      break;
    case "*":
      pendingVal = displayVal;
      displayVal = "0";
      displayEle.innerText = displayVal;
      evalArray.push(pendingVal);
      evalArray.push("*");
      break;
    case "/":
      pendingVal = displayVal;
      displayVal = "0";
      displayEle.innerText = displayVal;
      evalArray.push(pendingVal);
      evalArray.push("/");
      break;
    case "=":
      evalArray.push(displayVal);
      let evaluation = eval(evalArray.join(" "));
      displayVal = evaluation + "";
      console.log(typeof displayVal);
      displayEle.innerText = displayVal;
      evalArray = [];
      break;
    default:
      break;
  }
};
for (const value of btnNumbers) {
  value.addEventListener("click", updateVal);
}
for (const oper of btnOperators) {
  oper.addEventListener("click", currentOperation);
}
clearEle.addEventListener("click", () => {
  displayVal = "0";
  pendingVal = undefined;
  evalArray = [];
  displayEle.innerHTML = displayVal;
});
