import React, { FormEvent } from "react";
import { commentFormStyle } from "./commentFormStyle";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
// redux
import { connect } from "react-redux";
import { submitComment } from "../../../redux/actions/dataActions";
const styles = commentFormStyle;

type Props = {
  classes: any;
  screamId: string;
  submitComment: Function;
  authenticated: boolean;
  UI: any;
};
interface State {
  body: string;
  errors: any;
}
class CommentForm extends React.Component<Props, State> {
  state: State = {
    body: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "", errors: {} });
    }
  };
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newComment = {
      body: this.state.body,
    };
    this.props.submitComment(this.props.screamId, newComment);
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  render() {
    const { classes, authenticated } = this.props;
    const { errors } = this.state;
    const commentFormMarkup = authenticated ? (
      <Grid item sm={12} style={{ alignItems: "center" }}>
        <form onSubmit={this.handleSubmit}>
          <TextField
            name="body"
            type="text"
            label="comment on scream"
            error={errors.comment ? true : false}
            helperText={errors.comment}
            value={this.state.body}
            onChange={this.handleChange}
            fullWidth
            className={classes.textField}
          />
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            className={classes.submitButton}
          >
            Submit
          </Button>
        </form>
        <hr className={classes.visibleSeparator} />
      </Grid>
    ) : null;
    return commentFormMarkup;
  }
}

const mapStateToProps = (state: any) => ({
  UI: state.UI,
  authenticated: state.user.authenticated,
});

const mapActionsToProps = {
  submitComment,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(CommentForm));
