function search(nums, target) {
    let left = 0;
    let right = nums.length - 1;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
  
      if (nums[mid] === target) {
        return mid;
      } else if (nums[mid] > target) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  
    return -1;
  }
  Let's test the example given:
  
  javascript
  Copy code
  const nums = [-1, 0, 3, 5, 9, 12];
  const target = 9;
  console.log(search(nums, target)); // Output: 4
  The output is 4, which matches the expected result.
  
  The time complexity of this algorithm is O(log n) because with each iteration, the search range is halved, resulting in a logarithmic time complexity.
  
  
  
  
  
  
  