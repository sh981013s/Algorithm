const solution = (nums) => {
  const MAX_NUM = nums.length / 2;
  const possibleArr = [...new Set(nums)];

  /*  for (let num of nums) {
    if (!possibleArr.includes(num)) {
      possibleArr.push(num);
    }
  }*/

  return possibleArr.length >= MAX_NUM ? MAX_NUM : possibleArr.length;
};

console.log(solution([3, 3, 3, 2, 2, 2]));
