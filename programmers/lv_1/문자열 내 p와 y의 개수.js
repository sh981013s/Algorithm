function solution(s) {
  const str = s.toUpperCase();
  let pNum = 0;
  let yNum = 0;

  for (let char of str) {
    if (char === "P") {
      pNum++;
    } else if (char === "Y") {
      yNum++;
    }
  }

  if (pNum === yNum) {
    return true;
  } else return !pNum && !yNum;
}

console.log(solution("Pyy"));
