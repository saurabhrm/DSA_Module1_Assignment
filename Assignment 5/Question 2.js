{/* <aside>
💡 **Question 2**

You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase **may be** incomplete.

Given the integer n, return *the number of **complete rows** of the staircase you will build*.

</aside>

**Input:** n = 5

**Output:** 2

**Explanation:** Because the 3rd row is incomplete, we return 2. */}

function countCompleteRows(n) {
    let row = 1;
    
    while (n >= row) {
      n -= row;
      row++;
    }
    
    return row - 1;
  }
  
  // Example usage:
  const n = 5;
  const result = countCompleteRows(n);
  console.log(result);
  