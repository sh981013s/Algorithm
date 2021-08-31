"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    let answer = "";

    for(let char of input) {
        if(char === char.toLowerCase()) {
            answer += char.toLowerCase();
        }
        else {
            answer += char.toUpperCase();
        }
    }

    console.log(answer);

    
})();