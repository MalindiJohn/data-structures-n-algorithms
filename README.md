# Sum of Two Integers
Given two integers a and b, return the sum of the two integers without using the operators + and -.

 

# Example 1:

Input: a = 1, b = 2
Output: 3

# Example 2:

Input: a = 2, b = 3
Output: 5
 

# Constraints:

-1000 <= a, b <= 10007

## More Info

Certainly! Bitwise XOR (^) and bitwise AND (&) are two fundamental bitwise operators used in computer programming. Here's how they work:

# Bitwise XOR (^):

The bitwise XOR operator compares corresponding bits of two operands. The result of the operation is 1 if the bits are different, and 0 if they are the same.

# For example:
0 ^ 0 = 0
0 ^ 1 = 1
1 ^ 0 = 1
1 ^ 1 = 0

Bitwise XOR is often used for toggling bits and performing encryption algorithms.


# Bitwise AND (&):

The bitwise AND operator compares corresponding bits of two operands. The result of the operation is 1 only if both bits are 1; otherwise, it is 0.

# For example:
```
0 & 0 = 0
0 & 1 = 0
1 & 0 = 0
1 & 1 = 1
```

Bitwise AND is commonly used for masking, setting specific bits to 0, and checking the presence of flags.
Now, let's look at a practical example of how these operators are used together to perform addition without using the + operator:

# plaintext
```
a = 1 (binary: 001)
b = 2 (binary: 010)
```

# Iteration 1:
*a: 001
*b: 010
*Calculate the carry: carry = a & b = 000
*Calculate the sum without carry: a = a ^ b = 011
*Shift the carry left by one position: b = carry << 1 = 000

# Iteration 2:
*a: 011
*b: 000
*Calculate the carry: carry = a & b = 000
*Calculate the sum without carry: a = a ^ b = 011
*Shift the carry left by one position: b = carry << 1 = 000

Since there's no carry left after the second iteration, the result is a = 011, which is equal to 3 in decimal notation.