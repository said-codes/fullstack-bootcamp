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
    </div>
  )
}

export default App
