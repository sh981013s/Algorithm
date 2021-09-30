'use strict';

(function () {
  const fs = require('fs');
  //   const input = fs
  //     .readFileSync('input.txt')
  //     .toString()
  //     .trim()
  //     .split('\n')
  //     .map(Number);

  const input = `5 28
6 6
2 2
4 3
4 5
10 3`;

  const realInput = input.trim().split('\n');

  const given = realInput[0].split(' ').map(Number);
  const budget = given[1];
  let answer = 0;
  const students = realInput
    .splice(1, 5)
    .map((x) => x.split(' ').map(Number))
    .sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < students.length; i++) {
    let money = budget - (students[i][0] / 2 + students[i][1]);
    let cnt = 1;

    for (let j = 0; j < students.length; j++) {
      if (j !== i && money >= students[j][0] + students[j][1]) {
        money -= students[j][0] + students[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }

  console.log(answer);
})();
