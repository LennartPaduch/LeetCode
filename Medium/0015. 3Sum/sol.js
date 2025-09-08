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
        let left = i + 1;
        let right = nums.length - 1;
        while (left < right) {
            let num2 = nums[left]
            let num3 = nums[right];
            const sum = num1 + num2 + num3;

            if (sum > 0) right--;
            else if (sum < 0) left++
            else if (sum === 0) {
                res.push([num1, num2, num3])
                while (left < right && nums[left] === num2) left++
                while (left < right && nums[right] === num3) right--
            }
        }
    }

    return res;
}


