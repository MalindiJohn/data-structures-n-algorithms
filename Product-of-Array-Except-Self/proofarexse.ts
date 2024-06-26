function productExceptSelf(nums: number[]): number[] {

    let result: number[] = [];
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
console.log(productExceptSelf([1, 2, 3, 4])); // expected [24, 12, 8, 6]
console.log(productExceptSelf([1, 2, 3, 4, 5])); // expected [120, 60, 40, 30, 24]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6])); // expected [720, 360, 240, 180, 144, 120]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7])); // expected [5040, 2520, 1680, 1260, 1008, 840, 720]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8])); // expected [40320, 20160, 13440, 10080, 8064, 6720, 5760, 5040]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9])); // expected [362880, 181440, 120960, 90720, 72576, 60480, 51840, 45360, 40320]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // expected [3628800, 1814400, 1209600, 907200, 725760, 604800, 518400, 453600, 403200, 362880]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])); // expected [39916800, 19958400, 13305600, 9979200, 7983360, 6652800, 5702400, 4989600, 4435200, 3991680, 3628800]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])); // expected [479001600, 239500800, 159667200, 119750400, 95800320, 79833600, 68428800, 59875200, 53222400, 47880000, 43545600, 39916800]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])); // expected [6227020800, 3113510400, 2075673600, 1556755200, 1245404160, 1037836800, 889574400, 777777600, 691891200, 622702080, 566092800, 517248000, 479001600]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14])); // expected [87178291200, 43589145600, 29059430400, 21794572800, 17435658240, 14529715200, 12454041600, 10897286400, 9686476800, 8717829120, 7925291520, 7257600000, 6667920000, 6175728000]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])); // expected [1307674368000, 653837184000, 435891456000, 326918592000, 261534873600, 217945728000, 186810624000, 163459296000, 145297152000, 130767436800, 119439360000, 109734672000, 101370917120, 94143280000, 87178291200]
console.log(productExceptSelf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16])); // expected [20922789888000, 10461394944000, 6974263296000, 5230697472000, 4184557977600, 3487131648000, 2988969984000, 2615348736000, 2324754432000, 2092278988800, 1902067200000, 1743565824000, 1612431360000, 1505876870400, 1418913600000, 1344560000000]