import React from 'react';
// import {Link} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// import Hidden from '@material-ui/core/Hidden';
import facebook from '../../assets/facebook.svg';
import twitter from '../../assets/twitter.svg';
import instagram from '../../assets/instagram.svg';
import footerAdornment from '../../assets/growthAssets/Growth Final-03.png';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: "relative"
  },
  adornment: {
    width: "13em",
    [theme.breakpoints.down("md")]: {
      width: "11em"
    },
    [theme.breakpoints.down("xs")]: {
      width: "9em"
    },
    verticalAlign: "bottom",
  },
  mainContainer: {
    position: "absolute"
  },
  link: {
    color: "white",
    fontFamily: "Arial",
    fontSize: "0.75rem",
    fontWeight: "bold",
    textDecoration: "none"
  },
  gridItem: {
    margin: "3em"
  },
  icon: {
    height: "4em",
    width: "4em",
    [theme.breakpoints.down("xs")]: {
      height: "2.5em",
      width: "2.5em"
    }
  },
  socialContainer: {
    position: "absolute",
    marginTop: "-6em",
    right: "1.5em",
    [theme.breakpoints.down("xs")]: {
      right: "0.6em"
    }
  }
}))

export default function Footer() {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      {/* <Hidden mdDown>
      <Grid container justify="center" className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/" className={classes.link}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/memberships" className={classes.link}>
              Memberships
            </Grid>
            <Grid item component={Link} to="/kids" className={classes.link}>
              Kids Program
            </Grid>
            <Grid item component={Link} to="/adults" className={classes.link}>
              Adults Classes
            </Grid>
            <Grid item component={Link} to="/family" className={classes.link}>
              Family Plans
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/schedule" className={classes.link}>
              Schedule
            </Grid>
            <Grid item component={Link} to="/schedule" className={classes.link}>
              Vision
            </Grid>
            <Grid item component={Link} to="/schedule" className={classes.link}>
              Technology
            </Grid>
            <Grid item component={Link} to="/schedule" className={classes.link}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/about" className={classes.link}>
              About Us
            </Grid>
            <Grid item component={Link} to="/about" className={classes.link}>
              History
            </Grid>
            <Grid item component={Link} to="/about" className={classes.link}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction="column" spacing={2}>
            <Grid item component={Link} to="/contact" className={classes.link}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      </Hidden> */}
      <img alt="black decorative slash" src={footerAdornment} className={classes.adornment}/>
      <Grid container justify="flex-end" spacing={2} className={classes.socialContainer}>
        <Grid item component={"a"} href="https://www.facebook.com/growthjiujitsu/" rel="noopener noreferrer" target="_blank">
          <img alt="facebook logo" src={facebook} className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="https://www.twitter.com" rel="noopener noreferrer" target="_blank">
          <img alt="twitter logo" src={twitter} className={classes.icon}/>
        </Grid>
        <Grid item component={"a"} href="https://www.instagram.com" rel="noopener noreferrer" target="_blank">
          <img alt="instagram logo" src={instagram} className={classes.icon}/>
        </Grid>
      </Grid>
    </footer>
  );
}