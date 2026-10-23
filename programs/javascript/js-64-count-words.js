let text = "JavaScript makes webpages interactive";
let count = text.trim().split(/\s+/).length;
document.getElementById("output").textContent = `Words = ${count}`;
