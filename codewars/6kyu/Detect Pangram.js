function isPangram(string) {
  const alphabetList = [..."abcdefghijklmnopqrstuvwxyz"];

  return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}

console.log(isPangram("Cwm fjord bank glyphs vext quiz"));
