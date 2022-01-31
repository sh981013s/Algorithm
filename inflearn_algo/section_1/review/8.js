const getWrong = (str) => {
  let input = str.trim().split(" ").map(Number);
  const sum = input.reduce((acc, cur) => acc + cur);
  const diff = Math.abs(100 - sum);

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      if (input.indexOf(input[i]) === input.indexOf(input[j])) {
      } else {
        if (input[i] + input[j] === diff) {
          input.splice(j, 1);
          input.splice(i, 1);
          console.log(input[i], input[j], "found");
          break;
        }
      }
    }
  }

  console.log(input.join(" "));
  console.log(input.reduce((acc, cur) => acc + cur));
};

getWrong(`20 7 23 19 10 15 25 8 13`);
