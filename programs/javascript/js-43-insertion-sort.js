let a = [12, 11, 13, 5, 6];
for (let i = 1; i < a.length; i++) {
  let key = a[i], j = i - 1;
  while (j >= 0 && a[j] > key) { a[j + 1] = a[j]; j--; }
  a[j + 1] = key;
}
document.getElementById("output").textContent = a.join(", ");
