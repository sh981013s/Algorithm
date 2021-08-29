"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    const date = parseInt(input[0]);
    const cars = input[1].split(' ').map(Number);
    let ans = 0;

    for(let car of cars) {
        if (car % 10 === date) ans++;
    }
    
    console.log(ans);
})();