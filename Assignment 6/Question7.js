function generateMatrix(n) {
    // Initialize the matrix with zeros
    const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  
    // Define the boundaries
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;
  
    // Initialize the current value to fill in
    let num = 1;
  
    while (top <= bottom && left <= right) {
     
      for (let i = left; i <= right; i++) {
        matrix[top][i] = num++;
      }
      top++;
  
      
      for (let i = top; i <= bottom; i++) {
        matrix[i][right] = num++;
      }
      right--;
  
     
      if (top <= bottom) {
        for (let i = right; i >= left; i--) {
          matrix[bottom][i] = num++;
        }
        bottom--;
      }
  
      
      if (left <= right) {
        for (let i = bottom; i >= top; i--) {
          matrix[i][left] = num++;
        }
        left++;
      }
    }
  
    return matrix;
  }
  
  console.log(generateMatrix(3));
  