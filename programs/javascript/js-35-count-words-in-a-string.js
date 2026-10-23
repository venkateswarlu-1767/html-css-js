let text = "JavaScript is easy to learn";
let words = text.trim().split(/\s+/);
document.getElementById("output").textContent = `Word count = ${words.length}`;
