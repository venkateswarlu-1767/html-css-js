let i = 1, output = [];
do {
  output.push(i);
  i++;
} while (i <= 5);
document.getElementById("output").textContent = output.join(" ");
