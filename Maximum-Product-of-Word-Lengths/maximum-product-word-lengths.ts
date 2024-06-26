function maxProduct(words: string[]): number {

    const n = words.length;
    const masks = new Array(n).fill(0);
    const lens = new Array(n).fill(0);

    for (let i = 0; i < n; i++) {
        const word = words[i];
        for (let j = 0; j < word.length; j++) {
            masks[i] |= 1 << (word.charCodeAt(j) - 'a'.charCodeAt(0));
        }
        lens[i] = word.length;
    }

    let maxVal = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            if ((masks[i] & masks[j]) === 0) {
                maxVal = Math.max(maxVal, lens[i] * lens[j]);
            }
        }
    }

    return maxVal;

};

// testing the function
console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"])); // expected 16
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"])); // expected 4
console.log(maxProduct(["a", "aa", "aaa", "aaaa"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm"])); // expected 0
console.log(maxProduct(["a", "ab", "abc", "abcd", "abcde", "abcdef", "abcdefg", "abcdefgh", "abcdefghi", "abcdefghij", "abcdefghijk", "abcdefghijkl", "abcdefghijklm", "abcdefghijklmn"])); // expected 0