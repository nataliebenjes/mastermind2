import { createTheme } from '@mui/material/styles';


//https://mui.com/material-ui/customization/typography/

//rem font sizes gen shades: macOS: cmd+k cmd+g
export const shades = {
  red: {
    100: "#f6dcd7",
    200: "#edb8af",
    300: "#e59586",
    400: "#dc715e",
    500: "#d34e36",
    600: "#a93e2b",
    700: "#7f2f20",
    800: "#541f16",
    900: "#2a100b"
  },
  teal: {
      100: "#f0fbfa",
      200: "#e0f7f4",
      300: "#d1f3ef",
      400: "#c1efe9",
      500: "#b2ebe4",
      600: "#8ebcb6",
      700: "#6b8d89",
      800: "#475e5b",
      900: "#242f2e"
},
orange: {
  100: "#ffe9d2",
  200: "#ffd2a5",
  300: "#ffbc79",
  400: "#ffa54c",
  500: "#ff8f1f",
  600: "#cc7219",
  700: "#995613",
  800: "#66390c",
  900: "#331d06"
},
green: {
  100: "#e4f9ed",
  200: "#c9f4db",
  300: "#aeeeca",
  400: "#93e9b8",
  500: "#78e3a6",
  600: "#60b685",
  700: "#488864",
  800: "#305b42",
  900: "#182d21"
}
}


export const theme = createTheme({
  palette: {
    red: {
      main: shades.red[500]
    },
    teal: {
      dark: shades.teal[800],
      main: shades.teal[500],
      light: shades.teal[100]
    },
    orange: {
      dark: shades.orange[600],
      main: shades.red[400],
      light: shades.red[100]
    },
    green: {
      main: shades.green[500]
    },
  },
  typography: {
    fontFamily: ["Montserrat"].join(','),
    fontSize: 15,
    h1: {
      fontFamily: ["Rubik Doodle Shadow"].join(','),
      fontSize: 45,
    },
    h2: {
      fontFamily: ["Rubik Doodle Shadow"].join(','),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Rubik Doodle Shadow"].join(','),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Rubik Doodle Shadow"].join(','),
      fontSize: 14,
    },
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        // Include the Google Fonts link here
        '@import': 'url("https://fonts.googleapis.com/css2?family=Afacad:wght@400;500&family=Montserrat:wght@300&family=Rubik+Doodle+Shadow&display=swap")',
      },
    },
  },
});