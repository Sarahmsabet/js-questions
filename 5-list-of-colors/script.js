const body = document.querySelector("#content");
const selectElement = document.createElement("select");
const pElement = document.createElement("p");
body.append(pElement, selectElement);
pElement.innerText = "select an Option please :";
function listOfColours(colours) {
  colours.forEach((element) => {
    console.log(element);
    const optionElement = document.createElement("option");
    optionElement.value = element;
    optionElement.text = element;
    selectElement.append(optionElement);
  });
  selectElement.addEventListener("change", () => {
    pElement.innerText = `You have selected: ${selectElement.value}`;
    pElement.style.color = selectElement.value;
  });
}

const colours = ["red", "blue", "green", "yellow", "pink", "brown"];

listOfColours(colours);
