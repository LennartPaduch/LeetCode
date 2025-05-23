/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let max = -Infinity;
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        max = Math.max(curr, max)
        if (curr < 0) {
            curr = 0
        }
    }

    return max
};

