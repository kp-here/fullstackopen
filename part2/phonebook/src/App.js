import { useState,useEffect } from 'react'
import './index.css'
import Filter from './components/Filter';
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import AxiosHelper from './components/AxiosHelper';
import Notification from './components/Notification';

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newNumber,setNewNumber] = useState('');
  const [newName, setNewName] = useState('')
  const [search,setSearch] = useState('');
  const [message,setMessage] = useState(null);
  const [classname,setClassname] = useState('message');
  
  
  useEffect(()=>{
    AxiosHelper.Get().then(r=>setPersons(r))
  },[])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} classname={classname}/>
      <Filter search={search} setSearch={setSearch}/>
      <h3>Add a new</h3>
      <PersonForm newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} persons={persons} setPersons={setPersons} setMessage={setMessage} setClassname={setClassname}/>
      <h3>Numbers</h3>
      <Persons persons={persons} search={search} setPersons={setPersons} setClassname={setClassname} setMessage={setMessage}/>
    </div>
  )
}
export default App