/*eslint eqeqeq:0*/
import AxiosHelper from "./AxiosHelper"

const Persons = ({persons,search,setPersons}) => {

    const handleDelete = (e)=>{
        const key = e.target.id
        if(window.confirm(`Delete ${persons.find(n=>n.id==key).name} ?`)){
            AxiosHelper.Delete(key).then(r=>{
                setPersons(persons.filter(i=>i.id!=key))
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