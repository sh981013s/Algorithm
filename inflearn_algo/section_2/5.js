"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    const arr = input[1].split(' ').map(Number);
    const n = arr.length;
    let answer = Array.from({length:n}, () => 1)
    let answer_str = '';

    for(let i = 0; i < n; i++) {
        for(let j = 0; j < n; j++) {
            if(arr[i] < arr[j]) {
                answer[i]++;
            }
        }
        answer_str += answer[i] + ' '
    }
    console.log(answer_str);
})();