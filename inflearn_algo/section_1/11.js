"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    let answer = 0;

    for(let char of input) {
        if(char === char.toUpperCase()) answer++;
    }

    console.log(answer);
    
})();