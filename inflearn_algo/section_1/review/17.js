const noRepeat = (str) => {
  const input = str.trim().split("\n");
  const howMany = input.shift();
  const ansArr = [];

  for (let word of input) {
    if (!ansArr.includes(word)) {
      ansArr.push(word);
    }
  }

  console.log(ansArr.join("\n"));
};

noRepeat(`5
good
time
good
time
student`);
