"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    let answer = "";

    for(let char of input) {
        answer += char.toUpperCase();
    }

    console.log(answer);
})();