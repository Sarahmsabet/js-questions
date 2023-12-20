/*
  todo 1: generate a random color using Math and rgb
  todo 2: add a div and change the background color when user brings the mouse over the div
*/

// ! ========== Answers ==========
let color = () => {
  divEl.style.backgroundColor=`rgb(${Math.ceil(Math.random() * 255)},${Math.ceil(
    Math.random() * 255
  )},${Math.ceil(Math.random() * 255)},${Math.random()})`;
};
let divEl = document.querySelector("#hover");
divEl.addEventListener("mouseenter", color);
