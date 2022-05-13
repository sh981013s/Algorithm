"use strict";

(() => {
  const fs = require("fs");
  let input = +fs.readFileSync("/dev/stdin").toString().trim();

  const ans = [0, 0, 0];

  if (input / 300 >= 1) {
    const subNum = Math.floor(input / 300);
    ans[0] += subNum;
    input -= subNum * 300;
  }
  if (input / 60 >= 1) {
    const subNum = Math.floor(input / 60);
    ans[1] += subNum;
    input -= subNum * 60;
  }
  if (input / 10 >= 1) {
    const subNum = Math.floor(input / 10);
    ans[2] += subNum;
    input -= subNum * 10;
  }

  console.log(input === 0 ? ans.join(" ") : -1);
})();
