let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce((a, b) => a + b, 0);
document.getElementById("output").textContent = `Sum = ${sum}\nAverage = ${sum / numbers.length}`;
