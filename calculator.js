'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }

  add (penambahan) {
    this.number += penambahan
    return this
  }
  substract (pengurangan) {
    this.number -= pengurangan
    return this
  }
  multiply (perkalian) {
    this.number *= perkalian
    return this
  }
  divide (pembagian) {
    this.number /= pembagian
    return this
  }
  square (pangkat) {
    this.number = Math.pow(this.number, pangkat)
    return this
  }
  squareRoot (akarPangkat) {
    this.number = Math.sqrt(this.number,akarPangkat)
    return this
  }
  lingkaran (luasLingkaran) {
    this.number = Math.PI*this.number
    return this
  }

}

var global = new Calculator(4)
// console.log(global.add(9).substract(1));
console.log(global.add(4).substract(2).multiply(1).divide(6).square(7).squareRoot(4).lingkaran(12))


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
