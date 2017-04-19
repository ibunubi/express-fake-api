// this is just data model with faker js as data generator

var faker = require('faker');

var users = [];

for (var index = 1; index <= 50; index++) {
	let newRow = {
		'id': index,
		'first_name': faker.name.firstName(),
		'last_name': faker.name.lastName(),
		'email': faker.internet.email(),
		'username': faker.internet.userName(),
		'password': faker.internet.password(),
		'avatar': faker.internet.avatar()
	};
	users.push(newRow);
}

module.exports = users;