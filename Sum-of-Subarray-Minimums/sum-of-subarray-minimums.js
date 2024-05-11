/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function(arr) {

    const mod = 1e9 + 7;
    const n = arr.length;
    const left = new Array(n).fill(-1);
    const right = new Array(n).fill(n);
    const stack = [];
    
    for (let i = 0; i < n; i++) {
        while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
            right[stack.pop()] = i;
        }
        left[i] = stack.length ? stack[stack.length - 1] : -1;
        stack.push(i);
    }
    
    let result = 0;
    for (let i = 0; i < n; i++) {
        result = (result + arr[i] * (i - left[i]) * (right[i] - i)) % mod;
    }
    
    return result;
    
};

// Testing the function
console.log(sumSubarrayMins([3,1,2,4])); // Output: 17
console.log(sumSubarrayMins([11,81,94,43,3])); // Output: 444
console.log(sumSubarrayMins([1,2,3,4,5])); // Output: 50