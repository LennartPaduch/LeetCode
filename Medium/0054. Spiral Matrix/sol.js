/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let spiralOrder = []
    let boundaries = {
        top: 0,
        right: matrix[0].length,
        bottom: matrix.length,
        left: 0
    }
    const numElements = matrix[0].length * matrix.length

    while (spiralOrder.length < numElements) {
        // Right
        for (let i = boundaries.left; i < boundaries.right; i++) {
            spiralOrder.push(matrix[boundaries.top][i])
        }
        boundaries.top++
        if (spiralOrder.length >= numElements) break;

        // Down
        for (let i = boundaries.top; i < boundaries.bottom; i++) {
            spiralOrder.push(matrix[i][boundaries.right - 1])

        }
        boundaries.right--
        if (spiralOrder.length >= numElements) break;

        // Left
        for (let i = boundaries.right - 1; i >= boundaries.left; i--) {
            spiralOrder.push(matrix[boundaries.bottom - 1][i])
        }
        boundaries.bottom--
        if (spiralOrder.length >= numElements) break;

        // Up
        for (let i = boundaries.bottom - 1; i >= boundaries.top; i--) {
            spiralOrder.push(matrix[i][boundaries.left])

        }
        boundaries.left++
    }


    return spiralOrder
};

