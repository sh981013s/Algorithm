function solution(n) {
  return n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur);
}

console.log(solution(987));
