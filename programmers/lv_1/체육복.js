const solution = (n, lost, reserve) => {
  let ans = 0;
  const studentsArr = new Array(n).fill(1);

  for (let i = 0; i < lost.length; i++) {
    studentsArr[lost[i] - 1]--;
  }
  for (let i = 0; i < reserve.length; i++) {
    studentsArr[reserve[i] - 1]++;
  }

  for (let i = 0; i < studentsArr.length; i++) {
    if (!studentsArr[i] && studentsArr[i - 1] === 2) {
      studentsArr[i]++;
      studentsArr[i - 1]--;
    } else if (!studentsArr[i] && studentsArr[i + 1] === 2) {
      studentsArr[i]++;
      studentsArr[i + 1]--;
    }
  }

  for (let student of studentsArr) {
    if (student) ans++;
  }

  return ans;
};

solution(3, [3], [1]);
