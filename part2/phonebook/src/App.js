import { useState,useEffect } from 'react'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import AxiosHelper from './components/AxiosHelper';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newNumber,setNewNumber] = useState('');
  const [newName, setNewName] = useState('')
  const [search,setSearch] = useState('');
  
  useEffect(()=>{
    AxiosHelper.Get().then(r=>setPersons(r))
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter search={search} setSearch={setSearch}/>
      <h3>Add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons}/>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} setPersons={setPersons}/>
    </div>
  )
}
export default App