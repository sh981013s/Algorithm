const input = `13 33 17`;

const sideLengthOfTriangle = input.split(' ').map(Number);

const longestSide = Math.max(...sideLengthOfTriangle);

const otherSides = sideLengthOfTriangle.filter((side) => {
	return side !== longestSide;
});

console.log(otherSides[0] + otherSides[1] > longestSide ? 'YES' : 'NO');
