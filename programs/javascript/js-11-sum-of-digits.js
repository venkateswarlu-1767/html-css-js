let n = 12345;
let sum = String(n).split("").reduce((total, digit) => total + Number(digit), 0);
document.getElementById("output").textContent = `Sum of digits = ${sum}`;
