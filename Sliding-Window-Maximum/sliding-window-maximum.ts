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