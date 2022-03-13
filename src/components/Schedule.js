import React from 'react';
import { makeStyles } from '@material-ui/styles';
// import {useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import {Link} from 'react-router-dom';
// import growthlogo from '../assets/growthAssets/Growth Final-05.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    height: "800px",
    width: "100%",
    justifyContent: "flex-start",
    backgroundColor: theme.palette.secondary.main
  },
  logo: {
    height: "275px",
    width: "275px"
  },
  header1: {
    ...theme.typography.header1,
    margin: "1em",
    marginTop: "2em"
  },
  header3: {
    fontWeight: "700",
    fontSize: "2em",
    margin: ".5em",
    textDecoration: "underline"
  },
  header4: {
    fontFamily: "Raleway",
    fontSize: "1em"
  }
}));

export default function Schedule(props) {

  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid container justify="center" >
          <Typography className={classes.header1} align="center">Schedule</Typography>
      </Grid>
      <Grid container justify="center" align="center" direction="row">
        {/* <Grid item direction="column">
          <Typography className={classes.header3} align="center">Monday</Typography>
        </Grid> */}
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Tuesday</Typography>
            <Typography className={classes.header4} align="center">BJJ - Open Mat <br/>5:30pm - 730pm</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Wednesday</Typography>
            <Typography className={classes.header4} align="center">BJJ - Gi <br/>5:30pm - 730pm</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Thursday</Typography>
            <Typography className={classes.header4} align="center">BJJ - Wrestling <br/>5:30pm - 730pm</Typography>
          </Grid>
        </Grid>
        {/* <Grid item>
          <Typography className={classes.header3} align="center">Friday</Typography>
        </Grid> */}
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Saturday</Typography>
            <Typography className={classes.header4} align="center">BJJ - Open Mat <br/>1:00pm - 3:00pm</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Sunday</Typography>
            <Typography className={classes.header4} align="center">BJJ - No Gi <br/>3:00pm - 5:00pm</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>

  )
}

