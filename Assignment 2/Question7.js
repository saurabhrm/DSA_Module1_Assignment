function isMonotonic(nums) {
    let isIncreasing = true;
    let isDecreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] > nums[i - 1]) {
        isDecreasing = false;
      } else if (nums[i] < nums[i - 1]) {
        isIncreasing = false;
      }
    }
  
    return isIncreasing || isDecreasing;
  }
  