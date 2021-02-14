import React from "react";
import { Button, TextField, Grid } from "@material-ui/core";
import { useState } from "react";

function WeatherSearch({ api_call }) {
  const [location, setLocation] = useState("");
  const handleOnChange = (event) => {
    setLocation(event.target.value);
  };
  return (
    <>
      <Grid container direction="column" justify="center" alignItems="center">
        <TextField id="Location" label="Location" onChange={handleOnChange} />
        <br />
        <Button
          variant="contained"
          color="primary"
          onClick={() => api_call(location)}
        >
          Search
        </Button>
      </Grid>
    </>
  );
}

export default WeatherSearch;
