/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (digits === "") return []

    const res = []

    const map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]

    function recurse(idx, currStr) {
        if (idx === digits.length) {
            res.push(currStr)
            return;
        }

        const currDigit = digits[idx];
        const letters = map[currDigit]

        for (const letter of letters) {
            recurse(idx + 1, currStr + letter)
        }
    }

    recurse(0, "")
    return res;
};

