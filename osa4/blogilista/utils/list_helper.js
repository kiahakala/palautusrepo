const dummy = (blogs) => {
	return blogs.length + 1
}

const totalLikes = (blogs) => {
	const total = (sum, like) => sum + like
	const likes = blogs.map(blog => blog.likes)
	console.log(likes)
	return likes.reduce(total, 0)
}

const favBlog = (blogs) => {
	const likes = blogs.map(blog => blog.likes)
	const mostLikes = Math.max(...likes)
	const body = blogs.find(blog => blog.likes === mostLikes)
	return {
		title: body.title,
		author: body.author,
		likes: body.likes
	}
}

const mostBlogs = (blogs) => {
	const authors = blogs.reduce((blogsByAuthor, blog) => {
		blogsByAuthor[blog.author] = (blogsByAuthor[blog.author] || 0) + 1
		return blogsByAuthor
	}, {})
	const author = Object.keys(authors).reduce((a, b) => authors[a] > authors[b] ? a : b)
	const maxValue = () => Math.max(...Object.values(authors))
	return {
		author: author,
		blogs: maxValue()
	}
}

const mostLikes = (blogs) => {
	const authors = blogs.reduce((authorLikes, blog) => {
		authorLikes[blog.author] = (authorLikes[blog.author] || 0) + blog.likes
		return authorLikes
	}, {})
	const author = Object.keys(authors).reduce((a, b) => authors[a] > authors[b] ? a : b)
	const maxValue = () => Math.max(...Object.values(authors))
	console.log(author, maxValue())
	return {
		author: author,
		likes: maxValue()
	}
}

module.exports = {
	dummy, totalLikes, favBlog, mostBlogs, mostLikes
}