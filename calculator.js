'use strict'

class Calculator {
  //write your code here
  constructor (number=0) {
    this._startNumber = number;
  }
  add (input) {
    this._startNumber += input;
    return this
  }
  substract (input) {
    this._startNumber -= input;
    return this
  }
  multiply (input) {
    this._startNumber *= input;
    return this
  }
  divide (input) {
    this._startNumber /= input;
    return this
  }
  square (number) {
    this._startNumber = Math.pow(this._startNumber,number);
    return this
  }
  squareRoot () {
    this._startNumber = Math.sqrt(this._startNumber);
    return this
  }

  lingkaran () {
    var pi = 3.14
    this._startNumber = 2 * pi * this._startNumber
    return this
  }

  tampilkan() {
    let i = this._startNumber
    return `hasil perhitungan: ${this._startNumber}`;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

var hitung = new Calculator();

console.log(hitung.tampilkan());
console.log(hitung.add(3).lingkaran().tampilkan());
//console.log(hitung.add(5).substract(3).multiply(100).divide(10).tampilkan());

module.exports = {
  Calculator
}
