/**
 * Problem 3.
 * 
 * The prime factors of 13195 are 5, 7, 13 and 29.
 * What is the largest prime factor of the number 600851475143 ?
 */
const primeFactors = [], primes = [];
let number = 600851475143;

function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }

    return num > 1;
}

for (let i = 0, primeCount = 0; primeCount <= 5000; i++) {
    if (isPrime(i)) {
        primeCount++;
        primes.push(i);
    }
}

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