import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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

export default function Addres(addres) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          {addres.addres.AddressInfo.Title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {addres.addres.AddressInfo.AddressLine1}, {addres.addres.AddressInfo.AddressLine2}
        </Typography>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {addres.addres.AddressInfo.StateOrProvince}
        </Typography>

        <Typography variant="body2" component="p">
            Distance: {addres.addres.AddressInfo.Distance.toFixed(2)} KM
        </Typography>
      </CardContent>
    </Card>
  );
}
