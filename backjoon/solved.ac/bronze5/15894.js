"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const asnwer = x => console.log(x * 4);
asnwer(input[0]);