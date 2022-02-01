const res = (a, b) => {
  if (a === b) {
    return "D";
  } else if (
    (a === 1 && b === 3) ||
    (a === 2 && b === 1) ||
    (a === 3 && b === 2)
  ) {
    return "A";
  } else {
    return "B";
  }
};

const rock = (str) => {
  const input = str.trim().split("\n");
  const cnt = input.shift();
  const A = input[0].split(" ").map(Number);
  const B = input[1].split(" ").map(Number);
  const ans = [];

  for (let i = 0; i < A.length; i++) {
    const result = res(A[i], B[i]);
    ans.push(result);
  }

  console.log(ans.join("\n"));
};

rock(`5
2 3 3 1 3
1 1 2 2 3`);
