function minProductSum(nums1, nums2) {
    nums1.sort((a, b) => a - b); // Sort nums1 in ascending order
    nums2.sort((a, b) => b - a); // Sort nums2 in descending order
  
    let minSum = 0;
    const n = nums1.length;
    for (let i = 0; i < n; i++) {
      minSum += nums1[i] * nums2[i];
    }
  
    return minSum;
  }