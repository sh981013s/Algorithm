const rank = (str) => {
  let input = str.trim().split("\n");
  const length = Number(input.shift());
  input = input[0].split(" ").map(Number);

  const sortedInput = input.sort((a, b) => a - b);
  const ansArr = new Array(length).fill(0);
};
