"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    const howManyTimes = parseInt(input[0]);
    const a = input[1].split(' ');
    const b = input[2].split(' ');

    for(let i = 0; i < howManyTimes; i++) {
        if(a[i] === b[i]) {
            console.log('D');
        }
        else if(a[i] === '1' && b[i] === '3') {
            console.log('A');
        }
        else if(a[i] === '2' && b[i] === '1') {
            console.log('A')
        }
        else if(a[i] === '3' && b[i] === '2') {
            console.log('A')
        }
        else {
            console.log('B');
        }
    }
    
    
})();