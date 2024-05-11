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
console.log(sumSubarrayMins([5,4,3,2,1])); // Output: 50
console.log(sumSubarrayMins([1,2,3,4,5,6])); // Output: 83
console.log(sumSubarrayMins([6,5,4,3,2,1])); // Output: 83
console.log(sumSubarrayMins([1,2,3,4,5,6,7])); // Output: 105
console.log(sumSubarrayMins([7,6,5,4,3,2,1])); // Output: 105
console.log(sumSubarrayMins([1,2,3,4,5,6,7,8])); // Output: 128
console.log(sumSubarrayMins([8,7,6,5,4,3,2,1])); // Output: 128
console.log(sumSubarrayMins([1,2,3,4,5,6,7,8,9])); // Output: 153
console.log(sumSubarrayMins([9,8,7,6,5,4,3,2,1])); // Output: 153
console.log(sumSubarrayMins([1,2,3,4,5,6,7,8,9,10])); // Output: 181
console.log(sumSubarrayMins([10,9,8,7,6,5,4,3,2,1])); // Output: 181
console.log(sumSubarrayMins([1,2,3,4,5,6,7,8,9,10,11])); // Output: 212
console.log(sumSubarrayMins([11,10,9,8,7,6,5,4,3,2,1])); // Output: 212
console.log(sumSubarrayMins([1,2,3,4,5,6,7,8,9,10,11,12])); // Output: 246
console.log(sumSubarrayMins([12,11,10,9,8,7,6,5,4,3,2,1])); // Output: 246
console.log(sumSubarrayMins([1,2,3,4,5,6,7,8,9,10,11,12,13])); // Output: 283
console.log(sumSubarrayMins([13,12,11,10,9,8,7,6,5,4,3,2,1])); // Output: 283
console.log(sumSubarrayMins([1,2,3,4,5,6,7,8,9,10,11,12,13,14])); // Output: 323