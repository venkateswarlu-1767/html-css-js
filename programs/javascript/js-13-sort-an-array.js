let numbers = [40, 10, 30, 20, 50];
numbers.sort((a, b) => a - b);
document.getElementById("output").textContent = numbers.join(", ");
