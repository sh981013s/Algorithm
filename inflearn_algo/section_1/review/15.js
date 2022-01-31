const middle = (str) => {
  const middle = str.length / 2;
  if (str.length % 2 === 0) {
    const ans = str[middle - 1] + str[middle];
    console.log(ans);
  } else {
    console.log(str[Math.floor(middle)]);
  }
};

middle(`good`);
