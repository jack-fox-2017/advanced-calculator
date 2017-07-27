'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
var calc = new Calculator(5)
console.log(calc.add(7).getNumber());