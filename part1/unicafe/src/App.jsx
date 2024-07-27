import { useState } from 'react'

const Button = ({onClick, text})=>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}


//statisticline component
const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

const Statistics = (props) => {
  //conditional rendering with all clicks
  if(props.all === 0){
    return(
      <div>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }

  return(
    <div>
      <StatisticLine text="good" value ={props.good} />
      <StatisticLine text="neutral" value ={props.neutral} />
      <StatisticLine text="bad" value ={props.bad} />
      <StatisticLine text="all" value ={props.all} />
      <StatisticLine text="average" value ={props.average} />
      <StatisticLine text="positive" value ={props.positive + " %"} />
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
