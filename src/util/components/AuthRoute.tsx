import React from "react";
import { Route, Redirect } from "react-router-dom";
import login from "../../pages/login/login";
import singup from "../../pages/signup/signup";
type Props = {
  component: React.ReactNode;
  authenticated: boolean;
  path: string;
};

const AuthRoute: React.FC<Props> = ({ component, authenticated, path}) => {
    if(authenticated) {
        return <Redirect to="/"/>
    }
    else if(path === "/login") {
        return <Route exact path={path} component={login}/>
    }
    else {
        return <Route exact path={path} component={singup}/>
    }

};

export default AuthRoute;
