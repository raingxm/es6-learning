let person = {
	name: 'zhangxu',
	age: 25
}

let {name, age} = person;

function getPerson() {
	let name = 'zhangxu';
	let age = 23;
	return {
		name,
		age,
		greet() { // ES^
			return `Hello, ${this.name}. And I'm ${this.age} old`;
		}
	}
}

console.log(getPerson().greet());

function getData({results, count}) {
	console.log(results, count);
}

getData({
	name: 'zhangxu',
	age: 26,
	results: ['food', 'drink'],
	count: 33
})