'use strict'

class Calculator {
  //write your code here
  constructor (number) {
    this.number = number;
  }
  add (num) {
    this.number += num;
    return this;
  }
  substract (num) {
    this.number -= num;
    return this;
  }
  multiply (num) {
    this.number *= num;
    return this;
  }
  divide (num) {
    this.number /= num;
    return this;
  }
  square (num) {
    this.number = Math.pow(this.number,num);
    return this;
  }
  squareRoot () {
    this.number = Math.sqrt(this.number);
    return this;
  }
  circleAreaPI () {
    this.number = Math.PI*this.number*this.number;
    return this;
  }
}

let chainingCalc = new Calculator(100);

console.log(chainingCalc.square(2).squareRoot().add(50).substract(25).multiply(10).divide(5).circleAreaPI());//196349.54084936206

// let addCalc = new Calculator(100);
// let substractCalc = new Calculator(100);
// let multiplyCalc = new Calculator(100);
// let divideCalc = new Calculator(100);
// let squareCalc = new Calculator(100);
// let sqrtCalc = new Calculator(100);


// console.log(addCalc.add(2));
// console.log(substractCalc.substract(2));
// console.log(multiplyCalc.multiply(2));
// console.log(divideCalc.divide(2));
// console.log(squareCalc.square(2));
// console.log(sqrtCalc.squareRoot());

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
