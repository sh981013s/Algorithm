"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split(' ').map(Number);


    const arr = [Math.abs(input[0]), Math.abs(input[1]), Math.abs(input[2]-input[0]), Math.abs(input[3]-input[1])];

    console.log(Math.min.apply(null, arr));

    // [-x, -y, w-x, h-y]
})();