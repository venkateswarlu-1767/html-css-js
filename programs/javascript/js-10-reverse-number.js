let n = 12345;
let reversed = Number(String(n).split("").reverse().join(""));
document.getElementById("output").textContent = `Reverse = ${reversed}`;
