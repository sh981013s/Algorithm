function descendingOrder(n) {
  const input = +n
    .toString()
    .split("")
    .sort((a, b) => b - a)
    .join("");
  return input;
}

console.log(descendingOrder(1234));
