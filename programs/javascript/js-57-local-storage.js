localStorage.setItem("studentName", "Lakku");
const saved = localStorage.getItem("studentName");
document.getElementById("output").textContent = `Saved name: ${saved}`;
