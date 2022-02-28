function isPrime(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0)
            return false;
    }

    return num > 1;
}

function getPrimes(quantity = 5000) {
    const primes = [];

    for (let i = 0, primeCount = 0; primeCount <= quantity; i++) {
        if (isPrime(i)) {
            primeCount++;
            primes.push(i);
        }
    }

    return primes;
}

function reverseString(str) {
    let splitString = str.split("");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join("");

    return joinArray;
}

export { isPrime, getPrimes, reverseString };