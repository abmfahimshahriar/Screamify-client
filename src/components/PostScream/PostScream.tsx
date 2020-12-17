import React, {Fragment} from "react";
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
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
// redux
import { connect } from "react-redux";

const styles = postScreamStyle;

type Props = {
  classes: any;
};

class PostScream extends React.Component<Props> {
  render() {
    return (
      <MyButton tip="Post a scream">
        <AddIcon />
      </MyButton>
    );
  }
}

const mapStateToProps = (state: any) => ({});

const mapActionsToProps = {};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(PostScream));
