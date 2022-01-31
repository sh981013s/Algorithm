const howMany = (str) => {
  const input = str.trim().split("\n");
  const givenStr = input[0];
  const givenChar = input[1];
  let cnt = 0;
  for (let char of givenStr) {
    if (char === givenChar) {
      cnt++;
    }
  }

  console.log(cnt);
};

howMany(`COMPUTERPROGRAMMING
R`);
