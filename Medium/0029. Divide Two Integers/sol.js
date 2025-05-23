var divide = function (dividend, divisor) {
    const INT_MAX = 2147483647;    // 2^31 - 1
    const INT_MIN = -2147483648;   // -2^31

    if (divisor === -1 && dividend === INT_MIN) {
        return INT_MAX;
    }

    const sign = (dividend < 0) !== (divisor < 0);


    let a = Math.abs(dividend);
    let b = Math.abs(divisor);

    let quotient = 0;

    while (a >= b) {
        let temp = b;
        let multiple = 1;

        while (a >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }

        a -= temp;
        quotient += multiple;
    }

    quotient = sign ? -quotient : quotient;

    return Math.max(INT_MIN, Math.min(INT_MAX, quotient));
};