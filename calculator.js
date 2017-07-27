'use strict'

class Calculator {
  //write your code here
  constructor (Num) {
    this.Num = Num
    // this.count = 0
  }
  add (num) {
    this.Num += num
    return this
  }
  substract (num) {
    this.Num -= num
    return this
  }
  multiply (num) {
    this.Num *= num
    return this
  }
  divide (num) {
    this.Num /= num
    return this
  }
  square (num) {
    this.Num = Math.pow(this.Num, num)
    return this
  }
  squareRoot () {
    this.Num = Math.sqrt(this.Num)
    return this
  }
  luasLingkaran(num){
    const Pi = 3.14
    this.Num = Pi * Math.pow(num,2)
    return this
  }
}
let count = new Calculator(2)
// console.log(count.add(4));
console.log(count.add(4).substract(2).multiply(4).divide(2).square(2).squareRoot().luasLingkaran(3));

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
