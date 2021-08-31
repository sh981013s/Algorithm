"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    let answer = "";

    for(let i = 0; i < input.length; i++) {
        if(input.indexOf(input[i]) === i) {
            answer += input[i];
        }
    }
    console.log(answer);
    
})();