import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { globalTheme } from "./util/theme";
// pages
import home from "./pages/home/home";
import login from "./pages/login/login";
import signup from "./pages/signup/signup";
// components
import NavBar from "./components/Navbar";

const theme = createMuiTheme(globalTheme);

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
