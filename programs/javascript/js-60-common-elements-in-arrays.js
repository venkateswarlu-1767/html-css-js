let a = [1,2,3,4,5], b = [3,4,5,6,7];
let common = a.filter(x => b.includes(x));
document.getElementById("output").textContent = common.join(", ");
