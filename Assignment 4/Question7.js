function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (let i = 0; i < ops.length; i++) {
      const [ai, bi] = ops[i];
      minRow = Math.min(minRow, ai);
      minCol = Math.min(minCol, bi);
    }
  
    return minRow * minCol;
  }