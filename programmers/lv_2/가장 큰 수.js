function solution(numbers) {
  const strings = numbers.map((num) => num + "");
  const ans = strings.sort((a, b) => b + a - (a + b)).join("");
  return ans === "0" ? "0" : ans;
}

console.log(solution([6, 10, 2]));
