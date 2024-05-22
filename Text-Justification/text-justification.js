/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {

    let result = [];
    let n = words.length;
    let i = 0;
    
    while (i < n) {
        let j = i + 1;
        let lineLength = words[i].length;
        
        while (j < n && lineLength + words[j].length + j - i <= maxWidth) {
            lineLength += words[j].length;
            j++;
        }
        
        let diff = j - i - 1;
        let line = words[i];
        
        if (j === n || diff === 0) {
            for (let k = i + 1; k < j; k++) {
                line += ' ' + words[k];
            }
            while (line.length < maxWidth) {
                line += ' ';
            }
        } else {
            let spaces = (maxWidth - lineLength) / diff;
            let extraSpaces = (maxWidth - lineLength) % diff;
            for (let k = i + 1; k < j; k++) {
                for (let s = 0; s < spaces; s++) {
                    line += ' ';
                }
                if (extraSpaces > 0) {
                    line += ' ';
                    extraSpaces--;
                }
                line += words[k];
            }
        }
        
        result.push(line);
        i = j;
    }
    
    return result;
    
};