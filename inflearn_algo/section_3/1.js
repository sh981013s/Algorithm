"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('').map((x)=>x.toLowerCase());

    const isSame = (x) => {
        const size = x.length;
        if(x[0] === x[size-1]) {
            console.log("YES");
        } else {
            console.log("NO");
        }
    }

    isSame(input);

    
})();