/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    const res = []

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue
        const num1 = nums[i];

        for (let j = i + 1; j < nums.length; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue

            const num2 = nums[j]

            let left = j + 1;
            let right = nums.length - 1;


            while (left < right) {
                const num3 = nums[left];
                const num4 = nums[right];
                const sum = num1 + num2 + num3 + num4;

                if (sum > target) right--;
                else if (sum < target) left++;
                else if (sum === target) {
                    res.push([num1, num2, num3, num4])
                    while (left < right && nums[left] === num3) left++;
                    while (left < right && nums[right] === num4) right--;
                }
            }
        }
    }

    return res
};

