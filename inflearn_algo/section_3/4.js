"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString();


    const total = input.split(' ');


    const mainChar = input[1];
    const inputString = total[0].split('');

    let firstAnswer = [];
    let secondAnswer = [];
    let totalAnswer = [];
    let count = 0;

    for(let char of inputString) {
        if(char === mainChar) {
            count = 0;
        } else {
            count++;
        }
        firstAnswer.push(count);
    };

    count = 0;

    inputString.slice().reverse()
        .forEach(function(char) {
            if(char === mainChar) {
                count = 0;
            } else {
                count++;
            }
            secondAnswer.push(count);
        });
    
    secondAnswer.reverse();

    for(let x=0; x < firstAnswer.length; x++) {
        let singleAnswer = Math.min(firstAnswer[x], secondAnswer[x]);
        totalAnswer.push(singleAnswer);
    };

    console.log(totalAnswer.join(' '));


})();