const mongoose = require('mongoose')

// eslint-disable-next-line no-undef
if (process.argv.length<3) {
	console.log('give password as argument')
	// eslint-disable-next-line no-undef
	process.exit(1)
}

// eslint-disable-next-line no-undef
const password = process.argv[2]

const url =
  `mongodb+srv://kia_1:${password}@cluster0.ulwbo.mongodb.net/phonebook-app?retryWrites=true&w=majority`

mongoose.connect(url)

const personSchema = new mongoose.Schema({
	name: String,
	number: String,
	id: Number,
})

const Person = mongoose.model('Person', personSchema)

// eslint-disable-next-line no-undef
const newName = process.argv[3]
// eslint-disable-next-line no-undef
const newNumber = process.argv[4]
// eslint-disable-next-line no-undef
const newId = process.argv[5]

// eslint-disable-next-line no-unused-vars
const person = new Person({
	name: newName,
	number: newNumber,
	id: newId,
})

// person.save().then(response => {
//   console.log(`added ${newName} number ${newNumber} to phonebook`)
//   mongoose.connection.close()
// })

Person.find({}).then(result => {
	console.log('phonebook:')
	result.map(person => {
		console.log(`${person.name} ${person.number}`)
	})
	mongoose.connection.close()
})