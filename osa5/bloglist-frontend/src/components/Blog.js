import React, { useState } from 'react'

const Blog = ({ blog, user, updateBlog, deletionOf }) => {
	const [ visible, setVisible ] = useState(false)
	const [ buttonLikes, setButtonLikes ] = useState(blog.likes)

	// console.log(blog.user.name)
	// console.log(user.name)

	const hideWhenVisible = { display: visible ? '' : 'none' }

	const handleVisibility = () => setVisible(!visible)
	const handleClickLikeButton = () => {
		setButtonLikes(v => v + 1)
		updateBlog({
			likes: buttonLikes
		})
	}

	const handleDelete = () => {
		deletionOf()
	}

	return (
		<div className='blog'>
			<strong>{blog.title}</strong> {blog.author}
			<br/>
			<div style={hideWhenVisible}>{blog.url}
				<br/>
				{`Added by: ${blog.user.name}`}
				<br/>
				{buttonLikes} <button id='like-button' onClick={handleClickLikeButton}>{'Like'}</button>
				<br/>
				{ blog.user.name === user.name ? <button className='delete-button' onClick={handleDelete}>{'Remove'}</button> : null }
			</div>
			<button id='show-button' className='btn-visibility' onClick={handleVisibility}>{ visible ? 'Hide' : 'Show' }</button>
		</div>
	)
}

export default Blog