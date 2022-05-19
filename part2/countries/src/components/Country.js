import axios from "axios";
import { useEffect, useState } from "react";

const KEY =process.env.REACT_APP_API_KEY

const Country = ({a}) => {
    const [weather,setWeather] = useState(null);
    
    useEffect(()=>{
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${a.capital}&appid=${KEY}&units=metric`)
            .then(res=>{
                setWeather(res.data)
            })
    },[])
        
    return(
            <div>
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
                <div>
                    <h2>Weather in {a.name.common}</h2>
                    {weather
                        ?<div>
                            <p>temperature {weather.main.temp} Celcius</p>
                            <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt='weather icon'/>
                            <p>wind {weather.wind.speed} m/s</p>
                        </div>
                        :'loading weather..'
                    } 
                </div>
            </div>
    )
}
export default Country;