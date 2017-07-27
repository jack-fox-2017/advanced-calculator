'use strict'

class Calculator {
  //write your code here
  constructor () {
    this.result = 0;  // why 0
  }
  add(x) {
    this.result = this.result  + x;
    return this; //kalo this => kluarin "this.result = 2"
    // klo return this.result = cuma keluar "2"
  }
  substract(x) {
    this.result = this.result  - x;
    return this;
  }
  multiply(x) {
    this.result = this.result  * x;
    return this;

  }
  divide(x) {
    this.result = this.result / x;
    return this;
  }
  square(x) {
    this.result = Math.pow(this.result , x);
    return this;
  }
  squareRoot() {
    this.result = Math.sqrt(this.result);
    return this;
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/

let calc = new Calculator();
console.log(calc.add(2));// 2

module.exports = {
  Calculator
}
