import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./searchbox.css";
import { useState } from 'react';
import Alert from '@mui/material/Alert';

export default function Searchbox({updateinfo}){
    let [city,setcity]=useState("");
    let [error,seterror]=useState(false);
    let Api_Url="https://api.openweathermap.org/data/2.5/weather";
    let Api_Key="82672c957e0b1acb606eeff1a02983dc";
    

    let getweather=async()=>{
        try{
            let response=await fetch(`${Api_Url}?q=${city}&appid=${Api_Key}&units=metric`);
            let jsonres= await response.json();
            console.log(jsonres);
            let result={
                city:city,
                temp:jsonres.main.temp,
                tempmax:jsonres.main.temp_max,
                tempmin:jsonres.main.temp_min,
                humidity:jsonres.main.humidity,
                feels_like:jsonres.main.feels_like,
                weather:jsonres.weather[0].description,
                }
                console.log(result);
                return result;
        }catch(err){
            throw err;
        }


    };


    let Handlecity=(event)=>{
        setcity(event.target.value);
        seterror(false);[]
    };

    let Handlesubmit=async(event)=>{
        try{
        event.preventDefault();
        console.log(city);
        setcity("");
        let info=  await getweather();
        updateinfo(info);
        }catch(error){
            seterror(true)
        }
    };

    return(
        <div className="searchbox" onSubmit={Handlesubmit}>
            <form>
                 <TextField id="city" label="City name" variant="outlined" value={city} onChange={Handlecity} required />
                 <br></br>
                 <br></br>
                 <Button variant="outlined" type="submit">Search</Button>
                 {error &&   <Alert severity="error">No Such PLace Exists!</Alert>}
            </form>

        </div>
    );
}