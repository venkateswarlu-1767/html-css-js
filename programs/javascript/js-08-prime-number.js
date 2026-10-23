let n = 29, prime = n >= 2;
for (let i = 2; i <= Math.sqrt(n); i++) {
  if (n % i === 0) { prime = false; break; }
}
document.getElementById("output").textContent = `${n} is ${prime ? "Prime" : "Not Prime"}`;
