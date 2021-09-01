"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    const num = parseInt(input[0]);
    let arr = input[1].split(' ').map(Number);
    let standard = 0;
    let answer = 0;

    for(let student of arr) {
        if(student > standard) {
            standard = student;
            answer++;
        }
    }

    console.log(answer);


    
})();