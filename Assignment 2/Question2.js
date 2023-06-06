function distributeCandies(candyType) {
    const candyCount = {};
    for (let i = 0; i < candyType.length; i++) {
      const type = candyType[i];
      if (candyCount[type]) {
        candyCount[type]++;
      } else {
        candyCount[type] = 1;
      }
    }
    const uniqueTypes = Object.keys(candyCount).length;
    return Math.min(uniqueTypes, candyType.length / 2);
  }