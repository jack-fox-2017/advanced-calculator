'use strict'

class Calculator {
  //write your code here
  constructor (angka) {
    this.hasil = angka;
  }
  add (angka = 1) {
    this.hasil += angka;
    return this
  }
  substract (angka = 1) {
    this.hasil -= angka;
    return this
  }
  multiply (angka = 1) {
    this.hasil *= angka;
    return this
  }
  divide (angka = 1) {
    this.hasil /= angka;
    return this
  }
  square (angka = 1) {
    this.hasil = Math.pow(this.hasil, angka);
    return this
  }
  squareRoot () {
    this.hasil = Math.sqrt(this.hasil);
    return this
  }
}

let kalkulator = new Calculator(2)


console.log(kalkulator.add(21).substract(3).multiply(3).divide(2).square(2).squareRoot());
// console.log(kalkulator.add(21).squareRoot());
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
