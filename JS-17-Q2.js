// ? Question-2:Select all spans  with the 'circle' class and write a code to change classes that have 'blue' with 'purple' and vice versa

// !Answer:
let circle = document.querySelectorAll(".circle");
circle.forEach((element) => {
  if (element.classList.contains("blue")) {
    element.classList.add("purple");
    element.classList.remove("blue");
  } else if (!element.classList.contains("blue")) {
    element.classList.add("blue");
    element.classList.remove("purple");
  }
});
