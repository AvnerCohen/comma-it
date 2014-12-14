// Simplest possible solution to turn numbers into nicely  seperated amounts:
// 1234  => 1 234
// When precision option defined number of precision to keep, defaults to 2

module.exports = function commaIt(num, options) {
    //Conversion to string and default return managment
    number = num.toString();
    if(number.length === 0) return '0' + decimalSeperator + '00';

    var negativeSign = '';
    if (number.indexOf('-') === 0) {
        number = number.replace('-', '');
        negativeSign = '-';
    }

    //Set up default seperators
    precision = (options && typeof options['precision'] !== 'undefined' ) ? parseInt(options['precision'], 10) : 2;
    thousandSeperator = (options && options['thousandSeperator']) || ' ';
    decimalSeperator = (options && options['decimalSeperator']) || ',';
    var replacmentRegex = '$1' + thousandSeperator;

    //Actual parsing of two side of the number
    var amount = number.split(decimalSeperator)[0];
    var floats = (precision > 0) ? (decimalSeperator + ((number.split(decimalSeperator)[1] || '') + '00').substr(0, precision)) : '' ;
    var numberified = amount.split('').reverse().join('').replace(/(\d{3}(?!$))/g, replacmentRegex).split('').reverse().join('');

    return negativeSign + numberified + floats;
};
