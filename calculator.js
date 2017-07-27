'use strict'

class Calculator {

  constructor (x) {
    this.number = x
  }
  add (y = 0) {
    this.number += y
    return this
  }
  substract (y = 0) {
    this.number -= y
    return this
  }
  multiply (y = 0) {
    this.number *= y
    return this
  }
  divide (y = 0) {
    this.number /= y
    return this
  }
  square (y = 2) {
    this.number = Math.pow (this.number, y)
    return this
  }
  squareRoot (y = 2) {
    this.number = Math.sqrt(this.number)
    return this
  }
}

let calculator = new Calculator(4)
console.log(calculator.add(3).substract(10))

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
