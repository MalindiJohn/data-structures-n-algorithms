// here is attached code

// function solution(A, K) {

//     var n = A.length;

//     for (var i = 0; i < n - 1; i++) {

//         if (A[i] + 1 < A[i + 1])
//             return false;

//     }
//     if (A[0] != 1 && A[n - 1] != K)

//         return false;
        
//     else
//         return true;
// }

// test cases
// For examle, given the following array A and K = 3:
// A[0] = 1
// A[1] = 1
// A[2] = 2
// A[3] = 3
// A[3] = 3

// The function should return true.

// For the following array A, and K = 2:

// A[3] = 1
// A[3] = 1
// A[3] = 3

// the function should return false.

function solution(A, K) {

    var n = A.length;
    for (var i = 0; i < n - 1; i++) {
        if (A[i] + 1 < A[i + 1])
            return false;
    }
    if (A[0] != 1 || A[n - 1] != K)
        return false;
    else
        return true;

}

// testing the function
console.log(solution([1, 2, 3, 4], 4)); // Output true
console.log(solution([1, 2, 3, 4], 5)); // Output false
console.log(solution([1, 2, 3, 4], 3)); // Output false
console.log(solution([1, 2, 3, 4], 2)); // Output false
console.log(solution([1, 2, 3, 4], 1)); // Output false
console.log(solution([1, 2, 3, 4], 6)); // Output false
console.log(solution([1, 2, 3, 4], 7)); // Output false
console.log(solution([1, 2, 3, 4], 8)); // Output false
console.log(solution([1, 1, 3], 2)); // Output false
console.log(solution([1, 1, 2, 3, 3], 3)); // Output true
