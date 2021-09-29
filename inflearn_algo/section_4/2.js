"use strict";

(function() {

    const fs = require('fs');
    // const input = fs.readFileSync('input.txt').toString().trim().split('\n').map(Number);

    const input = `9
    32 55 62 20 250 370 200 30 100`;

    const realInput = input.toString().split('\n');
    const howManyNums = parseInt(realInput[0]);
    const nums = realInput[1].trim().split(' ').map(Number);

    let answer = [];


    const isPrime = (num) => {
        if(num === 1 || num === 0) return false;
        for(let i = 2; i < num; i++) {
            if(num % i === 0) return false;
        }
        return true;
    }

    for(let num of nums) {
        num = parseFloat(num.toString().split('').reverse().join('') * Math.sign(num));
        if (isPrime(num)) answer.push(num);
    }

    console.log(answer.join(' '));



})();