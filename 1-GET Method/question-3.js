/*
 Todo 1: Use this site -> "https://jsonplaceholder.typicode.com/users"
 Todo 2: Make a card with user data
 Todo 3: Each card should contain the name and company name
 Todo 4: In order to use the HTML and CSS, use the <article> tag as a container to append all the cards. For each card, create a <div> to set the innerText inside it.
*/

// ! Answer
const article = document.querySelector("article");
// const getData = async () => {
//   const data = await fetch("https://jsonplaceholder.typicode.com/users");
//   const dataOf = await data.json();
//   dataOf.forEach((element) => {
//     const divEle = document.createElement("div");
//     divEle.style.backgroundColor = `rgb(${Math.floor(
//       Math.random() * 255
//     )},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
//     divEle.style.width = "15rem";
//     divEle.style.height = "10rem";
//     divEle.style.borderRadius = "1rem";
//     divEle.style.display = "flex";
//     divEle.style.flexDirection = "column";
//     divEle.style.justifyContent = "center";
//     divEle.style.alignItems = "center";
//     divEle.style.margin = "2rem";
//     article.style.display = "flex";
//     article.style.flexDirection = "row";
//     article.style.flexWrap = "wrap";
//     const name = document.createElement("h3");
//     const companyName = document.createElement("h4");
//     name.innerText = element.name;
//     companyName.innerText = element.company.name;
//     article.append(divEle);
//     divEle.append(name, companyName);
//   });
//   return dataOf;
// };
const getData = async () => {
  try {
    const data = await axios.get("https://jsonplaceholder.typicode.com/users");
    const dataOf = await data.data;
    dataOf.forEach((element) => {
      const divEle = document.createElement("div");
      divEle.style.backgroundColor = `rgb(${Math.floor(
        Math.random() * 255
      )},${Math.floor(Math.random() * 255)},${Math.floor(
        Math.random() * 255
      )})`;
      divEle.style.width = "15rem";
      divEle.style.height = "10rem";
      divEle.style.borderRadius = "1rem";
      divEle.style.display = "flex";
      divEle.style.flexDirection = "column";
      divEle.style.justifyContent = "center";
      divEle.style.alignItems = "center";
      divEle.style.margin = "2rem";
      article.style.display = "flex";
      article.style.flexDirection = "row";
      article.style.flexWrap = "wrap";
      const name = document.createElement("h3");
      const companyName = document.createElement("h4");
      name.innerText = element.name;
      companyName.innerText = element.company.name;
      article.append(divEle);
      divEle.append(name, companyName);
    });
    return dataOf;
  } catch (error) {
    console.log("keik yazdi zadi tush");
  }
};
