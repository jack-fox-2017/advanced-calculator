'use strict'

class Calculator {
  //write your code here
  constructor(consNum) {
    this.consNum = consNum;
  }
  add(addNum) {
    this.consNum += addNum
    return this
  }
  substract(substractNum) {
    this.consNum -= substractNum
    return this
  }
  multiply(multiplyNum) {
    this.consNum *= multiplyNum
    return this
  }
  divide(divideNum) {
    this.consNum /= divideNum
    return this
  }
  square(squareNum) {
    this.consNum = Math.pow(this.consNum, squareNum)
    return this
  }
  squareRoot() {
    this.consNum = Math.sqrt(this.consNum)
    return this
  }

  luasLingkaran() {
    const phi = 3.14;
    const phi2 = 22 / 7;
    if (this.consNum % 7 == 0) {
      this.consNum = phi2 * Math.pow(this.consNum, 2)

    }
    else {
      this.consNum = phi * Math.pow(this.consNum, 2)
    }
    return this
  }

}

let calculator = new Calculator(4)
console.log(calculator.add(3)
  .substract(1)
  .square(2)
  .squareRoot()
  .luasLingkaran());

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
