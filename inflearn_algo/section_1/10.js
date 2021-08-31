"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split("\n");

    let answer = 0;

    for(let char of input[0]) {
        if(char === input[1]) {
            answer++;
        }
    }
    
    console.log(answer);
})();