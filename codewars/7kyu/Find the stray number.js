function stray(numbers) {
  const arr = numbers.sort((a, b) => a - b);
  console.log(arr);
  if (arr[0] !== arr[1]) {
    if (arr[1] === arr[2]) {
      return arr[0];
    } else {
      return arr[1];
    }
  }
  return arr[arr.length - 1];
}

console.log(stray([17, 17, 3, 17, 17, 17, 17]));
