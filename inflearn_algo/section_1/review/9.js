const change = (str) => {
  const regex = /A/g;
  console.log(str.replace(regex, "#"));
};

change("BANANA");
