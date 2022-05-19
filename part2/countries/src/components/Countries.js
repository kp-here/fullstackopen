const Countries = ({a}) => {
    
    return(
        <div>
            {a.map(i=><div>{i.name.common}</div>)}
            
        </div>
    )
}
export default Countries;