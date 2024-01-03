// ? Question-1:Write a code that, upon clicking the heart icon (.cards__card__img__icon i), changes its color and increments the counter (#counter) displayed alongside it.
// hint: watch help.mp4
// !Answer:
let heartIcon = document.querySelector(".cards__card__img__icon i");
let counterIs = document.querySelector(".cards__card__img__icon p");
heartIcon.addEventListener("click", () => {
  heartIcon.style.color = "red";
  let amount=+counterIs.innerHTML++
});
