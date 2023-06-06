{/* <aside>
💡 **Question 3**

Given an integer array nums sorted in **non-decreasing** order, return *an array of **the squares of each number** sorted in non-decreasing order*.

**Example 1:**

**Input:** nums = [-4,-1,0,3,10]

**Output:** [0,1,9,16,100]

**Explanation:** After squaring, the array becomes [16,1,0,9,100].

After sorting, it becomes [0,1,9,16,100].

</aside> */}

function sortedSquares(nums) {
    const squaredNums = [];
    
    for (let i = 0; i < nums.length; i++) {
      squaredNums.push(nums[i] * nums[i]);
    }
    
    squaredNums.sort((a, b) => a - b);
    
    return squaredNums;
  }
  
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result);
  