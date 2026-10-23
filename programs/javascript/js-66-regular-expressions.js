let text = "My roll number is 12345";
let numbers = text.match(/\d+/g);
document.getElementById("output").textContent = `Numbers found: ${numbers.join(", ")}`;
