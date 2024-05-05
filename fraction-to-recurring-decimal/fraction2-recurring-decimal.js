/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
var fractionToDecimal = function(numerator, denominator) {

    if (numerator === 0) {
        return '0';
    }

    var result = '';
    if (numerator < 0 ^ denominator < 0) {
        result += '-';
    }

    var num = Math.abs(numerator);
    var den = Math.abs(denominator);

    result += Math.floor(num / den);
    num %= den;

    if (num === 0) {
        return result;
    }

    result += '.';
    var map = {};
    map[num] = result.length;

    while (num !== 0) {
        num *= 10;
        result += Math.floor(num / den);
        num %= den;

        if (map[num] !== undefined) {
            var index = map[num];
            result = result.substring(0, index) + '(' + result.substring(index) + ')';
            break;
        } else {
            map[num] = result.length;
        }
    }

    return result;
    
};

//testing the function
console.log(fractionToDecimal(1, 2)); // "0.5"
console.log(fractionToDecimal(2, 1)); // "2"
console.log(fractionToDecimal(2, 3)); // "0.(6)"