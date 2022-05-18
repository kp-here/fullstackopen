const Header = (p)=>{
  const {name}=p
  return(
    <>
      <h1>{name}</h1>
    </>
  )
}

const Content = (p)=>{
  const {parts} = p
  return(
    <>
    <p>{parts[0].name} {parts[0].exercises}</p>
    <p>{parts[1].name} {parts[1].exercises}</p>
    <p>{parts[2].name} {parts[2].exercises}</p>
    </>
  )
}

const Total = (p)=>{
  return(
    <>
    <h4>Number of exercises {p.parts[0].exercises+p.parts[1].exercises+p.parts[2].exercises}</h4>
    </>
  )
}

const App = () =>{

  const course = {
    name : 'Half Stack application development',
    parts : [{
        name:'Fundamentals of React',
        exercises: 10
      },
      {
        name:'Using props to pass data',
        exercises: 7
      },
      {
        name:'State of a component',
        exercises: 14
      }
    ]
  }
  const {name, parts} =course
  return(
    <>
      <Header name = {name}/>
      <Content parts={parts}/>
      <Total parts ={parts}/>
    </>
  )
    
}

export default App;
