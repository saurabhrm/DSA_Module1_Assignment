{
  /* <aside>
💡 **Question 8**

You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.


**Input:** coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]

**Output:** true
</aside> */
}

function checkStraightLine(coordinates) {
  const [x0, y0] = coordinates[0];

  for (let i = 1; i < coordinates.length; i++) {
    const [x, y] = coordinates[i];
    const slope = (y - y0) / (x - x0);

    if (i > 1 && slope !== prevSlope) {
      return false;
    }

    prevSlope = slope;
  }

  return true;
}

const coordinates = [
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  [6, 7],
];
const result = checkStraightLine(coordinates);
console.log(result);
