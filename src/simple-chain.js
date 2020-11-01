const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength(){
    return this.arr.length;
    // remove line with error and write your code here
  },
  addLink(value) {
    this.arr.push("( " + value + " )");
    return this;
    // remove line with error and write your code here
  },
  removeLink(position) {
    if (position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error();
    } else {
      this.arr.splice(position - 1, 1);
      return this;
    }
    // remove line with error and write your code here
  },
  reverseChain() {
    this.arr.reverse();
    return this;
    // remove line with error and write your code here
  },
  finishChain() {
    const result = this.arr.join('~~');
    this.arr = [];
    return result;
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
