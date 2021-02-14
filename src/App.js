import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import WeatherSearch from "./components/SearchLocation";
import Address from './components/Address'
require("dotenv").config();

function App() {
  const [address, setAddress] = useState([]);
  const fetchChargingLocation = async (lat, lon) => {
    const url = `https://api.openchargemap.io/v3/poi/?output=json&maxresults=10&compact=true&verbose=false&latitude=${lat}&longitude=${lon}&distanceunit=KM`;
    const res = await fetch(url);
    const data = await res.json();
    setAddress(data);
  };

  const fetchLongitudeAndLatitude = async (location) => {
    if (location) {
      const API_key = process.env.API_KEY;
      const url = `https://us1.locationiq.com/v1/search.php?key=pk.b85addb584eaefbe9e93b63a33a9a3e9&q=${location}&countrycodes=in&format=json&limit=1`;
      const res = await fetch(url);
      const data = await res.json();
      await fetchChargingLocation(data[0].lat, data[0].lon);
    }
  };

  // useEffect(()=>{
  //   fetchChargingLocation();
  //   fetchLongitudeAndLatitude();
  // },[])
  return (
    <div className="App">
      <Header className="App-header"></Header>
      <WeatherSearch api_call={fetchLongitudeAndLatitude} />
      { address.length>0 && <Address address={address}/>}
    </div>
  );
}

export default App;
