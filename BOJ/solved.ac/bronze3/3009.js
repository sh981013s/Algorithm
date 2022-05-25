"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

  const arrX = [];
  const arrY = [];

  for (let i = 0; i < 3; i++) {
    arrX.push(input[i].split(" ")[0]);
    arrY.push(input[i].split(" ")[1]);
  }

  arrX.sort();
  arrY.sort();

  const ansX = arrX[0] === arrX[1] ? arrX[2] : arrX[0];
  const ansY = arrY[0] === arrY[1] ? arrY[2] : arrY[0];

  console.log(`${ansX} ${ansY}`);
})();
