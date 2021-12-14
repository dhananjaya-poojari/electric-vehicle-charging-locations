import React from "react";
import { Button, Grid } from "@material-ui/core";
import { useState } from "react";
import Input from './AutosuggestionInput/Input'

let timer;

function WeatherSearch({ api_call }) {
  const [location, setLocation] = useState("");
  const [options, setOptions] = useState([]);

  const handleOnChange = (event) => {
    setLocation(event.target.value);
    timer && clearTimeout(timer);
    timer = setTimeout(async function () {
      const url = `https://us1.locationiq.com/v1/search.php?key=pk.b85addb584eaefbe9e93b63a33a9a3e9&q=${event.target.value}&format=json`;
      const res = await fetch(url);
      const data = await res.json();
      data.length > 0 ? setOptions(data) : setOptions([]);
    }, 500);
  };

  const handleOnSelect=(value)=>{
    setLocation(value);
  }

  return (
    <div style={{ paddingBottom: 20 }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Input options={options} location={location} handleOnChange={handleOnChange} handleOnSelect={handleOnSelect}/>
        <Button
          variant="contained"
          color="primary"
          style={{ marginLeft: 10, marginTop: 10 }}
          onClick={() => api_call(location)}
        >
          Search
        </Button>
      </Grid>
    </div>
  );
}

export default WeatherSearch;
