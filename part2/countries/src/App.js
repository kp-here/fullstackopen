import {useEffect, useState} from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Countries'
import Seperate from './components/Seperate'

const App = () => {
  const [value,setValue] = useState([]);
  const [search,setSearch] = useState('');
  
  const handleChange = (e)=>{
    setSearch(e.target.value)
  }
  const a = value.filter((i)=>i.name.common.toLowerCase().includes(search.toLowerCase()))
  const names = a.length>10 && search? 'Too many matches, specify another filter':(search?a.map((i)=><Seperate val={i}/>):<Countries a={a}/>)
  useEffect(()=>{
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(res=>{
        setValue(res.data)
      })
  },[])

  return(
    <div>
      <div>find countries <input onChange={handleChange} value={search}/></div>
      {a.length===1?
      <Country a={a[0]}/>
      :names}
    </div>
  )
}
export default App; 