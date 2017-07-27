'use strict'

class Calculator {
  //write your code here

  constructor (angkaPertama) {

    this.hasil = angkaPertama;

  }

  add (hasil) {

    this.hasil = hasil + this.hasil

      return this;

  }

  substract (hasil) {

    this.hasil = this.hasil - hasil

      return this;

  }

  multiply (hasil) {

    this.hasil = this.hasil * hasil

      return this;
  }

  divide (hasil) {

      this.hasil = this.hasil / hasil

        return this;
  }

  square (hasil) {

    this.hasil = Math.pow(this.hasil, hasil)

      return this;

  }
  squareRoot () {

    this.hasil = Math.sqrt(this.hasil)

      return this;
  }
  circle (){

      this.hasil = Math.PI*this.hasil*this.hasil

        return this;

  }

}
var masukanAngka = new Calculator(100)
//masukanAngka.substract(2)
console.log(masukanAngka.square(2).squareRoot().add(50).substract(25).multiply(10).divide(5).circle());
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
