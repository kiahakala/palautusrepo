const express = require('express')
const app = express()
const cors = require('cors')

require('dotenv').config()
const Person = require('./models/person')

app.use(express.static('build'))
app.use(cors())
app.use(express.json())


//MORGAN MIDDLEWARE
// const morgan = require('morgan')
//     app.use(morgan('tiny'))
//     app.get('/', (req, res) => {
//         res.json(persons)
//         console.log(req.headers)
//     })

const errorHandler = (error, request, response, next) => {
	console.error(error.message)

	if (error.name === 'CastError') {
		return response.status(400).send({ error: 'malformatted id' })
	} else if (error.name === 'ValidationError') {
		return response.status(400).json({ error: error.message })
	}
	next(error)
}

const requestLogger = (request, response, next) => {
	console.log('Method:', request.method)
	console.log('Path:  ', request.path)
	console.log('Body:  ', request.body)
	console.log('---')
	next()
}

app.use(requestLogger)

//GET PERSONS
app.get('/api/persons', (request, response) => {
	Person.find({}).then(persons => {
		response.json(persons)
	})
})

//ADD PERSON
const generateId = () => {
	return Math.floor(Math.random() * 1200)
}

app.post('/api/persons', (request, response, next) => {
	const body = request.body

	if (!body.name) {
		return response.status(400).json({ error: 'name missing' })
	}

	if (!body.number) {
		return response.status(400).json({ error: 'number missing' })
	}

	const person = new Person({
		name: body.name,
		number: parseInt(body.number),
		id: generateId(),
	})

	person.save()
		.then(savedPerson =>
			savedPerson.toJSON())
		.then(savedAndFormattedPerson => {
			response.json(savedAndFormattedPerson)
		})
		.catch(error => next(error))
})

//GET PERSON
app.get('/api/persons/:id', (request, response, next) => {
	Person.findById(request.params.id)
		.then(person => {
			if (person) {
				response.json(person)
			} else {
				response.status(404).end()
			}
		})
		.catch(error => next(error))
})

//UPDATE EXISTING PERSON
app.put('/api/persons/:id', (request, response, next) => {
	const body = request.body

	const person = {
		name: body.name,
		number: parseInt(body.number),
		id: body.id,
	}

	Person.findByIdAndUpdate(request.params.id, person, { new: true })
		.then(updatedPerson => {
			response.json(updatedPerson)
		})
		.catch(error => next(error))
})

//LOG ADDED PERSON
//morgan.token('/api/persons/:id', (req, res) => {
//    return req.headers['name', 'number'] })

//DELETE PERSON
app.delete('/api/persons/:id', (request, response, next) => {
	Person.findByIdAndRemove(request.params.id)
		.then(() => {
			response.status(204).end()
		})
		.catch(error => next(error))
})

//GET PHONEBOOK INFO
app.get('/info', (request, response) => {
	const date = new Date()

	Person.find({}).then(persons => {
		response.send(`The phonebook has info for ${persons.length} persons <br/><br/>${date}`)
	})
})

const unknownEndpoint = (request, response) => {
	response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

app.use(errorHandler)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`Server running on port ${PORT}`)
})
