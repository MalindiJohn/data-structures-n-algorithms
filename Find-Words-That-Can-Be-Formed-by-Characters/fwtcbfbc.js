/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function(words, chars) {

    let count = 0;
    
    for (let word of words) {
        
        let temp = chars;
        
        for (let i = 0; i < word.length; i++) {
            
            if (temp.includes(word[i])) {
                
                temp = temp.replace(word[i], '');
                
                if (i === word.length - 1) {
                    count += word.length;
                }
                
            } else {
                break;
            }
        }
    }
    
    return count;
    
};

console.log(countCharacters(["cat","bt","hat","tree"], "atach")); // 6
console.log(countCharacters(["hello","world","leetcode"], "welldonehoneyr")); // 10