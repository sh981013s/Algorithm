"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

    let answer = input;
    let sum = input.reduce((a, b) => a + b)

    for(let i = 0; i < answer.length - 1; i++) {
        for(let j = i + 1; j < answer.length; j++) {
            if(sum - (answer[i] + answer[j]) === 100) {
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }
    console.log (answer);
})();
