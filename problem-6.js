/**
 * Problem 6.
 * 
 * The sum of the squares of the first ten natural numbers is: 1² + 2² + ... 10² = 385.
 * The square of the sum of the first ten natural numbers is: (1 + 2 + ... 10)² = 55² = 3025.
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 - 385 = 2640.
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

const quantity = 100;
let sum = 0;
let sumSquares = 0;
let result;

for (let i = 1; i <= quantity; i++) {
    sum += i;
    sumSquares += (i ** 2);
}

result = (sum ** 2) - sumSquares;

console.log(result);