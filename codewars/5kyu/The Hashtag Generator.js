function generateHashtag(str) {
  if (str.length === 0) return false;
  const strArr = str.split(" ");
  if (!strArr[0]) strArr.splice(0, 1);
  const finalArr = strArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const ans = "#" + finalArr.join("");

  if (ans.length > 140 || ans === "#") {
    return false;
  } else {
    return "#" + finalArr.join("");
  }
}
