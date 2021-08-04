"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);


function answer() {
    let totalTime = 0;

    for(let i=0;i<input.length;i++) {
        totalTime += input[i];
    };

    const min = Math.floor(totalTime / 60);
    const sec = totalTime - (min * 60);

    console.log(min);
    console.log(sec);
};

answer();
