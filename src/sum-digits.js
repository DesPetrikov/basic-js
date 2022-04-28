const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let str = String(n);
  let sum1 =  [...str].reduce((prev, cur) => +prev + +cur);
  if (sum1 >= 10){
    sum1 = String(sum1);
    sum1 = [...sum1].reduce((prev,cur) => +prev + +cur);
  }
  return sum1
}

module.exports = {
  getSumOfDigits
};