There are two candy shops, both of which have N candies for sale. The first shop sells each candy for one golden coin; the second shop sells each candy for one silver coin. You have N/2 golden coins and N/2 silver ones (N is even).

Each candy is of some particular type (not necessarily unique), represented by an integer. What is the maximum number of different types of candy that you can buy?

write a function:

function solution(A, B);

that, given two arrays A and B of N integers, representing types of candies in the first and second shop respectively, returns the maximum possible number of different types of candy that you can by.

for example, given
A = [1, 2, 3, 4]
B = [3, 3, 3, 7]

the function should retun 4. You can, for example, buy candies of types 1,2 in the first shop and then candies of types 3,7 in the second shop.

given 
A = [2, 2, 2, 2, 2, 2]
B = [7, 4, 2, 5, 1, 2]

the function should return $. In the first shop you can only buy candies of type 2, but then you can buy three candies of other types (for examples, 7, 4 and 5) in the second shop.

Write an efficient algorithm for the following:

- N is an integer within range [2...100,000]
- N is even
- each element of arrays A and B is an integer within range [1...1000,000,000]