function process(num) {
  let calculatedNum = num;
  if (num % 2) {
    // odd
    calculatedNum = calculatedNum * 3 + 1;
  } else {
    // even
    calculatedNum = num / 2;
  }
  console.log(calculatedNum);
  return calculatedNum;
}

function solution(num) {
  let cnt = 0;
  let calcNum = num;
  while (calcNum !== 1) {
    cnt++;
    calcNum = process(calcNum);
    console.log(calcNum);
  }
  if (cnt >= 500) return -1;
  return cnt;
}

console.log(solution(626331));
