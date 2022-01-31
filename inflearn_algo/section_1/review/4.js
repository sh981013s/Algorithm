const sum = (str) => {
  const input = Number(str.trim());
  let sum = 0;
  for (let i = 1; i <= input; i++) {
    sum += i;
  }
  console.log(sum);
};

sum("10");
