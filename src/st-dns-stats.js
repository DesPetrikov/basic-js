import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const arr = [];
  const obj = {};
  const separatedArr = domains.map((el) => el.split('.'));
  for (let i = 0; i < separatedArr.length; i += 1) {
    let string = '';
    for (let j = separatedArr[i].length - 1; j >= 0; j -= 1) {
      string += `.${separatedArr[i][j]}`;
      arr.push(string);
    }
  }
  for (let i = 0; i < arr.length; i += 1) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  return obj;
}
