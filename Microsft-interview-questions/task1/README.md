You are given an implementation of a function 

function solution(A, K);

This function, given a non-empty array A and N integers (sorted in non-decreasing order) and integer K, checks whether numbers 1,2, ..., K (every number from 1 to K at least once) and no other numbers.

For examle, given the following array A and K = 3:
A[0] = 1
A[1] = 1
A[2] = 2
A[3] = 3
A[3] = 3

The function should return true.

For the following array A, and K = 2:

A[3] = 1
A[3] = 1
A[3] = 3

the function should return false.

The attached code is still incorrect for some inputs. Despite the errors the code may produce a correct answer for the exmaple test cases. The goal of the excercise is to find and fix the bugs in the implementation. You can modify most two lines.

Assume that:
- N and K are integers within the range [1...300,000]
- each element of array A is an integer within the range [1...1000,000,000]
- array A is sorted in non-decreasing order
in your solution fucus on correctness. The performance of your solution will not be the focus of the assessment.