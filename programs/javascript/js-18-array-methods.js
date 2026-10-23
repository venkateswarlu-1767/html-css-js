let numbers = [1, 2, 3, 4, 5];
let doubled = numbers.map(n => n * 2);
let even = numbers.filter(n => n % 2 === 0);
let sum = numbers.reduce((a, b) => a + b, 0);
document.getElementById("output").textContent =
  `Map: ${doubled}\nFilter: ${even}\nReduce sum: ${sum}`;
