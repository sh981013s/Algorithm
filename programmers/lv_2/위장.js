function solution(clothes) {
  const clothesMap = new Map();
  let ans = 1;

  clothes.forEach((item) => {
    const data = clothesMap.get(item[1]) || [];
    clothesMap.set(item[1], [...data, item[0]]);
  });

  const dataNumArr = [...clothesMap.entries()].map(
    (item) => item[1].length + 1
  );

  return dataNumArr.reduce((acc, cur) => (acc *= cur), ans) - 1;
}

console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
);
