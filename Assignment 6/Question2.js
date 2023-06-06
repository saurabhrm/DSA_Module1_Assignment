function searchMatrix(matrix, target) {
    const m = matrix.length;
    const n = matrix[0].length;
    let leftRow = 0;
    let leftCol = 0;
    let rightRow = m - 1;
    let rightCol = n - 1;
  
    while (leftRow <= rightRow && leftCol <= rightCol) {
      const midRow = Math.floor((leftRow + rightRow) / 2);
      const midCol = Math.floor((leftCol + rightCol) / 2);
      const midValue = matrix[midRow][midCol];
  
      if (midValue === target) {
        return true;
      } else if (midValue > target) {
        rightRow = midRow - 1;
        rightCol = midCol - 1;
      } else {
        leftRow = midRow + 1;
        leftCol = midCol + 1;
      }
    }
  
    return false;
  }
  