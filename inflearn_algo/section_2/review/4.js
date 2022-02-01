const sum = (str) => {
  // make arr with input
  // make another arr with 0
  // num to add with 0
  // with 'for loop' if its not wrong add
  let input = str.trim().split("\n");
  const length = input.shift();
  input = input[0].split(" ").map(Number);
  const numArr = new Array(input.length).fill(0);
  let numToAdd = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === 1) {
      numToAdd++;
      numArr[i] = numToAdd;
    } else {
      numToAdd = 0;
      numArr[i] = numToAdd;
    }
  }

  console.log(numArr.reduce((acc, cur) => acc + cur));
};

sum(`10
1 0 1 1 1 0 0 1 1 0`);
