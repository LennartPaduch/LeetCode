/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
var constructArray = function(n, k) {
    let list = [];
    for(let i=1; i<=n-k; i++){
        list.push(i);
    }

    let highest = n;
    let lowest = n-k+1;
    while(list.length < n){
        list.push(highest--);
        if(highest > lowest){
            list.push(lowest++);
        }
    }
    return list;
};
