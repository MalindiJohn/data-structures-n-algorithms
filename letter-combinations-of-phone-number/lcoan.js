/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {

    if (digits.length === 0) {
        return [];
    }

    const map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    };

    const result = [];

    function backtrack(index, path) {
        if (index === digits.length) {
            result.push(path);
            return;
        }

        const digit = digits[index];
        const letters = map[digit];

        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, path + letters[i]);
        }
    }

    backtrack(0, '');

    return result;
    
};

console.log(letterCombinations('23')); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations('')); // []
console.log(letterCombinations('2')); // ["a","b","c"]