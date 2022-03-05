const solution = (ans) => {
  let firstPattern = [1, 2, 3, 4, 5];
  let secondPattern = [2, 1, 2, 3, 2, 4, 2, 5];
  let thirdPattern = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  const cnt = [0, 0, 0];
  let maxCnt = 0;
  let ansArr = [];

  while (
    firstPattern.length <= ans.length ||
    secondPattern.length <= ans.length ||
    thirdPattern.length <= ans.length
  ) {
    firstPattern = [...firstPattern, ...firstPattern];
    secondPattern = [...secondPattern, ...secondPattern];
    thirdPattern = [...thirdPattern, ...thirdPattern];
  }

  for (let i = 0; i < ans.length; i++) {
    if (firstPattern[i] === ans[i]) {
      cnt[0]++;
    }
    if (secondPattern[i] === ans[i]) {
      cnt[1]++;
    }
    if (thirdPattern[i] === ans[i]) {
      cnt[2]++;
    }
  }

  maxCnt = Math.max(...cnt);

  for (let i = 0; i < 3; i++) {
    if (maxCnt === cnt[i]) ansArr.push(i + 1);
  }

  return ansArr;
};
