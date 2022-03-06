function solution(left, right) {
  let ans = 0;

  for (let i = left; i <= right; i++) {
    const divosorArr = [];
    for (let j = 1; j <= i; j++) {
      if (!(i % j)) divosorArr.push(j);
    }
    if (!(divosorArr.length % 2)) {
      ans += i;
    } else {
      ans -= i;
    }
  }

  return ans;
}

solution(24, 27);
