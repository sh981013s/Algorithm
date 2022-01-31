const longest = (char) => {
  let input = char.trim().split("\n");
  const howMany = Number(input.shift());
  const idxArr = input.map((str) => str.length);
  const longestIdx = idxArr.indexOf(Math.max(...idxArr));
  console.log(input[longestIdx]);
};

longest(`5 
teacher
time
student
beautiful
good
`);
