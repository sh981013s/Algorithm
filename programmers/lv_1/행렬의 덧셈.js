function solution(arr1, arr2) {
  const ans = [];
  for (let i in arr1) {
    const tmpArr = [];
    for (let j in arr1[0]) {
      tmpArr.push(arr1[i][j] + arr2[i][j]);
    }
    ans.push(tmpArr);
  }
  return ans;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
);
