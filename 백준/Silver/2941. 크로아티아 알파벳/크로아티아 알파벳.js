"use strict";

(() => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim();

  const regex = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

  for (let reg of regex) {
    input = input.split(reg).join(" ");
  }

  console.log(input.length);
})();
