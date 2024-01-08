// ? why event bubbling is bad and how can we prevent it?
let heading = document.createElement("h1");
let body=document.querySelector("body")
body.append(heading);
heading.innerText = "log for third question";
// ! Answers ======================================
console.log(
  "well imagin we have some nested element and each one of them has there own special event.\nif you click on one of there child thhe hole family would run\nhow can you stop it by'stoppropagetion'method or 'stopimidiatepropagation'"
);
