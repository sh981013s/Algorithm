function solution(x) {
  return !(
    x %
    x
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, cur) => acc + cur)
  );
}

console.log(solution(12));
