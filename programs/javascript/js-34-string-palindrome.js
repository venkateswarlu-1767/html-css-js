let text = "madam";
let reversed = text.split("").reverse().join("");
document.getElementById("output").textContent =
  `${text} is ${text === reversed ? "a Palindrome" : "not a Palindrome"}`;
