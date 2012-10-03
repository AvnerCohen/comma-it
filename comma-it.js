/*
Simplest possible solution to turn numbers into nicely comma seperated amounts:
1234.5  => 1,234.5
*/

function commaIt(number) {
	if (typeof number !== "string") return number;
	if (number.length === 0) return "0.00";
    var amount = number.split('.')[0];
    var floats = ((number.split('.')[1] || '') +'00').substr(0,2);
    var numberified = amount.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, '$1,')
        .split('').reverse().join('');
    return numberified + '.' + floats;
}

exports.commaIt = commaIt;