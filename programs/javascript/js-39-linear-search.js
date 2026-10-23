let numbers = [10, 25, 30, 45, 50], target = 45;
let index = numbers.indexOf(target);
document.getElementById("output").textContent = index >= 0 ? `Found at index ${index}` : "Not found";
