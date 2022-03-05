const obj = {
	a: 100,
	b: 200,
};

// const copiedObj = obj;

// const copiedObj = { ...obj };

// const copiedObj = JSON.parse(JSON.stringify(obj));

// copiedObj.b = 300;

// console.log(obj, copiedObj);

const a = {
	b: function () {
		console.log(this);
	},
};

a.b();
