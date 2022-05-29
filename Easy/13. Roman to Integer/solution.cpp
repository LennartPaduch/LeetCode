/*
Your runtime beats 70.84 % of cpp submissions
Your memory usage beats 86.39 % of cpp submissions.
Runtime: 11 ms
Memory Usage: 5.9 MB
*/

int translateRoman(char r)
{
    switch (r)
    {
    case 'I':
        return 1;
    case 'V':
        return 5;
    case 'X':
        return 10;
    case 'L':
        return 50;
    case 'C':
        return 100;
    case 'D':
        return 500;
    case 'M':
        return 1000;
    }
    return 0;
}

class Solution
{
public:
    int romanToInt(string s)
    {
        int sum = 0;
        int prev = 0;
        for (char n : s)
        {
            int curr = translateRoman(n);
            if (prev < curr)
                sum -= 2 * prev;
            sum += curr;
            prev = curr;
        }
        return sum;
    }
};
