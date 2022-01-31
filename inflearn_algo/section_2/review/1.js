const bigger = (str) => {
  const input = str.trim().split("\n");
  const num = input.shift();
  const numsArr = input[0].split(" ").map(Number);
  const ans = [numsArr[0]];

  for (let i = 1; i < numsArr.length; i++) {
    if (numsArr[i] > numsArr[i - 1]) {
      ans.push(numsArr[i]);
    }
  }

  console.log(ans.join(" "));
};

bigger(``);
