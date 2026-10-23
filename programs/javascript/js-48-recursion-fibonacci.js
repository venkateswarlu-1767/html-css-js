function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
document.getElementById("output").textContent = `Fibonacci(10) = ${fib(10)}`;
