/**
 * Problem 9.
 * 
 * A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
 * a2 + b2 = c2
 * For example, 32 + 42 = 9 + 16 = 25 = 52.
 * 
 * There exists exactly one Pythagorean triplet for which a + b + c = 1000.
 * Find the product abc.
 */

function main() {
    const number = 144;

    for (let x = 1; x < number; x++) {
        for (let y = 1; y < number; y++) {
            for (let z = 1; z < number; z++) {
                if ((x + y + z) == number && ((x ** 2) + (y ** 2) === z ** 2)) {
                    console.log(`x = ${x}, y = ${y}, z = ${z}.`);
                    console.log(`Product: ${x * y * z}.`)
                    return;
                }
            }
        }
    }
}

main();