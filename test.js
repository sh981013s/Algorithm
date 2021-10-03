// concat

const arr1 = [1, 2, 3, 0];
const arr2 = [4, 5, 6];

const arr3 = arr1.concat(arr2);
console.log(arr3);

// find

const inventory = [
	{ name: 'apples', quantity: 2 },
	{ name: 'bananas', quantity: 0 },
	{ name: 'cherries', quantity: 5 },
	{ name: 'cherries', quantity: 3 },
];

const result = inventory.find((fruit) => fruit.name === 'cherries');
const result2 = inventory.filter((fruit) => fruit.name === 'cherries');

console.log(result);

// sort

// it sorts an array in according to "ASCII code"

const fruit = ['1', '2', '3', '4'];

const sortResult = fruit.sort((a, b) => b - a);

console.log(sortResult);

// indexOf

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

console.log(beasts.indexOf('bison', 2)); //from index

console.log(beasts.indexOf('cat'));

const sample = [
	{ name: 'beom', contents: 'hi' },
	{ name: 'beom', contents: 'okay' },
	{ name: 'seung', contents: 'yes' },
	{ name: 'seung', contents: 'bye' },
	{ name: 'seung', contents: 'bye' },
	{ name: 'seung', contents: 'bye' },
	{ name: 'beom', contents: 'okay' },
	{ name: 'seung', contents: 'here' },
	{ name: 'beom', contents: 'there' },
	{ name: 'beom', contents: 'bye?' },
];

const sampleData = sample.reduce(
	(acc, cur) => {
		if (acc[acc.length - 1].name === cur.name) {
			const popData = acc.pop();
			if (typeof popData.contents === 'string') {
				return [
					...acc,
					{
						name: cur.name,
						contents: [popData.contents, cur.contents],
					},
				];
			} else {
				return [
					...acc,
					{
						name: cur.name,
						contents: [
							// popData.contents[popData.contents.length - 1],
							...popData.contents,
							cur.contents,
						],
					},
				];
			}
		} else {
			return [...acc, cur];
		}
	},
	[sample[0]]
);

// console.log(...sample);
console.log(sample);
console.log(sampleData);
