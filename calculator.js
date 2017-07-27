'use strict'

class Calculator {
  //write your code here
  constructor (hasil,nilai2) {
    this.hasil = hasil;
    //this.nilai2 = nilai2;
  }
  add (nilai2) {
    this.hasil = this.hasil + nilai2
    return this
  }
  substract (nilai3) {
    this.hasil = this.hasil - nilai3
    return this
  }
  multiply (nilai4) {
    this.hasil = this.hasil * nilai4
    return this
  }
  divide (nilai5) {
    this.hasil = this.hasil / nilai5
    return this
  }
  square (nilaiPangkat) {
    this.hasil = Math.pow(this.hasil,2)
    return this
  }
  squareRoot () {
    this.hasil = Math.sqrt(this.hasil);
    return this
  }
  luasLingkaran() {
    this.hasil = (this.hasil*this.hasil)*Math.PI
    return this
  }
  samaDengan(){
    return "jawaban nya adalah " + this.hasil
  }
}

let ari = new Calculator(9)

console.log(ari.add(2).substract(2).multiply(2).divide(2).squareRoot().square().luasLingkaran().samaDengan());
//
// console.log(ari.square(9,3));
//
// console.log(ari.luasLingkaran(10));

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
