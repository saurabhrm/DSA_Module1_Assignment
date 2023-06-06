{/* <aside>
💡 **Q6.** Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

**Example 1:**
Input: nums = [1,2,3,1]

Output: true

</aside> */}

function containsDuplicate(nums) {
    const seen = new Set();
  
    for (let num of nums) {
      if (seen.has(num)) {
        return true;
      }
      seen.add(num);
    }
  
    return false;
  }
  

  const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums));
