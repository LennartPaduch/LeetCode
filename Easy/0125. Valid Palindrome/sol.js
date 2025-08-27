/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const isAlphanumeric = char => {
        return (char >= '0' && char <= '9') ||
            (char >= 'A' && char <= 'Z') ||
            (char >= 'a' && char <= 'z');
    };

    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphanumeric(s[left])) left++;
        while (left < right && !isAlphanumeric(s[right])) right--;

        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;

        left++;
        right--;
    }

    return true;
};


