function solution(n, times) {
  const sortedTimesArr = times.sort((a, b) => a - b);
  let left = 1;
  let right = sortedTimesArr[sortedTimesArr.length - 1] * n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const howManyWithMidNum = times.reduce(
      (acc, time) => acc + Math.floor(mid / time),
      0
    );

    if (howManyWithMidNum < n) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

console.log(solution(6, [7, 10]));
