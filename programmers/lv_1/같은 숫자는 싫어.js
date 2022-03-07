function solution(arr) {
  const ans = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i - 1] !== arr[i]) ans.push(arr[i]);
  }

  return ans;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
