import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {

  switch(action.type) {
    case 'VOTE':
       const id = action.data.id
       const anecdote = state.find(a => a.id === id)

       const changedAnecdote = {...anecdote,
       votes: anecdote.votes + 1}

      const anecdoteVotes = state.map(a => a.id !== id ? a : changedAnecdote)
       return anecdoteVotes.sort((a, b) => b.votes - a.votes)

     case 'NEW_ANECDOTE':
       return [...state, action.data]  
     case 'INIT_ANECDOTE':
       return action.data
     default:
      return state
  }
}

export const voteAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export const createAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch ({
      type: 'NEW_ANECDOTES',
      data: anecdote
    })
  }
}

export const initAnecdotes = () => {
  return async dispatch => {
    const anecdotes  = await anecdoteService.getAll()
    dispatch({ 
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}

export default reducer