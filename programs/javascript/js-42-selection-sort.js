let a = [64, 25, 12, 22, 11];
for (let i = 0; i < a.length - 1; i++) {
  let min = i;
  for (let j = i + 1; j < a.length; j++) if (a[j] < a[min]) min = j;
  [a[i], a[min]] = [a[min], a[i]];
}
document.getElementById("output").textContent = a.join(", ");
