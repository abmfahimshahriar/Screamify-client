import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { globalTheme } from "./util/theme";
import jwtDecode from "jwt-decode";
import axios from "axios";
// pages
import home from "./pages/home/home";
import login from "./pages/login/login";
import signup from "./pages/signup/signup";
// components
import NavBar from "./components/Navbar/Navbar";
import AuthRoute from "./util/components/AuthRoute";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";
import { SET_AUTHENTICATED } from "./redux/types";
import { logoutUser, getUserData } from "./redux/actions/userActions";


const theme = createMuiTheme(globalTheme);

;
const token = localStorage.FBIdToken;
if (token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logoutUser());
    window.location.href = "/login";
  } else {
    store.dispatch({type : SET_AUTHENTICATED});
    axios.defaults.headers.common["Authorization"] = token;
    store.dispatch(getUserData());
  }
}

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <NavBar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={home} />
                <AuthRoute
                  path="/login"
                  component={login}
                />
                <AuthRoute
                  path="/signup"
                  component={signup}
                />
              </Switch>
            </div>
          </Router>
        </Provider>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
