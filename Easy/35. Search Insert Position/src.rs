impl Solution {
    pub fn search_insert(nums: Vec<i32>, target: i32) -> i32 {
        if let Some(idx) = nums.iter().position(|&x| x >= target) {
            return idx as i32;
        }
        nums.len() as i32
    }
}
