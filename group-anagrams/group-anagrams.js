/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let map = new Map();
    
    for (let str of strs) {
        let key = [...str].sort().join('');
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(str);
    }
    
    return [...map.values()];
    
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]
console.log(groupAnagrams([""])); // [[""]]
console.log(groupAnagrams(["a"])); // [["a"]]