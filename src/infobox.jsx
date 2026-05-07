import Card from "@mui/material/Card";
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';//cold icon
import WbSunnyIcon from '@mui/icons-material/WbSunny';//hot icon
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';//rain icon


export default function Infobox({info}){
    //images from unsplash
    const Hot_Url="https://images.unsplash.com/photo-1524594081293-190a2fe0baae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const Cold_Url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const Rain_url="https://plus.unsplash.com/premium_photo-1725408051956-a6dc142169bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="infobox">
   <div
  className={`cardcontainer ${
    info.weather?.includes("rain")
      ? "rain"
      : info.weather?.includes("cloud")
      ? "cloud"
      : info.temp < 15
      ? "cold"
      : "sunny"
  }`}
> 
      <Card sx={{ maxWidth: 345, margin: "0 auto" }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80? Rain_url : info.temp>15? Hot_Url: Cold_Url}
        title="green iguana"
      />
      <CardContent sx={{ textAlign: "center", padding: "20px" }}>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {
            info.humidity>80? <ThunderstormIcon className="weather-icon" /> : info.temp>15? <WbSunnyIcon className="weather-icon" />: <AcUnitIcon className="weather-icon" />
          }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
            <p>temperature: {info.temp}&deg;C</p>
            <p>Humidity: {info.humidity}&deg;C</p>
            <p>temp-Max: {info.tempmax}&deg;C</p>
            <p>temp-Min: {info.tempmin}&deg;C</p>
            <p>
                The weather can be described as <i>{info.weather}</i> but feels like {info.feels_like}&deg;C
            </p>
         
        </Typography>
      </CardContent>
    </Card>
    </div>

        </div>
    );
}