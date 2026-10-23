const button = document.createElement("button");
button.textContent = "Click Me";
button.onclick = () => document.getElementById("output").textContent = "Button clicked!";
document.getElementById("output").appendChild(button);
