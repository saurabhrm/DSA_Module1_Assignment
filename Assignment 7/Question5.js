{
  /* <aside>
💡 **Question 5**

Given a string s and an integer k, reverse the first k characters for every 2k characters counting from the start of the string.

If there are fewer than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and leave the other as original.

**Example 1:**

**Input:** s = "abcdefg", k = 2

**Output:**

"bacdfeg"

</aside> */
}

function reverseStr(s, k) {
  const chars = s.split("");

  for (let i = 0; i < chars.length; i += 2 * k) {
    let start = i;
    let end = Math.min(i + k - 1, chars.length - 1);

    while (start < end) {
      const temp = chars[start];
      chars[start] = chars[end];
      chars[end] = temp;

      start++;
      end--;
    }
  }

  const result = chars.join("");
  return result;
}

const s = "abcdefg";
const k = 2;
const result = reverseStr(s, k);
console.log(result);
