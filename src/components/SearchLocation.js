import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { useState } from "react";

function WeatherSearch({ api_call }) {
  const [location, setLocation] = useState("");
  const handleOnChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <div>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField id="Location" label="Location" onChange={handleOnChange} style = {{width: 600,height: 40,marginTop:10 }} variant="filled"  />
        <br />
        <Button
          variant="contained"
          color="primary"
          style={{marginBottom:10,marginTop:10}}
          onClick={() => api_call(location)}
        >
          Search
        </Button>
      </Grid>
    </div>
  );
}

export default WeatherSearch;
