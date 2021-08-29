"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

    let sum = 0;

    for (let i = 0; i <= input[0]; i++) {
        sum += i;
    }

    console.log(sum);
})();

