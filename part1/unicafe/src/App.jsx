import { useState } from 'react'

const Button = ({onClick, text})=>{
  return(
    <button onClick={onClick}>{text}</button>
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
      <h2>Statistics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>average {average}</p>
      <p>positive {positive}%</p>
    </div>
  )
}

export default App
