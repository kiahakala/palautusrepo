const blogsRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')


blogsRouter.get('/', async (request, response) => {
	const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
	response.json(blogs.map(blog => blog.toJSON()))
})

blogsRouter.get('/:id', async (request, response) => {
	const blog = await Blog.findById(request.params.id)
	if (blog) {
		response.json(blog.toJSON())
	} else {
		response.status(404).end()
	}
})

const getTokenFrom = request => {
	const authorization = request.get('authorization')
	if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
		return authorization.substring(7)
	} return null
}

blogsRouter.post('/', async (request, response) => {
	const body = request.body
	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	if (!token || !decodedToken.id) {
		return response.status(401).json({ error: 'Token missing or invalid' })
	}
	const user = await User.findById(decodedToken.id)
	const blog = new Blog({
		title: body.title,
		author: body.author,
		url: body.url,
		likes: body.likes,
		user: user._id
	})
	if (!body.url || !body.title) {
		response.status(400).end()
	} else {
		const savedBlog = await blog.save()
		user.blogs = user.blogs.concat(savedBlog._id)
		await user.save()
		response.status(201).json(savedBlog.toJSON())
	}
})

blogsRouter.put('/:id', async (request, response) => {
	const body = request.body
	const blog = {
		title: body.title,
		author: body.author,
		url: body.url,
		likes: body.likes,
		user: body.user.id
	}
	const updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
	response.json(updatedBlog)
})

blogsRouter.delete('/:id', async (request, response) => {
	const blog = await Blog.findById(request.params.id)
	const token = getTokenFrom(request)
	const decodedToken = jwt.verify(token, process.env.SECRET)
	const user = await User.findById(decodedToken.id)

	if (blog.user.toString() !== user.id.toString()) {
		return response.status(401).json({ error: 'No permission to remove the blog' })
	} else {
		await Blog.findByIdAndRemove(request.params.id)
		response.status(204).end()
	}
})

module.exports = blogsRouter

