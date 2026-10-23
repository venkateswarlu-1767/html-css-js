let A = [[1,2],[3,4]], B = [[5,6],[7,8]], C = [[0,0],[0,0]];
for (let i = 0; i < 2; i++)
  for (let j = 0; j < 2; j++)
    for (let k = 0; k < 2; k++) C[i][j] += A[i][k] * B[k][j];
document.getElementById("output").textContent = C.map(row => row.join(" ")).join("\n");
