'use strict'

class Calculator {
  //write your code here
  constructor (num) {
    this._num = num
  }
  add (num) {
    this._num += num;
    return this
  }
  substract (num) {
    this._num -= num
    return this
  }
  multiply (num) {
    this._num *= num
    return this
  }
  divide (num) {
    this._num /= num
    return this
  }
  square (num = 2) { //
    this._num = Math.pow(this._num , num) //pangkat
    return this
  }
  squareRoot (num = 2) {
    this._num = Math.pow(this._num, 1/num) //akar dari hasil
    return this
  }
  roundCircle(num = 3.14){

    this._num = Math.pow(this._num, 2) * num //this process num proses di kali 2 ) * phi nya
    return this
  }
  result(){
    console.log(this._num);
    return this
  }
}

var angka = new Calculator(9)

//console.log(angka.add().result());
console.log(angka.squareRoot(2).result());
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
