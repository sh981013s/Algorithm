"use strict";

(() => {
  const fs = require("fs");
  let input = fs.readFileSync("/dev/stdin").toString().trim();
  // let input = `102`.toString().trim();

  if (input === "1010") {
    console.log(20);
  } else if (input.includes("10")) {
    input = input.replace("10", "");
    console.log(+input + 10);
  } else {
    console.log(Math.floor(+input / 10) + (+input % 10));
  }
})();
