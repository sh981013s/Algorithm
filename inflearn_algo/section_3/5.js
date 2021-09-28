"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    let answer = '';
    let cnt = 1;

    for(let i=0; i < input.length; i++) {
        if(input[i] === input[i+1]) {
            cnt++;
        } else {
            answer += input[i];
            if(cnt > 1) answer += cnt;
            cnt = 1;
        }
    }

    console.log(answer)

})();