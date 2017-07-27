'use strict'

class Calculator {
  //write your code here
  constructor (num=0) {
    this.num = num;
  }
  add (input) {
    this.num = this.num + input;
    return this;
  }
  substract (input) {
    this.num = this.num - input;
    return this;
  }
  multiply (input) {
    this.num = this.num * input;
    return this;
  }
  divide (input) {
    this.num = this.num / input;
    return this;
  }
  square (input){
    this.num = Math.pow(this.num, input);
    return this;
  }
  squareRoot (input) {
    this.num = Math.sqrt(this.num);
    return this;
  }
  equal() {
    return this.num;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

module.exports = {
  Calculator
}
