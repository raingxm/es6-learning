function sum(...numbers) {

	return numbers.reduce(function(prev, current) {
		return prev + current;
	});
}

function anotherSum(x, y) {
	return x + y;
}

console.log(sum(1, 2, 3));

let nums = [1, 2];

console.log(anotherSum(...nums));