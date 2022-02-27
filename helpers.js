function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }

    return num > 1;
}

function getFirst5000Primes() {
    const primes = [];

    for (let i = 0, primeCount = 0; primeCount <= 5000; i++) {
        if (isPrime(i)) {
            primeCount++;
            primes.push(i);
        }
    }

    return primes;
}

export { isPrime, getFirst5000Primes };