import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import { prettyDOM } from '@testing-library/dom'
import Blog from './Blog'

test('renders content', () => {
	const blog = {
		title: 'Test Title',
		author: 'Pöppi Falkenberg-Hakala',
		// url: 'https://www.testi.fi',
	}

	const component = render(
		<Blog blog={blog} />
	)

	const div = component.container.querySelector('.blog')
	console.log(prettyDOM(div))

	component.debug()

	expect(component.container).toHaveTextContent(
		'Test Title'
	)

	const element = component.getByText(
		'Test Title'
	)
	expect(element).toBeDefined()
})

test('clicking the button shows/hides additional info', async () => {
	const blog = {
		title: 'Test Title',
		author: 'Pöppi Falkenberg-Hakala',
		url: 'https://www.testi.fi',
		likes: 2,
	}

	const mockHandler = jest.fn()

	const component = render(
		<Blog blog={blog} handleVisibility={mockHandler} />
	)

	const button = component.getByText('Show')
	fireEvent.click(button)

	expect(mockHandler.mock.calls.length).toBe(1)
})

test('clicking the like button twice calls handler twice', async () => {
	const blog = {
		title: 'Test Title',
		author: 'Pöppi Falkenberg-Hakala',
		url: 'https://www.testi.fi',
		likes: 2,
	}

	const mockHandler = jest.fn()

	const component = render(
		<Blog blog={blog} handleClickLikeButton={mockHandler} />
	)

	const button = component.getByText('Like')
	fireEvent.click(button)
	fireEvent.click(button)

	expect(mockHandler.mock.calls.length).toBe(2)
})