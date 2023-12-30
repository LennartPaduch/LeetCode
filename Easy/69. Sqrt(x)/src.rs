impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        let mut sqrt = x as f32 / 2.0;
        let mut temp = 0.0;
        while (sqrt - temp).abs() > 1e-6 {
            temp = sqrt;
            sqrt = (x as f32 / temp + temp) / 2.0;
        }

        let result = sqrt.floor() as i32;
        if (result as i64 * result as i64) > x as i64 {
            result - 1
        } else {
            result
        }
    }
}
