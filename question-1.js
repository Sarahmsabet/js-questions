/*
  todo1: what is the difference between an asynchronous function and a synchronous function?
*/

// ! Answer
const body = document.body;
const pElement = document.createElement("p");
pElement.innerText =
  "synchronous functions donot wait they just do the things that they have to do and if some part of them take some more time(like calling something or requesting for something that doesnt matter for them.butasynchronous function are not same and they wait for things that they have to.";
body.append(pElement);
