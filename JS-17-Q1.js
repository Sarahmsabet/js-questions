// ? Question-1:follow these steps:
// todo-1:Select the body tag and apply this color to the background "#0a122d"
// todo-2:select image and set margin "4rem 0"
// todo-3:Apply a rounded border to the image and set its size to "1 rem"
// todo-4:Select h1 and h5 tags and place them in the appropriate position according to the image.(you can check help folder)
// !Answer:
let bodySelect = document.body;
bodySelect.style.backgroundColor = "#0a122d";
let imageSelect = document.querySelector("img");
imageSelect.style.margin = "4rem 0";
imageSelect.style.borderRadius = "1rem";
let headingOne = document.querySelector("h1");
headingOne.style.top = "4.5rem";
let headingFive = document.querySelector("h5");
headingFive.style.top = "6.5rem";
