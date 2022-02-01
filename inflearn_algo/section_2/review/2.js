const see = (str) => {
  const input = str.trim().split("\n");
  const inputNum = input.shift();
  const inputStudents = input[0].split(" ").map(Number);
  let max = 0;
  const ans = [];

  for (let student of inputStudents) {
    if (student > max) {
      ans.push(student);
      max = student;
    }
  }

  console.log(ans.length);
};

see(`8
130 135 148 140 145 150 150 153`);
