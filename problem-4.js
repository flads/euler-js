/**
 * Problem 4.
 * 
 * A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
 * Find the largest palindrome made from the product of two 3-digit numbers.
 */

import { reverseString } from './helpers.js';

const palindromicsNumbers = [];
let largestPalindromicNumber = 0;

for (let x = 999; x >= 100; x--) {
    for (let y = 999; y >= 100; y--) {
        let product = x * y;
        let productString = '' + product;
        let reverseProductString = reverseString(productString);

        if (productString === reverseProductString) {
            palindromicsNumbers.push(product);
        }

    }
}

palindromicsNumbers.forEach(item => {
    if (item > largestPalindromicNumber) {
        largestPalindromicNumber = item;
    }
})

console.log(largestPalindromicNumber);