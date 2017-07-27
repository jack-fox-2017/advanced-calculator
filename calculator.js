'use strict'

class Calculator {
  //write your code here
  constructor (number = 1) {
    this.number = number
  }
  add (num = 0) {
    this.number += num 
    return this
  }
  substract (num = 0) {
    this.number -= num
    return this
  }
  multiply (num = 1) {
    this.number *= num
    return this
  }
  divide (num = 1) {
    this.number /= num
    return this
  }
  square () {
    this.number *= this.number
    return this
  }
  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }
  luasLingkaran () {
    this.number = Math.PI * this.square().number
    return this
  }
  pangkat (num) {
    this.number = Math.pow(this.number, num)
    return this
  }
  getNumber () {
    return this.number
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
