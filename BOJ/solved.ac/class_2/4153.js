"use strict";

(() => {
  const fs = require("fs");
  const input = fs.readFileSync("/dev/stdin");

  const entireArr = input.toString().trim().split("\n");
  entireArr.pop();

  const isRightTriangle = (str) => {
    const nums = str
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);
    return Math.pow(nums[0], 2) === Math.pow(nums[1], 2) + Math.pow(nums[2], 2);
  };

  for (let triangleValues of entireArr) {
    if (isRightTriangle(triangleValues)) {
      console.log("right");
    } else {
      console.log("wrong");
    }
  }
})();
