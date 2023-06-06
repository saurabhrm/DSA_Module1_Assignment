{
  /* <aside>
💡 **Question 1**

Given two strings s and t, *determine if they are isomorphic*.

Two strings s and t are isomorphic if the characters in s can be replaced to get t.

All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character, but a character may map to itself.

**Example 1:**

**Input:** s = "egg", t = "add"

**Output:** true

</aside> */
}

function isIsomorphic(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const sMap = new Map();
  const tMap = new Map();

  for (let i = 0; i < s.length; i++) {
    const sc = s[i];
    const tc = t[i];

    if (!sMap.has(sc) && !tMap.has(tc)) {
      sMap.set(sc, tc);
      tMap.set(tc, sc);
    } else if (sMap.get(sc) !== tc || tMap.get(tc) !== sc) {
      return false;
    }
  }

  return true;
}

const s = "egg";
const t = "add";
const result = isIsomorphic(s, t);
console.log(result);
