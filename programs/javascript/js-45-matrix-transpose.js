let A = [[1,2,3],[4,5,6]], T = [];
for (let j = 0; j < A[0].length; j++) {
  T[j] = [];
  for (let i = 0; i < A.length; i++) T[j][i] = A[i][j];
}
document.getElementById("output").textContent = T.map(row => row.join(" ")).join("\n");
