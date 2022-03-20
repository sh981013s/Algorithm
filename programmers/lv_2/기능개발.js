function solution(progresses, speeds) {
  const ans = [];
  let cnt = 0;

  while (progresses.length > 0) {
    for (let i = 0; i < progresses.length; i++) {
      progresses[i] += speeds[i];
    }
    cnt = 0;
    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      cnt++;
    }
    if (cnt) ans.push(cnt);
  }
  return ans;
}

console.log(solution([93, 30, 55], [1, 30, 5]));
