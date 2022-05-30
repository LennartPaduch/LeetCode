// Runtime: 25 ms, faster than 51.99% of C++ online submissions for Longest Substring Without Repeating Characters.
// Memory Usage: 8.3 MB, less than 59.09% of C++ online submissions for Longest Substring Without Repeating Characters.

class Solution
{
public:
    int lengthOfLongestSubstring(std::string s)
    {
        std::unordered_map<int, int> mp;
        int c = 0;
        int max = 0;
        int idx = 1;
        int lastIndex = 0;
        for (char l : s)
        {
            if (!mp[l])
            {
                c++;
                if (c > max)
                    max = c;
            }
            else
            {
                if (mp[l] > lastIndex)
                {
                    c = idx - mp[l];
                    lastIndex = mp[l];
                }
                else
                {
                    c++;
                    if (c > max)
                        max = c;
                }
            }
            mp[l] = idx;
            idx++;
        }
        return max;
    }
};
