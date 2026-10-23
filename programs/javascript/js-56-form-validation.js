const name = "Lakku", email = "student@example.com";
const valid = name.trim() !== "" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
document.getElementById("output").textContent = valid ? "Form data is valid." : "Invalid form data.";
