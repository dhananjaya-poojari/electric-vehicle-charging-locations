import React from 'react'
import { TextField } from "@material-ui/core";
import { Autocomplete } from "@material-ui/lab";

const Input = ({options,location,handleOnChange,handleOnSelect}) => {
    return (
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={options.map((option) => option.display_name)}
          onChange={(event, value) => {
            handleOnSelect(value);
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
    )
}

export default Input
