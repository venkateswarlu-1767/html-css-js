const set = new Set([1,2,2,3,4]);
const map = new Map([["name","Lakku"],["course","CSE AI/ML"]]);
document.getElementById("output").textContent =
  `Set: ${[...set].join(", ")}\nMap name: ${map.get("name")}`;
