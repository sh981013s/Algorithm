"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const anwer = (x, y, z) => console.log(Math.floor((x+1)*(y+1)/(z+1)-1));

answer(input[0],input[1], input[2]);