const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const numberMatrix = [];
  for (let i = 0; i < matrix.length; i += 1) {
    numberMatrix.push(new Array(matrix[0].length).fill(0));
  }
  for (let i = 0; i < matrix[0].length; i += 1) {
    for (let j = 0; j < matrix.length; j += 1) {
      if (matrix[j][i]) {
        if (matrix[j - 1] !== undefined && matrix[j - 1][i] !== undefined) {
          numberMatrix[j - 1][i] = numberMatrix[j - 1][i] + 1;
        }
        if (matrix[j - 1] !== undefined && matrix[j - 1][i + 1] !== undefined) {
          numberMatrix[j - 1][i + 1] = numberMatrix[j - 1][i + 1] + 1;
        }
        if (matrix[j] !== undefined && matrix[j][i + 1] !== undefined) {
          numberMatrix[j][i + 1] = numberMatrix[j][i + 1] + 1;
        }
        if (matrix[j + 1] !== undefined && matrix[j + 1][i + 1] !== undefined) {
          numberMatrix[j + 1][i + 1] = numberMatrix[j + 1][i + 1] + 1;
        }
        if (matrix[j + 1] !== undefined && matrix[j + 1][i] !== undefined) {
          numberMatrix[j + 1][i] = numberMatrix[j + 1][i] + 1;
        }
        if (matrix[j + 1] !== undefined && matrix[j + 1][i - 1] !== undefined) {
          numberMatrix[j + 1][i - 1] = numberMatrix[j + 1][i - 1] + 1;
        }
        if (matrix[j] !== undefined && matrix[j][i - 1] !== undefined) {
          numberMatrix[j][i - 1] = numberMatrix[j][i - 1] + 1;
        }
        if (matrix[j - 1] !== undefined && matrix[j - 1][i - 1] !== undefined) {
          numberMatrix[j - 1][i - 1] = numberMatrix[j - 1][i - 1] + 1;
        }
      }
    }
  }
  return numberMatrix;
}

module.exports = {
  minesweeper
};
