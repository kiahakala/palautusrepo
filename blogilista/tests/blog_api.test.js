const mongoose = require('mongoose')
const helper = require('./test_helper')
const supertest = require('supertest')
const bcrypt = require('bcryptjs')
const User = require('../models/user')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

let token

describe('when there are initially blogs saved', () => {

	beforeEach(async () => {
		await Blog.deleteMany({})
		await Blog.insertMany(helper.initialBlogs)
	})

	test('blogs are returned as json', async () => {
		await api
			.get('/api/blogs')
			.expect(200)
			.expect('Content-Type', /application\/json/)
	})

	test('all blogs are returned', async () => {
		const response = await api.get('/api/blogs')

		expect(response.body).toHaveLength(helper.initialBlogs.length)
	})

	test('a specific blog is within the returned blogs', async () => {
		const response = await api.get('/api/blogs')
		const titles = response.body.map(r => r.title)
		console.log(titles)
		expect(titles).toContain(
			'React patterns'
		)
	})
})

describe('viewing a specific blog', () => {

	test('a specific blog can be viewed', async () => {
		const blogsAtStart = await helper.blogsInDb()

		const blogToView = blogsAtStart[0]

		const resultBlog = await api
			.get(`/api/blogs/${blogToView.id}`)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		const processedBlogToView = JSON.parse(JSON.stringify(blogToView))

		expect(resultBlog.body).toEqual(processedBlogToView)
	})
})

describe('addition of a new blog', () => {

	test('a valid blog can be added ', async () => {
		const newBlog = {
			title: 'Async/await simplifies making async calls',
			author: 'New Author',
			url: 'wwww,blogtest.com',
			likes: '22',
			user: '61cec9058837c84c038e1c18'
		}

		await api
			.post('/api/blogs')
			.set('Authorization', `bearer ${token}`)
			.send(newBlog)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		const blogsAtEnd = await helper.blogsInDb()
		expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 1)

		const titles = blogsAtEnd.map(n => n.title)
		expect(titles).toContain(
			'Async/await simplifies making async calls'
		)
	})

	test('no likes equals 0', async () => {
		const newBlog = {
			title: 'No one likes this blog',
			author: 'B.L. Ogger',
			url: 'www.dontbother.com',
			user: '61cec76c1c684421f9c90a61'
		}

		await api
			.post('/api/blogs')
			.set('Authorization', `bearer ${token}`)
			.send(newBlog)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		const blogsAtEnd = await helper.blogsInDb()
		const blogLikes = blogsAtEnd.map(blog => blog.likes)

		expect(blogLikes[3]).toBe(0)
	})

	test('blog without title or url is not added', async () => {
		const newBlog = {
			author: 'Bob Logger',
		}

		await api
			.post('/api/blogs')
			.set('Authorization', `bearer ${token}`)
			.send(newBlog)
			.expect(400)

		const blogsAtEnd = await helper.blogsInDb()

		expect(blogsAtEnd).toHaveLength(helper.initialBlogs.length + 2)
	})

	test('id is in the right form', async () => {
		const fetchedBlogs = await helper.blogsInDb()
		const ids = fetchedBlogs.map(blog => blog.id)
		expect(ids).toBeDefined()
	})
})

describe('deletion of a blog', () => {

	test('a blog can be deleted', async () => {
		const blogsAtStart = await helper.blogsInDb()
		const blogToDelete = blogsAtStart[0]

		await api
			.delete(`/api/blogs/${blogToDelete.id}`)
			.expect(204)

		const blogsAtEnd = await helper.blogsInDb()

		expect(blogsAtEnd).toHaveLength(
			helper.initialBlogs.length + 1
		)

		const titles = blogsAtEnd.map(r => r.title)

		expect(titles).not.toContainEqual(blogToDelete.title)
	})
})

describe('when there is initially one user at db', () => {
	beforeEach(async () => {
		await User.deleteMany({})

		const passwordHash = await bcrypt.hash('sekret', 10)
		const user = new User({ username: 'root', passwordHash })

		await user.save()
	})

	test('creation succeeds with a fresh username', async () => {
		const usersAtStart = await helper.usersInDb()

		const newUser = {
			username: 'kiaha',
			name: 'Kia Hakala',
			password: 'salasana',
		}

		await api
			.post('/api/users')
			.send(newUser)
			.expect(200)
			.expect('Content-Type', /application\/json/)

		const usersAtEnd = await helper.usersInDb()
		expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

		const usernames = usersAtEnd.map(u => u.username)
		expect(usernames).toContain(newUser.username)
	})

	test('creation fails with proper statuscode and message if username already taken', async () => {
		const usersAtStart = await helper.usersInDb()

		const newUser = {
			username: 'root',
			name: 'Superuser',
			password: 'salainen',
		}

		const result = await api
			.post('/api/users')
			.send(newUser)
			.expect(400)
			.expect('Content-Type', /application\/json/)

		expect(result.body.error).toContain(`Username ${newUser.username} already exists, please enter another one`)

		const usersAtEnd = await helper.usersInDb()
		expect(usersAtEnd).toHaveLength(usersAtStart.length)
	})
})

afterAll(() => {
	mongoose.connection.close()
})