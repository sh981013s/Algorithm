function correct(string) {
  return string
    .split("")
    .map((char) => {
      console.log(char);
      if (char === "5") {
        return "S";
      } else if (char === "0") {
        return "O";
      } else if (char === "1") {
        return "I";
      } else return char;
    })
    .join("");
}

console.log(correct("L0ND0N"));
