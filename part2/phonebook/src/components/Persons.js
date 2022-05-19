
const Persons = ({persons,search}) => {
    
    return(
        <div>
            <ul>
                {persons.filter(n=>n.name.toLowerCase().includes(search.toLowerCase())).map(p=><li>{p.name} {p.number}</li>)}
            </ul>
        </div>
    )
}
export default Persons;