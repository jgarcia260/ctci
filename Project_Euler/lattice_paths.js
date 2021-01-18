/*
Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

How many such routes are there through a 20×20 grid?

start at matrix[0][0]
end at matrix[n-1][n-1]
*/

function createMatrix(n ,m) {
  return new Array(n).fill([].slice()).map(() => new Array(m).fill(0))
}

function latticePaths(n, m) {
  let matrix = createMatrix(n + 1, m + 1);
  console.log(matrix)
  let total = 0;
  traverseMatrix(0, 0);
  return total;


  function traverseMatrix(x, y) {
    if((x >= matrix.length) || (y >= matrix[0].length)) return
    if((x === matrix.length - 1) && (y === matrix[0].length - 1)) {
      total++;
      return
    };

    let directions = [[0, 1], [1, 0]];
    for (let [currX, currY] of directions) {
      let newX = currX + x;
      let newY = currY + y;
      traverseMatrix(newX, newY);
    }
  }
}

let sample = latticePaths(4, 2);
console.log(sample)