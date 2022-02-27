/**
 * Problem 3.
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
import { getFirst5000Primes } from "./helpers.js";

const primeFactors = [];
const primes = getFirst5000Primes();
let number = 600851475143;

while (number != 1) {
    for (let i = 0; i <= 6857; i++) {
        let prime = primes[i];

        if (number % prime === 0) {
            number = number / prime;
            primeFactors.push(prime);
            break;
        }
    }
}

console.log(primeFactors);