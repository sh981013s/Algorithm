"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    let answer = "";

    for(let char of input) {
        if(char === "A") {
            answer += "#";
        } else {
            answer += char;
        }
    }

    console.log(answer);

    
})();