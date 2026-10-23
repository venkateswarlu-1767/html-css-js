let A = [[1,2],[3,4]], B = [[5,6],[7,8]], C = [];
for (let i = 0; i < 2; i++) {
  C[i] = [];
  for (let j = 0; j < 2; j++) C[i][j] = A[i][j] + B[i][j];
}
document.getElementById("output").textContent = C.map(row => row.join(" ")).join("\n");
