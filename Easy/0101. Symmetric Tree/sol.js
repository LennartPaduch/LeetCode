/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return check(root.left, root.right);
};

function check(nodeL, nodeR) {
    if (nodeL === null || nodeR === null) return nodeL === nodeR;

    if (nodeL.val !== nodeR.val) return false

    return check(nodeL.left, nodeR.right) && check(nodeL.right, nodeR.left)
}