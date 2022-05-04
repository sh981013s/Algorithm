function filter_list(l) {
  return l.filter((i) => typeof i === "number" && i >= 0);
}

console.log(filter_list([-1, 1, 2, "aasf", "1", "123", 123]));
