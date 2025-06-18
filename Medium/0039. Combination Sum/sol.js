/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const result = [];

    function backtrack(startIndex, remaining, path) {
        if (remaining === 0) {
            result.push([...path]);
            return;
        }

        for (let i = startIndex; i < candidates.length; i++) {
            const current = candidates[i];

            if (current > remaining) {
                continue;
            }

            path.push(current);

            backtrack(i, remaining - current, path);

            path.pop();
        }
    }

    candidates.sort((a, b) => a - b);

    backtrack(0, target, []);
    return result;
}

