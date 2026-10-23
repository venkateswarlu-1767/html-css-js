let text = "JavaScript";
let count = (text.match(/[aeiou]/gi) || []).length;
document.getElementById("output").textContent = `Vowels = ${count}`;
