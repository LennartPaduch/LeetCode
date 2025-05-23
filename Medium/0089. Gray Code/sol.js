/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
    let sequence = [0];

    for (let i = 0; i < n; i++) {
        const highestBit = 1 << i;

        for (let j = sequence.length - 1; j >= 0; j--) {
            sequence.push(sequence[j] | highestBit);
        }
    }

    return sequence;
};
