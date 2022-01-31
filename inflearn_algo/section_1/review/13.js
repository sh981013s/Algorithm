const caseConverter = (str) => {
  const strArr = [];
  for (let char of str) {
    if (char === char.toUpperCase()) {
      strArr.push(char.toLowerCase());
    } else {
      strArr.push(char.toUpperCase());
    }
  }

  console.log(strArr.join(""));
};

caseConverter(`StuDY`);
