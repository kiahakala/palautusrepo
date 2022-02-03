import React, { useState, useEffect, useRef } from 'react'
import Blog from './components/Blog'
import BlogForm from './components/BlogForm'
import LoginForm from './components/LoginForm'
import Notification from './components/Notification'
import Togglable from './components/Togglable'
import blogService from './services/blogs'
import loginService from './services/login'

const App = () => {
	const [blogs, setBlogs] = useState([])
	const [errorMessage, setErrorMessage] = useState(null)
	const [successMessage, setSuccessMessage] = useState(null)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [user, setUser] = useState(null)

	const blogFormRef = useRef()

	useEffect(() => {
		const fetchBlogs = async () => {
			blogService.getAll().then(blogs =>
				setBlogs(blogs)
			)
		}
		fetchBlogs()
	}, [])

	useEffect(() => {
		const loggedUserJSON = window.localStorage.getItem('loggedBlogAppUser')
		if (loggedUserJSON) {
			const loggedUser = JSON.parse(loggedUserJSON)
			setUser(loggedUser)
			blogService.setToken(loggedUser.token)
		}

	}, [])

	const handleLogin = async (event) => {
		event.preventDefault()
		try {
			const userLoggingIn = await loginService.login({
				username, password,
			})
			window.localStorage.setItem(
				'loggedBlogAppUser', JSON.stringify(userLoggingIn)
			)
			setUser(userLoggingIn)
			blogService.setToken(userLoggingIn.token)
			setUsername('')
			setPassword('')
			setSuccessMessage(`${username} has logged in`)
			setTimeout(() => {
				setSuccessMessage(null)
			}, 3000)
		} catch (exception) {
			setErrorMessage('Wrong credentials')
			setTimeout(() => {
				setErrorMessage(null)
			}, 3000)
		}
		console.log('logging in with', username, password)
		// setTimeout(() => {
		// 	window.location.reload()
		// }, 3000)
	}

	const handleLogout = (event) => {
		event.preventDefault()
		window.localStorage.removeItem(
			'loggedBlogAppUser'
		)
		setUser(null)
		setSuccessMessage('User has logged out')
		setTimeout(() => {
			setSuccessMessage(null)
		}, 3000)
		console.log('logging out')
	}

	const addBlog = async (blogObject) => {
		blogFormRef.current.toggleVisibility()
		if (!blogObject.title || !blogObject.url) {
			setErrorMessage('Missing title or url')
			setTimeout(() => {
				setErrorMessage(null)
			}, 3000)
		} else {
			await blogService
				.create(blogObject)
				.then(returnedBlog => {
					setBlogs(blogs.concat(returnedBlog))
				})
			setSuccessMessage(`Added a new blog '${blogObject.title}' by ${blogObject.author}`)
			setTimeout(() => {
				setSuccessMessage(null)
			}, 3000)

			console.log('adding blog', blogObject.title)
		}
	}

	const updateBlog = async (id) => {
		const blog = blogs.find(b => b.id === id)
		const changedBlog = { ...blog, likes: blog.likes + 1 }

		const returnedBlog = await blogService
			.update(id, changedBlog)
		setBlogs(blogs.map(blog => blog.id !== id ? blog : returnedBlog))
	}

	const deletionOf = async (id) => {
		const blog = blogs.find(b => b.id === id)
		if (window.confirm(`Remove ${blog.title} by ${blog.author}?`)) {
			await blogService
				.deleteBlog(id)
				.then(
					setBlogs(blogs.filter(b => b.id !== id))
				)
			setSuccessMessage(
				`${blog.title} was deleted`
			)
			setTimeout(() => {
				setSuccessMessage(null)
			}, 3000)
		}
	}

	const loginForm = () => (
		<LoginForm
			username={username}
			password={password}
			handleUsernameChange={({ target }) => setUsername(target.value)}
			handlePasswordChange={({ target }) => setPassword(target.value)}
			handleSubmit={handleLogin}
		/>
	)

	const blogForm = () => (
		<Togglable buttonLabel="Add a Blog" ref={blogFormRef}>
			<BlogForm createBlog={addBlog} />
		</Togglable>
	)

	const blog = () => (
		blogs
			.sort((a, b) => a.likes < b.likes ? 1 : -1)
			.map(blog =>
				<Blog key={blog.id} blog={blog} user={user} updateBlog={() => updateBlog(blog.id)} deletionOf={() => deletionOf(blog.id)}
				/>
			)
	)

	return (
		<div>
			<h1>Blogs</h1>

			<Notification message={errorMessage} />
			<Notification message={successMessage} />

			{user === null ?
				loginForm() :
				<div>
					<p>{user.name} logged in <button onClick={handleLogout}>{'Logout'}</button></p>
					{blogForm()}
					{blog()}
				</div>
			}
		</div>
	)
}

export default App