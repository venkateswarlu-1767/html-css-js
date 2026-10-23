let numbers = [10, 20, 30, 40, 50, 60], target = 40;
let low = 0, high = numbers.length - 1, index = -1;
while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (numbers[mid] === target) { index = mid; break; }
  if (numbers[mid] < target) low = mid + 1;
  else high = mid - 1;
}
document.getElementById("output").textContent =
  index >= 0 ? `Found at index ${index}` : "Not found";
