/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {

    //get the largest value of nums
    // let max = Math.max(...nums);

    //to store the numbers not in nums
    let result = [];

    //convert nums to a set
    let set = new Set(nums);

    console.log(nums.length);

    //iterate from 1 to max
    for (let i = 1; i <= nums.length; i++) {

        //check if i is not in set
        if (!set.has(i)) {

            //update result
            result.push(i);
        }
    }

    //return result
    return result;
    
};

console.log(findDisappearedNumbers([1,1]));//[5,6]