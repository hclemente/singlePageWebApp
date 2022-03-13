//import React, { useRef, forwardRef } from 'react';
import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/styles';
// import {useTheme} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import useMediaQuery from '@material-ui/core/useMediaQuery';
// import {Link} from 'react-router-dom';
import growthlogo from '../assets/growthAssets/Growth Final-05.png';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  container: {
    height: "700px",
    width: "100%",
    justifyContent: "center",
    backgroundColor: theme.palette.secondary.main
  },
  logo: {
    height: "275px",
    width: "275px"
  },
  header1: {
    ...theme.typography.header1,
  },
}));

const Home = forwardRef(({ onHomeClick }, ref) => {

  //const homeRef = useRef();

  const classes = useStyles();
  //const theme = useTheme();

  return (
    <Grid container direction="column" className={classes.container}>
      <Grid item>
        <Grid container direction="row" justify="space-evenly" alignItems="center">
          <Typography ref={ref} className={classes.header1} align="center">Welcome to Growth Martial Arts</Typography>
          <img alt="company logo" src={growthlogo} className={classes.logo} />
        </Grid>
      </Grid>
    </Grid>

  )
})

export default Home;