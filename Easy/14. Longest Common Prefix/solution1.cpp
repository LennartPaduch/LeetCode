// Runtime: 3 ms, faster than 89.35% of C++ online submissions for Longest Common Prefix.
// Memory Usage: 9.2 MB, less than 45.10% of C++ online submissions for Longest Common Prefix.

class Solution
{
public:
    string longestCommonPrefix(vector<string> &strs)
    {
        string commonPrefix = "";
        for (int j = 0; j < strs[0].size(); j++)
        {
            int currentLetter = strs[0][j];
            for (int i = 0; i < strs.size(); i++)
            {
                if (strs[i][j] != currentLetter)
                {
                    return commonPrefix;
                }
            }
            commonPrefix += currentLetter;
        }
        return commonPrefix;
    }
};