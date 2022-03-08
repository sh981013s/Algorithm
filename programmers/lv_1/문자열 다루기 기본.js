function solution(s) {
  if (s.length === 4 || s.length === 6) {
    return s.split("").every((single) => !isNaN(single));
  }
  return false;
}

console.log(solution("a234"));
