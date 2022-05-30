// Runtime: 34 ms, faster than 91.27% of C++ online submissions for Median of Two Sorted Arrays.
// Memory Usage: 89.8 MB, less than 33.99% of C++ online submissions for Median of Two Sorted Arrays.

class Solution
{
public:
    double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2)
    {
        vector<int> vec((int)nums1.size() + (int)nums2.size());
        merge(nums1.begin(), nums1.end(), nums2.begin(), nums2.end(), vec.begin());
        double k;
        if (vec.size() % 2 == 0)
        {
            k = ((double)(vec[vec.size() / 2] + vec[vec.size() / 2 - 1])) / 2;
        }
        else
            k = vec[vec.size() / 2];
        return k;
    }
};