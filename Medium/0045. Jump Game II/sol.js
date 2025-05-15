/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length <= 1) return 0;
    
    let jumps = 0;
    let currentMaxReach = 0;  
    let nextMaxReach = 0;   
    
    for (let i = 0; i < nums.length - 1; i++) {
        nextMaxReach = Math.max(nextMaxReach, i + nums[i]);
        
        if (i === currentMaxReach) {
            jumps++;
            currentMaxReach = nextMaxReach;
            
            if (currentMaxReach >= nums.length - 1) break;
        }
    }
    
    return jumps;
};

