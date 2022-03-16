import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let maxDepth = 1;
    for (let i = 0; i < arr.length; i++) {
      let current = 1;
      if (arr[i] instanceof Array) {
        current += this.calculateDepth(arr[i]);;
      }
      if (current > maxDepth) {
        maxDepth = current;
      }
    }
    return maxDepth;
  }
}