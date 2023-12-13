//todo1: Give all the images at even position a similar border color and style
//todo2: and all the images at odd position same border style but different from the even ones.
//*hint: iterate over the images using loops
let images = document.querySelectorAll("img");
console.log(images);
images.forEach((element, index) => {
  if (index % 2 === 0) {
    element.style.border = "5px solid violet";
  } else {
    element.style.border = "5px solid purple";
  }
});
