const body = document.querySelector("#content");
const heading = document.createElement("h1");
heading.innerText = "Your Todo List :";
const ulElement = document.createElement("ul");
function todoList(todos) {
  body.append(heading, ulElement);
  todos.forEach((element) => {
    const liElement = document.createElement("li");
    let todo = element.todo;
    liElement.innerText = todo;
    body.append(liElement);
    liElement.addEventListener("click", () => {
      if (liElement.style.textDecoration == "none") {
        liElement.style.textDecoration = "line-through";
      } else {
        liElement.style.textDecoration = "none";
      }
      console.log(liElement.style.textDecoration);
    });
  });
}

const todos = [
  { todo: "wash the dishes" },
  { todo: "walk the dog" },
  { todo: "learn javascript" },
  { todo: "go shopping" },
];

todoList(todos);
