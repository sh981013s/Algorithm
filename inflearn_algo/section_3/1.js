"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('').map((x)=>x.toLowerCase());

    const isSame = x => {
        const input = x.toString();
        const back = x.reverse().toString();

        const answer = input===back ? "YES" : "NO";
        console.log(answer);
    }

    isSame(input);

    
})();