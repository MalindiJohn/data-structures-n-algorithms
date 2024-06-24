// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, B) {
    // Implement your solution here
    // 1. Assume that both A and B can be split into 4 parts
    const tempA = Math.floor(Number(A / 4));
    const tempB = Math.floor(Number(B / 4));

    return tempA + tempB;
}

  // console.log(solution(10, 21)); // returns 7
  // console.log(solution(13, 11)); // returns 5
  // console.log(solution(2, 1)); // returns 0
  console.log(solution(1, 8)); // returns 2