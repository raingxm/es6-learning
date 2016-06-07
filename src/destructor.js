let person = {
	name: 'zhangxu',
	age: 25
}

let {name, age} = person;


function getData({results, count}) {
	console.log(results, count);
}

getData({
	name: 'zhangxu',
	age: 26,
	results: ['food', 'drink'],
	count: 33
})