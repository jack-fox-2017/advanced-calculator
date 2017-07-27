'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number
  }

  add (num) {
    this.number = this.number +  num
    return this
  }

  substract (num) {
    this.number = this.number -  num
    return this
  }

  multiply (num) {
    this.number = this.number *  num
    return this
  }

  divide (num) {
    this.number = this.number / num
    return this
  }

  square (num) {
   this.number = Math.pow(this.number, num)


   return this
  }

  squareRoot () {
    this.number = Math.sqrt(this.number)
    return this
  }

  circle (num){
    this.number = (Math.pow(this.number, 2)) * Math.PI
    return this
  }
}

/** note : you can use several features from ecmascript, such as:
* - Classes
* - Default Parameters
* - Destructured Assignment
* - Template Literals
* - Method Chaining
*/
var angka = new Calculator(7)

// console.log(angka.add(1).substract(2).multiply(4).divide(5).square(4).squareRoot(5).circle(8));
console.log("================================================");
// console.log(angka.add(3));
// console.log(angka.substract(3));
// console.log(angka.multiply(3));
// console.log(angka.divide(3));
// console.log(angka.square(2));
// console.log(angka.squareRoot(9));
console.log(angka.circle());
module.exports = {
  Calculator
}
