import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])
  const [max, setMax] = useState(0)

  const randomNum = (anecdotes) => Math.floor(Math.random() * anecdotes.length)
  console.log(selected);

  const copy = [...points]

  // increment the value in position selected by one
  const updateVotes = (copy) => {
    copy[selected] += 1
    setPoints(copy)
    updateMax(copy)
  }

  const updateMax = (copy) => {
    let i = 0;
    let maxNum = max
    for (i; i < copy.length; i++) {
        if (copy[i] > copy[maxNum]) {
          maxNum = i
        }
    }
    setMax(maxNum)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {copy[selected]} votes</p>
      <button onClick={() => setSelected(randomNum(anecdotes))}>next anecdote</button>
      <button onClick={() => updateVotes(copy)}>vote</button>

      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[max]}</p>
      <p>has {copy[max]} votes</p>
    </div>
  )
}

export default App