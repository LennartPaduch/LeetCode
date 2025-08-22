/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    return recurse(n, new Set())
};

function recurse(n, visited) {
    if (n === 1) return true
    if (visited.has(n)) return false;

    visited.add(n)

    newNumber = 0;

    while (n > 0) {
        let digit = n % 10;
        newNumber += digit * digit;
        n = Math.floor(n / 10);
    }

    return recurse(newNumber, visited)
}

