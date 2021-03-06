/*eslint eqeqeq:0*/
import AxiosHelper from "./AxiosHelper"

const Persons = ({persons,search,setPersons,setClassname,setMessage}) => {

    const handleDelete = (e)=>{
        const key = e.target.id
        const name = persons.find(n=>n.id==key).name
        if(window.confirm(`Delete ${name} ?`)){
            AxiosHelper.Delete(key).then(r=>{
                setPersons(persons.filter(i=>i.name!=name))
                setClassname('error')
                setMessage(`Deleted ${name}`)
                setTimeout(()=>{
                    setMessage(null)
                },3000)
            })
        }
    }
    
    return(
        <div>
            <ul>
                {persons.filter(n=>n.name.toLowerCase().includes(search.toLowerCase())).map(p=><li>{p.name} {p.number} <button onClick={handleDelete} id={p.id}>delete</button></li> ) }
            </ul>
        </div>
    )
}
export default Persons;