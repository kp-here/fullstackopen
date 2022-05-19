import {useState} from 'react'

const App = () =>{

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]

  const [arry,setArry] = useState(new Array(7).fill(0));
  const [index,setIndex] = useState(Math.floor(Math.random()*7));
  const [largest,setLargest] = useState(index);

  const nextAnecdote =()=>{

    setIndex(Math.floor(Math.random()*7))
    console.log(arry);
  
  }

  const Vote =()=>{
    const copy = [...arry]
    copy[index]+=1
    setArry(copy)
    console.log(arry);
;
    setLargest(arry.indexOf(Math.max.apply(null,arry)))
  }
  
  
  return(
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[index]} - {index}</p>
      <p>has {arry[index]} votes</p>
      <button onClick={Vote}>vote</button>
      <button onClick={nextAnecdote}>next anecdote</button>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[largest]}</p>
      <p> has {arry[largest]} votes</p>
    </div>
  )
    
}

export default App;
