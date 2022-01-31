const howManyUpper = (str) => {
  const regex = /[A-Z]/g;
  console.log(str.match(regex).length);
};

howManyUpper(`KoreaTimeGood`);
