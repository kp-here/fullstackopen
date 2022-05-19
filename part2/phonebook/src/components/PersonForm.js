const PersonForm = ({persons,setPersons,newName,setNewName,setNewNumber,newNumber}) => {

    const handleChangeName = (e)=>{
        setNewName(e.target.value)
    }
    const handleChangeNumber = (e)=>{
        setNewNumber(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(persons.map(p=>p.name).includes(newName)){
            alert(`${newName} is already added to the phonebook`)
        }
        else{
            setPersons(persons.concat({name:newName,number:newNumber}))
            setNewName('')
            setNewNumber('')
        }
    }
    return(
        <div>
            <form onSubmit={handleSubmit}> 
                <div>name: <input value={newName} onChange={handleChangeName}/></div>
                <div>number: <input value={newNumber} onChange={handleChangeNumber}/></div>
                <div><button type="submit">add</button></div>
            </form>
        </div>
    )
}
export default PersonForm;