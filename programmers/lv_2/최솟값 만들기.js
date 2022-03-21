const solution = (A, B) => {
  const firstArr = A.sort((a, b) => a - b);
  const secondArr = B.sort((a, b) => b - a);
  return firstArr.reduce((acc, cur, idx) => {
    return acc + firstArr[idx] * secondArr[idx];
  }, 0);
};

console.log(solution([1, 4, 2], [5, 4, 4]));
