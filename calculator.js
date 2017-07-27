'use strict'

class Calculator {
  //write your code here
  constructor (nomor) {
    this.nomor = nomor
  }
  add (num) {
    this.nomor += num
    return this
  }
  substract (num) {
    this.nomor -= num
    return this
  }
  multiply (num) {
    this.nomor *= num
    return this
  }
  divide (num) {
    this.nomor /= num
    return this
  }
  square (num) {
    this.nomor = Math.pow(this.nomor, num)
    return this
  }
  squareRoot () {
    this.nomor = Math.sqrt(this.nomor)
    return this
  }

  lingkaran () {
    let phi = 3.14
    this.nomor = phi * Math.pow(this.nomor,2)
    return this
  }
}

let test = new Calculator(100)

console.log(test.add(5).substract(20).multiply(2));
// console.log(test.add(5).substract(3).multiply(100).divide(10));
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
