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
    //justifyContent: "flex-start",
    //justifyContent: "center",
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
    marginRight: "3em",
    marginLeft: "3em",
  }
}));

export default function Contact(props) {

  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid container justify="center">
      <Typography className={classes.header1} align="center">Contact Us</Typography>
      </Grid>
      <Grid container justify="center" >
      <Typography className={classes.header4} align="center">
      Interested in joining, or have any questions at all? You can call or text us at 415-993-2608, or email us at support@growthjiujitsu.com
      </Typography>
      </Grid>
    </Grid>

  )
}