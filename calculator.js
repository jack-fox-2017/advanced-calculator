'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this.num = num
    this.Pi = 22/7
  }

  add (num) {
    this.num += num
    return this
  }

  substract (num) {
    this.num -= num
    return this
  }

  multiply (num) {
    this.num *= num
    return this
  }

  divide (num) {
    this.num /= num
    return this
  }

  square (num) {
    let temp = this.num

    if (num == 0) {
      this.num = 1
    }
    else if (num > 1) {
      for (let i=0; i<num-1; i++) {
        this.num *= temp
      }
    }

    return this
  }

  squareRoot () {
    this.num = Math.sqrt(this.num)
    return this
  }

  luasLingkaran(jari) {
    // return new Calculator(jari).square(2).multiply(this.Pi).log()
    return new Calculator(jari).multiply(jari).multiply(this.Pi).log()
  }

  log() {
    return console.log(`Hasil hitung: ${this.num}`);
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
