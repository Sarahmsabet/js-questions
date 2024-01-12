function highlightWords(paragraph, colours) {
  const body = document.querySelector("#content");
  const selectElement = document.createElement("select");
  const pElement = document.createElement("p");
  body.append(pElement, selectElement);
  pElement.innerText = paragraph;
  function listOfColours(colours) {
    colours.forEach((element) => {
      console.log(element);
      const optionElement = document.createElement("option");
      optionElement.value = element;
      optionElement.text = element;
      selectElement.append(optionElement);
    });
    selectElement.addEventListener("change", () => {
      // let arrayOfP = [];
      // arrayOfP.push(pElement.split(" "));
      pElement.innerText = pElement
        .split(" ")
        .map((word) => (word.style.backgroundColor = selectElement.value))
        .join(" ");
      // console.log(arrayOfP);
      // arrayOfP.innerText = `You have selected: ${selectElement.value}`;
      // pElement.style.color = selectElement.value;
    });
  }

  listOfColours(colours);
}

const paragraph =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur convallis massa ut sem finibus ultrices. Phasellus hendrerit placerat libero non facilisis. Etiam tincidunt ut elit id elementum. Etiam accumsan semper ipsum, ac porttitor ex tempus non. Donec vitae massa condimentum, faucibus magna non, sagittis libero. Phasellus ullamcorper malesuada tellus at egestas. Duis volutpat turpis velit, ut bibendum tellus ornare ac. Nullam feugiat nisi fringilla eleifend scelerisque. Phasellus elit nulla, sodales eget consectetur sed, tincidunt vitae velit. Fusce eget tempus magna, vitae ultrices purus. Proin ac purus tellus. Curabitur rhoncus est quis libero egestas ultrices. Proin viverra a ex sed convallis. Fusce ut orci consectetur, placerat ipsum non, commodo neque. Nulla at dui velit. In ut accumsan libero. Duis ac lacus consectetur, posuere eros nec, aliquet nisl. Quisque sodales fringilla lacinia. Donec hendrerit ornare lectus, nec iaculis justo tincidunt et. Cras a varius libero, ac bibendum est. Aliquam molestie, leo non aliquam lobortis, nulla tortor hendrerit turpis, et ullamcorper magna diam quis elit. Maecenas elit libero, tincidunt sit amet lacinia sit amet, venenatis nec est.";

const colours = ["yellow", "green", "blue", "none"];

highlightWords(paragraph, colours);
