const noRepeat = (str) => {
  const ansArr = [];
  for (let char of str) {
    if (!ansArr.includes(char)) {
      ansArr.push(char);
    }
  }

  console.log(ansArr.join(""));
};

noRepeat(`ksekkset`);
