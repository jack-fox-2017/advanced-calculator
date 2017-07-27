'use strict'

class Calculator {
  //write your code here
  constructor (x) {
    this.angka = x;
    this.phi = 3.14;
  }
  add (y = 0) {
    this.angka += y
    return this
  }
  substract (y = 0) {
    this.angka -= y
    return this
  }
  multiply (y = 1) {
    this.angka *= 1
    return this
  }
  divide (y = 1) {
    this.angka /= y
    return this
  }
  square (y = 1) {
    this.angka = Math.pow(this.angka, y)
    return this
  }
  squareRoot () {
    this.angka = Math.sqrt(this.angka)
    return this
  }
  lingkaran (num){
    this.angka = Math.pow(num, 2) * this.phi
    return this
  }
  hasil (num) {
    return `Hasilnya : ${this.angka}`
  }

}
var hitung = new Calculator(4);

console.log(hitung.square(4).add().substract().divide().lingkaran(7).hasil());


module.exports = {
  Calculator
}
