import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 *
 */
export default {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '') {
    this.chain.push(String(value));
    return this;
  },
  removeLink(position) {
    if(position <= 0 || !Number.isInteger(position) || typeof position !== 'number' || position > this.chain.length) {
      this.chain = []
      throw new Error("You can't remove incorrect link!")
    }
    this.chain.splice(position - 1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    const copy = [...this.chain];
    this.chain = []
    return `( ${copy.join(' )~~( ')} )`
  },
};
