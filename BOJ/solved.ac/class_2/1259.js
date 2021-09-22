"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('\n');

    input.pop();
    

    const isPalen = (fullArr) => {
        for(let single of fullArr) {
            let reversedStr = single.split('').reverse().join('')
            console.log(single === reversedStr ? "yes" : "no");
        }
    }

    isPalen(input);

})();