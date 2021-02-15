import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { useState, useEffect, useRef } from "react";
let timer;

function WeatherSearch({ api_call, wrapperRef }) {
  const [location, setLocation] = useState("");

  const handleOnChange = (event) => {
    setLocation(event.target.value);
    timer && clearTimeout(timer);
    timer = setTimeout(async function () {
      const url = `https://us1.locationiq.com/v1/search.php?key=pk.b85addb584eaefbe9e93b63a33a9a3e9&q=${event.target.value}&countrycodes=in&format=json&limit=10`;
      const res = await fetch(url);
      const data = await res.json();
      const pokemon = data;
      setOptions(pokemon);
      setDisplay(true);
    }, 500);
  };
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);

  const updatePokeDex = (poke) => {
    setLocation(poke);
    document.getElementById("Location").value = poke;
    setOptions([]);
  };

  const handleClickOutside = (event) => {
    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {
      setDisplay(false);
    }
  };
  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField
          id="Location"
          label="Location"
          onChange={handleOnChange}
          style={{ width: 600, height: 40, marginTop: 10, marginBottom: 10 }}
          variant="filled"
        />
        {options.length > 0 && (
          <div className="autoContainer">
            {options.map((value, i) => {
              return (
                <div
                  onClick={() => updatePokeDex(value.display_name)}
                  className="option"
                  key={i}
                  tabIndex="0"
                >
                  <span>{value.display_name}</span>
                </div>
              );
            })}
          </div>
        )}
        <br />
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
