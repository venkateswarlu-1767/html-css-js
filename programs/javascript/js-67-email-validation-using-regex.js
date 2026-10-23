let email = "student@example.com";
let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
document.getElementById("output").textContent =
  `${email} is ${pattern.test(email) ? "Valid" : "Invalid"}`;
