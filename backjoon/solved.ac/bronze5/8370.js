"use strict";

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

const businessSeats = input[0] * input[1];
const economiySeats = input[2] * input [3];

const total = businessSeats + economiySeats;

console.log(total);