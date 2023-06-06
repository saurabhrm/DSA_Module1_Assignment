function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    const lastProduct = nums[n - 1] * nums[n - 2] * nums[n - 3];
    const firstProduct = nums[0] * nums[1] * nums[n - 1];
    return Math.max(lastProduct, firstProduct);
  }
  