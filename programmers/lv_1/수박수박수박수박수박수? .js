function solution(n) {
  let ans = "";
  while (ans.length < n) {
    ans += "수박";
  }
  return ans.slice(0, n);
}

console.log(solution(3));
