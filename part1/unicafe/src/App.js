import {useState} from 'react'

const Button = ({onClick,text})=>{
  return(

    <button onClick={onClick}>{text}</button>
  )
}

const StaticLine = ({text,value})=>{
  return(
    <>
      <tr>
        <td>{text}</td>
        <td>{value}</td>
      </tr>
    </>
  )
}

const Statistics = ({good,neutral,bad})=>{
  var total = good+bad+neutral
  if(good|neutral|bad){
    return(
      <>
        <table>
          <tbody>
            <StaticLine text='good' value={good}/>
            <StaticLine text= 'neutral' value={neutral}/>
            <StaticLine text = 'bad' value={bad}/>
            <StaticLine text = 'average' value={total/3}/>
            <StaticLine text = 'positive' value={(good/total)*100 +' %'}/>
          </tbody>
        </table>
      </>
    )
  }
  return(
    <p>No feedback given</p>
  )
}


const App = () =>{
  const [good,setGood] = useState(0);
  const [neutral,setNeutral] = useState(0);
  const [bad,setBad] = useState(0);

  
  
  return(
    <div>
      <h1>give feedback </h1>
      <Button onClick={()=>{setGood(good+1)}} text='good'/>
      <Button onClick={()=>{setNeutral(neutral+1)}} text='neutral'/>
      <Button onClick={()=>{setBad(bad+1)}} text='bad'/>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>
      
     
    </div>
  )
    
}

export default App;
