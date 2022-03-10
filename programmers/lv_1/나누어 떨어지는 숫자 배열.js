function solution(arr, divisor) {
  const correctArr = [];
  for (let num of arr) {
    if (num % divisor === 0) correctArr.push(num);
  }
  return correctArr.length === 0 ? [-1] : correctArr.sort((a, b) => a - b);
}

console.log(solution([5, 9, 7, 10], 5));
