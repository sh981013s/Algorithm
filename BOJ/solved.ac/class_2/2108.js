"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");

  const inputNumArr = input.toString().trim().split("\n").map(Number);
  inputNumArr.shift();
  const ans = [];

  const avg = Math.round(
    inputNumArr.reduce((acc, cur) => acc + cur) / inputNumArr.length
  );

  if (avg === -0) {
    ans.push(0);
  } else {
    ans.push(avg);
  }
  ans.push(
    inputNumArr.sort((a, b) => a - b)[Math.floor(inputNumArr.length / 2)]
  );

  const getMode = (arr) => {
    let maxValue = -Infinity;
    let returnArr = [];
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
      if (!map.has(arr[i])) {
        map.set(arr[i], 1);
      } else {
        map.set(arr[i], map.get(arr[i]) + 1);
      }
    }

    map.forEach((element, key) => {
      console.log(key, element);
      if (maxValue < element) {
        maxValue = element;
        returnArr = [];
        returnArr.push(key);
      } else if (maxValue === element) {
        returnArr.push(key);
      }
    });

    return returnArr.length === 1 ? returnArr[0] : returnArr[1];
  };

  ans.push(getMode(inputNumArr));
  ans.push(Math.max(...inputNumArr) - Math.min(...inputNumArr));

  for (let num of ans) {
    console.log(num);
  }
})();
