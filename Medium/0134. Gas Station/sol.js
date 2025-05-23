/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    let n = gas.length;
    let i = 0;

    while (i < n) {
        let tank = 0;
        let j;
        let completedCircuit = true;

        for (j = 0; j < n; j++) {
            let currentIndex = (i + j) % n;
            tank += gas[currentIndex] - cost[currentIndex];

            if (tank < 0) {
                completedCircuit = false;
                break;
            }
        }

        if (completedCircuit) {
            return i;
        }

        i = i + j + 1;
    }

    return -1;
};
