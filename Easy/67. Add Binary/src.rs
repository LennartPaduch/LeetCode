impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
        let num_a = i32::from_str_radix(&a, 2).unwrap();
        let num_b = i32::from_str_radix(&b, 2).unwrap();

        format!("{:b}", num_a + num_b)
    }
}

fn main() {
    assert_eq!(
        Solution::add_binary("11".to_string(), "1".to_string()),
        "100".to_string()
    );
    assert_eq!(
        Solution::add_binary("1010".to_string(), "1011".to_string()),
        "10101".to_string()
    );
}
