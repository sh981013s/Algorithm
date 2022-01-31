const getOdd = (str) => {
  const input = str.trim().split(" ").map(Number);
  const oddArr = input.filter((num) => num % 2 !== 0);
  const oddSum = oddArr.reduce((acc, cur) => acc + cur);
  const oddMin = Math.min(...oddArr);
  console.log(oddSum);
  console.log(oddMin);
};

getOdd(`12 77 38 41 53 92 85`);
