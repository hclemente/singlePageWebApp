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
    fontSize: "1.25em",
    margin: ".5em",
    textDecoration: "underline"
  },
  header4: {
    fontFamily: "Raleway",
    fontWeight: "700",
    fontSize: "1em"
  },
  signup: {
    fontWeight: "700",
    fontSize: "1.25em",
    marginTop: "2em"
  }
}));

export default function Schedule(props) {

  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid container justify="center" >
          <Typography className={classes.header1} align="center">Membership Options</Typography>
      </Grid>
      <Grid container justify="center" align="center" direction="row">
        {/* <Grid item direction="column">
          <Typography className={classes.header3} align="center">Monday</Typography>
        </Grid> */}
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Drop In Fee</Typography>
            <Typography className={classes.header4} align="center">$25</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Monthly Membership<br/>(Grandfathered)</Typography>
            <Typography className={classes.header4} align="center">$115/mo</Typography>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Monthly Membership<br/>(Full Price)</Typography>
            <Typography className={classes.header4} align="center">$185/mo</Typography>
          </Grid>
        </Grid>
        {/* <Grid item>
          <Typography className={classes.header3} align="center">Friday</Typography>
        </Grid> */}
        <Grid item>
          <Grid container direction="column">
            <Typography className={classes.header3} align="center">Yearly Membership</Typography>
            <Typography className={classes.header4} align="center">$2220</Typography>
          </Grid>
        </Grid>

      </Grid>
      <Grid item>
          <Grid container direction="column">
            <Typography className={classes.signup} align="center">Sign up at <br/>www.growthjiujitsu.com!</Typography>
          </Grid>
        </Grid>
    </Grid>

  )
}

// {/* <Grid container direction="column" className={classes.container}>
// <Grid container justify="center" >
//     <Typography className={classes.header1} align="center">Membership</Typography>
// </Grid>
// <Grid container justify="center" align="center" direction="row">
//   <Grid item >
//     <Grid container direction="column">
//       <Typography className={classes.header3} align="center">Drop In Fee</Typography>
//       <Typography className={classes.header4} align="center">$25</Typography>
//     </Grid>
//   </Grid>
//   <Grid item>
//     <Grid container direction="column">
//       <Typography className={classes.header3} align="center">Monthly Membership (Grandfathered Sale!)</Typography>
//       <Typography className={classes.header4} align="center">$115</Typography>
//     </Grid>
//   </Grid>
//   <Grid item>
//     <Grid container direction="column">
//       <Typography className={classes.header3} align="center">Monthly Membership (Full Price)</Typography>
//       <Typography className={classes.header4} align="center">$185</Typography>
//     </Grid>
//   </Grid>
//   <Grid item>
//     <Grid container direction="column">
//       <Typography className={classes.header3} align="center">Yearly Membership</Typography>
//       <Typography className={classes.header4} align="center">$2,220</Typography>
//     </Grid>
//   </Grid>
// </Grid>
// {/* <Grid container justify="center" >
//     <Typography className={classes.signup} align="center">Sign up at www.growthjiujitsu.com!</Typography>
// </Grid> */}
// </Grid> */}