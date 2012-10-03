var commaIt = require("../comma-it").commaIt;
var assert = require("assert");


//Check simplest formatting
var number = "1234";
assert.equal(commaIt(number), "1,234.00");


//Check precision support
var number1 = "1234.1234";
assert.equal(commaIt(number1), "1,234.12");

//Check multi commas
var number2 = "12341233.12";
assert.equal(commaIt(number2), "12,341,233.12");