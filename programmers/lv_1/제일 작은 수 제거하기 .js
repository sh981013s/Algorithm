function solution(arr) {
  const minNum = Math.min(...arr);
  return arr.length > 1 ? arr.filter((num) => num !== minNum) : [-1];
}

console.log(solution([4, 3, 2, 1]));
