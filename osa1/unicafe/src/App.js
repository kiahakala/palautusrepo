import React, { useState } from 'react'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tbody>
    <tr>
    <td>{props.text}</td>
    <td>{props.statsValue}</td>
    </tr>
    </tbody>
  )
}

const Statistics = (props) => {
  const all = props.good + props.neutral + props.bad

  const average = props.value / all
  
  const percentage = ((props.good/all)*100).toFixed(5)
  console.log(props)

  if (all === 0) {
    return <p>No feedback given</p>
  }  
  return(
    <table>
      <StatisticLine text="good" statsValue={props.good} />
      <StatisticLine text="neutral" statsValue={props.neutral} />
      <StatisticLine text="bad" statsValue={props.bad}/>
      <StatisticLine text="all" statsValue={all} />
      <StatisticLine text="average" statsValue={average} />
      <StatisticLine text="positive" statsValue={percentage} />
    </table>
  )
} 

const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [value, setValue] = useState(0)

  const handleGood = () => {
    setGood(good + 1)
    setValue(value +1)
    console.log('good', good)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setValue(value + 0)
    console.log('neutral', neutral)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setValue(value -1)
    console.log('bad', bad)
  }





  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => handleGood()} text='good' />
      <Button handleClick={() => handleNeutral()} text='neutral'/>
      <Button handleClick={() => handleBad()} text='bad'/>
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} value={value} />
    </div>
  )
}

export default App