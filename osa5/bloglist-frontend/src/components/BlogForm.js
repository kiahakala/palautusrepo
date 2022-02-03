import React, { useState } from 'react'

const BlogForm = ({ createBlog }) => {
	const [ newTitle, setNewTitle ] = useState('')
	const [ newAuthor, setNewAuthor ] = useState('')
	const [ newUrl, setNewUrl ] = useState('')

	const handleTitleChange = (event) => {
		setNewTitle(event.target.value)
	}

	const handleAuthorChange = (event) => {
		setNewAuthor(event.target.value)
	}

	const handleUrlChange = (event) => {
		setNewUrl(event.target.value)
	}

	const addBlog = (event) => {
		event.preventDefault()
		createBlog({
			title: newTitle,
			author: newAuthor,
			url: newUrl
		})
		setNewTitle('')
		setNewAuthor('')
		setNewUrl('')
	}

	return (
		<>
			<h2>Add a blog</h2>
			<form onSubmit={addBlog}>
				<div>
      Title
					<input
						id='title'
						type='title'
						value={newTitle} name='Title'
						onChange={handleTitleChange} />
				</div>
				<div>
      Author
					<input
						id='author'
						type='author'
						value={newAuthor} name='Author'
						onChange={handleAuthorChange} />
				</div>
				<div>
      Url
					<input
						id='url'
						type='url'
						value={newUrl} name='Url'
						onChange={handleUrlChange} />
				</div>
				<button id="add-blog" type="submit">{'Add'}</button>
			</form>
		</>
	)
}

export default BlogForm