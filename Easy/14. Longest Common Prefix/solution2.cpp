// Runtime: 14 ms, faster than 9.96% of C++ online submissions for Longest Common Prefix.
// Memory Usage: 15.5 MB, less than 5.89% of C++ online submissions for Longest Common Prefix.

class Solution
{
public:
    string longestCommonPrefix(vector<string> &strs)
    {
        string commonPrefix = "";
        int idx = 0;
        while (true)
        {
            commonPrefix.push_back(strs[0][idx]);
            for (string word : strs)
            {
                if (idx >= word.length() || commonPrefix[idx] != word[idx])
                {
                    commonPrefix.pop_back();
                    return commonPrefix;
                }
            }
            idx++;
        }
    }
};