import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { clickForVote } from '../reducers/anecdoteReducer'
import { showNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const anecdotes = useSelector(({ filter, anecdotes }) => {
        if (filter.length > 0) {
            return anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
        } else return anecdotes
    }
    )
    
    const vote = (anecdote, id) => {
        dispatch(clickForVote(anecdote, id))
        dispatch(showNotification(`You voted '${anecdote.content}'`, 5))
      }

  return (
    <>
    {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes} votes
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList