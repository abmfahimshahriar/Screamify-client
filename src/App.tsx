import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
// pages
import home from "./pages/home";
import login from "./pages/login";
import signup from "./pages/signup";
// components
import NavBar from "./components/Navbar";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#33c9dc',
      main: '#00bcd4',
      dark: '#008394',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff6333',
      main: '#ff3d00',
      dark: '#b22a00',
      contrastText: '#fff'
    }
  },
  // typography: {
  //   useNextVariants: true
  // },
})

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={home} />
            <Route exact path="/login" component={login} />
            <Route exact path="/signup" component={signup} />
          </Switch>
        </div>
      </Router>
      </MuiThemeProvider>
      
    </div>
  );
}

export default App;
