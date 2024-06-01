function containsDuplicate(nums: number[]): boolean {

    let set = new Set();

    for (let num of nums) {
        if (set.has(num)) {
            return true;
        }
        set.add(num);
    }

    return false;

};

// testing the function
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true
console.log(containsDuplicate([1])); // false
console.log(containsDuplicate([])); // false
console.log(containsDuplicate([1, 2])); // false
console.log(containsDuplicate([1, 1])); // true
console.log(containsDuplicate([1, 2, 1])); // true
console.log(containsDuplicate([1, 2, 2])); // true
console.log(containsDuplicate([1, 1, 2])); // true
console.log(containsDuplicate([1, 2, 3])); // false
console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])); // true