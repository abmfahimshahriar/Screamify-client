import React, { FormEvent } from "react";
import { RouteProps } from "react-router";
import AppIcon from "../../images/monkey-icon.png";
import axios from "axios";
import { Link } from "react-router-dom";
import { loginStyle} from "./loginStyle";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CircularProgress from '@material-ui/core/CircularProgress';

// Redux
import { connect } from "react-redux";
import {loginUser} from "../../redux/actions/userActions";

const styles = loginStyle;

type Props = {
  classes: any;
  history:any,
  loginUser: Function,
  user: any,
  UI: any
};

interface State {
  email: string;
  password: string;
  errors: any;
}

class login extends React.Component<Props & RouteProps, State> {
  state: State = {
    email: "",
    password: "",
    errors: {},
  };
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(this.state);
    const userData = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userData,this.props.history)
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  render() {
    const { classes, UI: {loading} } = this.props;
    const { errors } = this.state;
    return (
      <Grid container className={classes.form}>
        <Grid item sm />
        <Grid item sm>
          <img src={AppIcon} alt="monkey" className={classes.image} />
          <Typography variant="h2" className={classes.pageTitle}>
            Login
          </Typography>
          <form noValidate onSubmit={this.handleSubmit}>
            <TextField
              id="email"
              name="email"
              type="email"
              label="Email"
              className={classes.TextField}
              helperText={errors.email}
              error={errors.email ? true : false}
              value={this.state.email}
              onChange={this.handleChange}
              fullWidth
            />
            <TextField
              id="password"
              name="password"
              type="password"
              label="Password"
              className={classes.textField}
              helperText={errors.password}
              error={errors.password ? true : false}
              value={this.state.password}
              onChange={this.handleChange}
              fullWidth
            />
            {errors.general && (
              <Typography variant="body2" className={classes.customError}>
                {errors.general}
              </Typography>
            )}
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              disabled={loading}
            >
              Login
              {loading && (
                <CircularProgress size={30} className={classes.progress}/>
              )}
            </Button>
            <br/>
            <small>Don't have an account ? sign up <Link to="/signup">here</Link></small>
          </form>
        </Grid>
        <Grid item sm />
      </Grid>
    );
  }
}

const mapStateToProps = (state:any) => ({
  user: state.user,
  UI: state.UI
});

const mapActionsToProps = {
  loginUser
}
export default connect(mapStateToProps,mapActionsToProps)(withStyles(styles)(login));
