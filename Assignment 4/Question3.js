function transpose(matrix) {
    const rows = matrix.length;
    const columns = matrix[0].length;
    const result = [];
  
    for (let j = 0; j < columns; j++) {
      result[j] = [];
      for (let i = 0; i < rows; i++) {
        result[j][i] = matrix[i][j];
      }
    }
  
    return result;
  }
  