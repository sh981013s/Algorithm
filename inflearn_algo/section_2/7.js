"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    let board = [];
    const size = +input[0]

    for(let i = 1; i < size+1; i++) {
        board.push(input[i].split(" ").map((x) => +x));
    }

    let answer = 0;
    let flag = 1;

    const x = [-1, 1, 0, 0];
    const y = [0, 0, 1, -1];

    for(let i = 0; i < size; i++) {
        for(let j = 0; j < size; j++ ) {
            flag = 1;
            for(let k = 0; k < 4; k++) {
                let nx = i + x[k];
                let ny = j + y[k];

                if(nx>=0 && nx<size && ny>=0 && ny < size && board[i][j] < board[nx][ny]) {
                    flag = 0;
                }
            }
            if(flag) answer++;
        }
    }
    
    console.log(answer);
})();