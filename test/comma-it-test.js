var commaIt = require('../comma-it');
var assert = require('assert');


var zero = '0';
assert.equal(commaIt(zero, {precision: 0}), '0');

//## Without precision
//Check simplest formatting
var number = '1234';
assert.equal(commaIt(number, {precision: 0}), '1 234');


//Check precision support
var number1 = '1234,1234';
assert.equal(commaIt(number1, {precision: 0}), '1 234');

//Check multi commas
var number2 = '12341233,12';
assert.equal(commaIt(number2, {precision: 0}), '12 341 233');

//### With Precision support
//Check simplest formatting
var number = '1234';
assert.equal(commaIt(number), '1 234,00');


//Check precision support
var number1 = '1234,1234';
assert.equal(commaIt(number1), '1 234,12');

//Check multi commas
var number2 = '12341233,12';
assert.equal(commaIt(number2), '12 341 233,12');


//## Checking non default seperators
//Check > 10000 (multi thousdand seperator)
var number2 = '12341233.12';
assert.equal(commaIt(number2, {thousandSeperator : ',', decimalSeperator : '.'}), '12,341,233.12');

//Default rounding should be to 2 decimal digits
var number2 = '12341233.1256';
assert.equal(commaIt(number2, {decimalSeperator : '.'}), '12 341 233.12');

//Rounding should be configurable
var number2 = '12341233.1256';
assert.equal(commaIt(number2, {precision: 4, decimalSeperator : '.'}), '12 341 233.1256');

//Support for Negative numbers with thousdand seperator
assert.equal(commaIt('-140000', {thousandSeperator:',', decimalSeperator: '.'}), '-140,000.00');

console.log('testing done');

