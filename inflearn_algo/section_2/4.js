"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    const arr = input[1].split(' ').map(Number);
    let sum = 0;
    let added = 0;

    for(let correct of arr) {
        if(correct === 0) {
            added = 0;
        }
        else {
            added++
            sum += added;
        }
    }

    console.log(sum);

    
})();