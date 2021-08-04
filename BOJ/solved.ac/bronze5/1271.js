"use strict";

var fs = require('fs');
var input = fs.readFileSync("input.txt").toString().split(' ');

const totalNum = BigInt(input[0]);
const pplNum = BigInt(input[1]);

const singleMoney = totalNum / pplNum;
const leftMoney = totalNum % pplNum;

console.log(singleMoney + "\n" + leftMoney);


// const fs = require('fs'); 
// const input = fs.readFileSync("input.txt").toString().trim().split(" ").map(BigInt);

// console.log(input[0]);
// console.log(input[1]);
// let answer = input[0] / input[1] + '\n'; 
// answer += input[0] % input[1] 
// console.log(answer)




