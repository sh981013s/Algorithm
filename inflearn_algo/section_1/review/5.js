const getMin = (str) => {
  const input = str.trim().split(" ").map(Number);
  console.log(Math.min(...input));
};

getMin(`5 3 7 11 2 15 17`);
