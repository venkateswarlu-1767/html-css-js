let text = "JavaScript";
let count = (text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
document.getElementById("output").textContent = `Consonants = ${count}`;
