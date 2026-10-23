let text = "programming", frequency = {};
for (const ch of text) frequency[ch] = (frequency[ch] || 0) + 1;
document.getElementById("output").textContent = JSON.stringify(frequency, null, 2);
