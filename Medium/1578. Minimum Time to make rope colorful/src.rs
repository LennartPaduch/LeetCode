impl Solution {
    pub fn min_cost(colors: String, needed_time: Vec<i32>) -> i32 {
        let mut total_time = 0;
        let mut max_time_in_group = 0;
        let mut current_group_time = 0;

        for (i, color) in colors.bytes().enumerate() {
            if i > 0 && color != colors.as_bytes()[i - 1] {
                total_time += current_group_time - max_time_in_group;
                current_group_time = 0;
                max_time_in_group = 0;
            }
            current_group_time += needed_time[i];
            max_time_in_group = max_time_in_group.max(needed_time[i]);
        }

        total_time += current_group_time - max_time_in_group;

        total_time
    }
}
