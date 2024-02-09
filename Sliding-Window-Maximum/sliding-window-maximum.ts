function maxSlidingWindow(nums: number[], k: number): number[] {

    let result: number[] = [];
    let deque: number[] = [];

    for (let i = 0; i < nums.length; i++) {
        while (deque.length && nums[deque[deque.length - 1]] < nums[i]) {
            deque.pop();
        }
        deque.push(i);

        if (i >= k - 1) {
            result.push(nums[deque[0]]);
        }

        if (deque[0] === i - k + 1) {
            deque.shift();
        }
    }

    return result;

};

// testing the function
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3)); // expected output : [3,3,5,5,6,7]
console.log(maxSlidingWindow([1], 1)); // expected output : [1]
console.log(maxSlidingWindow([1, -1], 1)); // expected output : [1,-1]
console.log(maxSlidingWindow([9, 11], 2)); // expected output : [11]
console.log(maxSlidingWindow([4, -2], 2)); // expected output : [4]
console.log(maxSlidingWindow([7, 2, 4], 2)); // expected output : [7,4]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)); // expected output : [3,3,2,5]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 1)); // expected output : [1,3,1,2,0,5]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 6)); // expected output : [5]
console.log(maxSlidingWindow([1, 3, 1, 2, 0, 5], 0)); // expected output : []
console.log(maxSlidingWindow([], 0)); // expected output : []
console.log(maxSlidingWindow([], 1)); // expected output : []
console.log(maxSlidingWindow([1, 2, 3, 4, 5, 6, 7], 1)); // expected output : [1,2,3,4,5,6,7]
console.log(maxSlidingWindow([1, 2, 3, 4, 5, 6, 7], 7)); // expected output : [7]
console.log(maxSlidingWindow([1, 2, 3, 4, 5, 6, 7], 3)); // expected output : [3,4,5,6,7]