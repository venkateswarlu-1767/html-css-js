let year = 2028;
let leap = (year % 400 === 0) || (year % 4 === 0 && year % 100 !== 0);
document.getElementById("output").textContent = `${year} is ${leap ? "a Leap Year" : "not a Leap Year"}`;
