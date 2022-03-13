import React, { useState, useRef } from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './ui/Theme';
import Header from '../components/ui/header';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../components/ui/footer';
import Home from './Home';
import Schedule from './Schedule';
import About from './About';
import Contact from './Contact';
import Memberships from './Memberships';
//import Scroll from 'react-scroll';
//import {Link} from 'react-scroll';
import { makeStyles } from '@material-ui/styles';
//import { HashLink as Link } from 'react-router-hash-link';

//const ScrollLink = Scroll.ScrollLink

const useStyles = makeStyles(theme => ({
  container: {
    height: "700px",
    width: "100%",
    justifyContent: "flex-start",
  },
  offset: {
    height: "5em"
  }
}));


function App() {

  const classes = useStyles();

  const homeRef = useRef()

  function handleHomeClick() {
    homeRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header homeRef={homeRef} onHomeClick={handleHomeClick} value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        <div id="home" className={classes.offset}></div>
        <Home ref={homeRef} />
        <div id="memberships" className={classes.offset}></div>
        <Memberships />
        <div id="schedule" className={classes.offset}></div>
        <Schedule />
        <div id="about" className={classes.offset}></div>
        <About />
        <div id="contact" className={classes.offset}></div>
        <Contact />

        <Footer value={value} setValue={setValue} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

/**
<Switch>
<Route exact={true} path="/" component={Home} />
<Route exact={true} path="/memberships" component={Memberships} />
<Route exact={true} path="/schedule" component={Schedule} />
<Route exact={true} path="/about" component={About} />
<Route exact={true} path="/contact" component={Contact} />
{/* <Route exact={true} path="/login" component={() => <div>Login</div>} /> }
</Switch>
*/