import { createMuiTheme } from '@material-ui/core/styles';

const primaryColor = "#8bb182";
// const primaryColor = "#4e6876";
// const secondaryColor = "#e2d1a6";
const secondaryColor = "#FFFFFF";

export default createMuiTheme({
  palette: {
    common: {
      blue: `${primaryColor}`,
      orange: `${secondaryColor}`
    },
    primary: {
      main: `${primaryColor}`,
    },
    secondary: {
      main: `${secondaryColor}`
    }
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
     login: {
      fontFamily: "Goblin One",
      fontSize: "1rem",
      textTransform: "none",
      color: "black",
     },
     header1: {
      fontFamily: "Permanent Marker",
      fontWeight: "700",
      fontSize: "3.5em"
     },
     h2: {
       fontFamily: "Raleway",
       fontWeight: "700",
       fontSize: "2.5em"
     },
     h3: {
       fontFamily: "Raleway",
       fontSize: "2.5em",
     },
     h4: {
       fontFamily: "Raleway",
       fontSize: "1.75em"
     }
  }
});