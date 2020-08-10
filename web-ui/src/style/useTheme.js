import { createMuiTheme } from '@material-ui/core/styles';
import { blue, purple, lightBlue } from '@material-ui/core/colors'

export const theme = createMuiTheme({
  typography: {
    fontFamily: `'Roboto', sans-serif;`, 
    h1: {
      fontFamily: `'Roboto', sans-serif;`, 
    }, 
    h2: {
      fontFamily: `'Roboto', sans-serif;`, 
    },
    h3: {
      fontFamily: `'Roboto', sans-serif;`, 
    }, 
    h4: {
      fontFamily: `'Roboto', sans-serif;`, 
    }, 
    h5: {
      fontFamily: `'Roboto', sans-serif;`, 
    }, 
    h6: {
      fontFamily: `'Roboto', sans-serif;`, 
    }
  }, 
    palette: {
      primary: {
        main: blue[600],
        light: lightBlue[500]
      },
      secondary: {
        main: purple[500],
      },
    },
  });

  export default theme 