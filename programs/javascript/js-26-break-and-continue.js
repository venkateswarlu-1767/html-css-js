let output = [];
for (let i = 1; i <= 10; i++) {
  if (i === 5) continue;
  if (i === 9) break;
  output.push(i);
}
document.getElementById("output").textContent = output.join(" ");
