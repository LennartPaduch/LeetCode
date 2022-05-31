// Runtime: 76 ms, faster than 98.28% of C++ online submissions for Container With Most Water.
// Memory Usage: 59 MB, less than 38.81% of C++ online submissions for Container With Most Water.

class Solution
{
public:
    int maxArea(vector<int> &height)
    {
        int max = 0;
        int l = 0;
        int r = height.size() - 1;
        while (l != r)
        {
            if (min(height[l], height[r]) * (r - l) > max)
                max = min(height[l], height[r]) * (r - l);
            if (height[l] > height[r])
                r--;
            else
                l++;
        }
        return max;
    }
};