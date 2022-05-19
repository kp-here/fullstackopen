const Country = ({a}) => {
    
    return(
            <div>
                <h2>{a.name.common}</h2>
                <p>capital {a.capital}</p>
                <p>area {a.area}</p>
                <h3>languages:</h3>
                <ul>
                {Object.values(a.languages).map(a=><li>{a}</li>)}
                </ul>
                <img src={a.flags.png} alt={a.name.common+' flag' } width={200}/>
            </div>
    )
}
export default Country;