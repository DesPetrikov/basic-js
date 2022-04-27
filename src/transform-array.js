const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(arr instanceof Array)) {
    throw new Error(`'arr' parameter must be an instance of the Array!`);
  }
  const newArr = [...arr];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i] === '--discard-next') {
      if(i === newArr.length - 1) continue
      newArr.splice(i + 1, 1);
    }
    if (newArr[i] === '--discard-prev') {
      if(i === 0) continue
      newArr.splice(i - 1, 1);
    }
    if (newArr[i] === '--double-next') {
      if(i === newArr.length - 1) continue
      newArr.splice(i, 0, newArr[i + 1]);
      i++;
      
    }
    if (newArr[i] === '--double-prev') {
      if(i === 0) continue
      newArr.splice(i - 1, 0, newArr[i - 1]);
      i++;
    }
  }
  return newArr.filter((el) => (el !== '--double-prev' && el !== '--double-next' && el !== '--discard-prev' && el !== '--discard-next' ));
}

module.exports = {
  transform
};
