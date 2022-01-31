const howMany = (str) => {
  const input = Number(str.trim());
  console.log(Math.ceil(input / 12));
};

howMany("178");
