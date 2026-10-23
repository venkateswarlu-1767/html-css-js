let n = 121;
let reversed = Number(String(n).split("").reverse().join(""));
document.getElementById("output").textContent = `${n} is ${n === reversed ? "a Palindrome" : "not a Palindrome"}`;
