/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let last = prices[0]
    let profit = 0;

    for(let i=1; i<prices.length; i++){
        const diff = prices[i] - last
        if(diff > 0){
            profit += diff
            last = prices[i];
        } else{
            last = prices[i]
        }
    }

    return profit
};
