"use strict";

(function() {

    const fs = require('fs');
    const input = fs.readFileSync('input.txt').toString().trim().split('');

    const isSame = x => {
        const original = x.toString().toLowerCase().replace(/[^a-z]/g,"");
        const reversed = x.reverse().toString().toLowerCase().replace(/[^a-z]/g,"");

        const answer = original===reversed ? "YES" : "NO";
        console.log(answer);
    }

    isSame(input);



    
})();