let text = "Programming";
let vowels = (text.match(/[aeiou]/gi) || []).length;
let consonants = (text.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length;
document.getElementById("output").textContent =
  `Vowels: ${vowels}\nConsonants: ${consonants}`;
