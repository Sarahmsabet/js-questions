/*
 todo1: use this site -> "https://jsonplaceholder.typicode.com/users"
 todo2: write an async function and fetch the data
 todo3: using try-catch block to handle the error
*/

// ! Answer
const tryAsync = async () => {
  try {
    const url = await fetch("https://jsonplaceholder.typicode.com/users");
    const dataIs = await url.json();
    return dataIs;
  } catch (error) {
    console.log(error);
  }
};

console.log(tryAsync());
