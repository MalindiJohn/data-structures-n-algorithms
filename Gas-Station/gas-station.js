/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {

    let totalGas = 0;
    let totalCost = 0;
    let tank = 0;
    let start = 0;

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i];
        totalCost += cost[i];
        tank += gas[i] - cost[i];

        if (tank < 0) {
            start = i + 1;
            tank = 0;
        }
    }

    return totalGas < totalCost ? -1 : start;
    
};

// testing the function
console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])); // 3
console.log(canCompleteCircuit([2,3,4], [3,4,3])); // -1
console.log(canCompleteCircuit([2,3,4], [3,4,2])); // 2
console.log(canCompleteCircuit([2,3,4], [3,4,1])); // 1
console.log(canCompleteCircuit([2,3,4], [3,4,0])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-1])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-2])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-3])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-4])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-5])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-6])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-7])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-8])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-9])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-10])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-11])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-12])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-13])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-14])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-15])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-16])); // 0
console.log(canCompleteCircuit([2,3,4], [3,4,-17])); // 0