import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => <div><h1>{props.text}</h1></div>

const Display = (props) => (
  <div>
    <Header text={props.header} />
    <div>
      {props.anecdote}
    </div>
    <div>
      has {props.votes} votes
    </div>
  </div>
)

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [allVotes, setAll] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf, 0))

  const handleVoteClick = () => {
    const copy = [...allVotes]
    copy[selected] += 1
    setAll(allVotes.splice(0, 6))
    setAll(allVotes.concat(copy))
  }

  const handleNextClick = () => {
    const random = Math.floor(Math.random() * 6)
    setSelected(random)
  }

  const popularity = [...allVotes]
  popularity.sort()
  const max = popularity[5]
  const positionOfMax = allVotes.indexOf(max)

  return (
    <div>
      <Display header='Anecdote of the day' anecdote={props.anecdotes[selected]} votes={allVotes[selected]} />
      <div>
        <Button handleClick={handleVoteClick} text='vote' />
        <Button handleClick={handleNextClick} text='next anecdote' />
      </div>
      <Display header='Anecdote with most votes' anecdote={props.anecdotes[positionOfMax]} votes={allVotes[positionOfMax]} />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)