const fs = require("fs");
let [start, end] = fs.readFileSync("./dev/stdin").toString().trim().split(" ");

// let [start, end] = `8808 8880`.toString().trim().split(" ");

let ans = 0;

if (start.length === end.length) {
  for (let i = 0; i < start.length; i++) {
    if (start[i] !== end[i]) break;
    if (start[i] === end[i] && start[i] === "8") ans++;
  }
}

console.log(ans);
