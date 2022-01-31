const getMinNum = (str) => {
  const inputArr = str.trim().split(" ").map(Number);
  console.log(Math.min(...inputArr));
};

getMinNum("6 5 11");
