import {useEffect, useState} from 'react'
import axios from 'axios'
import Country from './components/Country'
import Countries from './components/Countries'
import Seperate from './components/Seperate'

const App = () => {
  const [value,setValue] = useState(null);
  const [search,setSearch] = useState('');
  var names = ''
  
  const handleChange = (e)=>{
    setSearch(e.target.value)
  }
  if(value){
    const a = value.filter((i)=>i.name.common.toLowerCase().includes(search.toLowerCase()))

    names = search?
      (a.length>10?
        'Too many matches, specify another filter':
        (a.length===1?
          <Country a={a[0]}/>:
          a.map((i)=><Seperate val={i}/>))):
    <Countries a={a}/>
  }
  else{
    names='Loading countries..'
  }

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
      {names}
    </div>
  )
}
export default App; 