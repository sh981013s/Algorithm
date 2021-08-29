"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

    let sum = 0;
    let min = Number.MAX_SAFE_INTEGER;

    for(let i = 0; i < input.length; i++) {
        if(input[i] % 2 === 1) {
            sum += input[i];
            if(min > input[i]) {
                min = input[i];
            }
        }
    }

    console.log(sum);
    console.log(min);
})();