const car = (str) => {
  const input = str.split("\n");
  const date = input[0];
  const cars = input[1].split(" ");
  let sum = 0;
  for (let car of cars) {
    if (date === car[car.length - 1]) {
      sum++;
    }
  }
  console.log(sum);
};

car(`0
12 20 54 30 87 91 30`);
