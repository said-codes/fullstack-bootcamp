import { useState } from 'react'

const Button = ({onClick, text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}

const Statistics = (props) => {
  return (
    <div>
      <h1>Statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  )
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  //all clicks
  const all = good + neutral + bad
  // average good = 1 netutra= 0 bad= -1
  const average = (good - bad) / all || 0
  // positive percentage
  const positive = (good / all) * 100 || 0


  const handleGoodClick = ()=>{
    setGood(previous => previous +1)
  }
  const handleNeutralClick = ()=>{
    setNeutral(previous => previous +1)
  }
  const handleBadClick = ()=>{
    setBad(previous => previous +1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={handleGoodClick} text={"good"}/>
      <Button onClick={handleNeutralClick} text={"neutral"} />
      <Button onClick={handleBadClick} text={"bad"} />
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average}
      positive={positive} />
    </div>
  )
}

export default App
