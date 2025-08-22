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
 * @return {number}
 */
var maxDepth = function (root) {
    if (root === null) return 0
    return recurse(root, 1)
}

function recurse(node, currDepth) {
    if (node === null)
        return currDepth - 1

    let leftDepth = recurse(node.left, currDepth + 1)
    let rightDepth = recurse(node.right, currDepth + 1)

    return Math.max(leftDepth, rightDepth)
}

