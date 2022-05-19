import { useState,useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import axios from 'axios'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newNumber,setNewNumber] = useState('');
  const [newName, setNewName] = useState('')
  const [search,setSearch] = useState('');
  
  useEffect(()=>{
    axios
      .get('http://localhost:3001/persons')
      .then((res)=>{
        setPersons(res.data)
        // console.log(res.data);
      })
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch}/>
      <h3>Add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search}/>
    </div>
  )
}
export default App