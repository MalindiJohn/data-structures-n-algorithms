function fullJustify(words: string[], maxWidth: number): string[] {

    const result: string[] = [];
    let line: string[] = [];
    let lineLength = 0;

    for (let i = 0; i < words.length; i++) {
        if (lineLength + words[i].length + line.length <= maxWidth) {
            line.push(words[i]);
            lineLength += words[i].length;
        } else {
            if (line.length === 1) {
                result.push(line[0] + ' '.repeat(maxWidth - lineLength));
            } else {
                const spaces = maxWidth - lineLength;
                const spacesBetweenWords = Math.floor(spaces / (line.length - 1));
                const extraSpaces = spaces % (line.length - 1);
                let lineString = '';
                for (let j = 0; j < line.length - 1; j++) {
                    lineString += line[j] + ' '.repeat(spacesBetweenWords + (j < extraSpaces ? 1 : 0));
                }
                lineString += line[line.length - 1];
                result.push(lineString);
            }
            line = [words[i]];
            lineLength = words[i].length;
        }
    }

    result.push(line.join(' ') + ' '.repeat(maxWidth - lineLength - line.length + 1));

    return result;

};

// testing the function
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// expected output: ["This    is    an", "example  of text", "justification.  "]
console.log(fullJustify(["What", "must", "be", "acknowledgment", "shall", "be"], 16));
// expected output: ["What   must   be", "acknowledgment  ", "shall be        "]
console.log(fullJustify(["Science", "is", "what", "we", "understand", "well", "enough", "to", "explain",
    "to", "a", "computer.", "Art", "is", "everything", "else", "we", "do"], 20));
// expected output: ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "]