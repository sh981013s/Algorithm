function solution(a, b) {
  return new Date(`2016, ${a}, ${b}`).toString().split(" ")[0].toUpperCase();
}

console.log(solution(5, 24));
