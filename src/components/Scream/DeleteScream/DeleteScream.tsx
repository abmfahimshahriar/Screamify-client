import React, { Fragment } from "react";
import MyButton from "../../../util/components/MyButton";
import { deleteScreamStyle } from "./deleteScreamStyle";
// MUI imports
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
// redux
import { connect } from "react-redux";
import { deleteScream } from "../../../redux/actions/dataActions";
const styles = deleteScreamStyle;

type Props = {
  classes: any;
  deleteScream: Function;
  screamId: string;
};

class DeleteScream extends React.Component<Props> {
  state = {
    open: false,
  };
  handleOpen = () => {
    this.setState({ open: true });
  };
  handleClose = () => {
    this.setState({ open: false });
  };
  deleScream = () => {
    this.props.deleteScream(this.props.screamId);
    this.setState({ open: false });
  };
  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <MyButton
          tip="Delete scream"
          onClick={this.handleOpen}
          btnClassName={classes.deleteButton}
        >
          <DeleteOutline color="secondary" />
        </MyButton>
        <Dialog open={this.state.open} onClose={this.handleClose} fullWidth maxWidth="sm">
            <DialogTitle>
                Are you sure you want to delete this scream ?
            </DialogTitle>
            <DialogActions>
                <Button onClick={this.handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={this.deleScream} color="secondary">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {
  deleteScream,
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(DeleteScream));
