"use strict";

class Calculator {
    constructor(num){
        this.result = num;
    }

    Pertambahan(num){

       this.result += num;
       return this
    }
    Perkurangan(num){
       this.result -= num
       return this
    }
    Perkalian(num){
        this.result *= num
        return this
    }
    Pembagian(num){
        this.result /= num
        return this
    }

    Pangkat(num = 2)
    {
      this.result = Math.pow(this.result , num)
      return this
    }

    Akar(num = 2)
    {
      this.result = Math.sqrt(this.result , num)

      return this
    }

    Lingkaran(num = 3.14){
        this.result = Math.pow(this.result, 2) * num

        return this
    }

    Hasil(){
        console.log(this.result);
        return this
    }
  //write your code here
}

var angka = new Calculator(4)

console.log(angka.Pertambahan(4).Hasil());


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
