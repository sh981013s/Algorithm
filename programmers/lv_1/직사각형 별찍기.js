function solution(str) {
  const given = str.split("").map(Number);

  for (let i = 0; i < given[1]; i++) {
    console.log("*".repeat(given[0]));
  }
}

solution("5 3");
