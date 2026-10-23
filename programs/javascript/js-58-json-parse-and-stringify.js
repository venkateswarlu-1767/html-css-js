const student = { name: "Lakku", age: 19, course: "CSE AI/ML" };
const jsonText = JSON.stringify(student);
const object = JSON.parse(jsonText);
document.getElementById("output").textContent =
  `JSON: ${jsonText}\nName after parsing: ${object.name}`;
