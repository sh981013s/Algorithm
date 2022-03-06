function solution(d, budget) {
  const sorted = d.sort((a, b) => a - b);
  let cnt = 0;

  for (let single of sorted) {
    if (budget >= single) {
      budget -= single;
      cnt++;
    }
  }
  return cnt;
}

solution([2, 2, 3, 3], 10);
