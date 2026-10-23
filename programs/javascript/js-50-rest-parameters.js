function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
document.getElementById("output").textContent = `Sum = ${sum(10,20,30,40)}`;
