"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().split('\n');

    let answer = "";

    for(let i of input) {
        if(i.length > answer.length) {
            answer = i;
        }
    }
    console.log(answer);

})();