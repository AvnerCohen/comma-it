/*
Simplest possible solution to turn numbers into nicely comma seperated amounts:
1234  => 1,234


*/

function commaIt(number, addPrecision) {
	addPrecision = (addPrecision || false);
	number = number.toString();
	if (number.length === 0) return "0.00";
    var amount = number.split('.')[0];
    var floats = addPrecision ? ('.' + ((number.split('.')[1] || '') +'00').substr(0,2)) : "";
    var numberified = amount.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return numberified + floats;
}

exports.commaIt = commaIt;