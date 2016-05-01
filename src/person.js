class Person {
	constructor(name) {
		this.name = name;
	}

	greet() {
		return this.name + " say hello to you.";
	}
}

console.log(new Person("zhangxu").greet());