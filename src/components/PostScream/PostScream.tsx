import React, { FormEvent, Fragment } from "react";
import { postScreamStyle } from "./postScreamStyle";
import MyButton from "../../util/components/MyButton";

// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CloseIcon from "@material-ui/icons/Close";
import CircularProgress from "@material-ui/core/CircularProgress";

// redux
import { connect } from "react-redux";
import { postScream, clearErrors } from "../../redux/actions/dataActions";
const styles = postScreamStyle;

type Props = {
  classes: any;
  postScream: Function;
  UI: any;
  clearErrors: Function;
};

interface State {
  open: boolean;
  body: string;
  errors: any;
}

class PostScream extends React.Component<Props, State> {
  state: State = {
    open: false,
    body: "",
    errors: {},
  };
  componentWillReceiveProps(nextProps: any) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors });
    }
    if (!nextProps.UI.errors && !nextProps.UI.loading) {
      this.setState({ body: "",open: false, errors: {} });
    }
  }
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.props.postScream();
    this.setState({ open: false, errors: {} });
  };
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newScream = {
      body: this.state.body,
    };
    this.props.postScream(newScream);
  };
  render() {
    const {
      classes,
      UI: { loading },
    } = this.props;
    const { errors } = this.state;
    return (
      <Fragment>
        <MyButton onClick={this.handleOpen} tip="Post a scream">
          <AddIcon />
        </MyButton>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          fullWidth
          maxWidth="sm"
        >
          <MyButton
            onClick={this.handleClose}
            tip="Close"
            tipClassName={classes.closeButton}
          >
            <CloseIcon />
          </MyButton>
          <DialogTitle>Post a new scream</DialogTitle>
          <DialogContent>
            <form onSubmit={this.handleSubmit}>
              <TextField
                id="body"
                name="body"
                type="text"
                multiline
                rows="3"
                label="Your scream"
                placeholder="Post scream with others"
                className={classes.TextField}
                helperText={errors.body}
                error={errors.body ? true : false}
                value={this.state.body}
                onChange={this.handleChange}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.submitButton}
                disabled={loading}
              >
                Submit
                {loading && (
                  <CircularProgress size={30} className={classes.progress} />
                )}
              </Button>
            </form>
          </DialogContent>
          <DialogActions></DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  UI: state.UI,
});

const mapActionsToProps = {
  postScream,
  clearErrors
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(PostScream));
