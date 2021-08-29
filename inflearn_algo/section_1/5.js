"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);

    let small = input[0]

    for (let i = 1; i < input.length; i++) {
        if (small > input[i]) {
            small = input[i];
        }
    }

    console.log(small);
})();