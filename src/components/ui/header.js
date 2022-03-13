import growthlogo from '../../assets/growthAssets/Growth Final-06.png'
import React, { useState, useEffect, forwardRef } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles';
//import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Button from '@material-ui/core/Button';
//import {Link} from 'react-router-dom';
// import Menu from '@material-ui/core/Menu';
// import MenuItem from '@material-ui/core/MenuItem';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useTheme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
//import { HashLink as Link } from 'react-router-hash-link';
//import Scroll from 'react-scroll';
import {Link} from 'react-scroll';
import Tab from '@material-ui/core/Tab';

//const ScrollLink = Scroll.ScrollLink

// import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      marginBottom: "2em"
    },
    [theme.breakpoints.down("xs")]: {
      marginBottom: "1.25em"
    },
  },
  logo: {
    height: "8em",
    [theme.breakpoints.down("md")]: {
      height: "7em"
    },
    [theme.breakpoints.down("xs")]: {
      height: "5.5em"
    },
  },
  logoContainer: {
    padding: 0,
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  tabContainer: {
    marginLeft: "auto",
    marginRight: "50px"
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px"
  },
  button: {
    ...theme.typography.login,
    borderRadius: "50px",
    marginLeft: "50px",
    marginRight: "25px",
    height: "45px",
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: "white",
    borderRadius: "0px"
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    "&:hover": {
      opacity: 1
    }
  },
  drawerIcon: {
    height: "50px",
    width: "50px"
  },
  drawerIconContainer: {
    marginLeft: "auto",
    "&:hover": {
      backgroundColor: "transparent"
    }
  },
  drawer: {
    backgroundColor: theme.palette.common.blue
  },
  drawerItem: {
    ...theme.typography.tab,
    color: "white",
    opacity: 0.7
  },
  drawerItemSelected: {
    "& .MuiListItemText-root": {
      opacity: 1
    }
  },
  drawerItemEstimate: {
    backgroundColor: theme.palette.common.orange
  },
  appbar: {
    zIndex: theme.zIndex.modal + 1
  },
  links: {
    marginRight: "25px"
  }
}));

//export default function Header(props) {

