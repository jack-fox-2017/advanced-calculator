'use strict'

const {Calculator} = require("./calculator.js")

// execute function on calculator.js in here
let calc = new Calculator();
console.log(calc.add(9).divide(3).equal());
