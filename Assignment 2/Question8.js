function minDifference(nums, k) {
    const n = nums.length;
    if (n <= 4) {
      return 0;
    }
  
    nums.sort((a, b) => a - b);
    const min = nums[0];
    const max = nums[n - 1];
    const diff = max - min;
  
    if (diff <= 2 * k) {
      return 0;
    }
  
    const candidateMin = min + k;
    const candidateMax = max - k;
    const candidateDiff1 = candidateMax - min;
    const candidateDiff2 = max - candidateMin;
  
    return Math.min(candidateDiff1, candidateDiff2);
  }
  