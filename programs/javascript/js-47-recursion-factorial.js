function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
document.getElementById("output").textContent = `5! = ${factorial(5)}`;
