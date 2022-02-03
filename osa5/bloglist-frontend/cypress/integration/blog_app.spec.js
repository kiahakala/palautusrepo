describe('Blog app', function() {
	beforeEach(function() {
		cy.request('POST', 'http://localhost:3003/api/testing/reset')
		const user = {
			name: 'Elma Hemuliina',
			username: 'Elma Testaa',
			password: 'moro'
		}
		cy.request('POST', 'http://localhost:3003/api/users/', user)
		cy.visit('http://localhost:3000')
	})

	it('login form visible', function() {
		cy.contains('Username')
		cy.contains('Password')
	})

	it('succeeds with right credentials', function() {
		cy.get('#username').type('Elma Testaa')
		cy.get('#password').type('moro')
		cy.contains('#login-button').click()

		cy.contains('Elma Hemuliina logged in')
	})

	it('fails with wrong credentials', function() {
		cy.get('#username').type('Elma Testaa')
		cy.get('#password').type('pieleenmeni')
		cy.contains('#login-button').click()

		cy.get('html').should('not.contain', 'Elma Hemuliina logged in')
	})
})

describe('when logged in', function() {
	beforeEach(function() {
		cy.login({ username: 'Elma Testaa', password: 'moro' })
	})

	it('a new blog can be created', function() {
		cy.contains('Add a Blog').click()
		cy.get('#title').type('A blog created by cypress')
		cy.get('#author').type('Cypress Hill')
		cy.get('#url').type('https://sypressi.fi')
		cy.contains('#add-blog').click({ force: true })

		cy.contains('A blog created by cypress')
		cy.contains('Cypress Hill')
	})

	it('it can be liked', function () {
		cy.contains('Show').click({ force: true })
		cy.contains('Like').click()
		cy.contains('Likes: 1')
	})

	it('a blog can be removed', function() {
		cy.contains('Show').click()
		cy.contains('Remove').click()

		cy.get('.blog').should('not.exist')
	})

	it('blogs are sorted according to likes', function() {
		cy.contains('Add a Blog').click()
		cy.get('#title').type('Some Blog')
		cy.get('#author').type('Some Author')
		cy.get('#url').type('https://someblog.com')
		cy.get('#add-blog').click()

		cy.contains('Some Blog Some Author').parent().find('#like-button')
		cy.get('@likeButton').click()

		cy.wait(500)
		cy.reload()

		cy.get('.blog').first().contains('Some Blog Some Author')
	})
})