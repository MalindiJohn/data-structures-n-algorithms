/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    
    let n = s.length;
    let map = new Map();
    
    for (let i = 0; i < n; i++) {
        map.set(s[i], map.get(s[i]) + 1 || 1);
    }
    
    let maxFreq = 0;
    let maxChar = '';
    
    for (let [key, value] of map) {
        if (value > maxFreq) {
            maxFreq = value;
            maxChar = key;
        }
    }
    
    if (maxFreq > Math.floor((n + 1) / 2)) {
        return '';
    }
    
    let result = new Array(n);
    let index = 0;
    
    while (map.get(maxChar) > 0) {
        result[index] = maxChar;
        index += 2;
        map.set(maxChar, map.get(maxChar) - 1);
    }
    
    for (let [key, value] of map) {
        while (value > 0) {
            if (index >= n) {
                index = 1;
            }
            result[index] = key;
            index += 2;
            value--;
        }
    }
    
    return result.join('');

};

// testing the function
console.log(reorganizeString("aab")); // expected "aba"
console.log(reorganizeString("aaab")); // expected ""
console.log(reorganizeString("vvvlooo")); // expected "looovvv