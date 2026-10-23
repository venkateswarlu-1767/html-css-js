let numbers = [10, 40, 20, 50, 30];
let unique = [...new Set(numbers)].sort((a, b) => b - a);
document.getElementById("output").textContent = `Second largest = ${unique[1]}`;
