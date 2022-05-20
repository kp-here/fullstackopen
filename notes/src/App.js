import { useState,useEffect } from 'react'
import Note from './components/Note'
import NotesService from './services/NotesService'
import Notification from './components/Notification'
const Footer = ()=>{
  const footerStyle = {
    color:'blue',
    fontStyle:'itatic',
    fontSize:'16'
  }
  return(
    <div style={footerStyle}>
      <>With love, kp</>
    </div>
  )
}
const App = () => {

  
  const [notesList,setNotesList] = useState([]);
  const [newNote,setNewNote] = useState('a new note');
  const [showAll,setShowAll] = useState(false);
  const [errorMessage,setErrorMessage] = useState(null);
  
  
  useEffect(()=>{
    NotesService.getAll().then(a=>{setNotesList(a)})
  },[])

  const addNote = (e)=>{

    e.preventDefault()
    const noteObject = {
      id: notesList.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
      
    }
    
    NotesService.create(noteObject).then((res)=>{
      console.log(res);
      setNewNote('')
      setNotesList(notesList.concat(noteObject))
    })
    
  }

  const handleChange = (e)=>{
    setNewNote(e.target.value)
  }

  const toggleImportanceOf =(id)=>{
    const note = notesList.find(n=>n.id===id)

    const changedNote = { ...note, important:!note.important}
    
    NotesService.update(id,changedNote).then(res=>{
      setNotesList(notesList.map(n=>n.id===id?changedNote:n))
    })
    .catch(err=>{
      setErrorMessage(`Note '${note.content}' was already removed from server`)
      setTimeout(()=>{
        setErrorMessage(null)
      },3000)
      setNotesList(notesList.filter(n=>n.id!==id))
    })
  }
  
  const notesToBeShowed = showAll ? notesList : notesList.filter(note=>note.important)

  return (
    <div>
      <h1>Notes</h1>
      <Notification message={errorMessage}/>
      <button onClick={()=>setShowAll(!showAll)}> show {showAll? "important" : "all"}</button>
      <ul>
        {notesToBeShowed.map(note=>(<Note toggleImportance={()=>{toggleImportanceOf(note.id)}} note={note} key={note.id}/>))}
      </ul>
      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleChange}/>
        <button type='submit'>save</button>
      </form>
      <Footer/>
    </div>
  )
}

export default App