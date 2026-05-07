import Searchbox from "./searchbox";
import Infobox from "./infobox";
import { useState } from "react";
export default function Weatherapp(){
    let [weatherinfo,setweatherinfo]=useState({
            city:"Delhi",
            temp:20,
            tempmax:30,
            tempmin:14,
            humidity:47,
            feels_like:24.8,
            weather:"haze",
    })
    let updateinfo=(result)=>{
        setweatherinfo(result);
    }
    return(
        <div style={{textAlign:"center"}} className="main-container">
            <h1 className="main-title">Weather App</h1>
            <p className="main-sub">Real-time climate insights</p>
            <Searchbox updateinfo={updateinfo}/>
            <Infobox info={weatherinfo}/>
        </div>
    );
}