/*
Your runtime beats 68.09 % of cpp submissions.
Runtime: 16 ms
Memory Usage: 12.1 MB
*/

class Solution
{
public:
    vector<int> twoSum(vector<int> &nums, int target)
    {
        int s = nums.size();
        unordered_map<int, int> mp;
        for (int i = 0; i < s; i++)
            mp[nums[i]] = i;
        for (int i = 0; i < s; i++)
        {
            if (mp.find(target - nums[i]) != mp.end() && mp[target - nums[i]] != i)
                return {i, mp[target - nums[i]]};
        }
        return {};
    }
};