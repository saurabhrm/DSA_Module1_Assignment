{
  /* <aside>
💡 **Q8.** You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.

**Example 1:**
Input: nums = [1,2,2,4]
Output: [2,3]

</aside> */
}

function findErrorNums(nums) {
  const seen = new Set();
  let duplicate = 0;
  let missing = 0;

  for (let num of nums) {
    if (seen.has(num)) {
      duplicate = num;
    }
    seen.add(num);
  }

  for (let i = 1; i <= nums.length; i++) {
    if (!seen.has(i)) {
      missing = i;
      break;
    }
  }

  return [duplicate, missing];
}

const nums = [1, 2, 2, 4];
console.log(findErrorNums(nums));
