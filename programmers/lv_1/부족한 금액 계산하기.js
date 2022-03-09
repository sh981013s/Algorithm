function solution(price, money, count) {
  let neededPrice = 0;
  for (let i = 1; i <= count; i++) {
    neededPrice += price * i;
  }
  return money > neededPrice ? 0 : Math.abs(money - neededPrice);
}

console.log(solution(3, 20, 4));