const Header = forwardRef((props) => {

  const classes = useStyles();

  const linkInfo = [
    {name: "Home", to: "home", activeIndex: 0},
    {name: "Memberships", to: "memberships", activeIndex: 1},
    {name: "Schedule", to: "schedule", activeIndex: 3},
    {name: "About", to: "about", activeIndex: 3},
    {name: "Contact", to: "contact", activeIndex: 3},
  ]

  const links = (
    <React.Fragment>
      {linkInfo.map((link, index) => (
          <Link
            key={`${link}${index}`}
            to={link.to}
            smooth={true}
            duration={500}
            //className={classes.tab}
          >
            <Tab
            key={`${link}${index}`}
            className={classes.tab}
            //component={Link}
            // to={route.link}
            //onClick={props.handleHomeClick}
            label={link.name}
          />
          </Link>
        )
      )}
    </React.Fragment>
  )


  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);


  const [openDrawer, setOpenDrawer] = useState(false);
  // const [anchorEl, setAnchorEl] = useState(null);
  // const [openMenu, setOpenMenu ] = useState(false);


  const handleChange = (e, newValue) => {
    props.setValue(newValue);
  };

  // const handleClick = (e) => {
  //   setAnchorEl(e.currentTarget);
  //   setOpenMenu(true);
  // }

  // const handleMenuItemClick = (e, i) => {
  //   setAnchorEl(null);
  //   setOpenMenu(false);
  //   props.setSelectedIndex(i);
  // }

  // const handleClose = (e) => {
  //   setAnchorEl(null);
  //   setOpenMenu(false);
  // }

  // eslint-disable-next-line
  // const menuOptions = [
  //   {name: "Memberships", link: "/memberships", activeIndex: 1, selectedIndex: 0},
  //   {name: "Kids Program", link: "/kids", activeIndex: 1, selectedIndex: 1},
  //   {name: "Adult Classes", link: "adults", activeIndex: 1, selectedIndex: 2},
  //   {name: "Family Plans", link: "/family", activeIndex: 1, selectedIndex: 3},
  // ];
  // const aboutMenu = [
  //   {name: "About Us", link: "/about", activeIndex: 3, selectedIndex: 0},
  //   {name: "History", link: "/history", activeIndex: 3, selectedIndex: 1}
  // ];
  // eslint-disable-next-line
  const routes = [
    { name: "Home", ref: props.homeRef, link: "/", activeIndex: 0 },
    {
      name: "Membership",
      ref: props.homeRef,
      link: "/memberships",
      activeIndex: 1,
      // ariaOwns: anchorEl ? "simple-menu" : undefined,
      // ariaPopup: anchorEl ? "true" : undefined,
      // mouseOver: event => handleClick(event)
    },
    { name: "Schedule", ref: props.homeRef, link: "/schedule", activeIndex: 2 },
    {
      name: "About Us",
      ref: props.homeRef,
      link: "/about",
      activeIndex: 3,
      // ariaOwns: anchorEl ? "about-menu" : undefined,
      // ariaPopup: anchorEl ? "true" : undefined,
      // mouseOver: event => handleClick(event)
    },
    { name: "Contact Us", ref: props.homeRef, link: "/contact", activeIndex: 4 }
  ];

  useEffect(() => {
    [...routes].forEach(route => {
      // [...menuOptions, ...aboutMenu, ...routes].forEach(route => {
      switch (window.location.pathname) {
        case `${route.link}`:
          if (props.value !== route.activeIndex) {
            props.setValue(route.activeIndex)
            if (route.selectedIndex && route.selectedIndex !== props.selectedIndex) {
              props.setSelectedIndex(route.selectedIndex);
            }
          }
          break;
        default:
          break;

      }
    });
    // }, [props.value, menuOptions, aboutMenu, props.selectedIndex, routes, props]);
  }, [props.value, props.selectedIndex, routes, props]);

  const tabs = (
    <React.Fragment>
      <Tabs
        value={props.value}
        onChange={handleChange}
        className={classes.tabContainer}
        indicatorColor="primary"
      >

        {links}

      </Tabs>
      {/* <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        component={Link}
        to={"/login"}
        label="Login"
      >
        Login
      </Button> */}
      {/* <Menu
        id="simple-menu"
        anchorEl={anchorEl}                                                                c
        open={openMenu}
        onClose={handleClose}
        classes={{paper: classes.menu}}
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
        style={{zIndex: 1302}} //one above app bar
        keepMounted //makes sure all menu items are always mounted on the DOM
      >
          {menuOptions.map((option, i) => (
            <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{root: classes.menuItem}}
            onClick={(event)=> {handleMenuItemClick(event, i); props.setValue(1); handleClose()}}
            selected={i === props.selectedIndex && props.value === 1}
          >
            {option.name}
            </MenuItem>
          ))}
      </Menu> */}
      {/* <Menu
        id="about-menu"
        anchorEl={anchorEl}                                                                c
        open={openMenu}
        onClose={handleClose}
        classes={{paper: classes.menu}}
        MenuListProps={{onMouseLeave: handleClose}}
        elevation={0}
        style={{zIndex: 1302}} //one above app bar
        keepMounted //makes sure all menu items are always mounted on the DOM
      >
          {aboutMenu.map((option, i) => (
            <MenuItem
            key={`${option}${i}`}
            component={Link}
            to={option.link}
            classes={{root: classes.menuItem}}
            onClick={(event)=> {handleMenuItemClick(event, i); props.setValue(3); handleClose()}}
            selected={i === props.selectedIndex && props.value === 3}
          >
            {option.name}
            </MenuItem>
          ))}
      </Menu> */}
    </React.Fragment>
  )

  const drawer = (
    <React.Fragment>
      <SwipeableDrawer disableBackdropTransition={!iOS}
        disableDiscovery={iOS}
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        onOpen={() => setOpenDrawer(true)}
        classes={{ paper: classes.drawer }}
      >
        <div className={classes.toolbarMargin} />
        <List disablePadding>
          {routes.map((route, index) => (
            <ListItem
              key={`${route}${route.activeIndex}`}
              selected={props.value === route.activeIndex}
              onClick={() => { setOpenDrawer(false); props.setValue(route.activeIndex) }}
              divider
              button
              component={Link}
              to={route.link}
              classes={{ selected: classes.drawerItemSelected }}
            >
              <ListItemText className={classes.drawerItem} disableTypography>
                {route.name}
              </ListItemText>
            </ListItem>
          ))}

          {/* <ListItem
          selected={props.value === 5}
          onClick={() => {setOpenDrawer(false); props.setValue(5)}}
          classes={{root: classes.drawerItemEstimate, selected: classes.drawerItemSelected}}
          divider
          button
          component={Link} to="/consultation"
        >
          <ListItemText
            classes={{root: classes.drawerItem}}
            disableTypography
          >
            Login
          </ListItemText>
        </ListItem> */}
        </List>
      </SwipeableDrawer>
      <IconButton className={classes.drawerIconContainer} onClick={() => setOpenDrawer(!openDrawer)} disableRipple>
        <MenuIcon className={classes.drawerIcon} />
      </IconButton>
    </React.Fragment>
  )

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary" className={classes.appbar}>
          <Toolbar disableGutters={true}>
            <Button
              component={Link}
              to="/"
              className={classes.logoContainer}
              onClick={() => props.setValue(0)}
              disableRipple
            >
              <img alt="company logo" src={growthlogo} className={classes.logo} />
            </Button>
            {matches ? drawer : tabs}
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  )
})

export default Header;

// {links/* {routes.map((route, index) => (
//   <Tab
//     key={`${route}${index}`}
//     className={classes.tab}
//     component={Link}
//     // to={route.link}
//     onClick={props.handleHomeClick}
//     label={route.name}
//     aria-owns={route.ariaOwns}
//     aria-haspopup={route.ariaPopup}
//     onMouseOver={route.mouseOver}
//   />
// )
// )} */}