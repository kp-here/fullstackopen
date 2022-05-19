const Filter = ({search,setSearch}) => {

    const handleChangeSearch = (e)=>{
        setSearch(e.target.value)
    }
    return(
        <div>filter shown with <input value={search} onChange={handleChangeSearch}/></div>
    )
}
export default Filter;