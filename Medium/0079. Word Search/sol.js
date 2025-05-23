/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === word[0]) {
                const visited = Array(board.length).fill().map(() => Array(board[0].length).fill(false));

                if (dfs(board, word, 0, row, col, visited)) {
                    return true;
                }
            }
        }
    }

    return false;
};

function dfs(board, word, index, row, col, visited) {
    if (index === word.length) {
        return true;
    }

    if (row < 0 || row >= board.length || col < 0 || col >= board[0].length) {
        return false;
    }

    if (visited[row][col] || board[row][col] !== word[index]) {
        return false;
    }

    visited[row][col] = true;

    const found =
        dfs(board, word, index + 1, row + 1, col, visited) ||
        dfs(board, word, index + 1, row - 1, col, visited) ||
        dfs(board, word, index + 1, row, col + 1, visited) ||
        dfs(board, word, index + 1, row, col - 1, visited);

    visited[row][col] = false;

    return found;
}
