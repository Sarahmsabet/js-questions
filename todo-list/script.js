function populateTodoList(toDos) {
  toDos.forEach((element) => {
    console.log(element);
    liToDoList(element.task);
  });
  // Write your code to create todo list elements with completed and delete buttons here, all todos should display inside the "todo-list" element.
}
const liToDoList = (str) => {
  let list = document.getElementById("todo-list");
  const liElement = document.createElement("li");
  liElement.innerText = str;
  liElement.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  const spanElement = document.createElement("span");
  spanElement.classList.add("badge", "bg-primary", "rounded-pill");
  const fIconElement = document.createElement("i");
  fIconElement.classList.add("fa", "fa-check");
  const sIconElement = document.createElement("i");
  sIconElement.classList.add("fa", "fa-trash");
  spanElement.append(fIconElement, sIconElement);
  liElement.append(spanElement);
  list.append(liElement);
  console.log(liElement);
  fIconElement.addEventListener("click", () => {
    if (liElement.style.textDecoration == "none") {
      liElement.style.textDecoration = "line-through";
    } else {
      liElement.style.textDecoration = "none";
    }
  });
  sIconElement.addEventListener("click", () => {
    liElement.remove();
  });
};
// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let toDos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(toDos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  // Write your code here... and remember to reset the input field to be blank after creating a todo!
  const addTODO = document.querySelector(".form-control");
  liToDoList(addTODO.value);
  addTODO.value = "";
}

// OPTIONAL
// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedToDos() {
  // Write your code here...
}
