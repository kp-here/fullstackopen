const Header = (p)=>{
  return(
    <>
      <h1>{p.course}</h1>
    </>
  )
}

const Content = (p)=>{
  return(
    <>
    <p>{p.part} {p.number}</p>
    </>
  )
}

const Total = (p)=>{
  return(
    <>
    <h4>Number of exercises {p.sum}</h4>
    </>
  )
}

const App = () =>{
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return(
    <>
      <Header course = {course}/>
      <Content part={part1} number ={exercises1}/>
      <Content part={part2} number ={exercises2}/>
      <Content part={part3} number ={exercises3}/>
      <Total sum ={exercises1+exercises2+exercises3}/>
    </>
  )
    
}

export default App;
