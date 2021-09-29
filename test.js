// concat

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = arr1.find(x => x < 4);

// find

const inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

const result = inventory.find(fruit => fruit.name === 'cherries');

// sort 

// it sorts an array in according to "ASCII code"

const fruit = ['banana', 'cherry', 'orange', 'apple']

const sortResult = fruit.sort();

// indexOf

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison')); 

console.log(beasts.indexOf('bison', 2)); //from index

console.log(beasts.indexOf('cat'));







