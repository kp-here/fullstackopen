
const Course = ({course})=>{
    var sum=0
    course.parts.forEach(val=>{sum+=val.exercises})
    
    return(
      <>
        <h1>{course.name}</h1>
        {(course.parts).map((part)=><p>{part.name} {part.exercises}</p>)}
        <h4>total of {sum} exercises</h4>
      </>
    )
    
}

export default Course