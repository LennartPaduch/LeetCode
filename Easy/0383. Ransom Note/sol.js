/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    const map = new Map();

    for (let letter of magazine) {
        const c = map.get(letter) || 0;
        map.set(letter, c + 1);
    }

    for (let letter of ransomNote) {
        const c = map.get(letter);
        if (!c) return false;
        map.set(letter, c - 1);
    }

    return true;
};