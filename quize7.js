//? 7. Write a function to:
// todo1: find every item with more than 6 characters
// todo2: then check, if all of them have less than 10 characters return true, otherwise return false

//!  Answer:
const array = ["hello Jo", "fish", "birmingham", "periodic table", "phone"];

let filterWords=(array)=>{
  let moreThansix=array.filter((element)=>element.length>6)
  let lessThanTen=moreThansix.every((el)=>el.length<10)
  return lessThanTen
}
console.log(filterWords(array));