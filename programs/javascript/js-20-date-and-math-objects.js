const today = new Date();
const random = Math.floor(Math.random() * 100) + 1;
document.getElementById("output").textContent =
  `Date: ${today.toDateString()}\nRandom number: ${random}`;
