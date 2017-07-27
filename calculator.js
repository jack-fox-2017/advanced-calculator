'use strict'

class Calculator {
  //write your code here
  constructor ( number ) {
    this.number = number;
  }
  add (num) {
    this.number += num;
    return this;
  }
  substract (num) {
    this.number -= num;
    return this
  }
  multiply (num) {
    this.number *= num;
    return this
  }
  divide (num) {
    this.number /= num;
    return this
  }
  square (num) {
    this.number = Math.pow(this.number, num);
    return this
  }
  squareRoot (num ) {
    this.number = Math.sqrt(this.number, num);
    return this
  }
  piLingkaran(){
    this.number = Math.PI*this.number;
    return this
  }
}

let perhitunganCalculator = new Calculator(10);
console.log(perhitunganCalculator.add(5).substract(5).multiply(10).divide(2).square(2).squareRoot(2).piLingkaran());



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
