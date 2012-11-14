var commaIt = require('../comma-it').commaIt;
var assert = require('assert');


var zero = '0';
assert.equal(commaIt(zero), '0');

//## Without precision
//Check simplest formatting
var number = '1234';
assert.equal(commaIt(number), '1 234');


//Check precision support
var number1 = '1234,1234';
assert.equal(commaIt(number1), '1 234');

//Check multi commas
var number2 = '12341233,12';
assert.equal(commaIt(number2), '12 341 233');

//### With Precision support
//Check simplest formatting
var number = '1234';
assert.equal(commaIt(number, {addPrecision:true}), '1 234,00');


//Check precision support
var number1 = '1234,1234';
assert.equal(commaIt(number1, {addPrecision:true}), '1 234,12');

//Check multi commas
var number2 = '12341233,12';
assert.equal(commaIt(number2, {addPrecision:true}), '12 341 233,12');


//## Checking non default seperators
//Check > 10000 (multi thousdand seperator)
var number2 = '12341233.12';
assert.equal(commaIt(number2, {addPrecision:true, thousandSeperator : ',', decimalSeperator : '.'}), '12,341,233.12');


console.log('testing done');

