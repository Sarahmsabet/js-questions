// ? Qustion-4:Write a code that changes the background color of the stars when we click on them.
// hint: watch help.mp4
//! answer
let starPoint = document.querySelectorAll(".stars i");
console.log(starPoint);
starPoint.forEach(starIcon => {
    starIcon.addEventListener("click",()=>{
        starIcon.classList.toggle("active")
    })
});