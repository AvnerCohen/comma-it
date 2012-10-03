/*
Simplest possible solution to turn numbers into nicely comma seperated amounts:
1234  => 1 234

When addPrecision is set to false (or default is used = false), precision is stripped

*/

function commaIt(number, options) {
    //Set up default seperators
	addPrecision = (options && options["addPrecision"] || false);
	thousandSeperator = (options && options["thousandSeperator"] || " ");
	decimalSeperator = (options && options["decimalSeperator"] || ",");
    var replacmentRegex ='$1' + thousandSeperator;

    //Conversion to string and default return managment
	number = number.toString();
	if (number.length === 0) return "0" + decimalSeperator + "00";

    //Actual parsing of two side of the number
    var amount = number.split(decimalSeperator)[0];
    var floats = addPrecision ? (decimalSeperator + ((number.split(decimalSeperator)[1] || '') +'00').substr(0,2)) : "";
    var numberified = amount.split('').reverse().join('')
        .replace(/(\d{3}(?!$))/g, replacmentRegex)
        .split('').reverse().join('');

    return numberified + floats;
}

exports.commaIt = commaIt;