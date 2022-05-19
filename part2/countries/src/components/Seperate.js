import { useState } from "react";
import Country from "./Country";

const Seperate = ({val}) => {

    const [flag,setFlag] = useState(false);
    

    const handleClick =()=>{
        setFlag(!flag)
    }

    return(
        <div>
            {val.name.common} <button onClick={handleClick}>{flag?'hide':'show'}</button>
            {flag?<Country a={val}/>:<></>}
        </div>
    )
}
export default Seperate;