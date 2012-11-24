Comma-It.js
===========

[![Build status](https://travis-ci.org/AvnerCohen/comma-it.png)](https://travis-ci.org/AvnerCohen/comma-it)

Tiny module to turn numbers into a more readble amounts by adding commas:
> 1234.5  => 1,234.50


```js
commaIt( '12341233,12', {addPrecision:true}), '12 341 233,12'
```

Custom seperators:

```js
commaIt('12341233.12', {addPrecision:true, thousandSeperator : ',', decimalSeperator : '.'}); // => 12,341,233.12'
```


At some point in time it's very easy to add support for multiple precisions and setup for precision and thousands seperator char, these are different in different parts of the world ofcourse.

[@avnerner](https://www.twitter.com/avnerner "@avnerner")


