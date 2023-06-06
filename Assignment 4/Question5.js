function arrangeCoins(n) {
    let rows = 0;
    let totalCoins = 0;
  
    for (let i = 1; totalCoins + i <= n; i++) {
      rows++;
      totalCoins += i;
    }
  
    return rows;
  }