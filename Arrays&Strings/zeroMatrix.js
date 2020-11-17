/**
 * Zero Matrix
 * Page 91
 * 1.8
 * Write an algorithm such that if an element in an M x N matrux us 0, its entire row and column are set to 0
 * 1 1 1     0 1 1
 * 1 1 1 ==> 0 1 1
 * 0 1 1     0 0 0
 *
 * for this we would only convert all rows and columns if the original element is 0
 *
 * First approach
 * iterate through the entire matrix and find the x and y axis of all the zeros
 * iterate through it again. and if the coordinate matches the current coordinate
 * user the helper functions to change the row and column
 *
 */

function zeroMatrix(matrix) {
  let queue = [];
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        queue.push([i, j]);
      }
    }
  }

  if (!queue.length) {
    return matrix;
  }

  for (let coords of queue) {
    changeRow(coords[0], matrix);
    changeColumn(coords[1], matrix);
  }
  return matrix
}

function changeRow(xAxis, matrix) {
  for (let i = 0; i < matrix[xAxis].length; i++) {
    matrix[xAxis][i] = 0;
  }
}

function changeColumn(yAxis, matrix) {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][yAxis] = 0;
  }
}

let test1 = [
  [1, 1, 1, 1],
  [1, 1, 1, 0],
  [1, 1, 1, 1],
  [1, 0, 1, 1],
]

let sample = zeroMatrix(test1);
console.log(sample);