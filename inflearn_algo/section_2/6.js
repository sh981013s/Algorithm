"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');
    

    const board = [];
    let answer = 0;
    let row = 0;
    let column = 0;

    const size = +input[0];

    for(let i = 1; i <= size; i++) {
        board.push(input[i].split(" ").map((x) => +x));
    }

    for(let i = 0; i < size; i++) {
        row = column = 0;
        for(let j = 0; j < size; j++) {
            row += board[i][j];
            column += board[j][i];
        }
        answer = Math.max(answer, row, column);
    }

    for(let i = 0; i < size; i++) {
        row = column = 0;
        row += board[i][i];
        column += board[size - 1 - i][size - 1 - i];
    }

    answer = Math.max(answer, row, column);

    console.log(answer);

})();