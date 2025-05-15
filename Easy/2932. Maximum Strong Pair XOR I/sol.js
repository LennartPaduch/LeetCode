/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumStrongPairXor = function(nums) {
    nums.sort((a, b) => a - b);
    
    let max = 0;
    
    for(let i = 0; i < nums.length; i++) {
        const x = nums[i];
        for(let j = i; j < nums.length; j++) {
            const y = nums[j];
            if(y - x > x) break; 
            
            max = Math.max(max, x ^ y);
        }
    }
    
    return max;
};