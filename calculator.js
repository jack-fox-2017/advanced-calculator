'use strict'

class Calculator {
  //write your code here
  constructor (angka1) {
    this.hasil = angka1;
  }
  add (angka) {
    this.hasil = this.hasil + angka
    return this
  }
  substract (angka) {
    this.hasil = this.hasil - angka
    return this
  }
  multiply (angka) {
    this.hasil = this.hasil * angka
    return this;
  }
  divide (angka) {
    this.hasil = this.hasil / angka
    return this;
  }
  square (angka) {
    this.hasil = Math.pow(this.hasil,angka);
    return this;
  }
  squareRoot (angka) {
    this.hasil = Math.pow(this.hasil,(1/angka));
    return this;
  }
  luaslingkaran(angka = 3.14) {
    this.hasil = Math.pow(this.hasil,2)* angka;
    return this;
  }
  save(){
  // console.log(this.number1);
  return this;
  }
}

let doublemath = new Calculator(7)

console.log(doublemath.multiply(7).squareRoot(2).luaslingkaran());
// console.log(this.number1.add(1).luaslingkaran().result());
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
