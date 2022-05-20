/*eslint eqeqeq:0*/
import AxiosHelper from "./AxiosHelper"

const PersonForm = ({persons,setPersons,newName,setNewName,newNumber,setNewNumber,setMessage,setClassname}) => {

    const handleChangeName = (e)=>{
        setNewName(e.target.value)
    }
    const handleChangeNumber = (e)=>{
        setNewNumber(e.target.value)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        if(persons.map(p=>p.name).includes(newName)){
            if(window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)){
                const newPerson = {
                    name:newName,
                    number:newNumber
                }
                AxiosHelper.Put(persons.find(n=>n.name==newName).id,newPerson)
                .then(r=>{
                    const newList = [...persons]
                    newList.find(n=>n.name==newName).number=newNumber
                    setPersons(newList)
                    setNewName('')
                    setNewNumber('')
                    setClassname('message')
                    setMessage(`${newName}'s phone number is updated`)
                    setTimeout(()=>{
                        setMessage(null)
                    },3000)
                })
                .catch(err=>{
                    setClassname('error')
                    setMessage(`Information of ${newName} has already beem removed from the server`)
                    setTimeout(()=>{
                        setMessage(null)
                    },3000)
                    }
                )
            }
        }
        else{
            const newPerson = {
                name:newName,
                number:newNumber
            }
            AxiosHelper.Post(newPerson).then(r=>{
                setPersons(persons.concat(r))
                setNewName('')
                setNewNumber('')
            })  
            setClassname('message')
            setMessage(`Added ${newName}`)
            setTimeout(()=>{
                setMessage(null)
            },3000)

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