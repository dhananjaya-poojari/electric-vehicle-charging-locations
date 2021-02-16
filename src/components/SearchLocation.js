import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";
import { useState, useEffect, useRef } from "react";
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

  return (
    <div style={{ paddingBottom: 20 }}>
      <Grid container direction="row" justify="center" alignItems="center">
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={options.map((option) => option.display_name)}
          onChange={(event, value) => {
            setLocation(value);
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Location"
              margin="normal"
              variant="outlined"
              InputProps={{ ...params.InputProps, type: "search" }}
              style={{
                width: 600,
                height: 40,
                marginTop: 10,
                marginBottom: 10,
              }}
              onChange={handleOnChange}
              value={location}
            />
          )}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginBottom: 10, marginTop: 10 }}
          onClick={() => api_call(location)}
        >
          Search
        </Button>
      </Grid>
    </div>
  );
}

export default WeatherSearch;
