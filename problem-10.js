/**
 * Problem 10.
 * 
 * The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
 * Find the sum of all the primes below two million.
 */

import { isPrime } from "./helpers.js";

const number = 2000000;
const primes = [];

for (let i = 0; i < number; i++) {
    if (isPrime(i)) {
        primes.push(i);
    }
}

const primesSum = primes.reduce((x, y) => x + y, 0);

console.log(primesSum);