import anecdoteService from '../services/anecdotes'

const anecdotesAtStart = []

const reducer = (state = anecdotesAtStart, action) => {
  switch(action.type) {
    case 'VOTE':
      const updatedAnecdotes = state.map(anecdote => anecdote.id !== action.data.id ? anecdote : action.data)
      updatedAnecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : ((b.votes < a.votes) ? -1 : 0))
      return updatedAnecdotes
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'INIT_ANECDOTES':
      return action.data
    default: 
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
    
  }
}

export const clickForVote = data => {
  return async dispatch => {
    const votedAnecdote = {
      ...data, votes: data.votes += 1
    }
    await anecdoteService.update(votedAnecdote)
    dispatch({
      type: 'VOTE',
      data: votedAnecdote
    })
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
  }
}

export default reducer