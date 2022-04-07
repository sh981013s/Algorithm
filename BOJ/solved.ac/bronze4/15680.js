"use strict";

(() => {
  const fs = require("fs");
  const input = +fs.readFileSync("/dev/stdin").toString().trim();

  if (input) {
    console.log("Leading the Way to the Future");
  } else {
    console.log("YONSEI");
  }
})();
