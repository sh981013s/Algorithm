function arrayDiff(a, b) {
  return a.filter((e) => !b.includes(e));
}

console.log(arrayDiff([1, 2], [1]));
