function canCompleteCircuit(gas: number[], cost: number[]): number {

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
console.log(canCompleteCircuit([1, 2, 3, 4, 5], [3, 4, 5, 1, 2])); // expected 3
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 2])); // expected 2
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 1])); // expected 2
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 0])); // expected 2
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 4])); // expected 0
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 5])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 6])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 7])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 8])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 9])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 10])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 11])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 12])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 13])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 14])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 15])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 16])); // expected -1
console.log(canCompleteCircuit([2, 3, 4], [3, 4, 17])); // expected -1