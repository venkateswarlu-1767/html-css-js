let a = 20, b = 4, operator = "*";
let result;
switch (operator) {
  case "+": result = a + b; break;
  case "-": result = a - b; break;
  case "*": result = a * b; break;
  case "/": result = a / b; break;
  default: result = "Invalid operator";
}
document.getElementById("output").textContent = `${a} ${operator} ${b} = ${result}`;
