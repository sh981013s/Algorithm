function solution(x, n) {
  const ans = [];
  let numToAdd = x;
  for (let i = 0; i < n; i++) {
    ans.push(numToAdd);
    numToAdd += x;
  }
  return ans;
}

console.log(solution(2, 5));
