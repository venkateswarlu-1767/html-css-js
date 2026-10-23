let n = 5, fact = 1;
for (let i = 1; i <= n; i++) fact *= i;
document.getElementById("output").textContent = `${n}! = ${fact}`;
