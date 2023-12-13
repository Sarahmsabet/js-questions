//todo1. Create an index.html file and put four p elements
//todo2. Get the first paragraph by using document.querySelector(tagname)
//todo3. Get each of the paragraph using document.querySelector(#id)
//todo4. Get all the p as nodeList using document.querySelectorAll(tagname)
//todo5. Loop through the nodeList and get the text content of each paragraph
//todo6. Set a text content to the fourth paragraph
//todo7. Set id and class attribute for all the paragraphs using different methods
//todo8. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
//todo9. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
console.log("todo2:\n");
let firstPara = document.querySelector("p");
console.log(firstPara);
// ===============================
console.log("todo3:\n");

// let firstParagraph = document.querySelector("#first-paragraph");
// let secondParagraph = document.querySelector("#second-paragraph");
// let thirdParagraph = document.querySelector("#third-paragraph");
// let fourthParagraph = document.querySelector("#fourth-paragraph");
// console.log(firstParagraph, secondParagraph, thirdParagraph, fourthParagraph);
// ==============================
console.log("todo4:\n");
// let allPara = document.querySelectorAll("p");
// console.log(allPara);
// ==============================
console.log("todo5:\n");

// for (const text of allPara) {
//   console.log(text.innerText);
// }
// ==============================
console.log("todo6:\n");
// fourthParagraph.innerText += "\nSet a text content to the fourth paragraph";

// console.log(fourthParagraph);
// ============================== class
console.log("todo7:\n");
// for (const classes of allPara) {
//   classes.setAttribute("class", "new-class");
//   console.log(classes);
// }
// // ============================== id
// allPara.forEach((element, index) => {
//   switch (index) {
//     case 0:
//       element.setAttribute("id", "index0");
//       break;
//     case 1:
//       element.setAttribute("id", "index1");
//       break;
//     case 2:
//       element.setAttribute("id", "index2");
//       break;
//     case 3:
//       element.setAttribute("id", "index3");
//       break;
//   }
// });
// ==============================
console.log("todo8:\n");
// firstParagraph.style.color = "red";
// secondParagraph.style.backgroundColor = "blueviolet";
// thirdParagraph.style.border = "3px dotted gold";
// fourthParagraph.style.fontSize = "3rem";
// ==============================
console.log("todo9:\n");
// allPara.forEach((para, indexOf) => {
//   if (indexOf % 2 === 0) {
//     para.style.border = "10px dashed green";
//   } else {
//     para.style.border = "10px dotted red";
//   }
// });
