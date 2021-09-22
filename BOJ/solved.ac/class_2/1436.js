"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim();

    const findName = input => {
        let count = 0;
        let number = 665;
        input = parseInt(input);

        while(count !== input) {
            number++;
            if(String(number).includes('666')) {
                count++
            }
        }
        console.log(number);
    }

    findName(input);

    
})();