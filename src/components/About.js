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
    margin: ".5em"
  },
  header4: {
    fontFamily: "Raleway",
    fontSize: "1em",
    marginRight: "2.5em",
    marginLeft: "2.5em",
    flexWrap: "wrap"
  }
}));

export default function About(props) {

  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid container justify="center">
      <Typography className={classes.header1} align="center">About Us</Typography>
      </Grid>
      <Grid container >
      <Typography className={classes.header4} align="center">
      Growth Brazilian Jiu Jitsu is a martial arts club started by three friends who wanted to create a fun and welcoming environment for people to come and share their love for an art that continues to positively impact people around the world.
      </Typography>
      </Grid>
    </Grid>

  )
}