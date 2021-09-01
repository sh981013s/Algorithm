"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    const firstNum = parseInt(input[0]);
    const array = input[1].split(' ').map(Number);
    let answer = "";

    for(let num of array) {
        if(num >= firstNum) {
            answer += num + " ";
        }
    }

    console.log(answer);
    
})();