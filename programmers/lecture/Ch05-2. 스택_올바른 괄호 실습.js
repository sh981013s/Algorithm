function solution(s) {
  const stack = [];
  for (let char of s) {
    if (stack.length === 0 && char === ")") return false;
    if (char === "(") stack.push("(");
    if (char === ")") {
      stack.pop();
    }
  }
  return stack.length === 0;
}

console.log(solution("()()"));
