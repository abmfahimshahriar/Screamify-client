import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import MyButton from "../../../util/components/MyButton";
import PostScream from "../../Scream/PostScream/PostScream";
// MUI imports
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import HomeIcon from "@material-ui/icons/Home";
import NotificationsIcon from "@material-ui/icons/Notifications";

type Props = {
  authenticated: boolean;
};

class Navbar extends React.Component<Props> {
  render() {
    const { authenticated } = this.props;
    return (
      <AppBar>
        <Toolbar className="nav-container">
          {authenticated ? (
            <Fragment>
              <PostScream/>
              <Link to="/">
                <MyButton tip="Home">
                  <HomeIcon  />
                </MyButton>
              </Link>
              <MyButton tip="Notifications">
                <NotificationsIcon />
              </MyButton>
            </Fragment>
          ) : (
            <Fragment>
              <Button color="inherit" component={Link} to="/">
                Home
              </Button>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <Button color="inherit" component={Link} to="/signup">
                Signup
              </Button>
            </Fragment>
          )}
        </Toolbar>
      </AppBar>
    );
  }
}

const mapStateToProps = (state: any) => ({
  authenticated: state.user.authenticated,
});

export default connect(mapStateToProps)(Navbar);
