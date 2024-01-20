// ? Question-1:follow these steps:
//todo-1:Write a function called "calculate" that takes 4 parameters.
//todo-2:The first and seconde parameters should be numbers.
//todo-3:The third parameter should be a string indicating either "add => addition" or "multiply => multiplication".
//todo-4:The fourth parameter should be a function that log the result of the calculation.
console.log("Q1:");
function handleCalculationResult(add, mul) {
  console.log(add, mul);
}
const calculate = (fNum, sNum, operation, handleCalculationResult) => {
  if (operation == "add") {
    const add = `addition is: ${fNum + sNum}\n`;
    handleCalculationResult(add);
  } else if (operation == "multiply") {
    const mul = `multiplication is: ${fNum * sNum}`;
    handleCalculationResult(mul);
  }
};

calculate(5, 3, "add", handleCalculationResult);
calculate(4, 6, "multiply", handleCalculationResult);
