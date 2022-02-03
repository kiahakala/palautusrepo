const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', async (request, response) => {
	const users = await User
		.find({}).populate('blogs', { url: 1, title: 1, author: 1 })
	response.json(users.map(u => u.toJSON()))
})

usersRouter.post('/', async (request, response) => {
	const body = request.body
	const users = await User.find({})

	if (!body.username || !body.password) {
		return response.status(400).json({ error: 'Username and password required' })
	} if (body.username.length < 3 || body.password.length < 3) {
		return response.status(400).json({ error: 'Minimum length of username and password is 3 characters!' })
	} if (users.some(user => user.username === body.username)) {
		return response.status(400).json({ error: `Username ${body.username} already exists, please enter another one` })
	}

	const saltRounds = 10
	const passwordHash = await bcrypt.hash(body.password, saltRounds)
	const user = new User({
		username: body.username,
		name: body.name,
		passwordHash,
	})

	const savedUser = await user.save()
	response.json(savedUser)
})

module.exports = usersRouter