// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Valid Parentheses.
// Memory Usage: 6.1 MB, less than 99.77% of C++ online submissions for Valid Parentheses.

class Solution
{
public:
    bool isValid(string s)
    {
        if (s.length() % 2 > 0)
            return false;
        vector<char> vec;
        vec.push_back(0);
        for (char c : s)
        {
            if (c == ')')
                if (vec.back() == '(')
                    vec.pop_back();
                else
                    return false;
            else if (c == '}')
                if (vec.back() == '{')
                    vec.pop_back();
                else
                    return false;
            else if (c == ']')
                if (vec.back() == '[')
                    vec.pop_back();
                else
                    return false;
            else
                vec.push_back(c);
        }
        if (vec.size() > 1)
            return false;
        return true;
    }
};