/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {

    let result = [];
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] = product;
        product *= nums[i];
    }
    product = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= product;
        product *= nums[i];
    }
    return result;
    
};

// testing the function
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24, 12, 8, 6]

nums = [1, 2, 3, 4, 5];
console.log(productExceptSelf(nums)); // [120, 60, 40, 30, 24]

nums = [1, 2, 3, 4, 5, 6];
console.log(productExceptSelf(nums)); // [720, 360, 240, 180, 144, 120]

nums = [1, 2, 3, 4, 5, 6, 7];
console.log(productExceptSelf(nums)); // [5040, 2520, 1680, 1260, 1008, 840, 720]

nums = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(productExceptSelf(nums)); // [40320, 20160, 13440, 10080, 8064, 6720, 5760, 5040]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(productExceptSelf(nums)); // [362880, 181440, 120960, 90720, 72576, 60480, 51840, 45360, 40320]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(productExceptSelf(nums)); // [3628800, 1814400, 1209600, 907200, 725760, 604800, 518400, 453600, 403200, 362880]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
console.log(productExceptSelf(nums)); // [39916800, 19958400, 13305600, 9979200, 7983360, 6652800, 5702400, 4989600, 4435200, 3991680, 3628800]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
console.log(productExceptSelf(nums)); // [479001600, 239500800, 159667200, 119750400, 95800320, 79833600, 68428800, 59875200, 53222400, 47900160, 43545600, 39916800]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
console.log(productExceptSelf(nums)); // [6227020800, 3113510400, 2075673600, 1556755200, 1245404160, 1037836800, 889574400, 777609600, 691891200, 622702080, 566092800, 518918400, 479001600]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
console.log(productExceptSelf(nums)); // [87178291200, 43589145600, 29059430400, 21794572800, 17435658240, 14529715200, 12454041600, 10897286400, 9686476800, 8717829120, 7925291520, 7257600000, 6688604160, 6227020800]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(productExceptSelf(nums)); // [1307674368000, 653837184000, 435891456000, 326918592000, 261534873600, 217945728000, 186810624000, 163459296000, 145297152000, 130767436800, 119668388000, 110581168000, 103783680000, 97994880000, 87178291200]

nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
console.log(productExceptSelf(nums)); // [20922789888000, 10461394944000, 6974263296000, 5230697472000, 4184557977600, 3487131648000, 2988969984000, 2615348736000, 2324754432000, 2092278988800, 1903525328000, 1743565824000, 1609445376000, 1494484992000, 1396755360000, 1307674368000]