/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let count = 0;

  while (i < g.length && j < s.length) {
    if (g[i] <= s[j]) {
      count++;
      i++;
      j++;
    } else {
      j++;
    }
  }

  return count;
};

// testing the function
console.log(findContentChildren([1, 2, 3], [1, 1])); // 1
console.log(findContentChildren([1, 2], [1, 2, 3])); // 2
console.log(findContentChildren([1, 2, 3], [3])); // 1
console.log(findContentChildren([1, 2, 3], [1, 2, 3])); // 3
console.log(findContentChildren([1, 2, 3], [3, 2, 1])); // 3
console.log(findContentChildren([1, 2, 3], [1, 2, 3, 4])); // 3
console.log(findContentChildren([1, 2, 3, 4], [1, 2, 3])); // 3
console.log(findContentChildren([1, 2, 3, 4], [1, 2, 3, 4])); // 4
console.log(findContentChildren([1, 2, 3, 4], [4, 3, 2, 1])); // 4
console.log(findContentChildren([1, 2, 3, 4], [4, 3, 2, 1, 5])); // 4
console.log(findContentChildren([1, 2, 3, 4, 5], [4, 3, 2, 1])); // 4
console.log(findContentChildren([1, 2, 3, 4, 5], [4, 3, 2, 1, 5])); // 5
console.log(findContentChildren([1, 2, 3, 4, 5], [5, 4, 3, 2, 1])); // 5
