var faker = require('faker');

module.exports = {
	'id': 1,
	'first_name': faker.name.firstName(),
	'last_name': faker.name.lastName(),
	'email': faker.internet.email(),
	'username': faker.internet.userName(),
	'password': faker.internet.password(),
	'avatar': faker.internet.avatar()
};