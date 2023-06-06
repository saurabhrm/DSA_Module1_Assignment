function sortedSquares(nums) {
    const result = [];
  
    for (let i = 0; i < nums.length; i++) {
      const square = nums[i] ** 2;
      result.push(square);
    }
  
    result.sort((a, b) => a - b);
  
    return result;
  }