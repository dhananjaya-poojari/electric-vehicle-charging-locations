import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 0,
  },
});

export default function Addres({result,color}) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined" style={{backgroundColor: color }}>
      <div className={classes.details}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {result.AddressInfo.Title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {result.AddressInfo.AddressLine1}, {result.AddressInfo.AddressLine2}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {result.AddressInfo.StateOrProvince}, {result.AddressInfo.Postcode}
        </Typography>

        <Typography variant="body2" component="p">
            Distance: {result.AddressInfo.Distance.toFixed(2)} KM
        </Typography>
      </CardContent>
      </div>
      <div className={classes.details}>
      <CardContent>
      </CardContent>
      </div>
    </Card>
  );
}
