function arrayPairSum(nums) {
  nums.sort((a, b) => a - b);
  let totalSum = 0;
  for (let i = 0; i < nums.length; i += 2) {
    totalSum += nums[i];
  }
  return totalSum;
}