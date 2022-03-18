/*function pigIt(str) {
  const mainArr = str.split(" ");
  const ansArr = mainArr.map((word) => {
    return word.substr(1) + `${word[0] + "ay"}`;
  });
  return ansArr.join(" ");
}*/

function pigIt(str) {
  var arrayWord = str.split(" ");
  return arrayWord
    .map(function (word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + "ay";
    })
    .join(" ");
}

console.log(pigIt("Hello world !"));
