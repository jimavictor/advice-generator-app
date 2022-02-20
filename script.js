var quote = document.getElementById("quote");
var number = document.getElementById("number");
var button = document.getElementById("button");
var dice = document.getElementById("dice");

button.addEventListener("click", function () {
  dice.classList.add("dice-rotate");
  button.classList.add("shine");
  getQuote();
});

async function getQuote() {
  const response = await fetch("https://api.adviceslip.com/advice", {
    cache: "no-cache",
  });
  const data = await response.json();
  number.innerText = data.slip.id;
  quote.innerText = data.slip.advice;
  dice.classList.remove("dice-rotate");
  button.classList.remove("shine");
}
