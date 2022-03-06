function solution(numbers) {
  const possibleSumsArr = [];

  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      possibleSumsArr.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(possibleSumsArr)].sort((a, b) => a - b);
}

console.log(solution([2, 1, 3, 4, 1]));
