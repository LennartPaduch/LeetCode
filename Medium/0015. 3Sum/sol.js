/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const res = []
    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        const num1 = nums[i];
        let j = i + 1;
        let k = nums.length - 1;
        while (j < k) {
            let num2 = nums[j]
            let num3 = nums[k];
            const sum = num1 + num2 + num3;

            if (sum > 0) {
                k--;
            } else if (sum < 0) {
                j++
            } else if (sum === 0) {
                res.push([num1, num2, num3])
                while (j < k && nums[j] === num2) j++
                while (j < k && nums[k] === num3) k--
            }
        }
    }

    return res;
}


