const isTriangle = (str) => {
  const arr = str
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log(arr[arr.length - 1] < arr[0] + arr[1]);
};

isTriangle(`13 33 17`);
