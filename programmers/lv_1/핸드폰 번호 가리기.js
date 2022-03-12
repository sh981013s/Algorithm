function solution(phone_number) {
  let ans = "";
  for (let i = 0; i < phone_number.length - 4; i++) {
    ans += "*";
  }
  return (ans += phone_number.slice(-4));
}

console.log(solution("01033334444"));
