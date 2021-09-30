import React from 'react'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { useDispatch, useSelector } from 'react-redux'
import { notify, reset } from '../reducers/notificationReducer'

 const AnecdoteList = () => {

   const anecdotes = useSelector(state => state.filter === '' 
     ? state.anecdotes
     : state.anecdotes.filter(a => a.content.toLowerCase().includes(state.filter.toLowerCase()))
   )

   const dispatch = useDispatch()

   const vote = (id, content) => {
     dispatch(voteAnecdote(id))
     dispatch(notify(`you voted for: "${ content }" `))
     setTimeout(() => { dispatch(reset()) }, 5000)
   }

   return (
     <div>
       {anecdotes.map(anecdote =>
         <div key={anecdote.id}>
           <div>
             {anecdote.content}
           </div>
           <div>
             has {anecdote.votes}
             <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
           </div>
         </div>
       )}
     </div>
   )
 }

 export default AnecdoteList