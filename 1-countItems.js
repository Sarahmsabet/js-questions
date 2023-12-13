//Count the number of <li> in the countItems.html file and show the results in console.
let liCollection = document.querySelectorAll("li");
let counter=0
for (const element of liCollection) {
    
    console.log(element);
    counter++
}
console.log(counter);