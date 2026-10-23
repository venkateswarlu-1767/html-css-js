let n = 10, a = 0, b = 1, series = [];
for (let i = 0; i < n; i++) {
  series.push(a);
  [a, b] = [b, a + b];
}
document.getElementById("output").textContent = series.join(" ");
