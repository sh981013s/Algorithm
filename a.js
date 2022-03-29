const array = ["12", "34", "56", "78", "99"];
const x = array.reduce((acc, cur, i, arr) => {
  if (cur === "34") {
    arr.splice(1); // eject early
    return acc;
  }
  return (acc += cur);
}, "");
console.log("x: ", x);

console.log(array);
