function solution(n) {
  return n.toString().split("").reverse().map(Number);
}

console.log(solution(12345));
