"use strict";

(() => {
  const fs = require("fs");
  const input = fs
    .readFileSync("/dev/stdin")
    .toString()
    .trim()
    .split("\n")
    .map(Number);

  const ans = [];

  if (input[0] >= 3 && input[1] <= 4) {
    ans.push("TroyMartian");
  }
  if (input[0] <= 6 && input[1] >= 2) {
    ans.push("VladSaturnian");
  }
  if (input[0] <= 2 && input[1] <= 3) {
    ans.push("GraemeMercurian");
  }

  if (ans.length > 0) {
    console.log(ans.join("\n"));
  }
})();
