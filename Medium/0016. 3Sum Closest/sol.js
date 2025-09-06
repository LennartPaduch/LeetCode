/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let minDistance = Number.MAX_VALUE;
    let distance, res

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right]

            if (sum > target) {
                right--
            } else if (sum < target) {
                left++
            } else if (sum === target)
                return sum;

            distance = Math.abs(sum - target)

            if (distance < minDistance) {
                res = sum;
                minDistance = distance;
            }
        }
    }

    return res;
};
