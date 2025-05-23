
var RandomizedSet = function () {
    return new Set();
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set.has(val)) {
        return false;
    }
    this.set.add(val)
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    return this.set.delete(val)
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    return this.set.values[Math.floor(Math.random() * this.set.size)]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */