/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let res = ""

    const intToRoman = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];

    let i = 0;

    while (num !== 0) {
        if (intToRoman[i][0] <= num) {
            num -= intToRoman[i][0];
            res += intToRoman[i][1]
        } else {
            i++
        }
    }

    return res;
};

