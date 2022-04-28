const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const variantes = []
  const arr = n
    .toString()
    .split('')
    .map((el) => +el);
  for (let i = 0; i < arr.length; i++) {
   const variant = [...arr]
    variant.splice(i, 1)
    variantes.push(variant.join(''))
  }
  return Math.max(...variantes)
}

module.exports = {
  deleteDigit
};

 
