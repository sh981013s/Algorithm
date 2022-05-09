function isIsogram(str) {
  const strSet = new Set(str.toLowerCase());
  return [...strSet].length === str.length;
}

console.log(isIsogram("moOse"));
