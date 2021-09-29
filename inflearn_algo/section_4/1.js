"use strict";

(function() {

    const fs = require('fs');
    // const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);

    const input = `7
    128 460 603 40 521 137 123`;

    const inputL = input.toString().trim().split('\n');

    const nums = inputL[1].trim().split(' ');

    let biggestSum = 0;
    let realNum = 0;

    for(let num of nums) {
        let sumOfNum = num.split('').map(Number).reduce((a, b) => a + b, 0);
        
        if(sumOfNum >= biggestSum && num > realNum) {
            realNum = num;
            biggestSum = sumOfNum;
        }
    }

    console.log(realNum);




    
})();