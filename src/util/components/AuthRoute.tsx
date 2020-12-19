import React from "react";
import { Route, Redirect } from "react-router-dom";
import login from "../../pages/login/login";
import singup from "../../pages/signup/signup";

//redux
import { connect } from "react-redux";

type Props = {
  component: React.ReactNode;
  path: string;
  authenticated: boolean;
};

const AuthRoute: React.FC<Props> = ({ component, authenticated, path }) => {
  if (authenticated) {
    return <Redirect to="/" />;
  } else if (path === "/login") {
    return <Route exact path={path} component={login} />;
  } else if (path === "/users/login") {
    return <Route exact path={path} component={login} />;
  } else {
    return <Route exact path={path} component={singup} />;
  }
};

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});
export default connect(mapStateToProps)(AuthRoute);
