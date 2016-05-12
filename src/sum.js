function sum(...numbers) {
	return numbers.reduce((prev, current) => prev + current);
}

function anotherSum(x, y) {
	return x + y;
}

console.log(sum(1, 2, 3, 10));

let nums = [1, 2];

console.log(anotherSum(...nums));