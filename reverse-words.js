/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {

    //split s by space
    let arr = s.split(" ");

    console.log(arr);
    
    // reverse each word
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i].split("").reverse().join("");
    }
    
    //join arr by space
    return arr.join(" ");
    
};

console.log(reverseWords("Let's take LeetCode contest"));//"blue is sky the"