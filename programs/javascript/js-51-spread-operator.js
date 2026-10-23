const a = [1, 2, 3], b = [4, 5, 6];
const combined = [...a, ...b];
document.getElementById("output").textContent = combined.join(", ");
