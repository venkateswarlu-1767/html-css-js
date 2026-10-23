let n = 7, output = [];
for (let i = 1; i <= 10; i++) output.push(`${n} x ${i} = ${n * i}`);
document.getElementById("output").textContent = output.join("\n");
