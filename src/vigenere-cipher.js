import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  constructor(type = true) {
    this.type = type;
  }
  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const kf = Math.ceil(message.length / key.length);
    key = key.repeat(kf).split('');
    for (let i = 0; i < message.length; i++) {
      const element = message[i];
      if (element === ' ') {
        key.splice(i, 0, ' ');
      }
    }
    key = key.join('');

    const codeA = 'A'.charCodeAt(0); //65
    const alphabetLength = 26;

    const result = [];
    for (let i = 0; i < message.length; i++) {
      const element = message[i].toUpperCase();
      if (
        element.charCodeAt(0) < codeA ||
        element.charCodeAt(0) > codeA + alphabetLength
      ) {
        result.push(element);
      } else {
        const letterIdx = element.charCodeAt(0) - codeA;
        const shift = key.toUpperCase().charCodeAt(i) - codeA;

        result.push(
          String.fromCharCode(codeA + ((letterIdx + shift) % alphabetLength))
        );
      }
    }
    return this.type ? result.join('') : result.reverse().join('');
  }
  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    const kf = Math.ceil(message.length / key.length);
    key = key.repeat(kf).split('');
    for (let i = 0; i < message.length; i++) {
      const element = message[i];
      if (element === ' ') {
        key.splice(i, 0, ' ');
      }
    }
    key = key.join('');

    const codeA = 'A'.charCodeAt(0); //65
    const alphabetLength = 26;

    const result = [];
    for (let i = 0; i < message.length; i++) {
      const element = message[i].toUpperCase();
      if (
        element.charCodeAt(0) < codeA ||
        element.charCodeAt(0) > codeA + alphabetLength
      ) {
        result.push(element);
      } else {
        const letterIdx = element.charCodeAt(0) - codeA;
        const shift = key.toUpperCase().charCodeAt(i) - codeA;

        result.push(
          String.fromCharCode(
            codeA + ((letterIdx - shift + alphabetLength) % alphabetLength)
          )
        );
      }
    }
    return this.type ? result.join('') : result.reverse().join('');
  }
}
