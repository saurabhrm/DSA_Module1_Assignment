function findLHS(nums) {
    const numCount = {};
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      if (numCount[num]) {
        numCount[num]++;
      } else {
        numCount[num] = 1;
      }
    }
    let maxLength = 0;
    const keys = Object.keys(numCount);
    for (let i = 0; i < keys.length; i++) {
      const num = parseInt(keys[i]);
      if (numCount[num + 1]) {
        maxLength = Math.max(maxLength, numCount[num] + numCount[num + 1]);
      }
    }
    return maxLength;
  }
  