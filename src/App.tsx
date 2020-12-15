import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { globalTheme } from "./util/theme";
import jwtDecode from "jwt-decode";
// pages
import home from "./pages/home/home";
import login from "./pages/login/login";
import signup from "./pages/signup/signup";
// components
import NavBar from "./components/Navbar/Navbar";
import AuthRoute from "./util/components/AuthRoute";

const theme = createMuiTheme(globalTheme);

let authenticated: boolean;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken: any = jwtDecode(token);
  console.log(decodedToken);
  if (decodedToken.exp * 1000 < Date.now()) {
    window.location.href = "/login";
    authenticated = false;
  } else {
    authenticated = true;
  }
}
else {
  authenticated = false;
}

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={home} />
              <AuthRoute
                path="/login"
                component={login}
                authenticated={authenticated}
              />
              <AuthRoute
                path="/signup"
                component={signup}
                authenticated={authenticated}
              />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
