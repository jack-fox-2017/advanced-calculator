'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.sum = 0;
  }
  add (num) {
    this.sum += num;
    return this;
  }
  substract (num) {
    this.sum -= num;
    return this;
  }
  multiply (num) {
    this.sum *= num;
    return this;
  }
  divide (num) {
    this.sum /= num;
    return this;
  }
  square (num) {
    this.sum = Math.pow(this.sum, num);
    return this;
  }
  squareRoot () {
    this.sum = Math.sqrt(this.sum);
    return this;
  }
  circleArea () {
    const Pi = 3.14159265358979323846;
    this.sum = Pi * Math.pow(this.sum, 2);
    return this;
  }
}

var calc = new Calculator();
// var rad = 3;
var hitung = calc.add(5).substract(3).multiply(4).divide(2).square(2).squareRoot().circleArea();
console.log(hitung);
// console.log(`Luas lingkaran dengan radius ${rad} adalah ${calc.circleArea(rad)}`);


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
