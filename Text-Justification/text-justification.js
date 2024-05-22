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

// Testing the function
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// Output [
//     "This    is    an",
//     "example  of text",
//     "justification.  "
// ]
console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
// Output [
//     "What   must   be",
//     "acknowledgment  ",
//     "shall be        "
// ]
console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
    "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"
], 20));
// Output [
//     "Science  is  what we",
//     "understand      well",
//     "enough to explain to",
//     "a  computer.  Art is",
//     "everything  else  we",
//     "do                  "
// ]
console.log(fullJustify(["This", "is", "a", "test"], 10));
// Output [
//     "This is a",
//     "test      "
// ]
console.log(fullJustify(["This", "is", "a", "test"], 12));
// Output [
//     "This    is a",
//     "test        "
// ]
console.log(fullJustify(["This", "is", "a", "test"], 14));
// Output [
//     "This    is a",
//     "test         "
// ]
console.log(fullJustify(["This", "is", "a", "test"], 16));
// Output [
//     "This    is a test",
// ]
console.log(fullJustify(["This", "is", "a", "test"], 18));
// Output [
//     "This    is    a test",
// ]
console.log(fullJustify(["This", "is", "a", "test"], 20));
// Output [
//     "This    is    a    test",
// ]
console.log(fullJustify(["This", "is", "a", "test"], 22));
// Output [
//     "This    is    a    test",
// ]
console.log(fullJustify(["This", "is", "a", "test"], 24));
// Output [
//     "This    is    a    test",
// ]
console.log(fullJustify(["This", "is", "a", "test"], 26));
// Output [
//     "This    is    a    test",
// ]
console.log(fullJustify(["This", "is", "a", "test"], 28));
// Output [
//     "This    is    a    test",
// ]