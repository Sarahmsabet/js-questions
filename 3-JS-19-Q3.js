// ? Qustion-3:Write a code to close message box when close button clicked :
// hint: watch help.mp4
//! answer
let messageBox = document.querySelector(".message");
let messageBoxIcon = document.querySelector(".message i");
messageBoxIcon.addEventListener("click", () => {
  messageBox.style.visibility = "hidden";
});
