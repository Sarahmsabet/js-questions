// ?Question-3:follow these steps:
// todo-1:select "ul" element with "navbar" class.
// todo-2:add the items of the navbarItem array to the "ul" element by appending them as <li> elements.
// todo-3:Add the class "item" to each <li> element.
// todo-4:Edit the <li> tags according to the image.(You can check the help folder or use the following style for each <li> element)
/**
  {
    margin: 0 1rem;
    cursor: pointer;
  }
*/
// !Answer:
let ulNavbar = document.querySelector(".navbar");

const navbarItem = ["Home", "Products", "Blog", "Contact us"];

navbarItem.forEach((element, index) => {
  element = document.createElement("li");

  element.appendChild(document.createTextNode(navbarItem[index]));

  ulNavbar.appendChild(element);

  element.classList.add("item");

  element.style.margin = "0 1rem";

  element.style.cursor = "pointer";
});
