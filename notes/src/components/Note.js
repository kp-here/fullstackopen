const Note = ({note,toggleImportance}) => {

    const label = note.important
    ? 'make not impotant'
    : 'make important'
    return(
        <div>
            <li className='list-item'>
                {note.content} 
                <button onClick={toggleImportance}>{label}</button>
            </li>
        </div>
    )
}
export default Note;