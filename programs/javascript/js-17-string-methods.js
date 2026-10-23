let text = "JavaScript Programming";
let result = `Length: ${text.length}
Uppercase: ${text.toUpperCase()}
Lowercase: ${text.toLowerCase()}
Includes "Script": ${text.includes("Script")}`;
document.getElementById("output").textContent = result;
