import "./App.css";
import { useState, useEffect,useRef } from "react";
import Header from "./components/Header";
import WeatherSearch from "./components/SearchLocation";
import SearchResult from './components/SearchResult'
require("dotenv").config();

function App() {
  const [searchData, setSearchData] = useState({});
  const wrapperRef = useRef(null);

  const fetchChargingLocation = async (lat, lon) => {
    const url = `https://api.openchargemap.io/v3/poi/?output=json&maxresults=10&compact=true&verbose=false&latitude=${lat}&longitude=${lon}&distanceunit=KM`;
    const res = await fetch(url);
    const data = await res.json();
    setSearchData(data);
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

  return (
    <div className="App" ref={wrapperRef}>
      <Header className="App-header"></Header>
      <WeatherSearch api_call={fetchLongitudeAndLatitude}  wrapperRef={wrapperRef}/>
      { searchData.length>0 && <SearchResult searchData={searchData}/>}
    </div>
  );
}

export default App;
