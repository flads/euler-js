/**
 * Problem 5.
 * 
 * 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
 * What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
 */

const limit = 250000000;
let number;

for (let x = 1; x <= limit; x++) {
    let isDivisibleBy1To20 = true;

    for (let y = 1; y <= 20; y++) {
        if (x % y !== 0) {
            isDivisibleBy1To20 = false;
        }
    }

    if (isDivisibleBy1To20 === true) {
        number = x;
        break;
    }
}

console.log(number);