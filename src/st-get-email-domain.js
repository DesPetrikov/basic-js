import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  const revStr = email.split('').reverse().join('')
  const regExp = /[\S]{0,}?@/;
  const withAt = revStr.match(regExp).toString();
  return  withAt.split('').reverse().join('').slice(1)

}

