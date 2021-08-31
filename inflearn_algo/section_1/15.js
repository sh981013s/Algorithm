"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    let answer = ""

    if(input.length % 2 === 0) {
        answer += input[(input.length/2) -1];
        answer += input[(input.length/2)];
    }
    else {
        answer += input[Math.floor(input.length/2)]
    }

    console.log(answer);

    
})();