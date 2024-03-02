const adviceId = document.querySelector(".advice-id"); //advice number
const adviceIs = document.querySelector(".advice"); //advice text
const nextAdvice = document.querySelector(".next-advice"); //go next
//click
nextAdvice.addEventListener("click", async () => {
  const advices = await fetch("https://api.adviceslip.com/advice");
  const toString = await advices.json();
  adviceId.textContent = `${toString.slip.id}`;
  adviceIs.textContent = `${toString.slip.advice}`;
});
