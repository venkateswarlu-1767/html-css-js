function greet(name = "Student") {
  return `Hello, ${name}!`;
}
document.getElementById("output").textContent = greet();
