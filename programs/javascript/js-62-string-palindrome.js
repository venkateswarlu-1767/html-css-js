let text = "level";
let reversed = [...text].reverse().join("");
document.getElementById("output").textContent =
  `${text} is ${text === reversed ? "a Palindrome" : "not a Palindrome"}`;
