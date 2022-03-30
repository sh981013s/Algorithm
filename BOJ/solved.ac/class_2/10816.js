"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");
  const realInput = input.toString().trim().split("\n");

  const fieldArr = realInput[1].split(" ").map(Number);
  const findArr = realInput[3].split(" ").map(Number);
  const ans = [];

  const fieldMap = new Map();
  for (let fieldCard of fieldArr) {
    const data = fieldMap.get(fieldCard) || 0;
    fieldMap.set(fieldCard, data + 1);
  }

  for (let findCard of findArr) {
    const data = fieldMap.get(findCard);
    if (!data) {
      ans.push(0);
    } else {
      ans.push(data);
    }
  }

  console.log(ans.join(" "));
})();
