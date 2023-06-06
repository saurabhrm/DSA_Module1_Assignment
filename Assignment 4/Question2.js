function findDistinct(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const distinctNums1 = [...set1].filter((num) => !set2.has(num));
    const distinctNums2 = [...set2].filter((num) => !set1.has(num));
  
    return [distinctNums1, distinctNums2];
  }